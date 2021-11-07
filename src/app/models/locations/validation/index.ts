import { JSONSchema } from 'objection';

export const LocationValidation: JSONSchema = {
  type: 'object',
  title: 'Location Schema Validation',
  required: ['state', 'lg', 'ward', 'location',
    'postal_address', 'longitude', 'latitude' ],
  properties: {
    state: { type: 'string' },
    lg: { type: 'string' },
    ward: { type: 'string'},
    location: { type: 'string'},
    postal_address: { type: 'number'},
    longitude: { type: 'string'},
    latitude: { type: 'string'},
  }
}
