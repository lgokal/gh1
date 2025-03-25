// tracking-number.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientSequenceEntity } from './client-seq.entity'; // Create this entity

@Injectable()
export class SeqgenService {
  constructor(
    @InjectRepository(ClientSequenceEntity)
    private clientSequenceRepository: Repository<ClientSequenceEntity>,
  ) {}

  async generateScopedSequenceNumber(clientPrefix: string): Promise<string> {
    return this.clientSequenceRepository.manager.transaction(async (transactionalEntityManager) => {
      const clientSequence = await transactionalEntityManager.findOne(ClientSequenceEntity, {
        where: { clientPrefix },
      });

      let nextSequenceNumber: number;

      if (clientSequence) {
        nextSequenceNumber = clientSequence.lastSequenceNumber + 1;
        await transactionalEntityManager.update(
          ClientSequenceEntity,
          { clientPrefix },
          { lastSequenceNumber: nextSequenceNumber },
        );
      } else {
        nextSequenceNumber = 1; // Start the sequence from 1 for a new client
        const newClientSequence = this.clientSequenceRepository.create({
          clientPrefix,
          lastSequenceNumber: nextSequenceNumber,
        });
        await transactionalEntityManager.save(newClientSequence);
      }

      // Format the sequence number as a 9-digit string with leading zeros
      const formattedSequenceNumber = nextSequenceNumber.toString().padStart(9, '0');
      return formattedSequenceNumber;
    });
  }
}
