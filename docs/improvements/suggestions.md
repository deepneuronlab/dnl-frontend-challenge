#Suggestions

- Using different years in balance as a key should be re-considered (UI change, nested properties maybe)


- Editing a company can be in an inline mode for the table itself without having a dialog


- Toaster management for all request handles


- Handling DynamicForm in a more generic way, which enables it to take as many parameters as it needs and generates necessary components as well as nested components 


- As an improvement instead of Manual Importing which I am using for DynamicForm, DynamicImport with vuetify-loader should be used. This requires a config through webpack but in the end better performance will be received.


- Tests should be written, this is a note for me :D (Other than Unit testing, things like PACT can be used as integration testing instead of classic end-to-end test approach)


#Notes

- I have not changed the original structure about using years as keys in each company element, left that as a discussion point.


- Crud documentation is written in a way that it has a validation for the payload on the back-end side so no investigation is written for that matter.


- Company id is created via uuid but normally I would expect an ID creation on the back-end side.


- If we are dealing with a big Company entity mostly it can be wise to consider GraphQL, I have prepared the API Docs according to Rest API 
