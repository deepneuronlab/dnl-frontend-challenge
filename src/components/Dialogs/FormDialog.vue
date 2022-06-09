<template>
  <v-dialog v-model="isVisible" @click:outside="$emit('close')" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <DynamicForm ref="dynamicForm" v-model="formData" :formStructure="formStructure" />
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
import DynamicForm from '@/components/Forms/DynamicForm.vue';
import { FormElements } from '@/store/form-types';
import { Company } from '@/store/companies-types';
import { ACTIONS } from '../../store/constants';

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
  watch: {
    companyId: function(newVal) {
      this.formData = { ...this.getCompanyById(newVal) };
    },
    isVisible: function(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          ((this.$refs.dynamicForm as Vue).$refs.vform as Vue & {
            resetValidation: () => boolean;
          }).resetValidation();
        });
      }
    },
  },
  data() {
    return {
      formData: {} as Company,
    };
  },
  methods: {
    genrateId: (len: number): string => {
      const hex = '0123456789ABCDEF';
      let output = '';
      for (let i = 0; i < len; ++i) {
        output += hex.charAt(Math.floor(Math.random() * hex.length));
      }
      return output;
    },
    getCompanyById(id: string) {
      return this.$store.getters['companies/companyById'](id);
    },
    save(): void {
      const isValid = ((this.$refs.dynamicForm as Vue).$refs.vform as Vue & {
        validate: () => boolean;
      }).validate();
      if (isValid) {
        if (this.companyId) {
          this.$store.dispatch(`companies/${ACTIONS.UPDATE_COMPANY}`, {
            companyId: this.companyId,
            company: this.formData,
          });
        } else {
          this.$store.dispatch(`companies/${ACTIONS.ADD_COMPANY}`, {
            ...this.formData,
            companyId: this.genrateId(8),
          });
          ((this.$refs.dynamicForm as Vue).$refs.vform as Vue & {
            reset: () => boolean;
          }).reset();
        }
      }
      this.$emit('close');
    },
  },
});
</script>

<style lang="scss" scoped></style>
