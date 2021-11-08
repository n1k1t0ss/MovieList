import { shallowMount } from '@vue/test-utils';
import MoviesPagination from '@/components/movies-list/MoviesPagination.vue';
import { IMovie } from '@/types/movie';

describe('MoviesPagination.vue', () => {

  const factory = (movies: IMovie[], page: number) => {
    return shallowMount(MoviesPagination, {
      props: { movies: { data: movies, page: page, total_pages: Math.ceil(movies.length / 10) } }
    });
  }

  const singleMovie = [{
    Title: "m-1",
    Year: 2020,
    imdbID: "tt1",
    isFavourite: false
  }
  ];

  it('render one button for single movie', () => {
    const wrapper = factory(singleMovie, 1);
    expect(wrapper.vm.paginationArray).toMatchObject([1]);
  })

  const movies100 = Array.from(Array(100), (_, i) => {
    return {
      Title: `m-${i}`,
      Year: i,
      imdbID: `tt-${i}`,
      isFavourite: false
    }
  });

  it('first page: render pagination-buttons for 100 movies', () => {
    const wrapper = factory(movies100, 1);
    expect(wrapper.vm.paginationArray).toMatchObject([1, 2, 3, 4, 10]);
  })

  it('second page: render pagination-buttons for 100 movies', () => {
    const wrapper = factory(movies100, 2);
    expect(wrapper.vm.paginationArray).toMatchObject([1, 2, 3, 4, 5, 10]);
  })

  it('5-th page: render pagination-buttons for 100 movies', () => {
    const wrapper = factory(movies100, 5);
    expect(wrapper.vm.paginationArray).toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, 10]);
  })

  it('last page: render pagination-buttons for 100 movies', () => {
    const wrapper = factory(movies100, 10);
    expect(wrapper.vm.paginationArray).toMatchObject([1, 7, 8, 9, 10]);
  })

  it('goto page should emit event', () => {
    const wrapper = factory(movies100, 1);
    wrapper.vm.gotoPage(5);
    expect(wrapper.emitted().loadPage.length).toBe(1);
    expect(wrapper.emitted().loadPage[0]).toEqual([5]);
  })

  it('goto page should not emmit event if page is incorrect', () => {
    const wrapper = factory(movies100, 1);
    wrapper.vm.gotoPage(-1);
    expect(wrapper.emitted().loadPage).toBeFalsy();
  })
})