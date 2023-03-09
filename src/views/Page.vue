<template>
  <div class="">
    <h1>{{ route.name }}</h1>
    <v-alert type="warning">
      This should be a full-page without the sidebars
    </v-alert>
  </div>
</template>



<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>



<style scoped lang="scss">
</style>

