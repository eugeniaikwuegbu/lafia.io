import {Request, Response, NextFunction} from 'express';

export interface QueryParams {
  pagination: Pagination;
  filters: Filters;
}

export interface Pagination {
  page?: number;
  size?: number;
}

export interface Filters {
  lga?: string;
  facility_name?: string;
  facility_level?: string;
  state?: string;
  ward?: string;
  ownership?: string;
  license?: string;
  operational?: string;
  registration?: string;
  service_type?: boolean;
  service_category?: string;
}

export function extractQueryParams() {
  return function (req: Request, res: Response, next: NextFunction) {
    const pagination: Pagination = {size: Number(req.query.size), page: Number(req.query.page)};

    const {
      state, lga, ward, ownership,
      facility_name, facility_level,
      service_category, license,
      registration, operational,
    } = req.query

    const type = req.query.service_type;

    const service_type = type?.toLowerCase() === 'true' ||
      type?.toLowerCase() === 'yes';

    const filters: Filters = {
      state, lga, ward, ownership,
      facility_name, facility_level,
      service_category, service_type,
      license, registration, operational,
    }

    const queryParams: QueryParams = { pagination, filters };

    req.extractQueryParams = queryParams;

    next();
  }
}

