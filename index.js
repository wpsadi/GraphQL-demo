import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import morgan from "morgan";
import resolvers from "./resolvers.js";
import schema from "./schema.js";
import { graphqlHTTP } from "express-graphql"

// console.log(schema)
const app = express();

// default middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));


// graphql endpoint
const root = resolvers;
app.use("/graphql", graphqlHTTP({
     schema, 
    graphiql: true,
    rootValue: root,
}));


// univesal route
app.use("*", (req, res) => {
  res.json({
    success:false,
    message:"Welcome to the Universal page API using graphQL"
  }).status(404);
});

// Running the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
