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
 * @interface ModelGenerateReportResp
 */
export interface ModelGenerateReportResp {
    /**
     * 
     * @type {string}
     * @memberof ModelGenerateReportResp
     */
    report_id?: string;
}

/**
 * Check if a given object implements the ModelGenerateReportResp interface.
 */
export function instanceOfModelGenerateReportResp(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelGenerateReportRespFromJSON(json: any): ModelGenerateReportResp {
    return ModelGenerateReportRespFromJSONTyped(json, false);
}

export function ModelGenerateReportRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelGenerateReportResp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'report_id': !exists(json, 'report_id') ? undefined : json['report_id'],
    };
}

export function ModelGenerateReportRespToJSON(value?: ModelGenerateReportResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'report_id': value.report_id,
    };
}

