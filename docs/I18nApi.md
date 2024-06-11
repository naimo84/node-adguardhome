# I18nApi


Method | HTTP request | Description
------------- | ------------- | -------------
[**changeLanguage**](I18nApi.md#changeLanguage) | **POST** /i18n/change_language | Change current language.  Argument must be an ISO 639-1 two-letter code. 
[**currentLanguage**](I18nApi.md#currentLanguage) | **GET** /i18n/current_language | Get currently set language.  Result is ISO 639-1 two-letter code.  Empty result means default language. 


# **changeLanguage**
> void changeLanguage()

Deprecated: Use `PUT /control/profile` instead. 

### Example


```typescript
import { createConfiguration, ServerConfiguration, I18nApi, I18nApiChangeLanguageRequest } from 'adguardhome';
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
const apiInstance = new I18nApi(configuration);

let body:I18nApiChangeLanguageRequest = {
  // LanguageSettings | New language.  It must be known to the server and must be an ISO 639-1 two-letter code.  (optional)
  languageSettings: {
    language: "language_example",
  },
};

apiInstance.changeLanguage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **languageSettings** | **LanguageSettings**| New language.  It must be known to the server and must be an ISO 639-1 two-letter code.  |


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

# **currentLanguage**
> LanguageSettings currentLanguage()

Deprecated: Use `GET /control/profile` instead. 

### Example


```typescript
import { createConfiguration, ServerConfiguration, I18nApi } from 'adguardhome';
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
const apiInstance = new I18nApi(configuration);

let body:any = {};

apiInstance.currentLanguage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LanguageSettings**

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


