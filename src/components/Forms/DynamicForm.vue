<template>
  <v-form class="dynamic-form" ref="elFormRef">
    <v-container fluid>
      <v-row v-for="input in formStructure" :key="input.key">
        <TextField
          v-if="input.type === 'textField'"
          :input="input"
          :error="formErrors[input.key]"
          :formData="formData"
        />

        <SelectField
          v-else-if="input.type === 'selectField'"
          :formData="formData"
          :error="formErrors[input.key]"
          :input="input"
        />

        <RadioGroup
          v-else-if="input.type === 'radioGroup'"
          :error="formErrors[input.key]"
          :formData="formData"
          :input="input"
        />
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import TextField from '@/components/UI/TextField.vue';
import SelectField from '@/components/UI/SelectField.vue';
import RadioGroup from '@/components/UI/RadioGroup.vue';
import { FormElements, FormRule } from '@/store/form-types';
import { CompanyArbitraryValues } from '@/store/companies-types';

export default Vue.extend({
  name: 'DynamicForm',
  components: { TextField, SelectField, RadioGroup },
  props: {
    formStructure: {
      type: Array as PropType<Array<FormElements>>,
      required: true,
    },
    formData: {
      type: Object as PropType<CompanyArbitraryValues>,
      required: true,
    },
    formErrors: {
      type: Object as PropType<FormRule>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>
