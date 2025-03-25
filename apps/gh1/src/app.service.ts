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


  genSFTN(destnCtry, crossBorderType, clientId, prefix ): string {
    const pfx = prefix? prefix :'SH';
    //const currentDate = Date.now().toLocaleString();

    // generate a random 9 digit number - this can be sepearted into buckets of ranges per client based on rules
    // there should be a mechanism to check if this 9 digit number is repeated - maybe DB or seq generator
    const r9dn = Math.floor(Math.random() * 900000000) + 100000000;
    

    //const trkNum = Math.floor(Math.random()).toString().padStart(9, '0'); // Ensure 9 digits with leading zeros
    return `${pfx}${crossBorderType}${clientId}${r9dn}${destnCtry}`.toUpperCase();
  }
}
