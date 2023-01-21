<template><v-text-field :label="label" :placeholder="placeholder"></v-text-field></template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['label', 'placeholder'],
});
</script>
