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

import { QueryLogItemClientWhois } from '../models/QueryLogItemClientWhois.js';
import { HttpFile } from '../http/http.js';

/**
* Client information for a query log item. 
*/
export class QueryLogItemClient {
    /**
    * Whether the client\'s IP is blocked or not. 
    */
    'disallowed': boolean;
    /**
    * The rule due to which the client is allowed or blocked. 
    */
    'disallowedRule': string;
    /**
    * Persistent client\'s name or runtime client\'s hostname.  May be empty. 
    */
    'name': string;
    'whois': QueryLogItemClientWhois;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "disallowed",
            "baseName": "disallowed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "disallowedRule",
            "baseName": "disallowed_rule",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "whois",
            "baseName": "whois",
            "type": "QueryLogItemClientWhois",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return QueryLogItemClient.attributeTypeMap;
    }

    public constructor() {
    }
}
