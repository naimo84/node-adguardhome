# FilteringApi


Method | HTTP request | Description
------------- | ------------- | -------------
[**filteringAddURL**](FilteringApi.md#filteringAddURL) | **POST** /filtering/add_url | Add filter URL or an absolute file path
[**filteringCheckHost**](FilteringApi.md#filteringCheckHost) | **GET** /filtering/check_host | Check if host name is filtered
[**filteringConfig**](FilteringApi.md#filteringConfig) | **POST** /filtering/config | Set filtering parameters
[**filteringRefresh**](FilteringApi.md#filteringRefresh) | **POST** /filtering/refresh | Reload filtering rules from URLs.  This might be needed if new URL was just added and you don\&#39;t want to wait for automatic refresh to kick in. This API request is ratelimited, so you can call it freely as often as you like, it wont create unnecessary burden on servers that host the URL.  This should work as intended, a &#x60;force&#x60; parameter is offered as last-resort attempt to make filter lists fresh.  If you ever find yourself using &#x60;force&#x60; to make something work that otherwise wont, this is a bug and report it accordingly. 
[**filteringRemoveURL**](FilteringApi.md#filteringRemoveURL) | **POST** /filtering/remove_url | Remove filter URL
[**filteringSetRules**](FilteringApi.md#filteringSetRules) | **POST** /filtering/set_rules | Set user-defined filter rules
[**filteringSetURL**](FilteringApi.md#filteringSetURL) | **POST** /filtering/set_url | Set URL parameters
[**filteringStatus**](FilteringApi.md#filteringStatus) | **GET** /filtering/status | Get filtering parameters


# **filteringAddURL**
> void filteringAddURL(addUrlRequest)


### Example


```typescript
import { createConfiguration, ServerConfiguration, FilteringApi, FilteringApiFilteringAddURLRequest } from 'adguardhome';
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
const apiInstance = new FilteringApi(configuration);

let body: FilteringApiFilteringAddURLRequest = {
  // AddUrlRequest
  addUrlRequest: {
    name: "name_example",
    url: "https://filters.adtidy.org/windows/filters/15.txt",
    whitelist: true,
  },
};

apiInstance.filteringAddURL(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addUrlRequest** | **AddUrlRequest**|  |


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

# **filteringCheckHost**
> FilterCheckHostResponse filteringCheckHost()


### Example


```typescript
import { createConfiguration, ServerConfiguration, FilteringApi, FilteringApiFilteringCheckHostRequest } from 'adguardhome';
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
const apiInstance = new FilteringApi(configuration);

let body: FilteringApiFilteringCheckHostRequest = {
  // string | Filter by host name (optional)
  name: "name_example",
};

apiInstance.filteringCheckHost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Filter by host name | (optional) defaults to undefined


### Return type

**FilterCheckHostResponse**

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

# **filteringConfig**
> void filteringConfig(filterConfig)


### Example


```typescript
import { createConfiguration, ServerConfiguration, FilteringApi, FilteringApiFilteringConfigRequest } from 'adguardhome';
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
const apiInstance = new FilteringApi(configuration);

let body: FilteringApiFilteringConfigRequest = {
  // FilterConfig
  filterConfig: {
    enabled: true,
    interval: 1,
  },
};

apiInstance.filteringConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterConfig** | **FilterConfig**|  |


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

# **filteringRefresh**
> FilterRefreshResponse filteringRefresh()


### Example


```typescript
import { createConfiguration, ServerConfiguration, FilteringApi, FilteringApiFilteringRefreshRequest} from 'adguardhome';
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
const apiInstance = new FilteringApi(configuration);

let body: FilteringApiFilteringRefreshRequest = {
  // FilterRefreshRequest (optional)
  filterRefreshRequest: {
    whitelist: true,
  },
};

apiInstance.filteringRefresh(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterRefreshRequest** | **FilterRefreshRequest**|  |


### Return type

**FilterRefreshResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filteringRemoveURL**
> void filteringRemoveURL(removeUrlRequest)


### Example


```typescript
import { createConfiguration, ServerConfiguration, FilteringApi, FilteringApiFilteringRemoveURLRequest } from 'adguardhome';
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
const apiInstance = new FilteringApi(configuration);

let body: FilteringApiFilteringRemoveURLRequest = {
  // RemoveUrlRequest
  removeUrlRequest: {
    url: "https://filters.adtidy.org/windows/filters/15.txt",
    whitelist: true,
  },
};

apiInstance.filteringRemoveURL(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeUrlRequest** | **RemoveUrlRequest**|  |


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

# **filteringSetRules**
> void filteringSetRules()


### Example


```typescript
import { createConfiguration, ServerConfiguration, FilteringApi, FilteringApiFilteringSetRulesRequest } from 'adguardhome';
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
const apiInstance = new FilteringApi(configuration);

let body: FilteringApiFilteringSetRulesRequest = {
  // SetRulesRequest | Custom filtering rules. (optional)
  setRulesRequest: {
    rules: [
      "rules_example",
    ],
  },
};

apiInstance.filteringSetRules(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setRulesRequest** | **SetRulesRequest**| Custom filtering rules. |


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

# **filteringSetURL**
> void filteringSetURL()


### Example


```typescript
import { createConfiguration, ServerConfiguration, FilteringApi, FilteringApiFilteringSetURLRequest } from 'adguardhome';
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
const apiInstance = new FilteringApi(configuration);

let body: FilteringApiFilteringSetURLRequest = {
  // FilterSetUrl (optional)
  filterSetUrl: {
    data: {
      enabled: true,
      name: "AdGuard Simplified Domain Names filter",
      url: `https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt
`,
    },
    url: "url_example",
    whitelist: true,
  },
};

apiInstance.filteringSetURL(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterSetUrl** | **FilterSetUrl**|  |


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

# **filteringStatus**
> FilterStatus filteringStatus()


### Example


```typescript
import { createConfiguration, ServerConfiguration, FilteringApi } from 'adguardhome';
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
const apiInstance = new FilteringApi(configuration);

let body:any = {};

apiInstance.filteringStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**FilterStatus**

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


