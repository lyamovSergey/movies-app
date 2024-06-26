<template>
  <div class=" flex border w-full p-3 rounded-lg items-start">
    <img class=" max-w-48 rounded-md" :src="`${IMAGE_URL}${film.poster_path}`" :alt="film.original_title">
    <div class=" flex flex-col pl-6 gap-3 ">
      <h3 class=" text-2xl font-bold">{{ film.original_title }}/{{ film.title }}</h3>
      <p v-html="film.overview"></p>
      <span class=" text-sm text-teal-900 font-semibold">{{ film.release_date }}</span>
    </div>
  </div>
</template>

<script setup>
import { IMAGE_URL } from '~/constants';

defineProps({
  film: {
    type: Object,
    required: true,
    default: () => { }
  }
})
</script>
