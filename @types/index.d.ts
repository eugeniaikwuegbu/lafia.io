import { QueryParams } from "../src/app/middlewares";

declare global {
  namespace Express {
    interface Request {
      extractQueryParams: QueryParams;
    }
  }
}
