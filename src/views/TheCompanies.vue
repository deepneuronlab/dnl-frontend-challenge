<template>
  <div class="fill-height">
    <AppBar />
    <MainContainer>
      <v-row justify="space-between" align="center" class="mr-0 ml-0 mt-10 mb-1">
        <h2 class="grey--text text--darken-4">Companies</h2>
        <BtnMain text="Company" icon="mdi-plus" @click="onAddCompanyClicked" />
      </v-row>
      <DataTableCompanies
        v-if="tableHeaders && tableItems"
        :tableHeaders="tableHeaders"
        :tableItems="tableItems"
        @deleteItem="onDeleteCompanyClicked"
        @editItem="onEditCompanyClicked"
      />
      <FormDialog
        v-if="formStructure"
        title="Add Company"
        :isVisible="isAddCompanyDialogVisible"
        :formStructure="formStructure"
        @close="closeAddCompanyDialogVisible"
        :companyData="companyData"
        @onSave="onAdd"
        is-add
      />
      <FormDialog
        v-if="formStructure"
        title="Edit Company"
        :isVisible="isEditCompanyDialogVisible"
        :formStructure="formStructure"
        @close="closeEditCompanyDialogVisible"
        :companyData="companyData"
        @onSave="onEdit"
      />
      <DeleteDialog
        :isVisible="isDeleteDialogVisible"
        @delete="onDeleteConfirm"
        @close="isDeleteDialogVisible = false"
      />
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
  }),
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
    }),
  },
  async mounted() {
    this.formStructure = await this.getCompanyForm();
  },
  methods: {
    ...mapActions({
      getCompanyForm: 'companies/getCompanyForm',
      addCompany: 'companies/addCompany',
      deleteCompany: 'companies/deleteCompany',
      editCompany: 'companies/editCompany',
    }),
    closeAddCompanyDialogVisible() {
      this.isAddCompanyDialogVisible = false;
    },
    closeEditCompanyDialogVisible() {
      this.isEditCompanyDialogVisible = false;
    },
    onDeleteCompanyClicked(company: Company) {
      this.companyData = company;
      this.isDeleteDialogVisible = true;
    },
    onDeleteConfirm() {
      this.deleteCompany(this.companyData);
      this.isDeleteDialogVisible = false;
    },
    onAddCompanyClicked() {
      this.companyData = {
        companyId: String(Date.now()),
        companyName: '',
        createdAt: 'string',
        updatedAt: 'string',
        className: 'company-item',
      };
      this.formStructure.forEach(formElement => (this.companyData[formElement.key] = ''));
      this.isAddCompanyDialogVisible = true;
    },
    onEditCompanyClicked(company: Company) {
      this.companyData = Object.assign({}, company);
      this.isEditCompanyDialogVisible = true;
    },
    onAdd(company: Company) {
      this.addCompany(company);
      this.closeAddCompanyDialogVisible();
    },
    onEdit(company: Company) {
      this.editCompany(company);
      this.closeEditCompanyDialogVisible();
    },
  },
});
</script>

<style lang="scss" scoped></style>
