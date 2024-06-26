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

import { DayRange } from '../models/DayRange.js';
import { HttpFile } from '../http/http.js';

/**
* Sets periods of inactivity for filtering blocked services.  The schedule contains 7 days (Sunday to Saturday) and a time zone. 
*/
export class Schedule {
    /**
    * Time zone name according to IANA time zone database.  For example `Europe/Brussels`.  `Local` represents the system\'s local time zone. 
    */
    'timeZone'?: string;
    'sun'?: DayRange;
    'mon'?: DayRange;
    'tue'?: DayRange;
    'wed'?: DayRange;
    'thu'?: DayRange;
    'fri'?: DayRange;
    'sat'?: DayRange;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "timeZone",
            "baseName": "time_zone",
            "type": "string",
            "format": ""
        },
        {
            "name": "sun",
            "baseName": "sun",
            "type": "DayRange",
            "format": ""
        },
        {
            "name": "mon",
            "baseName": "mon",
            "type": "DayRange",
            "format": ""
        },
        {
            "name": "tue",
            "baseName": "tue",
            "type": "DayRange",
            "format": ""
        },
        {
            "name": "wed",
            "baseName": "wed",
            "type": "DayRange",
            "format": ""
        },
        {
            "name": "thu",
            "baseName": "thu",
            "type": "DayRange",
            "format": ""
        },
        {
            "name": "fri",
            "baseName": "fri",
            "type": "DayRange",
            "format": ""
        },
        {
            "name": "sat",
            "baseName": "sat",
            "type": "DayRange",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Schedule.attributeTypeMap;
    }

    public constructor() {
    }
}

