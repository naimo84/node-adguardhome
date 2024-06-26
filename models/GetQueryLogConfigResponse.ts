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

import { HttpFile } from '../http/http.js';

/**
* Query log configuration
*/
export class GetQueryLogConfigResponse {
    /**
    * Is query log enabled
    */
    'enabled': boolean;
    /**
    * Time period for query log rotation in milliseconds. 
    */
    'interval': number;
    /**
    * Anonymize clients\' IP addresses
    */
    'anonymizeClientIp': boolean;
    /**
    * List of host names, which should not be written to log
    */
    'ignored': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "number",
            "format": ""
        },
        {
            "name": "anonymizeClientIp",
            "baseName": "anonymize_client_ip",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "ignored",
            "baseName": "ignored",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetQueryLogConfigResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

