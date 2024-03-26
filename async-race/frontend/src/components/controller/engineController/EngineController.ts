import { IEngineDriveModeResponse } from '../../models/engine/EngineDriveModeResponse';
import { IEngineStatusResponse } from '../../models/engine/EngineStatusResponse';
import { EngineService } from '../../services/engineService/EngineService';
import { GarageController } from '../garageController/GarageMainController';
import { EngineStatus } from './types';

export class EngineController {
    private garageController: GarageController;

    constructor(garageController: GarageController) {
        this.garageController = garageController;
    }

    public async startEngine(id: number): Promise<IEngineStatusResponse> {
        try {
            const { distance, velocity } = await EngineService.startAndStop(
                id,
                EngineStatus.START
            );
            return { distance, velocity };
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error('[EngineController - stopEngine] failed to fetch');
        }
    }

    public async stopEngine(id: number): Promise<IEngineStatusResponse> {
        try {
            const { distance, velocity } = await EngineService.startAndStop(
                id,
                EngineStatus.STOP
            );
            return { distance, velocity };
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error('[EngineController - stopEngine] failed to fetch');
        }
    }

    public async driveEngine(id: number): Promise<IEngineDriveModeResponse> {
        try {
            const { success } = await EngineService.switchEngineToDrive(
                id,
                EngineStatus.DRIVE
            );
            return { success };
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            throw new Error('[EngineController - driveEngine] failed to fetch');
        }
    }
}
