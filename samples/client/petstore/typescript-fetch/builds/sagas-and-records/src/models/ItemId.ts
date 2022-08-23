/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Simplified identifier of an item
 * @export
 * @interface ItemId
 */
export interface ItemId {
    /**
     * Unique identifier of the item
     * @type {string}
     * @memberof ItemId
     */
    id: string;
    /**
     * playlist
     * @type {string}
     * @memberof ItemId
     */
    type: string;
}

/**
 * Check if a given object implements the ItemId interface.
 */
export function instanceOfItemId(value: object): value is ItemId {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function ItemIdFromJSON(json: any): ItemId {
    return ItemIdFromJSONTyped(json, false);
}

export function ItemIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemId {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
    };
}
export function ItemIdToJSON(value?: ItemId | null): any {
    return ItemIdToJSONTyped(value);
}
export function ItemIdToJSONTyped(value?: ItemId | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'type': value['type'],
    };
}

