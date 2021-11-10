const TYPES = {
  // controllers
  UploadController: Symbol('UploadController'),


  // service
  StatusService: Symbol('StatusService'),
  ContactService: Symbol('ContactService'),
  ServicesService: Symbol('ServicesService'),
  HospitalService: Symbol('HospitalService'),
  LocationService: Symbol('LocationService'),
  PersonnelService: Symbol('PersonnelService'),


  // repositories
  StatusRepository: Symbol('StatusRepository'),
  ContactRepository: Symbol('ContactRepository'),
  ServiceRepository: Symbol('ServiceRepository'),
  HospitalRepository: Symbol('HospitalRepository'),
  LocationRepository: Symbol('LocationRepository'),
  PersonnelRepository: Symbol('PersonnelRepository'),
};


export default TYPES;
