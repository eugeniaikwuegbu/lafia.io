import { JSONSchema } from 'objection';

export const StatusValidation: JSONSchema = {
  type: 'object',
  title: 'Status Schema Validation',
  properties: {
    operational: { type: 'string' },
    registration: { type: 'string' },
    license: {type: 'string'},
  }
}
