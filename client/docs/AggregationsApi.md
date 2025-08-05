# AggregationsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**groupByGtfsRidesAggGroupByGet**](#groupbygtfsridesagggroupbyget) | **GET** /gtfs_rides_agg/group_by | Group By |
|[**listGtfsRidesAggListGet**](#listgtfsridesagglistget) | **GET** /gtfs_rides_agg/list | List |

# **groupByGtfsRidesAggGroupByGet**
> Array<GtfsRidesAggGroupByPydanticModel> groupByGtfsRidesAggGroupByGet()

gtfs rides aggregation grouped by given fields.

### Example

```typescript
import {
    AggregationsApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new AggregationsApi(configuration);

let dateFrom: string; //  Filter by date. Only return items which have a date after or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (default to undefined)
let dateTo: string; //  Filter by date. Only return items which have a date before or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (default to undefined)
let groupBy: string; //Comma-separated list of fields to group by. Valid values: gtfs_route_date, gtfs_route_hour, operator_ref, day_of_week, line_ref. (default to undefined)
let excludeHoursFrom: number; //Hours to exclude from search, currently used to filter out edge cases.  Filter by hour. Only return items which have an hour date after or equals to given value. Format: 0(12AM)-23 (optional) (default to undefined)
let excludeHoursTo: number; //Hours to exclude from search, currently used to filter out edge cases.  Filter by hour. Only return items which have a date before or equals to given value. Format: 0(12AM)-23 (optional) (default to undefined)

const { status, data } = await apiInstance.groupByGtfsRidesAggGroupByGet(
    dateFrom,
    dateTo,
    groupBy,
    excludeHoursFrom,
    excludeHoursTo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateFrom** | [**string**] |   Filter by date. Only return items which have a date after or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | defaults to undefined|
| **dateTo** | [**string**] |   Filter by date. Only return items which have a date before or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | defaults to undefined|
| **groupBy** | [**string**] | Comma-separated list of fields to group by. Valid values: gtfs_route_date, gtfs_route_hour, operator_ref, day_of_week, line_ref. | defaults to undefined|
| **excludeHoursFrom** | [**number**] | Hours to exclude from search, currently used to filter out edge cases.  Filter by hour. Only return items which have an hour date after or equals to given value. Format: 0(12AM)-23 | (optional) defaults to undefined|
| **excludeHoursTo** | [**number**] | Hours to exclude from search, currently used to filter out edge cases.  Filter by hour. Only return items which have a date before or equals to given value. Format: 0(12AM)-23 | (optional) defaults to undefined|


### Return type

**Array<GtfsRidesAggGroupByPydanticModel>**

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

# **listGtfsRidesAggListGet**
> Array<GtfsRidesAggPydanticModel> listGtfsRidesAggListGet()

List of gtfs rides aggregations.

### Example

```typescript
import {
    AggregationsApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new AggregationsApi(configuration);

let dateFrom: string; //  Filter by date. Only return items which have a date after or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (default to undefined)
let dateTo: string; //  Filter by date. Only return items which have a date before or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (default to undefined)
let limit: number; //Limit the number of returned results. If not specified will limit to 1000 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. (optional) (default to undefined)
let offset: number; //Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\'t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. (optional) (default to undefined)
let getCount: boolean; //Set to \"true\" to only get the total number of results for given filters. limit/offset/order parameters will be ignored. (optional) (default to false)
let excludeHoursFrom: number; //Hours to exclude from search, currently used to filter out edge cases.  Filter by hour. Only return items which have an hour date after or equals to given value. Format: 0(12AM)-23 (optional) (default to undefined)
let excludeHoursTo: number; //Hours to exclude from search, currently used to filter out edge cases.  Filter by hour. Only return items which have a date before or equals to given value. Format: 0(12AM)-23 (optional) (default to undefined)

const { status, data } = await apiInstance.listGtfsRidesAggListGet(
    dateFrom,
    dateTo,
    limit,
    offset,
    getCount,
    excludeHoursFrom,
    excludeHoursTo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateFrom** | [**string**] |   Filter by date. Only return items which have a date after or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | defaults to undefined|
| **dateTo** | [**string**] |   Filter by date. Only return items which have a date before or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | defaults to undefined|
| **limit** | [**number**] | Limit the number of returned results. If not specified will limit to 1000 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. | (optional) defaults to undefined|
| **offset** | [**number**] | Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\&#39;t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. | (optional) defaults to undefined|
| **getCount** | [**boolean**] | Set to \&quot;true\&quot; to only get the total number of results for given filters. limit/offset/order parameters will be ignored. | (optional) defaults to false|
| **excludeHoursFrom** | [**number**] | Hours to exclude from search, currently used to filter out edge cases.  Filter by hour. Only return items which have an hour date after or equals to given value. Format: 0(12AM)-23 | (optional) defaults to undefined|
| **excludeHoursTo** | [**number**] | Hours to exclude from search, currently used to filter out edge cases.  Filter by hour. Only return items which have a date before or equals to given value. Format: 0(12AM)-23 | (optional) defaults to undefined|


### Return type

**Array<GtfsRidesAggPydanticModel>**

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

