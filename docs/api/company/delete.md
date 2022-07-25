## Delete Company

### Request

```http
  DELETE /api/companies/{companyId}
```

### Response example

```
Status: 200 OK
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

2- HTTP Response Code: **400**

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

3- HTTP Response Code: **500**

```javascript
HTTP/1.1  500
Content-Type: application/json
```

```
{
  "message": "Something is broken"
}
```
