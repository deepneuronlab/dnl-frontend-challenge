<script lang="ts">
import SelectField from './SelectField.vue';
import Vue from 'vue';
import TextField from './TextField.vue';
import RadioGroup from './RadioGroup.vue';

export default Vue.component('DynamicField', {
  components: { SelectField },
  props: ['field', 'value'],
  //   template: `<SelectField>{{field.label}}</SelectField>`,
  render: function(createElement) {
    let dynamicField;
    const field = this.$props.field;
    const value = this.$props.value;

    switch (field.type) {
      case 'selectField':
        dynamicField = createElement(SelectField, {
          props: { label: field.label, options: field.items, value },
        });
        break;
      case 'textField':
        dynamicField = createElement(TextField, {
          props: { label: field.label, placeholder: field.placeholder, value },
        });
        break;
      case 'radioGroup':
        dynamicField = createElement(RadioGroup, {
          props: { options: field.items, label: field.label, value: value },
        });
        break;

      default:
        dynamicField = createElement('p', 'Unrecognized field type');
    }
    return dynamicField;
  },
});
</script>
