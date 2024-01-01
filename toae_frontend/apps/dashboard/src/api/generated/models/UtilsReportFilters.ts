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
import type { UtilsAdvancedReportFilters } from './UtilsAdvancedReportFilters';
import {
    UtilsAdvancedReportFiltersFromJSON,
    UtilsAdvancedReportFiltersFromJSONTyped,
    UtilsAdvancedReportFiltersToJSON,
} from './UtilsAdvancedReportFilters';

/**
 * 
 * @export
 * @interface UtilsReportFilters
 */
export interface UtilsReportFilters {
    /**
     * 
     * @type {UtilsAdvancedReportFilters}
     * @memberof UtilsReportFilters
     */
    advanced_report_filters?: UtilsAdvancedReportFilters;
    /**
     * 
     * @type {boolean}
     * @memberof UtilsReportFilters
     */
    include_dead_nodes?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UtilsReportFilters
     */
    most_exploitable_report?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UtilsReportFilters
     */
    node_type: UtilsReportFiltersNodeTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UtilsReportFilters
     */
    scan_id?: string;
    /**
     * 
     * @type {string}
     * @memberof UtilsReportFilters
     */
    scan_type: UtilsReportFiltersScanTypeEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof UtilsReportFilters
     */
    severity_or_check_type?: UtilsReportFiltersSeverityOrCheckTypeEnum;
}


/**
 * @export
 */
export const UtilsReportFiltersNodeTypeEnum = {
    Host: 'host',
    Container: 'container',
    ContainerImage: 'container_image',
    Linux: 'linux',
    Cluster: 'cluster',
    Aws: 'aws',
    Gcp: 'gcp',
    Azure: 'azure'
} as const;
export type UtilsReportFiltersNodeTypeEnum = typeof UtilsReportFiltersNodeTypeEnum[keyof typeof UtilsReportFiltersNodeTypeEnum];

/**
 * @export
 */
export const UtilsReportFiltersScanTypeEnum = {
    Vulnerability: 'vulnerability',
    Secret: 'secret',
    Malware: 'malware',
    Compliance: 'compliance',
    CloudCompliance: 'cloud_compliance'
} as const;
export type UtilsReportFiltersScanTypeEnum = typeof UtilsReportFiltersScanTypeEnum[keyof typeof UtilsReportFiltersScanTypeEnum];

/**
 * @export
 */
export const UtilsReportFiltersSeverityOrCheckTypeEnum = {
} as const;
export type UtilsReportFiltersSeverityOrCheckTypeEnum = typeof UtilsReportFiltersSeverityOrCheckTypeEnum[keyof typeof UtilsReportFiltersSeverityOrCheckTypeEnum];


/**
 * Check if a given object implements the UtilsReportFilters interface.
 */
export function instanceOfUtilsReportFilters(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "node_type" in value;
    isInstance = isInstance && "scan_type" in value;

    return isInstance;
}

export function UtilsReportFiltersFromJSON(json: any): UtilsReportFilters {
    return UtilsReportFiltersFromJSONTyped(json, false);
}

export function UtilsReportFiltersFromJSONTyped(json: any, ignoreDiscriminator: boolean): UtilsReportFilters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'advanced_report_filters': !exists(json, 'advanced_report_filters') ? undefined : UtilsAdvancedReportFiltersFromJSON(json['advanced_report_filters']),
        'include_dead_nodes': !exists(json, 'include_dead_nodes') ? undefined : json['include_dead_nodes'],
        'most_exploitable_report': !exists(json, 'most_exploitable_report') ? undefined : json['most_exploitable_report'],
        'node_type': json['node_type'],
        'scan_id': !exists(json, 'scan_id') ? undefined : json['scan_id'],
        'scan_type': json['scan_type'],
        'severity_or_check_type': !exists(json, 'severity_or_check_type') ? undefined : json['severity_or_check_type'],
    };
}

export function UtilsReportFiltersToJSON(value?: UtilsReportFilters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'advanced_report_filters': UtilsAdvancedReportFiltersToJSON(value.advanced_report_filters),
        'include_dead_nodes': value.include_dead_nodes,
        'most_exploitable_report': value.most_exploitable_report,
        'node_type': value.node_type,
        'scan_id': value.scan_id,
        'scan_type': value.scan_type,
        'severity_or_check_type': value.severity_or_check_type,
    };
}

