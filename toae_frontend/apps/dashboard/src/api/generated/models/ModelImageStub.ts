/* tslint:disable */
/* eslint-disable */
/**
 * Toae ThreatMapper
 * Toae Runtime API provides programmatic control over Toae microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@toae.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelImageStub
 */
export interface ModelImageStub {
    /**
     * 
     * @type {string}
     * @memberof ModelImageStub
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelImageStub
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelImageStub
     */
    tags?: Array<string> | null;
}

/**
 * Check if a given object implements the ModelImageStub interface.
 */
export function instanceOfModelImageStub(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelImageStubFromJSON(json: any): ModelImageStub {
    return ModelImageStubFromJSONTyped(json, false);
}

export function ModelImageStubFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelImageStub {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function ModelImageStubToJSON(value?: ModelImageStub | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'tags': value.tags,
    };
}

