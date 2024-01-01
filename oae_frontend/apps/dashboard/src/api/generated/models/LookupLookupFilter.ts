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

/**
 * 
 * @export
 * @interface LookupLookupFilter
 */
export interface LookupLookupFilter {
    /**
     * 
     * @type {Array<string>}
     * @memberof LookupLookupFilter
     */
    in_field_filter: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LookupLookupFilter
     */
    node_ids: Array<string> | null;
    /**
     * 
     * @type {ModelFetchWindow}
     * @memberof LookupLookupFilter
     */
    window: ModelFetchWindow;
}

/**
 * Check if a given object implements the LookupLookupFilter interface.
 */
export function instanceOfLookupLookupFilter(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "in_field_filter" in value;
    isInstance = isInstance && "node_ids" in value;
    isInstance = isInstance && "window" in value;

    return isInstance;
}

export function LookupLookupFilterFromJSON(json: any): LookupLookupFilter {
    return LookupLookupFilterFromJSONTyped(json, false);
}

export function LookupLookupFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): LookupLookupFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'in_field_filter': json['in_field_filter'],
        'node_ids': json['node_ids'],
        'window': ModelFetchWindowFromJSON(json['window']),
    };
}

export function LookupLookupFilterToJSON(value?: LookupLookupFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'in_field_filter': value.in_field_filter,
        'node_ids': value.node_ids,
        'window': ModelFetchWindowToJSON(value.window),
    };
}
