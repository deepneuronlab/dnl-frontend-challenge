import { CompanyForm, Company } from '@/store/companies-types';
import isNumeric from './is-numeric';

function getFilledInCompanyForm(companyForm: CompanyForm, company: Company) {
  return companyForm.map(formField => {
    const isKeyANumber = isNumeric(formField.key);
    const companyFields = Object.keys(company);
    // Big assumption here!
    // I'm assuming that there can only be one company property that looks like a number (but it can be a different number)
    // this solution would fail if a company would have say a property named "1" and another named "2019"
    // right now there's no indication of that happening, and it's not mentioned in the specification as well.
    // but I know that this is not foolproof...
    const numericalCompanyField = companyFields.find(field => isNumeric(field));
    if (isKeyANumber && formField.type === 'selectField' && numericalCompanyField) {
      // I also assume that the only select type is also the numeric field.
      // To be honest if the form can really be ANYTHING and it changes for each company
      // then I would call the backend (cause that's the single source of truth regarding the form structure)
      // to get the form-fields specific to the currently edited company, before displaying it's edit form (or at least just the custom fields)
      // and render out the form based on the server response, instead of manipulating the values in the store.
      // I would also get the data saved in the DB to prefill the fields when editing, instead of getting them from the client-side.
      // This would ensure that we use a single source of truth (the API).
      const firstWordFromLabel = formField.label.split(' ')[0];
      const selectedOption = formField.items.find(
        item => item.value === company[numericalCompanyField],
      );
      return {
        ...formField,
        key: numericalCompanyField,
        label: `${firstWordFromLabel} ${numericalCompanyField}`,
        value: selectedOption,
      };
    }

    let value;
    if (Object.keys(company).includes(formField.key)) {
      value = company[formField.key];
    }

    const filledInFormField = {
      ...formField,
      value,
    };

    return filledInFormField;
  });
}

export default getFilledInCompanyForm;
