import { IEngineDriveModeResponse } from '../../models/engine/EngineDriveModeResponse';
import { EngineStatus } from '../../models/engine/EngineRequestParams';
import { IEngineStatusResponse } from '../../models/engine/EngineStatusResponse';
import { ApiService } from '../ApiService';

export class EngineService {
    static async startAndStop(
        id: number,
        status: EngineStatus
    ): Promise<IEngineStatusResponse> {
        return ApiService.patch('engine', { id, status });
    }

    static async switchEngineToDrive(
        id: number,
        status: EngineStatus
    ): Promise<IEngineDriveModeResponse> {
        return ApiService.patch('engine', { id, status });
    }
}
