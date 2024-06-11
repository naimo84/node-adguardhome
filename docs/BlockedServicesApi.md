# BlockedServicesApi


Method | HTTP request | Description
------------- | ------------- | -------------
[**blockedServicesAll**](BlockedServicesApi.md#blockedServicesAll) | **GET** /blocked_services/all | Get available services to use for blocking
[**blockedServicesAvailableServices**](BlockedServicesApi.md#blockedServicesAvailableServices) | **GET** /blocked_services/services | Get available services to use for blocking
[**blockedServicesList**](BlockedServicesApi.md#blockedServicesList) | **GET** /blocked_services/list | Get blocked services list
[**blockedServicesSchedule**](BlockedServicesApi.md#blockedServicesSchedule) | **GET** /blocked_services/get | Get blocked services
[**blockedServicesScheduleUpdate**](BlockedServicesApi.md#blockedServicesScheduleUpdate) | **PUT** /blocked_services/update | Update blocked services
[**blockedServicesSet**](BlockedServicesApi.md#blockedServicesSet) | **POST** /blocked_services/set | Set blocked services list


# **blockedServicesAll**
> BlockedServicesAll blockedServicesAll()


### Example


```typescript
import { createConfiguration, ServerConfiguration, BlockedServicesApi } from 'adguardhome';
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
const apiInstance = new BlockedServicesApi(configuration);

let body:any = {};

apiInstance.blockedServicesAll(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

[**BlockedServicesAll**](BlockedServicesAll.md)

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

# **blockedServicesAvailableServices**
> Array<string> blockedServicesAvailableServices()

Deprecated: Use `GET /blocked_services/all` instead. 

### Example


```typescript
import { createConfiguration, ServerConfiguration, BlockedServicesApi } from 'adguardhome';
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
const apiInstance = new BlockedServicesApi(configuration);

let body:any = {};

apiInstance.blockedServicesAvailableServices(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<string>**

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

# **blockedServicesList**
> Array<string> blockedServicesList()

Deprecated: Use `GET /blocked_services/get` instead. 

### Example


```typescript
import { createConfiguration, ServerConfiguration, BlockedServicesApi } from 'adguardhome';
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
const apiInstance = new BlockedServicesApi(configuration);

let body:any = {};

apiInstance.blockedServicesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<string>**

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

# **blockedServicesSchedule**
> BlockedServicesSchedule blockedServicesSchedule()


### Example


```typescript
import { createConfiguration, ServerConfiguration, BlockedServicesApi } from 'adguardhome';
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
const apiInstance = new BlockedServicesApi(configuration);

let body:any = {};

apiInstance.blockedServicesSchedule(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

[**BlockedServicesSchedule**](BlockedServicesSchedule.md)

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

# **blockedServicesScheduleUpdate**
> void blockedServicesScheduleUpdate(blockedServicesSchedule)


### Example


```typescript
import { createConfiguration, ServerConfiguration, BlockedServicesApi, BlockedServicesApiBlockedServicesScheduleUpdateRequest } from 'adguardhome';
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
const apiInstance = new BlockedServicesApi(configuration);

let body: BlockedServicesApiBlockedServicesScheduleUpdateRequest = {
  // BlockedServicesSchedule
  blockedServicesSchedule: {
    schedule: {
      timeZone: "timeZone_example",
      sun: {
        start: 0,
        end: 0,
      },
      mon: {
        start: 0,
        end: 0,
      },
      tue: {
        start: 0,
        end: 0,
      },
      wed: {
        start: 0,
        end: 0,
      },
      thu: {
        start: 0,
        end: 0,
      },
      fri: {
        start: 0,
        end: 0,
      },
      sat: {
        start: 0,
        end: 0,
      },
    },
    ids: [
      "ids_example",
    ],
  },
};

apiInstance.blockedServicesScheduleUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockedServicesSchedule** | **BlockedServicesSchedule**|  |


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

# **blockedServicesSet**
> void blockedServicesSet()

Deprecated: Use `PUT /blocked_services/update` instead. 

### Example


```typescript
import { createConfiguration, ServerConfiguration, BlockedServicesApi, BlockedServicesApiBlockedServicesScheduleUpdateRequest } from 'adguardhome';
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
const apiInstance = new BlockedServicesApi(configuration);

let body: BlockedServicesApiBlockedServicesSetRequest = {
  // Array<string> (optional)
  requestBody: [
    "requestBody_example",
  ],
};

apiInstance.blockedServicesSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<string>**|  |


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


