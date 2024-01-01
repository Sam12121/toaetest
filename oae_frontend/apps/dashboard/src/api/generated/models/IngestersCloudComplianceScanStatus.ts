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
import type { IngestersComplianceStats } from './IngestersComplianceStats';
import {
    IngestersComplianceStatsFromJSON,
    IngestersComplianceStatsFromJSONTyped,
    IngestersComplianceStatsToJSON,
} from './IngestersComplianceStats';

/**
 * 
 * @export
 * @interface IngestersCloudComplianceScanStatus
 */
export interface IngestersCloudComplianceScanStatus {
    /**
     * 
     * @type {Date}
     * @memberof IngestersCloudComplianceScanStatus
     */
    timestamp?: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof IngestersCloudComplianceScanStatus
     */
    compliance_check_types?: Array<string> | null;
    /**
     * 
     * @type {IngestersComplianceStats}
     * @memberof IngestersCloudComplianceScanStatus
     */
    result?: IngestersComplianceStats;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudComplianceScanStatus
     */
    scan_id?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudComplianceScanStatus
     */
    scan_message?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudComplianceScanStatus
     */
    scan_status?: string;
    /**
     * 
     * @type {number}
     * @memberof IngestersCloudComplianceScanStatus
     */
    total_checks?: number;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudComplianceScanStatus
     */
    type?: string;
}

/**
 * Check if a given object implements the IngestersCloudComplianceScanStatus interface.
 */
export function instanceOfIngestersCloudComplianceScanStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IngestersCloudComplianceScanStatusFromJSON(json: any): IngestersCloudComplianceScanStatus {
    return IngestersCloudComplianceScanStatusFromJSONTyped(json, false);
}

export function IngestersCloudComplianceScanStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IngestersCloudComplianceScanStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timestamp': !exists(json, '@timestamp') ? undefined : (new Date(json['@timestamp'])),
        'compliance_check_types': !exists(json, 'compliance_check_types') ? undefined : json['compliance_check_types'],
        'result': !exists(json, 'result') ? undefined : IngestersComplianceStatsFromJSON(json['result']),
        'scan_id': !exists(json, 'scan_id') ? undefined : json['scan_id'],
        'scan_message': !exists(json, 'scan_message') ? undefined : json['scan_message'],
        'scan_status': !exists(json, 'scan_status') ? undefined : json['scan_status'],
        'total_checks': !exists(json, 'total_checks') ? undefined : json['total_checks'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function IngestersCloudComplianceScanStatusToJSON(value?: IngestersCloudComplianceScanStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@timestamp': value.timestamp === undefined ? undefined : (value.timestamp.toISOString()),
        'compliance_check_types': value.compliance_check_types,
        'result': IngestersComplianceStatsToJSON(value.result),
        'scan_id': value.scan_id,
        'scan_message': value.scan_message,
        'scan_status': value.scan_status,
        'total_checks': value.total_checks,
        'type': value.type,
    };
}

