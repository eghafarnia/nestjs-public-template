import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWorking(): string {
    return 'Your application is working!';
  }
}
