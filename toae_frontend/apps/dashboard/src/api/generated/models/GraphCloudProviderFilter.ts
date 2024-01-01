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
 * @interface GraphCloudProviderFilter
 */
export interface GraphCloudProviderFilter {
    /**
     * 
     * @type {Array<string>}
     * @memberof GraphCloudProviderFilter
     */
    account_ids: Array<string> | null;
}

/**
 * Check if a given object implements the GraphCloudProviderFilter interface.
 */
export function instanceOfGraphCloudProviderFilter(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "account_ids" in value;

    return isInstance;
}

export function GraphCloudProviderFilterFromJSON(json: any): GraphCloudProviderFilter {
    return GraphCloudProviderFilterFromJSONTyped(json, false);
}

export function GraphCloudProviderFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphCloudProviderFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account_ids': json['account_ids'],
    };
}

export function GraphCloudProviderFilterToJSON(value?: GraphCloudProviderFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_ids': value.account_ids,
    };
}

