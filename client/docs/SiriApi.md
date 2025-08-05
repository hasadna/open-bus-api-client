# SiriApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getSiriRideStopsGetGet**](#getsiriridestopsgetget) | **GET** /siri_ride_stops/get | Get |
|[**getSiriRidesGetGet**](#getsiriridesgetget) | **GET** /siri_rides/get | Get |
|[**getSiriRoutesGetGet**](#getsiriroutesgetget) | **GET** /siri_routes/get | Get |
|[**getSiriSnapshotsGetGet**](#getsirisnapshotsgetget) | **GET** /siri_snapshots/get | Get |
|[**getSiriStopsGetGet**](#getsiristopsgetget) | **GET** /siri_stops/get | Get |
|[**getSiriVehicleLocationsGetGet**](#getsirivehiclelocationsgetget) | **GET** /siri_vehicle_locations/get | Get |
|[**listSiriRideStopsListGet**](#listsiriridestopslistget) | **GET** /siri_ride_stops/list | List |
|[**listSiriRidesListGet**](#listsirirideslistget) | **GET** /siri_rides/list | List |
|[**listSiriRoutesListGet**](#listsirirouteslistget) | **GET** /siri_routes/list | List |
|[**listSiriSnapshotsListGet**](#listsirisnapshotslistget) | **GET** /siri_snapshots/list | List |
|[**listSiriStopsListGet**](#listsiristopslistget) | **GET** /siri_stops/list | List |
|[**listSiriVehicleLocationsListGet**](#listsirivehiclelocationslistget) | **GET** /siri_vehicle_locations/list | List |

# **getSiriRideStopsGetGet**
> SiriRideStopPydanticModel getSiriRideStopsGetGet()

Return a single siri ride stop based on id

### Example

```typescript
import {
    SiriApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new SiriApi(configuration);

let id: number; //siri ride stop id to get (default to undefined)

const { status, data } = await apiInstance.getSiriRideStopsGetGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | siri ride stop id to get | defaults to undefined|


### Return type

**SiriRideStopPydanticModel**

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

# **getSiriRidesGetGet**
> SiriRidePydanticModel getSiriRidesGetGet()

Return a single siri ride based on id

### Example

```typescript
import {
    SiriApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new SiriApi(configuration);

let id: number; //siri ride id to get (default to undefined)

const { status, data } = await apiInstance.getSiriRidesGetGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | siri ride id to get | defaults to undefined|


### Return type

**SiriRidePydanticModel**

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

# **getSiriRoutesGetGet**
> SiriRoutePydanticModel getSiriRoutesGetGet()

Return a single siri route based on id

### Example

```typescript
import {
    SiriApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new SiriApi(configuration);

let id: number; //siri route id to get (default to undefined)

const { status, data } = await apiInstance.getSiriRoutesGetGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | siri route id to get | defaults to undefined|


### Return type

**SiriRoutePydanticModel**

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

# **getSiriSnapshotsGetGet**
> SiriSnapshotPydanticModel getSiriSnapshotsGetGet()

Return a single siri snapshot based on id

### Example

```typescript
import {
    SiriApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new SiriApi(configuration);

let id: number; //siri snapshot id to get (default to undefined)

const { status, data } = await apiInstance.getSiriSnapshotsGetGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | siri snapshot id to get | defaults to undefined|


### Return type

**SiriSnapshotPydanticModel**

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

# **getSiriStopsGetGet**
> SiriStopPydanticModel getSiriStopsGetGet()

Return a single siri stop based on id

### Example

```typescript
import {
    SiriApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new SiriApi(configuration);

let id: number; //siri stop id to get (default to undefined)

const { status, data } = await apiInstance.getSiriStopsGetGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | siri stop id to get | defaults to undefined|


### Return type

**SiriStopPydanticModel**

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

# **getSiriVehicleLocationsGetGet**
> SiriVehicleLocationPydanticModel getSiriVehicleLocationsGetGet()

Return a single siri vehicle location based on id

### Example

```typescript
import {
    SiriApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new SiriApi(configuration);

let id: number; //siri vehicle location id to get (default to undefined)

const { status, data } = await apiInstance.getSiriVehicleLocationsGetGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | siri vehicle location id to get | defaults to undefined|


### Return type

**SiriVehicleLocationPydanticModel**

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

# **listSiriRideStopsListGet**
> Array<SiriRideStopWithRelatedPydanticModel> listSiriRideStopsListGet()

List of siri ride stops.

### Example

```typescript
import {
    SiriApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new SiriApi(configuration);

let limit: number; //Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. (optional) (default to undefined)
let offset: number; //Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\'t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. (optional) (default to undefined)
let getCount: boolean; //Set to \"true\" to only get the total number of results for given filters. limit/offset/order parameters will be ignored. (optional) (default to false)
let siriStopIds: string; //  Filter by siri stop id. Comma-separated list of values. (optional) (default to undefined)
let siriRideIds: string; //  Filter by siri ride id. Comma-separated list of values. (optional) (default to undefined)
let siriVehicleLocationLonGreaterOrEqual: number; //  Filter by siri vehicle location lon. Only return items which have a numeric value greater than or equal to given value  Example: 34.808 (optional) (default to undefined)
let siriVehicleLocationLonLowerOrEqual: number; //  Filter by siri vehicle location lon. Only return items which have a numeric value lower than or equal to given value  Example: 34.808 (optional) (default to undefined)
let siriVehicleLocationLatGreaterOrEqual: number; //  Filter by siri vehicle location lat. Only return items which have a numeric value greater than or equal to given value  Example: 31.961 (optional) (default to undefined)
let siriVehicleLocationLatLowerOrEqual: number; //  Filter by siri vehicle location lat. Only return items which have a numeric value lower than or equal to given value  Example: 31.961 (optional) (default to undefined)
let siriVehicleLocationRecordedAtTimeFrom: string; //  Filter by siri vehicle location recorded at time. Only return items which have date/time after or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let siriVehicleLocationRecordedAtTimeTo: string; //  Filter by siri vehicle location recorded at time. Only return items which have date/time before or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let siriRideScheduledStartTimeFrom: string; //  Filter by siri ride scheduled start time. Only return items which have date/time after or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let siriRideScheduledStartTimeTo: string; //  Filter by siri ride scheduled start time. Only return items which have date/time before or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let gtfsStopLatGreaterOrEqual: number; //  Filter by gtfs stop lat. Only return items which have a numeric value greater than or equal to given value  Example: 31.961 (optional) (default to undefined)
let gtfsStopLatLowerOrEqual: number; //  Filter by gtfs stop lat. Only return items which have a numeric value lower than or equal to given value  Example: 31.961 (optional) (default to undefined)
let gtfsStopLonGreaterOrEqual: number; //  Filter by gtfs stop lon. Only return items which have a numeric value greater than or equal to given value  Example: 34.808 (optional) (default to undefined)
let gtfsStopLonLowerOrEqual: number; //  Filter by gtfs stop lon. Only return items which have a numeric value lower than or equal to given value  Example: 34.808 (optional) (default to undefined)
let gtfsDateFrom: string; //filter all gtfs related records on this date  Filter by gtfs date. Only return items which have a date after or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (optional) (default to undefined)
let gtfsDateTo: string; //filter all gtfs related records on this date  Filter by gtfs date. Only return items which have a date before or equals to given value. Format: \"YYYY-MM-DD\", e.g. \"2021-11-03\". (optional) (default to undefined)
let orderBy: string; //Order of the results. Comma-separated list of fields and direction. e.g. \"field1 asc,field2 desc\". (optional) (default to '')

const { status, data } = await apiInstance.listSiriRideStopsListGet(
    limit,
    offset,
    getCount,
    siriStopIds,
    siriRideIds,
    siriVehicleLocationLonGreaterOrEqual,
    siriVehicleLocationLonLowerOrEqual,
    siriVehicleLocationLatGreaterOrEqual,
    siriVehicleLocationLatLowerOrEqual,
    siriVehicleLocationRecordedAtTimeFrom,
    siriVehicleLocationRecordedAtTimeTo,
    siriRideScheduledStartTimeFrom,
    siriRideScheduledStartTimeTo,
    gtfsStopLatGreaterOrEqual,
    gtfsStopLatLowerOrEqual,
    gtfsStopLonGreaterOrEqual,
    gtfsStopLonLowerOrEqual,
    gtfsDateFrom,
    gtfsDateTo,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. | (optional) defaults to undefined|
| **offset** | [**number**] | Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\&#39;t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. | (optional) defaults to undefined|
| **getCount** | [**boolean**] | Set to \&quot;true\&quot; to only get the total number of results for given filters. limit/offset/order parameters will be ignored. | (optional) defaults to false|
| **siriStopIds** | [**string**] |   Filter by siri stop id. Comma-separated list of values. | (optional) defaults to undefined|
| **siriRideIds** | [**string**] |   Filter by siri ride id. Comma-separated list of values. | (optional) defaults to undefined|
| **siriVehicleLocationLonGreaterOrEqual** | [**number**] |   Filter by siri vehicle location lon. Only return items which have a numeric value greater than or equal to given value  Example: 34.808 | (optional) defaults to undefined|
| **siriVehicleLocationLonLowerOrEqual** | [**number**] |   Filter by siri vehicle location lon. Only return items which have a numeric value lower than or equal to given value  Example: 34.808 | (optional) defaults to undefined|
| **siriVehicleLocationLatGreaterOrEqual** | [**number**] |   Filter by siri vehicle location lat. Only return items which have a numeric value greater than or equal to given value  Example: 31.961 | (optional) defaults to undefined|
| **siriVehicleLocationLatLowerOrEqual** | [**number**] |   Filter by siri vehicle location lat. Only return items which have a numeric value lower than or equal to given value  Example: 31.961 | (optional) defaults to undefined|
| **siriVehicleLocationRecordedAtTimeFrom** | [**string**] |   Filter by siri vehicle location recorded at time. Only return items which have date/time after or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **siriVehicleLocationRecordedAtTimeTo** | [**string**] |   Filter by siri vehicle location recorded at time. Only return items which have date/time before or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **siriRideScheduledStartTimeFrom** | [**string**] |   Filter by siri ride scheduled start time. Only return items which have date/time after or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **siriRideScheduledStartTimeTo** | [**string**] |   Filter by siri ride scheduled start time. Only return items which have date/time before or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **gtfsStopLatGreaterOrEqual** | [**number**] |   Filter by gtfs stop lat. Only return items which have a numeric value greater than or equal to given value  Example: 31.961 | (optional) defaults to undefined|
| **gtfsStopLatLowerOrEqual** | [**number**] |   Filter by gtfs stop lat. Only return items which have a numeric value lower than or equal to given value  Example: 31.961 | (optional) defaults to undefined|
| **gtfsStopLonGreaterOrEqual** | [**number**] |   Filter by gtfs stop lon. Only return items which have a numeric value greater than or equal to given value  Example: 34.808 | (optional) defaults to undefined|
| **gtfsStopLonLowerOrEqual** | [**number**] |   Filter by gtfs stop lon. Only return items which have a numeric value lower than or equal to given value  Example: 34.808 | (optional) defaults to undefined|
| **gtfsDateFrom** | [**string**] | filter all gtfs related records on this date  Filter by gtfs date. Only return items which have a date after or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | (optional) defaults to undefined|
| **gtfsDateTo** | [**string**] | filter all gtfs related records on this date  Filter by gtfs date. Only return items which have a date before or equals to given value. Format: \&quot;YYYY-MM-DD\&quot;, e.g. \&quot;2021-11-03\&quot;. | (optional) defaults to undefined|
| **orderBy** | [**string**] | Order of the results. Comma-separated list of fields and direction. e.g. \&quot;field1 asc,field2 desc\&quot;. | (optional) defaults to ''|


### Return type

**Array<SiriRideStopWithRelatedPydanticModel>**

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

# **listSiriRidesListGet**
> Array<SiriRideWithRelatedPydanticModel> listSiriRidesListGet()

List of siri rides.

### Example

```typescript
import {
    SiriApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new SiriApi(configuration);

let limit: number; //Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. (optional) (default to undefined)
let offset: number; //Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\'t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. (optional) (default to undefined)
let getCount: boolean; //Set to \"true\" to only get the total number of results for given filters. limit/offset/order parameters will be ignored. (optional) (default to false)
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
let gtfsRideGtfsRouteId: number; //  Filter by related gtfs ride\'s gtfs route id. Only return items which exactly match given string. (optional) (default to undefined)
let gtfsRideJourneyRefPrefix: string; //  Filter by related gtfs ride\'s journey ref prefix. Only return items which start with given string. (optional) (default to undefined)
let gtfsRideStartTimeFrom: string; //  Filter by related gtfs ride\'s start time from. Only return items which have date/time after or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let gtfsRideStartTimeTo: string; //  Filter by related gtfs ride\'s start time to. Only return items which have date/time before or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let siriRouteIds: string; //  Filter by siri route ids. Comma-separated list of values. (optional) (default to undefined)
let siriRouteLineRefs: string; //  Filter by siri route line refs. Comma-separated list of values. (optional) (default to undefined)
let siriRouteOperatorRefs: string; //  Filter by siri route operator refs. Comma-separated list of values. (optional) (default to undefined)
let journeyRefPrefix: string; //  Filter by journey ref prefix. Only return items which start with given string. (optional) (default to undefined)
let journeyRefs: string; //  Filter by journey ref. Comma-separated list of values. (optional) (default to undefined)
let vehicleRefs: string; //  Filter by vehicle ref. Comma-separated list of values. (optional) (default to undefined)
let scheduledStartTimeFrom: string; //  Filter by scheduled start time. Only return items which have date/time after or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let scheduledStartTimeTo: string; //  Filter by scheduled start time. Only return items which have date/time before or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let orderBy: string; //Order of the results. Comma-separated list of fields and direction. e.g. \"field1 asc,field2 desc\". (optional) (default to 'id asc')

const { status, data } = await apiInstance.listSiriRidesListGet(
    limit,
    offset,
    getCount,
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
    gtfsRideGtfsRouteId,
    gtfsRideJourneyRefPrefix,
    gtfsRideStartTimeFrom,
    gtfsRideStartTimeTo,
    siriRouteIds,
    siriRouteLineRefs,
    siriRouteOperatorRefs,
    journeyRefPrefix,
    journeyRefs,
    vehicleRefs,
    scheduledStartTimeFrom,
    scheduledStartTimeTo,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. | (optional) defaults to undefined|
| **offset** | [**number**] | Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\&#39;t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. | (optional) defaults to undefined|
| **getCount** | [**boolean**] | Set to \&quot;true\&quot; to only get the total number of results for given filters. limit/offset/order parameters will be ignored. | (optional) defaults to false|
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
| **gtfsRideGtfsRouteId** | [**number**] |   Filter by related gtfs ride\&#39;s gtfs route id. Only return items which exactly match given string. | (optional) defaults to undefined|
| **gtfsRideJourneyRefPrefix** | [**string**] |   Filter by related gtfs ride\&#39;s journey ref prefix. Only return items which start with given string. | (optional) defaults to undefined|
| **gtfsRideStartTimeFrom** | [**string**] |   Filter by related gtfs ride\&#39;s start time from. Only return items which have date/time after or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **gtfsRideStartTimeTo** | [**string**] |   Filter by related gtfs ride\&#39;s start time to. Only return items which have date/time before or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **siriRouteIds** | [**string**] |   Filter by siri route ids. Comma-separated list of values. | (optional) defaults to undefined|
| **siriRouteLineRefs** | [**string**] |   Filter by siri route line refs. Comma-separated list of values. | (optional) defaults to undefined|
| **siriRouteOperatorRefs** | [**string**] |   Filter by siri route operator refs. Comma-separated list of values. | (optional) defaults to undefined|
| **journeyRefPrefix** | [**string**] |   Filter by journey ref prefix. Only return items which start with given string. | (optional) defaults to undefined|
| **journeyRefs** | [**string**] |   Filter by journey ref. Comma-separated list of values. | (optional) defaults to undefined|
| **vehicleRefs** | [**string**] |   Filter by vehicle ref. Comma-separated list of values. | (optional) defaults to undefined|
| **scheduledStartTimeFrom** | [**string**] |   Filter by scheduled start time. Only return items which have date/time after or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **scheduledStartTimeTo** | [**string**] |   Filter by scheduled start time. Only return items which have date/time before or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **orderBy** | [**string**] | Order of the results. Comma-separated list of fields and direction. e.g. \&quot;field1 asc,field2 desc\&quot;. | (optional) defaults to 'id asc'|


### Return type

**Array<SiriRideWithRelatedPydanticModel>**

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

# **listSiriRoutesListGet**
> Array<SiriRoutePydanticModel> listSiriRoutesListGet()

List of siri routes.

### Example

```typescript
import {
    SiriApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new SiriApi(configuration);

let limit: number; //Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. (optional) (default to undefined)
let offset: number; //Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\'t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. (optional) (default to undefined)
let getCount: boolean; //Set to \"true\" to only get the total number of results for given filters. limit/offset/order parameters will be ignored. (optional) (default to false)
let lineRefs: string; //  Filter by line ref. Comma-separated list of values. (optional) (default to undefined)
let operatorRefs: string; //  Filter by operator ref. Comma-separated list of values. (optional) (default to undefined)
let orderBy: string; //Order of the results. Comma-separated list of fields and direction. e.g. \"field1 asc,field2 desc\". (optional) (default to 'id asc')

const { status, data } = await apiInstance.listSiriRoutesListGet(
    limit,
    offset,
    getCount,
    lineRefs,
    operatorRefs,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. | (optional) defaults to undefined|
| **offset** | [**number**] | Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\&#39;t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. | (optional) defaults to undefined|
| **getCount** | [**boolean**] | Set to \&quot;true\&quot; to only get the total number of results for given filters. limit/offset/order parameters will be ignored. | (optional) defaults to false|
| **lineRefs** | [**string**] |   Filter by line ref. Comma-separated list of values. | (optional) defaults to undefined|
| **operatorRefs** | [**string**] |   Filter by operator ref. Comma-separated list of values. | (optional) defaults to undefined|
| **orderBy** | [**string**] | Order of the results. Comma-separated list of fields and direction. e.g. \&quot;field1 asc,field2 desc\&quot;. | (optional) defaults to 'id asc'|


### Return type

**Array<SiriRoutePydanticModel>**

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

# **listSiriSnapshotsListGet**
> Array<SiriSnapshotPydanticModel> listSiriSnapshotsListGet()

List of siri snapshots.

### Example

```typescript
import {
    SiriApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new SiriApi(configuration);

let limit: number; //Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. (optional) (default to undefined)
let offset: number; //Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\'t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. (optional) (default to undefined)
let getCount: boolean; //Set to \"true\" to only get the total number of results for given filters. limit/offset/order parameters will be ignored. (optional) (default to false)
let snapshotIdPrefix: string; //  Filter by snapshot id prefix. Only return items which start with given string. (optional) (default to undefined)
let orderBy: string; //Order of the results. Comma-separated list of fields and direction. e.g. \"field1 asc,field2 desc\". (optional) (default to 'id asc')

const { status, data } = await apiInstance.listSiriSnapshotsListGet(
    limit,
    offset,
    getCount,
    snapshotIdPrefix,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. | (optional) defaults to undefined|
| **offset** | [**number**] | Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\&#39;t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. | (optional) defaults to undefined|
| **getCount** | [**boolean**] | Set to \&quot;true\&quot; to only get the total number of results for given filters. limit/offset/order parameters will be ignored. | (optional) defaults to false|
| **snapshotIdPrefix** | [**string**] |   Filter by snapshot id prefix. Only return items which start with given string. | (optional) defaults to undefined|
| **orderBy** | [**string**] | Order of the results. Comma-separated list of fields and direction. e.g. \&quot;field1 asc,field2 desc\&quot;. | (optional) defaults to 'id asc'|


### Return type

**Array<SiriSnapshotPydanticModel>**

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

# **listSiriStopsListGet**
> Array<SiriStopPydanticModel> listSiriStopsListGet()

List of siri stops.

### Example

```typescript
import {
    SiriApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new SiriApi(configuration);

let limit: number; //Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. (optional) (default to undefined)
let offset: number; //Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\'t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. (optional) (default to undefined)
let getCount: boolean; //Set to \"true\" to only get the total number of results for given filters. limit/offset/order parameters will be ignored. (optional) (default to false)
let codes: string; //  Filter by stop code. Comma-separated list of values. (optional) (default to undefined)
let orderBy: string; //Order of the results. Comma-separated list of fields and direction. e.g. \"field1 asc,field2 desc\". (optional) (default to 'id asc')

const { status, data } = await apiInstance.listSiriStopsListGet(
    limit,
    offset,
    getCount,
    codes,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. | (optional) defaults to undefined|
| **offset** | [**number**] | Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\&#39;t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. | (optional) defaults to undefined|
| **getCount** | [**boolean**] | Set to \&quot;true\&quot; to only get the total number of results for given filters. limit/offset/order parameters will be ignored. | (optional) defaults to false|
| **codes** | [**string**] |   Filter by stop code. Comma-separated list of values. | (optional) defaults to undefined|
| **orderBy** | [**string**] | Order of the results. Comma-separated list of fields and direction. e.g. \&quot;field1 asc,field2 desc\&quot;. | (optional) defaults to 'id asc'|


### Return type

**Array<SiriStopPydanticModel>**

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

# **listSiriVehicleLocationsListGet**
> Array<SiriVehicleLocationWithRelatedPydanticModel> listSiriVehicleLocationsListGet()

List of siri vehicle locations.

### Example

```typescript
import {
    SiriApi,
    Configuration
} from '@hasadna/open-bus-api-client';

const configuration = new Configuration();
const apiInstance = new SiriApi(configuration);

let limit: number; //Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. (optional) (default to undefined)
let offset: number; //Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\'t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. (optional) (default to undefined)
let getCount: boolean; //Set to \"true\" to only get the total number of results for given filters. limit/offset/order parameters will be ignored. (optional) (default to false)
let siriVehicleLocationIds: string; //  Filter by siri vehicle location id. Comma-separated list of values. (optional) (default to undefined)
let siriSnapshotIds: string; //  Filter by siri snapshot id. Comma-separated list of values. (optional) (default to undefined)
let siriRideStopIds: string; //  Filter by siri ride stop id. Comma-separated list of values. (optional) (default to undefined)
let recordedAtTimeFrom: string; //  Filter by recorded at time. Only return items which have date/time after or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let recordedAtTimeTo: string; //  Filter by recorded at time. Only return items which have date/time before or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let lonGreaterOrEqual: number; //  Filter by lon. Only return items which have a numeric value greater than or equal to given value  Example: 34.808 (optional) (default to undefined)
let lonLowerOrEqual: number; //  Filter by lon. Only return items which have a numeric value lower than or equal to given value  Example: 34.808 (optional) (default to undefined)
let latGreaterOrEqual: number; //  Filter by lat. Only return items which have a numeric value greater than or equal to given value  Example: 31.961 (optional) (default to undefined)
let latLowerOrEqual: number; //  Filter by lat. Only return items which have a numeric value lower than or equal to given value  Example: 31.961 (optional) (default to undefined)
let orderBy: string; //Order of the results. Comma-separated list of fields and direction. e.g. \"field1 asc,field2 desc\". (optional) (default to 'id asc')
let siriRoutesLineRef: string; //  Filter by siri route line ref. Only return items which exactly match given string. (optional) (default to undefined)
let siriRideVehicleRef: string; //  Filter by siri ride vehicle ref. Only return items which exactly match given string. (optional) (default to undefined)
let siriRoutesOperatorRef: string; //  Filter by siri route operator ref. Only return items which exactly match given string. (optional) (default to undefined)
let siriRidesSchedualedStartTimeFrom: string; //  Filter by siri ride scheduled start time. Only return items which have date/time after or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let siriRidesSchedualedStartTimeTo: string; //  Filter by siri ride scheduled start time. Only return items which have date/time before or equals to given value. Format: \"YYYY-MM-DDTHH:MM:SS+Z\", e.g. \"2021-11-03T15:48:49+02:00\". Note that all date/times must have a timezone specification. (optional) (default to undefined)
let siriRidesIds: string; //  Filter by siri ride id. Comma-separated list of values. (optional) (default to undefined)
let siriRoutesIds: string; //  Filter by siri route id. Comma-separated list of values. (optional) (default to undefined)

const { status, data } = await apiInstance.listSiriVehicleLocationsListGet(
    limit,
    offset,
    getCount,
    siriVehicleLocationIds,
    siriSnapshotIds,
    siriRideStopIds,
    recordedAtTimeFrom,
    recordedAtTimeTo,
    lonGreaterOrEqual,
    lonLowerOrEqual,
    latGreaterOrEqual,
    latLowerOrEqual,
    orderBy,
    siriRoutesLineRef,
    siriRideVehicleRef,
    siriRoutesOperatorRef,
    siriRidesSchedualedStartTimeFrom,
    siriRidesSchedualedStartTimeTo,
    siriRidesIds,
    siriRoutesIds
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Limit the number of returned results. If not specified will limit to 100 results. To get more results, you can either use the offset param, alternatively - set the limit to -1 and use http streaming with compatible json streaming decoder to get all results, this method can fetch up to a maximum of 500000 results. | (optional) defaults to undefined|
| **offset** | [**number**] | Item number to start returning results from. Use in combination with limit for pagination, alternatively, don\&#39;t set offset, set limit to -1 and use http streaming with compatible json streaming decoder to get all results up to a maximum of 500000 results. | (optional) defaults to undefined|
| **getCount** | [**boolean**] | Set to \&quot;true\&quot; to only get the total number of results for given filters. limit/offset/order parameters will be ignored. | (optional) defaults to false|
| **siriVehicleLocationIds** | [**string**] |   Filter by siri vehicle location id. Comma-separated list of values. | (optional) defaults to undefined|
| **siriSnapshotIds** | [**string**] |   Filter by siri snapshot id. Comma-separated list of values. | (optional) defaults to undefined|
| **siriRideStopIds** | [**string**] |   Filter by siri ride stop id. Comma-separated list of values. | (optional) defaults to undefined|
| **recordedAtTimeFrom** | [**string**] |   Filter by recorded at time. Only return items which have date/time after or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **recordedAtTimeTo** | [**string**] |   Filter by recorded at time. Only return items which have date/time before or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **lonGreaterOrEqual** | [**number**] |   Filter by lon. Only return items which have a numeric value greater than or equal to given value  Example: 34.808 | (optional) defaults to undefined|
| **lonLowerOrEqual** | [**number**] |   Filter by lon. Only return items which have a numeric value lower than or equal to given value  Example: 34.808 | (optional) defaults to undefined|
| **latGreaterOrEqual** | [**number**] |   Filter by lat. Only return items which have a numeric value greater than or equal to given value  Example: 31.961 | (optional) defaults to undefined|
| **latLowerOrEqual** | [**number**] |   Filter by lat. Only return items which have a numeric value lower than or equal to given value  Example: 31.961 | (optional) defaults to undefined|
| **orderBy** | [**string**] | Order of the results. Comma-separated list of fields and direction. e.g. \&quot;field1 asc,field2 desc\&quot;. | (optional) defaults to 'id asc'|
| **siriRoutesLineRef** | [**string**] |   Filter by siri route line ref. Only return items which exactly match given string. | (optional) defaults to undefined|
| **siriRideVehicleRef** | [**string**] |   Filter by siri ride vehicle ref. Only return items which exactly match given string. | (optional) defaults to undefined|
| **siriRoutesOperatorRef** | [**string**] |   Filter by siri route operator ref. Only return items which exactly match given string. | (optional) defaults to undefined|
| **siriRidesSchedualedStartTimeFrom** | [**string**] |   Filter by siri ride scheduled start time. Only return items which have date/time after or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **siriRidesSchedualedStartTimeTo** | [**string**] |   Filter by siri ride scheduled start time. Only return items which have date/time before or equals to given value. Format: \&quot;YYYY-MM-DDTHH:MM:SS+Z\&quot;, e.g. \&quot;2021-11-03T15:48:49+02:00\&quot;. Note that all date/times must have a timezone specification. | (optional) defaults to undefined|
| **siriRidesIds** | [**string**] |   Filter by siri ride id. Comma-separated list of values. | (optional) defaults to undefined|
| **siriRoutesIds** | [**string**] |   Filter by siri route id. Comma-separated list of values. | (optional) defaults to undefined|


### Return type

**Array<SiriVehicleLocationWithRelatedPydanticModel>**

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

