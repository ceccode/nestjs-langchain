import { Module } from '@nestjs/common';
import { LangchainChatService } from './langchain-chat.service';
import { LangchainChatController } from './langchain-chat.controller';
import { chatOpenAIFactory } from './chat-openai.factory';
import { httpResponseOutputParserFactory } from './http-response-output-parser.factory';
import { stringOutputParserFactory } from './string-response-output-parser.factory';

@Module({
  controllers: [LangchainChatController],
  providers: [
    LangchainChatService,
    chatOpenAIFactory,
    httpResponseOutputParserFactory,
    stringOutputParserFactory,
  ],
  exports: [LangchainChatService],
})
export class LangchainChatModule {}
