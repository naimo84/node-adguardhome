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

import { CheckConfigStaticIpInfoStatic } from '../models/CheckConfigStaticIpInfoStatic.js';
import { HttpFile } from '../http/http.js';

export class CheckConfigStaticIpInfo {
    '_static'?: CheckConfigStaticIpInfoStatic;
    /**
    * Current dynamic IP address. Set if static=no
    */
    'ip'?: string;
    /**
    * Error text. Set if static=error
    */
    'error'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "_static",
            "baseName": "static",
            "type": "CheckConfigStaticIpInfoStatic",
            "format": ""
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string",
            "format": ""
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CheckConfigStaticIpInfo.attributeTypeMap;
    }

    public constructor() {
    }
}


