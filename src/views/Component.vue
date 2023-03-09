<template>
  <div class="">
    <div class="bg-grey-lighten-3 pa-4 d-flex flex-row justify-space-between">
      <div class="w-50">
        <h1>{{ route.name }}</h1>
        The <code>v-alert</code> component is used to convey important information to the user through the use of contextual types, icons, and colors.
      </div>
      <div class="w-50 ml-4">
        <v-img
          src="https://cdn.vuetifyjs.com/docs/images/components-temp/v-alert/v-alert-entry.png"
        />
      </div>
      </div>

    <!-- TODO: use nested router and page-transitions, after transition scroll until this tab is at top -->
    <v-tabs
      :value="pageTabs"
      align-tabs="center"
      class="page-tabs"
    >
      <v-tab value="overview" :to="{ params: {tab: 'overview'} }">Overview</v-tab>
      <v-tab value="usage" :to="{ params: {tab: 'usage'} }">Usage</v-tab>
      <v-tab value="api" :to="{ params: {tab: 'api'} }">API</v-tab>
    </v-tabs>

    <v-window v-model="pageTabs">
      <v-window-item value="overview">
        <h2>Overview</h2>
        <p class="font-weight-bold">Overview content:</p>
        <ul class="content-list">
          <li>Component image</li>
          <li>Description</li>
          <li>Usage with configurable demo</li>
          <li>Anatomy</li>
          <li>Accessibility</li>
        </ul>

        <div v-for="i in Array(5)" class="mt-5">
          <h2>LoremIpsum</h2>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </div>
      </v-window-item>

      <v-window-item value="usage">
        <h2>Usage</h2>
        <p class="font-weight-bold">Usage content:</p>
        <ul class="content-list">
          <li>Guide & Props explainations</li>
          <li>Examples</li>
        </ul>
      </v-window-item>

      <v-window-item value="api">
        <h2>API</h2>
        <p class="font-weight-bold">API content:</p>
        <ul class="content-list">
          <li>(Sub-)Component selection / menu</li>
          <li>API-Props / Events / Slots / SASS-Variables</li>
          <li>TODO: find optimisation for subcomponents</li>
        </ul>
      </v-window-item>
    </v-window>




  </div>
</template>



<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pageTabs = computed(() => {
  return route.params.tab || 'overview';
});
</script>



<style scoped lang="scss">
.page-tabs {
  background-color: #eff4fb; // rgba(var(--v-theme-primary), 0.075);
  // TODO: shrink on scroll
  position: sticky;
  top: 112px; // height of header
  z-index: 99;
}

ul.content-list {
  list-style-position: inside;
}
</style>
