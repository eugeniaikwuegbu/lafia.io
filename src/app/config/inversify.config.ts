import 'reflect-metadata';
import TYPES from './types';
import { Container } from 'inversify';
import {
  ContactRepository, StatusRepository,
  HospitalRepository, LocationRepository,
  PersonnelRepository, ServiceRepository
} from '../repositories';
import {
  ContactService, HospitalService,
  LocationService, PersonnelService,
  ServicesService, StatusService
} from "../services";
import {UploadController} from '../controllers';

const container = new Container();

// controllers
container
  .bind<UploadController>(TYPES.UploadController)
  .to(UploadController)
  .inSingletonScope();



// services
container
  .bind<StatusService>(TYPES.StatusService)
  .to(StatusService)
  .inSingletonScope();

container
  .bind<ContactService>(TYPES.ContactService)
  .to(ContactService)
  .inSingletonScope();

container
  .bind<ServicesService>(TYPES.ServicesService)
  .to(ServicesService)
  .inSingletonScope();

container
  .bind<HospitalService>(TYPES.HospitalService)
  .to(HospitalService)
  .inSingletonScope();

container
  .bind<LocationService>(TYPES.LocationService)
  .to(LocationService)
  .inSingletonScope();

container
  .bind<PersonnelService>(TYPES.PersonnelService)
  .to(PersonnelService)
  .inSingletonScope();


// repositories
container
  .bind<ContactRepository>(TYPES.ContactRepository)
  .to(ContactRepository)
  .inSingletonScope();

container
  .bind<HospitalRepository>(TYPES.HospitalRepository)
  .to(HospitalRepository)
  .inSingletonScope();


container
  .bind<LocationRepository>(TYPES.LocationRepository)
  .to(LocationRepository)
  .inSingletonScope();

container
  .bind<PersonnelRepository>(TYPES.PersonnelRepository)
  .to(PersonnelRepository)
  .inSingletonScope();

container
  .bind<ServiceRepository>(TYPES.ServiceRepository)
  .to(ServiceRepository)
  .inSingletonScope();

container
  .bind<StatusRepository>(TYPES.StatusRepository)
  .to(StatusRepository)
  .inSingletonScope();


export default container;
