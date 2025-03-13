import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import { MvwrapperModule } from 'apps/mvwrapper/src/mvwrapper.module';

@Module({
  imports: [
    MvwrapperModule,
    LoggerModule.forRoot({ pinoHttp: { transport: { target: 'pino-pretty', options: { singleLine: true } } } })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
