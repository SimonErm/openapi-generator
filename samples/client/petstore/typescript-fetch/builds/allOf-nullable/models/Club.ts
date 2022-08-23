/* tslint:disable */
/* eslint-disable */
/**
 * Example
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Owner } from './Owner';
import {
    OwnerFromJSON,
    OwnerFromJSONTyped,
    OwnerToJSON,
    OwnerToJSONTyped,
} from './Owner';

/**
 * 
 * @export
 * @interface Club
 */
export interface Club {
    /**
     * 
     * @type {Owner}
     * @memberof Club
     */
    owner?: Owner | null;
}

/**
 * Check if a given object implements the Club interface.
 */
export function instanceOfClub(value: object): value is Club {
    return true;
}

export function ClubFromJSON(json: any): Club {
    return ClubFromJSONTyped(json, false);
}

export function ClubFromJSONTyped(json: any, ignoreDiscriminator: boolean): Club {
    if (json == null) {
        return json;
    }
    return {
        
        'owner': json['owner'] == null ? undefined : OwnerFromJSON(json['owner']),
    };
}
export function ClubToJSON(value?: Club | null): any {
    return ClubToJSONTyped(value);
}
export function ClubToJSONTyped(value?: Club | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'owner': OwnerToJSON(value['owner']),
    };
}

