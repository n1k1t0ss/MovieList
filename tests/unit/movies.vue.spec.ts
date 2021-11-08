import { shallowMount } from '@vue/test-utils';
import Movies from '@/components/movies-list/Movies.vue';
import { IMovie, IMovieList } from '@/types/movie';

describe('Movies.vue', () => {
  const factory = (movies: IMovie[]) => {
    return shallowMount(Movies, {
      props: { movies }
    });
  }

  const emptyMovies = [] as IMovie[];

  it('shows "no movies" when empty', () => {
    const wrapper = factory(emptyMovies);
    expect(wrapper.find('.no-movies').exists()).toBeTruthy();
    expect(wrapper.find('.movie-contaner').exists()).toBeFalsy();
  })

  const singleMovie = [{
    Title: "movie-1",
    Year: 2020,
    imdbID: "tt123",
    isFavourite: false
  }];

  it('renders list', () => {
    const wrapper = factory(singleMovie);
    expect(wrapper.find('.no-movies').exists()).toBeFalsy();
    expect(wrapper.find('.movie-contaner').exists()).toBeTruthy();
  })

  it('match movie header', () => {
    const wrapper = factory(singleMovie);
    expect(wrapper.find('.movie-title').text()).toMatch(singleMovie[0].Title);
    expect(wrapper.find('.movie-year').text()).toMatch(singleMovie[0].Year.toString());
  })

  it('adding to favourites should emit event', () => {
    const wrapper = factory(singleMovie);
    wrapper.find('.button-star').trigger('click')
    expect(wrapper.emitted().setFavourite).toBeTruthy();
  })

})