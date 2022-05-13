<template>
  <v-app-bar class="app-bar" absolute color="white">
    <v-toolbar-title>
      DNL App
    </v-toolbar-title>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppBar',
});
</script>

<style lang="scss" scoped>
.app-bar {
  box-shadow: 0px 3px 8px #00000014 !important;
}
</style>
