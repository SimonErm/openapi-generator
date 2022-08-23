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
import {
  Cat,
  CatToJSONTyped,
  CatFromJSONTyped} from './Cat';
import {
  Dog,
  DogToJSONTyped,
  DogFromJSONTyped} from './Dog';

/**
 * 
 * @export
 * @interface Animal
 */
export interface Animal {
    /**
     * 
     * @type {string}
     * @memberof Animal
     */
    className: string;
    /**
     * 
     * @type {string}
     * @memberof Animal
     */
    color?: string;
}

/**
 * Check if a given object implements the Animal interface.
 */
export function instanceOfAnimal(value: object): value is Animal {
    if (!('className' in value) || value['className'] === undefined) return false;
    return true;
}

export function AnimalFromJSON(json: any): Animal {
    return AnimalFromJSONTyped(json, false);
}

export function AnimalFromJSONTyped(json: any, ignoreDiscriminator: boolean): Animal {
    if (json == null) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['className'] === 'CAT') {
            return CatFromJSONTyped(json, true);
        }
        if (json['className'] === 'DOG') {
            return DogFromJSONTyped(json, true);
        }
    }
    return {
        
        'className': json['className'],
        'color': json['color'] == null ? undefined : json['color'],
    };
}
function isCat(value: Animal):value is Cat{
    return value['className'] === 'CAT';
}
function isDog(value: Animal):value is Dog{
    return value['className'] === 'DOG';
}
export function AnimalToJSON(value?: Animal | null): any {
    return AnimalToJSONTyped(value);
}
export function AnimalToJSONTyped(value?: Animal | null, ignoreDiscriminator = false): any {
    if (value == null) {
        return value;
    }
    if (!ignoreDiscriminator) {
        if (isCat(value)) {
            return CatToJSONTyped(value, true);
        }
        if (isDog(value)) {
            return DogToJSONTyped(value, true);
        }
    }
    return {
        
        'className': value['className'],
        'color': value['color'],
    };
}

