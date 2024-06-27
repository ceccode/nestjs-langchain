import { StringOutputParser } from '@langchain/core/output_parsers';

export const stringOutputParserFactory = {
  provide: StringOutputParser,
  useFactory: () => {
    return new StringOutputParser();
  },
};
