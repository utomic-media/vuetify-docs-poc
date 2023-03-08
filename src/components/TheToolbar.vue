<template>
  <v-toolbar color="white">
    <template #prepend>
        <v-img
          src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
          alt="Vuetify Logo"
          width="150"
          height="auto"
        />

        <!-- TODO: make way smaller -->
        <v-select
          class="version-selection ml-2"
          model-value="v3.1.6"
          :items="['v3.1.6', 'v2.6.0', 'v1.5.0']"
          density="compact"
          variant="outlined"
          bg-color="grey-lighten-3"
        />
    </template>

    <div>
      <v-btn
        v-for="(menuItem, index) in mainMenu"
        :key="index"
        :to="menuItem.to"
        variant="text"
        color="grey-darken-4"
      >
        {{ menuItem.text }}
      </v-btn>
    </div>



    <template #append>
      <!-- TODO: remove hover background -->
      <v-btn icon="mdi-magnify" color="grey-darken-4" variant="text" />
      <v-btn icon="mdi-github" color="grey-darken-4" variant="text" />
      <v-btn
        icon="mdi-cog-outline"
        color="grey-darken-4"
        variant="text"
        @click.stop="$emit('update:modelValue', !modelValue)"
      />
    </template>
  </v-toolbar>

</template>



<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const mainMenu = ref([
  { text: 'Docs', to: '/docs' },
  { text: 'Components', to: '/components' },
  { text: 'Support', to: '/support' },
]);

</script>



<style scoped lang="scss">
.version-selection {
  :deep(.v-input__details) {
    display: none;
  }

  :deep(.v-field__outline) {
    --v-field-border-width: 0px; // remove outline (alternative: variant = plain, but this has a weird alignment!)
  }
}
</style>
