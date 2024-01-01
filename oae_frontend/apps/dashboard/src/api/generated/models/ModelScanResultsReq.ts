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
import type { ModelFetchWindow } from './ModelFetchWindow';
import {
    ModelFetchWindowFromJSON,
    ModelFetchWindowFromJSONTyped,
    ModelFetchWindowToJSON,
} from './ModelFetchWindow';
import type { ReportersFieldsFilters } from './ReportersFieldsFilters';
import {
    ReportersFieldsFiltersFromJSON,
    ReportersFieldsFiltersFromJSONTyped,
    ReportersFieldsFiltersToJSON,
} from './ReportersFieldsFilters';

/**
 * 
 * @export
 * @interface ModelScanResultsReq
 */
export interface ModelScanResultsReq {
    /**
     * 
     * @type {ReportersFieldsFilters}
     * @memberof ModelScanResultsReq
     */
    fields_filter: ReportersFieldsFilters;
    /**
     * 
     * @type {string}
     * @memberof ModelScanResultsReq
     */
    scan_id: string;
    /**
     * 
     * @type {ModelFetchWindow}
     * @memberof ModelScanResultsReq
     */
    window: ModelFetchWindow;
}

/**
 * Check if a given object implements the ModelScanResultsReq interface.
 */
export function instanceOfModelScanResultsReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fields_filter" in value;
    isInstance = isInstance && "scan_id" in value;
    isInstance = isInstance && "window" in value;

    return isInstance;
}

export function ModelScanResultsReqFromJSON(json: any): ModelScanResultsReq {
    return ModelScanResultsReqFromJSONTyped(json, false);
}

export function ModelScanResultsReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelScanResultsReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fields_filter': ReportersFieldsFiltersFromJSON(json['fields_filter']),
        'scan_id': json['scan_id'],
        'window': ModelFetchWindowFromJSON(json['window']),
    };
}

export function ModelScanResultsReqToJSON(value?: ModelScanResultsReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fields_filter': ReportersFieldsFiltersToJSON(value.fields_filter),
        'scan_id': value.scan_id,
        'window': ModelFetchWindowToJSON(value.window),
    };
}

