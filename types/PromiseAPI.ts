import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.js';
import { Configuration} from '../configuration.js'

import { AccessList } from '../models/AccessList.js';
import { AddUrlRequest } from '../models/AddUrlRequest.js';
import { AddressInfo } from '../models/AddressInfo.js';
import { AddressesInfo } from '../models/AddressesInfo.js';
import { BlockedService } from '../models/BlockedService.js';
import { BlockedServicesAll } from '../models/BlockedServicesAll.js';
import { BlockedServicesSchedule } from '../models/BlockedServicesSchedule.js';
import { CheckConfigRequest } from '../models/CheckConfigRequest.js';
import { CheckConfigRequestInfo } from '../models/CheckConfigRequestInfo.js';
import { CheckConfigResponse } from '../models/CheckConfigResponse.js';
import { CheckConfigResponseInfo } from '../models/CheckConfigResponseInfo.js';
import { CheckConfigStaticIpInfo } from '../models/CheckConfigStaticIpInfo.js';
import { CheckConfigStaticIpInfoStatic } from '../models/CheckConfigStaticIpInfoStatic.js';
import { Client } from '../models/Client.js';
import { ClientAuto } from '../models/ClientAuto.js';
import { ClientDelete } from '../models/ClientDelete.js';
import { ClientFindSubEntry } from '../models/ClientFindSubEntry.js';
import { ClientUpdate } from '../models/ClientUpdate.js';
import { Clients } from '../models/Clients.js';
import { DNSConfig } from '../models/DNSConfig.js';
import { DayRange } from '../models/DayRange.js';
import { DhcpConfig } from '../models/DhcpConfig.js';
import { DhcpConfigV4 } from '../models/DhcpConfigV4.js';
import { DhcpConfigV6 } from '../models/DhcpConfigV6.js';
import { DhcpFindActiveReq } from '../models/DhcpFindActiveReq.js';
import { DhcpLease } from '../models/DhcpLease.js';
import { DhcpSearchResult } from '../models/DhcpSearchResult.js';
import { DhcpSearchResultOtherServer } from '../models/DhcpSearchResultOtherServer.js';
import { DhcpSearchResultStaticIP } from '../models/DhcpSearchResultStaticIP.js';
import { DhcpSearchV4 } from '../models/DhcpSearchV4.js';
import { DhcpSearchV6 } from '../models/DhcpSearchV6.js';
import { DhcpStaticLease } from '../models/DhcpStaticLease.js';
import { DhcpStatus } from '../models/DhcpStatus.js';
import { DnsAnswer } from '../models/DnsAnswer.js';
import { DnsInfo200Response } from '../models/DnsInfo200Response.js';
import { DnsQuestion } from '../models/DnsQuestion.js';
import { Filter } from '../models/Filter.js';
import { FilterCheckHostResponse } from '../models/FilterCheckHostResponse.js';
import { FilterConfig } from '../models/FilterConfig.js';
import { FilterRefreshRequest } from '../models/FilterRefreshRequest.js';
import { FilterRefreshResponse } from '../models/FilterRefreshResponse.js';
import { FilterSetUrl } from '../models/FilterSetUrl.js';
import { FilterSetUrlData } from '../models/FilterSetUrlData.js';
import { FilterStatus } from '../models/FilterStatus.js';
import { GetQueryLogConfigResponse } from '../models/GetQueryLogConfigResponse.js';
import { GetStatsConfigResponse } from '../models/GetStatsConfigResponse.js';
import { GetVersionRequest } from '../models/GetVersionRequest.js';
import { InitialConfiguration } from '../models/InitialConfiguration.js';
import { LanguageSettings } from '../models/LanguageSettings.js';
import { Login } from '../models/Login.js';
import { ModelError } from '../models/ModelError.js';
import { NetInterface } from '../models/NetInterface.js';
import { ParentalStatus200Response } from '../models/ParentalStatus200Response.js';
import { ProfileInfo } from '../models/ProfileInfo.js';
import { QueryLog } from '../models/QueryLog.js';
import { QueryLogConfig } from '../models/QueryLogConfig.js';
import { QueryLogItem } from '../models/QueryLogItem.js';
import { QueryLogItemClient } from '../models/QueryLogItemClient.js';
import { QueryLogItemClientWhois } from '../models/QueryLogItemClientWhois.js';
import { RemoveUrlRequest } from '../models/RemoveUrlRequest.js';
import { ResultRule } from '../models/ResultRule.js';
import { RewriteEntry } from '../models/RewriteEntry.js';
import { RewriteUpdate } from '../models/RewriteUpdate.js';
import { SafeSearchConfig } from '../models/SafeSearchConfig.js';
import { SafebrowsingStatus200Response } from '../models/SafebrowsingStatus200Response.js';
import { Schedule } from '../models/Schedule.js';
import { ServerStatus } from '../models/ServerStatus.js';
import { SetProtectionRequest } from '../models/SetProtectionRequest.js';
import { SetRulesRequest } from '../models/SetRulesRequest.js';
import { Stats } from '../models/Stats.js';
import { StatsConfig } from '../models/StatsConfig.js';
import { TlsConfig } from '../models/TlsConfig.js';
import { TopArrayEntry } from '../models/TopArrayEntry.js';
import { UpstreamsConfig } from '../models/UpstreamsConfig.js';
import { VersionInfo } from '../models/VersionInfo.js';
import { ObservableBlockedServicesApi } from './ObservableAPI.js';

