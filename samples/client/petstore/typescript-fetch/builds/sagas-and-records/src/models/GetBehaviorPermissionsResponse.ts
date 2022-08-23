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
import type { ResponseMeta } from './ResponseMeta';
import {
    ResponseMetaFromJSON,
    ResponseMetaFromJSONTyped,
    ResponseMetaToJSON,
    ResponseMetaToJSONTyped,
} from './ResponseMeta';

/**
 * 
 * @export
 * @interface GetBehaviorPermissionsResponse
 */
export interface GetBehaviorPermissionsResponse {
    /**
     * 
     * @type {ResponseMeta}
     * @memberof GetBehaviorPermissionsResponse
     */
    meta: ResponseMeta;
    /**
     * 
     * @type {{ [key: string]: boolean; }}
     * @memberof GetBehaviorPermissionsResponse
     */
    data?: { [key: string]: boolean; };
}

/**
 * Check if a given object implements the GetBehaviorPermissionsResponse interface.
 */
export function instanceOfGetBehaviorPermissionsResponse(value: object): value is GetBehaviorPermissionsResponse {
    if (!('meta' in value) || value['meta'] === undefined) return false;
    return true;
}

export function GetBehaviorPermissionsResponseFromJSON(json: any): GetBehaviorPermissionsResponse {
    return GetBehaviorPermissionsResponseFromJSONTyped(json, false);
}

export function GetBehaviorPermissionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetBehaviorPermissionsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'meta': ResponseMetaFromJSON(json['meta']),
        'data': json['data'] == null ? undefined : json['data'],
    };
}
export function GetBehaviorPermissionsResponseToJSON(value?: GetBehaviorPermissionsResponse | null): any {
    return GetBehaviorPermissionsResponseToJSONTyped(value);
}
export function GetBehaviorPermissionsResponseToJSONTyped(value?: GetBehaviorPermissionsResponse | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'meta': ResponseMetaToJSON(value['meta']),
        'data': value['data'],
    };
}

