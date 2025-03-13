import { Controller, Get } from '@nestjs/common';
import { MvwrapperService } from './mvwrapper.service';

@Controller('mvw')
export class MvwrapperController {
  constructor(private readonly mvwrapperService: MvwrapperService) {}

  @Get()
  getHello(): string {
    return this.mvwrapperService.getHello();
  }
}
