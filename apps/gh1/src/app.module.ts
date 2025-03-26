import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import { MvwrapperModule } from 'apps/mvwrapper/src/mvwrapper.module';
import { SeqgenModule } from 'apps/seqgen/src/seqgen.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MvwrapperModule,
    SeqgenModule,
    LoggerModule.forRoot({ pinoHttp: { transport: { target: 'pino-pretty', options: { singleLine: true } } } }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Or your PostgreSQL server address
      port: 5432,       // Default PostgreSQL port
      username: 'postgres', // Your PostgreSQL username
      password: 'devi11', // Your PostgreSQL password
      database: 'postgres', // The name of your database
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
