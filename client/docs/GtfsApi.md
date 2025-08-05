# GtfsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getGtfsRideStopsGetGet**](#getgtfsridestopsgetget) | **GET** /gtfs_ride_stops/get | Get |
|[**getGtfsRidesGetGet**](#getgtfsridesgetget) | **GET** /gtfs_rides/get | Get |
|[**getGtfsRoutesGetGet**](#getgtfsroutesgetget) | **GET** /gtfs_routes/get | Get |
|[**getGtfsStopsGetGet**](#getgtfsstopsgetget) | **GET** /gtfs_stops/get | Get |
|[**listGtfsAgenciesListGet**](#listgtfsagencieslistget) | **GET** /gtfs_agencies/list | List |
|[**listGtfsRideStopsListGet**](#listgtfsridestopslistget) | **GET** /gtfs_ride_stops/list | List |
|[**listGtfsRidesListGet**](#listgtfsrideslistget) | **GET** /gtfs_rides/list | List |
|[**listGtfsRoutesListGet**](#listgtfsrouteslistget) | **GET** /gtfs_routes/list | List |
|[**listGtfsStopsListGet**](#listgtfsstopslistget) | **GET** /gtfs_stops/list | List |

# **getGtfsRideStopsGetGet**
> GtfsRideStopPydanticModel getGtfsRideStopsGetGet()

Return a single gtfs ride stop based on id

### Example

```typescript
import {
    GtfsApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new GtfsApi(configuration);

let id: number; //gtfs ride stop id to get (default to undefined)

const { status, data } = await apiInstance.getGtfsRideStopsGetGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | gtfs ride stop id to get | defaults to undefined|


### Return type

**GtfsRideStopPydanticModel**

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

# **getGtfsRidesGetGet**
> GtfsRidePydanticModel getGtfsRidesGetGet()

Return a single gtfs ride based on id

### Example

```typescript
import {
    GtfsApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new GtfsApi(configuration);

let id: number; //gtfs ride id to get (default to undefined)

const { status, data } = await apiInstance.getGtfsRidesGetGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | gtfs ride id to get | defaults to undefined|


### Return type

**GtfsRidePydanticModel**

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

# **getGtfsRoutesGetGet**
> GtfsRoutePydanticModel getGtfsRoutesGetGet()

Return a single gtfs route based on id

### Example

```typescript
import {
    GtfsApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new GtfsApi(configuration);

let id: number; //gtfs route id to get (default to undefined)

const { status, data } = await apiInstance.getGtfsRoutesGetGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | gtfs route id to get | defaults to undefined|


### Return type

**GtfsRoutePydanticModel**

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

# **getGtfsStopsGetGet**
> GtfsStopPydanticModel getGtfsStopsGetGet()

Return a single gtfs stop based on id

### Example

```typescript
import {
    GtfsApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new GtfsApi(configuration);

let id: number; //gtfs stop id to get (default to undefined)

const { status, data } = await apiInstance.getGtfsStopsGetGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | gtfs stop id to get | defaults to undefined|


### Return type

**GtfsStopPydanticModel**

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

# **listGtfsAgenciesListGet**
> Array<GtfsAgencyPydanticModel> listGtfsAgenciesListGet()

List of gtfs agencies.

### Example

```typescript
import {
    GtfsApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new GtfsApi(configuration);

let limit: number; //Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. (optional) (default to undefined)
let offset: number; //Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\'t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. (optional) (default to undefined)
let dateFrom: string; //  Filter by date. Only return items which have a date after or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (optional) (default to undefined)
let dateTo: string; //  Filter by date. Only return items which have a date before or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (optional) (default to undefined)

const { status, data } = await apiInstance.listGtfsAgenciesListGet(
    limit,
    offset,
    dateFrom,
    dateTo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. | (optional) defaults to undefined|
| **offset** | [**number**] | Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\&#39;t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. | (optional) defaults to undefined|
| **dateFrom** | [**string**] |   Filter by date. Only return items which have a date after or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | (optional) defaults to undefined|
| **dateTo** | [**string**] |   Filter by date. Only return items which have a date before or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | (optional) defaults to undefined|


### Return type

**Array<GtfsAgencyPydanticModel>**

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

# **listGtfsRideStopsListGet**
> Array<GtfsRideStopWithRelatedPydanticModel> listGtfsRideStopsListGet()

List of gtfs ride stops.  Due to large number of items in the table, you must filter the results by at least one of the following:  1. gtfs_ride_ids - containing a single gtfs ride id. 2. arrival_time_from and arrival_time_to - containing a time range.  Additional filters can be applied in addition to one of the above options to narrow down the results.

### Example

```typescript
import {
    GtfsApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new GtfsApi(configuration);

let limit: number; //Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. (optional) (default to undefined)
let offset: number; //Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\'t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. (optional) (default to undefined)
let getCount: boolean; //Set to \"true\" to only get the total number of results for given filters. limit/offset/order parameters will be ignored. (optional) (default to false)
let arrivalTimeFrom: string; //  Filter by arrival time from. Only return items which have date/time after or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let arrivalTimeTo: string; //  Filter by arrival time to. Only return items which have date/time before or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let gtfsStopIds: string; //  Filter by gtfs stop id. Comma-separated list of values. (optional) (default to undefined)
let gtfsRideIds: string; //  Filter by gtfs ride id. Comma-separated list of values. (optional) (default to undefined)
let gtfsRideGtfsRouteId: number; //  Filter by related gtfs ride\'s gtfs route id. Only return items which exactly match given string. (optional) (default to undefined)
let gtfsRideJourneyRefPrefix: string; //  Filter by related gtfs ride\'s journey ref prefix. Only return items which start with given string. (optional) (default to undefined)
let gtfsRideStartTimeFrom: string; //  Filter by related gtfs ride\'s start time from. Only return items which have date/time after or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let gtfsRideStartTimeTo: string; //  Filter by related gtfs ride\'s start time to. Only return items which have date/time before or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let gtfsStopDateFrom: string; //  Filter by related gtfs stop\'s date. Only return items which have a date after or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (optional) (default to undefined)
let gtfsStopDateTo: string; //  Filter by related gtfs stop\'s date. Only return items which have a date before or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (optional) (default to undefined)
let gtfsStopCode: number; //  Filter by related gtfs stop\'s code. Only return items which exactly match given string. (optional) (default to undefined)
let gtfsStopCity: string; //  Filter by related gtfs stop\'s city. Only return items which exactly match given string. (optional) (default to undefined)
let gtfsRouteDateFrom: string; //  Filter by related gtfs route\'s date. Only return items which have a date after or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (optional) (default to undefined)
let gtfsRouteDateTo: string; //  Filter by related gtfs route\'s date. Only return items which have a date before or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (optional) (default to undefined)
let gtfsRouteLineRefs: string; //  Filter by related gtfs route\'s line ref. Comma-separated list of values. (optional) (default to undefined)
let gtfsRouteOperatorRefs: string; //Agency identifier. To get it, first query gtfs_agencies.  Filter by related gtfs route\'s operator ref. Comma-separated list of values.  Example: 3 for Eged (optional) (default to undefined)
let gtfsRouteRouteShortName: string; //Line number.  Filter by related gtfs route\'s route short name. Only return items which exactly match given string.  Example: 480 (optional) (default to undefined)
let gtfsRouteRouteLongNameContains: string; //  Filter by related gtfs route\'s route long name. Only return items which contain given string. (optional) (default to undefined)
let gtfsRouteRouteMkt: string; //  Filter by related gtfs route\'s route mkt. Only return items which exactly match given string. (optional) (default to undefined)
let gtfsRouteRouteDirection: string; //  Filter by related gtfs route\'s route direction. Only return items which exactly match given string. (optional) (default to undefined)
let gtfsRouteRouteAlternative: string; //  Filter by related gtfs route\'s route alternative. Only return items which exactly match given string. (optional) (default to undefined)
let gtfsRouteAgencyName: string; //  Filter by related gtfs route\'s agency name. Only return items which exactly match given string. (optional) (default to undefined)
let gtfsRouteRouteType: string; //  Filter by related gtfs route\'s route type. Only return items which exactly match given string. (optional) (default to undefined)
let orderBy: string; //Order of the results. Comma-separated list of fields and direction. e.g. \"field1 asc,field2 desc\". (optional) (default to 'id asc')

const { status, data } = await apiInstance.listGtfsRideStopsListGet(
    limit,
    offset,
    getCount,
    arrivalTimeFrom,
    arrivalTimeTo,
    gtfsStopIds,
    gtfsRideIds,
    gtfsRideGtfsRouteId,
    gtfsRideJourneyRefPrefix,
    gtfsRideStartTimeFrom,
    gtfsRideStartTimeTo,
    gtfsStopDateFrom,
    gtfsStopDateTo,
    gtfsStopCode,
    gtfsStopCity,
    gtfsRouteDateFrom,
    gtfsRouteDateTo,
    gtfsRouteLineRefs,
    gtfsRouteOperatorRefs,
    gtfsRouteRouteShortName,
    gtfsRouteRouteLongNameContains,
    gtfsRouteRouteMkt,
    gtfsRouteRouteDirection,
    gtfsRouteRouteAlternative,
    gtfsRouteAgencyName,
    gtfsRouteRouteType,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. | (optional) defaults to undefined|
| **offset** | [**number**] | Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\&#39;t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. | (optional) defaults to undefined|
| **getCount** | [**boolean**] | Set to \&quot;true\&quot; to only get the total number of results for given filters. limit/offset/order parameters will be ignored. | (optional) defaults to false|
| **arrivalTimeFrom** | [**string**] |   Filter by arrival time from. Only return items which have date/time after or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **arrivalTimeTo** | [**string**] |   Filter by arrival time to. Only return items which have date/time before or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **gtfsStopIds** | [**string**] |   Filter by gtfs stop id. Comma-separated list of values. | (optional) defaults to undefined|
| **gtfsRideIds** | [**string**] |   Filter by gtfs ride id. Comma-separated list of values. | (optional) defaults to undefined|
| **gtfsRideGtfsRouteId** | [**number**] |   Filter by related gtfs ride\&#39;s gtfs route id. Only return items which exactly match given string. | (optional) defaults to undefined|
| **gtfsRideJourneyRefPrefix** | [**string**] |   Filter by related gtfs ride\&#39;s journey ref prefix. Only return items which start with given string. | (optional) defaults to undefined|
| **gtfsRideStartTimeFrom** | [**string**] |   Filter by related gtfs ride\&#39;s start time from. Only return items which have date/time after or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **gtfsRideStartTimeTo** | [**string**] |   Filter by related gtfs ride\&#39;s start time to. Only return items which have date/time before or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **gtfsStopDateFrom** | [**string**] |   Filter by related gtfs stop\&#39;s date. Only return items which have a date after or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | (optional) defaults to undefined|
| **gtfsStopDateTo** | [**string**] |   Filter by related gtfs stop\&#39;s date. Only return items which have a date before or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | (optional) defaults to undefined|
| **gtfsStopCode** | [**number**] |   Filter by related gtfs stop\&#39;s code. Only return items which exactly match given string. | (optional) defaults to undefined|
| **gtfsStopCity** | [**string**] |   Filter by related gtfs stop\&#39;s city. Only return items which exactly match given string. | (optional) defaults to undefined|
| **gtfsRouteDateFrom** | [**string**] |   Filter by related gtfs route\&#39;s date. Only return items which have a date after or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | (optional) defaults to undefined|
| **gtfsRouteDateTo** | [**string**] |   Filter by related gtfs route\&#39;s date. Only return items which have a date before or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | (optional) defaults to undefined|
| **gtfsRouteLineRefs** | [**string**] |   Filter by related gtfs route\&#39;s line ref. Comma-separated list of values. | (optional) defaults to undefined|
| **gtfsRouteOperatorRefs** | [**string**] | Agency identifier. To get it, first query gtfs_agencies.  Filter by related gtfs route\&#39;s operator ref. Comma-separated list of values.  Example: 3 for Eged | (optional) defaults to undefined|
| **gtfsRouteRouteShortName** | [**string**] | Line number.  Filter by related gtfs route\&#39;s route short name. Only return items which exactly match given string.  Example: 480 | (optional) defaults to undefined|
| **gtfsRouteRouteLongNameContains** | [**string**] |   Filter by related gtfs route\&#39;s route long name. Only return items which contain given string. | (optional) defaults to undefined|
| **gtfsRouteRouteMkt** | [**string**] |   Filter by related gtfs route\&#39;s route mkt. Only return items which exactly match given string. | (optional) defaults to undefined|
| **gtfsRouteRouteDirection** | [**string**] |   Filter by related gtfs route\&#39;s route direction. Only return items which exactly match given string. | (optional) defaults to undefined|
| **gtfsRouteRouteAlternative** | [**string**] |   Filter by related gtfs route\&#39;s route alternative. Only return items which exactly match given string. | (optional) defaults to undefined|
| **gtfsRouteAgencyName** | [**string**] |   Filter by related gtfs route\&#39;s agency name. Only return items which exactly match given string. | (optional) defaults to undefined|
| **gtfsRouteRouteType** | [**string**] |   Filter by related gtfs route\&#39;s route type. Only return items which exactly match given string. | (optional) defaults to undefined|
| **orderBy** | [**string**] | Order of the results. Comma-separated list of fields and direction. e.g. \&quot;field1 asc,field2 desc\&quot;. | (optional) defaults to 'id asc'|


### Return type

**Array<GtfsRideStopWithRelatedPydanticModel>**

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

# **listGtfsRidesListGet**
> Array<GtfsRideWithRelatedPydanticModel> listGtfsRidesListGet()

List of gtfs rides.

### Example

```typescript
import {
    GtfsApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new GtfsApi(configuration);

let limit: number; //Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. (optional) (default to undefined)
let offset: number; //Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\'t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. (optional) (default to undefined)
let getCount: boolean; //Set to \"true\" to only get the total number of results for given filters. limit/offset/order parameters will be ignored. (optional) (default to false)
let gtfsRouteId: number; //  Filter by gtfs route id. Only return items which exactly match given string. (optional) (default to undefined)
let journeyRefPrefix: string; //  Filter by journey ref prefix. Only return items which start with given string. (optional) (default to undefined)
let startTimeFrom: string; //  Filter by start time from. Only return items which have date/time after or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let startTimeTo: string; //  Filter by start time to. Only return items which have date/time before or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let gtfsRouteDateFrom: string; //  Filter by related gtfs route\'s date. Only return items which have a date after or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (optional) (default to undefined)
let gtfsRouteDateTo: string; //  Filter by related gtfs route\'s date. Only return items which have a date before or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (optional) (default to undefined)
let gtfsRouteLineRefs: string; //  Filter by related gtfs route\'s line ref. Comma-separated list of values. (optional) (default to undefined)
let gtfsRouteOperatorRefs: string; //Agency identifier. To get it, first query gtfs_agencies.  Filter by related gtfs route\'s operator ref. Comma-separated list of values.  Example: 3 for Eged (optional) (default to undefined)
let gtfsRouteRouteShortName: string; //Line number.  Filter by related gtfs route\'s route short name. Only return items which exactly match given string.  Example: 480 (optional) (default to undefined)
let gtfsRouteRouteLongNameContains: string; //  Filter by related gtfs route\'s route long name. Only return items which contain given string. (optional) (default to undefined)
let gtfsRouteRouteMkt: string; //  Filter by related gtfs route\'s route mkt. Only return items which exactly match given string. (optional) (default to undefined)
let gtfsRouteRouteDirection: string; //  Filter by related gtfs route\'s route direction. Only return items which exactly match given string. (optional) (default to undefined)
let gtfsRouteRouteAlternative: string; //  Filter by related gtfs route\'s route alternative. Only return items which exactly match given string. (optional) (default to undefined)
let gtfsRouteAgencyName: string; //  Filter by related gtfs route\'s agency name. Only return items which exactly match given string. (optional) (default to undefined)
let gtfsRouteRouteType: string; //  Filter by related gtfs route\'s route type. Only return items which exactly match given string. (optional) (default to undefined)
let orderBy: string; //Order of the results. Comma-separated list of fields and direction. e.g. \"field1 asc,field2 desc\". (optional) (default to 'id asc')

const { status, data } = await apiInstance.listGtfsRidesListGet(
    limit,
    offset,
    getCount,
    gtfsRouteId,
    journeyRefPrefix,
    startTimeFrom,
    startTimeTo,
    gtfsRouteDateFrom,
    gtfsRouteDateTo,
    gtfsRouteLineRefs,
    gtfsRouteOperatorRefs,
    gtfsRouteRouteShortName,
    gtfsRouteRouteLongNameContains,
    gtfsRouteRouteMkt,
    gtfsRouteRouteDirection,
    gtfsRouteRouteAlternative,
    gtfsRouteAgencyName,
    gtfsRouteRouteType,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. | (optional) defaults to undefined|
| **offset** | [**number**] | Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\&#39;t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. | (optional) defaults to undefined|
| **getCount** | [**boolean**] | Set to \&quot;true\&quot; to only get the total number of results for given filters. limit/offset/order parameters will be ignored. | (optional) defaults to false|
| **gtfsRouteId** | [**number**] |   Filter by gtfs route id. Only return items which exactly match given string. | (optional) defaults to undefined|
| **journeyRefPrefix** | [**string**] |   Filter by journey ref prefix. Only return items which start with given string. | (optional) defaults to undefined|
| **startTimeFrom** | [**string**] |   Filter by start time from. Only return items which have date/time after or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **startTimeTo** | [**string**] |   Filter by start time to. Only return items which have date/time before or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **gtfsRouteDateFrom** | [**string**] |   Filter by related gtfs route\&#39;s date. Only return items which have a date after or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | (optional) defaults to undefined|
| **gtfsRouteDateTo** | [**string**] |   Filter by related gtfs route\&#39;s date. Only return items which have a date before or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | (optional) defaults to undefined|
| **gtfsRouteLineRefs** | [**string**] |   Filter by related gtfs route\&#39;s line ref. Comma-separated list of values. | (optional) defaults to undefined|
| **gtfsRouteOperatorRefs** | [**string**] | Agency identifier. To get it, first query gtfs_agencies.  Filter by related gtfs route\&#39;s operator ref. Comma-separated list of values.  Example: 3 for Eged | (optional) defaults to undefined|
| **gtfsRouteRouteShortName** | [**string**] | Line number.  Filter by related gtfs route\&#39;s route short name. Only return items which exactly match given string.  Example: 480 | (optional) defaults to undefined|
| **gtfsRouteRouteLongNameContains** | [**string**] |   Filter by related gtfs route\&#39;s route long name. Only return items which contain given string. | (optional) defaults to undefined|
| **gtfsRouteRouteMkt** | [**string**] |   Filter by related gtfs route\&#39;s route mkt. Only return items which exactly match given string. | (optional) defaults to undefined|
| **gtfsRouteRouteDirection** | [**string**] |   Filter by related gtfs route\&#39;s route direction. Only return items which exactly match given string. | (optional) defaults to undefined|
| **gtfsRouteRouteAlternative** | [**string**] |   Filter by related gtfs route\&#39;s route alternative. Only return items which exactly match given string. | (optional) defaults to undefined|
| **gtfsRouteAgencyName** | [**string**] |   Filter by related gtfs route\&#39;s agency name. Only return items which exactly match given string. | (optional) defaults to undefined|
| **gtfsRouteRouteType** | [**string**] |   Filter by related gtfs route\&#39;s route type. Only return items which exactly match given string. | (optional) defaults to undefined|
| **orderBy** | [**string**] | Order of the results. Comma-separated list of fields and direction. e.g. \&quot;field1 asc,field2 desc\&quot;. | (optional) defaults to 'id asc'|


### Return type

**Array<GtfsRideWithRelatedPydanticModel>**

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

# **listGtfsRoutesListGet**
> Array<GtfsRoutePydanticModel> listGtfsRoutesListGet()

List of gtfs routes.

### Example

```typescript
import {
    GtfsApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new GtfsApi(configuration);

let limit: number; //Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. (optional) (default to undefined)
let offset: number; //Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\'t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. (optional) (default to undefined)
let getCount: boolean; //Set to \"true\" to only get the total number of results for given filters. limit/offset/order parameters will be ignored. (optional) (default to false)
let dateFrom: string; //  Filter by date. Only return items which have a date after or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (optional) (default to undefined)
let dateTo: string; //  Filter by date. Only return items which have a date before or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (optional) (default to undefined)
let lineRefs: string; //  Filter by line ref. Comma-separated list of values. (optional) (default to undefined)
let operatorRefs: string; //Agency identifier. To get it, first query gtfs_agencies.  Filter by operator ref. Comma-separated list of values.  Example: 3 for Eged (optional) (default to undefined)
let routeShortName: string; //Line number.  Filter by route short name. Only return items which exactly match given string.  Example: 480 (optional) (default to undefined)
let routeLongNameContains: string; //  Filter by route long name. Only return items which contain given string. (optional) (default to undefined)
let routeMkt: string; //  Filter by route mkt. Only return items which exactly match given string. (optional) (default to undefined)
let routeDirection: string; //  Filter by route direction. Only return items which exactly match given string. (optional) (default to undefined)
let routeAlternative: string; //  Filter by route alternative. Only return items which exactly match given string. (optional) (default to undefined)
let agencyName: string; //  Filter by agency name. Only return items which exactly match given string. (optional) (default to undefined)
let routeType: string; //  Filter by route type. Only return items which exactly match given string. (optional) (default to undefined)
let orderBy: string; //Order of the results. Comma-separated list of fields and direction. e.g. \"field1 asc,field2 desc\". (optional) (default to 'id asc')

const { status, data } = await apiInstance.listGtfsRoutesListGet(
    limit,
    offset,
    getCount,
    dateFrom,
    dateTo,
    lineRefs,
    operatorRefs,
    routeShortName,
    routeLongNameContains,
    routeMkt,
    routeDirection,
    routeAlternative,
    agencyName,
    routeType,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. | (optional) defaults to undefined|
| **offset** | [**number**] | Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\&#39;t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. | (optional) defaults to undefined|
| **getCount** | [**boolean**] | Set to \&quot;true\&quot; to only get the total number of results for given filters. limit/offset/order parameters will be ignored. | (optional) defaults to false|
| **dateFrom** | [**string**] |   Filter by date. Only return items which have a date after or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | (optional) defaults to undefined|
| **dateTo** | [**string**] |   Filter by date. Only return items which have a date before or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | (optional) defaults to undefined|
| **lineRefs** | [**string**] |   Filter by line ref. Comma-separated list of values. | (optional) defaults to undefined|
| **operatorRefs** | [**string**] | Agency identifier. To get it, first query gtfs_agencies.  Filter by operator ref. Comma-separated list of values.  Example: 3 for Eged | (optional) defaults to undefined|
| **routeShortName** | [**string**] | Line number.  Filter by route short name. Only return items which exactly match given string.  Example: 480 | (optional) defaults to undefined|
| **routeLongNameContains** | [**string**] |   Filter by route long name. Only return items which contain given string. | (optional) defaults to undefined|
| **routeMkt** | [**string**] |   Filter by route mkt. Only return items which exactly match given string. | (optional) defaults to undefined|
| **routeDirection** | [**string**] |   Filter by route direction. Only return items which exactly match given string. | (optional) defaults to undefined|
| **routeAlternative** | [**string**] |   Filter by route alternative. Only return items which exactly match given string. | (optional) defaults to undefined|
| **agencyName** | [**string**] |   Filter by agency name. Only return items which exactly match given string. | (optional) defaults to undefined|
| **routeType** | [**string**] |   Filter by route type. Only return items which exactly match given string. | (optional) defaults to undefined|
| **orderBy** | [**string**] | Order of the results. Comma-separated list of fields and direction. e.g. \&quot;field1 asc,field2 desc\&quot;. | (optional) defaults to 'id asc'|


### Return type

**Array<GtfsRoutePydanticModel>**

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

# **listGtfsStopsListGet**
> Array<GtfsStopPydanticModel> listGtfsStopsListGet()

List of gtfs stops.

### Example

```typescript
import {
    GtfsApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new GtfsApi(configuration);

let limit: number; //Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. (optional) (default to undefined)
let offset: number; //Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\'t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. (optional) (default to undefined)
let getCount: boolean; //Set to \"true\" to only get the total number of results for given filters. limit/offset/order parameters will be ignored. (optional) (default to false)
let dateFrom: string; //  Filter by date. Only return items which have a date after or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (optional) (default to undefined)
let dateTo: string; //  Filter by date. Only return items which have a date before or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (optional) (default to undefined)
let code: number; //  Filter by code. Only return items which exactly match given string. (optional) (default to undefined)
let city: string; //  Filter by city. Only return items which exactly match given string. (optional) (default to undefined)

const { status, data } = await apiInstance.listGtfsStopsListGet(
    limit,
    offset,
    getCount,
    dateFrom,
    dateTo,
    code,
    city
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. | (optional) defaults to undefined|
| **offset** | [**number**] | Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\&#39;t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. | (optional) defaults to undefined|
| **getCount** | [**boolean**] | Set to \&quot;true\&quot; to only get the total number of results for given filters. limit/offset/order parameters will be ignored. | (optional) defaults to false|
| **dateFrom** | [**string**] |   Filter by date. Only return items which have a date after or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | (optional) defaults to undefined|
| **dateTo** | [**string**] |   Filter by date. Only return items which have a date before or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | (optional) defaults to undefined|
| **code** | [**number**] |   Filter by code. Only return items which exactly match given string. | (optional) defaults to undefined|
| **city** | [**string**] |   Filter by city. Only return items which exactly match given string. | (optional) defaults to undefined|


### Return type

**Array<GtfsStopPydanticModel>**

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

