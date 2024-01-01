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
 * @interface ReportRawReport
 */
export interface ReportRawReport {
    /**
     * 
     * @type {string}
     * @memberof ReportRawReport
     */
    payload: string;
}

/**
 * Check if a given object implements the ReportRawReport interface.
 */
export function instanceOfReportRawReport(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "payload" in value;

    return isInstance;
}

export function ReportRawReportFromJSON(json: any): ReportRawReport {
    return ReportRawReportFromJSONTyped(json, false);
}

export function ReportRawReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportRawReport {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'payload': json['payload'],
    };
}

export function ReportRawReportToJSON(value?: ReportRawReport | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payload': value.payload,
    };
}

