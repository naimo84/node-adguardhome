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

import { ObservableBlockedServicesApi } from "./ObservableAPI.js";
import { BlockedServicesApiRequestFactory, BlockedServicesApiResponseProcessor} from "../apis/BlockedServicesApi.js";

export interface BlockedServicesApiBlockedServicesAllRequest {
}

export interface BlockedServicesApiBlockedServicesAvailableServicesRequest {
}

export interface BlockedServicesApiBlockedServicesListRequest {
}

export interface BlockedServicesApiBlockedServicesScheduleRequest {
}

export interface BlockedServicesApiBlockedServicesScheduleUpdateRequest {
    /**
     * 
     * @type BlockedServicesSchedule
     * @memberof BlockedServicesApiblockedServicesScheduleUpdate
     */
    blockedServicesSchedule: BlockedServicesSchedule
}

export interface BlockedServicesApiBlockedServicesSetRequest {
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof BlockedServicesApiblockedServicesSet
     */
    requestBody?: Array<string>
}

export class ObjectBlockedServicesApi {
    private api: ObservableBlockedServicesApi

    public constructor(configuration: Configuration, requestFactory?: BlockedServicesApiRequestFactory, responseProcessor?: BlockedServicesApiResponseProcessor) {
        this.api = new ObservableBlockedServicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get available services to use for blocking
     * @param param the request object
     */
    public blockedServicesAllWithHttpInfo(param: BlockedServicesApiBlockedServicesAllRequest = {}, options?: Configuration): Promise<HttpInfo<BlockedServicesAll>> {
        return this.api.blockedServicesAllWithHttpInfo( options).toPromise();
    }

    /**
     * Get available services to use for blocking
     * @param param the request object
     */
    public blockedServicesAll(param: BlockedServicesApiBlockedServicesAllRequest = {}, options?: Configuration): Promise<BlockedServicesAll> {
        return this.api.blockedServicesAll( options).toPromise();
    }

    /**
     * Deprecated: Use `GET /blocked_services/all` instead. 
     * Get available services to use for blocking
     * @param param the request object
     */
    public blockedServicesAvailableServicesWithHttpInfo(param: BlockedServicesApiBlockedServicesAvailableServicesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.blockedServicesAvailableServicesWithHttpInfo( options).toPromise();
    }

    /**
     * Deprecated: Use `GET /blocked_services/all` instead. 
     * Get available services to use for blocking
     * @param param the request object
     */
    public blockedServicesAvailableServices(param: BlockedServicesApiBlockedServicesAvailableServicesRequest = {}, options?: Configuration): Promise<Array<string>> {
        return this.api.blockedServicesAvailableServices( options).toPromise();
    }

    /**
     * Deprecated: Use `GET /blocked_services/get` instead. 
     * Get blocked services list
     * @param param the request object
     */
    public blockedServicesListWithHttpInfo(param: BlockedServicesApiBlockedServicesListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.blockedServicesListWithHttpInfo( options).toPromise();
    }

    /**
     * Deprecated: Use `GET /blocked_services/get` instead. 
     * Get blocked services list
     * @param param the request object
     */
    public blockedServicesList(param: BlockedServicesApiBlockedServicesListRequest = {}, options?: Configuration): Promise<Array<string>> {
        return this.api.blockedServicesList( options).toPromise();
    }

    /**
     * Get blocked services
     * @param param the request object
     */
    public blockedServicesScheduleWithHttpInfo(param: BlockedServicesApiBlockedServicesScheduleRequest = {}, options?: Configuration): Promise<HttpInfo<BlockedServicesSchedule>> {
        return this.api.blockedServicesScheduleWithHttpInfo( options).toPromise();
    }

    /**
     * Get blocked services
     * @param param the request object
     */
    public blockedServicesSchedule(param: BlockedServicesApiBlockedServicesScheduleRequest = {}, options?: Configuration): Promise<BlockedServicesSchedule> {
        return this.api.blockedServicesSchedule( options).toPromise();
    }

    /**
     * Update blocked services
     * @param param the request object
     */
    public blockedServicesScheduleUpdateWithHttpInfo(param: BlockedServicesApiBlockedServicesScheduleUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.blockedServicesScheduleUpdateWithHttpInfo(param.blockedServicesSchedule,  options).toPromise();
    }

    /**
     * Update blocked services
     * @param param the request object
     */
    public blockedServicesScheduleUpdate(param: BlockedServicesApiBlockedServicesScheduleUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.blockedServicesScheduleUpdate(param.blockedServicesSchedule,  options).toPromise();
    }

    /**
     * Deprecated: Use `PUT /blocked_services/update` instead. 
     * Set blocked services list
     * @param param the request object
     */
    public blockedServicesSetWithHttpInfo(param: BlockedServicesApiBlockedServicesSetRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.blockedServicesSetWithHttpInfo(param.requestBody,  options).toPromise();
    }

    /**
     * Deprecated: Use `PUT /blocked_services/update` instead. 
     * Set blocked services list
     * @param param the request object
     */
    public blockedServicesSet(param: BlockedServicesApiBlockedServicesSetRequest = {}, options?: Configuration): Promise<void> {
        return this.api.blockedServicesSet(param.requestBody,  options).toPromise();
    }

}

import { ObservableClientsApi } from "./ObservableAPI.js";
import { ClientsApiRequestFactory, ClientsApiResponseProcessor} from "../apis/ClientsApi.js";

export interface ClientsApiAccessListRequest {
}

export interface ClientsApiAccessSetRequest {
    /**
     * 
     * @type AccessList
     * @memberof ClientsApiaccessSet
     */
    body: AccessList
}

export interface ClientsApiClientsAddRequest {
    /**
     * 
     * @type Client
     * @memberof ClientsApiclientsAdd
     */
    client: Client
}

export interface ClientsApiClientsDeleteRequest {
    /**
     * 
     * @type ClientDelete
     * @memberof ClientsApiclientsDelete
     */
    clientDelete: ClientDelete
}

export interface ClientsApiClientsFindRequest {
    /**
     * Filter by IP address or ClientIDs.  Parameters with names &#x60;ip1&#x60;, &#x60;ip2&#x60;, and so on are also accepted and interpreted as \&quot;ip0 OR ip1 OR ip2\&quot;. TODO(a.garipov): Replace with a better query API. 
     * @type string
     * @memberof ClientsApiclientsFind
     */
    ip0?: string
}

export interface ClientsApiClientsStatusRequest {
}

export interface ClientsApiClientsUpdateRequest {
    /**
     * 
     * @type ClientUpdate
     * @memberof ClientsApiclientsUpdate
     */
    clientUpdate: ClientUpdate
}

export class ObjectClientsApi {
    private api: ObservableClientsApi

