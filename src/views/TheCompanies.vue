<template>
  <div class="fill-height">
    <AppBar />
    <MainContainer>
      <v-row justify="space-between" align="center" class="mr-0 ml-0 mt-10 mb-1">
        <h2 class="grey--text text--darken-4">Companies</h2>
        <BtnMain text="Company" icon="mdi-plus" @click="onCompanyAdd" />
      </v-row>
      <DataTableCompanies
        v-if="tableHeaders && tableItems"
        :tableHeaders="tableHeaders"
        :tableItems="tableItems"
        @editItem="onCompanyEdit"
        @deleteItem="onCompanyDelete"
      />
      <FormDialog
        title="Add Company"
        :isVisible="isAddCompanyDialogVisible"
        :formStructure="formStructure"
        :formValues="newCompanyValue"
        @close="closeAddCompanyDialogVisible"
        @save="saveNewCompany"
      />
      <FormDialog
        title="Edit Company"
        :isVisible="isEditCompanyDialogVisible"
        :formStructure="formStructure"
        :formValues="editCompanyValue"
        @close="isEditCompanyDialogVisible = false"
        @save="EditCompany"
      />
      <DeleteDialog
        :isVisible="isDeleteDialogVisible"
        @close="onDialogClose"
        @delete="onDialogDelete"
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
import {
  COMPANY_ACTION_ADD_COMPANY,
  COMPANY_ACTION_REMOVE_COMPANY,
  COMPANY_ACTION_UPDATE_COMPANY,
} from '@/store/companies-const';

interface TheCompaniesData {
  isEditCompanyDialogVisible: boolean;
  isAddCompanyDialogVisible: boolean;
  isDeleteDialogVisible: boolean;
  companyToDelete: Company | null;
  newCompanyValue: Partial<Company> | null;
  editCompanyValue: Partial<Company> | null;
}

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },
  data: (): TheCompaniesData => ({
    isEditCompanyDialogVisible: false,
    isAddCompanyDialogVisible: false,
    isDeleteDialogVisible: false,
    companyToDelete: null,
    newCompanyValue: null,
    editCompanyValue: null,
  }),
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
      formStructure: 'companies/companyForm',
    }),
  },
  methods: {
    ...mapActions({
      deleteCompany: `companies/${COMPANY_ACTION_REMOVE_COMPANY}`,
      addCompany: `companies/${COMPANY_ACTION_ADD_COMPANY}`,
      updateCompany: `companies/${COMPANY_ACTION_UPDATE_COMPANY}`,
    }),
    closeAddCompanyDialogVisible() {
      this.isAddCompanyDialogVisible = false;
    },
    saveNewCompany() {
      this.addCompany({ company: this.newCompanyValue });
      this.isAddCompanyDialogVisible = false;
    },
    onCompanyEdit(item: Company) {
      this.editCompanyValue = item;
      this.isEditCompanyDialogVisible = true;
    },
    onCompanyDelete(item: Company) {
      this.companyToDelete = item;
      this.isDeleteDialogVisible = true;
    },
    AddCompanyTransitionEnd() {
      console.log('tran end');
    },
    onCompanyAdd() {
      this.isAddCompanyDialogVisible = true;
      this.newCompanyValue = {
        language: '',
        companyName: '',
        [new Date().getFullYear()]: '',
      };
    },
    EditCompany() {
      this.updateCompany({ company: this.updateCompany });
      this.isEditCompanyDialogVisible = false;
    },
    onDialogClose() {
      this.companyToDelete = null;
      this.isDeleteDialogVisible = false;
    },
    onDialogDelete() {
      this.deleteCompany({ company: this.companyToDelete });
      this.companyToDelete = null;
      this.isDeleteDialogVisible = false;
    },
  },
});
</script>

<style lang="scss" scoped></style>
