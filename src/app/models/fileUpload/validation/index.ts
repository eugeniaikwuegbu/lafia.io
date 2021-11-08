import { JSONSchema } from 'objection';

export const FileUploadValidation: JSONSchema = {
  type: 'object',
  title: 'File Upload Schema Validation',
  required: ['file'],
  properties: {
    file: { type: 'string' },
  }
}
