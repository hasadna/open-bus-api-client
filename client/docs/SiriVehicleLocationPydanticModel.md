# SiriVehicleLocationPydanticModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**siri_snapshot_id** | **number** |  | [default to undefined]
**siri_ride_stop_id** | **number** |  | [default to undefined]
**recorded_at_time** | **string** |  | [default to undefined]
**lon** | **number** |  | [default to undefined]
**lat** | **number** |  | [default to undefined]
**bearing** | **number** |  | [default to undefined]
**velocity** | **number** |  | [default to undefined]
**distance_from_journey_start** | **number** |  | [default to undefined]
**distance_from_siri_ride_stop_meters** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { SiriVehicleLocationPydanticModel } from '@hasadna/open-bus-api-client';

const instance: SiriVehicleLocationPydanticModel = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
