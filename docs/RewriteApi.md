# RewriteApi


Method | HTTP request | Description
------------- | ------------- | -------------
[**rewriteAdd**](RewriteApi.md#rewriteAdd) | **POST** /rewrite/add | Add a new Rewrite rule
[**rewriteDelete**](RewriteApi.md#rewriteDelete) | **POST** /rewrite/delete | Remove a Rewrite rule
[**rewriteList**](RewriteApi.md#rewriteList) | **GET** /rewrite/list | Get list of Rewrite rules
[**rewriteUpdate**](RewriteApi.md#rewriteUpdate) | **PUT** /rewrite/update | Update a Rewrite rule


# **rewriteAdd**
> void rewriteAdd(rewriteEntry)


### Example


```typescript
import { createConfiguration, ServerConfiguration, RewriteApi,RewriteApiRewriteAddRequest } from 'adguardhome';
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
const apiInstance = new RewriteApi(configuration);

let body:RewriteApiRewriteAddRequest = {
  // RewriteEntry
  rewriteEntry: {
    domain: "example.org",
    answer: "127.0.0.1",
  },
};

apiInstance.rewriteAdd(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewriteEntry** | **RewriteEntry**|  |


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

# **rewriteDelete**
> void rewriteDelete(rewriteEntry)


### Example


```typescript
import { createConfiguration, ServerConfiguration, RewriteApi,RewriteApiRewriteDeleteRequest } from 'adguardhome';
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
const apiInstance = new RewriteApi(configuration);

let body:RewriteApiRewriteDeleteRequest = {
  // RewriteEntry
  rewriteEntry: {
    domain: "example.org",
    answer: "127.0.0.1",
  },
};

apiInstance.rewriteDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewriteEntry** | **RewriteEntry**|  |


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

# **rewriteList**
> Array<RewriteEntry> rewriteList()


### Example


```typescript
import { createConfiguration, ServerConfiguration, RewriteApi } from 'adguardhome';
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
const apiInstance = new RewriteApi(configuration);

let body:any = {};

apiInstance.rewriteList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<RewriteEntry>**

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

# **rewriteUpdate**
> void rewriteUpdate(rewriteUpdate)


### Example


```typescript
import { createConfiguration, ServerConfiguration, RewriteApi,RewriteApiRewriteUpdateRequest } from 'adguardhome';
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
const apiInstance = new RewriteApi(configuration);

let body:RewriteApiRewriteUpdateRequest = {
  // RewriteUpdate
  rewriteUpdate: {
    target: {
      domain: "example.org",
      answer: "127.0.0.1",
    },
    update: {
      domain: "example.org",
      answer: "127.0.0.1",
    },
  },
};

apiInstance.rewriteUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rewriteUpdate** | **RewriteUpdate**|  |


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


