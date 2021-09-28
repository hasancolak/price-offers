<template>
  <div class="filter-group">
    <v-select  :items="options" :label="label" v-model="selectedOption"  @change="$emit('change', selectedOption)"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "Select",
  model: {
    prop: "selectedOption",
    event: "change"
  },
  data() {
    return {
      selectedOption: null
    };
  },
  props: {
    options: {
      type: Array
    },
    label: {
      type: String
    }
  }
};
</script>
