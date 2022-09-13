<template>
  <v-dialog v-model="isVisible" @click:outside="closeDialog()" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <DynamicForm v-model="dynamicFormData" :form-structure="formStructure" />
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog()"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="save()"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import DynamicForm from '@/components/Forms/DynamicForm.vue';

export default Vue.extend({
  name: 'FormDialog',
  components: { DynamicForm },
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState('companies', {
      formStructure: 'companyForm',
    }),
  },
  data() {
    return {
      dynamicFormData: {},
    };
  },
  methods: {
    ...mapActions('companies', ['createCompany']),
    async save() {
      await this.createCompany(this.dynamicFormData);
      await this.$nextTick();
      this.resetData();
      this.closeDialog();
    },
    resetData() {
      this.dynamicFormData = {};
    },
    closeDialog() {
      this.$emit('close');
    },
  },
});
</script>
