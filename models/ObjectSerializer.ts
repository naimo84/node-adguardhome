export * from '../models/AccessList.js';
export * from '../models/AddUrlRequest.js';
export * from '../models/AddressInfo.js';
export * from '../models/AddressesInfo.js';
export * from '../models/BlockedService.js';
export * from '../models/BlockedServicesAll.js';
export * from '../models/BlockedServicesSchedule.js';
export * from '../models/CheckConfigRequest.js';
export * from '../models/CheckConfigRequestInfo.js';
export * from '../models/CheckConfigResponse.js';
export * from '../models/CheckConfigResponseInfo.js';
export * from '../models/CheckConfigStaticIpInfo.js';
export * from '../models/CheckConfigStaticIpInfoStatic.js';
export * from '../models/Client.js';
export * from '../models/ClientAuto.js';
export * from '../models/ClientDelete.js';
export * from '../models/ClientFindSubEntry.js';
export * from '../models/ClientUpdate.js';
export * from '../models/Clients.js';
export * from '../models/DNSConfig.js';
export * from '../models/DayRange.js';
export * from '../models/DhcpConfig.js';
export * from '../models/DhcpConfigV4.js';
export * from '../models/DhcpConfigV6.js';
export * from '../models/DhcpFindActiveReq.js';
export * from '../models/DhcpLease.js';
export * from '../models/DhcpSearchResult.js';
export * from '../models/DhcpSearchResultOtherServer.js';
export * from '../models/DhcpSearchResultStaticIP.js';
export * from '../models/DhcpSearchV4.js';
export * from '../models/DhcpSearchV6.js';
export * from '../models/DhcpStaticLease.js';
export * from '../models/DhcpStatus.js';
export * from '../models/DnsAnswer.js';
export * from '../models/DnsInfo200Response.js';
export * from '../models/DnsQuestion.js';
export * from '../models/Filter.js';
export * from '../models/FilterCheckHostResponse.js';
export * from '../models/FilterConfig.js';
export * from '../models/FilterRefreshRequest.js';
export * from '../models/FilterRefreshResponse.js';
export * from '../models/FilterSetUrl.js';
export * from '../models/FilterSetUrlData.js';
export * from '../models/FilterStatus.js';
export * from '../models/GetQueryLogConfigResponse.js';
export * from '../models/GetStatsConfigResponse.js';
export * from '../models/GetVersionRequest.js';
export * from '../models/InitialConfiguration.js';
export * from '../models/LanguageSettings.js';
export * from '../models/Login.js';
export * from '../models/ModelError.js';
export * from '../models/NetInterface.js';
export * from '../models/ParentalStatus200Response.js';
export * from '../models/ProfileInfo.js';
export * from '../models/QueryLog.js';
export * from '../models/QueryLogConfig.js';
export * from '../models/QueryLogItem.js';
export * from '../models/QueryLogItemClient.js';
export * from '../models/QueryLogItemClientWhois.js';
export * from '../models/RemoveUrlRequest.js';
export * from '../models/ResultRule.js';
export * from '../models/RewriteEntry.js';
export * from '../models/RewriteUpdate.js';
export * from '../models/SafeSearchConfig.js';
export * from '../models/SafebrowsingStatus200Response.js';
export * from '../models/Schedule.js';
export * from '../models/ServerStatus.js';
export * from '../models/SetProtectionRequest.js';
export * from '../models/SetRulesRequest.js';
export * from '../models/Stats.js';
export * from '../models/StatsConfig.js';
export * from '../models/TlsConfig.js';
export * from '../models/TopArrayEntry.js';
export * from '../models/UpstreamsConfig.js';
export * from '../models/VersionInfo.js';

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
import { CheckConfigStaticIpInfo    } from '../models/CheckConfigStaticIpInfo.js';
import { CheckConfigStaticIpInfoStatic } from '../models/CheckConfigStaticIpInfoStatic.js';
import { Client } from '../models/Client.js';
import { ClientAuto } from '../models/ClientAuto.js';
import { ClientDelete } from '../models/ClientDelete.js';
import { ClientFindSubEntry } from '../models/ClientFindSubEntry.js';
import { ClientUpdate } from '../models/ClientUpdate.js';
import { Clients } from '../models/Clients.js';
import { DNSConfig         , DNSConfigBlockingModeEnum               , DNSConfigUpstreamModeEnum      } from '../models/DNSConfig.js';
import { DayRange } from '../models/DayRange.js';
import { DhcpConfig } from '../models/DhcpConfig.js';
import { DhcpConfigV4 } from '../models/DhcpConfigV4.js';
import { DhcpConfigV6 } from '../models/DhcpConfigV6.js';
import { DhcpFindActiveReq } from '../models/DhcpFindActiveReq.js';
import { DhcpLease } from '../models/DhcpLease.js';
import { DhcpSearchResult } from '../models/DhcpSearchResult.js';
import { DhcpSearchResultOtherServer, DhcpSearchResultOtherServerFoundEnum    } from '../models/DhcpSearchResultOtherServer.js';
import { DhcpSearchResultStaticIP, DhcpSearchResultStaticIPStaticEnum    } from '../models/DhcpSearchResultStaticIP.js';
import { DhcpSearchV4 } from '../models/DhcpSearchV4.js';
import { DhcpSearchV6 } from '../models/DhcpSearchV6.js';
import { DhcpStaticLease } from '../models/DhcpStaticLease.js';
import { DhcpStatus } from '../models/DhcpStatus.js';
import { DnsAnswer } from '../models/DnsAnswer.js';
import { DnsInfo200Response         , DnsInfo200ResponseBlockingModeEnum               , DnsInfo200ResponseUpstreamModeEnum       } from '../models/DnsInfo200Response.js';
import { DnsQuestion } from '../models/DnsQuestion.js';
import { Filter } from '../models/Filter.js';
import { FilterCheckHostResponse, FilterCheckHostResponseReasonEnum         } from '../models/FilterCheckHostResponse.js';
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
import { ProfileInfo  , ProfileInfoThemeEnum   } from '../models/ProfileInfo.js';
import { QueryLog } from '../models/QueryLog.js';
import { QueryLogConfig , QueryLogConfigIntervalEnum    } from '../models/QueryLogConfig.js';
import { QueryLogItem        , QueryLogItemClientProtoEnum        , QueryLogItemReasonEnum      } from '../models/QueryLogItem.js';
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
import { Stats, StatsTimeUnitsEnum                  } from '../models/Stats.js';
import { StatsConfig, StatsConfigIntervalEnum   } from '../models/StatsConfig.js';
import { TlsConfig                   , TlsConfigKeyTypeEnum      } from '../models/TlsConfig.js';
import { TopArrayEntry } from '../models/TopArrayEntry.js';
import { UpstreamsConfig } from '../models/UpstreamsConfig.js';
import { VersionInfo } from '../models/VersionInfo.js';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "CheckConfigStaticIpInfoStatic",
    "DNSConfigBlockingModeEnum",
    "DNSConfigUpstreamModeEnum",
    "DhcpSearchResultOtherServerFoundEnum",
    "DhcpSearchResultStaticIPStaticEnum",
    "DnsInfo200ResponseBlockingModeEnum",
    "DnsInfo200ResponseUpstreamModeEnum",
    "FilterCheckHostResponseReasonEnum",
    "ProfileInfoThemeEnum",
    "QueryLogConfigIntervalEnum",
    "QueryLogItemClientProtoEnum",
    "QueryLogItemReasonEnum",
    "StatsTimeUnitsEnum",
    "StatsConfigIntervalEnum",
    "TlsConfigKeyTypeEnum",
]);

