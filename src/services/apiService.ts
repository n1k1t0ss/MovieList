import axios, { AxiosInstance } from 'axios';
import { IMovieList } from "@/types/movie";

export default class ApiService {
    private apiClient: AxiosInstance;

    constructor() {
        this.apiClient = axios.create({
            baseURL: `https://jsonmock.hackerrank.com/api/`,
            withCredentials: false,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    async getMovies(page = 1): Promise<IMovieList> {
        const response = await this.apiClient.get(`movies/search/?page=${page}`);
        return response.data;
    }

    async findMovie(title: string, page = 1): Promise<IMovieList> {
        const response = await this.apiClient.get(`movies/search/?title=${title}&page=${page}`);
        return response.data;
    }

}