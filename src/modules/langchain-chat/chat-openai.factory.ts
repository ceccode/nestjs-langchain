import { ChatOpenAI } from '@langchain/openai';
import { openAI } from './../../utils/constants/openAI.constants';

export const chatOpenAIFactory = {
  provide: ChatOpenAI,
  useFactory: () => {
    return new ChatOpenAI({
      temperature: +openAI.BASIC_CHAT_OPENAI_TEMPERATURE,
      modelName: openAI.GPT_3_5_TURBO_1106.toString(),
    });
  },
};
