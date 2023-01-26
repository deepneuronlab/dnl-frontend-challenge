<script lang="ts">
import Vue from 'vue';
import TextField from '@/components/Forms/TextField.vue';
import SelectField from '@/components/Forms/SelectField.vue';
import RadioGroup from '@/components/Forms/RadioGroup.vue';

export default Vue.extend({
  name: 'DynamicField',
  components: {
    TextField,
    SelectField,
    RadioGroup,
  },
  props: {
    field: {
      type: Object,
      required: true,
    },
    value: {
      type: String,
      required: false,
    },
  },
  computed: {
    fieldComponent() {
      return this.field.type?.[0].toUpperCase() + this.field.type?.substring(1);
    },
  },
  render(h) {
    return h(this.fieldComponent, {
      props: {
        ...this.field,
        value: this.value,
      },
      on: {
        input: e => {
          this.$emit('input', e);
        },
      },
    });
  },
});
</script>

<style lang="scss" scoped></style>
