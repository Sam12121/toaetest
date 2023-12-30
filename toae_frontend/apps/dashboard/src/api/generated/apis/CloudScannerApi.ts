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


import * as runtime from '../runtime';
import type {
  ApiDocsBadRequestResponse,
  ApiDocsFailureResponse,
  IngestersCloudCompliance,
  IngestersCloudComplianceScanStatus,
  ModelCloudComplianceScanResult,
  ModelComplianceScanStatusResp,
  ModelScanListReq,
  ModelScanListResp,
  ModelScanResultsReq,
  ModelScanStatusReq,
  SearchSearchCountResp,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    IngestersCloudComplianceFromJSON,
    IngestersCloudComplianceToJSON,
    IngestersCloudComplianceScanStatusFromJSON,
    IngestersCloudComplianceScanStatusToJSON,
    ModelCloudComplianceScanResultFromJSON,
    ModelCloudComplianceScanResultToJSON,
    ModelComplianceScanStatusRespFromJSON,
    ModelComplianceScanStatusRespToJSON,
    ModelScanListReqFromJSON,
    ModelScanListReqToJSON,
    ModelScanListRespFromJSON,
    ModelScanListRespToJSON,
    ModelScanResultsReqFromJSON,
    ModelScanResultsReqToJSON,
    ModelScanStatusReqFromJSON,
    ModelScanStatusReqToJSON,
    SearchSearchCountRespFromJSON,
    SearchSearchCountRespToJSON,
} from '../models';

export interface CountResultsCloudComplianceScanRequest {
    modelScanResultsReq?: ModelScanResultsReq;
}

export interface IngestCloudComplianceScanStatusRequest {
    ingestersCloudComplianceScanStatus?: Array<IngestersCloudComplianceScanStatus> | null;
}

export interface IngestCloudCompliancesRequest {
    ingestersCloudCompliance?: Array<IngestersCloudCompliance> | null;
}

export interface ListCloudComplianceScanRequest {
    modelScanListReq?: ModelScanListReq;
}

export interface ResultsCloudComplianceScanRequest {
    modelScanResultsReq?: ModelScanResultsReq;
}

export interface StatusCloudComplianceScanRequest {
    modelScanStatusReq?: ModelScanStatusReq;
}

/**
 * CloudScannerApi - interface
 * 
 * @export
 * @interface CloudScannerApiInterface
 */
