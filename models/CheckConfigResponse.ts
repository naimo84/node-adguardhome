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

import { CheckConfigResponseInfo } from '../models/CheckConfigResponseInfo.js';
import { CheckConfigStaticIpInfo } from '../models/CheckConfigStaticIpInfo.js';
import { HttpFile } from '../http/http.js';

export class CheckConfigResponse {
    'dns': CheckConfigResponseInfo;
    'web': CheckConfigResponseInfo;
    'staticIp': CheckConfigStaticIpInfo;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dns",
            "baseName": "dns",
            "type": "CheckConfigResponseInfo",
            "format": ""
        },
        {
            "name": "web",
            "baseName": "web",
            "type": "CheckConfigResponseInfo",
            "format": ""
        },
        {
            "name": "staticIp",
            "baseName": "static_ip",
            "type": "CheckConfigStaticIpInfo",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CheckConfigResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
