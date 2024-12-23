import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';
import { createConnection } from './database/connection-database';
import { Logger2Service } from './logger/logger2.service';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'Logger',
      useClass: LoggerService
    },
    {
      provide: 'CONFIG',
      useValue: { appName: 'MyApp', version: '1.0.0' },
    },
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async () => {
        const connection = await createConnection(); // Giả định hàm này kết nối database
        return connection;
      },
    },
    Logger2Service, // Tại sao lại phải import thêm ở đây (Để khai báo thêm cho App.module biết rằng Logger2Service hiện tại)
    {
      provide: 'AppLogger',
      useExisting: Logger2Service, // Tái sử dụng LoggerService
    },
  ],
  exports: ['Logger']
})
export class AppModule { }

// 1. User class
// 2. Use value
