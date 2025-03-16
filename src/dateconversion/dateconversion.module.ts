import { Module } from '@nestjs/common';
import { DateConversionService } from './dateconversion.service';
import { DateconversionController } from './dateconversion.controller';

@Module({
  providers: [DateConversionService],
  controllers: [DateconversionController]
})
export class DateconversionModule {}
