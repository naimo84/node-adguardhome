# .GlobalApi

All URIs are relative to *https://raw.githubusercontent.com/control*

Method | HTTP request | Description
------------- | ------------- | -------------
[**beginUpdate**](GlobalApi.md#beginUpdate) | **POST** /update | Begin auto-upgrade procedure
[**cacheClear**](GlobalApi.md#cacheClear) | **POST** /cache_clear | Clear DNS cache
[**dnsConfig**](GlobalApi.md#dnsConfig) | **POST** /dns_config | Set general DNS parameters
[**dnsInfo**](GlobalApi.md#dnsInfo) | **GET** /dns_info | Get general DNS parameters
[**getProfile**](GlobalApi.md#getProfile) | **GET** /profile | 
[**getVersionJson**](GlobalApi.md#getVersionJson) | **POST** /version.json | Gets information about the latest available version of AdGuard 
[**login**](GlobalApi.md#login) | **POST** /login | Perform administrator log-in
[**logout**](GlobalApi.md#logout) | **GET** /logout | Perform administrator log-out
[**mobileConfigDoH**](GlobalApi.md#mobileConfigDoH) | **GET** /apple/doh.mobileconfig | Get DNS over HTTPS .mobileconfig.
[**mobileConfigDoT**](GlobalApi.md#mobileConfigDoT) | **GET** /apple/dot.mobileconfig | Get DNS over TLS .mobileconfig.
[**setProtection**](GlobalApi.md#setProtection) | **POST** /protection | Set protection state and duration
[**status**](GlobalApi.md#status) | **GET** /status | Get DNS server current status and general settings
[**testUpstreamDNS**](GlobalApi.md#testUpstreamDNS) | **POST** /test_upstream_dns | Test upstream configuration
[**updateProfile**](GlobalApi.md#updateProfile) | **PUT** /profile/update | Updates current user info


# **beginUpdate**
> void beginUpdate()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalApi(configuration);

let body:any = {};

apiInstance.beginUpdate(body).then((data:any) => {
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
**500** | Failed |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cacheClear**
> void cacheClear()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalApi(configuration);

let body:any = {};

apiInstance.cacheClear(body).then((data:any) => {
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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dnsConfig**
> void dnsConfig()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalApi(configuration);

let body:.GlobalApiDnsConfigRequest = {
  // DNSConfig (optional)
  dNSConfig: {
    bootstrapDns: ["8.8.8.8:53","1.1.1.1:53"],
    upstreamDns: ["tls://1.1.1.1","tls://1.0.0.1"],
    fallbackDns: ["8.8.8.8","1.1.1.1:53"],
    upstreamDnsFile: "upstreamDnsFile_example",
    protectionEnabled: true,
    ratelimit: 1,
    ratelimitSubnetSubnetLenIpv4: 24,
    ratelimitSubnetSubnetLenIpv6: 56,
    ratelimitWhitelist: [
      "ratelimitWhitelist_example",
    ],
    blockingMode: "default",
    blockingIpv4: "blockingIpv4_example",
    blockingIpv6: "blockingIpv6_example",
    blockedResponseTtl: 0,
    protectionDisabledUntil: "2018-11-26T00:02:41+03:00",
    ednsCsEnabled: true,
    ednsCsUseCustom: true,
    ednsCsCustomIp: "ednsCsCustomIp_example",
    disableIpv6: true,
    dnssecEnabled: true,
    cacheSize: 1,
    cacheTtlMin: 1,
    cacheTtlMax: 1,
    cacheOptimistic: true,
    upstreamMode: "{"const":"","deprecated":true,"description":"Use `load_balance` instead."}",
    usePrivatePtrResolvers: true,
    resolveClients: true,
    localPtrUpstreams: ["tls://1.1.1.1","tls://1.0.0.1"],
  },
};

apiInstance.dnsConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dNSConfig** | **DNSConfig**|  |


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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dnsInfo**
> DnsInfo200Response dnsInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalApi(configuration);

let body:any = {};

apiInstance.dnsInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**DnsInfo200Response**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProfile**
> ProfileInfo getProfile()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalApi(configuration);

let body:any = {};

apiInstance.getProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ProfileInfo**

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

# **getVersionJson**
> VersionInfo getVersionJson(getVersionRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalApi(configuration);

let body:.GlobalApiGetVersionJsonRequest = {
  // GetVersionRequest
  getVersionRequest: {
    recheckNow: true,
  },
};

apiInstance.getVersionJson(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getVersionRequest** | **GetVersionRequest**|  |


### Return type

**VersionInfo**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Version info.  If response message is empty, UI does not show a version update message.  |  -  |
**500** | Cannot write answer |  -  |
**502** | Cannot retrieve the version.json file contents |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **login**
> void login(login)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalApi(configuration);

let body:.GlobalApiLoginRequest = {
  // Login
  login: {
    name: "name_example",
    password: "password_example",
  },
};

apiInstance.login(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **Login**|  |


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
**400** | Invalid username or password.  |  -  |
**429** | Out of login attempts.  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **logout**
> logout()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalApi(configuration);

let body:any = {};

apiInstance.logout(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

void (empty response body)

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **mobileConfigDoH**
> void mobileConfigDoH()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalApi(configuration);

let body:.GlobalApiMobileConfigDoHRequest = {
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **mobileConfigDoT**
> void mobileConfigDoT()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalApi(configuration);

let body:.GlobalApiMobileConfigDoTRequest = {
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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setProtection**
> void setProtection()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalApi(configuration);

let body:.GlobalApiSetProtectionRequest = {
  // SetProtectionRequest (optional)
  setProtectionRequest: {
    enabled: true,
    duration: 1,
  },
};

apiInstance.setProtection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setProtectionRequest** | **SetProtectionRequest**|  |


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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **status**
> ServerStatus status()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalApi(configuration);

let body:any = {};

apiInstance.status(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ServerStatus**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **testUpstreamDNS**
> { [key: string]: string; } testUpstreamDNS()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalApi(configuration);

let body:.GlobalApiTestUpstreamDNSRequest = {
  // UpstreamsConfig | Upstream configuration to be tested (optional)
  upstreamsConfig: {
    bootstrapDns: ["8.8.8.8:53","1.1.1.1:53"],
    upstreamDns: ["tls://1.1.1.1","tls://1.0.0.1"],
    fallbackDns: ["8.8.8.8","1.1.1.1:53"],
    privateUpstream: ["tls://1.1.1.1","tls://1.0.0.1"],
  },
};

apiInstance.testUpstreamDNS(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upstreamsConfig** | **UpstreamsConfig**| Upstream configuration to be tested |


### Return type

**{ [key: string]: string; }**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status of testing each requested server, with \&quot;OK\&quot; meaning that server works, any other text means an error.  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProfile**
> void updateProfile()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalApi(configuration);

let body:.GlobalApiUpdateProfileRequest = {
  // ProfileInfo (optional)
  profileInfo: {
    name: "name_example",
    language: "language_example",
    theme: "auto",
  },
};

apiInstance.updateProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileInfo** | **ProfileInfo**|  |


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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


