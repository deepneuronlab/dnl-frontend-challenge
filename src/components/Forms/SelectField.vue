<template>
  <v-select
    :label="label"
    :items="items"
    :placeholder="placeholder"
    @input="e => $emit('input', e)"
    v-bind:value="value"
    :rules="rules"
    :required="required"
  ></v-select>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SelectField',
  components: {},
  props: {
    label: {
      type: String,
      required: false,
    },
    items: {
      type: Array,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      rules: [v => !!v],
    };
  },
  mounted() {
    console.log(this.value);
  },
});
</script>

<style lang="scss" scoped></style>
