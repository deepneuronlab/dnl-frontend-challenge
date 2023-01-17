<template>
  <v-dialog v-model="isVisible" @click:outside="$emit('close')" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <DynamicForm :formErrors="formErrors" ref="formRef" />
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('close')"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="saveForm()"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import DynamicForm from '@/components/Forms/DynamicForm.vue';
import { FormElements, FormRule } from '@/store/form-types';
import { CompanyArbitraryValues } from '@/store/companies-types';

export default Vue.extend({
  name: 'FormDialog',
  components: { DynamicForm },
  props: {
    formStructure: {
      type: Array as PropType<Array<FormElements>>,
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
    selectedCompany: {
      type: Object as PropType<CompanyArbitraryValues>,
      required: false,
    },
  },
  computed: {
    formErrors(): FormRule {
      const rules: FormRule = {};
      this.formStructure?.forEach(struct => {
        if (struct.required) {
          const ruleFn = (value: string) => !!value || `${struct.label} is required.`;
          rules[struct.key] = [ruleFn];
        } else {
          rules[struct.key] = [];
        }
      });
      return rules;
    },
  },
  watch: {
    isVisible() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formRef = this?.$refs?.formRef as any;
      formRef?.$refs?.elFormRef?.resetValidation();
    },
  },
  methods: {
    saveForm: function() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formRef = this.$refs.formRef as any;
      if (formRef.$refs.elFormRef.validate()) this.$emit('onSave');
    },
  },
});
</script>

<style lang="scss" scoped></style>
