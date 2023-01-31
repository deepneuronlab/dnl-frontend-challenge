# API documentation

This API document contains the CRUD operation of the companies information in the system.
This API document's response result standards are followed by [Google JSON Style Guide][googlejsonstyleguide])

## Create company

---

Creates single company based on the provided params.

| Authentication | Not required |
| -------------- | ------------ |
| Authentication | Not required |
| URL            | `/companies` |
| METHOD         | `POST`       |

### **Request form data**

| Parameter   | Type                      | Requirement | Description                                                                           |
| ----------- | ------------------------- | ----------- | ------------------------------------------------------------------------------------- |
| companyName | string                    | Required    | Name of the company.                                                                  |
| language    | string (Enum: [en,de])    | Optional    | Language of the company. Language code should be in [ISO 639-1][languagecode] format. |
| 2019        | string (Enum: [good,bad]) | Optional    | Company balance status in the year.                                                   |

### _Example Request_

```ts
import axios from 'axios';

await axios.post<CreateCompanyResponse>(
  `${base}/companies`,
  {
    companyName: 'Deep Neuron Lab Inc.',
    language: 'de',
    2019: 'good',
  },
  {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
);
```

### Response Parameters

| Parameter   | Type                      | Description                                                 |
| ----------- | ------------------------- | ----------------------------------------------------------- |
| companyId   | string                    | Id of the created company.                                  |
| companyName | string                    | Desired name of the company being created.                  |
| language    | string (Enum: [en,de])    | Language of the company being created.                      |
| 2019        | string (Enum: [good,bad]) | Balance status in the year of the company being created.    |
| createdAt   | string                    | Date of the company information created in the system.      |
| updatedAt   | string                    | Date of the company information last updated in the system. |
| className   | string                    |                                                             |

### _Example Response_

```json
{
  "data": {
    "companyId": "id1",
    "className": "company-item",
    "companyName": "Deep Neuron Lab Inc.",
    "createdAt": "2023-01-19T21:00:00+05:30",
    "updatedAt": "2023-01-19T21:00:00+05:30",
    "language": "de",
    "2019": "good"
  }
}
```

### _Example Error Response_

```json
// 400 - BAD REQUEST
{
  "data": {
    "error": {
      "code": "required",
      "message": "The company name is required."
    }
  }
}
```

## Update company

---

Update a company's information based on the provided params.

| Authentication | Not required             |
| -------------- | ------------------------ |
| Authentication | Not required             |
| URL            | `/companies/{companyId}` |
| METHOD         | `PUT`                    |

### **Request form data**

| Parameter   | Type                      | Requirement | Description                                                                           |
| ----------- | ------------------------- | ----------- | ------------------------------------------------------------------------------------- |
| companyName | string                    | Required    | Name of the company.                                                                  |
| language    | string (Enum: [en,de])    | Optional    | Language of the company. Language code should be in [ISO 639-1][languagecode] format. |
| 2019        | string (Enum: [good,bad]) | Optional    | Company balance status in the year.                                                   |

### _Example Request_

```ts
import axios from 'axios';

const companyId = 'id1';
await axios.put<UpdateCompanyResponse>(
  `${base}/companies/${companyId}`,
  {
    companyName: 'Deep Neuron Lab',
    language: 'en',
    2019: 'bad',
  },
  {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
);
```

### Response Parameters

| Parameter   | Type                      | Description                                                 |
| ----------- | ------------------------- | ----------------------------------------------------------- |
| companyId   | string                    | Id of the created company.                                  |
| companyName | string                    | Desired name fo the company being created.                  |
| language    | string (Enum: [en,de])    | Language of the company being created.                      |
| 2019        | string (Enum: [good,bad]) | Balance status in the year of the company being created.    |
| createdAt   | string                    | Date of the company information created in the system.      |
| updatedAt   | string                    | Date of the company information last updated in the system. |
| className   | string                    |                                                             |

### _Example Response_

```json
{
  "data": {
    "companyId": "id1",
    "className": "company-item",
    "companyName": "Deep Neuron Lab",
    "createdAt": "2023-01-19T21:00:00+05:30",
    "updatedAt": "2023-01-29T21:00:00+05:30",
    "language": "en",
    "2019": "bad"
  }
}
```

### _Example Error Response_

