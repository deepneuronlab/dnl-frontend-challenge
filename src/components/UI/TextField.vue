<template>
  <v-text-field :label="label" :placeholder="placeholder" type="text" clearable />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TextField',
  props: {
    label: { type: String, required: false },
    placeholder: { type: String, required: false, default: 'Type here...' },
  },
});
</script>

<style lang="scss" scoped></style>
