<template>
  <div class="welcome-hero text-white">
    <v-img src="@/assets/Vuetify-Header.jpg">
      <div class="hero-wrapper mt-n6">
        <div class="hero-content">
          <v-chip class="font-weight-bold">For Vue.js 3</v-chip>
          <h1 class="mt-4 d-flex flex-column text-h2 font-weight-bold">
            <span>Vue Component</span><span>Framework</span>
          </h1>
          <p class="mt-4 text-h6 font-weight-regular">Vuetify is a no design skills required UI Library with beautifully handcrafted Vue Components.</p>
          <div class="d-flex flex-row mt-4">
            <v-defaults-provider :defaults="actionButtonDefaults">
              <v-btn
                append-icon="mdi-chevron-right"
                class="text-subtitle-1 text-uppercase"
                to="/getting-started/installation"
              >
                Get started
              </v-btn>
              <v-btn
                variant="text"
                class="ml-4"
                append-icon="mdi-chevron-right"
              >
                View on Github
              </v-btn>
            </v-defaults-provider>
          </div>
        </div>
      </div>
    </v-img>
  </div>

  <v-container>
    <v-row>
      <v-col cols="12" align="center" class="gradient-headline pt-16 pb-10">
        <h2 class="text-h4 w-75 font-weight-medium">60+ Components help you to develop and ship your Vue.js sites faster</h2>
      </v-col>
    </v-row>

    <v-row class="feature-cards">
      <v-defaults-provider :defaults="cardIconDefaults">
        <v-col cols="4">
          <v-card class="h-100">
            <v-icon icon="mdi-scale-balance" class="ml-4 mt-4"/>
            <v-card-title>Versatile components</v-card-title>
            <v-card-text>Build your application with our extensive collection of components based on the material style guidelines, but customizable for your needs.</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="h-100">
            <v-icon icon="mdi-speedometer" class="ml-4 mt-4"/>
            <v-card-title>Performant</v-card-title>
            <v-card-text>Vuetify components are build with speed in mind. Due to is's treeshake support your prouction bundle will only contain the used components.</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="h-100">
            <v-icon icon="mdi-vuetify" class="ml-4 mt-4" />
            <v-card-title>Prooved and loved</v-card-title>
            <v-card-text>With more than 6 years experience in building a Vue.js component library we came across a lot of challanges. More than 450.000 weekly downloads speak for the results.</v-card-text>
          </v-card>
        </v-col>
      </v-defaults-provider>
    </v-row>


    <v-row>
      <v-col cols="12" align="center" class="gradient-headline pt-16 pb-10">
        <h2 class="text-h4 w-75 font-weight-medium">Some awesome visuals and previews</h2>
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="6">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </v-col>
      <v-col cols="6">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </v-col>
      <v-col cols="6">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>

const actionButtonDefaults = {
  VBtn: {
    rounded: 'pill',
    size: 'large',
    color: 'white',
    variant: 'outlined',
  },
};

const cardIconDefaults = {
  VIcon: {
    size: 'x-large',
  },
};

</script>


<style scoped lang="scss">
.welcome-hero {
  :deep(.v-responsive__content) {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    background: linear-gradient(54deg, rgba(0,0,0,0.3) 30%, rgba(0,112,255,0) 80%);

    .hero-wrapper {
      width: 100%;
      max-width: 900px;
      @include max-width;
      .hero-content {
        max-width: 40%;
      }
    }

  }
}

.v-container {
  display: grid;
  gap: 2rem;
}

.gradient-headline {
  background: -webkit-linear-gradient(210deg,rgb(24, 103, 192) 20%,rgb(123, 198, 255)); // Vuetify logo colors
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.feature-cards {
  .v-icon {
    border: 1px solid black;
    padding: 1.5rem;
    border-radius: 0.5rem;
  }
}
</style>
