import { IBase } from '../../base';

export interface IContact extends IBase {
 phone_number: string;
 alternate_number: string;
 email: string;
 website: string;
}

export interface IFindContact extends IBase {
  phone_number?: string;
  alternate_number?: string;
  email?: string;
  website?: string;
}
