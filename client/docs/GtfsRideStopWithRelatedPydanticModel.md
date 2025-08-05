# GtfsRideStopWithRelatedPydanticModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**gtfs_stop_id** | **number** |  | [optional] [default to undefined]
**gtfs_ride_id** | **number** |  | [optional] [default to undefined]
**arrival_time** | **string** |  | [optional] [default to undefined]
**departure_time** | **string** |  | [optional] [default to undefined]
**stop_sequence** | **number** |  | [optional] [default to undefined]
**pickup_type** | **number** |  | [optional] [default to undefined]
**drop_off_type** | **number** |  | [optional] [default to undefined]
**shape_dist_traveled** | **number** |  | [optional] [default to undefined]
**gtfs_ride__gtfs_route_id** | **number** |  | [optional] [default to undefined]
**gtfs_ride__journey_ref** | **string** |  | [optional] [default to undefined]
**gtfs_ride__start_time** | **string** |  | [optional] [default to undefined]
**gtfs_ride__end_time** | **string** |  | [optional] [default to undefined]
**gtfs_stop__date** | **string** |  | [optional] [default to undefined]
**gtfs_stop__code** | **number** |  | [optional] [default to undefined]
**gtfs_stop__lat** | **number** |  | [optional] [default to undefined]
**gtfs_stop__lon** | **number** |  | [optional] [default to undefined]
**gtfs_stop__name** | **string** |  | [optional] [default to undefined]
**gtfs_stop__city** | **string** |  | [optional] [default to undefined]
**gtfs_route__date** | **string** |  | [optional] [default to undefined]
**gtfs_route__line_ref** | **number** |  | [optional] [default to undefined]
**gtfs_route__operator_ref** | **number** |  | [optional] [default to undefined]
**gtfs_route__route_short_name** | **string** |  | [optional] [default to undefined]
**gtfs_route__route_long_name** | **string** |  | [optional] [default to undefined]
**gtfs_route__route_mkt** | **string** |  | [optional] [default to undefined]
**gtfs_route__route_direction** | **string** |  | [optional] [default to undefined]
**gtfs_route__route_alternative** | **string** |  | [optional] [default to undefined]
**gtfs_route__agency_name** | **string** |  | [optional] [default to undefined]
**gtfs_route__route_type** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GtfsRideStopWithRelatedPydanticModel } from '@hasadna/open-bus-api-client';

const instance: GtfsRideStopWithRelatedPydanticModel = {
    id,
    gtfs_stop_id,
    gtfs_ride_id,
    arrival_time,
    departure_time,
    stop_sequence,
    pickup_type,
    drop_off_type,
    shape_dist_traveled,
    gtfs_ride__gtfs_route_id,
    gtfs_ride__journey_ref,
    gtfs_ride__start_time,
    gtfs_ride__end_time,
    gtfs_stop__date,
    gtfs_stop__code,
    gtfs_stop__lat,
    gtfs_stop__lon,
    gtfs_stop__name,
    gtfs_stop__city,
    gtfs_route__date,
    gtfs_route__line_ref,
    gtfs_route__operator_ref,
    gtfs_route__route_short_name,
    gtfs_route__route_long_name,
    gtfs_route__route_mkt,
    gtfs_route__route_direction,
    gtfs_route__route_alternative,
    gtfs_route__agency_name,
    gtfs_route__route_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
