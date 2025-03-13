import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class AppService {
  constructor(
    @InjectPinoLogger(AppService.name) private readonly logger: PinoLogger,
  ) {}

  getHello(): string {
    this.logger.info('JBD!11!');
    this.logger.debug('JSR!11!');
    this.logger.warn('HHM!11!');
    this.logger.error('SSHHMS!11!');
    return 'Hello World!';
  }
}
