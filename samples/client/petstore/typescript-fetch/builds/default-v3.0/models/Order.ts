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
/**
 * 
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    petId?: number;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    quantity?: number;
    /**
     * 
     * @type {Date}
     * @memberof Order
     */
    shipDate?: Date;
    /**
     * Order Status
     * @type {string}
     * @memberof Order
     */
    status?: OrderStatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof Order
     */
    complete?: boolean;
}


/**
 * @export
 */
export const OrderStatusEnum = {
    Placed: 'placed',
    Approved: 'approved',
    Delivered: 'delivered'
} as const;
export type OrderStatusEnum = typeof OrderStatusEnum[keyof typeof OrderStatusEnum];


/**
 * Check if a given object implements the Order interface.
 */
export function instanceOfOrder(value: object): value is Order {
    return true;
}

export function OrderFromJSON(json: any): Order {
    return OrderFromJSONTyped(json, false);
}

export function OrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Order {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'petId': json['petId'] == null ? undefined : json['petId'],
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
        'shipDate': json['shipDate'] == null ? undefined : (new Date(json['shipDate'])),
        'status': json['status'] == null ? undefined : json['status'],
        'complete': json['complete'] == null ? undefined : json['complete'],
    };
}
export function OrderToJSON(value?: Order | null): any {
    return OrderToJSONTyped(value);
}
export function OrderToJSONTyped(value?: Order | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'petId': value['petId'],
        'quantity': value['quantity'],
        'shipDate': value['shipDate'] == null ? undefined : ((value['shipDate']).toISOString()),
        'status': value['status'],
        'complete': value['complete'],
    };
}

