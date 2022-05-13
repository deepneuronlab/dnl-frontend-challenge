# DNL Frontend Challenge

Hey, thanks for taking the time to do our coding challenge.

Start with cloning the project and setting it up.
The Companies screen you see on '/companies' when you run the project is part of our product.

In this step, the user can add companies for who he wants to upload balance sheets at a later point in the app.
He should be able to perform all CRUD actions on this screen.

To make things easier for the challenge, we removed the API connection and will only work with the vuex store to achieve that.

Since we have different customer requirements, the data a company consists of requires a dynamic form. This structure comes from the Backend, and its elements are rendered dynamically. Have a look inside the store to see the type definitions. You can also find the companies store module there. It holds all the related companies' data inside the state coming that the Backend created for you.

A coworker already started with the challenge but didn't finish it; please complete it for him and create a Pull Request.

While you work on the implementation, the backend team has to implement the real API endpoints based on what you suggest to them.


### Tasks

1. Get the DynamicForm working with the provided data structure in the store
2. Update the store according to the changes in the form, so the data is consistent
3. Write the API documentation for the endpoints that you would need to connect the app to work with a real backend

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```
