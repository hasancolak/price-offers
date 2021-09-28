<template>
  <div class="filter-container">
    <v-row>
      <v-col cols="6">
        <Select
          :options="filters.origin"
          label="Origin"
          tabindex="0"
          v-model="filterPriceOffer.selectedOrigin"
        />
      </v-col>
      <v-col cols="6">
        <Select
          :options="filters.destination"
          label="Destination"
          tabindex="1"
          v-model="filterPriceOffer.selectedDestination"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Select from "@/components/forms/select";
import { SHOW_ALL } from "@/common/constant";

export default {
  name: "filters",
  components: {
    Select
  },
  data() {
    return {
      filterPriceOffer: {
        selectedOrigin: SHOW_ALL,
        selectedDestination: SHOW_ALL
      }
    };
  },
  props: {
    filters: {
      type: Object
    }
  },
  watch: {
    filterPriceOffer: {
      handler(newValue) {
        this.$store.commit("priceOfferStore/setPriceOffers", newValue);
      },
      deep: true
    }
  }
};
</script>
