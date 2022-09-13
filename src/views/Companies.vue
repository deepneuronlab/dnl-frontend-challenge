<template>
  <div>
    <v-row justify="space-between" align="center" class="mr-0 ml-0 mt-10 mb-1">
      <h2 class="grey--text text--darken-4">Companies</h2>
      <BtnMain text="Company" icon="mdi-plus" @click="isAddCompanyDialogVisible = true" />
    </v-row>
    <DataTableCompanies :table-headers="tableHeaders" :table-items="tableItems" />
    <FormDialog
      :isVisible="isAddCompanyDialogVisible"
      title="Add Company"
      @close="isAddCompanyDialogVisible = false"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DataTableCompanies from '@/components/Tables/DataTableCompanies.vue';
import BtnMain from '@/components/UI/BtnMain.vue';
import FormDialog from '@/components/Dialogs/FormDialog.vue';
import { mapGetters, mapState } from 'vuex';

export default Vue.extend({
  name: 'CompaniesPage',
  components: { DataTableCompanies, BtnMain, FormDialog },
  data: () => ({
    isAddCompanyDialogVisible: false,
  }),
  computed: {
    ...mapState('companies', {
      tableItems: 'companies',
    }),
    ...mapGetters({
      tableHeaders: 'companies/companyTableHeaders',
    }),
  },
});
</script>
