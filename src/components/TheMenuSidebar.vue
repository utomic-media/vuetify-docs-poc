<template>
  <div class="the-menu-sidebar">
    <v-list density="compact" class="pa-2">
      <v-list-item
        v-for="(route, index) in childRoutes"
        :key="index"
        :value="index"
        active-color="primary"
        :to="getPath(route.path)"
        :exact="getExact()"
      >

        <template #prepend v-if="route.meta?.icon">
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


const getPath = (path: string) => {
  if (path.endsWith(':tab?')) {
    return path.slice(0, -6);
  }
  return path;
}


const getExact = () => {
  if (route.path.endsWith(':tab?')) {
    return false;
  }

  return true;
}

</script>



<style scoped lang="scss">

.the-menu-sidebar {
  :deep(.v-list) {
    .v-list-item__prepend {
      .v-icon {
        margin-inline-end: 1rem;
        font-size: 1.25rem;
      }
    }
  }
}
</style>
