<template>
  <v-container fluid class="main-container fill-height flex-start">
    <v-flex align-self-start>
      <slot></slot>
    </v-flex>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MainContainer',
  props: {},
});
</script>

<style lang="scss" scoped>
.main-container {
  background-color: #f2f2f2 !important;
  padding: 64px 32px 0;
}
</style>
