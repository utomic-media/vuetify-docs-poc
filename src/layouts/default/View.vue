<template>
  <TheToolbar
    :modelValue="settingsDrawer"
    @update:modelValue="((newValue: boolean) => settingsDrawer = newValue)"
  >

    <template #extension v-if="childRoutes">
      <v-tabs
        v-model="currentPage"
        align-tabs="center"
        class="subpage-tabs"
      >
        <v-tab
          v-for="(route, index) in childRoutes"
          :key="index"
          :value="index"
          class="text-capitalize text-grey-darken-2"
          selected-class="selected-subpage"
          :to="route.path"
        >
          {{ route.name }}
        </v-tab>
      </v-tabs>
    </template>
  </TheToolbar>

  <TheSettingsSidebar
    :modelValue="settingsDrawer"
    @update:modelValue="((newValue: boolean) => settingsDrawer = newValue)"
  />


  <v-main>
    <div class="page-layout">
      <div>
        <TheMenuSidebar class="stick-to-menu" />
      </div>
      <router-view />
      <div>
        <h2 class="text-subtitle-1 font-weight-bold stick-to-menu">Table of Contents</h2>
      </div>
    </div>
  </v-main>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import TheToolbar from '@/components/TheToolbar.vue';
import TheSettingsSidebar from '@/components/TheSettingsSidebar.vue';
import TheMenuSidebar from '@/components/TheMenuSidebar.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const settingsDrawer = ref(false);
const currentPage = ref(null);

const childRoutes = computed(() => {
  const lastMatchedRoute = route.matched[1]; // the subpages of the main-page
  return lastMatchedRoute.children || []
});

</script>

<style scoped lang="scss">
.page-layout {
  display: grid;
  grid-template-columns: 2fr 7.5fr 1.5fr;
  gap: 2rem;
}


.subpage-tabs {
  :deep(.v-btn) {
    &:hover {
      font-weight: bold;
      color: inherit !important;
      .v-btn__overlay {
        background: none;
      }
    }
    // color: inherit !important;
  }
  .selected-subpage {
    color: inherit !important;
    font-weight: bold;
  }
}

.stick-to-menu {
  position: sticky;
  top: 136px; // height of header
}
</style>
