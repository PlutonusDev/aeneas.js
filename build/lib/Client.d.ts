interface ClientOptions {
    apiUrl: string;
    apiKey: string;
}
export declare class Client {
    private _config;
    private _wc;
    constructor(config: ClientOptions);
    private _setupConfig;
}
export {};
