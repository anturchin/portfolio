import { IEngineDriveModeResponse } from '../../models/engine/EngineDriveModeResponse';
import {
    EngineMode,
    EngineStatus,
} from '../../models/engine/EngineRequestParams';
import { IEngineStatusResponse } from '../../models/engine/EngineStatusResponse';
import { ApiService } from '../ApiService';

export class EngineService {
    static async startAndStop(
        id: number,
        status: EngineStatus
    ): Promise<IEngineStatusResponse> {
        try {
            const response = await ApiService.patch('engine', { id, status });

            if ('velocity' in response && 'distance' in response) {
                return response as IEngineStatusResponse;
            }
            throw new Error('Unexpected response format');
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error('Failed to start/stop engine');
        }
    }

    static async switchEngineToDrive(
        id: number,
        status: EngineMode
    ): Promise<IEngineDriveModeResponse> {
        try {
            const response = await ApiService.patch('engine', { id, status });
            if ('success' in response) {
                return response as IEngineDriveModeResponse;
            }
            throw new Error('Unexpected response format');
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error('Failed to switch engine to drive mode');
        }
    }
}
