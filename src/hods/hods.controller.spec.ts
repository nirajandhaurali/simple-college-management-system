import { Test, TestingModule } from '@nestjs/testing';
import { HodsController } from './hods.controller';
import { HodsService } from './hods.service';

describe('HodsController', () => {
  let controller: HodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HodsController],
      providers: [HodsService],
    }).compile();

    controller = module.get<HodsController>(HodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
