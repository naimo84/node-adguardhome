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
* Statistics configuration
*/
export class StatsConfig {
    /**
    * Time period to keep the data.  `0` means that the statistics is disabled. 
    */
    'interval'?: StatsConfigIntervalEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "interval",
            "baseName": "interval",
            "type": "StatsConfigIntervalEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StatsConfig.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum StatsConfigIntervalEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_7 = 7,
    NUMBER_30 = 30,
    NUMBER_90 = 90
}
