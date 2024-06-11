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
* /add_url request data
*/
export class AddUrlRequest {
    'name'?: string;
    /**
    * URL or an absolute path to the file containing filtering rules. 
    */
    'url'?: string;
    'whitelist'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "whitelist",
            "baseName": "whitelist",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddUrlRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

