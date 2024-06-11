# ParentalApi


Method | HTTP request | Description
------------- | ------------- | -------------
[**parentalDisable**](ParentalApi.md#parentalDisable) | **POST** /parental/disable | Disable parental filtering
[**parentalEnable**](ParentalApi.md#parentalEnable) | **POST** /parental/enable | Enable parental filtering
[**parentalStatus**](ParentalApi.md#parentalStatus) | **GET** /parental/status | Get parental filtering status


# **parentalDisable**
> void parentalDisable()


### Example


```typescript
import { createConfiguration, ServerConfiguration, ParentalApi } from 'adguardhome';
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
const apiInstance = new ParentalApi(configuration);

let body:any = {};

apiInstance.parentalDisable(body).then((data:any) => {
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

# **parentalEnable**
> void parentalEnable()


### Example


```typescript
import { createConfiguration, ServerConfiguration, ParentalApi } from 'adguardhome';
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
const apiInstance = new ParentalApi(configuration);

let body:any = {};

apiInstance.parentalEnable(body).then((data:any) => {
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

# **parentalStatus**
> ParentalStatus200Response parentalStatus()


### Example


```typescript
import { createConfiguration, ServerConfiguration, ParentalApi } from 'adguardhome';
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
const apiInstance = new ParentalApi(configuration);

let body:any = {};

apiInstance.parentalStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ParentalStatus200Response**

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


