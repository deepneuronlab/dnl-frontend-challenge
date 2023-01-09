<template>
  <div class="fill-height">
    <AppBar />
    <MainContainer>
      <v-row justify="space-between" align="center" class="mr-0 ml-0 mt-10 mb-1">
        <h2 class="grey--text text--darken-4">Companies</h2>
        <BtnMain text="Company" icon="mdi-plus" @click="createCompanyDialog" />
      </v-row>

      <DataTableCompanies v-if="tableHeaders && tableItems" :tableHeaders="tableHeaders" :tableItems="tableItems"  @deleteItem="deleteCompanyDialog" @editItem="editCompanyDialog"/>

      <FormDialog v-if="formStructure" title="Add Company" :isVisible="isEditDialogVisible"
        :formStructure="formStructure" :formModel="formModel" @close="closeCompanyDialog()" @saveDialogForm="saveCompany" />
      <DeleteDialog :isVisible="isDeleteDialogVisible" :formModel="formModel" @close="isDeleteDialogVisible = false" @delete="deleteCompany" />
    </MainContainer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppBar from '@/components/UI/AppBar.vue';
import MainContainer from '@/components/Containers/MainContainer.vue';
import DataTableCompanies from '@/components/Tables/DataTableCompanies.vue';
import BtnMain from '@/components/UI/BtnMain.vue';
import FormDialog from '@/components/Dialogs/FormDialog.vue';
import DeleteDialog from '@/components/Dialogs/DeleteDialog.vue';
import { mapGetters, mapActions } from 'vuex';
import { CompanyForm, Company } from '@/store/companies-types';

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },
  data: () => ({
    isEditDialogVisible: false,
    isDeleteDialogVisible: false,
    formStructure: [] as CompanyForm,
    formModel: {} as Company
  }),
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
      companyForm: 'companies/companyForm',
    }),
  },
  methods: {
    ...mapActions({
      createOrUpdateCompanyAction: 'companies/createOrUpdateCompany',
      deleteCompanyAction: 'companies/deleteCompany'
    }),
    closeCompanyDialog() {
      this.isEditDialogVisible = false;
    },
    createCompanyDialog() {
      this.isEditDialogVisible = true;
      this.formStructure = this.companyForm;
      this.formModel = {} as Company;
    },
    editCompanyDialog(item: Company) {
      this.isEditDialogVisible = true;
      this.formModel = item;
      this.formStructure = this.companyForm;
    },
    deleteCompanyDialog(item: Company) {
      this.isDeleteDialogVisible = true;
      this.formModel = item;
      this.formStructure = this.companyForm;
    },
    saveCompany(item: Company) {
      this.createOrUpdateCompanyAction(item);
      this.isEditDialogVisible = false;
    },
    deleteCompany(item: Company) {
      this.deleteCompanyAction(item);
      this.isDeleteDialogVisible = false;
    },
  },
});
</script>

<style lang="scss" scoped>

</style>
