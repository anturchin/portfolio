export class FileLoaderService {
    static async loadJSON<T>(url: string): Promise<T> {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('failed to load date');
            }
            return (await response.json()) as T;
        } catch (error) {
            if (error instanceof Error) {
                console.error(`error loading JSON: ${error.message}`);
            }
            throw new Error('failed to load date');
        }
    }
}
