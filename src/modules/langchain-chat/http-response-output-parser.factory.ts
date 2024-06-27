import { HttpResponseOutputParser } from 'langchain/output_parsers';

export const httpResponseOutputParserFactory = {
  provide: HttpResponseOutputParser,
  useFactory: () => {
    return new HttpResponseOutputParser();
  },
};
