<template>
  <div class="the-menu-sidebar">
    <v-list>
      <v-list-item
        v-for="(route, index) in childRoutes"
        :key="index"
        :value="index"
        active-color="primary"
        :to="route.path"
        :exact="true"
      >
        <template #prepend>
          <v-icon :icon="route.meta?.icon" />
        </template>

        <v-list-item-title>
          {{ route.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>



<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const items = ref([
  { text: 'Real-Time', icon: 'mdi-clock' },
  { text: 'Audience', icon: 'mdi-account' },
  { text: 'Conversions', icon: 'mdi-flag' },
]);
const route = useRoute();

const childRoutes = computed(() => {
  const lastMatchedRoute = route.matched[route.matched.length - 2]; // siblings-pages of the current page
  return lastMatchedRoute.children || [];
});
</script>



<style scoped lang="scss">
</style>
