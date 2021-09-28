<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link class="header__logo" to="/">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="@/assets/logo.svg"
            transition="scale-transition"
            width="30"
          />
        </router-link>
        <v-toolbar-title>Price Offer For Flights</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
.v-toolbar.v-app-bar {
  background-image: linear-gradient(45deg, #540c32 0%, #b71a69 100%);
}

.v-toolbar {
  &__content {
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
