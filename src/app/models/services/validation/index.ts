import { JSONSchema } from 'objection';

export const ServiceValidation: JSONSchema = {
  type: 'object',
  title: 'Service Schema Validation',
  properties: {
    out_patient: { type: 'boolean' },
    in_patient: { type: 'boolean' },
    medical: { type: 'string'},
    surgical: { type: 'string' },
    obsterics_and_gynae: { type: 'string' },
    pediatrics: {type: 'string'},
    dental: { type: 'string' },
    specific_clinical: { type: 'string' },
    beds: {type: 'number'},
    onsite_lab: { type: 'boolean' },
    onsite_imaging: {type: 'boolean'},
    onsite_pharmacy: { type: 'boolean' },
    mortuary: { type: 'boolean' },
    ambulance: {type: 'boolean'},
  }
}
