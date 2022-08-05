# Get Company Form Schema

Get company form schema

**URL** : `/api/structure/companies/:id`

**Method** : `GET`


## Success Response

**Code** : `200 OK`

**Content example**

```json
    companyTableHeaders: [{ "text": "Name", "value": "companyName" }],
    companyForm: [
        {
            "type": "textField",
            "key": "companyName",
            "label": "Company X",
            "placeholder": "Type name",
            "required": true,
        },
        {
            "type": "selectField",
            "key": 2019,
            "label": "Balance 2019",
            "placeholder": "Type",
            "required": false,
            "items": [
                {
                    "text": "Good",
                    "value": "good",
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
    ]
```

## Error responses examples

*HTTP status code*: **404** (not found)

    {
      "message": "Not found",
    }

*HTTP status code*: **500** (Internal Server Error")

    {
      "message": "Something went wrong",
    }