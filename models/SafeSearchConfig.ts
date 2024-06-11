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
* Safe search settings.
*/
export class SafeSearchConfig {
    'enabled'?: boolean;
    'bing'?: boolean;
    'duckduckgo'?: boolean;
    'google'?: boolean;
    'pixabay'?: boolean;
    'yandex'?: boolean;
    'youtube'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "bing",
            "baseName": "bing",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "duckduckgo",
            "baseName": "duckduckgo",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "google",
            "baseName": "google",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pixabay",
            "baseName": "pixabay",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "yandex",
            "baseName": "yandex",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "youtube",
            "baseName": "youtube",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SafeSearchConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

