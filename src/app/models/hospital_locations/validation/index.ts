import { JSONSchema } from 'objection';

export const HospitalLocationValidation: JSONSchema = {
  type: 'object',
  title: 'Hospital Location Schema Validation',
  required: ['hospital_id', 'location_id'],
  properties: {
    hospital_id: { format: 'uuid' },
    location_id: { format: 'uuid' },
  }
}
