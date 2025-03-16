import { Test, TestingModule } from '@nestjs/testing';
import { DateconversionController } from './dateconversion.controller';

describe('DateconversionController', () => {
  let controller: DateconversionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DateconversionController],
    }).compile();

    controller = module.get<DateconversionController>(DateconversionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
