# Get company table headers

Since our form structure and company fields are dynamic, we need to get the table headers dynamically from the backend.

## Route

```
GET /companies/:companyId/table-headers
```

## Params

```

```

## Payload

```

```

## Responses

### 200

A list of valid vuetify table headers. See [Vuetify Table header](https://vuetifyjs.com/en/api/v-data-table/#props-headers)

```json
{
  "data": [
    { "text": "Name", "value": "companyName" },
    { "text": "Balance 2019", "value": "2019" },
    { "text": "Balance 2020", "value": "2020" },
    { "text": "Balance 2021", "value": "2021" },
    { "text": "Language", "value": "language" },
    { "text": "Updated at", "value": "updatedAt" },
    { "text": "Created at", "value": "createdAt" }
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
