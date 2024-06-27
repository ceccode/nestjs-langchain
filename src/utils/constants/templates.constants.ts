/**
 * Enum for template strings used in chat interactions.
 *
 * @enum CHAT_TEMPLATES
 *
 * @member BASIC_CHAT_TEMPLATE - A template for basic chat interactions, instructing
 *                               the AI to provide concise responses as a cybersecurity
 *                               specialist. This template is designed for
 *                               straightforward, single-turn dialogues.
 */

export enum CHAT_TEMPLATES {
  BASIC_CHAT_TEMPLATE = `
    You are an expert cybersecurity specialist. Provide a concise response.
    
    User: {input}
    AI:
  `,
}
