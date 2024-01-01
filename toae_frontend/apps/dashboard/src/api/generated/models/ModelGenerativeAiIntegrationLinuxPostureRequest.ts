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
 * @interface ModelGenerativeAiIntegrationLinuxPostureRequest
 */
export interface ModelGenerativeAiIntegrationLinuxPostureRequest {
    /**
     * 
     * @type {string}
     * @memberof ModelGenerativeAiIntegrationLinuxPostureRequest
     */
    compliance_check_type: string;
    /**
     * 
     * @type {string}
     * @memberof ModelGenerativeAiIntegrationLinuxPostureRequest
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof ModelGenerativeAiIntegrationLinuxPostureRequest
     */
    integration_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelGenerativeAiIntegrationLinuxPostureRequest
     */
    query_type: ModelGenerativeAiIntegrationLinuxPostureRequestQueryTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ModelGenerativeAiIntegrationLinuxPostureRequest
     */
    remediation_format: ModelGenerativeAiIntegrationLinuxPostureRequestRemediationFormatEnum;
    /**
     * 
     * @type {string}
     * @memberof ModelGenerativeAiIntegrationLinuxPostureRequest
     */
    test_number: string;
}


/**
 * @export
 */
export const ModelGenerativeAiIntegrationLinuxPostureRequestQueryTypeEnum = {
    Remediation: 'remediation'
} as const;
export type ModelGenerativeAiIntegrationLinuxPostureRequestQueryTypeEnum = typeof ModelGenerativeAiIntegrationLinuxPostureRequestQueryTypeEnum[keyof typeof ModelGenerativeAiIntegrationLinuxPostureRequestQueryTypeEnum];

/**
 * @export
 */
export const ModelGenerativeAiIntegrationLinuxPostureRequestRemediationFormatEnum = {
    All: 'all',
    Cli: 'cli',
    Pulumi: 'pulumi',
    Terraform: 'terraform'
} as const;
export type ModelGenerativeAiIntegrationLinuxPostureRequestRemediationFormatEnum = typeof ModelGenerativeAiIntegrationLinuxPostureRequestRemediationFormatEnum[keyof typeof ModelGenerativeAiIntegrationLinuxPostureRequestRemediationFormatEnum];


/**
 * Check if a given object implements the ModelGenerativeAiIntegrationLinuxPostureRequest interface.
 */
export function instanceOfModelGenerativeAiIntegrationLinuxPostureRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "compliance_check_type" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "query_type" in value;
    isInstance = isInstance && "remediation_format" in value;
    isInstance = isInstance && "test_number" in value;

    return isInstance;
}

export function ModelGenerativeAiIntegrationLinuxPostureRequestFromJSON(json: any): ModelGenerativeAiIntegrationLinuxPostureRequest {
    return ModelGenerativeAiIntegrationLinuxPostureRequestFromJSONTyped(json, false);
}

export function ModelGenerativeAiIntegrationLinuxPostureRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelGenerativeAiIntegrationLinuxPostureRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'compliance_check_type': json['compliance_check_type'],
        'description': json['description'],
        'integration_id': !exists(json, 'integration_id') ? undefined : json['integration_id'],
        'query_type': json['query_type'],
        'remediation_format': json['remediation_format'],
        'test_number': json['test_number'],
    };
}

export function ModelGenerativeAiIntegrationLinuxPostureRequestToJSON(value?: ModelGenerativeAiIntegrationLinuxPostureRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'compliance_check_type': value.compliance_check_type,
        'description': value.description,
        'integration_id': value.integration_id,
        'query_type': value.query_type,
        'remediation_format': value.remediation_format,
        'test_number': value.test_number,
    };
}

