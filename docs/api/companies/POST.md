# Create company

## Route

```
POST /companies/
```

## Params

```

```

## Payload

Payload can change depending on what the form structure is.

```json
{
  "companyName": "Company W",
  "language": "de",
  "2021": "bad"
}
```

## Responses

### 200

List of updated companies with the added company.

```json
{
  "data": [
    {
      "companyId": "id1",
      "className": "company-item",
      "companyName": "Company X",
      "createdAt": "dateTime",
      "updatedAt": "dateTime",
      "language": "en",
      "2021": "good"
    },
    {
      "companyId": "id2",
      "className": "company-item",
      "companyName": "Company Y",
      "createdAt": "dateTime",
      "updatedAt": "dateTime",
      "language": "de",
      "2021": "bad"
    },
    {
      "companyId": "id3",
      "className": "company-item",
      "companyName": "Company Z",
      "createdAt": "dateTime",
      "updatedAt": "dateTime",
      "language": "en",
      "2019": "good"
    },
    {
      "companyId": "id4",
      "className": "company-item",
      "companyName": "Company W",
      "language": "de",
      "createdAt": "dateTime",
      "updatedAt": "dateTime",
      "2021": "bad"
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
