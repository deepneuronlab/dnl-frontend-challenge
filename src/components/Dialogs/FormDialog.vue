<template>
  <v-dialog v-model="isVisible" @click:outside="$emit('close')" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container
          ><DynamicForm :formStructure="formStructure" :isVisible="isVisible" ref="dynamicForm"
        /></v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('close')"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="save()"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import DynamicForm, { DynamicFormRef } from '@/components/Forms/DynamicForm.vue';
import { Company } from '../../store/companies-types';

export default Vue.extend({
  name: 'FormDialog',
  components: { DynamicForm },
  props: {
    formStructure: {
      type: Array,
      required: true,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    save() {
      const dynamicFormInstance = this.$refs.dynamicForm as DynamicFormRef;
      const formInstance = dynamicFormInstance.$refs.form as HTMLFormElement;

      formInstance.validate();
      if (dynamicFormInstance.isFormValid) {
        const formData: Partial<Company> = dynamicFormInstance.formData;
        const partialCompanyRecord: Partial<Company> = {};

        // Add company record to store
        for (const key in formData) {
          if (formData[key]) {
            partialCompanyRecord[key] = formData[key];
          }
        }
        this.$emit('saveCompany', partialCompanyRecord);
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
