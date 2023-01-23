<template
  ><v-text-field :label="label" :placeholder="placeholder" :value="value"></v-text-field
></template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['label', 'placeholder', 'value'],
});
</script>
