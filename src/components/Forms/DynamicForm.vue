<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <v-row v-for="input in formStructure" :key="input.key">
        <TextField
          v-if="input.type === 'textField'"
          :label="input.label"
          :placeholder="input.placeholder"
          :value="formValues[input.key]"
          :required="input.required"
          @onChange="updateFormValue($event, input.key)"
        />

        <SelectField
          v-else-if="input.type === 'selectField'"
          :items="input.items"
          :label="input.label"
          :placeholder="input.placeholder"
          :value="formValues[input.key] ? formValues[input.key] : ''"
          :required="input.required"
          @onChange="updateFormValue($event, input.key)"
        />

        <RadioGroup
          v-else-if="input.type === 'radioGroup'"
          :items="input.items"
          :label="input.label"
          :value="formValues[input.key] ? formValues[input.key] : ''"
          :required="input.required"
          @onChange="updateFormValue($event, input.key)"
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
  },
  data() {
    return {
      isFormValid: false,
    };
  },
  computed: {
    ...mapGetters({
      formValues: 'companies/formValues',
    }),
  },
  methods: {
    updateFormValue(value: string, key: string) {
      this.$store.commit('companies/updateFormValue', { key, value });
    },
  },
});
</script>

<style lang="scss" scoped></style>
