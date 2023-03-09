<template>
  <v-app>
    <TheToolbar
      :modelValue="settingsDrawer"
      @update:modelValue="((newValue: boolean) => settingsDrawer = newValue)"
    />

    <TheSettingsSidebar
      :modelValue="settingsDrawer"
      @update:modelValue="((newValue: boolean) => settingsDrawer = newValue)"
    />


    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TheToolbar from '@/components/TheToolbar.vue';
import TheSettingsSidebar from '@/components/TheSettingsSidebar.vue';

const settingsDrawer = ref(false);

</script>
