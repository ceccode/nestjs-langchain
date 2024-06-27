import { BasicMessageDto } from './basic-message.dto';
import { validateSync } from 'class-validator';

describe('BasicMessageDto', () => {
  describe('fromString', () => {
    it('should create a BasicMessageDto instance from a valid string', () => {
      const validQuery = 'What is the weather today?';
      const dto = BasicMessageDto.fromString(validQuery);

      expect(dto).toBeInstanceOf(BasicMessageDto);
      expect(dto.user_query).toBe(validQuery);
    });

    it('should throw an error for an invalid string (empty string)', () => {
      const invalidQuery = '';

      expect(() => {
        BasicMessageDto.fromString(invalidQuery);
      }).toThrow(/Validation failed:/);
    });

    it('should throw an error for a non-string input', () => {
      const invalidQuery: any = 12345; // Not a string

      expect(() => {
        BasicMessageDto.fromString(invalidQuery);
      }).toThrow(/Validation failed:/);
    });

    it('should validate the instance correctly', () => {
      const validQuery = 'Is it going to rain tomorrow?';
      const dto = BasicMessageDto.fromString(validQuery);

      const errors = validateSync(dto);
      expect(errors.length).toBe(0);
    });

    it('should not create an instance if the validation fails', () => {
      const invalidQuery = '';

      expect(() => {
        BasicMessageDto.fromString(invalidQuery);
      }).toThrow();
    });
  });
});
