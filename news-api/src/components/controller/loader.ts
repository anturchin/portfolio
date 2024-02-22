import { IOptions, TypeResp, IResponse, ICallback } from '../../types';

class Loader {
    private baseLink: string;
    private options: IOptions;

    constructor(baseLink: string, options: IOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: TypeResp,
        callback = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private async errorHandler(res: Response): Promise<IResponse> {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        const data = await res.json();
        return data as IResponse;
    }

    public makeUrl(options: IOptions, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private async load(method: string, endpoint: string, callback: ICallback, options: IOptions = {}): Promise<void> {
        try {
            const response = await fetch(this.makeUrl(options, endpoint), { method });
            const responseData = await this.errorHandler(response);
            callback(responseData);
        } catch (error) {
            console.error(error);
        }
    }
}

export default Loader;
