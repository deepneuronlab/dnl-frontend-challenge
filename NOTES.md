##Results
1. To run the project I used all legacy libraries, updates would be necessary in a real scenario to improve the available libraries and reduce vulnerabilities.
2. I implemented dynamic form accordingly, and a simple validation as well.
3. I have modified the table to display more relevant information when modifying companies.
4. I have documented and created a small code example on how to create a connection to the endpoints.

##Notes
1. I have used the data in the store as it is, although it is clear that one should consider improving structure. For example, the balance should not be a KVP of year and good/bad, but a dictionary in since there are many possible years.
2. The form structure could be improved including validation messages, and the rules of validation of every possible input.
3. There are some functionalities that could be done better, like: 
  * The company ID should be a UUID and the creation of it could happen in the back end, so you have an ID to track a company on both back and front ends (there are of course pros and cons)
  * Formatting the date time to display it on the front end could be done with a new librarie.
  * The visible headers could come from an endpoint.