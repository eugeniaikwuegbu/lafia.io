import { JSONSchema } from 'objection';

export const ContactValidation: JSONSchema = {
  type: 'object',
  title: 'Contact Schema Validation',
  properties: {
    phone_number: { type: 'string' },
    alternate_number: { type: 'string' },
    email: {type: 'string'},
    website: {type: 'string'},
  }
}
