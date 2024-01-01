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
 * @interface ModelInitAgentReq
 */
export interface ModelInitAgentReq {
    /**
     * 
     * @type {number}
     * @memberof ModelInitAgentReq
     */
    available_workload: number;
    /**
     * 
     * @type {string}
     * @memberof ModelInitAgentReq
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelInitAgentReq
     */
    version: string;
}

/**
 * Check if a given object implements the ModelInitAgentReq interface.
 */
export function instanceOfModelInitAgentReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "available_workload" in value;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "version" in value;

    return isInstance;
}

export function ModelInitAgentReqFromJSON(json: any): ModelInitAgentReq {
    return ModelInitAgentReqFromJSONTyped(json, false);
}

export function ModelInitAgentReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelInitAgentReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'available_workload': json['available_workload'],
        'node_id': json['node_id'],
        'version': json['version'],
    };
}

export function ModelInitAgentReqToJSON(value?: ModelInitAgentReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'available_workload': value.available_workload,
        'node_id': value.node_id,
        'version': value.version,
    };
}

