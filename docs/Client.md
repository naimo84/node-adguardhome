# AdGuardHome.Client

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name | [optional] 
**ids** | **[String]** | IP, CIDR, MAC, or ClientID. | [optional] 
**useGlobalSettings** | **Boolean** |  | [optional] 
**filteringEnabled** | **Boolean** |  | [optional] 
**parentalEnabled** | **Boolean** |  | [optional] 
**safebrowsingEnabled** | **Boolean** |  | [optional] 
**safesearchEnabled** | **Boolean** |  | [optional] 
**safeSearch** | [**SafeSearchConfig**](SafeSearchConfig.md) |  | [optional] 
**useGlobalBlockedServices** | **Boolean** |  | [optional] 
**blockedServicesSchedule** | [**Schedule**](Schedule.md) |  | [optional] 
**blockedServices** | **[String]** |  | [optional] 
**upstreams** | **[String]** |  | [optional] 
**tags** | **[String]** |  | [optional] 
**ignoreQuerylog** | **Boolean** | NOTE: If &#x60;ignore_querylog&#x60; is not set in HTTP API &#x60;GET /clients/add&#x60; request then default value (false) will be used.  If &#x60;ignore_querylog&#x60; is not set in HTTP API &#x60;GET /clients/update&#x60; request then the existing value will not be changed.  This behaviour can be changed in the future versions.  | [optional] 
**ignoreStatistics** | **Boolean** | NOTE: If &#x60;ignore_statistics&#x60; is not set in HTTP API &#x60;GET /clients/add&#x60; request then default value (false) will be used.  If &#x60;ignore_statistics&#x60; is not set in HTTP API &#x60;GET /clients/update&#x60; request then the existing value will not be changed.  This behaviour can be changed in the future versions.  | [optional] 
**upstreamsCacheEnabled** | **Boolean** | NOTE: If &#x60;upstreams_cache_enabled&#x60; is not set in HTTP API &#x60;GET /clients/add&#x60; request then default value (false) will be used.  If &#x60;upstreams_cache_enabled&#x60; is not set in HTTP API &#x60;GET /clients/update&#x60; request then the existing value will not be changed.  This behaviour can be changed in the future versions.  | [optional] 
**upstreamsCacheSize** | **Number** | NOTE: If &#x60;upstreams_cache_enabled&#x60; is not set in HTTP API &#x60;GET /clients/update&#x60; request then the existing value will not be changed.  This behaviour can be changed in the future versions.  | [optional] 


