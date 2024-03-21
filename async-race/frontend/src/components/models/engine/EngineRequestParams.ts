export type EngineStatus = 'started' | 'stopped';
export type EngineMode = 'drive';

export interface IEngineRequestParams {
    id: number;
    status: EngineStatus | EngineMode;
}
