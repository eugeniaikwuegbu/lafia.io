const TYPES = {
  // controllers
  UploadController: Symbol('UploadController'),
  // StatusController: Symbol('StatusController'),
  // ContactController: Symbol('ContactController'),
  // ServiceController: Symbol('ServiceController'),
  // PersonnelController: Symbol('PersonnelController'),
  // HospitalController: Symbol('HospitalServiceController'),
  // HospitalServiceController: Symbol('HospitalServiceController'),
  // LocationServiceController: Symbol('LocationServiceController'),
  // HospitalLocationController: Symbol('HospitalLocationController'),


  // service
  StatusService: Symbol('StatusService'),
  ContactService: Symbol('ContactService'),
  ServicesService: Symbol('ServicesService'),
  HospitalService: Symbol('HospitalService'),
  LocationService: Symbol('LocationService'),
  PersonnelService: Symbol('PersonnelService'),
  FileUploadService: Symbol('FileUploadService'),
  HospitalServiceService: Symbol('HospitalServiceService'),
  HospitalLocationService: Symbol('HospitalLocationService'),


  // repositories
  StatusRepository: Symbol('StatusRepository'),
  ContactRepository: Symbol('ContactRepository'),
  ServiceRepository: Symbol('ServiceRepository'),
  HospitalRepository: Symbol('HospitalRepository'),
  LocationRepository: Symbol('LocationRepository'),
  PersonnelRepository: Symbol('PersonnelRepository'),
  FileUploadRepository: Symbol('FileUploadRepository'),
  HospitalServiceRepository: Symbol('HospitalServiceRepository'),
  HospitalLocationRepository: Symbol('HospitalLocationRepository'),
};


export default TYPES;
