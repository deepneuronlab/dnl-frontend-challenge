# Hello 👋 

I think I'm done with the challenge 🙂

# API documentation for the endpoints

## /companies

### GET /companies/

HTTP GET to `/companies/` is returning all companies.

If we have thousands of companies and the `*` query takes too long - let's page it with some query params, i suggest `start` for offset, `pageSize` for page size and so on. Some additional meta data like `pageCount` or `totalCount` would be needed then too, but as of it is now - we're good with just flat `select * from companies` no filtering, no sorting, no nothing

### POST /companies/

HTTP POST to `/companies/` updates the entity we're POST-ing as HTTP POST Payload. 

The numeric keys used in example store, for example `{ 2009: [...]}` are making `company` NOT a valid JSON object, so we either need a custom serialization-deserialization layer or perhaps can just stick with string-only keys. If ID isn't found - this would respond 404, if ID/other mandatory fields aren't present in payload - i'd expect a 400, response is just a 200 with an updated entity


### PUT /companies/

HTTP PUT to `/companies/` inserts a company. Returns an entity with an `id` field populated. Trying to sneak a hardcoded `id` in should result in 400. If there are any kinds of constraints on company name being unique or something - those are HTTP 400 too, i expect.

### DELETE /companies/{companyId}

HTTP DELETE to `/companies/` deletes a company. Response is an HTTP 200 with entity that was deleted. 404 for missing IDs, 400 for malformed requests/missing id/invalid ids
