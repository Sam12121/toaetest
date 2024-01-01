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
 * @interface DiagnosisNodeIdentifier
 */
export interface DiagnosisNodeIdentifier {
    /**
     * 
     * @type {string}
     * @memberof DiagnosisNodeIdentifier
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof DiagnosisNodeIdentifier
     */
    node_type: DiagnosisNodeIdentifierNodeTypeEnum;
}


/**
 * @export
 */
export const DiagnosisNodeIdentifierNodeTypeEnum = {
    Host: 'host',
    Cluster: 'cluster',
    CloudAccount: 'cloud_account'
} as const;
export type DiagnosisNodeIdentifierNodeTypeEnum = typeof DiagnosisNodeIdentifierNodeTypeEnum[keyof typeof DiagnosisNodeIdentifierNodeTypeEnum];


/**
 * Check if a given object implements the DiagnosisNodeIdentifier interface.
 */
export function instanceOfDiagnosisNodeIdentifier(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "node_type" in value;

    return isInstance;
}

export function DiagnosisNodeIdentifierFromJSON(json: any): DiagnosisNodeIdentifier {
    return DiagnosisNodeIdentifierFromJSONTyped(json, false);
}

export function DiagnosisNodeIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosisNodeIdentifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'node_id': json['node_id'],
        'node_type': json['node_type'],
    };
}

export function DiagnosisNodeIdentifierToJSON(value?: DiagnosisNodeIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'node_id': value.node_id,
        'node_type': value.node_type,
    };
}

