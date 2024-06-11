# AdGuardHome.Stats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timeUnits** | **String** | Time units | [optional] 
**numDnsQueries** | **Number** | Total number of DNS queries | [optional] 
**numBlockedFiltering** | **Number** | Number of requests blocked by filtering rules | [optional] 
**numReplacedSafebrowsing** | **Number** | Number of requests blocked by safebrowsing module | [optional] 
**numReplacedSafesearch** | **Number** | Number of requests blocked by safesearch module | [optional] 
**numReplacedParental** | **Number** | Number of blocked adult websites | [optional] 
**avgProcessingTime** | **Number** | Average time in seconds on processing a DNS request | [optional] 
**topQueriedDomains** | [**[TopArrayEntry]**](TopArrayEntry.md) |  | [optional] 
**topClients** | [**[TopArrayEntry]**](TopArrayEntry.md) |  | [optional] 
**topBlockedDomains** | [**[TopArrayEntry]**](TopArrayEntry.md) |  | [optional] 
**topUpstreamsResponses** | [**[TopArrayEntry]**](TopArrayEntry.md) | Total number of responses from each upstream. | [optional] 
**topUpstreamsAvgTime** | [**[TopArrayEntry]**](TopArrayEntry.md) | Average processing time in seconds of requests from each upstream.  | [optional] 
**dnsQueries** | **[Number]** |  | [optional] 
**blockedFiltering** | **[Number]** |  | [optional] 
**replacedSafebrowsing** | **[Number]** |  | [optional] 
**replacedParental** | **[Number]** |  | [optional] 



## Enum: TimeUnitsEnum


* `hours` (value: `"hours"`)

* `days` (value: `"days"`)




