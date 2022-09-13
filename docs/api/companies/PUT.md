# Update company

## Route

```
PUT /companies/:companyId
```

## Params

```

```

## Payload

Payload can change depending on what the form structure is.

```json
{
  "language": "en",
  "2021": "good",
  ...
}
```

## Responses

### 200

List of updated companies.

```json
{
  "data": [
    {
      "companyId": "id1",
      "className": "company-item",
      "companyName": "Company X",
      "createdAt": "string",
      "updatedAt": "string",
      "language": "en",
      "2021": "good"
    },
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
