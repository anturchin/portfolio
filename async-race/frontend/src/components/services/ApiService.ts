import { EngineStatus } from '../models/engine/EngineRequestParams';

export class ApiService {
    private static API_URL = 'http://127.0.0.1:3000';

    static async get<T>(
        endpoint: string,
        params?: Record<string, string | number>
    ): Promise<{ data: T; totalCount?: string }> {
        const url = new URL(`${ApiService.API_URL}/${endpoint}`);
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.append(`_${key}`, String(value));
            });
        }
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const totalCount = response.headers.get('X-Total-Count');
            if (totalCount) {
                const data = await response.json();
                return { data, totalCount };
            }
            const data = await response.json();
            return { data };
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error(`[GET] failed to fetch ${url}`);
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
                throw new Error(response.statusText);
            }

            return (await response.json()) as Promise<T>;
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error(
                `[POST] failed to fetch ${ApiService.API_URL}/${endpoint}`
            );
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
                throw new Error(response.statusText);
            }

            return (await response.json()) as Promise<T>;
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error(
                `[PUT] failed to fetch ${ApiService.API_URL}/${endpoint}`
            );
        }
    }

    static async patch<T>(
        endpoint: string,
        data: { id: number; status: EngineStatus }
    ): Promise<T> {
        const url = new URL(`${ApiService.API_URL}/${endpoint}`);
        Object.entries(data).forEach(([key, value]) => {
            url.searchParams.append(`${key}`, String(value));
        });

        try {
            const response = await fetch(`${url}`, {
                method: 'PATCH',
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                if (response.status === 429) {
                    throw new Error(response.statusText);
                }
                if (response.status === 500) {
                    throw new Error(response.statusText);
                }
                throw new Error(response.statusText);
            }
            return (await response.json()) as Promise<T>;
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error(
                `[PATCH] failed to fetch ${ApiService.API_URL}/${endpoint}`
            );
        }
    }

    static async delete<T>(endpoint: string): Promise<T> {
        try {
            const response = await fetch(`${ApiService.API_URL}/${endpoint}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return (await response.json()) as Promise<T>;
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error(
                `[DELETE] failed to fetch ${ApiService.API_URL}/${endpoint}`
            );
        }
    }
}
