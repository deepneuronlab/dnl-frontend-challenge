<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <v-row v-for="input in companyForm" :key="input.key">
        <TextField
          v-if="input.type === 'textField'"
          :label="input.label"
          :placeholder="input.placeholder"
        />

        <SelectField
          v-else-if="input.type === 'selectField'"
          :items="input.items"
          :label="input.label"
        />

        <RadioGroup
          v-else-if="input.type === 'radioGroup'"
          :items="input.items"
          :label="input.label"
        />
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import TextField from '@/components/UI/TextField.vue';
import SelectField from '@/components/UI/SelectField.vue';
import RadioGroup from '@/components/UI/RadioGroup.vue';

export default Vue.extend({
  name: 'DynamicForm',
  components: { TextField, SelectField, RadioGroup },
  props: {},
  data() {
    return {
      isFormValid: false,
    };
  },
  computed: {
    ...mapGetters({
      companyForm: 'companies/companyForm',
    }),
  },
});
</script>

<style lang="scss" scoped></style>
