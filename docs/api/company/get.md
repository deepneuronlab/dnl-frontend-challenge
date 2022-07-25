## Fetch Companies

### Request

```http
  GET /api/companies
```

| Parameter  | Type     | Description                      |
| :--------- | :------- | :------------------------------- |
| `page`     | `number` | current page index (default `1`) |
| `per_page` | `number` | items per page (default `50`)    |

### Response example

```
Status: 200 OK
Content-Type: application/json
```

```
    {
      "metadata": {
        "resultset": {
          "current_page": 1,
          "per_page": 10,
          "pages": 20,
        },
      },
      "data": [
        {
          "companyId": 'id1',
          "className": 'company-item',
          "companyName": 'Company X',
          "createdAt": 'string',
          "updatedAt": 'string',
          "language": 'de',
          "2020": 'good',
        },
        {
          "companyId": 'id2',
          "className": 'company-item',
          "companyName": 'Company Y',
          "createdAt": 'string',
          "updatedAt": 'string',
          "language": 'de',
          "2021": 'bad',
        },
      ],

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
