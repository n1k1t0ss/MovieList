import { Ref, ref, onMounted } from 'vue'
import { IMovieList, IMovie } from '@/types/movie';
import MoviesApi from '@/services/moviesApi';

export default function useMovies(favourites: Ref<IMovie[]>) {

    const movies = ref<IMovieList>({ page: 0, total_pages: 0, data: [] });
    const currentPage = ref(1);
    const searchText = ref('');
    const moviesApi = new MoviesApi();

    const loadMovies = async () => {
        const loadedMovies = await moviesApi.getMovies(currentPage.value, searchText.value);
        loadedMovies.data.forEach((movie) => {
            movie.isFavourite = favourites.value.some((f) => f.imdbID == movie.imdbID);
        });
        movies.value = loadedMovies;
    };

    onMounted(loadMovies);

    const onFavouriteClick = (imdbID: string) => {
        const findedMovie = movies.value.data.find((m) => m.imdbID === imdbID);
        if (findedMovie == null) {
            return;
        }

        findedMovie.isFavourite = !findedMovie.isFavourite;
    };

    const loadPage = async (page: number) => {
        currentPage.value = page;
        await loadMovies();
    };

    const search = async () => {
        currentPage.value = 1;
        await loadMovies();
    };

    return {
        movies,
        currentPage,
        searchText,

        loadPage,
        search,
        onFavouriteClick
    };
}