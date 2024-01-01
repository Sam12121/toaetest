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
 * @interface IngestersSecretRule
 */
export interface IngestersSecretRule {
    /**
     * 
     * @type {number}
     * @memberof IngestersSecretRule
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof IngestersSecretRule
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersSecretRule
     */
    part?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersSecretRule
     */
    signature_to_match?: string;
}

/**
 * Check if a given object implements the IngestersSecretRule interface.
 */
export function instanceOfIngestersSecretRule(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IngestersSecretRuleFromJSON(json: any): IngestersSecretRule {
    return IngestersSecretRuleFromJSONTyped(json, false);
}

export function IngestersSecretRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): IngestersSecretRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'part': !exists(json, 'part') ? undefined : json['part'],
        'signature_to_match': !exists(json, 'signature_to_match') ? undefined : json['signature_to_match'],
    };
}

export function IngestersSecretRuleToJSON(value?: IngestersSecretRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'part': value.part,
        'signature_to_match': value.signature_to_match,
    };
}

