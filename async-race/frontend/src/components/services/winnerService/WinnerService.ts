import { Winner } from '../../models/winner/Winner';
import { ApiResponse } from '../Api.interface';
import { ApiService } from '../ApiService';

export class WinnerService {
    static async getWinners(
        page?: number,
        limit?: number,
        sort?: string,
        order?: string
    ): Promise<ApiResponse<Winner>> {
        const params: Record<string, string | number> = {};
        if (page && limit) {
            params.page = page;
            params.limit = limit;
        }
        if (sort && order) {
            params.sort = sort;
            params.order = order;
        }
        return ApiService.get('winners', params);
    }

    static async getWinner(id: number): Promise<ApiResponse<Winner>> {
        return ApiService.get(`winners/${id}`);
    }

    static async createWinner(winner: Winner): Promise<Winner> {
        return ApiService.post('winners', winner);
    }

    static async deleteWinner(id: number): Promise<void> {
        ApiService.delete(`winners/${id}`);
    }

    static async updateWinner(winner: Winner): Promise<Winner> {
        return ApiService.put(`winners/${winner.id}`, winner);
    }
}