import { BlockedServicesApiRequestFactory, BlockedServicesApiResponseProcessor} from "../apis/BlockedServicesApi.js";
export class PromiseBlockedServicesApi {
    private api: ObservableBlockedServicesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BlockedServicesApiRequestFactory,
        responseProcessor?: BlockedServicesApiResponseProcessor
    ) {
        this.api = new ObservableBlockedServicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get available services to use for blocking
     */
    public blockedServicesAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<BlockedServicesAll>> {
        const result = this.api.blockedServicesAllWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get available services to use for blocking
     */
    public blockedServicesAll(_options?: Configuration): Promise<BlockedServicesAll> {
        const result = this.api.blockedServicesAll(_options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `GET /blocked_services/all` instead. 
     * Get available services to use for blocking
     */
    public blockedServicesAvailableServicesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<string>>> {
        const result = this.api.blockedServicesAvailableServicesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `GET /blocked_services/all` instead. 
     * Get available services to use for blocking
     */
    public blockedServicesAvailableServices(_options?: Configuration): Promise<Array<string>> {
        const result = this.api.blockedServicesAvailableServices(_options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `GET /blocked_services/get` instead. 
     * Get blocked services list
     */
    public blockedServicesListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<string>>> {
        const result = this.api.blockedServicesListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `GET /blocked_services/get` instead. 
     * Get blocked services list
     */
    public blockedServicesList(_options?: Configuration): Promise<Array<string>> {
        const result = this.api.blockedServicesList(_options);
        return result.toPromise();
    }

    /**
     * Get blocked services
     */
    public blockedServicesScheduleWithHttpInfo(_options?: Configuration): Promise<HttpInfo<BlockedServicesSchedule>> {
        const result = this.api.blockedServicesScheduleWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get blocked services
     */
    public blockedServicesSchedule(_options?: Configuration): Promise<BlockedServicesSchedule> {
        const result = this.api.blockedServicesSchedule(_options);
        return result.toPromise();
    }

    /**
     * Update blocked services
     * @param blockedServicesSchedule 
     */
    public blockedServicesScheduleUpdateWithHttpInfo(blockedServicesSchedule: BlockedServicesSchedule, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.blockedServicesScheduleUpdateWithHttpInfo(blockedServicesSchedule, _options);
        return result.toPromise();
    }

    /**
     * Update blocked services
     * @param blockedServicesSchedule 
     */
    public blockedServicesScheduleUpdate(blockedServicesSchedule: BlockedServicesSchedule, _options?: Configuration): Promise<void> {
        const result = this.api.blockedServicesScheduleUpdate(blockedServicesSchedule, _options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `PUT /blocked_services/update` instead. 
     * Set blocked services list
     * @param requestBody 
     */
    public blockedServicesSetWithHttpInfo(requestBody?: Array<string>, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.blockedServicesSetWithHttpInfo(requestBody, _options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `PUT /blocked_services/update` instead. 
     * Set blocked services list
     * @param requestBody 
     */
    public blockedServicesSet(requestBody?: Array<string>, _options?: Configuration): Promise<void> {
        const result = this.api.blockedServicesSet(requestBody, _options);
        return result.toPromise();
    }


}



import { ObservableClientsApi } from './ObservableAPI.js';

import { ClientsApiRequestFactory, ClientsApiResponseProcessor} from "../apis/ClientsApi.js";
export class PromiseClientsApi {
    private api: ObservableClientsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ClientsApiRequestFactory,
        responseProcessor?: ClientsApiResponseProcessor
    ) {
        this.api = new ObservableClientsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List (dis)allowed clients, blocked hosts, etc.
     */
    public accessListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<AccessList>> {
        const result = this.api.accessListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List (dis)allowed clients, blocked hosts, etc.
     */
    public accessList(_options?: Configuration): Promise<AccessList> {
        const result = this.api.accessList(_options);
        return result.toPromise();
    }

    /**
     * Set (dis)allowed clients, blocked hosts, etc.
     * @param body 
     */
    public accessSetWithHttpInfo(body: AccessList, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.accessSetWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Set (dis)allowed clients, blocked hosts, etc.
     * @param body 
     */
    public accessSet(body: AccessList, _options?: Configuration): Promise<void> {
        const result = this.api.accessSet(body, _options);
        return result.toPromise();
    }

    /**
     * Add a new client
     * @param client 
     */
    public clientsAddWithHttpInfo(client: Client, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.clientsAddWithHttpInfo(client, _options);
        return result.toPromise();
    }

    /**
     * Add a new client
     * @param client 
     */
    public clientsAdd(client: Client, _options?: Configuration): Promise<void> {
        const result = this.api.clientsAdd(client, _options);
        return result.toPromise();
    }

    /**
     * Remove a client
     * @param clientDelete 
     */
    public clientsDeleteWithHttpInfo(clientDelete: ClientDelete, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.clientsDeleteWithHttpInfo(clientDelete, _options);
        return result.toPromise();
    }

    /**
     * Remove a client
     * @param clientDelete 
     */
    public clientsDelete(clientDelete: ClientDelete, _options?: Configuration): Promise<void> {
        const result = this.api.clientsDelete(clientDelete, _options);
        return result.toPromise();
    }

    /**
     * Get information about clients by their IP addresses or ClientIDs. 
     * @param ip0 Filter by IP address or ClientIDs.  Parameters with names &#x60;ip1&#x60;, &#x60;ip2&#x60;, and so on are also accepted and interpreted as \&quot;ip0 OR ip1 OR ip2\&quot;. TODO(a.garipov): Replace with a better query API. 
     */
    public clientsFindWithHttpInfo(ip0?: string, _options?: Configuration): Promise<HttpInfo<Array<{ [key: string]: ClientFindSubEntry; }>>> {
        const result = this.api.clientsFindWithHttpInfo(ip0, _options);
        return result.toPromise();
    }

    /**
     * Get information about clients by their IP addresses or ClientIDs. 
     * @param ip0 Filter by IP address or ClientIDs.  Parameters with names &#x60;ip1&#x60;, &#x60;ip2&#x60;, and so on are also accepted and interpreted as \&quot;ip0 OR ip1 OR ip2\&quot;. TODO(a.garipov): Replace with a better query API. 
     */
    public clientsFind(ip0?: string, _options?: Configuration): Promise<Array<{ [key: string]: ClientFindSubEntry; }>> {
        const result = this.api.clientsFind(ip0, _options);
        return result.toPromise();
    }

    /**
     * Get information about configured clients
     */
    public clientsStatusWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Clients>> {
        const result = this.api.clientsStatusWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get information about configured clients
     */
    public clientsStatus(_options?: Configuration): Promise<Clients> {
        const result = this.api.clientsStatus(_options);
        return result.toPromise();
    }

    /**
     * Update client information
     * @param clientUpdate 
     */
    public clientsUpdateWithHttpInfo(clientUpdate: ClientUpdate, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.clientsUpdateWithHttpInfo(clientUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update client information
     * @param clientUpdate 
     */
    public clientsUpdate(clientUpdate: ClientUpdate, _options?: Configuration): Promise<void> {
        const result = this.api.clientsUpdate(clientUpdate, _options);
        return result.toPromise();
    }


}



import { ObservableDhcpApi } from './ObservableAPI.js';

import { DhcpApiRequestFactory, DhcpApiResponseProcessor} from "../apis/DhcpApi.js";
export class PromiseDhcpApi {
    private api: ObservableDhcpApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DhcpApiRequestFactory,
        responseProcessor?: DhcpApiResponseProcessor
    ) {
        this.api = new ObservableDhcpApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Searches for an active DHCP server on the network
     * @param dhcpFindActiveReq 
     */
    public checkActiveDhcpWithHttpInfo(dhcpFindActiveReq?: DhcpFindActiveReq, _options?: Configuration): Promise<HttpInfo<DhcpSearchResult>> {
        const result = this.api.checkActiveDhcpWithHttpInfo(dhcpFindActiveReq, _options);
        return result.toPromise();
    }

    /**
     * Searches for an active DHCP server on the network
     * @param dhcpFindActiveReq 
     */
    public checkActiveDhcp(dhcpFindActiveReq?: DhcpFindActiveReq, _options?: Configuration): Promise<DhcpSearchResult> {
        const result = this.api.checkActiveDhcp(dhcpFindActiveReq, _options);
        return result.toPromise();
    }

    /**
     * Adds a static lease
     * @param dhcpStaticLease 
     */
    public dhcpAddStaticLeaseWithHttpInfo(dhcpStaticLease: DhcpStaticLease, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.dhcpAddStaticLeaseWithHttpInfo(dhcpStaticLease, _options);
        return result.toPromise();
    }

    /**
     * Adds a static lease
     * @param dhcpStaticLease 
     */
    public dhcpAddStaticLease(dhcpStaticLease: DhcpStaticLease, _options?: Configuration): Promise<void> {
        const result = this.api.dhcpAddStaticLease(dhcpStaticLease, _options);
        return result.toPromise();
    }

    /**
     * Gets the available interfaces
     */
    public dhcpInterfacesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<{ [key: string]: NetInterface; }>> {
        const result = this.api.dhcpInterfacesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the available interfaces
     */
    public dhcpInterfaces(_options?: Configuration): Promise<{ [key: string]: NetInterface; }> {
        const result = this.api.dhcpInterfaces(_options);
        return result.toPromise();
    }

    /**
     * Removes a static lease
     * @param dhcpStaticLease 
     */
    public dhcpRemoveStaticLeaseWithHttpInfo(dhcpStaticLease: DhcpStaticLease, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.dhcpRemoveStaticLeaseWithHttpInfo(dhcpStaticLease, _options);
        return result.toPromise();
    }

    /**
     * Removes a static lease
     * @param dhcpStaticLease 
     */
    public dhcpRemoveStaticLease(dhcpStaticLease: DhcpStaticLease, _options?: Configuration): Promise<void> {
        const result = this.api.dhcpRemoveStaticLease(dhcpStaticLease, _options);
        return result.toPromise();
    }

    /**
     * Reset DHCP configuration
     */
    public dhcpResetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.dhcpResetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Reset DHCP configuration
     */
    public dhcpReset(_options?: Configuration): Promise<void> {
        const result = this.api.dhcpReset(_options);
        return result.toPromise();
    }

    /**
     * Reset DHCP leases
     */
    public dhcpResetLeasesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.dhcpResetLeasesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Reset DHCP leases
     */
    public dhcpResetLeases(_options?: Configuration): Promise<void> {
        const result = this.api.dhcpResetLeases(_options);
        return result.toPromise();
    }

    /**
     * Updates the current DHCP server configuration
     * @param dhcpConfig 
     */
    public dhcpSetConfigWithHttpInfo(dhcpConfig?: DhcpConfig, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.dhcpSetConfigWithHttpInfo(dhcpConfig, _options);
        return result.toPromise();
    }

    /**
     * Updates the current DHCP server configuration
     * @param dhcpConfig 
     */
    public dhcpSetConfig(dhcpConfig?: DhcpConfig, _options?: Configuration): Promise<void> {
        const result = this.api.dhcpSetConfig(dhcpConfig, _options);
        return result.toPromise();
    }

    /**
     * Gets the current DHCP settings and status
     */
    public dhcpStatusWithHttpInfo(_options?: Configuration): Promise<HttpInfo<DhcpStatus>> {
        const result = this.api.dhcpStatusWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the current DHCP settings and status
     */
    public dhcpStatus(_options?: Configuration): Promise<DhcpStatus> {
        const result = this.api.dhcpStatus(_options);
        return result.toPromise();
    }

    /**
     * Updates IP address, hostname of the static lease.  IP version must be the same as previous. 
     * Updates a static lease
     * @param dhcpStaticLease 
     */
    public dhcpUpdateStaticLeaseWithHttpInfo(dhcpStaticLease: DhcpStaticLease, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.dhcpUpdateStaticLeaseWithHttpInfo(dhcpStaticLease, _options);
        return result.toPromise();
    }

    /**
     * Updates IP address, hostname of the static lease.  IP version must be the same as previous. 
     * Updates a static lease
     * @param dhcpStaticLease 
     */
    public dhcpUpdateStaticLease(dhcpStaticLease: DhcpStaticLease, _options?: Configuration): Promise<void> {
        const result = this.api.dhcpUpdateStaticLease(dhcpStaticLease, _options);
        return result.toPromise();
    }


}



import { ObservableFilteringApi } from './ObservableAPI.js';

import { FilteringApiRequestFactory, FilteringApiResponseProcessor} from "../apis/FilteringApi.js";
export class PromiseFilteringApi {
    private api: ObservableFilteringApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FilteringApiRequestFactory,
        responseProcessor?: FilteringApiResponseProcessor
    ) {
        this.api = new ObservableFilteringApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add filter URL or an absolute file path
     * @param addUrlRequest 
     */
    public filteringAddURLWithHttpInfo(addUrlRequest: AddUrlRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filteringAddURLWithHttpInfo(addUrlRequest, _options);
        return result.toPromise();
    }

    /**
     * Add filter URL or an absolute file path
     * @param addUrlRequest 
     */
    public filteringAddURL(addUrlRequest: AddUrlRequest, _options?: Configuration): Promise<void> {
        const result = this.api.filteringAddURL(addUrlRequest, _options);
        return result.toPromise();
    }

    /**
     * Check if host name is filtered
     * @param name Filter by host name
     */
    public filteringCheckHostWithHttpInfo(name?: string, _options?: Configuration): Promise<HttpInfo<FilterCheckHostResponse>> {
        const result = this.api.filteringCheckHostWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * Check if host name is filtered
     * @param name Filter by host name
     */
    public filteringCheckHost(name?: string, _options?: Configuration): Promise<FilterCheckHostResponse> {
        const result = this.api.filteringCheckHost(name, _options);
        return result.toPromise();
    }

    /**
     * Set filtering parameters
     * @param filterConfig 
     */
    public filteringConfigWithHttpInfo(filterConfig: FilterConfig, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filteringConfigWithHttpInfo(filterConfig, _options);
        return result.toPromise();
    }

    /**
     * Set filtering parameters
     * @param filterConfig 
     */
    public filteringConfig(filterConfig: FilterConfig, _options?: Configuration): Promise<void> {
        const result = this.api.filteringConfig(filterConfig, _options);
        return result.toPromise();
    }

    /**
     * Reload filtering rules from URLs.  This might be needed if new URL was just added and you don\'t want to wait for automatic refresh to kick in. This API request is ratelimited, so you can call it freely as often as you like, it wont create unnecessary burden on servers that host the URL.  This should work as intended, a `force` parameter is offered as last-resort attempt to make filter lists fresh.  If you ever find yourself using `force` to make something work that otherwise wont, this is a bug and report it accordingly. 
     * @param filterRefreshRequest 
     */
    public filteringRefreshWithHttpInfo(filterRefreshRequest?: FilterRefreshRequest, _options?: Configuration): Promise<HttpInfo<FilterRefreshResponse>> {
        const result = this.api.filteringRefreshWithHttpInfo(filterRefreshRequest, _options);
        return result.toPromise();
    }

    /**
     * Reload filtering rules from URLs.  This might be needed if new URL was just added and you don\'t want to wait for automatic refresh to kick in. This API request is ratelimited, so you can call it freely as often as you like, it wont create unnecessary burden on servers that host the URL.  This should work as intended, a `force` parameter is offered as last-resort attempt to make filter lists fresh.  If you ever find yourself using `force` to make something work that otherwise wont, this is a bug and report it accordingly. 
     * @param filterRefreshRequest 
     */
    public filteringRefresh(filterRefreshRequest?: FilterRefreshRequest, _options?: Configuration): Promise<FilterRefreshResponse> {
        const result = this.api.filteringRefresh(filterRefreshRequest, _options);
        return result.toPromise();
    }

    /**
     * Remove filter URL
     * @param removeUrlRequest 
     */
    public filteringRemoveURLWithHttpInfo(removeUrlRequest: RemoveUrlRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filteringRemoveURLWithHttpInfo(removeUrlRequest, _options);
        return result.toPromise();
    }

    /**
     * Remove filter URL
     * @param removeUrlRequest 
     */
    public filteringRemoveURL(removeUrlRequest: RemoveUrlRequest, _options?: Configuration): Promise<void> {
        const result = this.api.filteringRemoveURL(removeUrlRequest, _options);
        return result.toPromise();
    }

    /**
     * Set user-defined filter rules
     * @param setRulesRequest Custom filtering rules.
     */
    public filteringSetRulesWithHttpInfo(setRulesRequest?: SetRulesRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filteringSetRulesWithHttpInfo(setRulesRequest, _options);
        return result.toPromise();
    }

    /**
     * Set user-defined filter rules
     * @param setRulesRequest Custom filtering rules.
     */
    public filteringSetRules(setRulesRequest?: SetRulesRequest, _options?: Configuration): Promise<void> {
        const result = this.api.filteringSetRules(setRulesRequest, _options);
        return result.toPromise();
    }

    /**
     * Set URL parameters
     * @param filterSetUrl 
     */
    public filteringSetURLWithHttpInfo(filterSetUrl?: FilterSetUrl, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.filteringSetURLWithHttpInfo(filterSetUrl, _options);
        return result.toPromise();
    }

    /**
     * Set URL parameters
     * @param filterSetUrl 
     */
    public filteringSetURL(filterSetUrl?: FilterSetUrl, _options?: Configuration): Promise<void> {
        const result = this.api.filteringSetURL(filterSetUrl, _options);
        return result.toPromise();
    }

    /**
     * Get filtering parameters
     */
    public filteringStatusWithHttpInfo(_options?: Configuration): Promise<HttpInfo<FilterStatus>> {
        const result = this.api.filteringStatusWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get filtering parameters
     */
    public filteringStatus(_options?: Configuration): Promise<FilterStatus> {
        const result = this.api.filteringStatus(_options);
        return result.toPromise();
    }


}



import { ObservableGlobalApi } from './ObservableAPI.js';

import { GlobalApiRequestFactory, GlobalApiResponseProcessor} from "../apis/GlobalApi.js";
export class PromiseGlobalApi {
    private api: ObservableGlobalApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GlobalApiRequestFactory,
        responseProcessor?: GlobalApiResponseProcessor
    ) {
        this.api = new ObservableGlobalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Begin auto-upgrade procedure
     */
    public beginUpdateWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.beginUpdateWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Begin auto-upgrade procedure
     */
    public beginUpdate(_options?: Configuration): Promise<void> {
        const result = this.api.beginUpdate(_options);
        return result.toPromise();
    }

    /**
     * Clear DNS cache
     */
    public cacheClearWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.cacheClearWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Clear DNS cache
     */
    public cacheClear(_options?: Configuration): Promise<void> {
        const result = this.api.cacheClear(_options);
        return result.toPromise();
    }

    /**
     * Set general DNS parameters
     * @param dNSConfig 
     */
    public dnsConfigWithHttpInfo(dNSConfig?: DNSConfig, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.dnsConfigWithHttpInfo(dNSConfig, _options);
        return result.toPromise();
    }

    /**
     * Set general DNS parameters
     * @param dNSConfig 
     */
    public dnsConfig(dNSConfig?: DNSConfig, _options?: Configuration): Promise<void> {
        const result = this.api.dnsConfig(dNSConfig, _options);
        return result.toPromise();
    }

    /**
     * Get general DNS parameters
     */
    public dnsInfoWithHttpInfo(_options?: Configuration): Promise<HttpInfo<DnsInfo200Response>> {
        const result = this.api.dnsInfoWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get general DNS parameters
     */
    public dnsInfo(_options?: Configuration): Promise<DnsInfo200Response> {
        const result = this.api.dnsInfo(_options);
        return result.toPromise();
    }

    /**
     * 
     */
    public getProfileWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ProfileInfo>> {
        const result = this.api.getProfileWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * 
     */
    public getProfile(_options?: Configuration): Promise<ProfileInfo> {
        const result = this.api.getProfile(_options);
        return result.toPromise();
    }

    /**
     * Gets information about the latest available version of AdGuard 
     * @param getVersionRequest 
     */
    public getVersionJsonWithHttpInfo(getVersionRequest: GetVersionRequest, _options?: Configuration): Promise<HttpInfo<VersionInfo>> {
        const result = this.api.getVersionJsonWithHttpInfo(getVersionRequest, _options);
        return result.toPromise();
    }

    /**
     * Gets information about the latest available version of AdGuard 
     * @param getVersionRequest 
     */
    public getVersionJson(getVersionRequest: GetVersionRequest, _options?: Configuration): Promise<VersionInfo> {
        const result = this.api.getVersionJson(getVersionRequest, _options);
        return result.toPromise();
    }

    /**
     * Perform administrator log-in
     * @param login 
     */
    public loginWithHttpInfo(login: Login, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.loginWithHttpInfo(login, _options);
        return result.toPromise();
    }

    /**
     * Perform administrator log-in
     * @param login 
     */
    public login(login: Login, _options?: Configuration): Promise<void> {
        const result = this.api.login(login, _options);
        return result.toPromise();
    }

    /**
     * Perform administrator log-out
     */
    public logoutWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.logoutWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Perform administrator log-out
     */
    public logout(_options?: Configuration): Promise<void> {
        const result = this.api.logout(_options);
        return result.toPromise();
    }

    /**
     * Get DNS over HTTPS .mobileconfig.
     * @param host Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @param clientId ClientID. 
     */
    public mobileConfigDoHWithHttpInfo(host: string, clientId?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.mobileConfigDoHWithHttpInfo(host, clientId, _options);
        return result.toPromise();
    }

    /**
     * Get DNS over HTTPS .mobileconfig.
     * @param host Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @param clientId ClientID. 
     */
    public mobileConfigDoH(host: string, clientId?: string, _options?: Configuration): Promise<void> {
        const result = this.api.mobileConfigDoH(host, clientId, _options);
        return result.toPromise();
    }

    /**
     * Get DNS over TLS .mobileconfig.
     * @param host Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @param clientId ClientID. 
     */
    public mobileConfigDoTWithHttpInfo(host: string, clientId?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.mobileConfigDoTWithHttpInfo(host, clientId, _options);
        return result.toPromise();
    }

    /**
     * Get DNS over TLS .mobileconfig.
     * @param host Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @param clientId ClientID. 
     */
    public mobileConfigDoT(host: string, clientId?: string, _options?: Configuration): Promise<void> {
        const result = this.api.mobileConfigDoT(host, clientId, _options);
        return result.toPromise();
    }

    /**
     * Set protection state and duration
     * @param setProtectionRequest 
     */
    public setProtectionWithHttpInfo(setProtectionRequest?: SetProtectionRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.setProtectionWithHttpInfo(setProtectionRequest, _options);
        return result.toPromise();
    }

    /**
     * Set protection state and duration
     * @param setProtectionRequest 
     */
    public setProtection(setProtectionRequest?: SetProtectionRequest, _options?: Configuration): Promise<void> {
        const result = this.api.setProtection(setProtectionRequest, _options);
        return result.toPromise();
    }

    /**
     * Get DNS server current status and general settings
     */
    public statusWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ServerStatus>> {
        const result = this.api.statusWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get DNS server current status and general settings
     */
    public status(_options?: Configuration): Promise<ServerStatus> {
        const result = this.api.status(_options);
        return result.toPromise();
    }

    /**
     * Test upstream configuration
     * @param upstreamsConfig Upstream configuration to be tested
     */
    public testUpstreamDNSWithHttpInfo(upstreamsConfig?: UpstreamsConfig, _options?: Configuration): Promise<HttpInfo<{ [key: string]: string; }>> {
        const result = this.api.testUpstreamDNSWithHttpInfo(upstreamsConfig, _options);
        return result.toPromise();
    }

    /**
     * Test upstream configuration
     * @param upstreamsConfig Upstream configuration to be tested
     */
    public testUpstreamDNS(upstreamsConfig?: UpstreamsConfig, _options?: Configuration): Promise<{ [key: string]: string; }> {
        const result = this.api.testUpstreamDNS(upstreamsConfig, _options);
        return result.toPromise();
    }

    /**
     * Updates current user info
     * @param profileInfo 
     */
    public updateProfileWithHttpInfo(profileInfo?: ProfileInfo, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateProfileWithHttpInfo(profileInfo, _options);
        return result.toPromise();
    }

    /**
     * Updates current user info
     * @param profileInfo 
     */
    public updateProfile(profileInfo?: ProfileInfo, _options?: Configuration): Promise<void> {
        const result = this.api.updateProfile(profileInfo, _options);
        return result.toPromise();
    }


}



import { ObservableI18nApi } from './ObservableAPI.js';

import { I18nApiRequestFactory, I18nApiResponseProcessor} from "../apis/I18nApi.js";
export class PromiseI18nApi {
    private api: ObservableI18nApi

    public constructor(
        configuration: Configuration,
        requestFactory?: I18nApiRequestFactory,
        responseProcessor?: I18nApiResponseProcessor
    ) {
        this.api = new ObservableI18nApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deprecated: Use `PUT /control/profile` instead. 
     * Change current language.  Argument must be an ISO 639-1 two-letter code. 
     * @param languageSettings New language.  It must be known to the server and must be an ISO 639-1 two-letter code. 
     */
    public changeLanguageWithHttpInfo(languageSettings?: LanguageSettings, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.changeLanguageWithHttpInfo(languageSettings, _options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `PUT /control/profile` instead. 
     * Change current language.  Argument must be an ISO 639-1 two-letter code. 
     * @param languageSettings New language.  It must be known to the server and must be an ISO 639-1 two-letter code. 
     */
    public changeLanguage(languageSettings?: LanguageSettings, _options?: Configuration): Promise<void> {
        const result = this.api.changeLanguage(languageSettings, _options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `GET /control/profile` instead. 
     * Get currently set language.  Result is ISO 639-1 two-letter code.  Empty result means default language. 
     */
    public currentLanguageWithHttpInfo(_options?: Configuration): Promise<HttpInfo<LanguageSettings>> {
        const result = this.api.currentLanguageWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `GET /control/profile` instead. 
     * Get currently set language.  Result is ISO 639-1 two-letter code.  Empty result means default language. 
     */
    public currentLanguage(_options?: Configuration): Promise<LanguageSettings> {
        const result = this.api.currentLanguage(_options);
        return result.toPromise();
    }


}



import { ObservableInstallApi } from './ObservableAPI.js';

import { InstallApiRequestFactory, InstallApiResponseProcessor} from "../apis/InstallApi.js";
export class PromiseInstallApi {
    private api: ObservableInstallApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InstallApiRequestFactory,
        responseProcessor?: InstallApiResponseProcessor
    ) {
        this.api = new ObservableInstallApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Checks configuration
     * @param checkConfigRequest Configuration to be checked
     */
    public installCheckConfigWithHttpInfo(checkConfigRequest: CheckConfigRequest, _options?: Configuration): Promise<HttpInfo<CheckConfigResponse>> {
        const result = this.api.installCheckConfigWithHttpInfo(checkConfigRequest, _options);
        return result.toPromise();
    }

    /**
     * Checks configuration
     * @param checkConfigRequest Configuration to be checked
     */
    public installCheckConfig(checkConfigRequest: CheckConfigRequest, _options?: Configuration): Promise<CheckConfigResponse> {
        const result = this.api.installCheckConfig(checkConfigRequest, _options);
        return result.toPromise();
    }

    /**
     * Applies the initial configuration.
     * @param initialConfiguration Initial configuration JSON
     */
    public installConfigureWithHttpInfo(initialConfiguration: InitialConfiguration, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.installConfigureWithHttpInfo(initialConfiguration, _options);
        return result.toPromise();
    }

    /**
     * Applies the initial configuration.
     * @param initialConfiguration Initial configuration JSON
     */
    public installConfigure(initialConfiguration: InitialConfiguration, _options?: Configuration): Promise<void> {
        const result = this.api.installConfigure(initialConfiguration, _options);
        return result.toPromise();
    }

    /**
     * Gets the network interfaces information.
     */
    public installGetAddressesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<AddressesInfo>> {
        const result = this.api.installGetAddressesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the network interfaces information.
     */
    public installGetAddresses(_options?: Configuration): Promise<AddressesInfo> {
        const result = this.api.installGetAddresses(_options);
        return result.toPromise();
    }


}



import { ObservableLogApi } from './ObservableAPI.js';

import { LogApiRequestFactory, LogApiResponseProcessor} from "../apis/LogApi.js";
export class PromiseLogApi {
    private api: ObservableLogApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LogApiRequestFactory,
        responseProcessor?: LogApiResponseProcessor
    ) {
        this.api = new ObservableLogApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get query log parameters
     */
    public getQueryLogConfigWithHttpInfo(_options?: Configuration): Promise<HttpInfo<GetQueryLogConfigResponse>> {
        const result = this.api.getQueryLogConfigWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get query log parameters
     */
    public getQueryLogConfig(_options?: Configuration): Promise<GetQueryLogConfigResponse> {
        const result = this.api.getQueryLogConfig(_options);
        return result.toPromise();
    }

    /**
     * Set query log parameters
     * @param body 
     */
    public putQueryLogConfigWithHttpInfo(body: GetQueryLogConfigResponse, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.putQueryLogConfigWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Set query log parameters
     * @param body 
     */
    public putQueryLogConfig(body: GetQueryLogConfigResponse, _options?: Configuration): Promise<void> {
        const result = this.api.putQueryLogConfig(body, _options);
        return result.toPromise();
    }

    /**
     * Get DNS server query log.
     * @param olderThan Filter by older than
     * @param offset Specify the ranking number of the first item on the page.  Even though it is possible to use \&quot;offset\&quot; and \&quot;older_than\&quot;, we recommend choosing one of them and sticking to it. 
     * @param limit Limit the number of records to be returned
     * @param search Filter by domain name or client IP
     * @param responseStatus Filter by response status
     */
    public queryLogWithHttpInfo(olderThan?: string, offset?: number, limit?: number, search?: string, responseStatus?: 'all' | 'filtered' | 'blocked' | 'blocked_safebrowsing' | 'blocked_parental' | 'whitelisted' | 'rewritten' | 'safe_search' | 'processed', _options?: Configuration): Promise<HttpInfo<QueryLog>> {
        const result = this.api.queryLogWithHttpInfo(olderThan, offset, limit, search, responseStatus, _options);
        return result.toPromise();
    }

    /**
     * Get DNS server query log.
     * @param olderThan Filter by older than
     * @param offset Specify the ranking number of the first item on the page.  Even though it is possible to use \&quot;offset\&quot; and \&quot;older_than\&quot;, we recommend choosing one of them and sticking to it. 
     * @param limit Limit the number of records to be returned
     * @param search Filter by domain name or client IP
     * @param responseStatus Filter by response status
     */
    public queryLog(olderThan?: string, offset?: number, limit?: number, search?: string, responseStatus?: 'all' | 'filtered' | 'blocked' | 'blocked_safebrowsing' | 'blocked_parental' | 'whitelisted' | 'rewritten' | 'safe_search' | 'processed', _options?: Configuration): Promise<QueryLog> {
        const result = this.api.queryLog(olderThan, offset, limit, search, responseStatus, _options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `PUT /querylog/config/update` instead. 
     * Set query log parameters
     * @param queryLogConfig 
     */
    public queryLogConfigWithHttpInfo(queryLogConfig?: QueryLogConfig, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.queryLogConfigWithHttpInfo(queryLogConfig, _options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `PUT /querylog/config/update` instead. 
     * Set query log parameters
     * @param queryLogConfig 
     */
    public queryLogConfig(queryLogConfig?: QueryLogConfig, _options?: Configuration): Promise<void> {
        const result = this.api.queryLogConfig(queryLogConfig, _options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `GET /querylog/config` instead.  NOTE: If `interval` was configured by editing configuration file or new HTTP API call `PUT /querylog/config/update` and it\'s not equal to previous allowed enum values then it will be equal to `90` days for compatibility reasons. 
     * Get query log parameters
     */
    public queryLogInfoWithHttpInfo(_options?: Configuration): Promise<HttpInfo<QueryLogConfig>> {
        const result = this.api.queryLogInfoWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `GET /querylog/config` instead.  NOTE: If `interval` was configured by editing configuration file or new HTTP API call `PUT /querylog/config/update` and it\'s not equal to previous allowed enum values then it will be equal to `90` days for compatibility reasons. 
     * Get query log parameters
     */
    public queryLogInfo(_options?: Configuration): Promise<QueryLogConfig> {
        const result = this.api.queryLogInfo(_options);
        return result.toPromise();
    }

    /**
     * Clear query log
     */
    public querylogClearWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.querylogClearWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Clear query log
     */
    public querylogClear(_options?: Configuration): Promise<void> {
        const result = this.api.querylogClear(_options);
        return result.toPromise();
    }


}



import { ObservableMobileconfigApi } from './ObservableAPI.js';

import { MobileconfigApiRequestFactory, MobileconfigApiResponseProcessor} from "../apis/MobileconfigApi.js";
export class PromiseMobileconfigApi {
    private api: ObservableMobileconfigApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MobileconfigApiRequestFactory,
        responseProcessor?: MobileconfigApiResponseProcessor
    ) {
        this.api = new ObservableMobileconfigApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get DNS over HTTPS .mobileconfig.
     * @param host Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @param clientId ClientID. 
     */
    public mobileConfigDoHWithHttpInfo(host: string, clientId?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.mobileConfigDoHWithHttpInfo(host, clientId, _options);
        return result.toPromise();
    }

    /**
     * Get DNS over HTTPS .mobileconfig.
     * @param host Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @param clientId ClientID. 
     */
    public mobileConfigDoH(host: string, clientId?: string, _options?: Configuration): Promise<void> {
        const result = this.api.mobileConfigDoH(host, clientId, _options);
        return result.toPromise();
    }

    /**
     * Get DNS over TLS .mobileconfig.
     * @param host Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @param clientId ClientID. 
     */
    public mobileConfigDoTWithHttpInfo(host: string, clientId?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.mobileConfigDoTWithHttpInfo(host, clientId, _options);
        return result.toPromise();
    }

    /**
     * Get DNS over TLS .mobileconfig.
     * @param host Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @param clientId ClientID. 
     */
    public mobileConfigDoT(host: string, clientId?: string, _options?: Configuration): Promise<void> {
        const result = this.api.mobileConfigDoT(host, clientId, _options);
        return result.toPromise();
    }


}



import { ObservableParentalApi } from './ObservableAPI.js';

import { ParentalApiRequestFactory, ParentalApiResponseProcessor} from "../apis/ParentalApi.js";
export class PromiseParentalApi {
    private api: ObservableParentalApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ParentalApiRequestFactory,
        responseProcessor?: ParentalApiResponseProcessor
    ) {
        this.api = new ObservableParentalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Disable parental filtering
     */
    public parentalDisableWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.parentalDisableWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Disable parental filtering
     */
    public parentalDisable(_options?: Configuration): Promise<void> {
        const result = this.api.parentalDisable(_options);
        return result.toPromise();
    }

    /**
     * Enable parental filtering
     */
    public parentalEnableWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.parentalEnableWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Enable parental filtering
     */
    public parentalEnable(_options?: Configuration): Promise<void> {
        const result = this.api.parentalEnable(_options);
        return result.toPromise();
    }

    /**
     * Get parental filtering status
     */
    public parentalStatusWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ParentalStatus200Response>> {
        const result = this.api.parentalStatusWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get parental filtering status
     */
    public parentalStatus(_options?: Configuration): Promise<ParentalStatus200Response> {
        const result = this.api.parentalStatus(_options);
        return result.toPromise();
    }


}



import { ObservableRewriteApi } from './ObservableAPI.js';

import { RewriteApiRequestFactory, RewriteApiResponseProcessor} from "../apis/RewriteApi.js";
export class PromiseRewriteApi {
    private api: ObservableRewriteApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RewriteApiRequestFactory,
        responseProcessor?: RewriteApiResponseProcessor
    ) {
        this.api = new ObservableRewriteApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a new Rewrite rule
     * @param rewriteEntry 
     */
    public rewriteAddWithHttpInfo(rewriteEntry: RewriteEntry, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.rewriteAddWithHttpInfo(rewriteEntry, _options);
        return result.toPromise();
    }

    /**
     * Add a new Rewrite rule
     * @param rewriteEntry 
     */
    public rewriteAdd(rewriteEntry: RewriteEntry, _options?: Configuration): Promise<void> {
        const result = this.api.rewriteAdd(rewriteEntry, _options);
        return result.toPromise();
    }

    /**
     * Remove a Rewrite rule
     * @param rewriteEntry 
     */
    public rewriteDeleteWithHttpInfo(rewriteEntry: RewriteEntry, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.rewriteDeleteWithHttpInfo(rewriteEntry, _options);
        return result.toPromise();
    }

    /**
     * Remove a Rewrite rule
     * @param rewriteEntry 
     */
    public rewriteDelete(rewriteEntry: RewriteEntry, _options?: Configuration): Promise<void> {
        const result = this.api.rewriteDelete(rewriteEntry, _options);
        return result.toPromise();
    }

    /**
     * Get list of Rewrite rules
     */
    public rewriteListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<RewriteEntry>>> {
        const result = this.api.rewriteListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get list of Rewrite rules
     */
    public rewriteList(_options?: Configuration): Promise<Array<RewriteEntry>> {
        const result = this.api.rewriteList(_options);
        return result.toPromise();
    }

    /**
     * Update a Rewrite rule
     * @param rewriteUpdate 
     */
    public rewriteUpdateWithHttpInfo(rewriteUpdate: RewriteUpdate, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.rewriteUpdateWithHttpInfo(rewriteUpdate, _options);
        return result.toPromise();
    }

    /**
     * Update a Rewrite rule
     * @param rewriteUpdate 
     */
    public rewriteUpdate(rewriteUpdate: RewriteUpdate, _options?: Configuration): Promise<void> {
        const result = this.api.rewriteUpdate(rewriteUpdate, _options);
        return result.toPromise();
    }


}



import { ObservableSafebrowsingApi } from './ObservableAPI.js';

import { SafebrowsingApiRequestFactory, SafebrowsingApiResponseProcessor} from "../apis/SafebrowsingApi.js";
export class PromiseSafebrowsingApi {
    private api: ObservableSafebrowsingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SafebrowsingApiRequestFactory,
        responseProcessor?: SafebrowsingApiResponseProcessor
    ) {
        this.api = new ObservableSafebrowsingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Disable safebrowsing
     */
    public safebrowsingDisableWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.safebrowsingDisableWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Disable safebrowsing
     */
    public safebrowsingDisable(_options?: Configuration): Promise<void> {
        const result = this.api.safebrowsingDisable(_options);
        return result.toPromise();
    }

    /**
     * Enable safebrowsing
     */
    public safebrowsingEnableWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.safebrowsingEnableWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Enable safebrowsing
     */
    public safebrowsingEnable(_options?: Configuration): Promise<void> {
        const result = this.api.safebrowsingEnable(_options);
        return result.toPromise();
    }

    /**
     * Get safebrowsing status
     */
    public safebrowsingStatusWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SafebrowsingStatus200Response>> {
        const result = this.api.safebrowsingStatusWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get safebrowsing status
     */
    public safebrowsingStatus(_options?: Configuration): Promise<SafebrowsingStatus200Response> {
        const result = this.api.safebrowsingStatus(_options);
        return result.toPromise();
    }


}



import { ObservableSafesearchApi } from './ObservableAPI.js';

import { SafesearchApiRequestFactory, SafesearchApiResponseProcessor} from "../apis/SafesearchApi.js";
export class PromiseSafesearchApi {
    private api: ObservableSafesearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SafesearchApiRequestFactory,
        responseProcessor?: SafesearchApiResponseProcessor
    ) {
        this.api = new ObservableSafesearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Disable safesearch
     */
    public safesearchDisableWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.safesearchDisableWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Disable safesearch
     */
    public safesearchDisable(_options?: Configuration): Promise<void> {
        const result = this.api.safesearchDisable(_options);
        return result.toPromise();
    }

    /**
     * Enable safesearch
     */
    public safesearchEnableWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.safesearchEnableWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Enable safesearch
     */
    public safesearchEnable(_options?: Configuration): Promise<void> {
        const result = this.api.safesearchEnable(_options);
        return result.toPromise();
    }

    /**
     * Update safesearch settings
     * @param safeSearchConfig 
     */
    public safesearchSettingsWithHttpInfo(safeSearchConfig?: SafeSearchConfig, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.safesearchSettingsWithHttpInfo(safeSearchConfig, _options);
        return result.toPromise();
    }

    /**
     * Update safesearch settings
     * @param safeSearchConfig 
     */
    public safesearchSettings(safeSearchConfig?: SafeSearchConfig, _options?: Configuration): Promise<void> {
        const result = this.api.safesearchSettings(safeSearchConfig, _options);
        return result.toPromise();
    }

    /**
     * Get safesearch status
     */
    public safesearchStatusWithHttpInfo(_options?: Configuration): Promise<HttpInfo<SafeSearchConfig>> {
        const result = this.api.safesearchStatusWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get safesearch status
     */
    public safesearchStatus(_options?: Configuration): Promise<SafeSearchConfig> {
        const result = this.api.safesearchStatus(_options);
        return result.toPromise();
    }


}



import { ObservableStatsApi } from './ObservableAPI.js';

import { StatsApiRequestFactory, StatsApiResponseProcessor} from "../apis/StatsApi.js";
export class PromiseStatsApi {
    private api: ObservableStatsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StatsApiRequestFactory,
        responseProcessor?: StatsApiResponseProcessor
    ) {
        this.api = new ObservableStatsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get statistics parameters
     */
    public getStatsConfigWithHttpInfo(_options?: Configuration): Promise<HttpInfo<GetStatsConfigResponse>> {
        const result = this.api.getStatsConfigWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get statistics parameters
     */
    public getStatsConfig(_options?: Configuration): Promise<GetStatsConfigResponse> {
        const result = this.api.getStatsConfig(_options);
        return result.toPromise();
    }

    /**
     * Set statistics parameters
     * @param body 
     */
    public putStatsConfigWithHttpInfo(body: GetStatsConfigResponse, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.putStatsConfigWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Set statistics parameters
     * @param body 
     */
    public putStatsConfig(body: GetStatsConfigResponse, _options?: Configuration): Promise<void> {
        const result = this.api.putStatsConfig(body, _options);
        return result.toPromise();
    }

    /**
     * Get DNS server statistics
     */
    public statsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Stats>> {
        const result = this.api.statsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get DNS server statistics
     */
    public stats(_options?: Configuration): Promise<Stats> {
        const result = this.api.stats(_options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `PUT /stats/config/update` instead. 
     * Set statistics parameters
     * @param statsConfig 
     */
    public statsConfigWithHttpInfo(statsConfig?: StatsConfig, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.statsConfigWithHttpInfo(statsConfig, _options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `PUT /stats/config/update` instead. 
     * Set statistics parameters
     * @param statsConfig 
     */
    public statsConfig(statsConfig?: StatsConfig, _options?: Configuration): Promise<void> {
        const result = this.api.statsConfig(statsConfig, _options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `GET /stats/config` instead.  NOTE: If `interval` was configured by editing configuration file or new HTTP API call `PUT /stats/config/update` and it\'s not equal to previous allowed enum values then it will be equal to `90` days for compatibility reasons. 
     * Get statistics parameters
     */
    public statsInfoWithHttpInfo(_options?: Configuration): Promise<HttpInfo<StatsConfig>> {
        const result = this.api.statsInfoWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Deprecated: Use `GET /stats/config` instead.  NOTE: If `interval` was configured by editing configuration file or new HTTP API call `PUT /stats/config/update` and it\'s not equal to previous allowed enum values then it will be equal to `90` days for compatibility reasons. 
     * Get statistics parameters
     */
    public statsInfo(_options?: Configuration): Promise<StatsConfig> {
        const result = this.api.statsInfo(_options);
        return result.toPromise();
    }

    /**
     * Reset all statistics to zeroes
     */
    public statsResetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.statsResetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Reset all statistics to zeroes
     */
    public statsReset(_options?: Configuration): Promise<void> {
        const result = this.api.statsReset(_options);
        return result.toPromise();
    }


}



import { ObservableTlsApi } from './ObservableAPI.js';

import { TlsApiRequestFactory, TlsApiResponseProcessor} from "../apis/TlsApi.js";
export class PromiseTlsApi {
    private api: ObservableTlsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TlsApiRequestFactory,
        responseProcessor?: TlsApiResponseProcessor
    ) {
        this.api = new ObservableTlsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Updates current TLS configuration
     * @param tlsConfig TLS configuration JSON
     */
    public tlsConfigureWithHttpInfo(tlsConfig: TlsConfig, _options?: Configuration): Promise<HttpInfo<TlsConfig>> {
        const result = this.api.tlsConfigureWithHttpInfo(tlsConfig, _options);
        return result.toPromise();
    }

    /**
     * Updates current TLS configuration
     * @param tlsConfig TLS configuration JSON
     */
    public tlsConfigure(tlsConfig: TlsConfig, _options?: Configuration): Promise<TlsConfig> {
        const result = this.api.tlsConfigure(tlsConfig, _options);
        return result.toPromise();
    }

    /**
     * Returns TLS configuration and its status
     */
    public tlsStatusWithHttpInfo(_options?: Configuration): Promise<HttpInfo<TlsConfig>> {
        const result = this.api.tlsStatusWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns TLS configuration and its status
     */
    public tlsStatus(_options?: Configuration): Promise<TlsConfig> {
        const result = this.api.tlsStatus(_options);
        return result.toPromise();
    }

    /**
     * Checks if the current TLS configuration is valid
     * @param tlsConfig TLS configuration JSON
     */
    public tlsValidateWithHttpInfo(tlsConfig: TlsConfig, _options?: Configuration): Promise<HttpInfo<TlsConfig>> {
        const result = this.api.tlsValidateWithHttpInfo(tlsConfig, _options);
        return result.toPromise();
    }

    /**
     * Checks if the current TLS configuration is valid
     * @param tlsConfig TLS configuration JSON
     */
    public tlsValidate(tlsConfig: TlsConfig, _options?: Configuration): Promise<TlsConfig> {
        const result = this.api.tlsValidate(tlsConfig, _options);
        return result.toPromise();
    }


}



