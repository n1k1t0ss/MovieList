# MovieList
Sample project that shows movies basic on public API.

Application is automatically deployed by Azure static web app, listening master brunch, and located on https://red-tree-01aa01103.azurestaticapps.net

## Objective
Create a movie listing app using Vue.js. The app must retrieve a list of movies from the mock
API and render them.
## User stories
1. I want to see a list of movies from the provided API (see notes below)
2. Each item shows the movie title, year and IMDB id
3. I can browse the list using pagination (10 items per page)
4. I can search for movies by title
5. I can star/unstar a move from the list and keep starred ones in a “Favourites” section
## Requirements
- The app must be written in Vue 2 using the Composition API plugin or in Vue 3
- Components must be implemented using the Composition API
- All scripts must be written using TypeScript
- Essential features of the app must be testable with automated unit and end-to-end tests
- The result must be published in a public Github repository
## Mock API
https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}&page=${page}


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
