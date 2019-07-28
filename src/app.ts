import express from 'express';
import env from 'dotenv';
import expressGraphql from 'express-graphql';
import graphqlPlayground from 'graphql-playground-middleware-express';
import { buildSchema } from 'graphql';
import { root } from './graphql/root';
import { schema } from './graphql/schema';
import { graphqlUploadExpress } from 'graphql-upload';
import bodyParser from 'body-parser';

env.config();

const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    '/graphql',
    graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10  }),
    expressGraphql({
        schema: buildSchema(schema),
        rootValue: root,
        graphiql: true
    })
);

app.use('/playground', graphqlPlayground({ endpoint: '/graphql' }));

app.listen(4000);