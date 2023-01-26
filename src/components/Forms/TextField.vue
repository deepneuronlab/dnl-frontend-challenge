<template>
  <v-text-field
    :label="label"
    :placeholder="placeholder"
    @input="e => $emit('input', e)"
    v-bind:value="value"
    :rules="rules"
    :required="required"
  />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TextField',
  components: {},
  props: {
    label: {
      type: String,
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
      rules: [v => !!v || 'Required'],
    };
  },
});
</script>

<style lang="scss" scoped></style>
