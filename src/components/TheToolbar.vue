<template>
  <v-toolbar color="white" class="toolbar">
    <template #prepend>
      <router-link to="/">
        <v-img
          src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
          alt="Vuetify Logo"
          width="150"
          height="auto"
          to="/"
        />
      </router-link>

      <v-select
        class="version-selection ml-3"
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
        :href="menuItem.href"
        :target="menuItem.target"
        variant="text"
        color="grey-darken-4"
        class="text-capitalize"
        :class="(index !== 0) ? 'ml-2' : ''"
      >
        {{ menuItem.text }}
      </v-btn>
    </div>



    <template #append>
      <!-- TODO: remove hover background -->
      <!-- TODO: if page !== home: display search input -->
      <v-btn icon="mdi-magnify" color="grey-darken-4" variant="text" />
      <v-btn icon="mdi-github" color="grey-darken-4" variant="text" />
      <v-btn
        icon="mdi-cog-outline"
        color="grey-darken-4"
        variant="text"
        @click.stop="$emit('update:modelValue', !modelValue)"
      />
    </template>

    <template #extension v-if="$slots['extension']">
      <slot name="extension" />
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
  // { text: 'Components', to: '/components' },
  { text: 'Templates', to: '/templates' },
  { text: 'Support', to: '/support' },
  { text: 'Playground', href: 'https://play.vuetifyjs.com/', target: '_blank' }
]);

</script>



<style scoped lang="scss">

.toolbar {
  // TODO: shrink on scroll
  position: sticky;
  top: 0;
  z-index: 99;
}

:deep(.version-selection) {
  --v-input-control-height: auto;

  .v-input__details {
    display: none;
  }
  .v-field.v-field--appended {
    --v-field-padding-end: 0px;
  }
  .v-field--appended {
    padding-inline-end: 4px;
  }
  .v-field__outline {
    --v-field-border-width: 0px; // remove outline (alternative: variant = plain, but this has a weird alignment!)
  }

  .v-field__input {
    --v-field-padding-start: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .v-field__append-inner {
    padding-top: 4px;
  }

  .v-input--density-compact {
    height: 32px;
  }
}

:deep(.v-toolbar__extension) {
  justify-content: center;
  margin-bottom: 1.5rem;
}
</style>
