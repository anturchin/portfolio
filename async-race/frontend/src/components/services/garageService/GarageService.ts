import { Car } from '../../models/car/Car';
import { ICar } from '../../models/car/Car.interface';
import { ApiResponse } from '../Api.interface';
import { ApiService } from '../ApiService';

export class GarageService {
    static async getCars(
        page?: number,
        limit?: number
    ): Promise<ApiResponse<Car>> {
        const params: Record<string, number> = {};
        if (page && limit) {
            params.page = page;
            params.limit = limit;
        }
        return ApiService.get('garage', params);
    }

    static async getCar(id: number): Promise<{ data: Car }> {
        return ApiService.get(`garage/${id}`);
    }

    static async createCar(car: ICar): Promise<ICar> {
        return ApiService.post('garage', car);
    }

    static async deleteCar(id: number): Promise<void> {
        return ApiService.delete(`garage/${id}`);
    }

    static async updateCar(car: Car): Promise<Car> {
        return ApiService.put(`garage/${car.id}`, car);
    }
}
