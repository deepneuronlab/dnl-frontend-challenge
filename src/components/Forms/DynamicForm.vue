<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid> </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DynamicForm',
  components: {},
  props: {},
  data() {
    return {
      isFormValid: false,
    };
  },
});
</script>

<style lang="scss" scoped></style>
