<template>
  <div class=" flex flex-col items-center gap-2">
    <film-card v-for="film in movieStore.movies" :key="film.id" :film="film" />
  </div>
</template>

<script setup>
import FilmCard from '~/components/FilmCard.vue';
import { FILMS_FILTERS, FILMS_URL } from '~/constants';
import { useMovieStore } from '~/store/MoviesStore';
const movieStore = useMovieStore()

const { data } = await useFetch(FILMS_URL, {
  params: { ...FILMS_FILTERS, page: 1 }
})
movieStore.setMovies(data.value.results)

</script>

<style lang="scss" scoped></style>