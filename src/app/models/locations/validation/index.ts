import { JSONSchema } from 'objection';

export const LocationValidation: JSONSchema = {
  type: 'object',
  title: 'Location Schema Validation',
  properties: {
    state: { type: 'string' },
    lga: { type: 'string' },
    ward: { type: 'string'},
    location: { type: 'string'},
    postal_address: { type: 'string'},
    longitude: { type: 'number'},
    latitude: { type: 'number'},
  }
}
