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

import { CheckConfigRequestInfo } from '../models/CheckConfigRequestInfo.js';
import { HttpFile } from '../http/http.js';

/**
* Configuration to be checked
*/
export class CheckConfigRequest {
    'dns'?: CheckConfigRequestInfo;
    'web'?: CheckConfigRequestInfo;
    'setStaticIp'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dns",
            "baseName": "dns",
            "type": "CheckConfigRequestInfo",
            "format": ""
        },
        {
            "name": "web",
            "baseName": "web",
            "type": "CheckConfigRequestInfo",
            "format": ""
        },
        {
            "name": "setStaticIp",
            "baseName": "set_static_ip",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CheckConfigRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

