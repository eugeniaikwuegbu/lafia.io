import { JSONSchema } from 'objection';

export const HospitalServiceValidation: JSONSchema = {
  type: 'object',
  title: 'Hospital Service Schema Validation',
  required: ['service_id', 'hospital_id'],
  properties: {
    service_id: { format: 'uuid' },
    hospital_id: { format: 'uuid' },
  }
}
