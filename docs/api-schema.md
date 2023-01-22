**Resource URL:** `/companies`

### Create

**Request type**: `POST`

**URL:** `/companies`

**Params**: none

**Request body**

Content-Type: `application/json`

Request body: `Company`

Schema:

```ts
interface Company {
  companyId: string;
  companyName: string;
  createdAt: string;
  updatedAt: string;
  className: string;
  [key: string]: string | number | boolean;
}
```

Example:

```json
{
    "companyId": "id1",
    "className": "company-item",
    "companyName": "Company X",
    "createdAt": "string",
    "updatedAt": "string",
    "language": "de",
    "2020": "good",
},
```

**Expected responses**:

1. `200 OK`: The create operation was successful

   Response data: `""`

2. `500 Internal Server Error`: There was an error while creating the company.

   Response data: `""`

### Read (multiple companies)

**Request type**: `GET`

**URL:** `/companies`

**Query:**

`page (int)` - A zero-based index, that represents which page do we want from the total set of companies. **default**: `0`

`itemsPerPage (int)` - The number of companies we want to get per page. **default**: `10`

**Expected responses**:

1. `200 OK`: The read operation was successful

   **Schema:**

   ```ts
   interface CompanyList {
     items: Company[];
     total: number;
   }
   ```

2. `500 Internal Server Error`: There was an error while getting the list of companies.

   Response data: `""`

### Read (single company)

**Request type**: `GET`

**URL:** `/companies/{id}`

**Params**:

`id (string)` - The ID of the company to be deleted

1. `200 OK`: The read operation was successful

   **Schema:**

   ```ts
   interface Company {
     companyId: string;
     companyName: string;
     createdAt: string;
     updatedAt: string;
     className: string;
     [key: string]: string | number | boolean;
   }
   ```

2. `404 Not Found`: The company with the given ID was not found.

   Response data: `""`

3. `500 Internal Server Error`: There was an error while getting the company.

   Response data: `""`

### Update

**Request type**: `PUT`

**URL:** `/companies/{id}`

**Params**:

`id (string)` - The ID of the company to be deleted

1. `200 OK`: The update operation was successful, return the updated data of the company.

   **Schema:**

   ```ts
   interface Company {
     companyId: string;
     companyName: string;
     createdAt: string;
     updatedAt: string;
     className: string;
     [key: string]: string | number | boolean;
   }
   ```

2. `404 Not Found`: The company with the given ID was not found.

   Response data: `""`

3. `500 Internal Server Error`: There was an error while updating the company.

   Response data: `""`

### Delete

**Request type**: `DELETE`

**URL:** `/companies/{id}`

**Params**:

`id (string)` - The ID of the company to be deleted

**Expected responses**:

1. `200 OK`: The delete operation was successful

   Response data: `""`

2. `404 Not Found`: The company with the given ID was not found (maybe it was already deleted).

   Response data: `""`

3. `500 Internal Server Error`: There was an error while deleting the company.

   Response data: `""`
