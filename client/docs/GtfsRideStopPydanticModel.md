# GtfsRideStopPydanticModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**gtfs_stop_id** | **number** |  | [default to undefined]
**gtfs_ride_id** | **number** |  | [default to undefined]
**arrival_time** | **string** |  | [optional] [default to undefined]
**departure_time** | **string** |  | [optional] [default to undefined]
**stop_sequence** | **number** |  | [optional] [default to undefined]
**pickup_type** | **number** |  | [optional] [default to undefined]
**drop_off_type** | **number** |  | [optional] [default to undefined]
**shape_dist_traveled** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { GtfsRideStopPydanticModel } from '@hasadna/open-bus-api-client';

const instance: GtfsRideStopPydanticModel = {
    id,
    gtfs_stop_id,
    gtfs_ride_id,
    arrival_time,
    departure_time,
    stop_sequence,
    pickup_type,
    drop_off_type,
    shape_dist_traveled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
