<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid> 
      <div v-for="formInput in formStructure" v-bind:key="formInput.type">
        <component :is="formInput.type" :model="formModel" :inpuType="formInput"/>
      </div>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import { PropType } from 'vue';
import { CompanyForm } from '@/store/companies-types';
import TextField from './TextField.vue';

export default Vue.extend({
  name: 'DynamicForm',
  components: {
    TextField,
  },
  props: {
    formStructure: {
      type: Array as PropType<CompanyForm>,
      required: true,
    },
    formModel:
    {
      type: Object,
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
