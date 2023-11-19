# API Documentation

Based on the store it was provided, we would need three APIs:
 - `GET /companies`
 - `DELETE /companies/{companyId}`
 - `PUT /companies/`
 - `POST /companies/`

## `GET /companies`
API used to get all the companies from the database.

When executed correctly, it returns 200 with an array of `Company` (from `store/company-types.ts`).

## `DELETE /companies/{companyId}`
API used to delete the company having its `companyId` equals to the path parameter `{companyId}`.

When executed correctly, it returns 204 since no content is expected.

## `POST /companies`
API used to add a company in the database, it expects the JSON object of the company to create to be added in the body of the request.

When executed correctly, it returns 201 to inform that a new resource has been created in the database and the response should contain the location header, supposing we have a `GET` API that return a single company like `GET /companies/{companyId}`.

## `PUT /companies`
API used to update a company in the database, it expects the JSON object of the company to update to be added in the body of the request.

When executed correctly, it returns 204 since no content is expected.



