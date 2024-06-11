# AdGuardHome.DnsInfo200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bootstrapDns** | **[String]** | Bootstrap servers, port is optional after colon.  Empty value will reset it to default values.  | [optional] 
**upstreamDns** | **[String]** | Upstream servers, port is optional after colon.  Empty value will reset it to default values.  | [optional] 
**fallbackDns** | **[String]** | List of fallback DNS servers used when upstream DNS servers are not responding.  Empty value will clear the list.  | [optional] 
**upstreamDnsFile** | **String** |  | [optional] 
**protectionEnabled** | **Boolean** |  | [optional] 
**ratelimit** | **Number** |  | [optional] 
**ratelimitSubnetSubnetLenIpv4** | **Number** | Length of the subnet mask for IPv4 addresses. | [optional] [default to 24]
**ratelimitSubnetSubnetLenIpv6** | **Number** | Length of the subnet mask for IPv6 addresses. | [optional] [default to 56]
**ratelimitWhitelist** | **[String]** | List of IP addresses excluded from rate limiting. | [optional] 
**blockingMode** | **String** |  | [optional] 
**blockingIpv4** | **String** |  | [optional] 
**blockingIpv6** | **String** |  | [optional] 
**blockedResponseTtl** | **Number** | TTL for blocked responses. | [optional] 
**protectionDisabledUntil** | **String** | Protection is pause until this time.  Nullable. | [optional] 
**ednsCsEnabled** | **Boolean** |  | [optional] 
**ednsCsUseCustom** | **Boolean** |  | [optional] 
**ednsCsCustomIp** | **String** |  | [optional] 
**disableIpv6** | **Boolean** |  | [optional] 
**dnssecEnabled** | **Boolean** |  | [optional] 
**cacheSize** | **Number** |  | [optional] 
**cacheTtlMin** | **Number** |  | [optional] 
**cacheTtlMax** | **Number** |  | [optional] 
**cacheOptimistic** | **Boolean** |  | [optional] 
**upstreamMode** | **String** | Upstream modes enumeration. | [optional] 
**usePrivatePtrResolvers** | **Boolean** |  | [optional] 
**resolveClients** | **Boolean** |  | [optional] 
**localPtrUpstreams** | **[String]** | Upstream servers, port is optional after colon.  Empty value will reset it to default values.  | [optional] 
**defaultLocalPtrUpstreams** | **[String]** |  | [optional] 



## Enum: BlockingModeEnum


* `default` (value: `"default"`)

* `refused` (value: `"refused"`)

* `nxdomain` (value: `"nxdomain"`)

* `null_ip` (value: `"null_ip"`)

* `custom_ip` (value: `"custom_ip"`)





## Enum: UpstreamModeEnum


* `&quot;,&quot;deprecated&quot;:true,&quot;description&quot;:&quot;Use &#x60;load_balance&#x60; instead.&quot;}` (value: `"{\"const\":\"\",\"deprecated\":true,\"description\":\"Use `load_balance` instead.\"}"`)

* `fastest_addr&quot;}` (value: `"{\"const\":\"fastest_addr\"}"`)

* `load_balance&quot;}` (value: `"{\"const\":\"load_balance\"}"`)

* `parallel&quot;}` (value: `"{\"const\":\"parallel\"}"`)




