import { ApiProperty } from '@nestjs/swagger';
import { Timestamp } from 'typeorm';

export class SeqgenResponse {
  @ApiProperty()
  trackingNumber: string;

  @ApiProperty()
  timestamp: Timestamp;
}

export class NotFoundResponse{
    @ApiProperty()
    messsage: string;
}