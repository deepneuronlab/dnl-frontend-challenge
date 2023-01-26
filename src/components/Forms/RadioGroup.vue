<template>
  <v-radio-group
    :label="label"
    @change="e => $emit('input', e)"
    v-bind:value="value"
    :required="required"
    :rules="rules"
    row
  >
    <template v-for="item in items">
      <v-radio :label="item.text" :value="item.value" v-bind:key="item.value" />
    </template>
  </v-radio-group>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'RadioGroup',
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
});
</script>

<style lang="scss" scoped></style>
