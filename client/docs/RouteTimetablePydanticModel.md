# RouteTimetablePydanticModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**city** | **string** |  | [optional] [default to undefined]
**lon** | **number** |  | [optional] [default to undefined]
**lat** | **number** |  | [optional] [default to undefined]
**planned_arrival_time** | **string** |  | [optional] [default to undefined]
**gtfs_line_ref** | **string** |  | [optional] [default to undefined]
**gtfs_line_start_time** | **string** |  | [optional] [default to undefined]
**gtfs_ride_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { RouteTimetablePydanticModel } from '@hasadna/open-bus-api-client';

const instance: RouteTimetablePydanticModel = {
    id,
    name,
    city,
    lon,
    lat,
    planned_arrival_time,
    gtfs_line_ref,
    gtfs_line_start_time,
    gtfs_ride_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
