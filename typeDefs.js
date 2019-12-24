const { gql } = require("apollo-server");

const typeDefs = gql`
  type Location {
    location: [ServiceLocation]
  }

  type ServiceItemArray {
    service: [ServiceItem]
  }

  type ServiceItemWithCallingPointsArray {
    service: [ServiceItemWithCallingPoints]
  }

  type Messages {
    message: [String]
  }

  #####  Data Types  #####

  type CoachData {
    coachClass: [String]
    loading: [String]
    number: [String]
    toilet: [ToiletAvailabilityType]
  }

  type StationBoard {
    generatedAt: String
    locationName: String
    crs: String
    filterLocationName: String
    filtercrs: String
    filterType: String
    nrccMessages: [Messages]
    platformAvailable: String
    areServicesAvailable: String
    trainServices: ServiceItemArray
  }

  type StationBoardWithDetails {
    generatedAt: String
    locationName: String
    crs: String
    filterLocationName: String
    filtercrs: String
    filterType: String
    nrccMessages: [Messages]
    platformAvailable: String
    areServicesAvailable: String
    trainServices: ServiceItemWithCallingPointsArray
  }

  type DeparturesBoard {
    generatedAt: String
    locationName: String
    crs: String
    filterLocationName: String
    filtercrs: String
    filterType: String
    nrccMessages: [Messages]
    platformAvailable: String
    areServicesAvailable: String
    departures: [DepartureItem]
  }

  type DeparturesBoardWithDetails {
    generatedAt: String
    locationName: String
    crs: String
    filterLocationName: String
    filtercrs: String
    filterType: String
    nrccMessages: [Messages]
    platformAvailable: String
    areServicesAvailable: String
    departures: [DepartureItemWithCallingPoints]
  }

  type ServiceItem {
    rsid: String
    origin: [Location]
    destination: [Location]
    currentOrigins: [Location]
    currentDestinations: [Location]
    sta: String
    eta: String
    std: String
    etd: String
    platform: String
    operator: String
    operatorCode: String
    isCircularRoute: String
    isCancelled: String
    filterLocationCancelled: String
    serviceType: String
    length: String
    detachFront: String
    isReverseFormation: String
    cancelReason: String
    delayReason: String
    serviceID: String
    #adhocAlerts
    #formation
  }

  type ServiceItemWithCallingPoints {
    origin: [Location]
    destination: [Location]
    currentOrigins: [Location]
    currentDestinations: [Location]
    sta: String
    eta: String
    std: String
    etd: String
    platform: String
    operator: String
    operatorCode: String
    isCircularRoute: String
    isCancelled: String
    filterLocationCancelled: String
    serviceType: String
    length: String
    detachFront: String
    isReverseFormation: String
    cancelReason: String
    delayReason: String
    serviceID: String
    #adhocAlerts
    previousCallingPoints: [CallingPointArray]
    subsequentCallingPoints: [CallingPointArray]
    #formation
  }

  type Destination {
    service: [ServiceItem]
    crs: String
  }

  type DepartureItem {
    destination: [Destination]
  }

  type DestinationWithCallingPoints {
    crs: String
    service: [ServiceItemWithCallingPoints]
  }

  type DepartureItemWithCallingPoints {
    destination: [DestinationWithCallingPoints]
  }

  type FormationData {
    avgLoading: [String]
    coaches: [CoachData]
  }

  type ServiceLocation {
    locationName: [String]
    crs: [String]
    via: [String]
    futureChangeTo: [String]
    assocIsCancelled: [String]
  }

  type ServiceDetails {
    generatedAt: [String]
    rsid: [String]
    serviceType: [String]
    locationName: [String]
    crs: [String]
    operator: [String]
    operatorCode: [String]
    isCancelled: [String]
    cancelReason: [String]
    delayReason: [String]
    overdueMessage: [String]
    length: [String]
    detachFront: [String]
    isReverseFormation: [String]
    platform: [String]
    sta: [String]
    eta: [String]
    ata: [String]
    std: [String]
    etd: [String]
    atd: [String]
    #adhocAlerts
    previousCallingPoints: [CallingPointArray]
    subsequentCallingPoints: [CallingPointArray]
  }

  type CallingPointArray {
    callingPointList: [CallingPoint]
  }

  type CallingPoint {
    callingPoint: [CallingPointObject]
  }

  type CallingPointObject {
    locationName: [String]
    crs: [String]
    st: [String]
    et: [String]
    at: [String]
    isCancelled: [String]
    length: [String]
    detachFront: [String]
    #adhocAlerts
  }

  type FilterList {
    crs: [String]
  }

  type ToiletAvailabilityType {
    status: [String]
    value: [String]
  }

  #TODO: Add other parameters
  type Query {
    GetDepartureBoard(
      numRows: String
      crs: String
      filterCrs: [String]
      filterType: String
      timeOffset: String
      timeWindow: String
    ): StationBoard
    GetDepBoardWithDetails(
      numRows: String
      crs: String
      filterCrs: [String]
      filterType: String
      timeOffset: String
      timeWindow: String
    ): StationBoardWithDetails
    GetArrivalBoard(
      numRows: String
      crs: String
      filterCrs: [String]
      filterType: String
      timeOffset: String
      timeWindow: String
    ): StationBoard
    GetArrBoardWithDetails(
      numRows: String
      crs: String
      filterCrs: [String]
      filterType: String
      timeOffset: String
      timeWindow: String
    ): StationBoardWithDetails
    GetArrivalDepartureBoard(
      numRows: String
      crs: String
      filterCrs: [String]
      filterType: String
      timeOffset: String
      timeWindow: String
    ): StationBoard
    GetArrDepBoardWithDetails(
      numRows: String
      crs: String
      filterCrs: [String]
      filterType: String
      timeOffset: String
      timeWindow: String
    ): StationBoardWithDetails
    GetNextDepartures(
      crs: String
      filterCrs: [String]
      timeOffset: String
      timeWindow: String
    ): DeparturesBoard
    GetNextDeparturesWithDetails(
      crs: String
      filterCrs: [String]
      timeOffset: String
      timeWindow: String
    ): DeparturesBoardWithDetails
    GetFastestDepartures(
      crs: String
      filterCrs: [String]
      timeOffset: String
      timeWindow: String
    ): DeparturesBoard
    GetFastestDeparturesWithDetails(
      crs: String
      filterCrs: [String]
      timeOffset: String
      timeWindow: String
    ): DeparturesBoardWithDetails
    GetServiceDetails(serviceID: String): ServiceDetails
  }
`;

module.exports = typeDefs;
