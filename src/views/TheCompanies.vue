<!--todo: add consistency in methods names-->
<template>
  <div class="fill-height">
    <AppBar />
    <MainContainer>
      <v-row justify="space-between" align="center" class="mr-0 ml-0 mt-10 mb-1">
        <h2 class="grey--text text--darken-4">Companies</h2>
        <BtnMain text="Company" icon="mdi-plus" @click="openAddCompanyDialog" />
      </v-row>
      <DataTableCompanies
        v-if="tableHeaders && tableItems"
        :tableHeaders="tableHeaders"
        :tableItems="tableItems"
        @deleteItem="openDeleteDialog"
        @editItem="openEditDialog"
      />
<!--      I would like to have dialog components not to be initialized until they are called.-->
      <FormDialog
        v-if="formStructure && isAddCompanyDialogVisible"
        title="Add Company"
        :isVisible="isAddCompanyDialogVisible"
        :formStructure="formStructure"
        @close="closeAddCompanyDialog()"
        @save="onAddCompanyConfirmation"
      />
      <FormDialog
        v-if="formStructure && isEditCompanyDialogVisible"
        title="Edit Company"
        :isVisible="isEditCompanyDialogVisible"
        :formStructure="formStructure"
        :originalCompany="activeCompany"
        @close="closeEditDialog"
        @save="onEditCompanyConfirmation"
      />
      <DeleteDialog
        v-if="isDeleteDialogVisible"
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
import { Company, CompanyForm } from '@/store/companies-types';
import { CompanyFormState } from '@/store/form-types';

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },
  data(): TheCompaniesState {
    return {
      isEditCompanyDialogVisible: false,
      isAddCompanyDialogVisible: false,
      isDeleteDialogVisible: false,
      activeCompany: null,
    };
  },
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
      formStructure: 'companies/companyForm',
    }),
  },
  methods: {
    ...mapActions({
      createCompany: COMPANIES_NAMESPACE_ACTIONS.CREATE,
      deleteCompany: COMPANIES_NAMESPACE_ACTIONS.DELETE,
      updateCompany: COMPANIES_NAMESPACE_ACTIONS.UPDATE,
    }),
    openAddCompanyDialog(): void {
      this.activeCompany = null;
      this.isAddCompanyDialogVisible = true;
    },
    closeAddCompanyDialog(): void {
      this.isAddCompanyDialogVisible = false;
    },
    onAddCompanyConfirmation(companyForm: CompanyFormState): void {
      if (!companyForm) {
        return;
      }

      this.createCompany(companyForm);
      // we know the creation operation is sync, so we can just close the modal window
      this.closeAddCompanyDialog();
    },
    openDeleteDialog(company: Company): void {
      this.isDeleteDialogVisible = true;
      this.activeCompany = company;
    },
    closeDeleteDialog(): void {
      this.isDeleteDialogVisible = false;
      this.activeCompany = null;
    },
    onDeleteConfirmation(company: Company): void {
      if (!company) {
        return;
      }

      this.deleteCompany(company);
      this.closeDeleteDialog();
    },
    openEditDialog(company: Company): void {
      if (!company) {
        return;
      }

      console.log('edit company: ', company);
      this.activeCompany = company;
      this.isEditCompanyDialogVisible = true;
    },
    closeEditDialog(): void {
      this.isEditCompanyDialogVisible = false;
      this.activeCompany = null;
    },
    onEditCompanyConfirmation(companyForm: CompanyFormState): void {
      if (!companyForm || !this.activeCompany) {
        return;
      }

      this.updateCompany(companyForm);
      // we know the creation operation is sync, so we can just close the modal window
      this.closeEditDialog();
    },
  },
});

interface TheCompaniesState {
  isEditCompanyDialogVisible: boolean;
  isAddCompanyDialogVisible: boolean;
  isDeleteDialogVisible: boolean;
  activeCompany: Company | null;
}
</script>

<style lang="scss" scoped></style>
