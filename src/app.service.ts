import { Inject, Injectable } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { Logger2Service } from './logger/logger2.service';
import { NotificationService } from './notifications/notifications.service';

@Injectable()
export class AppService {

  constructor(@Inject('Logger') private readonly logger: LoggerService, @Inject('CONFIG') private readonly config: any, @Inject('DATABASE_CONNECTION') private readonly db: any, @Inject('AppLogger') private readonly logger2: Logger2Service, @Inject('NOTIFICATION_SERVICE') private readonly notifier: NotificationService) { }

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

  logMessage2() {
    this.logger2.log('Logger 2 service')
  }

  sendNotification() {
    this.notifier.sendMessage('Hello from NotificationService!');
  }
}
