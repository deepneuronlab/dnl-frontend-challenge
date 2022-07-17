# Get Company Data Table headers

Get company data table headers

**URL** : `/api/companies/get-table-headers`

**Method** : `GET`


## Success Response

**Code** : `200 OK`

**Content example**

```json
[
    { 
        "text": "Name", 
        "value": "companyName" 
    },
    { 
        "text": "Language", 
        "value": "language" 
    },
    { 
        "text": "Balance 2019", 
        "value": "2019" 
    }
],
```