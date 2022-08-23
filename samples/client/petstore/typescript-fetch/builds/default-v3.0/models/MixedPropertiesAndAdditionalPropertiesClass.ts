/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Animal } from './Animal';
import {
    AnimalFromJSON,
    AnimalFromJSONTyped,
    AnimalToJSON,
    AnimalToJSONTyped,
} from './Animal';

/**
 * 
 * @export
 * @interface MixedPropertiesAndAdditionalPropertiesClass
 */
export interface MixedPropertiesAndAdditionalPropertiesClass {
    /**
     * 
     * @type {string}
     * @memberof MixedPropertiesAndAdditionalPropertiesClass
     */
    uuid?: string;
    /**
     * 
     * @type {Date}
     * @memberof MixedPropertiesAndAdditionalPropertiesClass
     */
    dateTime?: Date;
    /**
     * 
     * @type {{ [key: string]: Animal; }}
     * @memberof MixedPropertiesAndAdditionalPropertiesClass
     */
    map?: { [key: string]: Animal; };
}

/**
 * Check if a given object implements the MixedPropertiesAndAdditionalPropertiesClass interface.
 */
export function instanceOfMixedPropertiesAndAdditionalPropertiesClass(value: object): value is MixedPropertiesAndAdditionalPropertiesClass {
    return true;
}

export function MixedPropertiesAndAdditionalPropertiesClassFromJSON(json: any): MixedPropertiesAndAdditionalPropertiesClass {
    return MixedPropertiesAndAdditionalPropertiesClassFromJSONTyped(json, false);
}

export function MixedPropertiesAndAdditionalPropertiesClassFromJSONTyped(json: any, ignoreDiscriminator: boolean): MixedPropertiesAndAdditionalPropertiesClass {
    if (json == null) {
        return json;
    }
    return {
        
        'uuid': json['uuid'] == null ? undefined : json['uuid'],
        'dateTime': json['dateTime'] == null ? undefined : (new Date(json['dateTime'])),
        'map': json['map'] == null ? undefined : (mapValues(json['map'], AnimalFromJSON)),
    };
}
export function MixedPropertiesAndAdditionalPropertiesClassToJSON(value?: MixedPropertiesAndAdditionalPropertiesClass | null): any {
    return MixedPropertiesAndAdditionalPropertiesClassToJSONTyped(value);
}
export function MixedPropertiesAndAdditionalPropertiesClassToJSONTyped(value?: MixedPropertiesAndAdditionalPropertiesClass | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'uuid': value['uuid'],
        'dateTime': value['dateTime'] == null ? undefined : ((value['dateTime']).toISOString()),
        'map': value['map'] == null ? undefined : (mapValues(value['map'], AnimalToJSON)),
    };
}

