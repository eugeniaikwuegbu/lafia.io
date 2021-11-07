import { JSONSchema } from 'objection';

export const PersonnelValidation: JSONSchema = {
  type: 'object',
  title: 'Personnel Schema Validation',
  required: [
    'doctor',
    'pharmacist',
    'pharmacy_technician',
    'dentist', 'dental_technician', 'nurse',
    'midwife', 'lab_technician', 'lab_scientist',
    'health_records_officer', 'comm_health_officer',
    'comm_health_extension_worker',
    'junior_comm_health_extension_worker',
    'environment_health_officer', 'health_attendant'
  ],
  properties: {
    doctor: { type: 'number' },
    pharmacist: { type: 'number'},
    pharmacy_technician: { type: 'number'},
    dentist: { type: 'number'},
    dental_technician: { type: 'number'},
    nurse: { type: 'number'},
    midwife: { type: 'number'},
    lab_technician: { type: 'number'},
    lab_scientist: { type: 'number'},
    health_records_officer: { type: 'number'},
    comm_health_officer: { type: 'number'},
    comm_health_extension_worker: { type: 'number'},
    junior_comm_health_extension_worker: { type: 'number'},
    environment_health_officer: { type: 'number'},
    health_attendant: { type: 'number'}
  }
}
