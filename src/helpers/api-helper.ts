// /***this interface should be in a separate file***/
// export interface IApiRequest {
//     Method?: string | null;
//     Params: any;
// }
// /***import axios to execute request*/
// import axios from 'axios';
// /*** create a method to handel requests and there responses/errors ***/
// export function callMethodWithParams<T>({ Method, Params }: IApiRequest): Promise<T> {
//   return axios
//     .post<T>('apiURL', { Method, Params })
//     .then((response) => {
//       const data = response.data as T ;
//       // catch 200 server error messages
//       if (data?.MessageType === 'error') { //MessageType should be defined in a response type
//         handleError({
//           message: data.Message,
//           stack: `callMethodWithParams: Method name: ${ Method } Params: ${ Params }}`, //json string would be better
//         });
//       }
//       return response.data as T;
//     })
//     .catch((error) => {
//       handleError(error);
//       throw error;
//     });
// }


/*** For this app there are at least the following end points to be implemented
 * -- GetCompanyForm -> returns the data structure for the dynamic form
 * -- GetCompanies -> returns and array of objects of type Company
 * -- CreateCompany -> receives an object of type Company and returns success
 * -- UpdateCompany -> receives an object of type Company and updates it, returning success
 * -- DeleteCompany -> receives an object of type Company and deletes it, returning success
 */
