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
import { Company, CompanyForm, CompanyTableHeaderItem } from '@/store/companies-types';

export default Vue.extend({
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
  }),
  computed: {
    tableItems(): Company[] {
      return this.$store.getters['companies/companies'];
    },
    tableHeaders(): CompanyTableHeaderItem[] {
      return this.$store.getters['companies/companyTableHeaders'];
    },
    formStructure(): CompanyForm[] {
      return this.$store.getters['companies/companyForm'];
    },
  },
  methods: {
    closeAddCompanyDialogVisible() {
      this.isAddCompanyDialogVisible = false;
    },
  },
});
</script>

<style lang="scss" scoped></style>
