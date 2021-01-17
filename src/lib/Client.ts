import { WebClient } from "./WebClient";
import { EventEmitter } from "events";

interface ClientOptions {
	apiUrl: string;
	apiKey: string;
}

export class Client extends WebClient {
	private _config: ClientOptions;
	public readonly e: EventEmitter;

	public constructor (config: ClientOptions) {
		super(config.apiUrl || "");
		this._config = config;
		this._setupConfig();
		this._validateConfig();

		this.e = new EventEmitter();

		return this;
	}

	private _setupConfig = () => {
		if(!this._config.apiUrl) throw new Error("apiUrl was not passed to 'new <Aeneas>.Client()'");
		if(!this._config.apiKey) throw new Error("apiKey was not passed to 'new <Aeneas>.Client()'");

		
	}

	private _validateConfig = async () => {
		const apiResponse = await this.instance.post(`http://${this._config.apiUrl}:4545`).catch(err => {
			throw new Error(err);
		});
	}
}
