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
        @editItem="item => (companyToEdit = item)"
        @deleteItem="showDeleteConfirmation"
      />
      <FormDialog
        v-if="formStructure"
        title="Add Company"
        :isVisible="isAddCompanyDialogVisible"
        :formStructure="formStructure"
        @close="isAddCompanyDialogVisible = false"
        @save="insertNewCompany"
      />
      <FormDialog
        v-if="formStructure && companyToEdit"
        title="Edit Company"
        :isVisible="!!companyToEdit"
        :formStructure="formStructure"
        v-model="companyToEdit"
        @close="companyToEdit = null"
        @save="updateCompany"
      />
      <DeleteDialog
        :isVisible="isDeleteDialogVisible"
        @close="isDeleteDialogVisible = false"
        @delete="deleteCompany"
      />
    </MainContainer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import AppBar from '@/components/UI/AppBar.vue';
import MainContainer from '@/components/Containers/MainContainer.vue';
import DataTableCompanies from '@/components/Tables/DataTableCompanies.vue';
import BtnMain from '@/components/UI/BtnMain.vue';
import FormDialog from '@/components/Dialogs/FormDialog.vue';
import DeleteDialog from '@/components/Dialogs/DeleteDialog.vue';
import { Company, CompanyFormSerialized } from '@/store/companies-types';

interface TheCompaniesDataType {
  isAddCompanyDialogVisible: boolean;
  isDeleteDialogVisible: boolean;
  companyToEdit: Company | null;
  companyToDelete: Company | null;
}

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },
  data: (): TheCompaniesDataType => ({
    isAddCompanyDialogVisible: false,
    isDeleteDialogVisible: false,
    companyToEdit: null,
    companyToDelete: null,
  }),
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
      formStructure: 'companies/formStructure',
    }),
  },
  methods: {
    ...mapActions({
      addCompany: 'companies/addCompany',
      editCompany: 'companies/editCompany',
      removeCompany: 'companies/deleteCompany',
    }),
    async insertNewCompany(payload: CompanyFormSerialized) {
      await this.addCompany(payload);
      this.isAddCompanyDialogVisible = false;
    },
    showDeleteConfirmation(companyToDelete: Company) {
      this.companyToDelete = companyToDelete;
      this.isDeleteDialogVisible = true;
    },
    async deleteCompany() {
      if (this.companyToDelete) {
        await this.removeCompany(this.companyToDelete);
        this.isDeleteDialogVisible = false;
        this.companyToDelete = null;
      }
    },
    async updateCompany(company: Company) {
      await this.editCompany(company);
      this.companyToEdit = null;
    },
  },
});
</script>

<style lang="scss" scoped></style>
