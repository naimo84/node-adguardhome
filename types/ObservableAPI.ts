import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.js';
import { Configuration} from '../configuration.js'
import { Observable, of, from } from '../rxjsStub.js';
import {mergeMap, map} from  '../rxjsStub.js';
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

import { BlockedServicesApiRequestFactory, BlockedServicesApiResponseProcessor} from "../apis/BlockedServicesApi.js";
export class ObservableBlockedServicesApi {
    private requestFactory: BlockedServicesApiRequestFactory;
    private responseProcessor: BlockedServicesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BlockedServicesApiRequestFactory,
        responseProcessor?: BlockedServicesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BlockedServicesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BlockedServicesApiResponseProcessor();
    }

    /**
     * Get available services to use for blocking
     */
    public blockedServicesAllWithHttpInfo(_options?: Configuration): Observable<HttpInfo<BlockedServicesAll>> {
        const requestContextPromise = this.requestFactory.blockedServicesAll(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blockedServicesAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get available services to use for blocking
     */
    public blockedServicesAll(_options?: Configuration): Observable<BlockedServicesAll> {
        return this.blockedServicesAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<BlockedServicesAll>) => apiResponse.data));
    }

    /**
     * Deprecated: Use `GET /blocked_services/all` instead. 
     * Get available services to use for blocking
     */
    public blockedServicesAvailableServicesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.blockedServicesAvailableServices(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blockedServicesAvailableServicesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deprecated: Use `GET /blocked_services/all` instead. 
     * Get available services to use for blocking
     */
    public blockedServicesAvailableServices(_options?: Configuration): Observable<Array<string>> {
        return this.blockedServicesAvailableServicesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Deprecated: Use `GET /blocked_services/get` instead. 
     * Get blocked services list
     */
    public blockedServicesListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.blockedServicesList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blockedServicesListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deprecated: Use `GET /blocked_services/get` instead. 
     * Get blocked services list
     */
    public blockedServicesList(_options?: Configuration): Observable<Array<string>> {
        return this.blockedServicesListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

    /**
     * Get blocked services
     */
    public blockedServicesScheduleWithHttpInfo(_options?: Configuration): Observable<HttpInfo<BlockedServicesSchedule>> {
        const requestContextPromise = this.requestFactory.blockedServicesSchedule(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blockedServicesScheduleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get blocked services
     */
    public blockedServicesSchedule(_options?: Configuration): Observable<BlockedServicesSchedule> {
        return this.blockedServicesScheduleWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<BlockedServicesSchedule>) => apiResponse.data));
    }

    /**
     * Update blocked services
     * @param blockedServicesSchedule 
     */
    public blockedServicesScheduleUpdateWithHttpInfo(blockedServicesSchedule: BlockedServicesSchedule, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.blockedServicesScheduleUpdate(blockedServicesSchedule, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blockedServicesScheduleUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update blocked services
     * @param blockedServicesSchedule 
     */
    public blockedServicesScheduleUpdate(blockedServicesSchedule: BlockedServicesSchedule, _options?: Configuration): Observable<void> {
        return this.blockedServicesScheduleUpdateWithHttpInfo(blockedServicesSchedule, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deprecated: Use `PUT /blocked_services/update` instead. 
     * Set blocked services list
     * @param requestBody 
     */
    public blockedServicesSetWithHttpInfo(requestBody?: Array<string>, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.blockedServicesSet(requestBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.blockedServicesSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deprecated: Use `PUT /blocked_services/update` instead. 
     * Set blocked services list
     * @param requestBody 
     */
    public blockedServicesSet(requestBody?: Array<string>, _options?: Configuration): Observable<void> {
        return this.blockedServicesSetWithHttpInfo(requestBody, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ClientsApiRequestFactory, ClientsApiResponseProcessor} from "../apis/ClientsApi.js";
export class ObservableClientsApi {
    private requestFactory: ClientsApiRequestFactory;
    private responseProcessor: ClientsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ClientsApiRequestFactory,
        responseProcessor?: ClientsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ClientsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ClientsApiResponseProcessor();
    }

    /**
     * List (dis)allowed clients, blocked hosts, etc.
     */
    public accessListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<AccessList>> {
        const requestContextPromise = this.requestFactory.accessList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accessListWithHttpInfo(rsp)));
            }));
    }

    /**
     * List (dis)allowed clients, blocked hosts, etc.
     */
    public accessList(_options?: Configuration): Observable<AccessList> {
        return this.accessListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<AccessList>) => apiResponse.data));
    }

    /**
     * Set (dis)allowed clients, blocked hosts, etc.
     * @param body 
     */
    public accessSetWithHttpInfo(body: AccessList, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.accessSet(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accessSetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set (dis)allowed clients, blocked hosts, etc.
     * @param body 
     */
    public accessSet(body: AccessList, _options?: Configuration): Observable<void> {
        return this.accessSetWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Add a new client
     * @param client 
     */
    public clientsAddWithHttpInfo(client: Client, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.clientsAdd(client, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clientsAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a new client
     * @param client 
     */
    public clientsAdd(client: Client, _options?: Configuration): Observable<void> {
        return this.clientsAddWithHttpInfo(client, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Remove a client
     * @param clientDelete 
     */
    public clientsDeleteWithHttpInfo(clientDelete: ClientDelete, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.clientsDelete(clientDelete, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clientsDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove a client
     * @param clientDelete 
     */
    public clientsDelete(clientDelete: ClientDelete, _options?: Configuration): Observable<void> {
        return this.clientsDeleteWithHttpInfo(clientDelete, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get information about clients by their IP addresses or ClientIDs. 
     * @param ip0 Filter by IP address or ClientIDs.  Parameters with names &#x60;ip1&#x60;, &#x60;ip2&#x60;, and so on are also accepted and interpreted as \&quot;ip0 OR ip1 OR ip2\&quot;. TODO(a.garipov): Replace with a better query API. 
     */
    public clientsFindWithHttpInfo(ip0?: string, _options?: Configuration): Observable<HttpInfo<Array<{ [key: string]: ClientFindSubEntry; }>>> {
        const requestContextPromise = this.requestFactory.clientsFind(ip0, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clientsFindWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get information about clients by their IP addresses or ClientIDs. 
     * @param ip0 Filter by IP address or ClientIDs.  Parameters with names &#x60;ip1&#x60;, &#x60;ip2&#x60;, and so on are also accepted and interpreted as \&quot;ip0 OR ip1 OR ip2\&quot;. TODO(a.garipov): Replace with a better query API. 
     */
    public clientsFind(ip0?: string, _options?: Configuration): Observable<Array<{ [key: string]: ClientFindSubEntry; }>> {
        return this.clientsFindWithHttpInfo(ip0, _options).pipe(map((apiResponse: HttpInfo<Array<{ [key: string]: ClientFindSubEntry; }>>) => apiResponse.data));
    }

    /**
     * Get information about configured clients
     */
    public clientsStatusWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Clients>> {
        const requestContextPromise = this.requestFactory.clientsStatus(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clientsStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get information about configured clients
     */
    public clientsStatus(_options?: Configuration): Observable<Clients> {
        return this.clientsStatusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Clients>) => apiResponse.data));
    }

    /**
     * Update client information
     * @param clientUpdate 
     */
    public clientsUpdateWithHttpInfo(clientUpdate: ClientUpdate, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.clientsUpdate(clientUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.clientsUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update client information
     * @param clientUpdate 
     */
    public clientsUpdate(clientUpdate: ClientUpdate, _options?: Configuration): Observable<void> {
        return this.clientsUpdateWithHttpInfo(clientUpdate, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { DhcpApiRequestFactory, DhcpApiResponseProcessor} from "../apis/DhcpApi.js";
export class ObservableDhcpApi {
    private requestFactory: DhcpApiRequestFactory;
    private responseProcessor: DhcpApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DhcpApiRequestFactory,
        responseProcessor?: DhcpApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DhcpApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DhcpApiResponseProcessor();
    }

    /**
     * Searches for an active DHCP server on the network
     * @param dhcpFindActiveReq 
     */
    public checkActiveDhcpWithHttpInfo(dhcpFindActiveReq?: DhcpFindActiveReq, _options?: Configuration): Observable<HttpInfo<DhcpSearchResult>> {
        const requestContextPromise = this.requestFactory.checkActiveDhcp(dhcpFindActiveReq, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkActiveDhcpWithHttpInfo(rsp)));
            }));
    }

    /**
     * Searches for an active DHCP server on the network
     * @param dhcpFindActiveReq 
     */
    public checkActiveDhcp(dhcpFindActiveReq?: DhcpFindActiveReq, _options?: Configuration): Observable<DhcpSearchResult> {
        return this.checkActiveDhcpWithHttpInfo(dhcpFindActiveReq, _options).pipe(map((apiResponse: HttpInfo<DhcpSearchResult>) => apiResponse.data));
    }

    /**
     * Adds a static lease
     * @param dhcpStaticLease 
     */
    public dhcpAddStaticLeaseWithHttpInfo(dhcpStaticLease: DhcpStaticLease, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.dhcpAddStaticLease(dhcpStaticLease, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dhcpAddStaticLeaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a static lease
     * @param dhcpStaticLease 
     */
    public dhcpAddStaticLease(dhcpStaticLease: DhcpStaticLease, _options?: Configuration): Observable<void> {
        return this.dhcpAddStaticLeaseWithHttpInfo(dhcpStaticLease, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets the available interfaces
     */
    public dhcpInterfacesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<{ [key: string]: NetInterface; }>> {
        const requestContextPromise = this.requestFactory.dhcpInterfaces(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dhcpInterfacesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the available interfaces
     */
    public dhcpInterfaces(_options?: Configuration): Observable<{ [key: string]: NetInterface; }> {
        return this.dhcpInterfacesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<{ [key: string]: NetInterface; }>) => apiResponse.data));
    }

    /**
     * Removes a static lease
     * @param dhcpStaticLease 
     */
    public dhcpRemoveStaticLeaseWithHttpInfo(dhcpStaticLease: DhcpStaticLease, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.dhcpRemoveStaticLease(dhcpStaticLease, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dhcpRemoveStaticLeaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a static lease
     * @param dhcpStaticLease 
     */
    public dhcpRemoveStaticLease(dhcpStaticLease: DhcpStaticLease, _options?: Configuration): Observable<void> {
        return this.dhcpRemoveStaticLeaseWithHttpInfo(dhcpStaticLease, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Reset DHCP configuration
     */
    public dhcpResetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.dhcpReset(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dhcpResetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Reset DHCP configuration
     */
    public dhcpReset(_options?: Configuration): Observable<void> {
        return this.dhcpResetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Reset DHCP leases
     */
    public dhcpResetLeasesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.dhcpResetLeases(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dhcpResetLeasesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Reset DHCP leases
     */
    public dhcpResetLeases(_options?: Configuration): Observable<void> {
        return this.dhcpResetLeasesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates the current DHCP server configuration
     * @param dhcpConfig 
     */
    public dhcpSetConfigWithHttpInfo(dhcpConfig?: DhcpConfig, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.dhcpSetConfig(dhcpConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dhcpSetConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the current DHCP server configuration
     * @param dhcpConfig 
     */
    public dhcpSetConfig(dhcpConfig?: DhcpConfig, _options?: Configuration): Observable<void> {
        return this.dhcpSetConfigWithHttpInfo(dhcpConfig, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets the current DHCP settings and status
     */
    public dhcpStatusWithHttpInfo(_options?: Configuration): Observable<HttpInfo<DhcpStatus>> {
        const requestContextPromise = this.requestFactory.dhcpStatus(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dhcpStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the current DHCP settings and status
     */
    public dhcpStatus(_options?: Configuration): Observable<DhcpStatus> {
        return this.dhcpStatusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<DhcpStatus>) => apiResponse.data));
    }

    /**
     * Updates IP address, hostname of the static lease.  IP version must be the same as previous. 
     * Updates a static lease
     * @param dhcpStaticLease 
     */
    public dhcpUpdateStaticLeaseWithHttpInfo(dhcpStaticLease: DhcpStaticLease, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.dhcpUpdateStaticLease(dhcpStaticLease, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dhcpUpdateStaticLeaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates IP address, hostname of the static lease.  IP version must be the same as previous. 
     * Updates a static lease
     * @param dhcpStaticLease 
     */
    public dhcpUpdateStaticLease(dhcpStaticLease: DhcpStaticLease, _options?: Configuration): Observable<void> {
        return this.dhcpUpdateStaticLeaseWithHttpInfo(dhcpStaticLease, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { FilteringApiRequestFactory, FilteringApiResponseProcessor} from "../apis/FilteringApi.js";
export class ObservableFilteringApi {
    private requestFactory: FilteringApiRequestFactory;
    private responseProcessor: FilteringApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FilteringApiRequestFactory,
        responseProcessor?: FilteringApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FilteringApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FilteringApiResponseProcessor();
    }

    /**
     * Add filter URL or an absolute file path
     * @param addUrlRequest 
     */
    public filteringAddURLWithHttpInfo(addUrlRequest: AddUrlRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.filteringAddURL(addUrlRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filteringAddURLWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add filter URL or an absolute file path
     * @param addUrlRequest 
     */
    public filteringAddURL(addUrlRequest: AddUrlRequest, _options?: Configuration): Observable<void> {
        return this.filteringAddURLWithHttpInfo(addUrlRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Check if host name is filtered
     * @param name Filter by host name
     */
    public filteringCheckHostWithHttpInfo(name?: string, _options?: Configuration): Observable<HttpInfo<FilterCheckHostResponse>> {
        const requestContextPromise = this.requestFactory.filteringCheckHost(name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filteringCheckHostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check if host name is filtered
     * @param name Filter by host name
     */
    public filteringCheckHost(name?: string, _options?: Configuration): Observable<FilterCheckHostResponse> {
        return this.filteringCheckHostWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<FilterCheckHostResponse>) => apiResponse.data));
    }

    /**
     * Set filtering parameters
     * @param filterConfig 
     */
    public filteringConfigWithHttpInfo(filterConfig: FilterConfig, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.filteringConfig(filterConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filteringConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set filtering parameters
     * @param filterConfig 
     */
    public filteringConfig(filterConfig: FilterConfig, _options?: Configuration): Observable<void> {
        return this.filteringConfigWithHttpInfo(filterConfig, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Reload filtering rules from URLs.  This might be needed if new URL was just added and you don\'t want to wait for automatic refresh to kick in. This API request is ratelimited, so you can call it freely as often as you like, it wont create unnecessary burden on servers that host the URL.  This should work as intended, a `force` parameter is offered as last-resort attempt to make filter lists fresh.  If you ever find yourself using `force` to make something work that otherwise wont, this is a bug and report it accordingly. 
     * @param filterRefreshRequest 
     */
    public filteringRefreshWithHttpInfo(filterRefreshRequest?: FilterRefreshRequest, _options?: Configuration): Observable<HttpInfo<FilterRefreshResponse>> {
        const requestContextPromise = this.requestFactory.filteringRefresh(filterRefreshRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filteringRefreshWithHttpInfo(rsp)));
            }));
    }

    /**
     * Reload filtering rules from URLs.  This might be needed if new URL was just added and you don\'t want to wait for automatic refresh to kick in. This API request is ratelimited, so you can call it freely as often as you like, it wont create unnecessary burden on servers that host the URL.  This should work as intended, a `force` parameter is offered as last-resort attempt to make filter lists fresh.  If you ever find yourself using `force` to make something work that otherwise wont, this is a bug and report it accordingly. 
     * @param filterRefreshRequest 
     */
    public filteringRefresh(filterRefreshRequest?: FilterRefreshRequest, _options?: Configuration): Observable<FilterRefreshResponse> {
        return this.filteringRefreshWithHttpInfo(filterRefreshRequest, _options).pipe(map((apiResponse: HttpInfo<FilterRefreshResponse>) => apiResponse.data));
    }

    /**
     * Remove filter URL
     * @param removeUrlRequest 
     */
    public filteringRemoveURLWithHttpInfo(removeUrlRequest: RemoveUrlRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.filteringRemoveURL(removeUrlRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filteringRemoveURLWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove filter URL
     * @param removeUrlRequest 
     */
    public filteringRemoveURL(removeUrlRequest: RemoveUrlRequest, _options?: Configuration): Observable<void> {
        return this.filteringRemoveURLWithHttpInfo(removeUrlRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Set user-defined filter rules
     * @param setRulesRequest Custom filtering rules.
     */
    public filteringSetRulesWithHttpInfo(setRulesRequest?: SetRulesRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.filteringSetRules(setRulesRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filteringSetRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set user-defined filter rules
     * @param setRulesRequest Custom filtering rules.
     */
    public filteringSetRules(setRulesRequest?: SetRulesRequest, _options?: Configuration): Observable<void> {
        return this.filteringSetRulesWithHttpInfo(setRulesRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Set URL parameters
     * @param filterSetUrl 
     */
    public filteringSetURLWithHttpInfo(filterSetUrl?: FilterSetUrl, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.filteringSetURL(filterSetUrl, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filteringSetURLWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set URL parameters
     * @param filterSetUrl 
     */
    public filteringSetURL(filterSetUrl?: FilterSetUrl, _options?: Configuration): Observable<void> {
        return this.filteringSetURLWithHttpInfo(filterSetUrl, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get filtering parameters
     */
    public filteringStatusWithHttpInfo(_options?: Configuration): Observable<HttpInfo<FilterStatus>> {
        const requestContextPromise = this.requestFactory.filteringStatus(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filteringStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get filtering parameters
     */
    public filteringStatus(_options?: Configuration): Observable<FilterStatus> {
        return this.filteringStatusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<FilterStatus>) => apiResponse.data));
    }

}

import { GlobalApiRequestFactory, GlobalApiResponseProcessor} from "../apis/GlobalApi.js";
export class ObservableGlobalApi {
    private requestFactory: GlobalApiRequestFactory;
    private responseProcessor: GlobalApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GlobalApiRequestFactory,
        responseProcessor?: GlobalApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GlobalApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GlobalApiResponseProcessor();
    }

    /**
     * Begin auto-upgrade procedure
     */
    public beginUpdateWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.beginUpdate(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.beginUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Begin auto-upgrade procedure
     */
    public beginUpdate(_options?: Configuration): Observable<void> {
        return this.beginUpdateWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Clear DNS cache
     */
    public cacheClearWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.cacheClear(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cacheClearWithHttpInfo(rsp)));
            }));
    }

    /**
     * Clear DNS cache
     */
    public cacheClear(_options?: Configuration): Observable<void> {
        return this.cacheClearWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Set general DNS parameters
     * @param dNSConfig 
     */
    public dnsConfigWithHttpInfo(dNSConfig?: DNSConfig, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.dnsConfig(dNSConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dnsConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set general DNS parameters
     * @param dNSConfig 
     */
    public dnsConfig(dNSConfig?: DNSConfig, _options?: Configuration): Observable<void> {
        return this.dnsConfigWithHttpInfo(dNSConfig, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get general DNS parameters
     */
    public dnsInfoWithHttpInfo(_options?: Configuration): Observable<HttpInfo<DnsInfo200Response>> {
        const requestContextPromise = this.requestFactory.dnsInfo(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dnsInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get general DNS parameters
     */
    public dnsInfo(_options?: Configuration): Observable<DnsInfo200Response> {
        return this.dnsInfoWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<DnsInfo200Response>) => apiResponse.data));
    }

    /**
     * 
     */
    public getProfileWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ProfileInfo>> {
        const requestContextPromise = this.requestFactory.getProfile(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProfileWithHttpInfo(rsp)));
            }));
    }

    /**
     * 
     */
    public getProfile(_options?: Configuration): Observable<ProfileInfo> {
        return this.getProfileWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ProfileInfo>) => apiResponse.data));
    }

    /**
     * Gets information about the latest available version of AdGuard 
     * @param getVersionRequest 
     */
    public getVersionJsonWithHttpInfo(getVersionRequest: GetVersionRequest, _options?: Configuration): Observable<HttpInfo<VersionInfo>> {
        const requestContextPromise = this.requestFactory.getVersionJson(getVersionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getVersionJsonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets information about the latest available version of AdGuard 
     * @param getVersionRequest 
     */
    public getVersionJson(getVersionRequest: GetVersionRequest, _options?: Configuration): Observable<VersionInfo> {
        return this.getVersionJsonWithHttpInfo(getVersionRequest, _options).pipe(map((apiResponse: HttpInfo<VersionInfo>) => apiResponse.data));
    }

    /**
     * Perform administrator log-in
     * @param login 
     */
    public loginWithHttpInfo(login: Login, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.login(login, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginWithHttpInfo(rsp)));
            }));
    }

    /**
     * Perform administrator log-in
     * @param login 
     */
    public login(login: Login, _options?: Configuration): Observable<void> {
        return this.loginWithHttpInfo(login, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Perform administrator log-out
     */
    public logoutWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.logout(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.logoutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Perform administrator log-out
     */
    public logout(_options?: Configuration): Observable<void> {
        return this.logoutWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get DNS over HTTPS .mobileconfig.
     * @param host Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @param clientId ClientID. 
     */
    public mobileConfigDoHWithHttpInfo(host: string, clientId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.mobileConfigDoH(host, clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mobileConfigDoHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get DNS over HTTPS .mobileconfig.
     * @param host Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @param clientId ClientID. 
     */
    public mobileConfigDoH(host: string, clientId?: string, _options?: Configuration): Observable<void> {
        return this.mobileConfigDoHWithHttpInfo(host, clientId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get DNS over TLS .mobileconfig.
     * @param host Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @param clientId ClientID. 
     */
    public mobileConfigDoTWithHttpInfo(host: string, clientId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.mobileConfigDoT(host, clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mobileConfigDoTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get DNS over TLS .mobileconfig.
     * @param host Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @param clientId ClientID. 
     */
    public mobileConfigDoT(host: string, clientId?: string, _options?: Configuration): Observable<void> {
        return this.mobileConfigDoTWithHttpInfo(host, clientId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Set protection state and duration
     * @param setProtectionRequest 
     */
    public setProtectionWithHttpInfo(setProtectionRequest?: SetProtectionRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.setProtection(setProtectionRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setProtectionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set protection state and duration
     * @param setProtectionRequest 
     */
    public setProtection(setProtectionRequest?: SetProtectionRequest, _options?: Configuration): Observable<void> {
        return this.setProtectionWithHttpInfo(setProtectionRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get DNS server current status and general settings
     */
    public statusWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ServerStatus>> {
        const requestContextPromise = this.requestFactory.status(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.statusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get DNS server current status and general settings
     */
    public status(_options?: Configuration): Observable<ServerStatus> {
        return this.statusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ServerStatus>) => apiResponse.data));
    }

    /**
     * Test upstream configuration
     * @param upstreamsConfig Upstream configuration to be tested
     */
    public testUpstreamDNSWithHttpInfo(upstreamsConfig?: UpstreamsConfig, _options?: Configuration): Observable<HttpInfo<{ [key: string]: string; }>> {
        const requestContextPromise = this.requestFactory.testUpstreamDNS(upstreamsConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testUpstreamDNSWithHttpInfo(rsp)));
            }));
    }

    /**
     * Test upstream configuration
     * @param upstreamsConfig Upstream configuration to be tested
     */
    public testUpstreamDNS(upstreamsConfig?: UpstreamsConfig, _options?: Configuration): Observable<{ [key: string]: string; }> {
        return this.testUpstreamDNSWithHttpInfo(upstreamsConfig, _options).pipe(map((apiResponse: HttpInfo<{ [key: string]: string; }>) => apiResponse.data));
    }

    /**
     * Updates current user info
     * @param profileInfo 
     */
    public updateProfileWithHttpInfo(profileInfo?: ProfileInfo, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateProfile(profileInfo, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProfileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates current user info
     * @param profileInfo 
     */
    public updateProfile(profileInfo?: ProfileInfo, _options?: Configuration): Observable<void> {
        return this.updateProfileWithHttpInfo(profileInfo, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { I18nApiRequestFactory, I18nApiResponseProcessor} from "../apis/I18nApi.js";
export class ObservableI18nApi {
    private requestFactory: I18nApiRequestFactory;
    private responseProcessor: I18nApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: I18nApiRequestFactory,
        responseProcessor?: I18nApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new I18nApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new I18nApiResponseProcessor();
    }

    /**
     * Deprecated: Use `PUT /control/profile` instead. 
     * Change current language.  Argument must be an ISO 639-1 two-letter code. 
     * @param languageSettings New language.  It must be known to the server and must be an ISO 639-1 two-letter code. 
     */
    public changeLanguageWithHttpInfo(languageSettings?: LanguageSettings, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.changeLanguage(languageSettings, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.changeLanguageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deprecated: Use `PUT /control/profile` instead. 
     * Change current language.  Argument must be an ISO 639-1 two-letter code. 
     * @param languageSettings New language.  It must be known to the server and must be an ISO 639-1 two-letter code. 
     */
    public changeLanguage(languageSettings?: LanguageSettings, _options?: Configuration): Observable<void> {
        return this.changeLanguageWithHttpInfo(languageSettings, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deprecated: Use `GET /control/profile` instead. 
     * Get currently set language.  Result is ISO 639-1 two-letter code.  Empty result means default language. 
     */
    public currentLanguageWithHttpInfo(_options?: Configuration): Observable<HttpInfo<LanguageSettings>> {
        const requestContextPromise = this.requestFactory.currentLanguage(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.currentLanguageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deprecated: Use `GET /control/profile` instead. 
     * Get currently set language.  Result is ISO 639-1 two-letter code.  Empty result means default language. 
     */
    public currentLanguage(_options?: Configuration): Observable<LanguageSettings> {
        return this.currentLanguageWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<LanguageSettings>) => apiResponse.data));
    }

}

import { InstallApiRequestFactory, InstallApiResponseProcessor} from "../apis/InstallApi.js";
export class ObservableInstallApi {
    private requestFactory: InstallApiRequestFactory;
    private responseProcessor: InstallApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InstallApiRequestFactory,
        responseProcessor?: InstallApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InstallApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InstallApiResponseProcessor();
    }

    /**
     * Checks configuration
     * @param checkConfigRequest Configuration to be checked
     */
    public installCheckConfigWithHttpInfo(checkConfigRequest: CheckConfigRequest, _options?: Configuration): Observable<HttpInfo<CheckConfigResponse>> {
        const requestContextPromise = this.requestFactory.installCheckConfig(checkConfigRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.installCheckConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Checks configuration
     * @param checkConfigRequest Configuration to be checked
     */
    public installCheckConfig(checkConfigRequest: CheckConfigRequest, _options?: Configuration): Observable<CheckConfigResponse> {
        return this.installCheckConfigWithHttpInfo(checkConfigRequest, _options).pipe(map((apiResponse: HttpInfo<CheckConfigResponse>) => apiResponse.data));
    }

    /**
     * Applies the initial configuration.
     * @param initialConfiguration Initial configuration JSON
     */
    public installConfigureWithHttpInfo(initialConfiguration: InitialConfiguration, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.installConfigure(initialConfiguration, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.installConfigureWithHttpInfo(rsp)));
            }));
    }

    /**
     * Applies the initial configuration.
     * @param initialConfiguration Initial configuration JSON
     */
    public installConfigure(initialConfiguration: InitialConfiguration, _options?: Configuration): Observable<void> {
        return this.installConfigureWithHttpInfo(initialConfiguration, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Gets the network interfaces information.
     */
    public installGetAddressesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<AddressesInfo>> {
        const requestContextPromise = this.requestFactory.installGetAddresses(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.installGetAddressesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the network interfaces information.
     */
    public installGetAddresses(_options?: Configuration): Observable<AddressesInfo> {
        return this.installGetAddressesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<AddressesInfo>) => apiResponse.data));
    }

}

import { LogApiRequestFactory, LogApiResponseProcessor} from "../apis/LogApi.js";
export class ObservableLogApi {
    private requestFactory: LogApiRequestFactory;
    private responseProcessor: LogApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LogApiRequestFactory,
        responseProcessor?: LogApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LogApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LogApiResponseProcessor();
    }

    /**
     * Get query log parameters
     */
    public getQueryLogConfigWithHttpInfo(_options?: Configuration): Observable<HttpInfo<GetQueryLogConfigResponse>> {
        const requestContextPromise = this.requestFactory.getQueryLogConfig(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getQueryLogConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get query log parameters
     */
    public getQueryLogConfig(_options?: Configuration): Observable<GetQueryLogConfigResponse> {
        return this.getQueryLogConfigWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetQueryLogConfigResponse>) => apiResponse.data));
    }

    /**
     * Set query log parameters
     * @param body 
     */
    public putQueryLogConfigWithHttpInfo(body: GetQueryLogConfigResponse, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.putQueryLogConfig(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putQueryLogConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set query log parameters
     * @param body 
     */
    public putQueryLogConfig(body: GetQueryLogConfigResponse, _options?: Configuration): Observable<void> {
        return this.putQueryLogConfigWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get DNS server query log.
     * @param olderThan Filter by older than
     * @param offset Specify the ranking number of the first item on the page.  Even though it is possible to use \&quot;offset\&quot; and \&quot;older_than\&quot;, we recommend choosing one of them and sticking to it. 
     * @param limit Limit the number of records to be returned
     * @param search Filter by domain name or client IP
     * @param responseStatus Filter by response status
     */
    public queryLogWithHttpInfo(olderThan?: string, offset?: number, limit?: number, search?: string, responseStatus?: 'all' | 'filtered' | 'blocked' | 'blocked_safebrowsing' | 'blocked_parental' | 'whitelisted' | 'rewritten' | 'safe_search' | 'processed', _options?: Configuration): Observable<HttpInfo<QueryLog>> {
        const requestContextPromise = this.requestFactory.queryLog(olderThan, offset, limit, search, responseStatus, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryLogWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get DNS server query log.
     * @param olderThan Filter by older than
     * @param offset Specify the ranking number of the first item on the page.  Even though it is possible to use \&quot;offset\&quot; and \&quot;older_than\&quot;, we recommend choosing one of them and sticking to it. 
     * @param limit Limit the number of records to be returned
     * @param search Filter by domain name or client IP
     * @param responseStatus Filter by response status
     */
    public queryLog(olderThan?: string, offset?: number, limit?: number, search?: string, responseStatus?: 'all' | 'filtered' | 'blocked' | 'blocked_safebrowsing' | 'blocked_parental' | 'whitelisted' | 'rewritten' | 'safe_search' | 'processed', _options?: Configuration): Observable<QueryLog> {
        return this.queryLogWithHttpInfo(olderThan, offset, limit, search, responseStatus, _options).pipe(map((apiResponse: HttpInfo<QueryLog>) => apiResponse.data));
    }

    /**
     * Deprecated: Use `PUT /querylog/config/update` instead. 
     * Set query log parameters
     * @param queryLogConfig 
     */
    public queryLogConfigWithHttpInfo(queryLogConfig?: QueryLogConfig, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.queryLogConfig(queryLogConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryLogConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deprecated: Use `PUT /querylog/config/update` instead. 
     * Set query log parameters
     * @param queryLogConfig 
     */
    public queryLogConfig(queryLogConfig?: QueryLogConfig, _options?: Configuration): Observable<void> {
        return this.queryLogConfigWithHttpInfo(queryLogConfig, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deprecated: Use `GET /querylog/config` instead.  NOTE: If `interval` was configured by editing configuration file or new HTTP API call `PUT /querylog/config/update` and it\'s not equal to previous allowed enum values then it will be equal to `90` days for compatibility reasons. 
     * Get query log parameters
     */
    public queryLogInfoWithHttpInfo(_options?: Configuration): Observable<HttpInfo<QueryLogConfig>> {
        const requestContextPromise = this.requestFactory.queryLogInfo(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryLogInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deprecated: Use `GET /querylog/config` instead.  NOTE: If `interval` was configured by editing configuration file or new HTTP API call `PUT /querylog/config/update` and it\'s not equal to previous allowed enum values then it will be equal to `90` days for compatibility reasons. 
     * Get query log parameters
     */
    public queryLogInfo(_options?: Configuration): Observable<QueryLogConfig> {
        return this.queryLogInfoWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<QueryLogConfig>) => apiResponse.data));
    }

    /**
     * Clear query log
     */
    public querylogClearWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.querylogClear(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.querylogClearWithHttpInfo(rsp)));
            }));
    }

    /**
     * Clear query log
     */
    public querylogClear(_options?: Configuration): Observable<void> {
        return this.querylogClearWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { MobileconfigApiRequestFactory, MobileconfigApiResponseProcessor} from "../apis/MobileconfigApi.js";
export class ObservableMobileconfigApi {
    private requestFactory: MobileconfigApiRequestFactory;
    private responseProcessor: MobileconfigApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MobileconfigApiRequestFactory,
        responseProcessor?: MobileconfigApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MobileconfigApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MobileconfigApiResponseProcessor();
    }

    /**
     * Get DNS over HTTPS .mobileconfig.
     * @param host Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @param clientId ClientID. 
     */
    public mobileConfigDoHWithHttpInfo(host: string, clientId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.mobileConfigDoH(host, clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mobileConfigDoHWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get DNS over HTTPS .mobileconfig.
     * @param host Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @param clientId ClientID. 
     */
    public mobileConfigDoH(host: string, clientId?: string, _options?: Configuration): Observable<void> {
        return this.mobileConfigDoHWithHttpInfo(host, clientId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get DNS over TLS .mobileconfig.
     * @param host Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @param clientId ClientID. 
     */
    public mobileConfigDoTWithHttpInfo(host: string, clientId?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.mobileConfigDoT(host, clientId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.mobileConfigDoTWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get DNS over TLS .mobileconfig.
     * @param host Host for which the config is generated.  If no host is provided, &#x60;tls.server_name&#x60; from the configuration file is used.  If &#x60;tls.server_name&#x60; is not set, the API returns an error with a 500 status. 
     * @param clientId ClientID. 
     */
    public mobileConfigDoT(host: string, clientId?: string, _options?: Configuration): Observable<void> {
        return this.mobileConfigDoTWithHttpInfo(host, clientId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ParentalApiRequestFactory, ParentalApiResponseProcessor} from "../apis/ParentalApi.js";
export class ObservableParentalApi {
    private requestFactory: ParentalApiRequestFactory;
    private responseProcessor: ParentalApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ParentalApiRequestFactory,
        responseProcessor?: ParentalApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ParentalApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ParentalApiResponseProcessor();
    }

    /**
     * Disable parental filtering
     */
    public parentalDisableWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.parentalDisable(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.parentalDisableWithHttpInfo(rsp)));
            }));
    }

    /**
     * Disable parental filtering
     */
    public parentalDisable(_options?: Configuration): Observable<void> {
        return this.parentalDisableWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Enable parental filtering
     */
    public parentalEnableWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.parentalEnable(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.parentalEnableWithHttpInfo(rsp)));
            }));
    }

    /**
     * Enable parental filtering
     */
    public parentalEnable(_options?: Configuration): Observable<void> {
        return this.parentalEnableWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get parental filtering status
     */
    public parentalStatusWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ParentalStatus200Response>> {
        const requestContextPromise = this.requestFactory.parentalStatus(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.parentalStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get parental filtering status
     */
    public parentalStatus(_options?: Configuration): Observable<ParentalStatus200Response> {
        return this.parentalStatusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ParentalStatus200Response>) => apiResponse.data));
    }

}

import { RewriteApiRequestFactory, RewriteApiResponseProcessor} from "../apis/RewriteApi.js";
export class ObservableRewriteApi {
    private requestFactory: RewriteApiRequestFactory;
    private responseProcessor: RewriteApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RewriteApiRequestFactory,
        responseProcessor?: RewriteApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RewriteApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RewriteApiResponseProcessor();
    }

    /**
     * Add a new Rewrite rule
     * @param rewriteEntry 
     */
    public rewriteAddWithHttpInfo(rewriteEntry: RewriteEntry, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.rewriteAdd(rewriteEntry, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rewriteAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add a new Rewrite rule
     * @param rewriteEntry 
     */
    public rewriteAdd(rewriteEntry: RewriteEntry, _options?: Configuration): Observable<void> {
        return this.rewriteAddWithHttpInfo(rewriteEntry, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Remove a Rewrite rule
     * @param rewriteEntry 
     */
    public rewriteDeleteWithHttpInfo(rewriteEntry: RewriteEntry, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.rewriteDelete(rewriteEntry, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rewriteDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove a Rewrite rule
     * @param rewriteEntry 
     */
    public rewriteDelete(rewriteEntry: RewriteEntry, _options?: Configuration): Observable<void> {
        return this.rewriteDeleteWithHttpInfo(rewriteEntry, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get list of Rewrite rules
     */
    public rewriteListWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<RewriteEntry>>> {
        const requestContextPromise = this.requestFactory.rewriteList(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rewriteListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get list of Rewrite rules
     */
    public rewriteList(_options?: Configuration): Observable<Array<RewriteEntry>> {
        return this.rewriteListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<RewriteEntry>>) => apiResponse.data));
    }

    /**
     * Update a Rewrite rule
     * @param rewriteUpdate 
     */
    public rewriteUpdateWithHttpInfo(rewriteUpdate: RewriteUpdate, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.rewriteUpdate(rewriteUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rewriteUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a Rewrite rule
     * @param rewriteUpdate 
     */
    public rewriteUpdate(rewriteUpdate: RewriteUpdate, _options?: Configuration): Observable<void> {
        return this.rewriteUpdateWithHttpInfo(rewriteUpdate, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { SafebrowsingApiRequestFactory, SafebrowsingApiResponseProcessor} from "../apis/SafebrowsingApi.js";
export class ObservableSafebrowsingApi {
    private requestFactory: SafebrowsingApiRequestFactory;
    private responseProcessor: SafebrowsingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SafebrowsingApiRequestFactory,
        responseProcessor?: SafebrowsingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SafebrowsingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SafebrowsingApiResponseProcessor();
    }

    /**
     * Disable safebrowsing
     */
    public safebrowsingDisableWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.safebrowsingDisable(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.safebrowsingDisableWithHttpInfo(rsp)));
            }));
    }

    /**
     * Disable safebrowsing
     */
    public safebrowsingDisable(_options?: Configuration): Observable<void> {
        return this.safebrowsingDisableWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Enable safebrowsing
     */
    public safebrowsingEnableWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.safebrowsingEnable(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.safebrowsingEnableWithHttpInfo(rsp)));
            }));
    }

    /**
     * Enable safebrowsing
     */
    public safebrowsingEnable(_options?: Configuration): Observable<void> {
        return this.safebrowsingEnableWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get safebrowsing status
     */
    public safebrowsingStatusWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SafebrowsingStatus200Response>> {
        const requestContextPromise = this.requestFactory.safebrowsingStatus(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.safebrowsingStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get safebrowsing status
     */
    public safebrowsingStatus(_options?: Configuration): Observable<SafebrowsingStatus200Response> {
        return this.safebrowsingStatusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SafebrowsingStatus200Response>) => apiResponse.data));
    }

}

import { SafesearchApiRequestFactory, SafesearchApiResponseProcessor} from "../apis/SafesearchApi.js";
export class ObservableSafesearchApi {
    private requestFactory: SafesearchApiRequestFactory;
    private responseProcessor: SafesearchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SafesearchApiRequestFactory,
        responseProcessor?: SafesearchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SafesearchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SafesearchApiResponseProcessor();
    }

    /**
     * Disable safesearch
     */
    public safesearchDisableWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.safesearchDisable(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.safesearchDisableWithHttpInfo(rsp)));
            }));
    }

    /**
     * Disable safesearch
     */
    public safesearchDisable(_options?: Configuration): Observable<void> {
        return this.safesearchDisableWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Enable safesearch
     */
    public safesearchEnableWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.safesearchEnable(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.safesearchEnableWithHttpInfo(rsp)));
            }));
    }

    /**
     * Enable safesearch
     */
    public safesearchEnable(_options?: Configuration): Observable<void> {
        return this.safesearchEnableWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update safesearch settings
     * @param safeSearchConfig 
     */
    public safesearchSettingsWithHttpInfo(safeSearchConfig?: SafeSearchConfig, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.safesearchSettings(safeSearchConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.safesearchSettingsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update safesearch settings
     * @param safeSearchConfig 
     */
    public safesearchSettings(safeSearchConfig?: SafeSearchConfig, _options?: Configuration): Observable<void> {
        return this.safesearchSettingsWithHttpInfo(safeSearchConfig, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get safesearch status
     */
    public safesearchStatusWithHttpInfo(_options?: Configuration): Observable<HttpInfo<SafeSearchConfig>> {
        const requestContextPromise = this.requestFactory.safesearchStatus(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.safesearchStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get safesearch status
     */
    public safesearchStatus(_options?: Configuration): Observable<SafeSearchConfig> {
        return this.safesearchStatusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<SafeSearchConfig>) => apiResponse.data));
    }

}

import { StatsApiRequestFactory, StatsApiResponseProcessor} from "../apis/StatsApi.js";
export class ObservableStatsApi {
    private requestFactory: StatsApiRequestFactory;
    private responseProcessor: StatsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StatsApiRequestFactory,
        responseProcessor?: StatsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatsApiResponseProcessor();
    }

    /**
     * Get statistics parameters
     */
    public getStatsConfigWithHttpInfo(_options?: Configuration): Observable<HttpInfo<GetStatsConfigResponse>> {
        const requestContextPromise = this.requestFactory.getStatsConfig(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStatsConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get statistics parameters
     */
    public getStatsConfig(_options?: Configuration): Observable<GetStatsConfigResponse> {
        return this.getStatsConfigWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<GetStatsConfigResponse>) => apiResponse.data));
    }

    /**
     * Set statistics parameters
     * @param body 
     */
    public putStatsConfigWithHttpInfo(body: GetStatsConfigResponse, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.putStatsConfig(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putStatsConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set statistics parameters
     * @param body 
     */
    public putStatsConfig(body: GetStatsConfigResponse, _options?: Configuration): Observable<void> {
        return this.putStatsConfigWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get DNS server statistics
     */
    public statsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Stats>> {
        const requestContextPromise = this.requestFactory.stats(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.statsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get DNS server statistics
     */
    public stats(_options?: Configuration): Observable<Stats> {
        return this.statsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Stats>) => apiResponse.data));
    }

    /**
     * Deprecated: Use `PUT /stats/config/update` instead. 
     * Set statistics parameters
     * @param statsConfig 
     */
    public statsConfigWithHttpInfo(statsConfig?: StatsConfig, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.statsConfig(statsConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.statsConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deprecated: Use `PUT /stats/config/update` instead. 
     * Set statistics parameters
     * @param statsConfig 
     */
    public statsConfig(statsConfig?: StatsConfig, _options?: Configuration): Observable<void> {
        return this.statsConfigWithHttpInfo(statsConfig, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deprecated: Use `GET /stats/config` instead.  NOTE: If `interval` was configured by editing configuration file or new HTTP API call `PUT /stats/config/update` and it\'s not equal to previous allowed enum values then it will be equal to `90` days for compatibility reasons. 
     * Get statistics parameters
     */
    public statsInfoWithHttpInfo(_options?: Configuration): Observable<HttpInfo<StatsConfig>> {
        const requestContextPromise = this.requestFactory.statsInfo(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.statsInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deprecated: Use `GET /stats/config` instead.  NOTE: If `interval` was configured by editing configuration file or new HTTP API call `PUT /stats/config/update` and it\'s not equal to previous allowed enum values then it will be equal to `90` days for compatibility reasons. 
     * Get statistics parameters
     */
    public statsInfo(_options?: Configuration): Observable<StatsConfig> {
        return this.statsInfoWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<StatsConfig>) => apiResponse.data));
    }

    /**
     * Reset all statistics to zeroes
     */
    public statsResetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.statsReset(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.statsResetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Reset all statistics to zeroes
     */
    public statsReset(_options?: Configuration): Observable<void> {
        return this.statsResetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { TlsApiRequestFactory, TlsApiResponseProcessor} from "../apis/TlsApi.js";
export class ObservableTlsApi {
    private requestFactory: TlsApiRequestFactory;
    private responseProcessor: TlsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TlsApiRequestFactory,
        responseProcessor?: TlsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TlsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TlsApiResponseProcessor();
    }

    /**
     * Updates current TLS configuration
     * @param tlsConfig TLS configuration JSON
     */
    public tlsConfigureWithHttpInfo(tlsConfig: TlsConfig, _options?: Configuration): Observable<HttpInfo<TlsConfig>> {
        const requestContextPromise = this.requestFactory.tlsConfigure(tlsConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tlsConfigureWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates current TLS configuration
     * @param tlsConfig TLS configuration JSON
     */
    public tlsConfigure(tlsConfig: TlsConfig, _options?: Configuration): Observable<TlsConfig> {
        return this.tlsConfigureWithHttpInfo(tlsConfig, _options).pipe(map((apiResponse: HttpInfo<TlsConfig>) => apiResponse.data));
    }

    /**
     * Returns TLS configuration and its status
     */
    public tlsStatusWithHttpInfo(_options?: Configuration): Observable<HttpInfo<TlsConfig>> {
        const requestContextPromise = this.requestFactory.tlsStatus(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tlsStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns TLS configuration and its status
     */
    public tlsStatus(_options?: Configuration): Observable<TlsConfig> {
        return this.tlsStatusWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<TlsConfig>) => apiResponse.data));
    }

    /**
     * Checks if the current TLS configuration is valid
     * @param tlsConfig TLS configuration JSON
     */
    public tlsValidateWithHttpInfo(tlsConfig: TlsConfig, _options?: Configuration): Observable<HttpInfo<TlsConfig>> {
        const requestContextPromise = this.requestFactory.tlsValidate(tlsConfig, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tlsValidateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Checks if the current TLS configuration is valid
     * @param tlsConfig TLS configuration JSON
     */
    public tlsValidate(tlsConfig: TlsConfig, _options?: Configuration): Observable<TlsConfig> {
        return this.tlsValidateWithHttpInfo(tlsConfig, _options).pipe(map((apiResponse: HttpInfo<TlsConfig>) => apiResponse.data));
    }

}
