import { Test, TestingModule } from '@nestjs/testing';
import { MvwrapperController } from './mvwrapper.controller';
import { MvwrapperService } from './mvwrapper.service';

describe('MvwrapperController', () => {
  let mvwrapperController: MvwrapperController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MvwrapperController],
      providers: [MvwrapperService],
    }).compile();

    mvwrapperController = app.get<MvwrapperController>(MvwrapperController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mvwrapperController.getHello()).toBe('Hello World!');
    });
  });
});
