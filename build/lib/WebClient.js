"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebClient = void 0;
const axios_1 = __importDefault(require("axios"));
class WebClient {
    constructor(baseURL) {
        this._initializeResponseInterceptor = () => {
            this.instance.interceptors.response.use(this._handleResponse, this._handleError);
        };
        this._handleResponse = ({ data }) => data;
        this._handleError = (error) => Promise.reject(error);
        this.instance = axios_1.default.create({
            baseURL
        });
        this._initializeResponseInterceptor();
    }
}
exports.WebClient = WebClient;