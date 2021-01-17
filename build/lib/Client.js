"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const WebClient_1 = require("./WebClient");
class Client {
    constructor(config) {
        this._config = config;
        this._setupConfig();
        this._wc = new WebClient_1.WebClient(this._config.apiUrl);
    }
    _setupConfig() {
        console.log(`url: ${this._config.apiUrl}\nkey: ${this._config.apiKey}`);
        if (!this._config.apiUrl)
            throw new Error("apiUrl was not passed to 'new <Aeneas>.Client()'");
        if (!this._config.apiKey)
            throw new Error("apiKey was not passed to 'new <Aeneas>.Client()'");
    }
}
exports.Client = Client;
