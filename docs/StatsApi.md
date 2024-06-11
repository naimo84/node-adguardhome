# .StatsApi

All URIs are relative to *https://raw.githubusercontent.com/control*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStatsConfig**](StatsApi.md#getStatsConfig) | **GET** /stats/config | Get statistics parameters
[**putStatsConfig**](StatsApi.md#putStatsConfig) | **PUT** /stats/config/update | Set statistics parameters
[**stats**](StatsApi.md#stats) | **GET** /stats | Get DNS server statistics
[**statsConfig**](StatsApi.md#statsConfig) | **POST** /stats_config | Set statistics parameters
[**statsInfo**](StatsApi.md#statsInfo) | **GET** /stats_info | Get statistics parameters
[**statsReset**](StatsApi.md#statsReset) | **POST** /stats_reset | Reset all statistics to zeroes


# **getStatsConfig**
> GetStatsConfigResponse getStatsConfig()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StatsApi(configuration);

let body:any = {};

apiInstance.getStatsConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetStatsConfigResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putStatsConfig**
> void putStatsConfig(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StatsApi(configuration);

let body:.StatsApiPutStatsConfigRequest = {
  // GetStatsConfigResponse
  body: {
    enabled: true,
    interval: 3.14,
    ignored: [
      "ignored_example",
    ],
  },
};

apiInstance.putStatsConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **GetStatsConfigResponse**|  |


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **stats**
> Stats stats()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StatsApi(configuration);

let body:any = {};

apiInstance.stats(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Stats**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns statistics data |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsConfig**
> void statsConfig()

Deprecated: Use `PUT /stats/config/update` instead. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StatsApi(configuration);

let body:.StatsApiStatsConfigRequest = {
  // StatsConfig (optional)
  statsConfig: {
    interval: 0,
  },
};

apiInstance.statsConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **statsConfig** | **StatsConfig**|  |


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsInfo**
> StatsConfig statsInfo()

Deprecated: Use `GET /stats/config` instead.  NOTE: If `interval` was configured by editing configuration file or new HTTP API call `PUT /stats/config/update` and it\'s not equal to previous allowed enum values then it will be equal to `90` days for compatibility reasons. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StatsApi(configuration);

let body:any = {};

apiInstance.statsInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**StatsConfig**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **statsReset**
> void statsReset()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StatsApi(configuration);

let body:any = {};

apiInstance.statsReset(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


