import { Car } from '../../models/car/Car';
import { ICarApiResponse } from '../../models/car/Car.interface';
import { ApiService } from '../ApiService';

export class GarageService {
    static async getCars(
        page?: number,
        limit?: number
    ): Promise<ICarApiResponse> {
        const params: Record<string, number> = {};
        if (page && limit) {
            params.page = page;
            params.limit = limit;
        }
        return ApiService.get('garage', params);
    }

    static async getCar(id: number): Promise<Car> {
        return ApiService.get(`garage/${id}`);
    }

    static async createCar(car: Car): Promise<Car> {
        return ApiService.post(`garage/${car.id}`, car);
    }

    static async deleteCar(id: number): Promise<void> {
        ApiService.delete(`garage/${id}`);
    }

    static async updateCar(car: Car): Promise<Car> {
        return ApiService.put(`garage/${car.id}`, car);
    }
}
