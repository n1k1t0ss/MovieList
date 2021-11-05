import { IMovie } from ".";
export interface IMovieList {
    page: number;
    total_pages: number;
    data: IMovie[];
}