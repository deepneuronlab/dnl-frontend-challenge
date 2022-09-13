# Form Structure

This route is for getting each companies form structure.

## Route

```
GET companies/:companyId/form-structure
```

## Prams

```

```

## Payload

```

```

## Responses

### 200

```json
{
  "data": [
    {
      "type": "textField",
      "key": "companyName",
      "label": "Company Name",
      "placeholder": "Type name",
      "required": true
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
          "value": "good"
        },
        {
          "text": "Bad",
          "value": "bad"
        }
      ]
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
  ],
  "success": true
}
```

#### Input types

```json
["textField", "selectField", "radioGroup"]
```

#### Rules

Rules can be anything that exists in the `/shared/validator/rules.ts`, for now it's just required.

```json
["required"]
```

## 4XX | 5XX

In case of errors:

```json
{
  "success": false,
  "msg": "Message"
}
```
