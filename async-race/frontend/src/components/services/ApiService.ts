export class ApiService {
    private static API_URL = 'http://127.0.0.1:3000';

    static async get<T>(endpoint: string, params?: Record<string, string | number>): Promise<T> {
        const url = new URL(`${ApiService.API_URL}/${endpoint}`);
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.append(key, String(value));
            });
        }
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`failed to fetch ${url.toString()}`);
            }
            return (await response.json()) as Promise<T>;
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error('[GET] failed to fetch');
        }
    }

    static async post<T>(endpoint: string, data: T): Promise<T> {
        try {
            const response = await fetch(`${ApiService.API_URL}/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`failed to fetch ${ApiService.API_URL}/${endpoint}`);
            }

            return (await response.json()) as Promise<T>;
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error('[POST] failed to fetch');
        }
    }

    static async put<T>(endpoint: string, data: T): Promise<T> {
        try {
            const response = await fetch(`${ApiService.API_URL}/${endpoint}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`failed to fetch ${ApiService.API_URL}/${endpoint}`);
            }

            return (await response.json()) as Promise<T>;
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error('[PUT] failed to fetch');
        }
    }

    static async patch<T>(endpoint: string, data: T): Promise<T> {
        try {
            const response = await fetch(`${ApiService.API_URL}/${endpoint}`, {
                method: 'PATCH',
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const responseBody = await response.json();
                if (response.status === 429 || response.status === 500) {
                    return Promise.reject(responseBody.message);
                }
                throw new Error(`failed to fetch ${ApiService.API_URL}/${endpoint}`);
            }
            return (await response.json()) as Promise<T>;
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error('[PATH] failed to fetch');
        }
    }

    static async delete(endpoint: string): Promise<void> {
        try {
            const response = await fetch(`${ApiService.API_URL}/${endpoint}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`failed to fetch ${ApiService.API_URL}/${endpoint}`);
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error('[DELETE] failed to fetch');
        }
    }
}
