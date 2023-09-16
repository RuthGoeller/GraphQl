import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//type
import {typeDefs} from './schema.js'

//db

import db from './_db.js'

const resolvers = {
    Query: {
      reviews: () => db.reviews,
      games: () => db.games,
      authors: () => db.authors,
    },
  };

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);