let typeMap: {[index: string]: any} = {
    "AccessList": AccessList,
    "AddUrlRequest": AddUrlRequest,
    "AddressInfo": AddressInfo,
    "AddressesInfo": AddressesInfo,
    "BlockedService": BlockedService,
    "BlockedServicesAll": BlockedServicesAll,
    "BlockedServicesSchedule": BlockedServicesSchedule,
    "CheckConfigRequest": CheckConfigRequest,
    "CheckConfigRequestInfo": CheckConfigRequestInfo,
    "CheckConfigResponse": CheckConfigResponse,
    "CheckConfigResponseInfo": CheckConfigResponseInfo,
    "CheckConfigStaticIpInfo": CheckConfigStaticIpInfo,
    "Client": Client,
    "ClientAuto": ClientAuto,
    "ClientDelete": ClientDelete,
    "ClientFindSubEntry": ClientFindSubEntry,
    "ClientUpdate": ClientUpdate,
    "Clients": Clients,
    "DNSConfig": DNSConfig,
    "DayRange": DayRange,
    "DhcpConfig": DhcpConfig,
    "DhcpConfigV4": DhcpConfigV4,
    "DhcpConfigV6": DhcpConfigV6,
    "DhcpFindActiveReq": DhcpFindActiveReq,
    "DhcpLease": DhcpLease,
    "DhcpSearchResult": DhcpSearchResult,
    "DhcpSearchResultOtherServer": DhcpSearchResultOtherServer,
    "DhcpSearchResultStaticIP": DhcpSearchResultStaticIP,
    "DhcpSearchV4": DhcpSearchV4,
    "DhcpSearchV6": DhcpSearchV6,
    "DhcpStaticLease": DhcpStaticLease,
    "DhcpStatus": DhcpStatus,
    "DnsAnswer": DnsAnswer,
    "DnsInfo200Response": DnsInfo200Response,
    "DnsQuestion": DnsQuestion,
    "Filter": Filter,
    "FilterCheckHostResponse": FilterCheckHostResponse,
    "FilterConfig": FilterConfig,
    "FilterRefreshRequest": FilterRefreshRequest,
    "FilterRefreshResponse": FilterRefreshResponse,
    "FilterSetUrl": FilterSetUrl,
    "FilterSetUrlData": FilterSetUrlData,
    "FilterStatus": FilterStatus,
    "GetQueryLogConfigResponse": GetQueryLogConfigResponse,
    "GetStatsConfigResponse": GetStatsConfigResponse,
    "GetVersionRequest": GetVersionRequest,
    "InitialConfiguration": InitialConfiguration,
    "LanguageSettings": LanguageSettings,
    "Login": Login,
    "ModelError": ModelError,
    "NetInterface": NetInterface,
    "ParentalStatus200Response": ParentalStatus200Response,
    "ProfileInfo": ProfileInfo,
    "QueryLog": QueryLog,
    "QueryLogConfig": QueryLogConfig,
    "QueryLogItem": QueryLogItem,
    "QueryLogItemClient": QueryLogItemClient,
    "QueryLogItemClientWhois": QueryLogItemClientWhois,
    "RemoveUrlRequest": RemoveUrlRequest,
    "ResultRule": ResultRule,
    "RewriteEntry": RewriteEntry,
    "RewriteUpdate": RewriteUpdate,
    "SafeSearchConfig": SafeSearchConfig,
    "SafebrowsingStatus200Response": SafebrowsingStatus200Response,
    "Schedule": Schedule,
    "ServerStatus": ServerStatus,
    "SetProtectionRequest": SetProtectionRequest,
    "SetRulesRequest": SetRulesRequest,
    "Stats": Stats,
    "StatsConfig": StatsConfig,
    "TlsConfig": TlsConfig,
    "TopArrayEntry": TopArrayEntry,
    "UpstreamsConfig": UpstreamsConfig,
    "VersionInfo": VersionInfo,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
