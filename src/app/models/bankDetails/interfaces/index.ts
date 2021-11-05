import { IBase } from '../../base';

export interface IBankDetail extends IBase {
  bank_name: string;
  account_number: string;
  account_name: string;
  bank_code: string;
  bank_id?: string;
  user_id: string;
  recipient_code?: string;
}
export interface IFindBankDetail extends IBase {
  bank_name?: string;
  account_number?: string;
  account_name?: string;
  bank_code?: string;
  bank_id?: string;
  user_id?: string;
  recipient_code?: string;
}
