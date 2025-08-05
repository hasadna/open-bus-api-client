# UserCasesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listRidesExecutionListGet**](#listridesexecutionlistget) | **GET** /rides_execution/list | List |
|[**listRouteTimetableListGet**](#listroutetimetablelistget) | **GET** /route_timetable/list | List |
|[**listStopArrivalsListGet**](#liststoparrivalslistget) | **GET** /stop_arrivals/list | List |

# **listRidesExecutionListGet**
> Array<RideExecutionPydanticModel> listRidesExecutionListGet()

List of A comparison between the planned and actual rides of a specific route between the given dates. Currently, the \"actual_rides_count\", will be either None (no actual ride) or equal to the \"planned_rides_count.

### Example

```typescript
import {
    UserCasesApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new UserCasesApi(configuration);

let dateFrom: string; //  Filter by date. Only return items which have a date after or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (default to undefined)
let dateTo: string; //  Filter by date. Only return items which have a date before or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (default to undefined)
let limit: number; //Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. (optional) (default to undefined)
let offset: number; //Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\'t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. (optional) (default to undefined)
let getCount: boolean; //Set to \"true\" to only get the total number of results for given filters. limit/offset/order parameters will be ignored. (optional) (default to false)
let operatorRef: number; //Line operator ref.  Filter by operator_ref. Only return items which exactly match given string. (optional) (default to undefined)
let lineRef: number; //Line ref.  Filter by line_ref. Only return items which exactly match given string. (optional) (default to undefined)

const { status, data } = await apiInstance.listRidesExecutionListGet(
    dateFrom,
    dateTo,
    limit,
    offset,
    getCount,
    operatorRef,
    lineRef
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateFrom** | [**string**] |   Filter by date. Only return items which have a date after or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | defaults to undefined|
| **dateTo** | [**string**] |   Filter by date. Only return items which have a date before or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | defaults to undefined|
| **limit** | [**number**] | Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. | (optional) defaults to undefined|
| **offset** | [**number**] | Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\&#39;t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. | (optional) defaults to undefined|
| **getCount** | [**boolean**] | Set to \&quot;true\&quot; to only get the total number of results for given filters. limit/offset/order parameters will be ignored. | (optional) defaults to false|
| **operatorRef** | [**number**] | Line operator ref.  Filter by operator_ref. Only return items which exactly match given string. | (optional) defaults to undefined|
| **lineRef** | [**number**] | Line ref.  Filter by line_ref. Only return items which exactly match given string. | (optional) defaults to undefined|


### Return type

**Array<RideExecutionPydanticModel>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listRouteTimetableListGet**
> Array<RouteTimetablePydanticModel> listRouteTimetableListGet()

List of the stops timetable of a given bus. Currently, only planned time (gtfs) is returned for every stop.

### Example

```typescript
import {
    UserCasesApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new UserCasesApi(configuration);

let limit: number; //Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. (optional) (default to undefined)
let offset: number; //Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\'t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. (optional) (default to undefined)
let getCount: boolean; //Set to \"true\" to only get the total number of results for given filters. limit/offset/order parameters will be ignored. (optional) (default to false)
let plannedStartTimeDateFrom: string; //Set a time range to get the timetable of a specific ride  Filter by planned_start_time. Only return items which have date/time after or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let plannedStartTimeDateTo: string; //Set a time range to get the time table of a specific ride  Filter by planned_start_time. Only return items which have date/time before or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let lineRefs: string; //To get a line ref, first query gtfs_routes  Filter by line_ref. Comma-separated list of values. (optional) (default to undefined)

const { status, data } = await apiInstance.listRouteTimetableListGet(
    limit,
    offset,
    getCount,
    plannedStartTimeDateFrom,
    plannedStartTimeDateTo,
    lineRefs
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. | (optional) defaults to undefined|
| **offset** | [**number**] | Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\&#39;t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. | (optional) defaults to undefined|
| **getCount** | [**boolean**] | Set to \&quot;true\&quot; to only get the total number of results for given filters. limit/offset/order parameters will be ignored. | (optional) defaults to false|
| **plannedStartTimeDateFrom** | [**string**] | Set a time range to get the timetable of a specific ride  Filter by planned_start_time. Only return items which have date/time after or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **plannedStartTimeDateTo** | [**string**] | Set a time range to get the time table of a specific ride  Filter by planned_start_time. Only return items which have date/time before or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **lineRefs** | [**string**] | To get a line ref, first query gtfs_routes  Filter by line_ref. Comma-separated list of values. | (optional) defaults to undefined|


### Return type

**Array<RouteTimetablePydanticModel>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listStopArrivalsListGet**
> Array<StopArrivalPydanticModel> listStopArrivalsListGet()

List of the actual arrival times to a specific stop. Currently, only planned time (gtfs) is returned for every stop.

### Example

```typescript
import {
    UserCasesApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new UserCasesApi(configuration);

let limit: number; //Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. (optional) (default to undefined)
let offset: number; //Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\'t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. (optional) (default to undefined)
let getCount: boolean; //Set to \"true\" to only get the total number of results for given filters. limit/offset/order parameters will be ignored. (optional) (default to false)
let gtfsStopId: number; //To get a line ref, first query gtfs_routes  Filter by gtfs_stop_id. Only return items which exactly match given string. (optional) (default to undefined)
let gtfsRideIds: string; //To get a line ref, first query gtfs_routes  Filter by line_ref. Comma-separated list of values. (optional) (default to undefined)

const { status, data } = await apiInstance.listStopArrivalsListGet(
    limit,
    offset,
    getCount,
    gtfsStopId,
    gtfsRideIds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. | (optional) defaults to undefined|
| **offset** | [**number**] | Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\&#39;t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. | (optional) defaults to undefined|
| **getCount** | [**boolean**] | Set to \&quot;true\&quot; to only get the total number of results for given filters. limit/offset/order parameters will be ignored. | (optional) defaults to false|
| **gtfsStopId** | [**number**] | To get a line ref, first query gtfs_routes  Filter by gtfs_stop_id. Only return items which exactly match given string. | (optional) defaults to undefined|
| **gtfsRideIds** | [**string**] | To get a line ref, first query gtfs_routes  Filter by line_ref. Comma-separated list of values. | (optional) defaults to undefined|


### Return type

**Array<StopArrivalPydanticModel>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

