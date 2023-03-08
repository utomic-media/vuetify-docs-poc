<template>
  <header>
    <TheToolbar
      :modelValue="settingsDrawer"
      @update:modelValue="((newValue: boolean) => settingsDrawer = newValue)"
    />

    <TheSettingsSidebar
      :modelValue="settingsDrawer"
      @update:modelValue="((newValue: boolean) => settingsDrawer = newValue)"
    />
  </header>

  <v-main>
    <div class="page-layout">
      <TheMenuSidebar />
      <router-view />
      <h2 class="text-subtitle-1 font-weight-bold">Table of Contents</h2>
    </div>
  </v-main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TheToolbar from '@/components/TheToolbar.vue';
import TheSettingsSidebar from '@/components/TheSettingsSidebar.vue';
import TheMenuSidebar from '@/components/TheMenuSidebar.vue';

const settingsDrawer = ref(false);

</script>

<style scoped lang="scss">
.page-layout {
  display: grid;
  grid-template-columns: 2fr 7.5fr 1.5fr;
}
</style>
