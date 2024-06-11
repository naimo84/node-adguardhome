# DhcpApi


Method | HTTP request | Description
------------- | ------------- | -------------
[**checkActiveDhcp**](DhcpApi.md#checkActiveDhcp) | **POST** /dhcp/find_active_dhcp | Searches for an active DHCP server on the network
[**dhcpAddStaticLease**](DhcpApi.md#dhcpAddStaticLease) | **POST** /dhcp/add_static_lease | Adds a static lease
[**dhcpInterfaces**](DhcpApi.md#dhcpInterfaces) | **GET** /dhcp/interfaces | Gets the available interfaces
[**dhcpRemoveStaticLease**](DhcpApi.md#dhcpRemoveStaticLease) | **POST** /dhcp/remove_static_lease | Removes a static lease
[**dhcpReset**](DhcpApi.md#dhcpReset) | **POST** /dhcp/reset | Reset DHCP configuration
[**dhcpResetLeases**](DhcpApi.md#dhcpResetLeases) | **POST** /dhcp/reset_leases | Reset DHCP leases
[**dhcpSetConfig**](DhcpApi.md#dhcpSetConfig) | **POST** /dhcp/set_config | Updates the current DHCP server configuration
[**dhcpStatus**](DhcpApi.md#dhcpStatus) | **GET** /dhcp/status | Gets the current DHCP settings and status
[**dhcpUpdateStaticLease**](DhcpApi.md#dhcpUpdateStaticLease) | **POST** /dhcp/update_static_lease | Updates a static lease


# **checkActiveDhcp**
> DhcpSearchResult checkActiveDhcp()


### Example


```typescript
import { createConfiguration, ServerConfiguration, DhcpApi, DhcpApiCheckActiveDhcpRequest } from 'adguardhome';
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
const apiInstance = new DhcpApi(configuration);

let body: DhcpApiCheckActiveDhcpRequest = {
  // DhcpFindActiveReq (optional)
  dhcpFindActiveReq: {
    _interface: "eth0",
  },
};

apiInstance.checkActiveDhcp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dhcpFindActiveReq** | **DhcpFindActiveReq**|  |


### Return type

**DhcpSearchResult**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**501** | Not implemented (for example, on Windows). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dhcpAddStaticLease**
> void dhcpAddStaticLease(dhcpStaticLease)


### Example


```typescript
import { createConfiguration, ServerConfiguration, DhcpApi,DhcpApiDhcpAddStaticLeaseRequest } from 'adguardhome';
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
const apiInstance = new DhcpApi(configuration);

let body: DhcpApiDhcpAddStaticLeaseRequest = {
  // DhcpStaticLease
  dhcpStaticLease: {
    mac: "00:11:09:b3:b3:b8",
    ip: "192.168.1.22",
    hostname: "dell",
  },
};

apiInstance.dhcpAddStaticLease(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dhcpStaticLease** | **DhcpStaticLease**|  |


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**501** | Not implemented (for example, on Windows). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dhcpInterfaces**
> { [key: string]: NetInterface; } dhcpInterfaces()


### Example


```typescript
import { createConfiguration, ServerConfiguration, DhcpApi } from 'adguardhome';
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
const apiInstance = new DhcpApi(configuration);

let body:any = {};

apiInstance.dhcpInterfaces(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**{ [key: string]: NetInterface; }**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**500** | Not implemented (for example, on Windows). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dhcpRemoveStaticLease**
> void dhcpRemoveStaticLease(dhcpStaticLease)


### Example


```typescript
import { createConfiguration, ServerConfiguration, DhcpApi, DhcpApiDhcpRemoveStaticLeaseRequest } from 'adguardhome';
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
const apiInstance = new DhcpApi(configuration);

let body: DhcpApiDhcpRemoveStaticLeaseRequest = {
  // DhcpStaticLease
  dhcpStaticLease: {
    mac: "00:11:09:b3:b3:b8",
    ip: "192.168.1.22",
    hostname: "dell",
  },
};

apiInstance.dhcpRemoveStaticLease(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dhcpStaticLease** | **DhcpStaticLease**|  |


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**501** | Not implemented (for example, on Windows). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dhcpReset**
> void dhcpReset()


### Example


```typescript
import { createConfiguration, ServerConfiguration, DhcpApi } from 'adguardhome';
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
const apiInstance = new DhcpApi(configuration);

let body:any = {};

apiInstance.dhcpReset(body).then((data:any) => {
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
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**501** | Not implemented (for example, on Windows). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dhcpResetLeases**
> void dhcpResetLeases()


### Example


```typescript
import { createConfiguration, ServerConfiguration, DhcpApi } from 'adguardhome';
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
const apiInstance = new DhcpApi(configuration);

let body:any = {};

apiInstance.dhcpResetLeases(body).then((data:any) => {
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
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**501** | Not implemented (for example, on Windows). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dhcpSetConfig**
> void dhcpSetConfig()


### Example


```typescript
import { createConfiguration, ServerConfiguration, DhcpApi , DhcpApiDhcpSetConfigRequest} from 'adguardhome';
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
const apiInstance = new DhcpApi(configuration);

let body: DhcpApiDhcpSetConfigRequest = {
  // DhcpConfig (optional)
  dhcpConfig: {
    enabled: true,
    interfaceName: "interfaceName_example",
    v4: {
      gatewayIp: "192.168.1.1",
      subnetMask: "255.255.255.0",
      rangeStart: "192.168.1.2",
      rangeEnd: "192.168.10.50",
      leaseDuration: 1,
    },
    v6: {
      rangeStart: "rangeStart_example",
      leaseDuration: 1,
    },
  },
};

apiInstance.dhcpSetConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dhcpConfig** | **DhcpConfig**|  |


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**501** | Not implemented (for example, on Windows). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dhcpStatus**
> DhcpStatus dhcpStatus()


### Example


```typescript
import { createConfiguration, ServerConfiguration, DhcpApi } from 'adguardhome';
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
const apiInstance = new DhcpApi(configuration);

let body:any = {};

apiInstance.dhcpStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**DhcpStatus**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**500** | Not implemented (for example, on Windows). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dhcpUpdateStaticLease**
> void dhcpUpdateStaticLease(dhcpStaticLease)

Updates IP address, hostname of the static lease.  IP version must be the same as previous. 

### Example


```typescript
import { createConfiguration, ServerConfiguration, DhcpApi, DhcpApiDhcpUpdateStaticLeaseRequest } from 'adguardhome';
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
const apiInstance = new DhcpApi(configuration);

let body: DhcpApiDhcpUpdateStaticLeaseRequest = {
  // DhcpStaticLease
  dhcpStaticLease: {
    mac: "00:11:09:b3:b3:b8",
    ip: "192.168.1.22",
    hostname: "dell",
  },
};

apiInstance.dhcpUpdateStaticLease(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dhcpStaticLease** | **DhcpStaticLease**|  |


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**501** | Not implemented (for example, on Windows). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


