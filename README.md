# national-rail-graphql

GraphQL implementation of the UK's National Rail API.

## Prerequisites

Before running the code, you should register for an API token with National Rail: http://lite.realtime.nationalrail.co.uk/openldbws/

## Installing and running

To use the code, install using the following:

```
npm install national-rail-graphql
```

Once you have this, the module can be used as following:

```js
// index.js
const service = require("./src");

service({ tokenValue: "ABC-XYZ" });
```

Running this in a new shell will then start the service:

```
node index.js
```

The GraphQL Playground and API documentation will then be available at `http://localhost:4000`
