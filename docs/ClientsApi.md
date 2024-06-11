# ClientsApi


Method | HTTP request | Description
------------- | ------------- | -------------
[**accessList**](ClientsApi.md#accessList) | **GET** /access/list | List (dis)allowed clients, blocked hosts, etc.
[**accessSet**](ClientsApi.md#accessSet) | **POST** /access/set | Set (dis)allowed clients, blocked hosts, etc.
[**clientsAdd**](ClientsApi.md#clientsAdd) | **POST** /clients/add | Add a new client
[**clientsDelete**](ClientsApi.md#clientsDelete) | **POST** /clients/delete | Remove a client
[**clientsFind**](ClientsApi.md#clientsFind) | **GET** /clients/find | Get information about clients by their IP addresses or ClientIDs. 
[**clientsStatus**](ClientsApi.md#clientsStatus) | **GET** /clients | Get information about configured clients
[**clientsUpdate**](ClientsApi.md#clientsUpdate) | **POST** /clients/update | Update client information


# **accessList**
> AccessList accessList()


### Example


```typescript
import { createConfiguration, ServerConfiguration, ClientsApi } from 'adguardhome';
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
const apiInstance = new ClientsApi(configuration);

let body:any = {};

apiInstance.accessList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**AccessList**

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

# **accessSet**
> void accessSet(body)


### Example


```typescript
import { createConfiguration, ServerConfiguration, ClientsApi, ClientsApiAccessSetRequest } from 'adguardhome';
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
const apiInstance = new ClientsApi(configuration);

let body: ClientsApiAccessSetRequest = {
  // AccessList
  body: {
    allowedClients: [
      "allowedClients_example",
    ],
    disallowedClients: [
      "disallowedClients_example",
    ],
    blockedHosts: [
      "blockedHosts_example",
    ],
  },
};

apiInstance.accessSet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AccessList**|  |


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
**400** | Failed to parse JSON or cannot save the list.  |  -  |
**500** | Internal error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clientsAdd**
> void clientsAdd(client)


### Example


```typescript
import { createConfiguration, ServerConfiguration, ClientsApi, ClientsApiClientsAddRequest } from 'adguardhome';
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
const apiInstance = new ClientsApi(configuration);

let body: ClientsApiClientsAddRequest = {
  // Client
  client: {
    name: "localhost",
    ids: [
      "ids_example",
    ],
    useGlobalSettings: true,
    filteringEnabled: true,
    parentalEnabled: true,
    safebrowsingEnabled: true,
    safesearchEnabled: true,
    safeSearch: {
      enabled: true,
      bing: true,
      duckduckgo: true,
      google: true,
      pixabay: true,
      yandex: true,
      youtube: true,
    },
    useGlobalBlockedServices: true,
    blockedServicesSchedule: {
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
    blockedServices: [
      "blockedServices_example",
    ],
    upstreams: [
      "upstreams_example",
    ],
    tags: [
      "tags_example",
    ],
    ignoreQuerylog: true,
    ignoreStatistics: true,
    upstreamsCacheEnabled: true,
    upstreamsCacheSize: 1,
  },
};

apiInstance.clientsAdd(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **Client**|  |


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

# **clientsDelete**
> void clientsDelete(clientDelete)


### Example


```typescript
import { createConfiguration, ServerConfiguration, ClientsApi , ClientsApiClientsDeleteRequest} from 'adguardhome';
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
const apiInstance = new ClientsApi(configuration);

let body: ClientsApiClientsDeleteRequest = {
  // ClientDelete
  clientDelete: {
    name: "name_example",
  },
};

apiInstance.clientsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientDelete** | **ClientDelete**|  |


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

# **clientsFind**
> Array<{ [key: string]: ClientFindSubEntry; }> clientsFind()


### Example


```typescript
import { createConfiguration, ServerConfiguration, ClientsApi,ClientsApiClientsFindRequest } from 'adguardhome';
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
const apiInstance = new ClientsApi(configuration);

let body: ClientsApiClientsFindRequest = {
  // string | Filter by IP address or ClientIDs.  Parameters with names `ip1`, `ip2`, and so on are also accepted and interpreted as \"ip0 OR ip1 OR ip2\". TODO(a.garipov): Replace with a better query API.  (optional)
  ip0: "ip0_example",
};

apiInstance.clientsFind(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip0** | [**string**] | Filter by IP address or ClientIDs.  Parameters with names &#x60;ip1&#x60;, &#x60;ip2&#x60;, and so on are also accepted and interpreted as \&quot;ip0 OR ip1 OR ip2\&quot;. TODO(a.garipov): Replace with a better query API.  | (optional) defaults to undefined


### Return type

**Array<{ [key: string]: ClientFindSubEntry; }>**

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

# **clientsStatus**
> Clients clientsStatus()


### Example


```typescript
import { createConfiguration, ServerConfiguration, ClientsApi } from 'adguardhome';
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
const apiInstance = new ClientsApi(configuration);

let body:any = {};

apiInstance.clientsStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Clients**

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

# **clientsUpdate**
> void clientsUpdate(clientUpdate)


### Example


```typescript
import { createConfiguration, ServerConfiguration, ClientsApi, ClientsApiClientsUpdateRequest } from 'adguardhome';
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
const apiInstance = new ClientsApi(configuration);

let body: ClientsApiClientsUpdateRequest = {
  // ClientUpdate
  clientUpdate: {
    name: "name_example",
    data: {
      name: "localhost",
      ids: [
        "ids_example",
      ],
      useGlobalSettings: true,
      filteringEnabled: true,
      parentalEnabled: true,
      safebrowsingEnabled: true,
      safesearchEnabled: true,
      safeSearch: {
        enabled: true,
        bing: true,
        duckduckgo: true,
        google: true,
        pixabay: true,
        yandex: true,
        youtube: true,
      },
      useGlobalBlockedServices: true,
      blockedServicesSchedule: {
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
      blockedServices: [
        "blockedServices_example",
      ],
      upstreams: [
        "upstreams_example",
      ],
      tags: [
        "tags_example",
      ],
      ignoreQuerylog: true,
      ignoreStatistics: true,
      upstreamsCacheEnabled: true,
      upstreamsCacheSize: 1,
    },
  },
};

apiInstance.clientsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientUpdate** | **ClientUpdate**|  |


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


