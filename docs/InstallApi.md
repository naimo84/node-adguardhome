# .InstallApi

All URIs are relative to *https://raw.githubusercontent.com/control*

Method | HTTP request | Description
------------- | ------------- | -------------
[**installCheckConfig**](InstallApi.md#installCheckConfig) | **POST** /install/check_config | Checks configuration
[**installConfigure**](InstallApi.md#installConfigure) | **POST** /install/configure | Applies the initial configuration.
[**installGetAddresses**](InstallApi.md#installGetAddresses) | **GET** /install/get_addresses | Gets the network interfaces information.


# **installCheckConfig**
> CheckConfigResponse installCheckConfig(checkConfigRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InstallApi(configuration);

let body:.InstallApiInstallCheckConfigRequest = {
  // CheckConfigRequest | Configuration to be checked
  checkConfigRequest: {
    dns: {
      ip: "127.0.0.1",
      port: 53,
      autofix: false,
    },
    web: {
      ip: "127.0.0.1",
      port: 53,
      autofix: false,
    },
    setStaticIp: false,
  },
};

apiInstance.installCheckConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkConfigRequest** | **CheckConfigRequest**| Configuration to be checked |


### Return type

**CheckConfigResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**400** | Failed to parse JSON or cannot listen on the specified address.  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **installConfigure**
> void installConfigure(initialConfiguration)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InstallApi(configuration);

let body:.InstallApiInstallConfigureRequest = {
  // InitialConfiguration | Initial configuration JSON
  initialConfiguration: {
    dns: {
      ip: "127.0.0.1",
      port: 53,
    },
    web: {
      ip: "127.0.0.1",
      port: 53,
    },
    username: "admin",
    password: "password",
  },
};

apiInstance.installConfigure(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **initialConfiguration** | **InitialConfiguration**| Initial configuration JSON |


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
**400** | Failed to parse initial configuration or cannot listen to the specified addresses.  |  -  |
**422** | The specified password does not meet the strength requirements.  |  -  |
**500** | Cannot start the DNS server |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **installGetAddresses**
> AddressesInfo installGetAddresses()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InstallApi(configuration);

let body:any = {};

apiInstance.installGetAddresses(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**AddressesInfo**

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


