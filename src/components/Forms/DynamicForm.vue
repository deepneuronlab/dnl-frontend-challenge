<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid> 
      <div v-for="formInput in formStructure" v-bind:key="formInput.type">
        <component :is="formInput.type" :model="formModel" :inputType="formInput"/>
      </div>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import { PropType } from 'vue';
import { CompanyForm, Company} from '@/store/companies-types';
import TextField from './TextField.vue';
import RadioGroup from './RadioGroup.vue';
import SelectField from './SelectField.vue';

export default Vue.extend({
  name: 'DynamicForm',
  components: {
    TextField,
    RadioGroup,
    SelectField,
  },
  props: {
    formStructure: {
      type: Array as PropType<CompanyForm>,
      required: true,
    },
    formModel:
    {
      type: Object as PropType<Company>,
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