export interface CloudScannerApiInterface {
    /**
     * Get Cloud Compliance Scan results for cloud node
     * @summary Get Cloud Compliance Scan Results
     * @param {ModelScanResultsReq} [modelScanResultsReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudScannerApiInterface
     */
    countResultsCloudComplianceScanRaw(requestParameters: CountResultsCloudComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSearchCountResp>>;

    /**
     * Get Cloud Compliance Scan results for cloud node
     * Get Cloud Compliance Scan Results
     */
    countResultsCloudComplianceScan(requestParameters: CountResultsCloudComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSearchCountResp>;

    /**
     * Ingest Cloud compliances found while scanning cloud provider
     * @summary Ingest Cloud Compliances scan status
     * @param {Array<IngestersCloudComplianceScanStatus>} [ingestersCloudComplianceScanStatus] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudScannerApiInterface
     */
    ingestCloudComplianceScanStatusRaw(requestParameters: IngestCloudComplianceScanStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Ingest Cloud compliances found while scanning cloud provider
     * Ingest Cloud Compliances scan status
     */
    ingestCloudComplianceScanStatus(requestParameters: IngestCloudComplianceScanStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Ingest Cloud compliances found while scanning cloud provider
     * @summary Ingest Cloud Compliances
     * @param {Array<IngestersCloudCompliance>} [ingestersCloudCompliance] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudScannerApiInterface
     */
    ingestCloudCompliancesRaw(requestParameters: IngestCloudCompliancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Ingest Cloud compliances found while scanning cloud provider
     * Ingest Cloud Compliances
     */
    ingestCloudCompliances(requestParameters: IngestCloudCompliancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Get Cloud Compliance Scans list for cloud node
     * @summary Get Cloud Compliance Scans List
     * @param {ModelScanListReq} [modelScanListReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudScannerApiInterface
     */
    listCloudComplianceScanRaw(requestParameters: ListCloudComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanListResp>>;

    /**
     * Get Cloud Compliance Scans list for cloud node
     * Get Cloud Compliance Scans List
     */
    listCloudComplianceScan(requestParameters: ListCloudComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanListResp>;

    /**
     * Get Cloud Compliance Scan results for cloud node
     * @summary Get Cloud Compliance Scan Results
     * @param {ModelScanResultsReq} [modelScanResultsReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudScannerApiInterface
     */
    resultsCloudComplianceScanRaw(requestParameters: ResultsCloudComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelCloudComplianceScanResult>>;

    /**
     * Get Cloud Compliance Scan results for cloud node
     * Get Cloud Compliance Scan Results
     */
    resultsCloudComplianceScan(requestParameters: ResultsCloudComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelCloudComplianceScanResult>;

    /**
     * Get Cloud Compliance Scan Status on cloud node
     * @summary Get Cloud Compliance Scan Status
     * @param {ModelScanStatusReq} [modelScanStatusReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudScannerApiInterface
     */
    statusCloudComplianceScanRaw(requestParameters: StatusCloudComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelComplianceScanStatusResp>>;

    /**
     * Get Cloud Compliance Scan Status on cloud node
     * Get Cloud Compliance Scan Status
     */
    statusCloudComplianceScan(requestParameters: StatusCloudComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelComplianceScanStatusResp>;

}

/**
 * 
 */
export class CloudScannerApi extends runtime.BaseAPI implements CloudScannerApiInterface {

    /**
     * Get Cloud Compliance Scan results for cloud node
     * Get Cloud Compliance Scan Results
     */
    async countResultsCloudComplianceScanRaw(requestParameters: CountResultsCloudComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSearchCountResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/scan/results/count/cloud-compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanResultsReqToJSON(requestParameters.modelScanResultsReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchSearchCountRespFromJSON(jsonValue));
    }

    /**
     * Get Cloud Compliance Scan results for cloud node
     * Get Cloud Compliance Scan Results
     */
    async countResultsCloudComplianceScan(requestParameters: CountResultsCloudComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSearchCountResp> {
        const response = await this.countResultsCloudComplianceScanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Ingest Cloud compliances found while scanning cloud provider
     * Ingest Cloud Compliances scan status
     */
    async ingestCloudComplianceScanStatusRaw(requestParameters: IngestCloudComplianceScanStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/ingest/cloud-compliance-status`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.ingestersCloudComplianceScanStatus?.map(IngestersCloudComplianceScanStatusToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Ingest Cloud compliances found while scanning cloud provider
     * Ingest Cloud Compliances scan status
     */
    async ingestCloudComplianceScanStatus(requestParameters: IngestCloudComplianceScanStatusRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.ingestCloudComplianceScanStatusRaw(requestParameters, initOverrides);
    }

    /**
     * Ingest Cloud compliances found while scanning cloud provider
     * Ingest Cloud Compliances
     */
    async ingestCloudCompliancesRaw(requestParameters: IngestCloudCompliancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/ingest/cloud-compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.ingestersCloudCompliance?.map(IngestersCloudComplianceToJSON),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Ingest Cloud compliances found while scanning cloud provider
     * Ingest Cloud Compliances
     */
    async ingestCloudCompliances(requestParameters: IngestCloudCompliancesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.ingestCloudCompliancesRaw(requestParameters, initOverrides);
    }

    /**
     * Get Cloud Compliance Scans list for cloud node
     * Get Cloud Compliance Scans List
     */
    async listCloudComplianceScanRaw(requestParameters: ListCloudComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanListResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/scan/list/cloud-compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanListReqToJSON(requestParameters.modelScanListReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelScanListRespFromJSON(jsonValue));
    }

    /**
     * Get Cloud Compliance Scans list for cloud node
     * Get Cloud Compliance Scans List
     */
    async listCloudComplianceScan(requestParameters: ListCloudComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanListResp> {
        const response = await this.listCloudComplianceScanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Cloud Compliance Scan results for cloud node
     * Get Cloud Compliance Scan Results
     */
    async resultsCloudComplianceScanRaw(requestParameters: ResultsCloudComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelCloudComplianceScanResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/scan/results/cloud-compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanResultsReqToJSON(requestParameters.modelScanResultsReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelCloudComplianceScanResultFromJSON(jsonValue));
    }

    /**
     * Get Cloud Compliance Scan results for cloud node
     * Get Cloud Compliance Scan Results
     */
    async resultsCloudComplianceScan(requestParameters: ResultsCloudComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelCloudComplianceScanResult> {
        const response = await this.resultsCloudComplianceScanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Cloud Compliance Scan Status on cloud node
     * Get Cloud Compliance Scan Status
     */
    async statusCloudComplianceScanRaw(requestParameters: StatusCloudComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelComplianceScanStatusResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/scan/status/cloud-compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanStatusReqToJSON(requestParameters.modelScanStatusReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelComplianceScanStatusRespFromJSON(jsonValue));
    }

    /**
     * Get Cloud Compliance Scan Status on cloud node
     * Get Cloud Compliance Scan Status
     */
    async statusCloudComplianceScan(requestParameters: StatusCloudComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelComplianceScanStatusResp> {
        const response = await this.statusCloudComplianceScanRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
