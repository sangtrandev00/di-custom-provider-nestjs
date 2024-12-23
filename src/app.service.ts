import { Inject, Injectable } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';

@Injectable()
export class AppService {

  constructor(@Inject('Logger') private readonly logger: LoggerService, @Inject('CONFIG') private readonly config: any) { }

  logMessage() {
    this.logger.log('Hello, Custom Provider!');
  }

  getHello(): string {
    return 'Hello World!';
  }

  getConfig(): string {
    return this.config;
  }
}
