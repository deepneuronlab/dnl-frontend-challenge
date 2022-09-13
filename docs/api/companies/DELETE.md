# Delete company

## Route

```
DELETE /companies/:companyId
```

## Params

| Name      |  Type  | Description                         |
| --------- | :----: | :---------------------------------- |
| companyId | number | Id of the company we want to delete |

## Payload

```

```

## Responses

### 200

The companies without the company we deleted.

```json
{
  "data": [
    {
      "companyId": "id2",
      "className": "company-item",
      "companyName": "Company Y",
      "createdAt": "string",
      "updatedAt": "string",
      "language": "de",
      "2021": "bad"
    },
    {
      "companyId": "id3",
      "className": "company-item",
      "companyName": "Company Z",
      "createdAt": "string",
      "updatedAt": "string",
      "language": "en",
      "2019": "good"
    }
  ],
  "success": true
}
```

### 4XX | 5XX

```json
{
  "success": false,
  "msg": "Message"
}
```
