<!--todo: add consistency in methods names-->
<template>
  <div class="fill-height">
    <AppBar />
    <MainContainer>
      <v-row justify="space-between" align="center" class="mr-0 ml-0 mt-10 mb-1">
        <h2 class="grey--text text--darken-4">Companies</h2>
        <BtnMain text="Company" icon="mdi-plus" @click="isAddCompanyDialogVisible = true" />
      </v-row>
      <DataTableCompanies
        v-if="tableHeaders && tableItems"
        :tableHeaders="tableHeaders"
        :tableItems="tableItems"
        @deleteItem="openDeleteDialog"
        @editItem="openEditDialog"
      />
      <FormDialog
        v-if="formStructure"
        title="Add Company"
        :isVisible="isAddCompanyDialogVisible"
        :formStructure="formStructure"
        @close="closeAddCompanyDialog()"
      />
      <FormDialog
        v-if="formStructure"
        title="Edit Company"
        :isVisible="isEditCompanyDialogVisible"
        :formStructure="formStructure"
        @close="closeEditDialog"
      />
      <DeleteDialog
        :isVisible="isDeleteDialogVisible"
        @close="closeDeleteDialog"
        @delete="onDeleteConfirmation(activeCompany)"
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
import { mapActions, mapGetters } from 'vuex';
import { COMPANIES_NAMESPACE_ACTIONS } from '@/store/types';
import { Company } from "@/store/companies-types";
import companiesActions from "@/store/companies-actions";
import CompaniesActions from "@/store/companies-actions";

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },
  data(): TheCompaniesState {
    return {
      isEditCompanyDialogVisible: false,
      isAddCompanyDialogVisible: false,
      isDeleteDialogVisible: false,
      activeCompany: null,
      formStructure: [],
    };
  },
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
    }),
  },
  methods: {
    ...mapActions({
      createCompany: COMPANIES_NAMESPACE_ACTIONS.CREATE,
      deleteCompany: COMPANIES_NAMESPACE_ACTIONS.DELETE,
      updateCompany: COMPANIES_NAMESPACE_ACTIONS.UPDATE,
    }),
    closeAddCompanyDialog() {
      this.isAddCompanyDialogVisible = false;
    },
    openDeleteDialog(company: Company): void {
      console.log('company to delete: ', company);
      this.isDeleteDialogVisible = true;
      this.activeCompany = company;
    },
    closeDeleteDialog(): void {
      console.log('close delete dialog');
      this.isDeleteDialogVisible = false;
      this.activeCompany = null;
    },
    openEditDialog(company: Company): void {
      console.log('edit company: ', company);
      this.isEditCompanyDialogVisible = true;
    },
    closeEditDialog(): void {
      this.isEditCompanyDialogVisible = false;
      this.activeCompany = null;
    },
    onDeleteConfirmation(company: Company): void {
      if (!company) {
        console.log('no company to delete?');
        return;
      }
      console.log('we are deleting company: ', company);
      this.deleteCompany(company);
      this.closeDeleteDialog();
    },
  },
});

interface TheCompaniesState {
  isEditCompanyDialogVisible: boolean;
  isAddCompanyDialogVisible: boolean;
  isDeleteDialogVisible: boolean;
  activeCompany: null | Company;
  formStructure: any[]; // todo
}
</script>

<style lang="scss" scoped></style>
