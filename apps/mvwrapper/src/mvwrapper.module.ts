import { Module } from '@nestjs/common';
import { MvwrapperController } from './mvwrapper.controller';
import { MvwrapperService } from './mvwrapper.service';

@Module({
  imports: [],
  controllers: [MvwrapperController],
  providers: [MvwrapperService],
})
export class MvwrapperModule {}
