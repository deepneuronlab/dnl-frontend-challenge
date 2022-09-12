<template>
  <div>
    <v-row justify="space-between" align="center" class="mr-0 ml-0 mt-10 mb-1">
      <h2 class="grey--text text--darken-4">Companies</h2>
      <BtnMain text="Company" icon="mdi-plus" @click="isAddCompanyDialogVisible = true" />
    </v-row>
    <DataTableCompanies
      :table-headers="tableHeaders"
      :table-items="tableItems"
      @deleteItem="isDeleteDialogVisible = true"
    />
    <FormDialog
      v-if="formStructure"
      title="Add Company"
      :isVisible="isAddCompanyDialogVisible"
      :formStructure="formStructure"
      @close="closeAddCompanyDialogVisible()"
    />
    <FormDialog
      v-if="formStructure"
      title="Edit Company"
      :isVisible="isEditCompanyDialogVisible"
      :formStructure="formStructure"
      @close="isEditCompanyDialogVisible = false"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DataTableCompanies from '@/components/Tables/DataTableCompanies.vue';
import BtnMain from '@/components/UI/BtnMain.vue';
import FormDialog from '@/components/Dialogs/FormDialog.vue';
import { mapGetters, mapState } from 'vuex';

export default Vue.extend({
  name: 'TheCompanies',
  components: { DataTableCompanies, BtnMain, FormDialog },
  data: () => ({
    isEditCompanyDialogVisible: false,
    isAddCompanyDialogVisible: false,
    formStructure: [],
  }),
  computed: {
    ...mapState('companies', {
      tableItems: 'companies',
    }),
    ...mapGetters({
      tableHeaders: 'companies/companyTableHeaders',
    }),
  },
  methods: {
    closeAddCompanyDialogVisible() {
      this.isAddCompanyDialogVisible = false;
    },
  },
});
</script>

<style lang="scss" scoped></style>
