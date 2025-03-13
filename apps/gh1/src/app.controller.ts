import { Controller, Get } from '@nestjs/common';
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
}
