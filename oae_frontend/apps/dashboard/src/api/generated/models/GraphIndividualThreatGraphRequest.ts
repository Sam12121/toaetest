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
 * @interface GraphIndividualThreatGraphRequest
 */
export interface GraphIndividualThreatGraphRequest {
    /**
     * 
     * @type {string}
     * @memberof GraphIndividualThreatGraphRequest
     */
    graph_type: GraphIndividualThreatGraphRequestGraphTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GraphIndividualThreatGraphRequest
     */
    issue_type: GraphIndividualThreatGraphRequestIssueTypeEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof GraphIndividualThreatGraphRequest
     */
    node_ids?: Array<string> | null;
}


/**
 * @export
 */
export const GraphIndividualThreatGraphRequestGraphTypeEnum = {
    MostVulnerableAttackPaths: 'most_vulnerable_attack_paths',
    DirectInternetExposure: 'direct_internet_exposure',
    IndirectInternetExposure: 'indirect_internet_exposure'
} as const;
export type GraphIndividualThreatGraphRequestGraphTypeEnum = typeof GraphIndividualThreatGraphRequestGraphTypeEnum[keyof typeof GraphIndividualThreatGraphRequestGraphTypeEnum];

/**
 * @export
 */
export const GraphIndividualThreatGraphRequestIssueTypeEnum = {
    Vulnerability: 'vulnerability',
    Secret: 'secret',
    Malware: 'malware',
    Compliance: 'compliance',
    CloudCompliance: 'cloud_compliance'
} as const;
export type GraphIndividualThreatGraphRequestIssueTypeEnum = typeof GraphIndividualThreatGraphRequestIssueTypeEnum[keyof typeof GraphIndividualThreatGraphRequestIssueTypeEnum];


/**
 * Check if a given object implements the GraphIndividualThreatGraphRequest interface.
 */
export function instanceOfGraphIndividualThreatGraphRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "graph_type" in value;
    isInstance = isInstance && "issue_type" in value;

    return isInstance;
}

export function GraphIndividualThreatGraphRequestFromJSON(json: any): GraphIndividualThreatGraphRequest {
    return GraphIndividualThreatGraphRequestFromJSONTyped(json, false);
}

export function GraphIndividualThreatGraphRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphIndividualThreatGraphRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'graph_type': json['graph_type'],
        'issue_type': json['issue_type'],
        'node_ids': !exists(json, 'node_ids') ? undefined : json['node_ids'],
    };
}

export function GraphIndividualThreatGraphRequestToJSON(value?: GraphIndividualThreatGraphRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'graph_type': value.graph_type,
        'issue_type': value.issue_type,
        'node_ids': value.node_ids,
    };
}

