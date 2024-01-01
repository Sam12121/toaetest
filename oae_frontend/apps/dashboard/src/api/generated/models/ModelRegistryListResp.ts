/* tslint:disable */
/* eslint-disable */
/**
 * Toae ThreatMapper
 * Toae Runtime API provides programmatic control over Toae microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: toaedev@toaesecurity.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelRegistryListResp
 */
export interface ModelRegistryListResp {
    /**
     * 
     * @type {number}
     * @memberof ModelRegistryListResp
     */
    created_at?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelRegistryListResp
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ModelRegistryListResp
     */
    is_syncing?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelRegistryListResp
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelRegistryListResp
     */
    node_id?: string;
    /**
     * 
     * @type {any}
     * @memberof ModelRegistryListResp
     */
    non_secret?: any | null;
    /**
     * 
     * @type {string}
     * @memberof ModelRegistryListResp
     */
    registry_type?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelRegistryListResp
     */
    updated_at?: number;
}

/**
 * Check if a given object implements the ModelRegistryListResp interface.
 */
export function instanceOfModelRegistryListResp(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelRegistryListRespFromJSON(json: any): ModelRegistryListResp {
    return ModelRegistryListRespFromJSONTyped(json, false);
}

export function ModelRegistryListRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelRegistryListResp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'created_at': !exists(json, 'created_at') ? undefined : json['created_at'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'is_syncing': !exists(json, 'is_syncing') ? undefined : json['is_syncing'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'node_id': !exists(json, 'node_id') ? undefined : json['node_id'],
        'non_secret': !exists(json, 'non_secret') ? undefined : json['non_secret'],
        'registry_type': !exists(json, 'registry_type') ? undefined : json['registry_type'],
        'updated_at': !exists(json, 'updated_at') ? undefined : json['updated_at'],
    };
}

export function ModelRegistryListRespToJSON(value?: ModelRegistryListResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': value.created_at,
        'id': value.id,
        'is_syncing': value.is_syncing,
        'name': value.name,
        'node_id': value.node_id,
        'non_secret': value.non_secret,
        'registry_type': value.registry_type,
        'updated_at': value.updated_at,
    };
}

