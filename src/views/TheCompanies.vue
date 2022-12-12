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
        @editItem="editItem"
        @deleteItem="deleteItem"
      />
      <FormDialog
        v-if="formStructure"
        title="Add Company"
        :isVisible="isAddCompanyDialogVisible"
        :formStructure="formStructure"
        @save="createCompany"
        @close="closeAddCompanyDialogVisible()"
      />
      <FormDialog
        v-if="formStructure"
        title="Edit Company"
        :isVisible="isEditCompanyDialogVisible"
        :formStructure="formStructure"
        :form="editingCompany"
        @save="saveCompany"
        @close="closeEditCompanyDialogVisible"
      />
      <DeleteDialog
        :isVisible="isDeleteDialogVisible"
        @close="isDeleteDialogVisible = false"
        @delete="deleteCompany" />
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
import { mapActions, mapGetters, mapState } from 'vuex';
import { Company } from '@/store/companies-types';
import { FormElements } from '@/store/form-types';

interface Data {
  isEditCompanyDialogVisible: boolean;
  isAddCompanyDialogVisible: boolean;
  isDeleteDialogVisible: boolean;
  editingCompany: Company | null;
  deletingCompany: Company | null;
}

// tslint:disable no-empty-interface
interface Methods {
  saveCompany: (c: Company) => void;
  editItem: (c: Company) => void;
  createCompany: (c: Company) => void;
  updateCompany: (c: Company) => void;
  deleteItem: (c: Company) => void;
  deleteCompany: () => void;
  closeAddCompanyDialogVisible: () => void;
  closeEditCompanyDialogVisible: () => void;
}
// tslint:disable no-empty-interface
interface Computed {
  formStructure: Array<FormElements>;
}
// tslint:disable no-empty-interface
interface Props {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'TheCompanies',
  components: {
    AppBar,
    MainContainer,
    DataTableCompanies,
    BtnMain,
    FormDialog,
    DeleteDialog,
  },
  data: () => ({
    isEditCompanyDialogVisible: false,
    isAddCompanyDialogVisible: false,
    isDeleteDialogVisible: false,
    editingCompany: null,
    deletingCompany: null,
  }),
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
    }),
    ...mapState('companies', {
      formStructure: 'companyForm',
    }),
  },
  methods: {
    createCompany(company: Company) {
      this.isAddCompanyDialogVisible = false;
      this.createCompanyAction(company);
    },
    closeAddCompanyDialogVisible() {
      this.isAddCompanyDialogVisible = false;
    },
    closeEditCompanyDialogVisible() {
      this.isEditCompanyDialogVisible = false;
      this.editingCompany = null;
    },
    editItem(item: Company) {
      this.isEditCompanyDialogVisible = true;
      this.editingCompany = item;
    },
    saveCompany(company: Company) {
      this.isEditCompanyDialogVisible = false;
      this.updateCompanyAction(company);
    },
    deleteItem(company: Company) {
      this.isDeleteDialogVisible = true;
      this.deletingCompany = company;
    },
    deleteCompany() {
      this.isDeleteDialogVisible = false;
      this.deleteCompanyAction(this.deletingCompany);
    },
    ...mapActions('companies', {
      updateCompanyAction: 'updateCompany',
      deleteCompanyAction: 'deleteCompany',
      createCompanyAction: 'createCompany',
    })
  },
});
</script>

<style lang="scss" scoped></style>
