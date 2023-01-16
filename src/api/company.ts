import { GetFormStructureRequest, GetFormStructureResponse } from '@/store/api-types';
import axios, { AxiosError, AxiosResponse } from 'axios';

const getFormStructure = async ({
  companyId,
}: GetFormStructureRequest): Promise<GetFormStructureResponse> => {
  return axios
    .get<AxiosResponse<GetFormStructureResponse>>('https://dnl.de/get-form-structure', {
      params: {
        companyId,
      },
      headers: {
        Accept: 'application/json',
      },
    })
    .then(response => {
      if (response?.status !== 200) throw 'Request failed to complete.';
      else return response.data.data; // returns formStructure: {}
    })
    .catch(error => {
      throw error as AxiosError;
    });
};

export default { getFormStructure };

// API DOCUMENTATION
// GET https://dnl.de/get-form-strucure&companyId=id1
//
// where companyId is a string matching the company's ID in the database table which contains the formStructure
//
// RESPONSE EXAMPLE
//     formStructure: [
//             {
//               type: 'textField',
//               key: 'companyName',
//               label: 'Company Name',
//               placeholder: 'Type name',
//               required: true,
//             },
//             {
//               type: 'selectField',
//               key: '2019',
//               label: 'Balance 2019',
//               placeholder: 'Type',
//               required: false,
//               items: [
//                 {
//                   text: 'Good',
//                   value: 'good',
//                 },
//                 {
//                   text: 'Bad',
//                   value: 'bad',
//                 },
//               ],
//             },
//             {
//               type: 'radioGroup',
//               key: 'language',
//               label: 'Language',
//               required: false,
//               items: [
//                 {
//                   text: 'de',
//                   value: 'de',
//                 },
//                 {
//                   text: 'en',
//                   value: 'en',
//                 },
//               ],
//             },
//           ]
