## Add New Company

### Request

```http
  POST /api/companies
```

| Parameter      | Type     | Description                |
| :------------- | :------- | :------------------------- |
| `company_name` | `string` | company name to add        |
| `data`         | `json`   | company information object |

### Response example

```
Status: 201 Created
Content-Type: application/json
```

```
{
  "companyId": 'id1',
  "className": 'company-item',
  "companyName": 'Company X',
  "createdAt": 'string',
  "updatedAt": 'string',
  "language": 'de',
  "2020": 'good',
}
```

### Error Responses

1- HTTP Response Code: **400**

```javascript
    HTTP/1.1  400
    Content-Type: application/json
```

```
    {
        "message": "Validation errors in your request",
        "errors": [
            {
                "message": "Oops! The value is invalid",
                "field": "company_name"
            },
        ]
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
