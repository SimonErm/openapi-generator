/* tslint:disable */
/* eslint-disable */
/**
 * Example
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { BranchDto } from './BranchDto';
import {
    BranchDtoFromJSON,
    BranchDtoFromJSONTyped,
    BranchDtoToJSON,
    BranchDtoToJSONTyped,
} from './BranchDto';
import type { AbstractUserDto } from './AbstractUserDto';
import {
    AbstractUserDtoFromJSON,
    AbstractUserDtoFromJSONTyped,
    AbstractUserDtoToJSON,
    AbstractUserDtoToJSONTyped,
} from './AbstractUserDto';


/**
 * 
 * @export
 * @interface RemoteAuthenticatedUserDto
 */
export interface RemoteAuthenticatedUserDto extends AbstractUserDto {
}

/**
 * Check if a given object implements the RemoteAuthenticatedUserDto interface.
 */
export function instanceOfRemoteAuthenticatedUserDto(value: object): value is RemoteAuthenticatedUserDto {
    return true;
}

export function RemoteAuthenticatedUserDtoFromJSON(json: any): RemoteAuthenticatedUserDto {
    return RemoteAuthenticatedUserDtoFromJSONTyped(json, false);
}

export function RemoteAuthenticatedUserDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoteAuthenticatedUserDto {
    return json;
}
export function RemoteAuthenticatedUserDtoToJSON(value?: RemoteAuthenticatedUserDto | null): any {
    return RemoteAuthenticatedUserDtoToJSONTyped(value);
}
export function RemoteAuthenticatedUserDtoToJSONTyped(value?: RemoteAuthenticatedUserDto | null, ignoreDiscriminator = false): any {
    return value;
}

