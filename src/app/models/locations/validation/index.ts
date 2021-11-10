import { JSONSchema } from 'objection';

export const LocationValidation: JSONSchema = {
  type: 'object',
  title: 'Location Schema Validation',
  required: ['state', 'lga', 'ward', 'location',
    'postal_address', 'longitude', 'latitude' ],
  properties: {
    state: { type: 'string' },
    lga: { type: 'string' },
    ward: { type: 'string'},
    location: { type: 'string'},
    postal_address: { type: 'number'},
    longitude: { type: 'string'},
    latitude: { type: 'string'},
  }
}
