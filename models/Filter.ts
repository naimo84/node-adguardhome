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
* Filter subscription info
*/
export class Filter {
    'enabled': boolean;
    'id': number;
    'lastUpdated'?: Date;
    'name': string;
    'rulesCount': number;
    'url': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "lastUpdated",
            "baseName": "last_updated",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "rulesCount",
            "baseName": "rules_count",
            "type": "number",
            "format": "uint32"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Filter.attributeTypeMap;
    }

    public constructor() {
    }
}
