# Display Companies

This route is for getting the companies.

## Route

```
GET /companies?page=1
```

## Queries

| Name        |  Type  | Description                                                   |
| ----------- | :----: | :------------------------------------------------------------ |
| page        | number | The page number when indexing the comapnies from the database |
| per_page    | number | The number of companies per page                              |
| total_count | number | The number of all companies in database                       |

## Payload

```

```

## Responses

### 200

```json
{
  "data": [
    {
      "companyId": "id1",
      "className": "company-item",
      "companyName": "Company X",
      "createdAt": "string",
      "updatedAt": "string",
      "language": "de",
      "2020": "good"
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
