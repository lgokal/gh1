import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get hello message' }) // operation summary
  @ApiResponse({ status: 200, description: 'Return hello message' }) // response description
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("tn/:pais")
  @ApiOperation({ summary: 'Get Serhafen tracking number' }) // operation summary
  @ApiResponse({ status: 200, description: 'Return tracking number' }) // response description
  getSHFTN(
    @Param('pais') destnCtry: string, // Extract path parameter 'id'
    @Query('cbla') crossBorderType: string, // Extract query parameter 'includeDetails'
    @Query('clientId') clientId: string, // Extract query parameter 'includeDetails'
    @Query('prefix') prefix?: string, // Optional query parameter 'version'
  
  ): string {
    return this.appService.genSFTN(destnCtry, crossBorderType, clientId, prefix);
  }
}
