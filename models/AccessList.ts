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
* Client and host access list.  Each of the lists should contain only unique elements.  In addition, allowed and disallowed lists cannot contain the same elements. 
*/
export class AccessList {
    /**
    * The allowlist of clients: IP addresses, CIDRs, or ClientIDs. 
    */
    'allowedClients'?: Array<string>;
    /**
    * The blocklist of clients: IP addresses, CIDRs, or ClientIDs. 
    */
    'disallowedClients'?: Array<string>;
    /**
    * The blocklist of hosts.
    */
    'blockedHosts'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allowedClients",
            "baseName": "allowed_clients",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "disallowedClients",
            "baseName": "disallowed_clients",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "blockedHosts",
            "baseName": "blocked_hosts",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccessList.attributeTypeMap;
    }

    public constructor() {
    }
}
