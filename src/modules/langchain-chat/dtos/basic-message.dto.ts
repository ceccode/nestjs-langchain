/**
 * Data Transfer Object for basic message processing.
 *
 * This class defines the data structure and validation rules for handling a basic
 * user query. It utilizes decorators from the 'class-validator' library to enforce
 * validation constraints on the data received from client requests. This ensures
 * that the user query adheres to the expected format and content requirements.
 *
 * @class BasicMessageDto
 *
 * @property user_query - The query string provided by the user.
 *                        It must be a non-empty string.
 */
import { IsNotEmpty, IsString, validateSync } from 'class-validator';

export class BasicMessageDto {
  @IsNotEmpty()
  @IsString()
  user_query: string;

  // Static factory method to create an instance from a string
  static fromString(query: string): BasicMessageDto {
    const instance = new BasicMessageDto();
    instance.user_query = query;

    // Validate the instance
    const errors = validateSync(instance);
    if (errors.length > 0) {
      throw new Error(`Validation failed: ${errors}`);
    }

    return instance;
  }
}
