<template>
  <v-dialog v-model="isVisible" @click:outside="$emit('close')" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container
          ><DynamicForm ref="dynamicForm" :formStructure="formStructure" v-model="formData"
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
import Vue, { PropType } from 'vue';
import DynamicForm from '@/components/Forms/DynamicForm.vue';
import { FormElements } from '@/store/form-types';
import { Company } from '@/store/companies-types';

type VForm = Vue & {
  validate: () => boolean;
  resetValidation: () => boolean;
  reset: () => void;
};

export default Vue.extend({
  name: 'FormDialog',
  components: { DynamicForm },
  props: {
    formStructure: {
      type: Array as PropType<FormElements[]>,
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
    companyId: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      formData: {} as Company,
    };
  },
  mounted() {
    if (this.companyId) {
      this.formData = this.getCompanyById(this.companyId);
    }
  },
  methods: {
    getCompanyById(id: string) {
      return this.$store.getters['companies/companyByIndex'](id);
    },
    save(): void {
      const isValid = ((this.$refs.dynamicForm as Vue).$refs.form as VForm).validate();
      if (isValid) {
        if (this.companyId) {
          this.$store.dispatch('companies/updateCompany', {
            companyId: this.companyId,
            updatedCompany: this.formData,
          });
        } else {
          this.$store.dispatch('companies/addCompany', this.formData);
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
