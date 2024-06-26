<template>
  <div class=" container max-w-3xl w-full flex flex-col">
    <the-header />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import TheHeader from '~/components/TheHeader.vue';

</script>

<style lang="scss" scoped></style>