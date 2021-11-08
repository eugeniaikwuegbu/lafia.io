import { JSONSchema } from 'objection';
import { Schema, Table } from '../../../database';
import { BaseModel } from '../base';
import { IFileUpload } from './interfaces';
import { FileUploadValidation } from './validation';

export class FileUploadModel extends BaseModel implements IFileUpload {
  public file: IFileUpload['file'];

  static get tableName(): string {
    return `${Schema.lafiaService}.${Table.fileUpload}`;
  }

  static get jsonSchema(): JSONSchema {
    return FileUploadValidation;
  }
}
