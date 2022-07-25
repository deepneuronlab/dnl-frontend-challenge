## Fetch Company Schema

### Request

```http
  GET /api/schemas/companies/{companyId}
```

| Parameter | Type       | Description                                                                                           |
| :-------- | :--------- | :---------------------------------------------------------------------------------------------------- |
| `schema`  | `string[]` | Specifies the schemes required to be returned <br />(default `['companyTableHeaders','companyForm']`) |

### Response example

```
Status: 200 OK
Content-Type: application/json
```

```
{
     "companyTableHeaders": [
       {
         text: 'Name',
         value: 'companyName'
       }
     ],
      "companyForm": [
    {
      type: 'textField',
      key: 'companyName',
      label: 'Company Name',
      placeholder: 'Type name',
      required: true,
    },
    {
      type: 'selectField',
      key: '2019',
      label: 'Balance 2019',
      placeholder: 'Type',
      required: false,
      items: [
        {
          text: 'Good',
          value: 'good',
        },
        {
          text: 'Bad',
          value: 'bad',
        },
      ],
    },
    {
      type: 'radioGroup',
      key: 'language',
      label: 'Language',
      required: false,
      items: [
        {
          text: 'de',
          value: 'de',
        },
        {
          text: 'en',
          value: 'en',
        },
      ],
    },
  ],,

}
```

### Error Responses

1- HTTP Response Code: **404**

```javascript
    HTTP/1.1  404
    Content-Type: application/json
```

```
    {
      "message": "Not found"
    }
```

2- HTTP Response Code: **500**

```javascript
    HTTP/1.1  500
    Content-Type: application/json
```

```
    {
      "message": "Something is broken"
    }
```
