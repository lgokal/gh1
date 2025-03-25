// client-sequence.entity.ts
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class ClientSequenceEntity {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  clientPrefix: string;

  @Column({ type: 'integer', default: 0 })
  lastSequenceNumber: number;
}