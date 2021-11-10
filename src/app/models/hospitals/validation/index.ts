import { JSONSchema } from 'objection';

export const HospitalValidation: JSONSchema = {
  type: 'object',
  title: 'Hospital Schema Validation',
  required: [
    'facility_code',
    'state_unique_id',
    'registration_number',
    'facility_name',
    'alternate_name',
    'start_date',
    'ownership',
    'ownership_type',
    'facility_level',
    'facility_level_option',
    'days_of_operation',
    'hours_of_operation',
    'status_id',
    'contact_id',
    'personnel_id',
    'location_id',
    'service_id'
  ],
  properties: {
    facility_code: { type: 'string' },
    state_unique_id: { type: 'string' },
    registration_number: { type: 'string'},
    facility_name: { type: 'string' },
    alternate_name: { type: 'string' },
    start_date: {type: 'string'},
    ownership: { type: 'string' },
    ownership_type: {type: 'string'},
    facility_level: { type: 'string' },
    facility_level_option: { type: 'string' },
    days_of_operation: {type: 'string'},
    hours_of_operation: { type: 'string' },
    status_id: {format: 'uuid'},
    contact_id: { format: 'uuid' },
    personnel_id: { format: 'uuid' },
    location_id: { format: 'uuid' },
    service_id: { format: 'uuid' },
  }
}
