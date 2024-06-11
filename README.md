# AdGuardHome Node.js Module

This node module is mostly generated with https://github.com/OpenAPITools/openapi-generator from AdGuardHome's OpenAPI Docu https://github.com/AdguardTeam/AdGuardHome/blob/master/openapi/openapi.yaml. It's tested againt AdGuardHome's version 0.107.

## :memo: Documentation for API Endpoints

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AdGuardHome.BlockedServicesApi* | [**blockedServicesAll**](docs/BlockedServicesApi.md#blockedServicesAll) | **GET** /blocked_services/all | Get available services to use for blocking
*AdGuardHome.BlockedServicesApi* | [**blockedServicesAvailableServices**](docs/BlockedServicesApi.md#blockedServicesAvailableServices) | **GET** /blocked_services/services | Get available services to use for blocking
*AdGuardHome.BlockedServicesApi* | [**blockedServicesList**](docs/BlockedServicesApi.md#blockedServicesList) | **GET** /blocked_services/list | Get blocked services list
*AdGuardHome.BlockedServicesApi* | [**blockedServicesSchedule**](docs/BlockedServicesApi.md#blockedServicesSchedule) | **GET** /blocked_services/get | Get blocked services
*AdGuardHome.BlockedServicesApi* | [**blockedServicesScheduleUpdate**](docs/BlockedServicesApi.md#blockedServicesScheduleUpdate) | **PUT** /blocked_services/update | Update blocked services
*AdGuardHome.BlockedServicesApi* | [**blockedServicesSet**](docs/BlockedServicesApi.md#blockedServicesSet) | **POST** /blocked_services/set | Set blocked services list
*AdGuardHome.ClientsApi* | [**accessList**](docs/ClientsApi.md#accessList) | **GET** /access/list | List (dis)allowed clients, blocked hosts, etc.
*AdGuardHome.ClientsApi* | [**accessSet**](docs/ClientsApi.md#accessSet) | **POST** /access/set | Set (dis)allowed clients, blocked hosts, etc.
*AdGuardHome.ClientsApi* | [**clientsAdd**](docs/ClientsApi.md#clientsAdd) | **POST** /clients/add | Add a new client
*AdGuardHome.ClientsApi* | [**clientsDelete**](docs/ClientsApi.md#clientsDelete) | **POST** /clients/delete | Remove a client
*AdGuardHome.ClientsApi* | [**clientsFind**](docs/ClientsApi.md#clientsFind) | **GET** /clients/find | Get information about clients by their IP addresses or ClientIDs. 
*AdGuardHome.ClientsApi* | [**clientsStatus**](docs/ClientsApi.md#clientsStatus) | **GET** /clients | Get information about configured clients
*AdGuardHome.ClientsApi* | [**clientsUpdate**](docs/ClientsApi.md#clientsUpdate) | **POST** /clients/update | Update client information
*AdGuardHome.DhcpApi* | [**checkActiveDhcp**](docs/DhcpApi.md#checkActiveDhcp) | **POST** /dhcp/find_active_dhcp | Searches for an active DHCP server on the network
*AdGuardHome.DhcpApi* | [**dhcpAddStaticLease**](docs/DhcpApi.md#dhcpAddStaticLease) | **POST** /dhcp/add_static_lease | Adds a static lease
*AdGuardHome.DhcpApi* | [**dhcpInterfaces**](docs/DhcpApi.md#dhcpInterfaces) | **GET** /dhcp/interfaces | Gets the available interfaces
*AdGuardHome.DhcpApi* | [**dhcpRemoveStaticLease**](docs/DhcpApi.md#dhcpRemoveStaticLease) | **POST** /dhcp/remove_static_lease | Removes a static lease
*AdGuardHome.DhcpApi* | [**dhcpReset**](docs/DhcpApi.md#dhcpReset) | **POST** /dhcp/reset | Reset DHCP configuration
*AdGuardHome.DhcpApi* | [**dhcpResetLeases**](docs/DhcpApi.md#dhcpResetLeases) | **POST** /dhcp/reset_leases | Reset DHCP leases
*AdGuardHome.DhcpApi* | [**dhcpSetConfig**](docs/DhcpApi.md#dhcpSetConfig) | **POST** /dhcp/set_config | Updates the current DHCP server configuration
*AdGuardHome.DhcpApi* | [**dhcpStatus**](docs/DhcpApi.md#dhcpStatus) | **GET** /dhcp/status | Gets the current DHCP settings and status
*AdGuardHome.DhcpApi* | [**dhcpUpdateStaticLease**](docs/DhcpApi.md#dhcpUpdateStaticLease) | **POST** /dhcp/update_static_lease | Updates a static lease
*AdGuardHome.FilteringApi* | [**filteringAddURL**](docs/FilteringApi.md#filteringAddURL) | **POST** /filtering/add_url | Add filter URL or an absolute file path
*AdGuardHome.FilteringApi* | [**filteringCheckHost**](docs/FilteringApi.md#filteringCheckHost) | **GET** /filtering/check_host | Check if host name is filtered
*AdGuardHome.FilteringApi* | [**filteringConfig**](docs/FilteringApi.md#filteringConfig) | **POST** /filtering/config | Set filtering parameters
*AdGuardHome.FilteringApi* | [**filteringRefresh**](docs/FilteringApi.md#filteringRefresh) | **POST** /filtering/refresh | Reload filtering rules from URLs.  This might be needed if new URL was just added and you don&#39;t want to wait for automatic refresh to kick in. This API request is ratelimited, so you can call it freely as often as you like, it wont create unnecessary burden on servers that host the URL.  This should work as intended, a &#x60;force&#x60; parameter is offered as last-resort attempt to make filter lists fresh.  If you ever find yourself using &#x60;force&#x60; to make something work that otherwise wont, this is a bug and report it accordingly. 
*AdGuardHome.FilteringApi* | [**filteringRemoveURL**](docs/FilteringApi.md#filteringRemoveURL) | **POST** /filtering/remove_url | Remove filter URL
*AdGuardHome.FilteringApi* | [**filteringSetRules**](docs/FilteringApi.md#filteringSetRules) | **POST** /filtering/set_rules | Set user-defined filter rules
*AdGuardHome.FilteringApi* | [**filteringSetURL**](docs/FilteringApi.md#filteringSetURL) | **POST** /filtering/set_url | Set URL parameters
*AdGuardHome.FilteringApi* | [**filteringStatus**](docs/FilteringApi.md#filteringStatus) | **GET** /filtering/status | Get filtering parameters
*AdGuardHome.GlobalApi* | [**beginUpdate**](docs/GlobalApi.md#beginUpdate) | **POST** /update | Begin auto-upgrade procedure
*AdGuardHome.GlobalApi* | [**cacheClear**](docs/GlobalApi.md#cacheClear) | **POST** /cache_clear | Clear DNS cache
*AdGuardHome.GlobalApi* | [**dnsConfig**](docs/GlobalApi.md#dnsConfig) | **POST** /dns_config | Set general DNS parameters
*AdGuardHome.GlobalApi* | [**dnsInfo**](docs/GlobalApi.md#dnsInfo) | **GET** /dns_info | Get general DNS parameters
*AdGuardHome.GlobalApi* | [**getProfile**](docs/GlobalApi.md#getProfile) | **GET** /profile | 
*AdGuardHome.GlobalApi* | [**getVersionJson**](docs/GlobalApi.md#getVersionJson) | **POST** /version.json | Gets information about the latest available version of AdGuard 
*AdGuardHome.GlobalApi* | [**login**](docs/GlobalApi.md#login) | **POST** /login | Perform administrator log-in
*AdGuardHome.GlobalApi* | [**logout**](docs/GlobalApi.md#logout) | **GET** /logout | Perform administrator log-out
*AdGuardHome.GlobalApi* | [**mobileConfigDoH**](docs/GlobalApi.md#mobileConfigDoH) | **GET** /apple/doh.mobileconfig | Get DNS over HTTPS .mobileconfig.
*AdGuardHome.GlobalApi* | [**mobileConfigDoT**](docs/GlobalApi.md#mobileConfigDoT) | **GET** /apple/dot.mobileconfig | Get DNS over TLS .mobileconfig.
*AdGuardHome.GlobalApi* | [**setProtection**](docs/GlobalApi.md#setProtection) | **POST** /protection | Set protection state and duration
*AdGuardHome.GlobalApi* | [**status**](docs/GlobalApi.md#status) | **GET** /status | Get DNS server current status and general settings
*AdGuardHome.GlobalApi* | [**testUpstreamDNS**](docs/GlobalApi.md#testUpstreamDNS) | **POST** /test_upstream_dns | Test upstream configuration
*AdGuardHome.GlobalApi* | [**updateProfile**](docs/GlobalApi.md#updateProfile) | **PUT** /profile/update | Updates current user info
*AdGuardHome.I18nApi* | [**changeLanguage**](docs/I18nApi.md#changeLanguage) | **POST** /i18n/change_language | Change current language.  Argument must be an ISO 639-1 two-letter code. 
*AdGuardHome.I18nApi* | [**currentLanguage**](docs/I18nApi.md#currentLanguage) | **GET** /i18n/current_language | Get currently set language.  Result is ISO 639-1 two-letter code.  Empty result means default language. 
*AdGuardHome.InstallApi* | [**installCheckConfig**](docs/InstallApi.md#installCheckConfig) | **POST** /install/check_config | Checks configuration
*AdGuardHome.InstallApi* | [**installConfigure**](docs/InstallApi.md#installConfigure) | **POST** /install/configure | Applies the initial configuration.
*AdGuardHome.InstallApi* | [**installGetAddresses**](docs/InstallApi.md#installGetAddresses) | **GET** /install/get_addresses | Gets the network interfaces information.
*AdGuardHome.LogApi* | [**getQueryLogConfig**](docs/LogApi.md#getQueryLogConfig) | **GET** /querylog/config | Get query log parameters
*AdGuardHome.LogApi* | [**putQueryLogConfig**](docs/LogApi.md#putQueryLogConfig) | **PUT** /querylog/config/update | Set query log parameters
*AdGuardHome.LogApi* | [**queryLog**](docs/LogApi.md#queryLog) | **GET** /querylog | Get DNS server query log.
*AdGuardHome.LogApi* | [**queryLogConfig**](docs/LogApi.md#queryLogConfig) | **POST** /querylog_config | Set query log parameters
*AdGuardHome.LogApi* | [**queryLogInfo**](docs/LogApi.md#queryLogInfo) | **GET** /querylog_info | Get query log parameters
*AdGuardHome.LogApi* | [**querylogClear**](docs/LogApi.md#querylogClear) | **POST** /querylog_clear | Clear query log
*AdGuardHome.MobileconfigApi* | [**mobileConfigDoH**](docs/MobileconfigApi.md#mobileConfigDoH) | **GET** /apple/doh.mobileconfig | Get DNS over HTTPS .mobileconfig.
*AdGuardHome.MobileconfigApi* | [**mobileConfigDoT**](docs/MobileconfigApi.md#mobileConfigDoT) | **GET** /apple/dot.mobileconfig | Get DNS over TLS .mobileconfig.
*AdGuardHome.ParentalApi* | [**parentalDisable**](docs/ParentalApi.md#parentalDisable) | **POST** /parental/disable | Disable parental filtering
*AdGuardHome.ParentalApi* | [**parentalEnable**](docs/ParentalApi.md#parentalEnable) | **POST** /parental/enable | Enable parental filtering
*AdGuardHome.ParentalApi* | [**parentalStatus**](docs/ParentalApi.md#parentalStatus) | **GET** /parental/status | Get parental filtering status
*AdGuardHome.RewriteApi* | [**rewriteAdd**](docs/RewriteApi.md#rewriteAdd) | **POST** /rewrite/add | Add a new Rewrite rule
*AdGuardHome.RewriteApi* | [**rewriteDelete**](docs/RewriteApi.md#rewriteDelete) | **POST** /rewrite/delete | Remove a Rewrite rule
*AdGuardHome.RewriteApi* | [**rewriteList**](docs/RewriteApi.md#rewriteList) | **GET** /rewrite/list | Get list of Rewrite rules
*AdGuardHome.RewriteApi* | [**rewriteUpdate**](docs/RewriteApi.md#rewriteUpdate) | **PUT** /rewrite/update | Update a Rewrite rule
*AdGuardHome.SafebrowsingApi* | [**safebrowsingDisable**](docs/SafebrowsingApi.md#safebrowsingDisable) | **POST** /safebrowsing/disable | Disable safebrowsing
*AdGuardHome.SafebrowsingApi* | [**safebrowsingEnable**](docs/SafebrowsingApi.md#safebrowsingEnable) | **POST** /safebrowsing/enable | Enable safebrowsing
*AdGuardHome.SafebrowsingApi* | [**safebrowsingStatus**](docs/SafebrowsingApi.md#safebrowsingStatus) | **GET** /safebrowsing/status | Get safebrowsing status
*AdGuardHome.SafesearchApi* | [**safesearchDisable**](docs/SafesearchApi.md#safesearchDisable) | **POST** /safesearch/disable | Disable safesearch
*AdGuardHome.SafesearchApi* | [**safesearchEnable**](docs/SafesearchApi.md#safesearchEnable) | **POST** /safesearch/enable | Enable safesearch
*AdGuardHome.SafesearchApi* | [**safesearchSettings**](docs/SafesearchApi.md#safesearchSettings) | **PUT** /safesearch/settings | Update safesearch settings
*AdGuardHome.SafesearchApi* | [**safesearchStatus**](docs/SafesearchApi.md#safesearchStatus) | **GET** /safesearch/status | Get safesearch status
*AdGuardHome.StatsApi* | [**getStatsConfig**](docs/StatsApi.md#getStatsConfig) | **GET** /stats/config | Get statistics parameters
*AdGuardHome.StatsApi* | [**putStatsConfig**](docs/StatsApi.md#putStatsConfig) | **PUT** /stats/config/update | Set statistics parameters
*AdGuardHome.StatsApi* | [**stats**](docs/StatsApi.md#stats) | **GET** /stats | Get DNS server statistics
*AdGuardHome.StatsApi* | [**statsConfig**](docs/StatsApi.md#statsConfig) | **POST** /stats_config | Set statistics parameters
*AdGuardHome.StatsApi* | [**statsInfo**](docs/StatsApi.md#statsInfo) | **GET** /stats_info | Get statistics parameters
*AdGuardHome.StatsApi* | [**statsReset**](docs/StatsApi.md#statsReset) | **POST** /stats_reset | Reset all statistics to zeroes
*AdGuardHome.TlsApi* | [**tlsConfigure**](docs/TlsApi.md#tlsConfigure) | **POST** /tls/configure | Updates current TLS configuration
*AdGuardHome.TlsApi* | [**tlsStatus**](docs/TlsApi.md#tlsStatus) | **GET** /tls/status | Returns TLS configuration and its status
*AdGuardHome.TlsApi* | [**tlsValidate**](docs/TlsApi.md#tlsValidate) | **POST** /tls/validate | Checks if the current TLS configuration is valid

## Documentation for Models

 - [AdGuardHome.AccessList](docs/AccessList.md)
 - [AdGuardHome.AddUrlRequest](docs/AddUrlRequest.md)
 - [AdGuardHome.AddressInfo](docs/AddressInfo.md)
 - [AdGuardHome.AddressesInfo](docs/AddressesInfo.md)
 - [AdGuardHome.BlockedService](docs/BlockedService.md)
 - [AdGuardHome.BlockedServicesAll](docs/BlockedServicesAll.md)
 - [AdGuardHome.BlockedServicesSchedule](docs/BlockedServicesSchedule.md)
 - [AdGuardHome.CheckConfigRequest](docs/CheckConfigRequest.md)
 - [AdGuardHome.CheckConfigRequestInfo](docs/CheckConfigRequestInfo.md)
 - [AdGuardHome.CheckConfigResponse](docs/CheckConfigResponse.md)
 - [AdGuardHome.CheckConfigResponseInfo](docs/CheckConfigResponseInfo.md)
 - [AdGuardHome.CheckConfigStaticIpInfo](docs/CheckConfigStaticIpInfo.md)
 - [AdGuardHome.CheckConfigStaticIpInfoStatic](docs/CheckConfigStaticIpInfoStatic.md)
 - [AdGuardHome.Client](docs/Client.md)
 - [AdGuardHome.ClientAuto](docs/ClientAuto.md)
 - [AdGuardHome.ClientDelete](docs/ClientDelete.md)
 - [AdGuardHome.ClientFindSubEntry](docs/ClientFindSubEntry.md)
 - [AdGuardHome.ClientUpdate](docs/ClientUpdate.md)
 - [AdGuardHome.Clients](docs/Clients.md)
 - [AdGuardHome.DNSConfig](docs/DNSConfig.md)
 - [AdGuardHome.DayRange](docs/DayRange.md)
 - [AdGuardHome.DhcpConfig](docs/DhcpConfig.md)
 - [AdGuardHome.DhcpConfigV4](docs/DhcpConfigV4.md)
 - [AdGuardHome.DhcpConfigV6](docs/DhcpConfigV6.md)
 - [AdGuardHome.DhcpFindActiveReq](docs/DhcpFindActiveReq.md)
 - [AdGuardHome.DhcpLease](docs/DhcpLease.md)
 - [AdGuardHome.DhcpSearchResult](docs/DhcpSearchResult.md)
 - [AdGuardHome.DhcpSearchResultOtherServer](docs/DhcpSearchResultOtherServer.md)
 - [AdGuardHome.DhcpSearchResultStaticIP](docs/DhcpSearchResultStaticIP.md)
 - [AdGuardHome.DhcpSearchV4](docs/DhcpSearchV4.md)
 - [AdGuardHome.DhcpSearchV6](docs/DhcpSearchV6.md)
 - [AdGuardHome.DhcpStaticLease](docs/DhcpStaticLease.md)
 - [AdGuardHome.DhcpStatus](docs/DhcpStatus.md)
 - [AdGuardHome.DnsAnswer](docs/DnsAnswer.md)
 - [AdGuardHome.DnsInfo200Response](docs/DnsInfo200Response.md)
 - [AdGuardHome.DnsQuestion](docs/DnsQuestion.md)
 - [AdGuardHome.Error](docs/Error.md)
 - [AdGuardHome.Filter](docs/Filter.md)
 - [AdGuardHome.FilterCheckHostResponse](docs/FilterCheckHostResponse.md)
 - [AdGuardHome.FilterConfig](docs/FilterConfig.md)
 - [AdGuardHome.FilterRefreshRequest](docs/FilterRefreshRequest.md)
 - [AdGuardHome.FilterRefreshResponse](docs/FilterRefreshResponse.md)
 - [AdGuardHome.FilterSetUrl](docs/FilterSetUrl.md)
 - [AdGuardHome.FilterSetUrlData](docs/FilterSetUrlData.md)
 - [AdGuardHome.FilterStatus](docs/FilterStatus.md)
 - [AdGuardHome.GetQueryLogConfigResponse](docs/GetQueryLogConfigResponse.md)
 - [AdGuardHome.GetStatsConfigResponse](docs/GetStatsConfigResponse.md)
 - [AdGuardHome.GetVersionRequest](docs/GetVersionRequest.md)
 - [AdGuardHome.InitialConfiguration](docs/InitialConfiguration.md)
 - [AdGuardHome.LanguageSettings](docs/LanguageSettings.md)
 - [AdGuardHome.Login](docs/Login.md)
 - [AdGuardHome.NetInterface](docs/NetInterface.md)
 - [AdGuardHome.ParentalStatus200Response](docs/ParentalStatus200Response.md)
 - [AdGuardHome.ProfileInfo](docs/ProfileInfo.md)
 - [AdGuardHome.QueryLog](docs/QueryLog.md)
 - [AdGuardHome.QueryLogConfig](docs/QueryLogConfig.md)
 - [AdGuardHome.QueryLogItem](docs/QueryLogItem.md)
 - [AdGuardHome.QueryLogItemClient](docs/QueryLogItemClient.md)
 - [AdGuardHome.QueryLogItemClientWhois](docs/QueryLogItemClientWhois.md)
 - [AdGuardHome.RemoveUrlRequest](docs/RemoveUrlRequest.md)
 - [AdGuardHome.ResultRule](docs/ResultRule.md)
 - [AdGuardHome.RewriteEntry](docs/RewriteEntry.md)
 - [AdGuardHome.RewriteUpdate](docs/RewriteUpdate.md)
 - [AdGuardHome.SafeSearchConfig](docs/SafeSearchConfig.md)
 - [AdGuardHome.SafebrowsingStatus200Response](docs/SafebrowsingStatus200Response.md)
 - [AdGuardHome.Schedule](docs/Schedule.md)
 - [AdGuardHome.ServerStatus](docs/ServerStatus.md)
 - [AdGuardHome.SetProtectionRequest](docs/SetProtectionRequest.md)
 - [AdGuardHome.SetRulesRequest](docs/SetRulesRequest.md)
 - [AdGuardHome.Stats](docs/Stats.md)
 - [AdGuardHome.StatsConfig](docs/StatsConfig.md)
 - [AdGuardHome.TlsConfig](docs/TlsConfig.md)
 - [AdGuardHome.TopArrayEntry](docs/TopArrayEntry.md)
 - [AdGuardHome.UpstreamsConfig](docs/UpstreamsConfig.md)
 - [AdGuardHome.VersionInfo](docs/VersionInfo.md)

## :question: Get Help

For bug reports and feature requests, open issues. :bug:

## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications _for free_! You can even change the source code and redistribute (even resell it).

Thank you to all my backers!
### People

- [fflorent](https://github.com/fflorent)
- [Speeedy0815](https://github.com/Speeedy0815)
- Ralf S.
- Enno L.
- Jürgen G.
- Mark MC G.
- Kay-Uwe M.
- Craig O.
- Manuel G.

### Become a backer

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

- Starring and sharing the projects you like :rocket:
- [![PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=for-the-badge)][paypal-donations] &nbsp; — &nbsp; You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
- [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/T6T412CXA) &nbsp;—&nbsp; I'll buy a ~~tea~~ coffee. :coffee: :wink:


Thanks! :heart:

## :yum: How to contribute

Have an idea? Found a bug? See [how to contribute][contributing].

