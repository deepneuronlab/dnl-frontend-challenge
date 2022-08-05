<template>
  <v-dialog v-model="isVisible" @click:outside="$emit('close')" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <DynamicForm :formStructure="formStructure" @input="input" ref="dynamicForm" />
        </v-container>
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
import { FormElements } from '@/store/form-types';
import { Company } from '@/store/companies-types';
import { required } from 'vuelidate/lib/validators';
import DynamicForm from '@/components/Forms/DynamicForm.vue';

export default Vue.extend({
  name: 'FormDialog',
  validations() {
    return {
      formData: {
        companyName: { required },
      },
    };
  },
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
    companyToEditId: {
      type: String,
    },
  },
  data() {
    return {
      formData: {} as Company,
    };
  },
  methods: {
    input(value: string | number | boolean, key: string) {
      this.formData[key] = value;
    },
    save() {
      const dynamicForm = this.$refs.dynamicForm as any; // $refs items can be anythings (HTMLElement, Vue component...), we need to manually cast it.
      const isValid = dynamicForm.$refs.dynamicForm.validate();
      if (isValid) {
        if (this.companyToEditId) {
          this.$store.dispatch('companies/updateCompany', {
            ...this.formData,
            companyId: this.companyToEditId,
          });
        } else {
          this.$store.dispatch('companies/addCompany', this.formData);
        }
        this.formData = {} as Company;
        this.$emit('close');
        dynamicForm.$refs.dynamicForm.reset();
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
