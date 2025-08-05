# SiriRidePydanticModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**siri_route_id** | **number** |  | [default to undefined]
**journey_ref** | **string** |  | [default to undefined]
**scheduled_start_time** | **string** |  | [default to undefined]
**vehicle_ref** | **string** |  | [optional] [default to undefined]
**updated_first_last_vehicle_locations** | **string** |  | [optional] [default to undefined]
**first_vehicle_location_id** | **number** |  | [optional] [default to undefined]
**last_vehicle_location_id** | **number** |  | [optional] [default to undefined]
**updated_duration_minutes** | **string** |  | [optional] [default to undefined]
**duration_minutes** | **number** |  | [optional] [default to undefined]
**journey_gtfs_ride_id** | **number** |  | [optional] [default to undefined]
**route_gtfs_ride_id** | **number** |  | [optional] [default to undefined]
**gtfs_ride_id** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { SiriRidePydanticModel } from '@hasadna/open-bus-api-client';

const instance: SiriRidePydanticModel = {
    id,
    siri_route_id,
    journey_ref,
    scheduled_start_time,
    vehicle_ref,
    updated_first_last_vehicle_locations,
    first_vehicle_location_id,
    last_vehicle_location_id,
    updated_duration_minutes,
    duration_minutes,
    journey_gtfs_ride_id,
    route_gtfs_ride_id,
    gtfs_ride_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
