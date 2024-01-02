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
 * @interface ModelDownloadReportResponse
 */
export interface ModelDownloadReportResponse {
    /**
     * 
     * @type {string}
     * @memberof ModelDownloadReportResponse
     */
    url_link?: string;
}

/**
 * Check if a given object implements the ModelDownloadReportResponse interface.
 */
export function instanceOfModelDownloadReportResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelDownloadReportResponseFromJSON(json: any): ModelDownloadReportResponse {
    return ModelDownloadReportResponseFromJSONTyped(json, false);
}

export function ModelDownloadReportResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelDownloadReportResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url_link': !exists(json, 'url_link') ? undefined : json['url_link'],
    };
}

export function ModelDownloadReportResponseToJSON(value?: ModelDownloadReportResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url_link': value.url_link,
    };
}

