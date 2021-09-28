<template>
  <v-container>
    <v-content>
      <filters :filters="filterList" />
      <v-row>
        <v-col cols="24">
          <div class="list" infinite-scroll-distance="800" v-infinite-scroll="loadMore">
            <div class="list__item" v-for="item in displayedPriceOffers" tabindex="0" :key="item.uuid">
              <v-card>
                <v-card-text class="gallery__item__text">
                  <span>Origin</span>
                  <span>{{ item.origin }}</span>
                </v-card-text>
                <v-card-text class="gallery__item__text">
                  <span>Destination</span>
                  <span>{{ item.destination }}</span>
                </v-card-text>
                <v-card-text class="gallery__item__text">
                  <span>Departure Date</span>
                  <span>{{ item.departureDate }}</span>
                </v-card-text>
                <v-card-text class="gallery__item__text">
                  <span>Return Date</span>
                  <span>{{ item.returnDate }}</span>
                </v-card-text>
                <v-card-text class="gallery__item__text">
                  <span>Seat Availability</span>
                  <span>{{ item.seatAvailability }}</span>
                </v-card-text>
                <v-card-text class="gallery__item__text">
                  <span>Amount</span>
                  <span>{{ item.amount }}</span>
                </v-card-text>
                <v-card-text class="gallery__item__text">
                  <span>Currency</span>
                  <span>{{ item.currency }}</span>
                </v-card-text>
                <v-card-text class="gallery__item__text">
                  <span>Offer Type</span>
                  <span>{{ item.offerType }}</span>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-content>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { SHOW_ALL } from "@/common/constant";
import filters from "@/components/comman/filters";

export default {
  name: "PriceOffer",
  components: {
    filters
  },
  data() {
    return {
      displayedPriceOffers: [],
        filterList: {
          origin: [],
          destination: []
        }
    };
  },
  computed: {
    ...mapState({
      priceOffers: state => state.priceOfferStore.priceOffers,
      allPriceOffers: state => state.priceOfferStore.allPriceOffers
    })
  },
  methods: {
    loadMore() {
      const startIndex = this.displayedPriceOffers.length;
      this.displayedPriceOffers.push(...this.priceOffers.slice(startIndex, startIndex + 9));
      return this.displayedPriceOffers;
    }
  },
  created() {
    if (!this.priceOffers.length) {
      this.$store.dispatch("priceOfferStore/getPriceOffers");
    }
  },
  updated() {
    this.filterList.origin = [...[SHOW_ALL], ...new Set(this.allPriceOffers.map(item => item.origin))];
    this.filterList.destination = [...[SHOW_ALL], ...new Set(this.allPriceOffers.map(item => item.destination))];
  },
  watch: {
    priceOffers(priceOffers) {
     this.displayedPriceOffers = priceOffers.slice(0, 9);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

*,
*:before,
*:after {
  box-sizing: border-box;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 50px;
  margin: 0;

  &__item {
    position: relative;
    cursor: pointer;

    .v-card {
      background-image: linear-gradient(45deg, #540c32 0%, #b71a69 100%);
      box-shadow: 0 2px 8px 0 rgba(0,0,0,.24);
      padding:20px;

      &:hover {
          background-image: linear-gradient(45deg, #32001b 0%, #830343 100%);
      }
    }

    .v-card__text {
      padding: 5px 10px;

      span {
        color:#fff;
        width: 50%;
        display: inline-block;
      }

      span:first-child{
         font-size:12px;
      }

      span:first-child::after {
        content: ":";
        display: inline-block;
        float: right;
        padding-right: 15px;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .list {
    margin: 0 20px;

    &__item {
      &__img {
        width: none;
      }
    }
  }

  .col-6{
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
