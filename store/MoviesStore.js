import { defineStore } from "pinia";
import { ref } from "vue";
import { FILMS_FILTERS, FILMS_URL } from "~/constants";
export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([]);
  const getMovies = async (page = 1) => {
    const data = await $fetch(`${FILMS_URL}`, {
      params: { ...FILMS_FILTERS, page },
    });
    movies.value = data.results;
  };
  const setMovies = (films) => {
    movies.value = films;
  };
  return { movies, getMovies, setMovies };
});
