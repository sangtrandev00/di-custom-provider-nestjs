import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, {
    provide: 'Logger',
    useClass: LoggerService
  },
    {
      provide: 'CONFIG',
      useValue: { appName: 'MyApp', version: '1.0.0' },
    },

  ],
  exports: ['Logger']
})
export class AppModule { }

// 1. User class
// 2. Use value
