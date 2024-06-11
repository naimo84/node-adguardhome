# AdGuardHome.ClientFindSubEntry

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
**blockedServices** | **[String]** |  | [optional] 
**upstreams** | **[String]** |  | [optional] 
**whoisInfo** | **{String: String}** |  | [optional] 
**disallowed** | **Boolean** | Whether the client&#39;s IP is blocked or not.  | [optional] 
**disallowedRule** | **String** | The rule due to which the client is disallowed.  If disallowed is set to true, and this string is empty, then the client IP is disallowed by the \&quot;allowed IP list\&quot;, that is it is not included in the allowed list.  | [optional] 
**ignoreQuerylog** | **Boolean** |  | [optional] 
**ignoreStatistics** | **Boolean** |  | [optional] 


