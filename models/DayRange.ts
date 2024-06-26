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
* The single interval within a day.  It begins at the `start` and ends before the `end`. 
*/
export class DayRange {
    /**
    * The number of milliseconds elapsed from the start of a day.  It must be less than `end` and is expected to be rounded to minutes. So the maximum value is `86340000` (23 hours and 59 minutes). 
    */
    'start'?: number;
    /**
    * The number of milliseconds elapsed from the start of a day.  It is expected to be rounded to minutes.  The maximum value is `86400000` (24 hours). 
    */
    'end'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "start",
            "baseName": "start",
            "type": "number",
            "format": ""
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DayRange.attributeTypeMap;
    }

    public constructor() {
    }
}

