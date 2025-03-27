
import { SeqgenService } from './seqgen.service';
import { Controller, Get, Query, Headers } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBadRequestResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@Controller()
export class SeqgenController {
  constructor(private readonly seqgenService: SeqgenService) {}

  @Get("tracking-number")
    @ApiOperation({ summary: 'Get Serhafen tracking number for a client and country' }) // operation summary
    @ApiResponse({ status: 200, description: 'Return tracking number successully' }) // response description
    @ApiBadRequestResponse({ description: 'Client mentioned for the country has not been found - config needs to be requested to add this'})
    @ApiNotFoundResponse({description: 'Client mentioned for the country has not been found - config needs to be requested to add this'})
    getSHFTN(
      @Query('clientId') clientId: string, // Extract query parameter 'includeDetails'
      @Query('pais') destnCtry: string, // Extract path parameter 'id'
      @Query('cbla') crossBorderType?: string, // Extract query parameter 'includeDetails'
      @Query('prefix') prefix?: string, // Optional query parameter 'version'
      @Headers('sameReq') sameReq?: string
    ): Promise<string> {
    return this.seqgenService.generateTrackingNumberWithPrefix(clientId, destnCtry, crossBorderType, prefix, !!sameReq);
  }
}
