import { JSONSchema } from 'objection';

export const BankDetailValidation: JSONSchema = {
  type: 'object',
  title: 'BankDetail Schema Validation',
  required: ['bank_name', 'account_number', 'bank_code', 'bank_id', 'user_id'],
  properties: {
    bank_name: { type: 'string' },
    account_number: { type: 'string' },
    account_name: { type: 'string' },
    bank_code: { type: 'string' },
    bank_id: { type: 'number' },
    user_id: { format: 'uuid' },
    recipient_code: { type: 'string' },
  }
}


