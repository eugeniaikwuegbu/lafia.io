import { JSONSchema } from 'objection';

export const PersonnelValidation: JSONSchema = {
  type: 'object',
  title: 'Personnel Schema Validation',
  properties: {
    doctors: { type: 'number' },
    pharmacists: { type: 'number'},
    pharmacy_technicians: { type: 'number'},
    dentists: { type: 'number'},
    dental_technicians: { type: 'number'},
    nurses: { type: 'number'},
    midwifes: { type: 'number'},
    nurses_or_midwifes: { type: 'number'},
    lab_technicians: { type: 'number'},
    lab_scientists: { type: 'number'},
    health_records_officers: { type: 'number'},
    community_health_officers: { type: 'number'},
    community_health_extension_workers: { type: 'number'},
    junior_community_health_extension_workers: { type: 'number'},
    environment_health_officers: { type: 'number'},
    health_attendants: { type: 'number'}
  }
}