    public constructor(configuration: Configuration, requestFactory?: ClientsApiRequestFactory, responseProcessor?: ClientsApiResponseProcessor) {
        this.api = new ObservableClientsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List (dis)allowed clients, blocked hosts, etc.
     * @param param the request object
     */
    public accessListWithHttpInfo(param: ClientsApiAccessListRequest = {}, options?: Configuration): Promise<HttpInfo<AccessList>> {
        return this.api.accessListWithHttpInfo( options).toPromise();
    }

    /**
     * List (dis)allowed clients, blocked hosts, etc.
     * @param param the request object
     */
    public accessList(param: ClientsApiAccessListRequest = {}, options?: Configuration): Promise<AccessList> {
        return this.api.accessList( options).toPromise();
    }

    /**
     * Set (dis)allowed clients, blocked hosts, etc.
     * @param param the request object
     */
    public accessSetWithHttpInfo(param: ClientsApiAccessSetRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.accessSetWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Set (dis)allowed clients, blocked hosts, etc.
     * @param param the request object
     */
    public accessSet(param: ClientsApiAccessSetRequest, options?: Configuration): Promise<void> {
        return this.api.accessSet(param.body,  options).toPromise();
    }

    /**
     * Add a new client
     * @param param the request object
     */
    public clientsAddWithHttpInfo(param: ClientsApiClientsAddRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.clientsAddWithHttpInfo(param.client,  options).toPromise();
    }

    /**
     * Add a new client
     * @param param the request object
     */
    public clientsAdd(param: ClientsApiClientsAddRequest, options?: Configuration): Promise<void> {
        return this.api.clientsAdd(param.client,  options).toPromise();
    }

    /**
     * Remove a client
     * @param param the request object
     */
    public clientsDeleteWithHttpInfo(param: ClientsApiClientsDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.clientsDeleteWithHttpInfo(param.clientDelete,  options).toPromise();
    }

    /**
     * Remove a client
     * @param param the request object
     */
    public clientsDelete(param: ClientsApiClientsDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.clientsDelete(param.clientDelete,  options).toPromise();
    }

    /**
     * Get information about clients by their IP addresses or ClientIDs. 
     * @param param the request object
     */
    public clientsFindWithHttpInfo(param: ClientsApiClientsFindRequest = {}, options?: Configuration): Promise<HttpInfo<Array<{ [key: string]: ClientFindSubEntry; }>>> {
        return this.api.clientsFindWithHttpInfo(param.ip0,  options).toPromise();
    }

    /**
     * Get information about clients by their IP addresses or ClientIDs. 
     * @param param the request object
     */
    public clientsFind(param: ClientsApiClientsFindRequest = {}, options?: Configuration): Promise<Array<{ [key: string]: ClientFindSubEntry; }>> {
        return this.api.clientsFind(param.ip0,  options).toPromise();
    }

    /**
     * Get information about configured clients
     * @param param the request object
     */
    public clientsStatusWithHttpInfo(param: ClientsApiClientsStatusRequest = {}, options?: Configuration): Promise<HttpInfo<Clients>> {
        return this.api.clientsStatusWithHttpInfo( options).toPromise();
    }

    /**
     * Get information about configured clients
     * @param param the request object
     */
    public clientsStatus(param: ClientsApiClientsStatusRequest = {}, options?: Configuration): Promise<Clients> {
        return this.api.clientsStatus( options).toPromise();
    }

    /**
     * Update client information
     * @param param the request object
     */
    public clientsUpdateWithHttpInfo(param: ClientsApiClientsUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.clientsUpdateWithHttpInfo(param.clientUpdate,  options).toPromise();
    }

    /**
     * Update client information
     * @param param the request object
     */
    public clientsUpdate(param: ClientsApiClientsUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.clientsUpdate(param.clientUpdate,  options).toPromise();
    }

}

import { ObservableDhcpApi } from "./ObservableAPI.js";
import { DhcpApiRequestFactory, DhcpApiResponseProcessor} from "../apis/DhcpApi.js";

export interface DhcpApiCheckActiveDhcpRequest {
    /**
     * 
     * @type DhcpFindActiveReq
     * @memberof DhcpApicheckActiveDhcp
     */
    dhcpFindActiveReq?: DhcpFindActiveReq
}

export interface DhcpApiDhcpAddStaticLeaseRequest {
    /**
     * 
     * @type DhcpStaticLease
     * @memberof DhcpApidhcpAddStaticLease
     */
    dhcpStaticLease: DhcpStaticLease
}

export interface DhcpApiDhcpInterfacesRequest {
}

export interface DhcpApiDhcpRemoveStaticLeaseRequest {
    /**
     * 
     * @type DhcpStaticLease
     * @memberof DhcpApidhcpRemoveStaticLease
     */
    dhcpStaticLease: DhcpStaticLease
}

export interface DhcpApiDhcpResetRequest {
}

export interface DhcpApiDhcpResetLeasesRequest {
}

export interface DhcpApiDhcpSetConfigRequest {
    /**
     * 
     * @type DhcpConfig
     * @memberof DhcpApidhcpSetConfig
     */
    dhcpConfig?: DhcpConfig
}

export interface DhcpApiDhcpStatusRequest {
}

export interface DhcpApiDhcpUpdateStaticLeaseRequest {
    /**
     * 
     * @type DhcpStaticLease
     * @memberof DhcpApidhcpUpdateStaticLease
     */
    dhcpStaticLease: DhcpStaticLease
}

export class ObjectDhcpApi {
    private api: ObservableDhcpApi

    public constructor(configuration: Configuration, requestFactory?: DhcpApiRequestFactory, responseProcessor?: DhcpApiResponseProcessor) {
        this.api = new ObservableDhcpApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Searches for an active DHCP server on the network
     * @param param the request object
     */
    public checkActiveDhcpWithHttpInfo(param: DhcpApiCheckActiveDhcpRequest = {}, options?: Configuration): Promise<HttpInfo<DhcpSearchResult>> {
        return this.api.checkActiveDhcpWithHttpInfo(param.dhcpFindActiveReq,  options).toPromise();
    }

    /**
     * Searches for an active DHCP server on the network
     * @param param the request object
     */
    public checkActiveDhcp(param: DhcpApiCheckActiveDhcpRequest = {}, options?: Configuration): Promise<DhcpSearchResult> {
        return this.api.checkActiveDhcp(param.dhcpFindActiveReq,  options).toPromise();
    }

    /**
     * Adds a static lease
     * @param param the request object
     */
    public dhcpAddStaticLeaseWithHttpInfo(param: DhcpApiDhcpAddStaticLeaseRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.dhcpAddStaticLeaseWithHttpInfo(param.dhcpStaticLease,  options).toPromise();
    }

    /**
     * Adds a static lease
     * @param param the request object
     */
    public dhcpAddStaticLease(param: DhcpApiDhcpAddStaticLeaseRequest, options?: Configuration): Promise<void> {
        return this.api.dhcpAddStaticLease(param.dhcpStaticLease,  options).toPromise();
    }

    /**
     * Gets the available interfaces
     * @param param the request object
     */
    public dhcpInterfacesWithHttpInfo(param: DhcpApiDhcpInterfacesRequest = {}, options?: Configuration): Promise<HttpInfo<{ [key: string]: NetInterface; }>> {
        return this.api.dhcpInterfacesWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the available interfaces
     * @param param the request object
     */
    public dhcpInterfaces(param: DhcpApiDhcpInterfacesRequest = {}, options?: Configuration): Promise<{ [key: string]: NetInterface; }> {
        return this.api.dhcpInterfaces( options).toPromise();
    }

    /**
     * Removes a static lease
     * @param param the request object
     */
    public dhcpRemoveStaticLeaseWithHttpInfo(param: DhcpApiDhcpRemoveStaticLeaseRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.dhcpRemoveStaticLeaseWithHttpInfo(param.dhcpStaticLease,  options).toPromise();
    }

    /**
     * Removes a static lease
     * @param param the request object
     */
    public dhcpRemoveStaticLease(param: DhcpApiDhcpRemoveStaticLeaseRequest, options?: Configuration): Promise<void> {
        return this.api.dhcpRemoveStaticLease(param.dhcpStaticLease,  options).toPromise();
    }

    /**
     * Reset DHCP configuration
     * @param param the request object
     */
    public dhcpResetWithHttpInfo(param: DhcpApiDhcpResetRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.dhcpResetWithHttpInfo( options).toPromise();
    }

    /**
     * Reset DHCP configuration
     * @param param the request object
     */
    public dhcpReset(param: DhcpApiDhcpResetRequest = {}, options?: Configuration): Promise<void> {
        return this.api.dhcpReset( options).toPromise();
    }

    /**
     * Reset DHCP leases
     * @param param the request object
     */
    public dhcpResetLeasesWithHttpInfo(param: DhcpApiDhcpResetLeasesRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.dhcpResetLeasesWithHttpInfo( options).toPromise();
    }

    /**
     * Reset DHCP leases
     * @param param the request object
     */
    public dhcpResetLeases(param: DhcpApiDhcpResetLeasesRequest = {}, options?: Configuration): Promise<void> {
        return this.api.dhcpResetLeases( options).toPromise();
    }

    /**
     * Updates the current DHCP server configuration
     * @param param the request object
     */
    public dhcpSetConfigWithHttpInfo(param: DhcpApiDhcpSetConfigRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.dhcpSetConfigWithHttpInfo(param.dhcpConfig,  options).toPromise();
    }

    /**
     * Updates the current DHCP server configuration
     * @param param the request object
     */
    public dhcpSetConfig(param: DhcpApiDhcpSetConfigRequest = {}, options?: Configuration): Promise<void> {
        return this.api.dhcpSetConfig(param.dhcpConfig,  options).toPromise();
    }

    /**
     * Gets the current DHCP settings and status
     * @param param the request object
     */
    public dhcpStatusWithHttpInfo(param: DhcpApiDhcpStatusRequest = {}, options?: Configuration): Promise<HttpInfo<DhcpStatus>> {
        return this.api.dhcpStatusWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the current DHCP settings and status
     * @param param the request object
     */
    public dhcpStatus(param: DhcpApiDhcpStatusRequest = {}, options?: Configuration): Promise<DhcpStatus> {
        return this.api.dhcpStatus( options).toPromise();
    }

    /**
     * Updates IP address, hostname of the static lease.  IP version must be the same as previous. 
     * Updates a static lease
     * @param param the request object
     */
    public dhcpUpdateStaticLeaseWithHttpInfo(param: DhcpApiDhcpUpdateStaticLeaseRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.dhcpUpdateStaticLeaseWithHttpInfo(param.dhcpStaticLease,  options).toPromise();
    }

    /**
     * Updates IP address, hostname of the static lease.  IP version must be the same as previous. 
     * Updates a static lease
     * @param param the request object
     */
    public dhcpUpdateStaticLease(param: DhcpApiDhcpUpdateStaticLeaseRequest, options?: Configuration): Promise<void> {
        return this.api.dhcpUpdateStaticLease(param.dhcpStaticLease,  options).toPromise();
    }

}

import { ObservableFilteringApi } from "./ObservableAPI.js";
import { FilteringApiRequestFactory, FilteringApiResponseProcessor} from "../apis/FilteringApi.js";

export interface FilteringApiFilteringAddURLRequest {
    /**
     * 
     * @type AddUrlRequest
     * @memberof FilteringApifilteringAddURL
     */
    addUrlRequest: AddUrlRequest
}

export interface FilteringApiFilteringCheckHostRequest {
    /**
     * Filter by host name
     * @type string
     * @memberof FilteringApifilteringCheckHost
     */
    name?: string
}

export interface FilteringApiFilteringConfigRequest {
    /**
     * 
     * @type FilterConfig
     * @memberof FilteringApifilteringConfig
     */
    filterConfig: FilterConfig
}

export interface FilteringApiFilteringRefreshRequest {
    /**
     * 
     * @type FilterRefreshRequest
     * @memberof FilteringApifilteringRefresh
     */
    filterRefreshRequest?: FilterRefreshRequest
}

export interface FilteringApiFilteringRemoveURLRequest {
    /**
     * 
     * @type RemoveUrlRequest
     * @memberof FilteringApifilteringRemoveURL
     */
    removeUrlRequest: RemoveUrlRequest
}

export interface FilteringApiFilteringSetRulesRequest {
    /**
     * Custom filtering rules.
     * @type SetRulesRequest
     * @memberof FilteringApifilteringSetRules
     */
    setRulesRequest?: SetRulesRequest
}

export interface FilteringApiFilteringSetURLRequest {
    /**
     * 
     * @type FilterSetUrl
     * @memberof FilteringApifilteringSetURL
     */
    filterSetUrl?: FilterSetUrl
}

export interface FilteringApiFilteringStatusRequest {
}

export class ObjectFilteringApi {
    private api: ObservableFilteringApi

    public constructor(configuration: Configuration, requestFactory?: FilteringApiRequestFactory, responseProcessor?: FilteringApiResponseProcessor) {
        this.api = new ObservableFilteringApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add filter URL or an absolute file path
     * @param param the request object
     */
    public filteringAddURLWithHttpInfo(param: FilteringApiFilteringAddURLRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.filteringAddURLWithHttpInfo(param.addUrlRequest,  options).toPromise();
    }

    /**
     * Add filter URL or an absolute file path
     * @param param the request object
     */
    public filteringAddURL(param: FilteringApiFilteringAddURLRequest, options?: Configuration): Promise<void> {
        return this.api.filteringAddURL(param.addUrlRequest,  options).toPromise();
    }

    /**
     * Check if host name is filtered
     * @param param the request object
     */
    public filteringCheckHostWithHttpInfo(param: FilteringApiFilteringCheckHostRequest = {}, options?: Configuration): Promise<HttpInfo<FilterCheckHostResponse>> {
        return this.api.filteringCheckHostWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Check if host name is filtered
     * @param param the request object
     */
    public filteringCheckHost(param: FilteringApiFilteringCheckHostRequest = {}, options?: Configuration): Promise<FilterCheckHostResponse> {
        return this.api.filteringCheckHost(param.name,  options).toPromise();
    }

    /**
     * Set filtering parameters
     * @param param the request object
     */
    public filteringConfigWithHttpInfo(param: FilteringApiFilteringConfigRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.filteringConfigWithHttpInfo(param.filterConfig,  options).toPromise();
    }

    /**
     * Set filtering parameters
     * @param param the request object
     */
    public filteringConfig(param: FilteringApiFilteringConfigRequest, options?: Configuration): Promise<void> {
        return this.api.filteringConfig(param.filterConfig,  options).toPromise();
    }

    /**
     * Reload filtering rules from URLs.  This might be needed if new URL was just added and you don\'t want to wait for automatic refresh to kick in. This API request is ratelimited, so you can call it freely as often as you like, it wont create unnecessary burden on servers that host the URL.  This should work as intended, a `force` parameter is offered as last-resort attempt to make filter lists fresh.  If you ever find yourself using `force` to make something work that otherwise wont, this is a bug and report it accordingly. 
     * @param param the request object
     */
    public filteringRefreshWithHttpInfo(param: FilteringApiFilteringRefreshRequest = {}, options?: Configuration): Promise<HttpInfo<FilterRefreshResponse>> {
        return this.api.filteringRefreshWithHttpInfo(param.filterRefreshRequest,  options).toPromise();
    }

    /**
     * Reload filtering rules from URLs.  This might be needed if new URL was just added and you don\'t want to wait for automatic refresh to kick in. This API request is ratelimited, so you can call it freely as often as you like, it wont create unnecessary burden on servers that host the URL.  This should work as intended, a `force` parameter is offered as last-resort attempt to make filter lists fresh.  If you ever find yourself using `force` to make something work that otherwise wont, this is a bug and report it accordingly. 
     * @param param the request object
     */
    public filteringRefresh(param: FilteringApiFilteringRefreshRequest = {}, options?: Configuration): Promise<FilterRefreshResponse> {
        return this.api.filteringRefresh(param.filterRefreshRequest,  options).toPromise();
    }

    /**
     * Remove filter URL
     * @param param the request object
     */
    public filteringRemoveURLWithHttpInfo(param: FilteringApiFilteringRemoveURLRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.filteringRemoveURLWithHttpInfo(param.removeUrlRequest,  options).toPromise();
    }

    /**
     * Remove filter URL
     * @param param the request object
     */
    public filteringRemoveURL(param: FilteringApiFilteringRemoveURLRequest, options?: Configuration): Promise<void> {
        return this.api.filteringRemoveURL(param.removeUrlRequest,  options).toPromise();
    }

    /**
     * Set user-defined filter rules
     * @param param the request object
     */
    public filteringSetRulesWithHttpInfo(param: FilteringApiFilteringSetRulesRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.filteringSetRulesWithHttpInfo(param.setRulesRequest,  options).toPromise();
    }

    /**
     * Set user-defined filter rules
     * @param param the request object
     */
    public filteringSetRules(param: FilteringApiFilteringSetRulesRequest = {}, options?: Configuration): Promise<void> {
        return this.api.filteringSetRules(param.setRulesRequest,  options).toPromise();
    }

    /**
     * Set URL parameters
     * @param param the request object
     */
    public filteringSetURLWithHttpInfo(param: FilteringApiFilteringSetURLRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.filteringSetURLWithHttpInfo(param.filterSetUrl,  options).toPromise();
    }

    /**
     * Set URL parameters
     * @param param the request object
     */
    public filteringSetURL(param: FilteringApiFilteringSetURLRequest = {}, options?: Configuration): Promise<void> {
        return this.api.filteringSetURL(param.filterSetUrl,  options).toPromise();
    }

    /**
     * Get filtering parameters
     * @param param the request object
     */
    public filteringStatusWithHttpInfo(param: FilteringApiFilteringStatusRequest = {}, options?: Configuration): Promise<HttpInfo<FilterStatus>> {
        return this.api.filteringStatusWithHttpInfo( options).toPromise();
    }

    /**
     * Get filtering parameters
     * @param param the request object
     */
    public filteringStatus(param: FilteringApiFilteringStatusRequest = {}, options?: Configuration): Promise<FilterStatus> {
        return this.api.filteringStatus( options).toPromise();
    }

}

import { ObservableGlobalApi } from "./ObservableAPI.js";
import { GlobalApiRequestFactory, GlobalApiResponseProcessor} from "../apis/GlobalApi.js";

export interface GlobalApiBeginUpdateRequest {
}

export interface GlobalApiCacheClearRequest {
}

export interface GlobalApiDnsConfigRequest {
    /**
     * 
     * @type DNSConfig
     * @memberof GlobalApidnsConfig
     */
    dNSConfig?: DNSConfig
}

export interface GlobalApiDnsInfoRequest {
}

export interface GlobalApiGetProfileRequest {
}

export interface GlobalApiGetVersionJsonRequest {
    /**
     * 
     * @type GetVersionRequest
     * @memberof GlobalApigetVersionJson
     */
    getVersionRequest: GetVersionRequest
}

export interface GlobalApiLoginRequest {
    /**
     * 
     * @type Login
     * @memberof GlobalApilogin
     */
    login: Login
}

export interface GlobalApiLogoutRequest {
}

export interface GlobalApiMobileConfigDoHRequest {
    /**
     * Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @type string
     * @memberof GlobalApimobileConfigDoH
     */
    host: string
    /**
     * ClientID. 
     * @type string
     * @memberof GlobalApimobileConfigDoH
     */
    clientId?: string
}

export interface GlobalApiMobileConfigDoTRequest {
    /**
     * Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @type string
     * @memberof GlobalApimobileConfigDoT
     */
    host: string
    /**
     * ClientID. 
     * @type string
     * @memberof GlobalApimobileConfigDoT
     */
    clientId?: string
}

export interface GlobalApiSetProtectionRequest {
    /**
     * 
     * @type SetProtectionRequest
     * @memberof GlobalApisetProtection
     */
    setProtectionRequest?: SetProtectionRequest
}

export interface GlobalApiStatusRequest {
}

export interface GlobalApiTestUpstreamDNSRequest {
    /**
     * Upstream configuration to be tested
     * @type UpstreamsConfig
     * @memberof GlobalApitestUpstreamDNS
     */
    upstreamsConfig?: UpstreamsConfig
}

export interface GlobalApiUpdateProfileRequest {
    /**
     * 
     * @type ProfileInfo
     * @memberof GlobalApiupdateProfile
     */
    profileInfo?: ProfileInfo
}

export class ObjectGlobalApi {
    private api: ObservableGlobalApi

    public constructor(configuration: Configuration, requestFactory?: GlobalApiRequestFactory, responseProcessor?: GlobalApiResponseProcessor) {
        this.api = new ObservableGlobalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Begin auto-upgrade procedure
     * @param param the request object
     */
    public beginUpdateWithHttpInfo(param: GlobalApiBeginUpdateRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.beginUpdateWithHttpInfo( options).toPromise();
    }

    /**
     * Begin auto-upgrade procedure
     * @param param the request object
     */
    public beginUpdate(param: GlobalApiBeginUpdateRequest = {}, options?: Configuration): Promise<void> {
        return this.api.beginUpdate( options).toPromise();
    }

    /**
     * Clear DNS cache
     * @param param the request object
     */
    public cacheClearWithHttpInfo(param: GlobalApiCacheClearRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.cacheClearWithHttpInfo( options).toPromise();
    }

    /**
     * Clear DNS cache
     * @param param the request object
     */
    public cacheClear(param: GlobalApiCacheClearRequest = {}, options?: Configuration): Promise<void> {
        return this.api.cacheClear( options).toPromise();
    }

    /**
     * Set general DNS parameters
     * @param param the request object
     */
    public dnsConfigWithHttpInfo(param: GlobalApiDnsConfigRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.dnsConfigWithHttpInfo(param.dNSConfig,  options).toPromise();
    }

    /**
     * Set general DNS parameters
     * @param param the request object
     */
    public dnsConfig(param: GlobalApiDnsConfigRequest = {}, options?: Configuration): Promise<void> {
        return this.api.dnsConfig(param.dNSConfig,  options).toPromise();
    }

    /**
     * Get general DNS parameters
     * @param param the request object
     */
    public dnsInfoWithHttpInfo(param: GlobalApiDnsInfoRequest = {}, options?: Configuration): Promise<HttpInfo<DnsInfo200Response>> {
        return this.api.dnsInfoWithHttpInfo( options).toPromise();
    }

    /**
     * Get general DNS parameters
     * @param param the request object
     */
    public dnsInfo(param: GlobalApiDnsInfoRequest = {}, options?: Configuration): Promise<DnsInfo200Response> {
        return this.api.dnsInfo( options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getProfileWithHttpInfo(param: GlobalApiGetProfileRequest = {}, options?: Configuration): Promise<HttpInfo<ProfileInfo>> {
        return this.api.getProfileWithHttpInfo( options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public getProfile(param: GlobalApiGetProfileRequest = {}, options?: Configuration): Promise<ProfileInfo> {
        return this.api.getProfile( options).toPromise();
    }

    /**
     * Gets information about the latest available version of AdGuard 
     * @param param the request object
     */
    public getVersionJsonWithHttpInfo(param: GlobalApiGetVersionJsonRequest, options?: Configuration): Promise<HttpInfo<VersionInfo>> {
        return this.api.getVersionJsonWithHttpInfo(param.getVersionRequest,  options).toPromise();
    }

    /**
     * Gets information about the latest available version of AdGuard 
     * @param param the request object
     */
    public getVersionJson(param: GlobalApiGetVersionJsonRequest, options?: Configuration): Promise<VersionInfo> {
        return this.api.getVersionJson(param.getVersionRequest,  options).toPromise();
    }

    /**
     * Perform administrator log-in
     * @param param the request object
     */
    public loginWithHttpInfo(param: GlobalApiLoginRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.loginWithHttpInfo(param.login,  options).toPromise();
    }

    /**
     * Perform administrator log-in
     * @param param the request object
     */
    public login(param: GlobalApiLoginRequest, options?: Configuration): Promise<void> {
        return this.api.login(param.login,  options).toPromise();
    }

    /**
     * Perform administrator log-out
     * @param param the request object
     */
    public logoutWithHttpInfo(param: GlobalApiLogoutRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.logoutWithHttpInfo( options).toPromise();
    }

    /**
     * Perform administrator log-out
     * @param param the request object
     */
    public logout(param: GlobalApiLogoutRequest = {}, options?: Configuration): Promise<void> {
        return this.api.logout( options).toPromise();
    }

    /**
     * Get DNS over HTTPS .mobileconfig.
     * @param param the request object
     */
    public mobileConfigDoHWithHttpInfo(param: GlobalApiMobileConfigDoHRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.mobileConfigDoHWithHttpInfo(param.host, param.clientId,  options).toPromise();
    }

    /**
     * Get DNS over HTTPS .mobileconfig.
     * @param param the request object
     */
    public mobileConfigDoH(param: GlobalApiMobileConfigDoHRequest, options?: Configuration): Promise<void> {
        return this.api.mobileConfigDoH(param.host, param.clientId,  options).toPromise();
    }

    /**
     * Get DNS over TLS .mobileconfig.
     * @param param the request object
     */
    public mobileConfigDoTWithHttpInfo(param: GlobalApiMobileConfigDoTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.mobileConfigDoTWithHttpInfo(param.host, param.clientId,  options).toPromise();
    }

    /**
     * Get DNS over TLS .mobileconfig.
     * @param param the request object
     */
    public mobileConfigDoT(param: GlobalApiMobileConfigDoTRequest, options?: Configuration): Promise<void> {
        return this.api.mobileConfigDoT(param.host, param.clientId,  options).toPromise();
    }

    /**
     * Set protection state and duration
     * @param param the request object
     */
    public setProtectionWithHttpInfo(param: GlobalApiSetProtectionRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.setProtectionWithHttpInfo(param.setProtectionRequest,  options).toPromise();
    }

    /**
     * Set protection state and duration
     * @param param the request object
     */
    public setProtection(param: GlobalApiSetProtectionRequest = {}, options?: Configuration): Promise<void> {
        return this.api.setProtection(param.setProtectionRequest,  options).toPromise();
    }

    /**
     * Get DNS server current status and general settings
     * @param param the request object
     */
    public statusWithHttpInfo(param: GlobalApiStatusRequest = {}, options?: Configuration): Promise<HttpInfo<ServerStatus>> {
        return this.api.statusWithHttpInfo( options).toPromise();
    }

    /**
     * Get DNS server current status and general settings
     * @param param the request object
     */
    public status(param: GlobalApiStatusRequest = {}, options?: Configuration): Promise<ServerStatus> {
        return this.api.status( options).toPromise();
    }

    /**
     * Test upstream configuration
     * @param param the request object
     */
    public testUpstreamDNSWithHttpInfo(param: GlobalApiTestUpstreamDNSRequest = {}, options?: Configuration): Promise<HttpInfo<{ [key: string]: string; }>> {
        return this.api.testUpstreamDNSWithHttpInfo(param.upstreamsConfig,  options).toPromise();
    }

    /**
     * Test upstream configuration
     * @param param the request object
     */
    public testUpstreamDNS(param: GlobalApiTestUpstreamDNSRequest = {}, options?: Configuration): Promise<{ [key: string]: string; }> {
        return this.api.testUpstreamDNS(param.upstreamsConfig,  options).toPromise();
    }

    /**
     * Updates current user info
     * @param param the request object
     */
    public updateProfileWithHttpInfo(param: GlobalApiUpdateProfileRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateProfileWithHttpInfo(param.profileInfo,  options).toPromise();
    }

    /**
     * Updates current user info
     * @param param the request object
     */
    public updateProfile(param: GlobalApiUpdateProfileRequest = {}, options?: Configuration): Promise<void> {
        return this.api.updateProfile(param.profileInfo,  options).toPromise();
    }

}

import { ObservableI18nApi } from "./ObservableAPI.js";
import { I18nApiRequestFactory, I18nApiResponseProcessor} from "../apis/I18nApi.js";

export interface I18nApiChangeLanguageRequest {
    /**
     * New language.  It must be known to the server and must be an ISO 639-1 two-letter code. 
     * @type LanguageSettings
     * @memberof I18nApichangeLanguage
     */
    languageSettings?: LanguageSettings
}

export interface I18nApiCurrentLanguageRequest {
}

export class ObjectI18nApi {
    private api: ObservableI18nApi

    public constructor(configuration: Configuration, requestFactory?: I18nApiRequestFactory, responseProcessor?: I18nApiResponseProcessor) {
        this.api = new ObservableI18nApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deprecated: Use `PUT /control/profile` instead. 
     * Change current language.  Argument must be an ISO 639-1 two-letter code. 
     * @param param the request object
     */
    public changeLanguageWithHttpInfo(param: I18nApiChangeLanguageRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.changeLanguageWithHttpInfo(param.languageSettings,  options).toPromise();
    }

    /**
     * Deprecated: Use `PUT /control/profile` instead. 
     * Change current language.  Argument must be an ISO 639-1 two-letter code. 
     * @param param the request object
     */
    public changeLanguage(param: I18nApiChangeLanguageRequest = {}, options?: Configuration): Promise<void> {
        return this.api.changeLanguage(param.languageSettings,  options).toPromise();
    }

    /**
     * Deprecated: Use `GET /control/profile` instead. 
     * Get currently set language.  Result is ISO 639-1 two-letter code.  Empty result means default language. 
     * @param param the request object
     */
    public currentLanguageWithHttpInfo(param: I18nApiCurrentLanguageRequest = {}, options?: Configuration): Promise<HttpInfo<LanguageSettings>> {
        return this.api.currentLanguageWithHttpInfo( options).toPromise();
    }

    /**
     * Deprecated: Use `GET /control/profile` instead. 
     * Get currently set language.  Result is ISO 639-1 two-letter code.  Empty result means default language. 
     * @param param the request object
     */
    public currentLanguage(param: I18nApiCurrentLanguageRequest = {}, options?: Configuration): Promise<LanguageSettings> {
        return this.api.currentLanguage( options).toPromise();
    }

}

import { ObservableInstallApi } from "./ObservableAPI.js";
import { InstallApiRequestFactory, InstallApiResponseProcessor} from "../apis/InstallApi.js";

export interface InstallApiInstallCheckConfigRequest {
    /**
     * Configuration to be checked
     * @type CheckConfigRequest
     * @memberof InstallApiinstallCheckConfig
     */
    checkConfigRequest: CheckConfigRequest
}

export interface InstallApiInstallConfigureRequest {
    /**
     * Initial configuration JSON
     * @type InitialConfiguration
     * @memberof InstallApiinstallConfigure
     */
    initialConfiguration: InitialConfiguration
}

export interface InstallApiInstallGetAddressesRequest {
}

export class ObjectInstallApi {
    private api: ObservableInstallApi

    public constructor(configuration: Configuration, requestFactory?: InstallApiRequestFactory, responseProcessor?: InstallApiResponseProcessor) {
        this.api = new ObservableInstallApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Checks configuration
     * @param param the request object
     */
    public installCheckConfigWithHttpInfo(param: InstallApiInstallCheckConfigRequest, options?: Configuration): Promise<HttpInfo<CheckConfigResponse>> {
        return this.api.installCheckConfigWithHttpInfo(param.checkConfigRequest,  options).toPromise();
    }

    /**
     * Checks configuration
     * @param param the request object
     */
    public installCheckConfig(param: InstallApiInstallCheckConfigRequest, options?: Configuration): Promise<CheckConfigResponse> {
        return this.api.installCheckConfig(param.checkConfigRequest,  options).toPromise();
    }

    /**
     * Applies the initial configuration.
     * @param param the request object
     */
    public installConfigureWithHttpInfo(param: InstallApiInstallConfigureRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.installConfigureWithHttpInfo(param.initialConfiguration,  options).toPromise();
    }

    /**
     * Applies the initial configuration.
     * @param param the request object
     */
    public installConfigure(param: InstallApiInstallConfigureRequest, options?: Configuration): Promise<void> {
        return this.api.installConfigure(param.initialConfiguration,  options).toPromise();
    }

    /**
     * Gets the network interfaces information.
     * @param param the request object
     */
    public installGetAddressesWithHttpInfo(param: InstallApiInstallGetAddressesRequest = {}, options?: Configuration): Promise<HttpInfo<AddressesInfo>> {
        return this.api.installGetAddressesWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the network interfaces information.
     * @param param the request object
     */
    public installGetAddresses(param: InstallApiInstallGetAddressesRequest = {}, options?: Configuration): Promise<AddressesInfo> {
        return this.api.installGetAddresses( options).toPromise();
    }

}

import { ObservableLogApi } from "./ObservableAPI.js";
import { LogApiRequestFactory, LogApiResponseProcessor} from "../apis/LogApi.js";

export interface LogApiGetQueryLogConfigRequest {
}

export interface LogApiPutQueryLogConfigRequest {
    /**
     * 
     * @type GetQueryLogConfigResponse
     * @memberof LogApiputQueryLogConfig
     */
    body: GetQueryLogConfigResponse
}

export interface LogApiQueryLogRequest {
    /**
     * Filter by older than
     * @type string
     * @memberof LogApiqueryLog
     */
    olderThan?: string
    /**
     * Specify the ranking number of the first item on the page.  Even though it is possible to use \&quot;offset\&quot; and \&quot;older_than\&quot;, we recommend choosing one of them and sticking to it. 
     * @type number
     * @memberof LogApiqueryLog
     */
    offset?: number
    /**
     * Limit the number of records to be returned
     * @type number
     * @memberof LogApiqueryLog
     */
    limit?: number
    /**
     * Filter by domain name or client IP
     * @type string
     * @memberof LogApiqueryLog
     */
    search?: string
    /**
     * Filter by response status
     * @type &#39;all&#39; | &#39;filtered&#39; | &#39;blocked&#39; | &#39;blocked_safebrowsing&#39; | &#39;blocked_parental&#39; | &#39;whitelisted&#39; | &#39;rewritten&#39; | &#39;safe_search&#39; | &#39;processed&#39;
     * @memberof LogApiqueryLog
     */
    responseStatus?: 'all' | 'filtered' | 'blocked' | 'blocked_safebrowsing' | 'blocked_parental' | 'whitelisted' | 'rewritten' | 'safe_search' | 'processed'
}

export interface LogApiQueryLogConfigRequest {
    /**
     * 
     * @type QueryLogConfig
     * @memberof LogApiqueryLogConfig
     */
    queryLogConfig?: QueryLogConfig
}

export interface LogApiQueryLogInfoRequest {
}

export interface LogApiQuerylogClearRequest {
}

export class ObjectLogApi {
    private api: ObservableLogApi

    public constructor(configuration: Configuration, requestFactory?: LogApiRequestFactory, responseProcessor?: LogApiResponseProcessor) {
        this.api = new ObservableLogApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get query log parameters
     * @param param the request object
     */
    public getQueryLogConfigWithHttpInfo(param: LogApiGetQueryLogConfigRequest = {}, options?: Configuration): Promise<HttpInfo<GetQueryLogConfigResponse>> {
        return this.api.getQueryLogConfigWithHttpInfo( options).toPromise();
    }

    /**
     * Get query log parameters
     * @param param the request object
     */
    public getQueryLogConfig(param: LogApiGetQueryLogConfigRequest = {}, options?: Configuration): Promise<GetQueryLogConfigResponse> {
        return this.api.getQueryLogConfig( options).toPromise();
    }

    /**
     * Set query log parameters
     * @param param the request object
     */
    public putQueryLogConfigWithHttpInfo(param: LogApiPutQueryLogConfigRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.putQueryLogConfigWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Set query log parameters
     * @param param the request object
     */
    public putQueryLogConfig(param: LogApiPutQueryLogConfigRequest, options?: Configuration): Promise<void> {
        return this.api.putQueryLogConfig(param.body,  options).toPromise();
    }

    /**
     * Get DNS server query log.
     * @param param the request object
     */
    public queryLogWithHttpInfo(param: LogApiQueryLogRequest = {}, options?: Configuration): Promise<HttpInfo<QueryLog>> {
        return this.api.queryLogWithHttpInfo(param.olderThan, param.offset, param.limit, param.search, param.responseStatus,  options).toPromise();
    }

    /**
     * Get DNS server query log.
     * @param param the request object
     */
    public queryLog(param: LogApiQueryLogRequest = {}, options?: Configuration): Promise<QueryLog> {
        return this.api.queryLog(param.olderThan, param.offset, param.limit, param.search, param.responseStatus,  options).toPromise();
    }

    /**
     * Deprecated: Use `PUT /querylog/config/update` instead. 
     * Set query log parameters
     * @param param the request object
     */
    public queryLogConfigWithHttpInfo(param: LogApiQueryLogConfigRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.queryLogConfigWithHttpInfo(param.queryLogConfig,  options).toPromise();
    }

    /**
     * Deprecated: Use `PUT /querylog/config/update` instead. 
     * Set query log parameters
     * @param param the request object
     */
    public queryLogConfig(param: LogApiQueryLogConfigRequest = {}, options?: Configuration): Promise<void> {
        return this.api.queryLogConfig(param.queryLogConfig,  options).toPromise();
    }

    /**
     * Deprecated: Use `GET /querylog/config` instead.  NOTE: If `interval` was configured by editing configuration file or new HTTP API call `PUT /querylog/config/update` and it\'s not equal to previous allowed enum values then it will be equal to `90` days for compatibility reasons. 
     * Get query log parameters
     * @param param the request object
     */
    public queryLogInfoWithHttpInfo(param: LogApiQueryLogInfoRequest = {}, options?: Configuration): Promise<HttpInfo<QueryLogConfig>> {
        return this.api.queryLogInfoWithHttpInfo( options).toPromise();
    }

    /**
     * Deprecated: Use `GET /querylog/config` instead.  NOTE: If `interval` was configured by editing configuration file or new HTTP API call `PUT /querylog/config/update` and it\'s not equal to previous allowed enum values then it will be equal to `90` days for compatibility reasons. 
     * Get query log parameters
     * @param param the request object
     */
    public queryLogInfo(param: LogApiQueryLogInfoRequest = {}, options?: Configuration): Promise<QueryLogConfig> {
        return this.api.queryLogInfo( options).toPromise();
    }

    /**
     * Clear query log
     * @param param the request object
     */
    public querylogClearWithHttpInfo(param: LogApiQuerylogClearRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.querylogClearWithHttpInfo( options).toPromise();
    }

    /**
     * Clear query log
     * @param param the request object
     */
    public querylogClear(param: LogApiQuerylogClearRequest = {}, options?: Configuration): Promise<void> {
        return this.api.querylogClear( options).toPromise();
    }

}

import { ObservableMobileconfigApi } from "./ObservableAPI.js";
import { MobileconfigApiRequestFactory, MobileconfigApiResponseProcessor} from "../apis/MobileconfigApi.js";

export interface MobileconfigApiMobileConfigDoHRequest {
    /**
     * Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @type string
     * @memberof MobileconfigApimobileConfigDoH
     */
    host: string
    /**
     * ClientID. 
     * @type string
     * @memberof MobileconfigApimobileConfigDoH
     */
    clientId?: string
}

export interface MobileconfigApiMobileConfigDoTRequest {
    /**
     * Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @type string
     * @memberof MobileconfigApimobileConfigDoT
     */
    host: string
    /**
     * ClientID. 
     * @type string
     * @memberof MobileconfigApimobileConfigDoT
     */
    clientId?: string
}

export class ObjectMobileconfigApi {
    private api: ObservableMobileconfigApi

    public constructor(configuration: Configuration, requestFactory?: MobileconfigApiRequestFactory, responseProcessor?: MobileconfigApiResponseProcessor) {
        this.api = new ObservableMobileconfigApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get DNS over HTTPS .mobileconfig.
     * @param param the request object
     */
    public mobileConfigDoHWithHttpInfo(param: MobileconfigApiMobileConfigDoHRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.mobileConfigDoHWithHttpInfo(param.host, param.clientId,  options).toPromise();
    }

    /**
     * Get DNS over HTTPS .mobileconfig.
     * @param param the request object
     */
    public mobileConfigDoH(param: MobileconfigApiMobileConfigDoHRequest, options?: Configuration): Promise<void> {
        return this.api.mobileConfigDoH(param.host, param.clientId,  options).toPromise();
    }

    /**
     * Get DNS over TLS .mobileconfig.
     * @param param the request object
     */
    public mobileConfigDoTWithHttpInfo(param: MobileconfigApiMobileConfigDoTRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.mobileConfigDoTWithHttpInfo(param.host, param.clientId,  options).toPromise();
    }

    /**
     * Get DNS over TLS .mobileconfig.
     * @param param the request object
     */
    public mobileConfigDoT(param: MobileconfigApiMobileConfigDoTRequest, options?: Configuration): Promise<void> {
        return this.api.mobileConfigDoT(param.host, param.clientId,  options).toPromise();
    }

}

import { ObservableParentalApi } from "./ObservableAPI.js";
import { ParentalApiRequestFactory, ParentalApiResponseProcessor} from "../apis/ParentalApi.js";

export interface ParentalApiParentalDisableRequest {
}

export interface ParentalApiParentalEnableRequest {
}

export interface ParentalApiParentalStatusRequest {
}

export class ObjectParentalApi {
    private api: ObservableParentalApi

    public constructor(configuration: Configuration, requestFactory?: ParentalApiRequestFactory, responseProcessor?: ParentalApiResponseProcessor) {
        this.api = new ObservableParentalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Disable parental filtering
     * @param param the request object
     */
    public parentalDisableWithHttpInfo(param: ParentalApiParentalDisableRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.parentalDisableWithHttpInfo( options).toPromise();
    }

    /**
     * Disable parental filtering
     * @param param the request object
     */
    public parentalDisable(param: ParentalApiParentalDisableRequest = {}, options?: Configuration): Promise<void> {
        return this.api.parentalDisable( options).toPromise();
    }

    /**
     * Enable parental filtering
     * @param param the request object
     */
    public parentalEnableWithHttpInfo(param: ParentalApiParentalEnableRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.parentalEnableWithHttpInfo( options).toPromise();
    }

    /**
     * Enable parental filtering
     * @param param the request object
     */
    public parentalEnable(param: ParentalApiParentalEnableRequest = {}, options?: Configuration): Promise<void> {
        return this.api.parentalEnable( options).toPromise();
    }

    /**
     * Get parental filtering status
     * @param param the request object
     */
    public parentalStatusWithHttpInfo(param: ParentalApiParentalStatusRequest = {}, options?: Configuration): Promise<HttpInfo<ParentalStatus200Response>> {
        return this.api.parentalStatusWithHttpInfo( options).toPromise();
    }

    /**
     * Get parental filtering status
     * @param param the request object
     */
    public parentalStatus(param: ParentalApiParentalStatusRequest = {}, options?: Configuration): Promise<ParentalStatus200Response> {
        return this.api.parentalStatus( options).toPromise();
    }

}

import { ObservableRewriteApi } from "./ObservableAPI.js";
import { RewriteApiRequestFactory, RewriteApiResponseProcessor} from "../apis/RewriteApi.js";

export interface RewriteApiRewriteAddRequest {
    /**
     * 
     * @type RewriteEntry
     * @memberof RewriteApirewriteAdd
     */
    rewriteEntry: RewriteEntry
}

export interface RewriteApiRewriteDeleteRequest {
    /**
     * 
     * @type RewriteEntry
     * @memberof RewriteApirewriteDelete
     */
    rewriteEntry: RewriteEntry
}

export interface RewriteApiRewriteListRequest {
}

export interface RewriteApiRewriteUpdateRequest {
    /**
     * 
     * @type RewriteUpdate
     * @memberof RewriteApirewriteUpdate
     */
    rewriteUpdate: RewriteUpdate
}

export class ObjectRewriteApi {
    private api: ObservableRewriteApi

    public constructor(configuration: Configuration, requestFactory?: RewriteApiRequestFactory, responseProcessor?: RewriteApiResponseProcessor) {
        this.api = new ObservableRewriteApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a new Rewrite rule
     * @param param the request object
     */
    public rewriteAddWithHttpInfo(param: RewriteApiRewriteAddRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.rewriteAddWithHttpInfo(param.rewriteEntry,  options).toPromise();
    }

    /**
     * Add a new Rewrite rule
     * @param param the request object
     */
    public rewriteAdd(param: RewriteApiRewriteAddRequest, options?: Configuration): Promise<void> {
        return this.api.rewriteAdd(param.rewriteEntry,  options).toPromise();
    }

    /**
     * Remove a Rewrite rule
     * @param param the request object
     */
    public rewriteDeleteWithHttpInfo(param: RewriteApiRewriteDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.rewriteDeleteWithHttpInfo(param.rewriteEntry,  options).toPromise();
    }

    /**
     * Remove a Rewrite rule
     * @param param the request object
     */
    public rewriteDelete(param: RewriteApiRewriteDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.rewriteDelete(param.rewriteEntry,  options).toPromise();
    }

    /**
     * Get list of Rewrite rules
     * @param param the request object
     */
    public rewriteListWithHttpInfo(param: RewriteApiRewriteListRequest = {}, options?: Configuration): Promise<HttpInfo<Array<RewriteEntry>>> {
        return this.api.rewriteListWithHttpInfo( options).toPromise();
    }

    /**
     * Get list of Rewrite rules
     * @param param the request object
     */
    public rewriteList(param: RewriteApiRewriteListRequest = {}, options?: Configuration): Promise<Array<RewriteEntry>> {
        return this.api.rewriteList( options).toPromise();
    }

    /**
     * Update a Rewrite rule
     * @param param the request object
     */
    public rewriteUpdateWithHttpInfo(param: RewriteApiRewriteUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.rewriteUpdateWithHttpInfo(param.rewriteUpdate,  options).toPromise();
    }

    /**
     * Update a Rewrite rule
     * @param param the request object
     */
    public rewriteUpdate(param: RewriteApiRewriteUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.rewriteUpdate(param.rewriteUpdate,  options).toPromise();
    }

}

import { ObservableSafebrowsingApi } from "./ObservableAPI.js";
import { SafebrowsingApiRequestFactory, SafebrowsingApiResponseProcessor} from "../apis/SafebrowsingApi.js";

export interface SafebrowsingApiSafebrowsingDisableRequest {
}

export interface SafebrowsingApiSafebrowsingEnableRequest {
}

export interface SafebrowsingApiSafebrowsingStatusRequest {
}

export class ObjectSafebrowsingApi {
    private api: ObservableSafebrowsingApi

    public constructor(configuration: Configuration, requestFactory?: SafebrowsingApiRequestFactory, responseProcessor?: SafebrowsingApiResponseProcessor) {
        this.api = new ObservableSafebrowsingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Disable safebrowsing
     * @param param the request object
     */
    public safebrowsingDisableWithHttpInfo(param: SafebrowsingApiSafebrowsingDisableRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.safebrowsingDisableWithHttpInfo( options).toPromise();
    }

    /**
     * Disable safebrowsing
     * @param param the request object
     */
    public safebrowsingDisable(param: SafebrowsingApiSafebrowsingDisableRequest = {}, options?: Configuration): Promise<void> {
        return this.api.safebrowsingDisable( options).toPromise();
    }

    /**
     * Enable safebrowsing
     * @param param the request object
     */
    public safebrowsingEnableWithHttpInfo(param: SafebrowsingApiSafebrowsingEnableRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.safebrowsingEnableWithHttpInfo( options).toPromise();
    }

    /**
     * Enable safebrowsing
     * @param param the request object
     */
    public safebrowsingEnable(param: SafebrowsingApiSafebrowsingEnableRequest = {}, options?: Configuration): Promise<void> {
        return this.api.safebrowsingEnable( options).toPromise();
    }

    /**
     * Get safebrowsing status
     * @param param the request object
     */
    public safebrowsingStatusWithHttpInfo(param: SafebrowsingApiSafebrowsingStatusRequest = {}, options?: Configuration): Promise<HttpInfo<SafebrowsingStatus200Response>> {
        return this.api.safebrowsingStatusWithHttpInfo( options).toPromise();
    }

    /**
     * Get safebrowsing status
     * @param param the request object
     */
    public safebrowsingStatus(param: SafebrowsingApiSafebrowsingStatusRequest = {}, options?: Configuration): Promise<SafebrowsingStatus200Response> {
        return this.api.safebrowsingStatus( options).toPromise();
    }

}

import { ObservableSafesearchApi } from "./ObservableAPI.js";
import { SafesearchApiRequestFactory, SafesearchApiResponseProcessor} from "../apis/SafesearchApi.js";

export interface SafesearchApiSafesearchDisableRequest {
}

export interface SafesearchApiSafesearchEnableRequest {
}

export interface SafesearchApiSafesearchSettingsRequest {
    /**
     * 
     * @type SafeSearchConfig
     * @memberof SafesearchApisafesearchSettings
     */
    safeSearchConfig?: SafeSearchConfig
}

export interface SafesearchApiSafesearchStatusRequest {
}

export class ObjectSafesearchApi {
    private api: ObservableSafesearchApi

    public constructor(configuration: Configuration, requestFactory?: SafesearchApiRequestFactory, responseProcessor?: SafesearchApiResponseProcessor) {
        this.api = new ObservableSafesearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Disable safesearch
     * @param param the request object
     */
    public safesearchDisableWithHttpInfo(param: SafesearchApiSafesearchDisableRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.safesearchDisableWithHttpInfo( options).toPromise();
    }

    /**
     * Disable safesearch
     * @param param the request object
     */
    public safesearchDisable(param: SafesearchApiSafesearchDisableRequest = {}, options?: Configuration): Promise<void> {
        return this.api.safesearchDisable( options).toPromise();
    }

    /**
     * Enable safesearch
     * @param param the request object
     */
    public safesearchEnableWithHttpInfo(param: SafesearchApiSafesearchEnableRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.safesearchEnableWithHttpInfo( options).toPromise();
    }

    /**
     * Enable safesearch
     * @param param the request object
     */
    public safesearchEnable(param: SafesearchApiSafesearchEnableRequest = {}, options?: Configuration): Promise<void> {
        return this.api.safesearchEnable( options).toPromise();
    }

    /**
     * Update safesearch settings
     * @param param the request object
     */
    public safesearchSettingsWithHttpInfo(param: SafesearchApiSafesearchSettingsRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.safesearchSettingsWithHttpInfo(param.safeSearchConfig,  options).toPromise();
    }

    /**
     * Update safesearch settings
     * @param param the request object
     */
    public safesearchSettings(param: SafesearchApiSafesearchSettingsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.safesearchSettings(param.safeSearchConfig,  options).toPromise();
    }

    /**
     * Get safesearch status
     * @param param the request object
     */
    public safesearchStatusWithHttpInfo(param: SafesearchApiSafesearchStatusRequest = {}, options?: Configuration): Promise<HttpInfo<SafeSearchConfig>> {
        return this.api.safesearchStatusWithHttpInfo( options).toPromise();
    }

    /**
     * Get safesearch status
     * @param param the request object
     */
    public safesearchStatus(param: SafesearchApiSafesearchStatusRequest = {}, options?: Configuration): Promise<SafeSearchConfig> {
        return this.api.safesearchStatus( options).toPromise();
    }

}

import { ObservableStatsApi } from "./ObservableAPI.js";
import { StatsApiRequestFactory, StatsApiResponseProcessor} from "../apis/StatsApi.js";

export interface StatsApiGetStatsConfigRequest {
}

export interface StatsApiPutStatsConfigRequest {
    /**
     * 
     * @type GetStatsConfigResponse
     * @memberof StatsApiputStatsConfig
     */
    body: GetStatsConfigResponse
}

export interface StatsApiStatsRequest {
}

export interface StatsApiStatsConfigRequest {
    /**
     * 
     * @type StatsConfig
     * @memberof StatsApistatsConfig
     */
    statsConfig?: StatsConfig
}

export interface StatsApiStatsInfoRequest {
}

export interface StatsApiStatsResetRequest {
}

export class ObjectStatsApi {
    private api: ObservableStatsApi

    public constructor(configuration: Configuration, requestFactory?: StatsApiRequestFactory, responseProcessor?: StatsApiResponseProcessor) {
        this.api = new ObservableStatsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get statistics parameters
     * @param param the request object
     */
    public getStatsConfigWithHttpInfo(param: StatsApiGetStatsConfigRequest = {}, options?: Configuration): Promise<HttpInfo<GetStatsConfigResponse>> {
        return this.api.getStatsConfigWithHttpInfo( options).toPromise();
    }

    /**
     * Get statistics parameters
     * @param param the request object
     */
    public getStatsConfig(param: StatsApiGetStatsConfigRequest = {}, options?: Configuration): Promise<GetStatsConfigResponse> {
        return this.api.getStatsConfig( options).toPromise();
    }

    /**
     * Set statistics parameters
     * @param param the request object
     */
    public putStatsConfigWithHttpInfo(param: StatsApiPutStatsConfigRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.putStatsConfigWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Set statistics parameters
     * @param param the request object
     */
    public putStatsConfig(param: StatsApiPutStatsConfigRequest, options?: Configuration): Promise<void> {
        return this.api.putStatsConfig(param.body,  options).toPromise();
    }

    /**
     * Get DNS server statistics
     * @param param the request object
     */
    public statsWithHttpInfo(param: StatsApiStatsRequest = {}, options?: Configuration): Promise<HttpInfo<Stats>> {
        return this.api.statsWithHttpInfo( options).toPromise();
    }

    /**
     * Get DNS server statistics
     * @param param the request object
     */
    public stats(param: StatsApiStatsRequest = {}, options?: Configuration): Promise<Stats> {
        return this.api.stats( options).toPromise();
    }

    /**
     * Deprecated: Use `PUT /stats/config/update` instead. 
     * Set statistics parameters
     * @param param the request object
     */
    public statsConfigWithHttpInfo(param: StatsApiStatsConfigRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.statsConfigWithHttpInfo(param.statsConfig,  options).toPromise();
    }

    /**
     * Deprecated: Use `PUT /stats/config/update` instead. 
     * Set statistics parameters
     * @param param the request object
     */
    public statsConfig(param: StatsApiStatsConfigRequest = {}, options?: Configuration): Promise<void> {
        return this.api.statsConfig(param.statsConfig,  options).toPromise();
    }

    /**
     * Deprecated: Use `GET /stats/config` instead.  NOTE: If `interval` was configured by editing configuration file or new HTTP API call `PUT /stats/config/update` and it\'s not equal to previous allowed enum values then it will be equal to `90` days for compatibility reasons. 
     * Get statistics parameters
     * @param param the request object
     */
    public statsInfoWithHttpInfo(param: StatsApiStatsInfoRequest = {}, options?: Configuration): Promise<HttpInfo<StatsConfig>> {
        return this.api.statsInfoWithHttpInfo( options).toPromise();
    }

    /**
     * Deprecated: Use `GET /stats/config` instead.  NOTE: If `interval` was configured by editing configuration file or new HTTP API call `PUT /stats/config/update` and it\'s not equal to previous allowed enum values then it will be equal to `90` days for compatibility reasons. 
     * Get statistics parameters
     * @param param the request object
     */
    public statsInfo(param: StatsApiStatsInfoRequest = {}, options?: Configuration): Promise<StatsConfig> {
        return this.api.statsInfo( options).toPromise();
    }

    /**
     * Reset all statistics to zeroes
     * @param param the request object
     */
    public statsResetWithHttpInfo(param: StatsApiStatsResetRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.statsResetWithHttpInfo( options).toPromise();
    }

    /**
     * Reset all statistics to zeroes
     * @param param the request object
     */
    public statsReset(param: StatsApiStatsResetRequest = {}, options?: Configuration): Promise<void> {
        return this.api.statsReset( options).toPromise();
    }

}

import { ObservableTlsApi } from "./ObservableAPI.js";
import { TlsApiRequestFactory, TlsApiResponseProcessor} from "../apis/TlsApi.js";

export interface TlsApiTlsConfigureRequest {
    /**
     * TLS configuration JSON
     * @type TlsConfig
     * @memberof TlsApitlsConfigure
     */
    tlsConfig: TlsConfig
}

export interface TlsApiTlsStatusRequest {
}

export interface TlsApiTlsValidateRequest {
    /**
     * TLS configuration JSON
     * @type TlsConfig
     * @memberof TlsApitlsValidate
     */
    tlsConfig: TlsConfig
}

export class ObjectTlsApi {
    private api: ObservableTlsApi

    public constructor(configuration: Configuration, requestFactory?: TlsApiRequestFactory, responseProcessor?: TlsApiResponseProcessor) {
        this.api = new ObservableTlsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Updates current TLS configuration
     * @param param the request object
     */
    public tlsConfigureWithHttpInfo(param: TlsApiTlsConfigureRequest, options?: Configuration): Promise<HttpInfo<TlsConfig>> {
        return this.api.tlsConfigureWithHttpInfo(param.tlsConfig,  options).toPromise();
    }

    /**
     * Updates current TLS configuration
     * @param param the request object
     */
    public tlsConfigure(param: TlsApiTlsConfigureRequest, options?: Configuration): Promise<TlsConfig> {
        return this.api.tlsConfigure(param.tlsConfig,  options).toPromise();
    }

    /**
     * Returns TLS configuration and its status
     * @param param the request object
     */
    public tlsStatusWithHttpInfo(param: TlsApiTlsStatusRequest = {}, options?: Configuration): Promise<HttpInfo<TlsConfig>> {
        return this.api.tlsStatusWithHttpInfo( options).toPromise();
    }

    /**
     * Returns TLS configuration and its status
     * @param param the request object
     */
    public tlsStatus(param: TlsApiTlsStatusRequest = {}, options?: Configuration): Promise<TlsConfig> {
        return this.api.tlsStatus( options).toPromise();
    }

    /**
     * Checks if the current TLS configuration is valid
     * @param param the request object
     */
    public tlsValidateWithHttpInfo(param: TlsApiTlsValidateRequest, options?: Configuration): Promise<HttpInfo<TlsConfig>> {
        return this.api.tlsValidateWithHttpInfo(param.tlsConfig,  options).toPromise();
    }

    /**
     * Checks if the current TLS configuration is valid
     * @param param the request object
     */
    public tlsValidate(param: TlsApiTlsValidateRequest, options?: Configuration): Promise<TlsConfig> {
        return this.api.tlsValidate(param.tlsConfig,  options).toPromise();
    }

}
