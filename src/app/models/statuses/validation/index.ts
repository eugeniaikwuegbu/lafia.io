import { JSONSchema } from 'objection';

export const StatusValidation: JSONSchema = {
  type: 'object',
  title: 'Status Schema Validation',
  required: ['operational', 'registration', 'license'],
  properties: {
    operational: { type: 'string' },
    registration: { type: 'string' },
    license: {type: 'string'},
  }
}
