import { Test, TestingModule } from '@nestjs/testing';
import { SeqgenController } from './seqgen.controller';
import { SeqgenService } from './seqgen.service';

describe('SeqgenController', () => {
  let seqgenController: SeqgenController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SeqgenController],
      providers: [SeqgenService],
    }).compile();

    seqgenController = app.get<SeqgenController>(SeqgenController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(seqgenController.getSHFTN("01", "CL")).toBeDefined();
    });
  });
});
