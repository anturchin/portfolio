import { Car } from './Car';

export interface ICarApiResponse {
    cars: Car[];
    totalCount?: number;
}
