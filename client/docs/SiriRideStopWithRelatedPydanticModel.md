# SiriRideStopWithRelatedPydanticModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**siri_stop_id** | **number** |  | [optional] [default to undefined]
**siri_ride_id** | **number** |  | [optional] [default to undefined]
**order** | **number** |  | [optional] [default to undefined]
**gtfs_stop_id** | **number** |  | [optional] [default to undefined]
**nearest_siri_vehicle_location_id** | **number** |  | [optional] [default to undefined]
**siri_stop__code** | **number** |  | [optional] [default to undefined]
**siri_ride__siri_route_id** | **number** |  | [optional] [default to undefined]
**siri_ride__journey_ref** | **string** |  | [optional] [default to undefined]
**siri_ride__scheduled_start_time** | **string** |  | [optional] [default to undefined]
**siri_ride__vehicle_ref** | **string** |  | [optional] [default to undefined]
**siri_ride__updated_first_last_vehicle_locations** | **string** |  | [optional] [default to undefined]
**siri_ride__first_vehicle_location_id** | **number** |  | [optional] [default to undefined]
**siri_ride__last_vehicle_location_id** | **number** |  | [optional] [default to undefined]
**siri_ride__updated_duration_minutes** | **string** |  | [optional] [default to undefined]
**siri_ride__duration_minutes** | **number** |  | [optional] [default to undefined]
**siri_ride__journey_gtfs_ride_id** | **number** |  | [optional] [default to undefined]
**siri_ride__route_gtfs_ride_id** | **number** |  | [optional] [default to undefined]
**siri_ride__gtfs_ride_id** | **number** |  | [optional] [default to undefined]
**gtfs_stop__date** | **string** |  | [optional] [default to undefined]
**gtfs_stop__code** | **number** |  | [optional] [default to undefined]
**gtfs_stop__lat** | **number** |  | [optional] [default to undefined]
**gtfs_stop__lon** | **number** |  | [optional] [default to undefined]
**gtfs_stop__name** | **string** |  | [optional] [default to undefined]
**gtfs_stop__city** | **string** |  | [optional] [default to undefined]
**nearest_siri_vehicle_location__siri_snapshot_id** | **number** |  | [optional] [default to undefined]
**nearest_siri_vehicle_location__siri_ride_stop_id** | **number** |  | [optional] [default to undefined]
**nearest_siri_vehicle_location__recorded_at_time** | **string** |  | [optional] [default to undefined]
**nearest_siri_vehicle_location__lon** | **number** |  | [optional] [default to undefined]
**nearest_siri_vehicle_location__lat** | **number** |  | [optional] [default to undefined]
**nearest_siri_vehicle_location__bearing** | **number** |  | [optional] [default to undefined]
**nearest_siri_vehicle_location__velocity** | **number** |  | [optional] [default to undefined]
**nearest_siri_vehicle_location__distance_from_journey_start** | **number** |  | [optional] [default to undefined]
**nearest_siri_vehicle_location__distance_from_siri_ride_stop_meters** | **number** |  | [optional] [default to undefined]
**gtfs_ride_stop__gtfs_stop_id** | **number** |  | [optional] [default to undefined]
**gtfs_ride_stop__gtfs_ride_id** | **number** |  | [optional] [default to undefined]
**gtfs_ride_stop__arrival_time** | **string** |  | [optional] [default to undefined]
**gtfs_ride_stop__departure_time** | **string** |  | [optional] [default to undefined]
**gtfs_ride_stop__stop_sequence** | **number** |  | [optional] [default to undefined]
**gtfs_ride_stop__pickup_type** | **number** |  | [optional] [default to undefined]
**gtfs_ride_stop__drop_off_type** | **number** |  | [optional] [default to undefined]
**gtfs_ride_stop__shape_dist_traveled** | **number** |  | [optional] [default to undefined]
**gtfs_ride__gtfs_route_id** | **number** |  | [optional] [default to undefined]
**gtfs_ride__journey_ref** | **string** |  | [optional] [default to undefined]
**gtfs_ride__start_time** | **string** |  | [optional] [default to undefined]
**gtfs_ride__end_time** | **string** |  | [optional] [default to undefined]
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
import { SiriRideStopWithRelatedPydanticModel } from '@hasadna/open-bus-api-client';

const instance: SiriRideStopWithRelatedPydanticModel = {
    id,
    siri_stop_id,
    siri_ride_id,
    order,
    gtfs_stop_id,
    nearest_siri_vehicle_location_id,
    siri_stop__code,
    siri_ride__siri_route_id,
    siri_ride__journey_ref,
    siri_ride__scheduled_start_time,
    siri_ride__vehicle_ref,
    siri_ride__updated_first_last_vehicle_locations,
    siri_ride__first_vehicle_location_id,
    siri_ride__last_vehicle_location_id,
    siri_ride__updated_duration_minutes,
    siri_ride__duration_minutes,
    siri_ride__journey_gtfs_ride_id,
    siri_ride__route_gtfs_ride_id,
    siri_ride__gtfs_ride_id,
    gtfs_stop__date,
    gtfs_stop__code,
    gtfs_stop__lat,
    gtfs_stop__lon,
    gtfs_stop__name,
    gtfs_stop__city,
    nearest_siri_vehicle_location__siri_snapshot_id,
    nearest_siri_vehicle_location__siri_ride_stop_id,
    nearest_siri_vehicle_location__recorded_at_time,
    nearest_siri_vehicle_location__lon,
    nearest_siri_vehicle_location__lat,
    nearest_siri_vehicle_location__bearing,
    nearest_siri_vehicle_location__velocity,
    nearest_siri_vehicle_location__distance_from_journey_start,
    nearest_siri_vehicle_location__distance_from_siri_ride_stop_meters,
    gtfs_ride_stop__gtfs_stop_id,
    gtfs_ride_stop__gtfs_ride_id,
    gtfs_ride_stop__arrival_time,
    gtfs_ride_stop__departure_time,
    gtfs_ride_stop__stop_sequence,
    gtfs_ride_stop__pickup_type,
    gtfs_ride_stop__drop_off_type,
    gtfs_ride_stop__shape_dist_traveled,
    gtfs_ride__gtfs_route_id,
    gtfs_ride__journey_ref,
    gtfs_ride__start_time,
    gtfs_ride__end_time,
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
