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
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TheToolbar from '@/components/TheToolbar.vue';
import TheSettingsSidebar from '@/components/TheSettingsSidebar.vue';

const settingsDrawer = ref(false);

</script>
