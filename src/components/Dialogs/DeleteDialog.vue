<template>
  <v-dialog v-model="isVisible" @click:outside="$emit('close')" max-width="600px">
    <v-card>
      <v-card-title class="headline">Are you sure you want to delete '{{formModel.companyName}}'?</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="$emit('close')">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="deleteCompany">OK</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { PropType } from 'vue';
import { Company} from '@/store/companies-types';

export default Vue.extend({
  name: 'DeleteDialog',
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    formModel: {
      type: Object as PropType<Company>
    },
  },
  methods: {
    deleteCompany() {
      this.$emit('delete', this.formModel);
    },
  },
});
</script>

<style lang="scss" scoped></style>
