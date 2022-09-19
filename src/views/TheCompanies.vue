<template>
  <div class="fill-height">
    <AppBar />
    <MainContainer>
      <v-row justify="space-between" align="center" class="mr-0 ml-0 mt-10 mb-1">
        <h2 class="grey--text text--darken-4">Companies</h2>
        <BtnMain text="Company" icon="mdi-plus" @click="action = 'update'" />
      </v-row>
      <DataTableCompanies
        v-if="tableHeaders && tableItems"
        :tableHeaders="tableHeaders"
        :tableItems="tableItems"
        @deleteItem="item => onAction(item, 'delete')"
        @editItem="item => onAction(item, 'update')"
      />
      <FormDialog
        v-if="formStructure"
        :isVisible="action === 'update'"
        :inputValues="inputValues"
        :formStructure="formStructure"
        :title="selectedCompany ? 'Edit Company' : 'Add Company'"
        @close="close"
        @save="canSubmit && addNewCompany(selectedCompany)"
        @onFormElementChange="editCompanyFormData"
        @onFormValidate="onValidateForm"
      />
      <DeleteDialog
        :isVisible="action === 'delete'"
        @delete="deleteCompany"
        @close="action = null"
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
import { mapGetters, mapState } from 'vuex';
import { CompaniesState, Company, CompanyForm } from '@/store/companies-types';

interface TheCompaniesType {
  selectedCompany: string | undefined;
  action: string;
  canSubmit: boolean;
}

export default Vue.extend({
  name: 'TheCompanies',
  components: { AppBar, MainContainer, DataTableCompanies, BtnMain, FormDialog, DeleteDialog },
  data: (): TheCompaniesType => ({
    selectedCompany: undefined,
    action: '',
    canSubmit: false,
  }),
  computed: {
    ...mapState({
      inputValues(state: { companies: CompaniesState }) {
        return (
          state.companies.companyFormData[this.selectedCompany] ||
          state?.companies?.companies?.find(
            company => company.companyId === this.selectedCompany,
          ) ||
          {}
        );
      },
    }),
    formStructure(): CompanyForm {
      const { companyForm } = this.$store.state.companies;
      return companyForm;
    },
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
    }),
  },
  methods: {
    onAction(company: Company, action: string) {
      this.action = action;
      this.selectedCompany = company.companyId;
    },
    close() {
      this.selectedCompany = undefined;
      this.action = '';
    },
    onValidateForm(value: boolean) {
      this.canSubmit = value;
    },
    addNewCompany(id = undefined) {
      this.$store.commit('addNewCompany', id);
      this.close();
    },
    editCompanyFormData(newFormData: Company) {
      this.$store.commit('editCompanyFormData', newFormData);
    },
    deleteCompany() {
      this.$store.commit('deleteCompany', this.selectedCompany);
      this.close();
    },
  },
});
</script>

<style lang="scss" scoped></style>
