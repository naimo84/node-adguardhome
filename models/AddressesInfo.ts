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

import { NetInterface } from '../models/NetInterface.js';
import { HttpFile } from '../http/http.js';

/**
* AdGuard Home addresses configuration
*/
export class AddressesInfo {
    'dnsPort': number;
    /**
    * Network interfaces dictionary, keys are interface names. 
    */
    'interfaces': { [key: string]: NetInterface; };
    'version': string;
    'webPort': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dnsPort",
            "baseName": "dns_port",
            "type": "number",
            "format": "uint16"
        },
        {
            "name": "interfaces",
            "baseName": "interfaces",
            "type": "{ [key: string]: NetInterface; }",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "webPort",
            "baseName": "web_port",
            "type": "number",
            "format": "uint16"
        }    ];

    static getAttributeTypeMap() {
        return AddressesInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

