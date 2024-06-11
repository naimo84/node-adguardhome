# TlsApi


Method | HTTP request | Description
------------- | ------------- | -------------
[**tlsConfigure**](TlsApi.md#tlsConfigure) | **POST** /tls/configure | Updates current TLS configuration
[**tlsStatus**](TlsApi.md#tlsStatus) | **GET** /tls/status | Returns TLS configuration and its status
[**tlsValidate**](TlsApi.md#tlsValidate) | **POST** /tls/validate | Checks if the current TLS configuration is valid


# **tlsConfigure**
> TlsConfig tlsConfigure(tlsConfig)


### Example


```typescript
import { createConfiguration, ServerConfiguration, TlsApi, TlsApiTlsConfigureRequest } from 'adguardhome';
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
const apiInstance = new TlsApi(configuration);

let body:TlsApiTlsConfigureRequest = {
  // TlsConfig | TLS configuration JSON
  tlsConfig: {
    enabled: true,
    serverName: "example.org",
    forceHttps: true,
    portHttps: 443,
    portDnsOverTls: 853,
    portDnsOverQuic: 784,
    certificateChain: "certificateChain_example",
    privateKey: "privateKey_example",
    privateKeySaved: true,
    certificatePath: "certificatePath_example",
    privateKeyPath: "privateKeyPath_example",
    validCert: true,
    validChain: true,
    subject: "CN=example.org",
    issuer: "CN=Let's Encrypt Authority X3,O=Let's Encrypt,C=US",
    notBefore: "2019-01-31T10:47:32Z",
    notAfter: "2019-05-01T10:47:32Z",
    dnsNames: ["*.example.org"],
    validKey: true,
    keyType: "RSA",
    warningValidation: "You have specified an empty certificate",
    validPair: true,
    servePlainDns: true,
  },
};

apiInstance.tlsConfigure(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tlsConfig** | **TlsConfig**| TLS configuration JSON |


### Return type

**TlsConfig**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TLS configuration and its status |  -  |
**400** | Invalid configuration or unavailable port |  -  |
**500** | Error occurred while applying configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tlsStatus**
> TlsConfig tlsStatus()


### Example


```typescript
import { createConfiguration, ServerConfiguration, TlsApi } from 'adguardhome';
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
const apiInstance = new TlsApi(configuration);

let body:any = {};

apiInstance.tlsStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TlsConfig**

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

# **tlsValidate**
> TlsConfig tlsValidate(tlsConfig)


### Example


```typescript
import { createConfiguration, ServerConfiguration, TlsApi, TlsApiTlsValidateRequest } from 'adguardhome';
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
const apiInstance = new TlsApi(configuration);

let body:TlsApiTlsValidateRequest = {
  // TlsConfig | TLS configuration JSON
  tlsConfig: {
    enabled: true,
    serverName: "example.org",
    forceHttps: true,
    portHttps: 443,
    portDnsOverTls: 853,
    portDnsOverQuic: 784,
    certificateChain: "certificateChain_example",
    privateKey: "privateKey_example",
    privateKeySaved: true,
    certificatePath: "certificatePath_example",
    privateKeyPath: "privateKeyPath_example",
    validCert: true,
    validChain: true,
    subject: "CN=example.org",
    issuer: "CN=Let's Encrypt Authority X3,O=Let's Encrypt,C=US",
    notBefore: "2019-01-31T10:47:32Z",
    notAfter: "2019-05-01T10:47:32Z",
    dnsNames: ["*.example.org"],
    validKey: true,
    keyType: "RSA",
    warningValidation: "You have specified an empty certificate",
    validPair: true,
    servePlainDns: true,
  },
};

apiInstance.tlsValidate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tlsConfig** | **TlsConfig**| TLS configuration JSON |


### Return type

**TlsConfig**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TLS configuration and its status |  -  |
**400** | Invalid configuration or unavailable port |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


