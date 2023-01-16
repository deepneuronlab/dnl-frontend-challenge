<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <v-row v-for="input in formStructure" :key="input.key">
        <TextField
          v-if="input.type === 'textField'"
          :label="input.label"
          :placeholder="input.placeholder"
          :required="input.required"
          :formData="formData"
          :inputKey="input.key"
        />

        <SelectField
          v-else-if="input.type === 'selectField'"
          :items="input.items"
          :label="input.label"
          :placeholder="input.placeholder"
          :required="input.required"
          :formData="formData"
          :inputKey="input.key"
        />

        <RadioGroup
          v-else-if="input.type === 'radioGroup'"
          :items="input.items"
          :label="input.label"
          :required="input.required"
          :formData="formData"
          :inputKey="input.key"
        />
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import TextField from '@/components/UI/TextField.vue';
import SelectField from '@/components/UI/SelectField.vue';
import RadioGroup from '@/components/UI/RadioGroup.vue';
import { PropType } from 'vue';
import { FormElements } from '@/store/form-types';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'DynamicForm',
  components: { TextField, SelectField, RadioGroup },
  props: {
    formStructure: {
      type: Array as PropType<Array<FormElements>>,
      required: true,
    },
    formData: {
      type: Object, required: true
    }
  },
  data() {
    return {
      isFormValid: false,
    };
  },
});
</script>

<style lang="scss" scoped></style>
