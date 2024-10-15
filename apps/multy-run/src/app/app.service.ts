import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    console.log('Getting data');
    return { message: 'Hello API' };
  }

  getSecureData(): { message: string } {
    console.log('Getting secure data');
    return { message: 'Secure Hello API' };
  }
}
