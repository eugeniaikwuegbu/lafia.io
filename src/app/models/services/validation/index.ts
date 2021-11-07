import { JSONSchema } from 'objection';

export const ServiceValidation: JSONSchema = {
  type: 'object',
  title: 'Service Schema Validation',
  required: ['out_patient', 'in_patient', 'medical',
    'surgical', 'obsterics_and_gynae', 'pediatrics',
    'dental', 'specific_clinical', 'bed', 'onsite_lab',
    'onsite_imaging', 'onsite_pharmacy', 'mortuary', 'ambulance'

  ],
  properties: {
    out_patient: { type: 'boolean' },
    in_patient: { type: 'boolean' },
    medical: { type: 'string'},
    surgical: { type: 'string' },
    obsterics_and_gynae: { type: 'string' },
    pediatrics: {type: 'string'},
    dental: { type: 'string' },
    specific_clinical: { type: 'string' },
    bed: {type: 'number'},
    onsite_lab: { type: 'boolean' },
    onsite_imaging: {type: 'boolean'},
    onsite_pharmacy: { type: 'boolean' },
    mortuary: { type: 'boolean' },
    ambulance: {type: 'boolean'},
  }
}
