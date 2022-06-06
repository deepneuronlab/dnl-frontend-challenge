# Get Company Form Schema

Get company form schema

**URL** : `/api/companies/get-form-structure`

**Method** : `GET`


## Success Response

**Code** : `200 OK`

**Content example**

```json
[
    {
      "type": "textField",
      "key": "companyName",
      "label": "Company Name",
      "placeholder": "Type name",
      "required": true,
    },
    {
      "type": "selectField",
      "key": "2019",
      "label": "Balance 2019",
      "placeholder": "Type",
      "required": false,
      "items": [
        {
          "text": "Good",
          "value": "good"',
        },
        {
          "text": "Bad",
          "value": "bad",
        },
      ],
    },
    {
      "type": "radioGroup",
      "key": "language",
      "label": "Language",
      "required": false,
      "items": [
        {
          "text": "de",
          "value": "de",
        },
        {
          "text": "en",
          "value": "en",
        },
      ],
    },
  ],
```