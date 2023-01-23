<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <ol>
        <li v-for="field of formStructure" v-bind:key="{ name: field.label }">
          <DynamicField :field="field" :value="data ? data[field.key] : null" />
        </li>
      </ol>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import DynamicField from './FormFields/DynamicField.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'DynamicForm',
  components: { DynamicField },
  props: ['formStructure', 'data'],
  data() {
    return {
      isFormValid: false,
    };
  },
});
</script>

<style lang="scss" scoped></style>
