<template>
  <div class="fill-height">
    <AppBar />
    <MainContainer>
      <v-row justify="space-between" align="center" class="mr-0 ml-0 mt-10 mb-1">
        <h2 class="grey--text text--darken-4">Companies</h2>
        <BtnMain text="Company" icon="mdi-plus" @click="addNewCompanyForm" />
      </v-row>
      <DataTableCompanies
        v-if="tableHeaders && tableItems"
        :tableHeaders="tableHeaders"
        :tableItems="tableItems"
        @editItem="editCompanyForm"
        @deleteItem="opendeleteCompanyForm"
      />
      <FormDialog
        v-if="formStructure"
        title="Add Company"
        :isVisible="isAddCompanyDialogVisible"
        :formStructure="formStructure"
        @close="closeAddCompanyDialogVisible()"
        @saveFormData="saveCompanyData"
      />
      <FormDialog
        v-if="formStructure"
        title="Edit Company"
        :formData="companyData"
        :isVisible="isEditCompanyDialogVisible"
        :formStructure="formStructure"
        @saveFormData="saveCompanyData"
        @close="isEditCompanyDialogVisible = false"
      />
      <DeleteDialog :isVisible="isDeleteDialogVisible" @close="closeDeleteDialog" @delete="deleteCompanyData"/>
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
import { Company, CompanyForm } from '@/store/companies-types';

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },
  data: () => ({
    isEditCompanyDialogVisible: false,
    isAddCompanyDialogVisible: false,
    isDeleteDialogVisible: false,
    formStructure: [] as CompanyForm,
    companyData: {} as Company,
    companyToBeDeleted: {} as Company,
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
      saveCompany: 'companies/saveCompany',
      deleteCompany: 'companies/deleteCompany'
    }),
    closeAddCompanyDialogVisible() {
      this.isAddCompanyDialogVisible = false;
    },
    closeEditCompanyDialogVisible() {
      this.isEditCompanyDialogVisible = false;
    },
    addNewCompanyForm() {
      this.isAddCompanyDialogVisible = true;
      this.formStructure = this.companyForm;
    },
    saveCompanyData(item: Company) {
      this.saveCompany(item);
      this.closeAddCompanyDialogVisible();
      this.closeEditCompanyDialogVisible();
    },
    editCompanyForm(item: Company) {
      this.isEditCompanyDialogVisible = true;
      this.companyData = item;
      this.formStructure = this.companyForm;
    },
    opendeleteCompanyForm(item: Company) {
      this.isDeleteDialogVisible = true;
      this.companyToBeDeleted = item;
    },
    deleteCompanyData() {
      this.deleteCompany(this.companyToBeDeleted);
      this.isDeleteDialogVisible = false;
    },
    closeDeleteDialog() {
      this.companyToBeDeleted = {} as Company;
      this.isDeleteDialogVisible = false;
    }
  },
});
</script>

<style lang="scss" scoped></style>
