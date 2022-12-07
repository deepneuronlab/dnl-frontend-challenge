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
        @editItem="openEditCompanyDialog"
        @deleteItem="openRemoveCompanyDialog"
      />
      <FormDialog
        v-if="formStructure"
        title="Add Company"
        :isVisible="isAddCompanyDialogVisible"
        :formStructure="formStructure"
        @close="closeAddCompanyDialog"
        @save="saveAddCompanyDialog"
      />
      <FormDialog
        v-if="formStructure"
        title="Edit Company"
        :isVisible="isEditCompanyDialogVisible"
        :formStructure="formStructure"
        :formValues="selectedCompanyToEdit"
        @close="closeEditCompanyDialog"
        @save="saveEditCompanyDialog"
      />
      <DeleteDialog
        :isVisible="isDeleteDialogVisible"
        @close="closeDeleteCompanyDialog"
        @delete="confirmRemoveCompany"
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
import { mapGetters, mapMutations } from 'vuex';
import { Company } from '@/store/companies-types';

// I'll interface here in order not to switch files much
interface CompaniesComponentData {
  isEditCompanyDialogVisible?: boolean;
  isAddCompanyDialogVisible?: boolean;
  isDeleteDialogVisible?: boolean;
  selectedCompanyToEdit?: Company | null;
  selectedCompanyToDelete?: Company | null;
}

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },
  data: (): CompaniesComponentData => ({
    isEditCompanyDialogVisible: false,
    isAddCompanyDialogVisible: false,
    isDeleteDialogVisible: false,
    selectedCompanyToEdit: null,
    selectedCompanyToDelete: null,
  }),
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
      formStructure: 'companies/companyFormFields',
    }),
  },
  methods: {
    ...mapMutations({
      addCompany: 'companies/add',
      editCompany: 'companies/update',
      removeCompany: 'companies/remove',
    }),
    closeAddCompanyDialog() {
      this.isAddCompanyDialogVisible = false;
    },
    saveAddCompanyDialog(values: Company) {
      this.closeAddCompanyDialog();
      this.addCompany(values);
    },
    openEditCompanyDialog(company: Company) {
      this.selectedCompanyToEdit = Object.assign({}, { ...company });
      this.isEditCompanyDialogVisible = true;
    },
    closeEditCompanyDialog() {
      this.isEditCompanyDialogVisible = false;
      this.selectedCompanyToEdit = null;
    },
    saveEditCompanyDialog(values: Company) {
      this.editCompany(values);
      this.closeEditCompanyDialog();
    },
    openRemoveCompanyDialog(values: Company) {
      this.selectedCompanyToDelete = values;
      this.isDeleteDialogVisible = true;
    },
    closeDeleteCompanyDialog() {
      this.selectedCompanyToDelete = null;
      this.isDeleteDialogVisible = false;
    },
    confirmRemoveCompany() {
      this.removeCompany(this.selectedCompanyToDelete);
      this.closeDeleteCompanyDialog();
    },
  },
});
</script>

<style lang="scss" scoped></style>
