
import { SeqgenService } from './seqgen.service';
import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class SeqgenController {
  constructor(private readonly seqgenService: SeqgenService) {}

  @Get("tracking-number")
    @ApiOperation({ summary: 'Get Serhafen tracking number for a client and country' }) // operation summary
    @ApiResponse({ status: 200, description: 'Return tracking number successully' }) // response description
    getSHFTN(
      @Query('clientId') clientId: string, // Extract query parameter 'includeDetails'
      @Query('pais') destnCtry: string, // Extract path parameter 'id'
      @Query('cbla') crossBorderType?: string, // Extract query parameter 'includeDetails'
      @Query('prefix') prefix?: string, // Optional query parameter 'version'
    ): Promise<string> {
    return this.seqgenService.generateTrackingNumberWithPrefix(clientId, destnCtry, crossBorderType, prefix);
  }
}
