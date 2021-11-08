import 'reflect-metadata';
import TYPES from './types';
import { Container } from 'inversify';
import {
  ContactRepository, StatusRepository,
  HospitalLocationRepository, HospitalRepository,
  HospitalServiceRepository, LocationRepository,
  PersonnelRepository, ServiceRepository, FileUploadRepository,
} from '../repositories';
import {
  ContactService, HospitalLocationService,
  HospitalService, HospitalServiceService,
  LocationService, PersonnelService,
  ServicesService, StatusService, FileUploadService
} from "../services";
import {UploadController} from "../controllers/uploadFile";

// import {} from '../controllers';
// import {} from '../services';

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

container
  .bind<FileUploadService>(TYPES.FileUploadService)
  .to(FileUploadService)
  .inSingletonScope();

container
  .bind<HospitalServiceService>(TYPES.HospitalServiceService)
  .to(HospitalServiceService)
  .inSingletonScope();

container
  .bind<HospitalLocationService>(TYPES.HospitalLocationService)
  .to(HospitalLocationService)
  .inSingletonScope();

// repositories
container
  .bind<ContactRepository>(TYPES.ContactRepository)
  .to(ContactRepository)
  .inSingletonScope();

container
  .bind<HospitalLocationRepository>(TYPES.HospitalLocationRepository)
  .to(HospitalLocationRepository)
  .inSingletonScope();

container
  .bind<HospitalRepository>(TYPES.HospitalRepository)
  .to(HospitalRepository)
  .inSingletonScope();

container
  .bind<HospitalServiceRepository>(TYPES.HospitalServiceRepository)
  .to(HospitalServiceRepository)
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

container
  .bind<FileUploadRepository>(TYPES.FileUploadRepository)
  .to(FileUploadRepository)
  .inSingletonScope();

export default container;
