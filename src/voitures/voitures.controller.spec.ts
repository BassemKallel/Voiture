import { Test, TestingModule } from '@nestjs/testing';
import { VoituresController } from './voitures.controller.js';
import { VoituresService } from './voitures.service.js';

describe('VoituresController', () => {
  let controller: VoituresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoituresController],
      providers: [VoituresService],
    }).compile();

    controller = module.get<VoituresController>(VoituresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
