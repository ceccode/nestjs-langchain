import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { LangchainChatModule } from './modules/langchain-chat/langchain-chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    LangchainChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
