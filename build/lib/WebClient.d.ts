import { AxiosInstance } from "axios";
declare module "axios" {
    interface AxiosResponse<T = any> extends Promise<T> {
    }
}
export declare class WebClient {
    protected readonly instance: AxiosInstance;
    constructor(baseURL: string);
    private _initializeResponseInterceptor;
    private _handleResponse;
    protected _handleError: (error: any) => Promise<never>;
}
