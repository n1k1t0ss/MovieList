import { ref, onMounted } from 'vue'
import { IMovie } from '@/types/movie';

export default function useUserRepositories() {
    const favourites = ref<IMovie[]>([]);

    const getFavourites = () => {
        const loadedFavourites = localStorage.getItem('myFavourites');
        if (loadedFavourites != null) {
            console.log('test:', favourites, JSON.parse(loadedFavourites));
            favourites.value = JSON.parse(loadedFavourites) as IMovie[];
        }
    };

    onMounted(getFavourites);

    const setFavourite = (movie: IMovie) => {
        const favouriteIndex = favourites.value.findIndex((f) => f.imdbID == movie.imdbID);
        if (favouriteIndex < 0) {
            favourites.value.push(movie);
        } else {
            favourites.value.splice(favouriteIndex, 1);
        }
        localStorage.setItem('myFavourites', JSON.stringify(favourites.value));
    };

    return {
        favourites,

        setFavourite
    }
}