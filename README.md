# GraphQL-HackerNews-App-using-React-Apollo

HackerNews app made using React, Apollo & GraphQL

### Frontend:
React: Frontend framework for building user interfaces
Apollo Client 2.0: Production-ready, caching GraphQL client

### Backend:
graphql-yoga: Fully-featured GraphQL Server with focus on easy setup, performance & great developer experience
Prisma: Open-source GraphQL API layer that turns your database into a GraphQL API

## Running the App

### 1. Clone repository

```sh
git clone https://github.com/howtographql/react-apollo/
```

### 2. Install dependencies & Deploy the Prisma database API

```sh
cd react-apollo/server
yarn install
yarn prisma deploy
```

When prompted where (i.e. to which _cluster_) you want to deploy your service, choose any of the public clusters, e.g. `public-us1` or `public-eu1`. (If you have Docker installed, you can also deploy locally.)

> **Note**: This repository uses a slightly outdated version of the Prisma CLI and will be updated soon to use the [latest release](https://www.prisma.io/docs/reference/upgrade-guides/upgrading-prisma/upgrade-to-1.7-iquaecuj6b).

### 3. Set the Prisma API endpoint

From the output of the previous command, copy the `HTTP` endpoint and paste it into `server/src/index.js` where it's used to instantiate the `Prisma` binding. You need to replace the current placeholder `__PRISMA_ENDPOINT__`:

```js
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: '__PRISMA_ENDPOINT__',
      secret: 'mysecret123',
    }),
  }),
})
```

For example:

```js
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://eu1.prisma.sh/public-hillcloak-flier-942261/hackernews-graphql-js/dev',
      secret: 'mysecret123',
    }),
  }),
})
```

Note that the part `public-hillcloak-flier-952361` of the URL is unique to your Prisma API.

### 4. Start the server

To start the server, all you need to do is install the the dependencies execute the `start` script by running the following command inside the `server` directory:

```sh
yarn install
yarn start
```

> **Note**: If you want to interact with the GraphQL APIs inside a [GraphQL Playground](https://github.com/graphcool/graphql-playground), you can also run `yarn dev`.

### 5. Run the app

Now that the server is running, you can start the app as well. The commands need to be run in a new terminal tab/window inside the root directory `react-apollo` (because the current tab is blocked by the process running the server):

```sh
yarn install
yarn start
```

You can now open your browser and use the app on `http://localhost:3000`.
