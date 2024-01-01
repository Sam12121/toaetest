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


import * as runtime from '../runtime';
import type {
  ApiDocsBadRequestResponse,
  ApiDocsFailureResponse,
  ModelAddScheduledTaskRequest,
  ModelEmailConfigurationAdd,
  ModelEmailConfigurationResp,
  ModelGetAuditLogsRequest,
  ModelListAgentVersionResp,
  ModelMessageResponse,
  ModelSettingUpdateRequest,
  ModelSettingsResponse,
  ModelUpdateScheduledTaskRequest,
  PostgresqlDbGetAuditLogsRow,
  PostgresqlDbScheduler,
  SearchSearchCountResp,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    ModelAddScheduledTaskRequestFromJSON,
    ModelAddScheduledTaskRequestToJSON,
    ModelEmailConfigurationAddFromJSON,
    ModelEmailConfigurationAddToJSON,
    ModelEmailConfigurationRespFromJSON,
    ModelEmailConfigurationRespToJSON,
    ModelGetAuditLogsRequestFromJSON,
    ModelGetAuditLogsRequestToJSON,
    ModelListAgentVersionRespFromJSON,
    ModelListAgentVersionRespToJSON,
    ModelMessageResponseFromJSON,
    ModelMessageResponseToJSON,
    ModelSettingUpdateRequestFromJSON,
    ModelSettingUpdateRequestToJSON,
    ModelSettingsResponseFromJSON,
    ModelSettingsResponseToJSON,
    ModelUpdateScheduledTaskRequestFromJSON,
    ModelUpdateScheduledTaskRequestToJSON,
    PostgresqlDbGetAuditLogsRowFromJSON,
    PostgresqlDbGetAuditLogsRowToJSON,
    PostgresqlDbSchedulerFromJSON,
    PostgresqlDbSchedulerToJSON,
    SearchSearchCountRespFromJSON,
    SearchSearchCountRespToJSON,
} from '../models';

export interface AddEmailConfigurationRequest {
    modelEmailConfigurationAdd?: ModelEmailConfigurationAdd;
}

export interface AddScheduledTaskRequest {
    modelAddScheduledTaskRequest?: ModelAddScheduledTaskRequest;
}

export interface DeleteCustomScheduledTaskRequest {
    id: number;
}

export interface DeleteEmailConfigurationRequest {
    configId: string;
}

export interface GetUserAuditLogsRequest {
    modelGetAuditLogsRequest?: ModelGetAuditLogsRequest;
}

export interface UpdateScheduledTaskRequest {
    id: number;
    modelUpdateScheduledTaskRequest?: ModelUpdateScheduledTaskRequest;
}

export interface UpdateSettingRequest {
    id: number;
    modelSettingUpdateRequest?: ModelSettingUpdateRequest;
}

export interface UploadVulnerabilityDatabaseRequest {
    database: Blob | null;
}

/**
 * SettingsApi - interface
 * 
 * @export
 * @interface SettingsApiInterface
 */
