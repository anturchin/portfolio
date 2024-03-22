import { ICar } from '../../models/car/Car.interface';
import { ApiService } from '../ApiService';

export class GarageService {
    static async getCars(page?: number, limit?: number): Promise<ICar[]> {
        const params: Record<string, number> = {};
        if (page && limit) {
            params.page = page;
            params.limit = limit;
        }
        return ApiService.get('garage', params);
    }

    static async getCar(id: number): Promise<ICar> {
        return ApiService.get(`garage/${id}`);
    }

    static async createCar(car: ICar): Promise<ICar> {
        return ApiService.post('garage', car);
    }

    static async deleteCar(id: number): Promise<void> {
        ApiService.delete(`garage/${id}`);
    }

    static async updateCar(car: ICar): Promise<ICar> {
        return ApiService.put('garage', car);
    }
}
