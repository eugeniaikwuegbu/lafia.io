import { IBase } from '../../base';

export interface IStatus extends IBase {
 operational: string;
 registration: string;
 license: string;
}

export interface IFindStatus extends IBase {
  operational?: string;
  registration?: string;
  license?: string;
}
