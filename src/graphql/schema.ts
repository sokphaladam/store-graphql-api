export const schema = `
scalar Upload

type User {
    first_name: String,
    last_name: String,
    email: String
}

input userInput {
    first_name: String!,
    last_name: String!,
    email: String!,
    password: String!
}

type Product {
    id: ID!,
    name: String,
    description: String,
    cost: Float,
    photo: String,
    created: String,
    updated: String,
    active: Boolean
}

input productInput {
    id: Int,
    name: String!,
    description: String,
    cost: Float!,
    photo: String,
}

type File {
    path: String!
    filename: String!
    mimetype: String!
    encoding: String!
}

type RootQuery {
    me: User!,
    productList: [Product!]!,
    product(id: Int!): Product
}

type RootMutation {
    createUser(data: userInput!): Boolean,
    createProduct(data: productInput!): Boolean,
    updateProduct(data: productInput!): Boolean,
    uploadSingleFile(file: Upload!): String
}

schema {
    query: RootQuery,
    mutation: RootMutation
}
`;