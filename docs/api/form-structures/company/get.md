# Company Form Structure

Get company form schema

**URL** : `v1/api/form-structures/company`

**Method** : `GET`


## Success Response

**Code** : `200`

**Content example**

```json
[
    {
      "type": "textField",
      "key": "companyName",
      "label": "Company Name",
      "placeholder": "Type name",
      "required": true
    },
    {
      "type": "selectField",
      "key": "2022",
      "label": "Balance 2022",
      "placeholder": "Type",
      "required": false,
      "items": [
        {
          "text": "Good",
          "value": "good"
        },
        {
          "text": "Bad",
          "value": "bad"
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
          "value": "de"
        },
        {
          "text": "en",
          "value": "en"
        }
      ]
    }
  ]
```

## Error Response Examples


*HTTP status code*: **500** (Internal Server Error")

    {
      "message": "The server encountered an unexpected condition that prevented it from fulfilling the request.",
      "error":true
    }
