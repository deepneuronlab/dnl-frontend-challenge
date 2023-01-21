<template><v-select :items="options" :label="label"></v-select></template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['options', 'label'],
});
</script>
