<template>
  <v-dialog v-model="isVisible" @click:outside="$emit('close')" max-width="500px" eager>
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <DynamicForm
            ref="dynamicForm"
            :formStructure="formStructure"
            :companyData="currentCompanyData"
            @onCompanyFieldUpdated="updateCompanyField"
          />
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('close')"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import DynamicForm from '@/components/Forms/DynamicForm.vue';
import { Company } from '@/store/companies-types';

export default Vue.extend({
  name: 'FormDialog',
  components: { DynamicForm },
  props: {
    formStructure: {
      type: Array,
      required: true,
    },
    companyData: {
      type: Object as PropType<Company>,
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
    return {
      currentCompanyData: {} as Company,
    };
  },
  watch: {
    companyData(newCurrentCompany) {
      this.currentCompanyData = newCurrentCompany;
    },
    isVisible(value) {
      if (value === false) this.$refs.dynamicForm.resetValidation();
    },
  },
  methods: {
    updateCompanyField(key: string, value: string) {
      this.currentCompanyData[key] = value;
    },
    save() {
      this.$refs.dynamicForm.triggerValidation();
      if (this.$refs.dynamicForm.isFormValid) {
        this.$emit('onSave', this.currentCompanyData);
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
