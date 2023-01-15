<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <v-row v-for="input in companyForm" :key="input.key">
        <TextField
          v-if="input.type === 'textField'"
          :label="input.label"
          :placeholder="input.placeholder"
          :value="input.value"
          @updateFormValue="updateFormValue($event, input.key)"
        />

        <SelectField
          v-else-if="input.type === 'selectField'"
          :items="input.items"
          :label="input.label"
          @updateFormValue="updateFormValue($event, input.key)"
        />

        <RadioGroup
          v-else-if="input.type === 'radioGroup'"
          :items="input.items"
          :label="input.label"
          :uniqueKey="input.key"
          @updateFormValue="updateFormValue($event, input.key)"
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

export default Vue.extend({
  name: 'DynamicForm',
  components: { TextField, SelectField, RadioGroup },
  props: {
    companyForm: {
      type: Array as PropType<Array<FormElements>>,
      required: true,
    },
  },
  data() {
    return {
      isFormValid: false,
    };
  },
  methods: {
    updateFormValue(value: string, key: string) {
      this.$store.commit('companies/testMutation', { key, value });
    },
  },
});
</script>

<style lang="scss" scoped></style>
