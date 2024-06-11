/**
 * AdGuard Home
 * AdGuard Home REST-ish API.  Our admin web interface is built on top of this REST-ish API. 
 *
 * OpenAPI spec version: 0.107
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TopArrayEntry } from '../models/TopArrayEntry.js';
import { HttpFile } from '../http/http.js';

/**
* Server statistics data
*/
export class Stats {
    /**
    * Time units
    */
    'timeUnits'?: StatsTimeUnitsEnum;
    /**
    * Total number of DNS queries
    */
    'numDnsQueries'?: number;
    /**
    * Number of requests blocked by filtering rules
    */
    'numBlockedFiltering'?: number;
    /**
    * Number of requests blocked by safebrowsing module
    */
    'numReplacedSafebrowsing'?: number;
    /**
    * Number of requests blocked by safesearch module
    */
    'numReplacedSafesearch'?: number;
    /**
    * Number of blocked adult websites
    */
    'numReplacedParental'?: number;
    /**
    * Average time in seconds on processing a DNS request
    */
    'avgProcessingTime'?: number;
    'topQueriedDomains'?: Array<TopArrayEntry>;
    'topClients'?: Array<TopArrayEntry>;
    'topBlockedDomains'?: Array<TopArrayEntry>;
    /**
    * Total number of responses from each upstream.
    */
    'topUpstreamsResponses'?: Array<TopArrayEntry>;
    /**
    * Average processing time in seconds of requests from each upstream. 
    */
    'topUpstreamsAvgTime'?: Array<TopArrayEntry>;
    'dnsQueries'?: Array<number>;
    'blockedFiltering'?: Array<number>;
    'replacedSafebrowsing'?: Array<number>;
    'replacedParental'?: Array<number>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "timeUnits",
            "baseName": "time_units",
            "type": "StatsTimeUnitsEnum",
            "format": ""
        },
        {
            "name": "numDnsQueries",
            "baseName": "num_dns_queries",
            "type": "number",
            "format": ""
        },
        {
            "name": "numBlockedFiltering",
            "baseName": "num_blocked_filtering",
            "type": "number",
            "format": ""
        },
        {
            "name": "numReplacedSafebrowsing",
            "baseName": "num_replaced_safebrowsing",
            "type": "number",
            "format": ""
        },
        {
            "name": "numReplacedSafesearch",
            "baseName": "num_replaced_safesearch",
            "type": "number",
            "format": ""
        },
        {
            "name": "numReplacedParental",
            "baseName": "num_replaced_parental",
            "type": "number",
            "format": ""
        },
        {
            "name": "avgProcessingTime",
            "baseName": "avg_processing_time",
            "type": "number",
            "format": "float"
        },
        {
            "name": "topQueriedDomains",
            "baseName": "top_queried_domains",
            "type": "Array<TopArrayEntry>",
            "format": ""
        },
        {
            "name": "topClients",
            "baseName": "top_clients",
            "type": "Array<TopArrayEntry>",
            "format": ""
        },
        {
            "name": "topBlockedDomains",
            "baseName": "top_blocked_domains",
            "type": "Array<TopArrayEntry>",
            "format": ""
        },
        {
            "name": "topUpstreamsResponses",
            "baseName": "top_upstreams_responses",
            "type": "Array<TopArrayEntry>",
            "format": ""
        },
        {
            "name": "topUpstreamsAvgTime",
            "baseName": "top_upstreams_avg_time",
            "type": "Array<TopArrayEntry>",
            "format": ""
        },
        {
            "name": "dnsQueries",
            "baseName": "dns_queries",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "blockedFiltering",
            "baseName": "blocked_filtering",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "replacedSafebrowsing",
            "baseName": "replaced_safebrowsing",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "replacedParental",
            "baseName": "replaced_parental",
            "type": "Array<number>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Stats.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum StatsTimeUnitsEnum {
    Hours = 'hours',
    Days = 'days'
}

