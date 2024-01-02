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
import type { ModelNodeIdentifier } from './ModelNodeIdentifier';
import {
    ModelNodeIdentifierFromJSON,
    ModelNodeIdentifierFromJSONTyped,
    ModelNodeIdentifierToJSON,
} from './ModelNodeIdentifier';
import type { ReportersFieldsFilters } from './ReportersFieldsFilters';
import {
    ReportersFieldsFiltersFromJSON,
    ReportersFieldsFiltersFromJSONTyped,
    ReportersFieldsFiltersToJSON,
} from './ReportersFieldsFilters';

/**
 * 
 * @export
 * @interface ModelIntegrationFilters
 */
export interface ModelIntegrationFilters {
    /**
     * 
     * @type {ReportersFieldsFilters}
     * @memberof ModelIntegrationFilters
     */
    fields_filters?: ReportersFieldsFilters;
    /**
     * 
     * @type {Array<ModelNodeIdentifier>}
     * @memberof ModelIntegrationFilters
     */
    node_ids: Array<ModelNodeIdentifier> | null;
}

/**
 * Check if a given object implements the ModelIntegrationFilters interface.
 */
export function instanceOfModelIntegrationFilters(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "node_ids" in value;

    return isInstance;
}

export function ModelIntegrationFiltersFromJSON(json: any): ModelIntegrationFilters {
    return ModelIntegrationFiltersFromJSONTyped(json, false);
}

export function ModelIntegrationFiltersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelIntegrationFilters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fields_filters': !exists(json, 'fields_filters') ? undefined : ReportersFieldsFiltersFromJSON(json['fields_filters']),
        'node_ids': (json['node_ids'] === null ? null : (json['node_ids'] as Array<any>).map(ModelNodeIdentifierFromJSON)),
    };
}

export function ModelIntegrationFiltersToJSON(value?: ModelIntegrationFilters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fields_filters': ReportersFieldsFiltersToJSON(value.fields_filters),
        'node_ids': (value.node_ids === null ? null : (value.node_ids as Array<any>).map(ModelNodeIdentifierToJSON)),
    };
}

