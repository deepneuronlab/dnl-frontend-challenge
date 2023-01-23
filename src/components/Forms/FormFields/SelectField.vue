<template><v-select :items="options" :label="label" :value="value"></v-select></template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['options', 'label', 'value'],
});
</script>
