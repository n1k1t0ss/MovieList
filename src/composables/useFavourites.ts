import { ref, onMounted } from 'vue'
import { IMovie } from '@/types/movie';

export default function useFavourites() {
    const favourites = ref<IMovie[]>([]);
    const storageKey = "favourite-movies";

    const getFavourites = () => {
        const loadedFavourites = localStorage.getItem(storageKey);
        if (loadedFavourites != null) {
            favourites.value = JSON.parse(loadedFavourites) as IMovie[];
        }
    };

    onMounted(getFavourites);

    const setFavourite = (movie: IMovie) => {
        const favouriteIndex = favourites.value.findIndex((f) => f.imdbID == movie.imdbID);
        if (favouriteIndex < 0) {
            favourites.value.push({ ...movie, isFavourite: true });
        } else {
            favourites.value.splice(favouriteIndex, 1);
        }
        localStorage.setItem(storageKey, JSON.stringify(favourites.value));
    };

    return {
        favourites,

        setFavourite
    }
}