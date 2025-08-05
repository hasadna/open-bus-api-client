# SiriVehicleLocationWithRelatedPydanticModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**siri_snapshot_id** | **number** |  | [optional] [default to undefined]
**siri_ride_stop_id** | **number** |  | [optional] [default to undefined]
**recorded_at_time** | **string** |  | [optional] [default to undefined]
**lon** | **number** |  | [optional] [default to undefined]
**lat** | **number** |  | [optional] [default to undefined]
**bearing** | **number** |  | [optional] [default to undefined]
**velocity** | **number** |  | [optional] [default to undefined]
**distance_from_journey_start** | **number** |  | [optional] [default to undefined]
**distance_from_siri_ride_stop_meters** | **number** |  | [optional] [default to undefined]
**siri_snapshot__snapshot_id** | **string** |  | [optional] [default to undefined]
**siri_route__id** | **number** |  | [optional] [default to undefined]
**siri_route__line_ref** | **number** |  | [optional] [default to undefined]
**siri_route__operator_ref** | **number** |  | [optional] [default to undefined]
**siri_ride__id** | **number** |  | [optional] [default to undefined]
**siri_ride__journey_ref** | **string** |  | [optional] [default to undefined]
**siri_ride__scheduled_start_time** | **string** |  | [optional] [default to undefined]
**siri_ride__vehicle_ref** | **string** |  | [optional] [default to undefined]
**siri_ride__first_vehicle_location_id** | **number** |  | [optional] [default to undefined]
**siri_ride__last_vehicle_location_id** | **number** |  | [optional] [default to undefined]
**siri_ride__duration_minutes** | **number** |  | [optional] [default to undefined]
**siri_ride__gtfs_ride_id** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { SiriVehicleLocationWithRelatedPydanticModel } from '@hasadna/open-bus-api-client';

const instance: SiriVehicleLocationWithRelatedPydanticModel = {
    id,
    siri_snapshot_id,
    siri_ride_stop_id,
    recorded_at_time,
    lon,
    lat,
    bearing,
    velocity,
    distance_from_journey_start,
    distance_from_siri_ride_stop_meters,
    siri_snapshot__snapshot_id,
    siri_route__id,
    siri_route__line_ref,
    siri_route__operator_ref,
    siri_ride__id,
    siri_ride__journey_ref,
    siri_ride__scheduled_start_time,
    siri_ride__vehicle_ref,
    siri_ride__first_vehicle_location_id,
    siri_ride__last_vehicle_location_id,
    siri_ride__duration_minutes,
    siri_ride__gtfs_ride_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