export interface SettingsApiInterface {
    /**
     * This email configuration is used to send email notifications
     * @summary Add Email Configuration
     * @param {ModelEmailConfigurationAdd} [modelEmailConfigurationAdd] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApiInterface
     */
    addEmailConfigurationRaw(requestParameters: AddEmailConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>>;

    /**
     * This email configuration is used to send email notifications
     * Add Email Configuration
     */
    addEmailConfiguration(requestParameters: AddEmailConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse>;

    /**
     * Add scheduled task
     * @summary Add scheduled task
     * @param {ModelAddScheduledTaskRequest} [modelAddScheduledTaskRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApiInterface
     */
    addScheduledTaskRaw(requestParameters: AddScheduledTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Add scheduled task
     * Add scheduled task
     */
    addScheduledTask(requestParameters: AddScheduledTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Delete Custom Schedule task
     * @summary Delete Custom Schedule task
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApiInterface
     */
    deleteCustomScheduledTaskRaw(requestParameters: DeleteCustomScheduledTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete Custom Schedule task
     * Delete Custom Schedule task
     */
    deleteCustomScheduledTask(requestParameters: DeleteCustomScheduledTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Delete Email Smtp / ses Configurations in system
     * @summary Delete Email Configurations
     * @param {string} configId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApiInterface
     */
    deleteEmailConfigurationRaw(requestParameters: DeleteEmailConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete Email Smtp / ses Configurations in system
     * Delete Email Configurations
     */
    deleteEmailConfiguration(requestParameters: DeleteEmailConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Get available agent versions
     * @summary Get available agent versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApiInterface
     */
    getAgentVersionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelListAgentVersionResp>>;

    /**
     * Get available agent versions
     * Get available agent versions
     */
    getAgentVersions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelListAgentVersionResp>;

    /**
     * Get Email Smtp / ses Configurations in system
     * @summary Get Email Configurations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApiInterface
     */
    getEmailConfigurationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelEmailConfigurationResp>>>;

    /**
     * Get Email Smtp / ses Configurations in system
     * Get Email Configurations
     */
    getEmailConfiguration(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelEmailConfigurationResp>>;

    /**
     * Get scheduled tasks
     * @summary Get scheduled tasks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApiInterface
     */
    getScheduledTasksRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PostgresqlDbScheduler>>>;

    /**
     * Get scheduled tasks
     * Get scheduled tasks
     */
    getScheduledTasks(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PostgresqlDbScheduler>>;

    /**
     * Get all settings
     * @summary Get settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApiInterface
     */
    getSettingsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelSettingsResponse>>>;

    /**
     * Get all settings
     * Get settings
     */
    getSettings(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelSettingsResponse>>;

    /**
     * Get audit logs for all users
     * @summary Get user audit logs
     * @param {ModelGetAuditLogsRequest} [modelGetAuditLogsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApiInterface
     */
    getUserAuditLogsRaw(requestParameters: GetUserAuditLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PostgresqlDbGetAuditLogsRow>>>;

    /**
     * Get audit logs for all users
     * Get user audit logs
     */
    getUserAuditLogs(requestParameters: GetUserAuditLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PostgresqlDbGetAuditLogsRow>>;

    /**
     * Get user audit logs count
     * @summary Get user audit logs count
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApiInterface
     */
    getUserAuditLogsCountRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSearchCountResp>>;

    /**
     * Get user audit logs count
     * Get user audit logs count
     */
    getUserAuditLogsCount(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSearchCountResp>;

    /**
     * Update scheduled task
     * @summary Update scheduled task
     * @param {number} id 
     * @param {ModelUpdateScheduledTaskRequest} [modelUpdateScheduledTaskRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApiInterface
     */
    updateScheduledTaskRaw(requestParameters: UpdateScheduledTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Update scheduled task
     * Update scheduled task
     */
    updateScheduledTask(requestParameters: UpdateScheduledTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Update setting
     * @summary Update setting
     * @param {number} id 
     * @param {ModelSettingUpdateRequest} [modelSettingUpdateRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApiInterface
     */
    updateSettingRaw(requestParameters: UpdateSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Update setting
     * Update setting
     */
    updateSetting(requestParameters: UpdateSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Upload Agent version
     * @summary Upload New agent version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApiInterface
     */
    uploadAgentVersionRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Upload Agent version
     * Upload New agent version
     */
    uploadAgentVersion(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Upload Vulnerability Database for use in vulnerability scans
     * @summary Upload Vulnerability Database
     * @param {Blob} database 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SettingsApiInterface
     */
    uploadVulnerabilityDatabaseRaw(requestParameters: UploadVulnerabilityDatabaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>>;

    /**
     * Upload Vulnerability Database for use in vulnerability scans
     * Upload Vulnerability Database
     */
    uploadVulnerabilityDatabase(requestParameters: UploadVulnerabilityDatabaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse>;

}

/**
 * 
 */
export class SettingsApi extends runtime.BaseAPI implements SettingsApiInterface {

    /**
     * This email configuration is used to send email notifications
     * Add Email Configuration
     */
    async addEmailConfigurationRaw(requestParameters: AddEmailConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>> {
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
            path: `/toae/settings/email`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelEmailConfigurationAddToJSON(requestParameters.modelEmailConfigurationAdd),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelMessageResponseFromJSON(jsonValue));
    }

    /**
     * This email configuration is used to send email notifications
     * Add Email Configuration
     */
    async addEmailConfiguration(requestParameters: AddEmailConfigurationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse> {
        const response = await this.addEmailConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add scheduled task
     * Add scheduled task
     */
    async addScheduledTaskRaw(requestParameters: AddScheduledTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/toae/scheduled-task`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelAddScheduledTaskRequestToJSON(requestParameters.modelAddScheduledTaskRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Add scheduled task
     * Add scheduled task
     */
    async addScheduledTask(requestParameters: AddScheduledTaskRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addScheduledTaskRaw(requestParameters, initOverrides);
    }

    /**
     * Delete Custom Schedule task
     * Delete Custom Schedule task
     */
    async deleteCustomScheduledTaskRaw(requestParameters: DeleteCustomScheduledTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteCustomScheduledTask.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/scheduled-task/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete Custom Schedule task
     * Delete Custom Schedule task
     */
    async deleteCustomScheduledTask(requestParameters: DeleteCustomScheduledTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCustomScheduledTaskRaw(requestParameters, initOverrides);
    }

    /**
     * Delete Email Smtp / ses Configurations in system
     * Delete Email Configurations
     */
    async deleteEmailConfigurationRaw(requestParameters: DeleteEmailConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.configId === null || requestParameters.configId === undefined) {
            throw new runtime.RequiredError('configId','Required parameter requestParameters.configId was null or undefined when calling deleteEmailConfiguration.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/settings/email/{config_id}`.replace(`{${"config_id"}}`, encodeURIComponent(String(requestParameters.configId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete Email Smtp / ses Configurations in system
     * Delete Email Configurations
     */
    async deleteEmailConfiguration(requestParameters: DeleteEmailConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteEmailConfigurationRaw(requestParameters, initOverrides);
    }

    /**
     * Get available agent versions
     * Get available agent versions
     */
    async getAgentVersionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelListAgentVersionResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/settings/agent/versions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelListAgentVersionRespFromJSON(jsonValue));
    }

    /**
     * Get available agent versions
     * Get available agent versions
     */
    async getAgentVersions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelListAgentVersionResp> {
        const response = await this.getAgentVersionsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get Email Smtp / ses Configurations in system
     * Get Email Configurations
     */
    async getEmailConfigurationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelEmailConfigurationResp>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/settings/email`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelEmailConfigurationRespFromJSON));
    }

    /**
     * Get Email Smtp / ses Configurations in system
     * Get Email Configurations
     */
    async getEmailConfiguration(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelEmailConfigurationResp>> {
        const response = await this.getEmailConfigurationRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get scheduled tasks
     * Get scheduled tasks
     */
    async getScheduledTasksRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PostgresqlDbScheduler>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/scheduled-task`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PostgresqlDbSchedulerFromJSON));
    }

    /**
     * Get scheduled tasks
     * Get scheduled tasks
     */
    async getScheduledTasks(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PostgresqlDbScheduler>> {
        const response = await this.getScheduledTasksRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get all settings
     * Get settings
     */
    async getSettingsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelSettingsResponse>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/settings/global-settings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelSettingsResponseFromJSON));
    }

    /**
     * Get all settings
     * Get settings
     */
    async getSettings(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelSettingsResponse>> {
        const response = await this.getSettingsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get audit logs for all users
     * Get user audit logs
     */
    async getUserAuditLogsRaw(requestParameters: GetUserAuditLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PostgresqlDbGetAuditLogsRow>>> {
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
            path: `/toae/settings/user-audit-log`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelGetAuditLogsRequestToJSON(requestParameters.modelGetAuditLogsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PostgresqlDbGetAuditLogsRowFromJSON));
    }

    /**
     * Get audit logs for all users
     * Get user audit logs
     */
    async getUserAuditLogs(requestParameters: GetUserAuditLogsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PostgresqlDbGetAuditLogsRow>> {
        const response = await this.getUserAuditLogsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get user audit logs count
     * Get user audit logs count
     */
    async getUserAuditLogsCountRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSearchCountResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/settings/user-audit-log/count`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchSearchCountRespFromJSON(jsonValue));
    }

    /**
     * Get user audit logs count
     * Get user audit logs count
     */
    async getUserAuditLogsCount(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSearchCountResp> {
        const response = await this.getUserAuditLogsCountRaw(initOverrides);
        return await response.value();
    }

    /**
     * Update scheduled task
     * Update scheduled task
     */
    async updateScheduledTaskRaw(requestParameters: UpdateScheduledTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateScheduledTask.');
        }

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
            path: `/toae/scheduled-task/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ModelUpdateScheduledTaskRequestToJSON(requestParameters.modelUpdateScheduledTaskRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update scheduled task
     * Update scheduled task
     */
    async updateScheduledTask(requestParameters: UpdateScheduledTaskRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateScheduledTaskRaw(requestParameters, initOverrides);
    }

    /**
     * Update setting
     * Update setting
     */
    async updateSettingRaw(requestParameters: UpdateSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateSetting.');
        }

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
            path: `/toae/settings/global-settings/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ModelSettingUpdateRequestToJSON(requestParameters.modelSettingUpdateRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update setting
     * Update setting
     */
    async updateSetting(requestParameters: UpdateSettingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateSettingRaw(requestParameters, initOverrides);
    }

    /**
     * Upload Agent version
     * Upload New agent version
     */
    async uploadAgentVersionRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/toae/settings/agent/version`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Upload Agent version
     * Upload New agent version
     */
    async uploadAgentVersion(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.uploadAgentVersionRaw(initOverrides);
    }

    /**
     * Upload Vulnerability Database for use in vulnerability scans
     * Upload Vulnerability Database
     */
    async uploadVulnerabilityDatabaseRaw(requestParameters: UploadVulnerabilityDatabaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelMessageResponse>> {
        if (requestParameters.database === null || requestParameters.database === undefined) {
            throw new runtime.RequiredError('database','Required parameter requestParameters.database was null or undefined when calling uploadVulnerabilityDatabase.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.database !== undefined) {
            formParams.append('database', requestParameters.database as any);
        }

        const response = await this.request({
            path: `/toae/database/vulnerability`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelMessageResponseFromJSON(jsonValue));
    }

    /**
     * Upload Vulnerability Database for use in vulnerability scans
     * Upload Vulnerability Database
     */
    async uploadVulnerabilityDatabase(requestParameters: UploadVulnerabilityDatabaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelMessageResponse> {
        const response = await this.uploadVulnerabilityDatabaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
