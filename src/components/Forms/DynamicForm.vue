<template>
  <v-form v-model="isFormValid" class="dynamic-form">
    <v-container fluid>
      <template v-for="field in formStructure">
        <DynamicField :field="field" :key="field.key" v-model="formData[field.key]" />
      </template>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';
import DynamicField from '@/components/Forms/DynamicField.vue';

export default Vue.extend({
  name: 'DynamicForm',
  components: {
    DynamicField,
  },
  props: {
    formStructure: {
      type: Array,
      required: true,
    },
    initialData: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      isFormValid: false,
      formData: this.getInitialFormData(),
    };
  },

  methods: {
    ...mapMutations({
      saveAction: 'companies/save',
    }),
    save() {
      // if it's universal form, then the save call should be done outside
      // but if it's tied to saving a company object only, then it is fine
      this.saveAction({
        ...this.initialData,
        ...this.formData,
      });
      this.reset();
      return true;
    },
    getInitialFormData() {
      const defaults = this.initialData || {};
      return this.formStructure.reduce((acc, field) => {
        acc[field.key] = defaults[field.key] || '';
        return acc;
      }, {});
    },
    // we can (and probably should) use reset from v-form,
    // however I think it is worth discuss the behaviour for dynamic form strucutres
    // so that way it is a bit more universal
    reset() {
      this.formData = this.getInitialFormData();
    },
  },
  watch: {
    isFormValid() {
      this.$emit('form-state-change', this.isFormValid);
    },
    initialData: {
      deep: true,
      handler() {
        this.reset();
      },
    },
    formStructure: {
      deep: true,
      handler() {
        this.reset();
      },
    },
  },
});
</script>

<style lang="scss" scoped></style>
