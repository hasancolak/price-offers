<template>
  <div class="page-not-found">
    <v-card>
      <v-img class="page-not-found__image" :src="PageNotFoundImage" alt="page not found"></v-img>
    </v-card>
    <br/>
    <v-row>
      <v-col cols="24" align="center" justify="space-around">
        <v-btn depressed color="primary" href="/">
          Back to home page
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageNotFoundImage from "@/assets/images/404.png";

export default {
  name: "PageNotFound",
  data() {
    return {
      PageNotFoundImage
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

.page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  &__image {
    display: block;
    margin: auto;
    max-width: 1200px;
  }
  .primary {
    background-image: linear-gradient(45deg, #540c32 0%, #b71a69 100%);
    background-color:none;
    border-color:none;

  }
}
</style>
