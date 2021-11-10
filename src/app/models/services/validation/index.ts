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
    out_patient: { type: 'string' },
    in_patient: { type: 'string' },
    medical: { type: 'string'},
    surgical: { type: 'string' },
    obsterics_and_gynae: { type: 'string' },
    pediatrics: {type: 'string'},
    dental: { type: 'string' },
    specific_clinical: { type: 'string' },
    bed: {type: 'number'},
    onsite_lab: { type: 'string' },
    onsite_imaging: {type: 'string'},
    onsite_pharmacy: { type: 'string' },
    mortuary: { type: 'string' },
    ambulance: {type: 'string'},
  }
}
