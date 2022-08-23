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
 * A User who is purchasing from the pet store
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    phone?: string;
    /**
     * User Status
     * @type {number}
     * @memberof User
     */
    userStatus?: number;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): value is User {
    return true;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'username': json['username'] == null ? undefined : json['username'],
        'firstName': json['firstName'] == null ? undefined : json['firstName'],
        'lastName': json['lastName'] == null ? undefined : json['lastName'],
        'email': json['email'] == null ? undefined : json['email'],
        'password': json['password'] == null ? undefined : json['password'],
        'phone': json['phone'] == null ? undefined : json['phone'],
        'userStatus': json['userStatus'] == null ? undefined : json['userStatus'],
    };
}
export function UserToJSON(value?: User | null): any {
    return UserToJSONTyped(value);
}
export function UserToJSONTyped(value?: User | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'username': value['username'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'email': value['email'],
        'password': value['password'],
        'phone': value['phone'],
        'userStatus': value['userStatus'],
    };
}

export const UserPropertyValidationAttributesMap: {
    [property: string]: {
        maxLength?: number,
        minLength?: number,
        pattern?: string,
        maximum?: number,
        exclusiveMaximum?: boolean,
        minimum?: number,
        exclusiveMinimum?: boolean,
        multipleOf?: number,
        maxItems?: number,
        minItems?: number,
        uniqueItems?: boolean
    }
} = {
    password: {
        maxLength: 256,
        minLength: 8,
    },
    userStatus: {
        maximum: 100,
        exclusiveMaximum: true,
        minimum: 0,
        exclusiveMinimum: true,
        multipleOf: 10,
    },
}

