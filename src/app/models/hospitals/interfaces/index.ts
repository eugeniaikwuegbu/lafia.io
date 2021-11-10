import { IBase } from '../../base';

export interface IHospital extends IBase {
 facility_code: string;
 state_unique_id: string;
 registration_number: string;
 facility_name: string;
 alternate_name: string;
 start_date: string;
 ownership: string;
 ownership_type: string;
 facility_level: string;
 facility_level_option: string;
 days_of_operation: string;
 hours_of_operation: string;
 status_id: string;
 contact_id: string;
 personnel_id: string;
 location_id: string;
 service_id: string;
}

export interface IFindHospital extends IBase {
  facility_code?: string;
  state_unique_id?: string;
  registration_number?: string;
  facility_name?: string;
  alternate_name?: string;
  start_date?: string;
  ownership?: string;
  ownership_type?: string;
  facility_level?: string;
  facility_level_option?: string;
  days_of_operation?: string;
  hours_of_operation?: string;
  status_id?: string;
  contact_id?: string;
  personnel_id?: string;
  location_id?: string;
  service_id?: string;
}
