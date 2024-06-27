import { Test, TestingModule } from '@nestjs/testing';
import { LangchainChatController } from './langchain-chat.controller';
import { LangchainChatService } from './langchain-chat.service';

describe('LangchainChatController', () => {
  let controller: LangchainChatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LangchainChatController],
      providers: [LangchainChatService],
    }).compile();

    controller = module.get<LangchainChatController>(LangchainChatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
