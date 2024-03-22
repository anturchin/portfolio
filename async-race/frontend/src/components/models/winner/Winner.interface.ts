import { Winner } from './Winner';

export interface IWinnerApiResponse {
    cars: Winner[];
    totalCount?: number;
}
