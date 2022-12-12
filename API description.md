**Api description**

For the new companies feature we need develop 3 new endpoints.<br/>

<b>/companies</b> GET for get list of companies.<br/>
Response example:
```js
{
    data: [
        {
            companyId: 'id1',
            className: 'company-item',
            companyName: 'Company X',
            createdAt: 'string',
            updatedAt: 'string',
            language: 'de',
            2020: 'good',
        },
    ]
}
```
<b>/companies</b> POST for creating a new company<br/>
Request example:
```js
{
    data: {
        companyName: 'Company X',
        language: 'de',
        2020: 'good',
    }
}
```
<b>/companies/:id</b> PUT for updating an existing company<br/>
Request example:
```js
{
    data: {
        companyId: 'id1',
        className: 'company-item',
        companyName: 'Company X',
        createdAt: 'string',
        updatedAt: 'string',
        language: 'de',
        2020: 'good',
    }
}
```
<b>/companies/fields</b> GET getting list of fields, available for editing.<br/>
Response example:
```js
{
    data: [
        {
            type: 'textField',
            key: 'companyName',
            label: 'Company Name',
            placeholder: 'Type name',
            required: true,
        },
        {
            type: 'selectField',
            key: '2019',
            label: 'Balance 2019',
            placeholder: 'Type',
            required: false,
            items: [
                {
                text: 'Good',
                value: 'good',
                },
                {
                text: 'Bad',
                value: 'bad',
                },
            ],
        },
    ]
}
```
<b>/companies/columns</b> GET getting list of columns for companies table.<br/>
Response example:
```js
{
    data: [
        {
            text: 'Name',
            value: 'companyName'
        }
    ]
}
```

new endpoints should use existing tool for catching the exceptions. 
