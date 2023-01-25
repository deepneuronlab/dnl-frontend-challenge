<template>
  <div class="fill-height">
    <AppBar />
    <MainContainer>
      <v-row justify="space-between" align="center" class="mr-0 ml-0 mt-10 mb-1">
        <h2 class="grey--text text--darken-4">Companies</h2>
        <BtnMain text="Company" icon="mdi-plus" @click="handleAddCompany" />
      </v-row>
      <DataTableCompanies
        v-if="tableHeaders && tableItems"
        :tableHeaders="tableHeaders"
        :tableItems="tableItems"
        @editItem="company => setCurrentCompanyForEdit(company)"
        @deleteItem="company => setCurrentCompanyForDelete(company)"
      />
      <FormDialog
        v-if="formStructure"
        title="Add Company"
        :isVisible="isAddCompanyDialogVisible"
        :formStructure="formStructure"
        :data="{}"
        @save="company => addCompany(company)"
        @close="closeAddCompanyDialogVisible()"
      />
      <FormDialog
        v-if="formStructure"
        title="Edit Company"
        :isVisible="isEditCompanyDialogVisible"
        :data="selectedCompany"
        :formStructure="formStructure"
        @save="company => saveCompany(company)"
        @close="isEditCompanyDialogVisible = false"
      />
      <DeleteDialog
        :isVisible="isDeleteDialogVisible"
        @close="isDeleteDialogVisible = false"
        @delete="deleteCompany()"
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
import { mapGetters } from 'vuex';
import { Company } from '@/store/companies-types';

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },
  data() {
    return {
      isEditCompanyDialogVisible: false,
      isAddCompanyDialogVisible: false,
      isDeleteDialogVisible: false,
      selectedCompany: {} as Company,
    };
  },
  created() {
    this.$store.dispatch('companies/fetchCompanies');
  },
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
      formStructure: 'companies/companyForm',
    }),
  },
  methods: {
    closeAddCompanyDialogVisible() {
      this.isAddCompanyDialogVisible = false;
    },
    async setCurrentCompanyForEdit(company: Company) {
      await this.$store.dispatch('companies/fetchFormStructure', company.id);
      this.isEditCompanyDialogVisible = true;
      this.selectedCompany = company;
    },
    async handleAddCompany() {
      await this.$store.dispatch('companies/fetchFormStructure', 'default');
      this.isAddCompanyDialogVisible = true;
    },
    async saveCompany(company: Company) {
      await this.$store.dispatch('companies/saveCompany', company);
      this.isEditCompanyDialogVisible = false;
    },
    async addCompany(company: Company) {
      await this.$store.dispatch('companies/addCompany', company);
      this.isAddCompanyDialogVisible = false;
    },
    async deleteCompany() {
      await this.$store.dispatch('companies/deleteCompany', this.selectedCompany);
      this.isDeleteDialogVisible = false;
      this.selectedCompany = {} as Company;
    },
    setCurrentCompanyForDelete(company: Company) {
      this.selectedCompany = company;
      this.isDeleteDialogVisible = true;
    },
  },
});
</script>

<style lang="scss" scoped></style>
