declare module '*.vue' {
  import Vue from 'vue';
  import _ from 'lodash';
  declare module 'vue/types/vue' {
    interface Vue {
      $_: typeof _;
    }
  }
  export default Vue;
}
