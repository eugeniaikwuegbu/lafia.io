import { IBase } from '../../base';

export interface IPersonnel extends IBase {
 doctor: number;
 pharmacist: number;
 pharmacy_technician: number;
 dentist: number;
 dental_technician: number;
 nurse: number;
 midwife: number;
 lab_technician: number;
 lab_scientist: number;
 health_records_officer: number;
 comm_health_officer: number;
 comm_health_extension_worker: number;
 junior_comm_health_extension_worker: number;
 environment_health_officer: number;
 health_attendant: number;
}

export interface IFindPersonnel extends IBase {
  doctor?: number;
  pharmacist?: number;
  pharmacy_technician?: number;
  dentist?: number;
  dental_technician?: number;
  nurse?: number;
  midwife?: number;
  lab_technician?: number;
  lab_scientist?: number;
  health_records_officer?: number;
  comm_health_officer?: number;
  comm_health_extension_worker?: number;
  junior_comm_health_extension_worker?: number;
  environment_health_officer?: number;
  health_attendant?: number;
}
