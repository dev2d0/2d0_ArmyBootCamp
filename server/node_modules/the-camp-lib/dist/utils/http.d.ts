export interface HttpRequestOptions {
    readonly method: 'GET' | 'POST';
    readonly uri?: string;
    readonly url?: string;
    readonly headers?: any;
    readonly form?: any;
    readonly json?: boolean;
}
export interface HttpResponse {
    headers: any;
    statusCode: number;
    statusMessage: string;
    body: any;
}
export declare const request: (requestOption: HttpRequestOptions) => Promise<HttpResponse>;
