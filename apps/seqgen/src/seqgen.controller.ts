import { Controller, Get } from '@nestjs/common';
import { SeqgenService } from './seqgen.service';

@Controller()
export class SeqgenController {
  constructor(private readonly seqgenService: SeqgenService) {}

  @Get()
  getHello(): string {
    return this.seqgenService.getHello();
  }
}
