import { Test, TestingModule } from '@nestjs/testing';
import { LangchainChatService } from './langchain-chat.service';

describe('LangchainChatService', () => {
  let service: LangchainChatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LangchainChatService],
    }).compile();

    service = module.get<LangchainChatService>(LangchainChatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
