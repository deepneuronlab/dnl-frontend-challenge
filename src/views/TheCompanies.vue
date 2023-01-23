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
        @editItem="company => setCurrentCompanyForEdit(company)"
      />
      <FormDialog
        v-if="formStructure"
        title="Add Company"
        :isVisible="isAddCompanyDialogVisible"
        :formStructure="formStructure"
        @close="closeAddCompanyDialogVisible()"
      />
      <FormDialog
        v-if="formStructure"
        title="Edit Company"
        :isVisible="isEditCompanyDialogVisible"
        :data="selectedCompany"
        :formStructure="formStructure"
        @close="isEditCompanyDialogVisible = false"
      />
      <DeleteDialog :isVisible="isDeleteDialogVisible" @close="isDeleteDialogVisible = false" />
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
      formStructure: this.$store.state.companies.companyForm,
      selectedCompany: {} as Company,
    };
  },
  computed: {
    ...mapGetters({
      tableItems: 'companies/companies',
      tableHeaders: 'companies/companyTableHeaders',
    }),
  },
  methods: {
    closeAddCompanyDialogVisible() {
      this.isAddCompanyDialogVisible = false;
    },
    setCurrentCompanyForEdit(company: Company) {
      this.isEditCompanyDialogVisible = true;
      this.selectedCompany = company;
    },
  },
});
</script>

<style lang="scss" scoped></style>
