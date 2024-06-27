/**
 * @class LangchainChatService
 * @decorator Injectable - Indicates that the class can be injected as a service.
 *
 * @method chat - Handles the user's chat message. It uses a template to structure
 *                the prompt, sends it to the OpenAI model, and formats the
 *                output into a readable response. In case of errors, it throws an
 *                HttpException with the appropriate status and message.
 */

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BasicMessageDto } from './dtos/basic-message.dto';
import { PromptTemplate } from '@langchain/core/prompts';
import { ChatOpenAI } from '@langchain/openai';
// import { HttpResponseOutputParser } from 'langchain/output_parsers';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { CHAT_TEMPLATES } from './../../utils/constants/templates.constants';

@Injectable()
export class LangchainChatService {
  constructor(
    private readonly chatOpenAI: ChatOpenAI,
    private readonly outputParser: StringOutputParser,
  ) {}

  async chat(basicMessageDto: BasicMessageDto) {
    try {
      const prompt = PromptTemplate.fromTemplate(
        CHAT_TEMPLATES.BASIC_CHAT_TEMPLATE,
      );
      const chain = prompt.pipe(this.chatOpenAI).pipe(this.outputParser);

      const response = await chain.invoke({
        input: basicMessageDto.user_query,
      });

      return response;

      // return
      //   Object.values(response)
      //     .map((code) => String.fromCharCode(code))
      //     .join(''),
      // );
    } catch (e: unknown) {
      console.log(e);
      throw new Error();
      // throw new HttpException(
      //   {},
      //   HttpStatus.INTERNAL_SERVER_ERROR,
      // );
    }
  }
}
