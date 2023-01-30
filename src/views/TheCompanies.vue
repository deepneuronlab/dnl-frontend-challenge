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
        @editItem="openEditDialog"
        @deleteItem="openDeleteDialog"
      />
      <FormDialog
        v-if="formStructure"
        title="Add Company"
        :isVisible="isAddCompanyDialogVisible"
        :formStructure="formStructure"
        :selectedItem="newCompany"
        @close="closeAddCompanyDialogVisible()"
        @save="createCompany"
      />
      <FormDialog
        v-if="formStructure"
        title="Edit Company"
        :isVisible="isEditCompanyDialogVisible"
        :formStructure="formStructure"
        :selectedItem="selectedItem"
        @close="closeEditCompanyDialogVisible()"
        @save="updateCompany"
      />
      <DeleteDialog
        :isVisible="isDeleteDialogVisible"
        @close="isDeleteDialogVisible = false"
        @delete="deleteCompany"
        :title="deleteTitle"
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
import { Company } from '@/store/companies-types';

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },
  data(): {
    isEditCompanyDialogVisible: boolean;
    isAddCompanyDialogVisible: boolean;
    isDeleteDialogVisible: boolean;
    selectedItem: Company | null;
    newCompany: Company | {};
  } {
    return {
      isEditCompanyDialogVisible: false,
      isAddCompanyDialogVisible: false,
      isDeleteDialogVisible: false,
      selectedItem: null,
      newCompany: {},
    };
  },
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
      formStructure: 'companies/companyForm',
    }),
    // delete
    deleteTitle(): string {
      return `Are you sure you want to delete "${this.selectedItem?.companyName || ''}"?`;
    },
  },
  methods: {
    ...mapActions({
      createCompany: 'companies/createCompany',
      updateCompany: 'companies/updateCompany',
      removeCompany: 'companies/removeCompany',
    }),
    // Add
    closeAddCompanyDialogVisible() {
      this.isAddCompanyDialogVisible = false;
    },
    // Edit
    openEditDialog(company: Company): void {
      if (company) {
        this.selectedItem = company;
        this.isEditCompanyDialogVisible = true;
      }
    },
    closeEditCompanyDialogVisible() {
      this.isEditCompanyDialogVisible = false;
    },
    // Delete
    closeDeleteCompanyDialogVisible() {
      this.isDeleteDialogVisible = false;
    },
    openDeleteDialog(company: Company): void {
      if (company) {
        this.selectedItem = company;
        this.isDeleteDialogVisible = true;
      }
    },
    deleteCompany(): void {
      if (this.selectedItem) {
        this.removeCompany(this.selectedItem);
        this.closeDeleteCompanyDialogVisible();
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
