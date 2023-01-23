<template>
  <v-container class="px-0" fluid>
    <v-radio-group :label="label" :value="value">
      <v-radio
        v-for="option in options"
        :key="option.value"
        :label="option.text"
        :value="option.value"
      ></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['options', 'label', 'value'],
});
</script>
