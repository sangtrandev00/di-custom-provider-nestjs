import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';
import { createConnection } from './database/connection-database';
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

  ],
  exports: ['Logger']
})
export class AppModule { }

// 1. User class
// 2. Use value
