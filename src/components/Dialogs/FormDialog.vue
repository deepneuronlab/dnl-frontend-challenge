<template>
  <v-dialog v-model="isVisible" @click:outside="closeDialog()" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <DynamicForm
            v-model="dynamicFormData"
            :form-structure="formStructure"
            @validationChange="onFormValidationChange"
          />
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog()"> Cancel </v-btn>
        <v-btn color="blue darken-1" text :disabled="!isFormValid" @click="save()"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { mapState, mapActions } from 'vuex';
import { Company } from '@/types/companies-types';
import DynamicForm from '@/components/Forms/DynamicForm.vue';

export default Vue.extend({
  name: 'FormDialog',
  components: { DynamicForm },
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    isEditing: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Object as PropType<Company>,
    },
  },

  watch: {
    value: {
      handler(newVal) {
        // Avoid mutating the data before the user hits save
        if (newVal) this.dynamicFormData = { ...newVal };
      },
      immediate: true,
    },
  },

  data: () => ({
    dynamicFormData: {},
    isFormValid: false,
  }),

  computed: {
    ...mapState('companies', {
      formStructure: 'companyForm',
    }),
  },

  methods: {
    ...mapActions('companies', ['createCompany', 'updateCompany']),
    async save() {
      if (this.isEditing) {
        this.updateCompany(this.dynamicFormData);
      } else {
        this.createCompany(this.dynamicFormData);
      }
      await this.$nextTick();
      this.resetFormData();
      this.closeDialog();
    },
    onFormValidationChange(isValid: boolean) {
      this.isFormValid = isValid;
    },
    resetFormData() {
      this.dynamicFormData = {};
    },
    closeDialog() {
      this.$emit('close');
    },
  },
});
</script>
