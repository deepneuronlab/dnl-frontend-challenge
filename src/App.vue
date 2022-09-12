<template>
  <v-app>
    <AppBar />
    <MainContainer>
      <router-view></router-view>
    </MainContainer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppBar from '@/components/UI/AppBar.vue';
import MainContainer from '@/components/Containers/MainContainer.vue';

export default Vue.extend({
  name: 'App',
  components: { AppBar, MainContainer },
});
</script>
