import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('log')
  log(): void {
    this.appService.logMessage(); // useClass
  }

  @Get('config')
  getConfig(): string {
    return this.appService.getConfig(); // useValue
  }

  @Get('users')
  getUsers(): Promise<any> {
    return this.appService.getUsers(); // useFactory
  }
}
