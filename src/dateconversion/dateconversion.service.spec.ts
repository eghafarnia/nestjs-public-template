import { Test, TestingModule } from '@nestjs/testing';
import { DateconversionService } from './dateconversion.service';

describe('DateconversionService', () => {
  let service: DateconversionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DateconversionService],
    }).compile();

    service = module.get<DateconversionService>(DateconversionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
