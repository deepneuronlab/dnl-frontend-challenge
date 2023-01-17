<template>
  <v-form class="dynamic-form" ref="elFormRef">
    <v-container fluid>
      <v-row v-for="input in formStructure" :key="input.key">
        <TextField
          v-if="input.type === 'textField'"
          :input="input"
          :error="formErrors[input.key]"
          @onChange="setFormValue"
        />

        <SelectField
          v-else-if="input.type === 'selectField'"
          :error="formErrors[input.key]"
          :input="input"
          @onChange="setFormValue"
        />

        <RadioGroup
          v-else-if="input.type === 'radioGroup'"
          :error="formErrors[input.key]"
          :input="input"
          @onChange="setFormValue"
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
import { FormRule } from '@/store/form-types';
import { CompanyForm } from '@/store/companies-types';
import { mapMutations, mapState } from 'vuex';

export default Vue.extend({
  name: 'DynamicForm',
  components: { TextField, SelectField, RadioGroup },
  props: {
    formErrors: {
      type: Object as PropType<FormRule>,
      required: true,
    },
  },
  methods: {
    ...mapMutations('companies', ['setFormValue']),
  },
  computed: {
    ...mapState({ companies: 'companies' }),
    formStructure: {
      get(): CompanyForm {
        return this.companies.companyForm;
      },
      set(value: CompanyForm): void {
        this.setFormValue(value);
      },
    },
  },
});
</script>

<style lang="scss" scoped></style>
