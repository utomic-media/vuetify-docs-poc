<template>
    <v-navigation-drawer
      v-model="isActive"
      location="right"
      width="350"
    >
      <v-container>
        <v-card-title>Settings</v-card-title>

        <v-card-text class="mt-2">
          <div>
            <div class="text-subtitle-1 font-weight-bold text-undefined mb-1 ps-1">
              Theme
            </div>
              <v-defaults-provider :defaults="btnToggleDefaults">
                <v-btn-toggle
                  v-model="theme"
                  class="theme-selection"
                >
                  <v-btn value="light" prepend-icon="mdi-white-balance-sunny">
                    Light
                  </v-btn>

                  <v-btn value="dark" prepend-icon="mdi-weather-night">
                    Dark
                  </v-btn>

                  <v-btn value="system" prepend-icon="mdi-cellphone-link">
                    System
                  </v-btn>
                </v-btn-toggle>
              </v-defaults-provider>
          </div>

          <div class="mt-6">
            <div class="text-subtitle-1 font-weight-bold text-undefined mb-1 ps-1">
              Mixed Theme
            </div>
            <div class="ps-1">A mixed theme // TODO: explain mixed </div>
            <v-checkbox label="Mixed" class="theme-mixed-checkbox" density="compact" color="primary" />
          </div>

          <div class="mt-6">
            <div class="text-subtitle-1 font-weight-bold text-undefined mb-1 ps-1">
              Direction
            </div>
            <v-defaults-provider :defaults="btnToggleDefaults">
              <v-btn-toggle
                v-model="direction"
                divided
                class="theme-selection"
              >

                  <v-btn value="ltr" prepend-icon="mdi-format-pilcrow-arrow-right">
                    LTR
                  </v-btn>

                  <v-btn value="rtl" prepend-icon="mdi-format-pilcrow-arrow-left">
                    RTL
                  </v-btn>

              </v-btn-toggle>
            </v-defaults-provider>
          </div>

          <div class="mt-6">
            <div class="text-subtitle-1 font-weight-bold text-undefined mb-1 ps-1">
              Language
            </div>
            <v-select
              label=""
              :items="availableLanguages"
              v-model="language"
              class="language-selection"
              variant="outlined"
              bg-color="transparent"
            />
          </div>

          <div class="mt-6">
            <div class="text-subtitle-1 font-weight-bold text-undefined mb-1 ps-1">
              Cache
            </div>
            <v-btn prepend-icon="mdi-delete-outline" color="error" variant="outlined">
              Clear cache
            </v-btn>
          </div>
        </v-card-text>
      </v-container>
    </v-navigation-drawer>
</template>



<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue']);

const isActive = computed({
  get() {
    return props.modelValue;
  },
  set() {
    emit('update:modelValue', !props.modelValue);
  }
});

const theme = ref('light');
const direction = ref('ltr');
const language = ref('english');
const availableLanguages = ref([
  { title: 'English', value: 'english' },
  { title: 'German', value: 'german' },
  { title: 'Portuguese', value: 'portuguese' },
  {title: 'More coming soon', value: null, disabled: true },
]);

const btnToggleDefaults = {
  VBtn: {
    // color: 'grey darken-4',
    variant: 'outlined',
    class: 'theme-selection-btn',
  },
  VBtnToggle: {
    divided: true,
    color: "primary",
    variant: "outlined",
  }
};

</script>



<style scoped lang="scss">

.theme-selection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: auto;

  button {
    padding-top: 12px; // equals p-3 utility class
    padding-bottom: 12px;
    text-transform: none;
  }
}

.language-selection {
  :deep(.v-input__details) {
    display: none;
  }
}

:deep(.theme-mixed-checkbox) {
  .v-input__details {
    display: none;
  }
}
</style>
