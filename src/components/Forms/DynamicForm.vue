<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <div v-for="formElement in formStructure" :key="formElement.key">
        <DynamicInput
          :inputValue="inputValues[formElement.key]"
          @onInputChange="value => handleInputChange(value, formElement.key)"
          :formElement="formElement"
        />
      </div>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import DynamicInput from '../Inputs/DynamicInput.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'DynamicForm',
  components: { DynamicInput },
  props: ['formStructure', 'id', 'inputValues'],
  watch: {
    isFormValid(value) {
      this.$emit('onFormValidate', value);
    },
  },
  methods: {
    handleInputChange(inputValue: string, key: string) {
      this.$emit('onFormElementChange', { ...this.inputValues, [key]: inputValue });
    },
  },
  data() {
    return {
      isFormValid: false,
    };
  },
});
</script>

<style lang="scss" scoped></style>