```json
// 400 - BAD REQUEST
{
  "data": {
    "error": {
      "code": "required",
      "message": "The company name is required."
    }
  }
}
```

## Delete company

---

Delete a company information from the system.

| Authentication | Not required             |
| -------------- | ------------------------ |
| Authentication | Not required             |
| URL            | `/companies/{companyId}` |
| METHOD         | `DELETE`                 |

### _Example Request_

```ts
import axios from 'axios';

const companyId = 'id1';
await axios.delete<DeleteCompanyResponse>(`${base}/companies/${companyId}`, {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
```

### Response Parameters

| Parameter | Type    | Description                         |
| --------- | ------- | ----------------------------------- |
| message   | string  | Delete status confirmation message. |
| deleted   | boolean | Deleted status.                     |

### _Example Response_

```json
{
  "data": {
    "message": "'Deep Neuron Lab' has been deleted successfully.",
    "deleted": true
  }
}
```

### _Example Error Response_

```json
// 400 - BAD REQUEST
{
  "data": {
    "error": {
      "message": "'Deep Neuron Lab' has not been deleted.",
      "deleted": false
    }
  }
}
```

## Get company

---

Get a single company information from the system.

| Authentication | Not required             |
| -------------- | ------------------------ |
| Authentication | Not required             |
| URL            | `/companies/{companyId}` |
| METHOD         | `GET`                    |

### _Example Request_

```ts
import axios from 'axios';

const companyId = 'id1';
await axios.get<GetCompanyResponse>(`${base}/companies/${companyId}`, {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
```

### Response Parameters

| Parameter   | Type                      | Description                                                 |
| ----------- | ------------------------- | ----------------------------------------------------------- |
| companyId   | string                    | Id of the company.                                          |
| companyName | string                    | Desired name fo the company .                               |
| language    | string (Enum: [en,de])    | Language of the company.                                    |
| 2019        | string (Enum: [good,bad]) | Balance status in the year of the company.                  |
| createdAt   | string                    | Created date of the company information in the system.      |
| updatedAt   | string                    | Date of the company information last updated in the system. |
| className   | string                    |                                                             |

### _Example Response_

```json
{
  "data": {
    "companyId": "id1",
    "className": "company-item",
    "companyName": "Deep Neuron Lab",
    "createdAt": "2023-01-19T21:00:00+05:30",
    "updatedAt": "2023-01-29T21:00:00+05:30",
    "language": "en",
    "2019": "bad"
  }
}
```

### _Example Error Response_

```json
// 400 - BAD REQUEST
{
  "data": {
    "error": {
      "code": "invalid",
      "message": "The company id is invalid."
    }
  }
}
```

## Get companies

---

Get all companies from the system.

| Authentication | Not required |
| -------------- | ------------ |
| Authentication | Not required |
| URL            | `/companies` |
| METHOD         | `GET`        |

### _Example Request_

```ts
import axios from 'axios';

await axios.get<GetCompaniesResponse>(`${base}/companies`, {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
```

### Response Parameters

| Parameter   | Type                      | Description                                                 |
| ----------- | ------------------------- | ----------------------------------------------------------- |
| companyId   | string                    | Id of the company.                                          |
| companyName | string                    | Desired name fo the company .                               |
| language    | string (Enum: [en,de])    | Language of the company.                                    |
| 2019        | string (Enum: [good,bad]) | Balance status in the year of the company.                  |
| createdAt   | string                    | Date of the company information created in the system.      |
| updatedAt   | string                    | Date of the company information last updated in the system. |
| className   | string                    |                                                             |

### _Example Response_

```json
{
  "data": [
    {
      "companyId": "id1",
      "className": "company-item",
      "companyName": "Deep Neuron Lab",
      "createdAt": "2023-01-19T21:00:00+05:30",
      "updatedAt": "2023-01-29T21:00:00+05:30",
      "language": "en",
      "2019": "bad"
    }
  ]
}
```

### _Example Empty Response_

```json
{
  "data": []
}
```

<!-- Resources -->

[languagecode]: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes#:~:text=ISO%20639%20is%20a%20standardized,later%20versions%20of%20the%20nomenclature. 'Wikipedia - List of ISO 639-1 codes'
[googlejsonstyleguide]: https://google.github.io/styleguide/jsoncstyleguide.xml 'Google JSON Style Guide'
