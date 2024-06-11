# AdGuardHome.FilterCheckHostResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | Request filtering status. | [optional] 
**filterId** | **Number** | In case if there&#39;s a rule applied to this DNS request, this is ID of the filter list that the rule belongs to. Deprecated: use &#x60;rules[*].filter_list_id&#x60; instead.  | [optional] 
**rule** | **String** | Filtering rule applied to the request (if any). Deprecated: use &#x60;rules[*].text&#x60; instead.  | [optional] 
**rules** | [**[ResultRule]**](ResultRule.md) | Applied rules. | [optional] 
**serviceName** | **String** | Set if reason&#x3D;FilteredBlockedService | [optional] 
**cname** | **String** | Set if reason&#x3D;Rewrite | [optional] 
**ipAddrs** | **[String]** | Set if reason&#x3D;Rewrite | [optional] 



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




