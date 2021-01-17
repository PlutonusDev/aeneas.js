import { WebClient } from "./WebClient";

interface ClientOptions {
	apiUrl: string;
	apiKey: string;
}

export class Client {
	private _config: ClientOptions;
	private _wc: WebClient;

	public constructor(config: ClientOptions) {
		this._config = config;
		this._setupConfig();
		this._wc = new WebClient(this._config.apiUrl);
	}

	private _setupConfig() {
		console.log(`url: ${this._config.apiUrl}\nkey: ${this._config.apiKey}`);
		if(!this._config.apiUrl) throw new Error("apiUrl was not passed to 'new <Aeneas>.Client()'");
		if(!this._config.apiKey) throw new Error("apiKey was not passed to 'new <Aeneas>.Client()'");
	}
}
