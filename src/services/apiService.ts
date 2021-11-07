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

    async getMovies(page = 1, title = ""): Promise<IMovieList> {
        const titleQuery = title !== '' ? `&Title=${title}` : '';
        const response = await this.apiClient.get(`movies/search/?page=${page}${titleQuery}`);
        return response.data;
    }

}