## @hasadna/open-bus-api-client@27215a215d186e543c9bf70c73529f0a6872483e

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @hasadna/open-bus-api-client@27215a215d186e543c9bf70c73529f0a6872483e --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AggregationsApi* | [**groupByGtfsRidesAggGroupByGet**](docs/AggregationsApi.md#groupbygtfsridesagggroupbyget) | **GET** /gtfs_rides_agg/group_by | Group By 
*AggregationsApi* | [**listGtfsRidesAggListGet**](docs/AggregationsApi.md#listgtfsridesagglistget) | **GET** /gtfs_rides_agg/list | List 
*GtfsApi* | [**getGtfsRideStopsGetGet**](docs/GtfsApi.md#getgtfsridestopsgetget) | **GET** /gtfs_ride_stops/get | Get 
*GtfsApi* | [**getGtfsRidesGetGet**](docs/GtfsApi.md#getgtfsridesgetget) | **GET** /gtfs_rides/get | Get 
*GtfsApi* | [**getGtfsRoutesGetGet**](docs/GtfsApi.md#getgtfsroutesgetget) | **GET** /gtfs_routes/get | Get 
*GtfsApi* | [**getGtfsStopsGetGet**](docs/GtfsApi.md#getgtfsstopsgetget) | **GET** /gtfs_stops/get | Get 
*GtfsApi* | [**listGtfsAgenciesListGet**](docs/GtfsApi.md#listgtfsagencieslistget) | **GET** /gtfs_agencies/list | List 
*GtfsApi* | [**listGtfsRideStopsListGet**](docs/GtfsApi.md#listgtfsridestopslistget) | **GET** /gtfs_ride_stops/list | List 
*GtfsApi* | [**listGtfsRidesListGet**](docs/GtfsApi.md#listgtfsrideslistget) | **GET** /gtfs_rides/list | List 
*GtfsApi* | [**listGtfsRoutesListGet**](docs/GtfsApi.md#listgtfsrouteslistget) | **GET** /gtfs_routes/list | List 
*GtfsApi* | [**listGtfsStopsListGet**](docs/GtfsApi.md#listgtfsstopslistget) | **GET** /gtfs_stops/list | List 
*SiriApi* | [**getSiriRideStopsGetGet**](docs/SiriApi.md#getsiriridestopsgetget) | **GET** /siri_ride_stops/get | Get 
*SiriApi* | [**getSiriRidesGetGet**](docs/SiriApi.md#getsiriridesgetget) | **GET** /siri_rides/get | Get 
*SiriApi* | [**getSiriRoutesGetGet**](docs/SiriApi.md#getsiriroutesgetget) | **GET** /siri_routes/get | Get 
*SiriApi* | [**getSiriSnapshotsGetGet**](docs/SiriApi.md#getsirisnapshotsgetget) | **GET** /siri_snapshots/get | Get 
*SiriApi* | [**getSiriStopsGetGet**](docs/SiriApi.md#getsiristopsgetget) | **GET** /siri_stops/get | Get 
*SiriApi* | [**getSiriVehicleLocationsGetGet**](docs/SiriApi.md#getsirivehiclelocationsgetget) | **GET** /siri_vehicle_locations/get | Get 
*SiriApi* | [**listSiriRideStopsListGet**](docs/SiriApi.md#listsiriridestopslistget) | **GET** /siri_ride_stops/list | List 
*SiriApi* | [**listSiriRidesListGet**](docs/SiriApi.md#listsirirideslistget) | **GET** /siri_rides/list | List 
*SiriApi* | [**listSiriRoutesListGet**](docs/SiriApi.md#listsirirouteslistget) | **GET** /siri_routes/list | List 
*SiriApi* | [**listSiriSnapshotsListGet**](docs/SiriApi.md#listsirisnapshotslistget) | **GET** /siri_snapshots/list | List 
*SiriApi* | [**listSiriStopsListGet**](docs/SiriApi.md#listsiristopslistget) | **GET** /siri_stops/list | List 
*SiriApi* | [**listSiriVehicleLocationsListGet**](docs/SiriApi.md#listsirivehiclelocationslistget) | **GET** /siri_vehicle_locations/list | List 
*UserCasesApi* | [**listRidesExecutionListGet**](docs/UserCasesApi.md#listridesexecutionlistget) | **GET** /rides_execution/list | List 
*UserCasesApi* | [**listRouteTimetableListGet**](docs/UserCasesApi.md#listroutetimetablelistget) | **GET** /route_timetable/list | List 
*UserCasesApi* | [**listStopArrivalsListGet**](docs/UserCasesApi.md#liststoparrivalslistget) | **GET** /stop_arrivals/list | List 


### Documentation For Models

 - [GtfsAgencyPydanticModel](docs/GtfsAgencyPydanticModel.md)
 - [GtfsRidePydanticModel](docs/GtfsRidePydanticModel.md)
 - [GtfsRideStopPydanticModel](docs/GtfsRideStopPydanticModel.md)
 - [GtfsRideStopWithRelatedPydanticModel](docs/GtfsRideStopWithRelatedPydanticModel.md)
 - [GtfsRideWithRelatedPydanticModel](docs/GtfsRideWithRelatedPydanticModel.md)
 - [GtfsRidesAggGroupByPydanticModel](docs/GtfsRidesAggGroupByPydanticModel.md)
 - [GtfsRidesAggPydanticModel](docs/GtfsRidesAggPydanticModel.md)
 - [GtfsRoutePydanticModel](docs/GtfsRoutePydanticModel.md)
 - [GtfsStopPydanticModel](docs/GtfsStopPydanticModel.md)
 - [HTTPValidationError](docs/HTTPValidationError.md)
 - [LocationInner](docs/LocationInner.md)
 - [RideExecutionPydanticModel](docs/RideExecutionPydanticModel.md)
 - [RouteTimetablePydanticModel](docs/RouteTimetablePydanticModel.md)
 - [SiriRidePydanticModel](docs/SiriRidePydanticModel.md)
 - [SiriRideStopPydanticModel](docs/SiriRideStopPydanticModel.md)
 - [SiriRideStopWithRelatedPydanticModel](docs/SiriRideStopWithRelatedPydanticModel.md)
 - [SiriRideWithRelatedPydanticModel](docs/SiriRideWithRelatedPydanticModel.md)
 - [SiriRoutePydanticModel](docs/SiriRoutePydanticModel.md)
 - [SiriSnapshotEtlStatusEnum](docs/SiriSnapshotEtlStatusEnum.md)
 - [SiriSnapshotPydanticModel](docs/SiriSnapshotPydanticModel.md)
 - [SiriStopPydanticModel](docs/SiriStopPydanticModel.md)
 - [SiriVehicleLocationPydanticModel](docs/SiriVehicleLocationPydanticModel.md)
 - [SiriVehicleLocationWithRelatedPydanticModel](docs/SiriVehicleLocationWithRelatedPydanticModel.md)
 - [StopArrivalPydanticModel](docs/StopArrivalPydanticModel.md)
 - [ValidationError](docs/ValidationError.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization

Endpoints do not require authorization.

