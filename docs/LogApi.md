# LogApi


Method | HTTP request | Description
------------- | ------------- | -------------
[**getQueryLogConfig**](LogApi.md#getQueryLogConfig) | **GET** /querylog/config | Get query log parameters
[**putQueryLogConfig**](LogApi.md#putQueryLogConfig) | **PUT** /querylog/config/update | Set query log parameters
[**queryLog**](LogApi.md#queryLog) | **GET** /querylog | Get DNS server query log.
[**queryLogConfig**](LogApi.md#queryLogConfig) | **POST** /querylog_config | Set query log parameters
[**queryLogInfo**](LogApi.md#queryLogInfo) | **GET** /querylog_info | Get query log parameters
[**querylogClear**](LogApi.md#querylogClear) | **POST** /querylog_clear | Clear query log


# **getQueryLogConfig**
> GetQueryLogConfigResponse getQueryLogConfig()


### Example


```typescript
import { createConfiguration, ServerConfiguration, LogApi } from 'adguardhome';
import * as fs from 'fs';

const configuration = createConfiguration({
    baseServer: new ServerConfiguration("http://adguarghome-ip/control/"),
    authMethods: {
        basicAuth: {
            username: "user",
            password: "pass"
        }
    }
});
const apiInstance = new LogApi(configuration);

let body:any = {};

apiInstance.getQueryLogConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetQueryLogConfigResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putQueryLogConfig**
> void putQueryLogConfig(body)


### Example


```typescript
import { createConfiguration, ServerConfiguration, LogApi, LogApiPutQueryLogConfigRequest } from 'adguardhome';
import * as fs from 'fs';

const configuration = createConfiguration({
    baseServer: new ServerConfiguration("http://adguarghome-ip/control/"),
    authMethods: {
        basicAuth: {
            username: "user",
            password: "pass"
        }
    }
});
const apiInstance = new LogApi(configuration);

let body: LogApiPutQueryLogConfigRequest = {
  // GetQueryLogConfigResponse
  body: {
    enabled: true,
    interval: 3.14,
    anonymizeClientIp: true,
    ignored: [
      "ignored_example",
    ],
  },
};

apiInstance.putQueryLogConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **GetQueryLogConfigResponse**|  |


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queryLog**
> QueryLog queryLog()


### Example


```typescript
import { createConfiguration, ServerConfiguration, LogApi, LogApiQueryLogRequest } from 'adguardhome';
import * as fs from 'fs';

const configuration = createConfiguration({
    baseServer: new ServerConfiguration("http://adguarghome-ip/control/"),
    authMethods: {
        basicAuth: {
            username: "user",
            password: "pass"
        }
    }
});
const apiInstance = new LogApi(configuration);

let body: LogApiQueryLogRequest = {
  // string | Filter by older than (optional)
  olderThan: "older_than_example",
  // number | Specify the ranking number of the first item on the page.  Even though it is possible to use \"offset\" and \"older_than\", we recommend choosing one of them and sticking to it.  (optional)
  offset: 1,
  // number | Limit the number of records to be returned (optional)
  limit: 1,
  // string | Filter by domain name or client IP (optional)
  search: "search_example",
  // 'all' | 'filtered' | 'blocked' | 'blocked_safebrowsing' | 'blocked_parental' | 'whitelisted' | 'rewritten' | 'safe_search' | 'processed' | Filter by response status (optional)
  responseStatus: "all",
};

apiInstance.queryLog(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **olderThan** | [**string**] | Filter by older than | (optional) defaults to undefined
 **offset** | [**number**] | Specify the ranking number of the first item on the page.  Even though it is possible to use \&quot;offset\&quot; and \&quot;older_than\&quot;, we recommend choosing one of them and sticking to it.  | (optional) defaults to undefined
 **limit** | [**number**] | Limit the number of records to be returned | (optional) defaults to undefined
 **search** | [**string**] | Filter by domain name or client IP | (optional) defaults to undefined
 **responseStatus** | [**&#39;all&#39; | &#39;filtered&#39; | &#39;blocked&#39; | &#39;blocked_safebrowsing&#39; | &#39;blocked_parental&#39; | &#39;whitelisted&#39; | &#39;rewritten&#39; | &#39;safe_search&#39; | &#39;processed&#39;**]**Array<&#39;all&#39; &#124; &#39;filtered&#39; &#124; &#39;blocked&#39; &#124; &#39;blocked_safebrowsing&#39; &#124; &#39;blocked_parental&#39; &#124; &#39;whitelisted&#39; &#124; &#39;rewritten&#39; &#124; &#39;safe_search&#39; &#124; &#39;processed&#39;>** | Filter by response status | (optional) defaults to undefined


### Return type

**QueryLog**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queryLogConfig**
> void queryLogConfig()

Deprecated: Use `PUT /querylog/config/update` instead. 

### Example


```typescript
import { createConfiguration, ServerConfiguration, LogApi, LogApiQueryLogConfigRequest } from 'adguardhome';
import * as fs from 'fs';

const configuration = createConfiguration({
    baseServer: new ServerConfiguration("http://adguarghome-ip/control/"),
    authMethods: {
        basicAuth: {
            username: "user",
            password: "pass"
        }
    }
});
const apiInstance = new LogApi(configuration);

let body: LogApiQueryLogConfigRequest = {
  // QueryLogConfig (optional)
  queryLogConfig: {
    enabled: true,
    interval: 0.25,
    anonymizeClientIp: true,
  },
};

apiInstance.queryLogConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryLogConfig** | **QueryLogConfig**|  |


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queryLogInfo**
> QueryLogConfig queryLogInfo()

Deprecated: Use `GET /querylog/config` instead.  NOTE: If `interval` was configured by editing configuration file or new HTTP API call `PUT /querylog/config/update` and it\'s not equal to previous allowed enum values then it will be equal to `90` days for compatibility reasons. 

### Example


```typescript
import { createConfiguration, ServerConfiguration, LogApi } from 'adguardhome';
import * as fs from 'fs';

const configuration = createConfiguration({
    baseServer: new ServerConfiguration("http://adguarghome-ip/control/"),
    authMethods: {
        basicAuth: {
            username: "user",
            password: "pass"
        }
    }
});
const apiInstance = new LogApi(configuration);

let body:any = {};

apiInstance.queryLogInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**QueryLogConfig**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **querylogClear**
> void querylogClear()


### Example


```typescript
import { createConfiguration, ServerConfiguration, LogApi } from 'adguardhome';
import * as fs from 'fs';

const configuration = createConfiguration({
    baseServer: new ServerConfiguration("http://adguarghome-ip/control/"),
    authMethods: {
        basicAuth: {
            username: "user",
            password: "pass"
        }
    }
});
const apiInstance = new LogApi(configuration);

let body:any = {};

apiInstance.querylogClear(body).then((data:any) => {
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


