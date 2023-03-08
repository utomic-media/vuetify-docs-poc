<template>
  <div class="">
    <h1>{{ route.name }}</h1>
    <v-tabs
      :value="pageTabs"
      align-tabs="center"
      class="page-tabs"
    >
      <v-tab value="overview" to="./overview">Overview</v-tab>
      <v-tab value="usage" to="./usage">Usage</v-tab>
      <v-tab value="api" to="./api">API</v-tab>
      <v-tab value="examples" to="./examples">Examples</v-tab>
    </v-tabs>

  </div>
</template>



<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pageTabs = computed(() => {
  return route.params.tab || 'overview';
});
</script>



<style scoped lang="scss">
.page-tabs {
  background-color: rgba(var(--v-theme-primary), 0.075);
}
</style>
