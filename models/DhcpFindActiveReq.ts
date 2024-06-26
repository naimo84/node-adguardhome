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
* Request for checking for other DHCP servers in the network. 
*/
export class DhcpFindActiveReq {
    /**
    * The name of the network interface
    */
    '_interface'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "_interface",
            "baseName": "interface",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DhcpFindActiveReq.attributeTypeMap;
    }

    public constructor() {
    }
}

