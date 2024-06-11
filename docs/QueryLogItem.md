# AdGuardHome.QueryLogItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer** | [**[DnsAnswer]**](DnsAnswer.md) |  | [optional] 
**originalAnswer** | [**[DnsAnswer]**](DnsAnswer.md) | Answer from upstream server (optional) | [optional] 
**cached** | **Boolean** | Defines if the response has been served from cache.  | [optional] 
**upstream** | **String** | Upstream URL starting with tcp://, tls://, https://, or with an IP address.  | [optional] 
**answerDnssec** | **Boolean** | If true, the response had the Authenticated Data (AD) flag set.  | [optional] 
**client** | **String** | The client&#39;s IP address.  | [optional] 
**clientId** | **String** | The ClientID, if provided in DoH, DoQ, or DoT.  | [optional] 
**clientInfo** | [**QueryLogItemClient**](QueryLogItemClient.md) |  | [optional] 
**clientProto** | **String** |  | [optional] 
**ecs** | **String** | The IP network defined by an EDNS Client-Subnet option in the request message if any.  | [optional] 
**elapsedMs** | **String** |  | [optional] 
**question** | [**DnsQuestion**](DnsQuestion.md) |  | [optional] 
**filterId** | **Number** | In case if there&#39;s a rule applied to this DNS request, this is ID of the filter list that the rule belongs to. Deprecated: use &#x60;rules[*].filter_list_id&#x60; instead.  | [optional] 
**rule** | **String** | Filtering rule applied to the request (if any). Deprecated: use &#x60;rules[*].text&#x60; instead.  | [optional] 
**rules** | [**[ResultRule]**](ResultRule.md) | Applied rules. | [optional] 
**reason** | **String** | Request filtering status. | [optional] 
**serviceName** | **String** | Set if reason&#x3D;FilteredBlockedService | [optional] 
**status** | **String** | DNS response status | [optional] 
**time** | **String** | DNS request processing start time | [optional] 



## Enum: ClientProtoEnum


* `dot` (value: `"dot"`)

* `doh` (value: `"doh"`)

* `doq` (value: `"doq"`)

* `dnscrypt` (value: `"dnscrypt"`)

* `empty` (value: `""`)





## Enum: ReasonEnum


* `NotFilteredNotFound` (value: `"NotFilteredNotFound"`)

* `NotFilteredWhiteList` (value: `"NotFilteredWhiteList"`)

* `NotFilteredError` (value: `"NotFilteredError"`)

* `FilteredBlackList` (value: `"FilteredBlackList"`)

* `FilteredSafeBrowsing` (value: `"FilteredSafeBrowsing"`)

* `FilteredParental` (value: `"FilteredParental"`)

* `FilteredInvalid` (value: `"FilteredInvalid"`)

* `FilteredSafeSearch` (value: `"FilteredSafeSearch"`)

* `FilteredBlockedService` (value: `"FilteredBlockedService"`)

* `Rewrite` (value: `"Rewrite"`)

* `RewriteEtcHosts` (value: `"RewriteEtcHosts"`)

* `RewriteRule` (value: `"RewriteRule"`)




