import { Module } from '@nestjs/common';
import { SeqgenController } from './seqgen.controller';
import { SeqgenService } from './seqgen.service';

@Module({
  imports: [],
  controllers: [SeqgenController],
  providers: [SeqgenService],
  exports: [SeqgenService]
})
export class SeqgenModule {}
