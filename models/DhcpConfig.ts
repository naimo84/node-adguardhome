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

import { DhcpConfigV4 } from '../models/DhcpConfigV4.js';
import { DhcpConfigV6 } from '../models/DhcpConfigV6.js';
import { HttpFile } from '../http/http.js';

export class DhcpConfig {
    'enabled'?: boolean;
    'interfaceName'?: string;
    'v4'?: DhcpConfigV4;
    'v6'?: DhcpConfigV6;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "interfaceName",
            "baseName": "interface_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "v4",
            "baseName": "v4",
            "type": "DhcpConfigV4",
            "format": ""
        },
        {
            "name": "v6",
            "baseName": "v6",
            "type": "DhcpConfigV6",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DhcpConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

