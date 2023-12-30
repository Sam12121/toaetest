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
 * @interface ModelCloudComplianceBenchmark
 */
export interface ModelCloudComplianceBenchmark {
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceBenchmark
     */
    compliance_type?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelCloudComplianceBenchmark
     */
    controls?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudComplianceBenchmark
     */
    id?: string;
}

/**
 * Check if a given object implements the ModelCloudComplianceBenchmark interface.
 */
export function instanceOfModelCloudComplianceBenchmark(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelCloudComplianceBenchmarkFromJSON(json: any): ModelCloudComplianceBenchmark {
    return ModelCloudComplianceBenchmarkFromJSONTyped(json, false);
}

export function ModelCloudComplianceBenchmarkFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelCloudComplianceBenchmark {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'compliance_type': !exists(json, 'compliance_type') ? undefined : json['compliance_type'],
        'controls': !exists(json, 'controls') ? undefined : json['controls'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function ModelCloudComplianceBenchmarkToJSON(value?: ModelCloudComplianceBenchmark | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'compliance_type': value.compliance_type,
        'controls': value.controls,
        'id': value.id,
    };
}

