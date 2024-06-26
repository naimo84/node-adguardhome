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
* Represent the number of hits or time duration per key (url, domain, or client IP). 
*/
export class TopArrayEntry {
    'domainOrIp'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "domainOrIp",
            "baseName": "domain_or_ip",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TopArrayEntry.attributeTypeMap;
    }

    public constructor() {
    }
}

