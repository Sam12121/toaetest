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
import type { ReportersFieldsFilters } from './ReportersFieldsFilters';
import {
    ReportersFieldsFiltersFromJSON,
    ReportersFieldsFiltersFromJSONTyped,
    ReportersFieldsFiltersToJSON,
} from './ReportersFieldsFilters';

/**
 * 
 * @export
 * @interface GraphTopologyFilters
 */
export interface GraphTopologyFilters {
    /**
     * 
     * @type {Array<string>}
     * @memberof GraphTopologyFilters
     */
    cloud_filter: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof GraphTopologyFilters
     */
    container_filter: Array<string> | null;
    /**
     * 
     * @type {ReportersFieldsFilters}
     * @memberof GraphTopologyFilters
     */
    field_filters: ReportersFieldsFilters;
    /**
     * 
     * @type {Array<string>}
     * @memberof GraphTopologyFilters
     */
    host_filter: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof GraphTopologyFilters
     */
    kubernetes_filter: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof GraphTopologyFilters
     */
    pod_filter: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof GraphTopologyFilters
     */
    region_filter: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof GraphTopologyFilters
     */
    skip_connections: boolean;
}

/**
 * Check if a given object implements the GraphTopologyFilters interface.
 */
export function instanceOfGraphTopologyFilters(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cloud_filter" in value;
    isInstance = isInstance && "container_filter" in value;
    isInstance = isInstance && "field_filters" in value;
    isInstance = isInstance && "host_filter" in value;
    isInstance = isInstance && "kubernetes_filter" in value;
    isInstance = isInstance && "pod_filter" in value;
    isInstance = isInstance && "region_filter" in value;
    isInstance = isInstance && "skip_connections" in value;

    return isInstance;
}

export function GraphTopologyFiltersFromJSON(json: any): GraphTopologyFilters {
    return GraphTopologyFiltersFromJSONTyped(json, false);
}

export function GraphTopologyFiltersFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphTopologyFilters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cloud_filter': json['cloud_filter'],
        'container_filter': json['container_filter'],
        'field_filters': ReportersFieldsFiltersFromJSON(json['field_filters']),
        'host_filter': json['host_filter'],
        'kubernetes_filter': json['kubernetes_filter'],
        'pod_filter': json['pod_filter'],
        'region_filter': json['region_filter'],
        'skip_connections': json['skip_connections'],
    };
}

export function GraphTopologyFiltersToJSON(value?: GraphTopologyFilters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cloud_filter': value.cloud_filter,
        'container_filter': value.container_filter,
        'field_filters': ReportersFieldsFiltersToJSON(value.field_filters),
        'host_filter': value.host_filter,
        'kubernetes_filter': value.kubernetes_filter,
        'pod_filter': value.pod_filter,
        'region_filter': value.region_filter,
        'skip_connections': value.skip_connections,
    };
}

