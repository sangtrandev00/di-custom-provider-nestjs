import { Inject, Injectable } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';

@Injectable()
export class AppService {

  constructor(@Inject('Logger') private readonly logger: LoggerService, @Inject('CONFIG') private readonly config: any, @Inject('DATABASE_CONNECTION') private readonly db: any) { }

  logMessage() {
    this.logger.log('Hello, Custom Provider!');
  }

  getHello(): string {
    return 'Hello World!';
  }

  getConfig(): string {
    return this.config;
  }

  async getUsers() {

    console.log("db", this.db);
    const result = await this.db.query('SELECT * FROM users'); // Simulating a query
    console.log(result);
    return result;
  }
}
