<template>
  <div class="the-menu-sidebar">
    <v-list density="compact">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        active-color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title>
          {{ item.text }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>



<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
  { text: 'Real-Time', icon: 'mdi-clock' },
  { text: 'Audience', icon: 'mdi-account' },
  { text: 'Conversions', icon: 'mdi-flag' },
]);
</script>



<style scoped lang="scss">
</style>
