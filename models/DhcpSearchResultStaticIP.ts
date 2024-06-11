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

export class DhcpSearchResultStaticIP {
    /**
    * The result of determining static IP address. 
    */
    '_static'?: DhcpSearchResultStaticIPStaticEnum;
    /**
    * Set if static=no
    */
    'ip'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "_static",
            "baseName": "static",
            "type": "DhcpSearchResultStaticIPStaticEnum",
            "format": ""
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DhcpSearchResultStaticIP.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum DhcpSearchResultStaticIPStaticEnum {
    Yes = 'yes',
    No = 'no',
    Error = 'error'
}

