import { Injectable } from '@nestjs/common';

@Injectable()
export class MvwrapperService {
  getHello(): string {
    return 'Hello World!';
  }
}
