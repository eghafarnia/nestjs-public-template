import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DateconversionModule } from './dateconversion/dateconversion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //متغیرهای محیطی را به صورت سراسری فعال می کند
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true, // لود خودکار entity ها
        synchronize: true, // فقط برای توسعه - دیتابیس را سینک می‌کند
      }),
    }),
    DateconversionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
