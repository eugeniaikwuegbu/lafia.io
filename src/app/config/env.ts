if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

export interface IEnv {
  port: any;
  environment: string;
  pg_port: number;
  pg_host: string;
  pg_password: string;
  pg_user: string;
  pg_dbname: string;
  pg_test_port: number;
  pg_test_host: string;
  pg_test_password: string;
  pg_test_user: string;
  pg_test_dbname: string;
  jwt_secrete_key: string;
  merchant_id: string;
  developer_code: string;
  crypto_key_pair_secret: string;
  crypto_signature_secret: string;
  cloudinary_url: string;
  paystack_secret_key: string;
  paystack_api: string;
  twilio_account_sid: string;
  twilio_auth_token: string;
  twilio_phone_number: string;
  email_address: string;
  email_password: string;
  twilio_messaging_service_sid: string;
}

const config: IEnv = {
  port: process.env.PORT,
  environment: process.env.NODE_ENV as string,
  pg_port: Number(process.env.POSTGRES_PORT),
  pg_password: process.env.POSTGRES_PASSWORD as string,
  pg_host: process.env.POSTGRES_HOST as string,
  pg_dbname: process.env.POSTGRES_DBNAME as string,
  pg_user: process.env.POSTGRES_USER as string,
  pg_test_port: Number(process.env.POSTGRES_TEST_PORT),
  pg_test_password: process.env.POSTGRES_TEST_PASSWORD as string,
  pg_test_host: process.env.POSTGRES_TEST_HOST as string,
  pg_test_dbname: process.env.POSTGRES_TEST_DBNAME as string,
  pg_test_user: process.env.POSTGRES_TEST_USER as string,
  jwt_secrete_key: process.env.JWT_SECRETE_KEY as string,
  developer_code: process.env.DEVELOPER_CODE as string,
  merchant_id: process.env.MERCHANT_ID as string,
  crypto_key_pair_secret: process.env.CRYPTO_KEY_PAIR_SECRET as string,
  crypto_signature_secret: process.env.CRYPTO_SIGNATURE_SECRET as string,
  cloudinary_url: process.env.CLOUDINARY_URL as string,
  paystack_secret_key: process.env.PAYSTACK_SECRET_KEY as string,
  paystack_api: process.env.PAYSTACK_API as string,
  twilio_account_sid: process.env.TWILIO_ACCOUNT_SID as string,
  twilio_auth_token: process.env.TWILIO_AUTH_TOKEN as string,
  twilio_phone_number: process.env.TWILIO_PHONE_NUMBER as string,
  email_address: process.env.EMAIL_ADDRESS as string,
  email_password: process.env.EMAIL_PASSWORD as string,
  twilio_messaging_service_sid: process.env.TWILIO_MESSAGING_SERVICE_SID as string,
};

export class Env {
  static all() {
    return config;
  }
}
