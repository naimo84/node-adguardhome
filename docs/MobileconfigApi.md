# MobileconfigApi


Method | HTTP request | Description
------------- | ------------- | -------------
[**mobileConfigDoH**](MobileconfigApi.md#mobileConfigDoH) | **GET** /apple/doh.mobileconfig | Get DNS over HTTPS .mobileconfig.
[**mobileConfigDoT**](MobileconfigApi.md#mobileConfigDoT) | **GET** /apple/dot.mobileconfig | Get DNS over TLS .mobileconfig.


# **mobileConfigDoH**
> void mobileConfigDoH()


### Example


```typescript
import { createConfiguration, ServerConfiguration, MobileconfigApi,MobileconfigApiMobileConfigDoHRequest } from 'adguardhome';
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
const apiInstance = new MobileconfigApi(configuration);

let body:MobileconfigApiMobileConfigDoHRequest = {
  // string | Host for which the config is generated.  If no host is provided, `tls.server_name` from the configuration file is used.  If `tls.server_name` is not set, the API returns an error with a 500 status. 
  host: "example.org",
  // string | ClientID.  (optional)
  clientId: "client-1",
};

apiInstance.mobileConfigDoH(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | [**string**] | Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status.  | defaults to undefined
 **clientId** | [**string**] | ClientID.  | (optional) defaults to undefined


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
**200** | DNS over HTTPS plist file. |  -  |
**500** | Server configuration error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mobileConfigDoT**
> void mobileConfigDoT()


### Example


```typescript
import { createConfiguration, ServerConfiguration, MobileconfigApi } from 'adguardhome';
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
const apiInstance = new MobileconfigApi(configuration);

let body:MobileconfigApiMobileConfigDoTRequest = {
  // string | Host for which the config is generated.  If no host is provided, `tls.server_name` from the configuration file is used.  If `tls.server_name` is not set, the API returns an error with a 500 status. 
  host: "example.org",
  // string | ClientID.  (optional)
  clientId: "client-1",
};

apiInstance.mobileConfigDoT(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | [**string**] | Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status.  | defaults to undefined
 **clientId** | [**string**] | ClientID.  | (optional) defaults to undefined


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
**200** | DNS over TLS plist file |  -  |
**500** | Server configuration error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


