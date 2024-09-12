import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Course {
        id: ID
        courseName: String
        category: String
        price: Int
        language: String
        email: String
        stack: Stack
        teachingAssistant: [TeachingAssistant]
    }

    type TeachingAssistant { 
        id: ID
        firstName: String
        lastName: String
        experience: Int
    }

    enum Stack {
        WEB
        MOBILE
        OTHER
    }

    type Query {
        getCourse(id: ID): Course
    }

    input CourseInput {
        id: ID
        courseName: String!
        category: String
        price: Int!
        language: String
        email: String
        stack: Stack
        teachingAssistant: [TeachingAssistantInput]!
    }

    input TeachingAssistantInput {
        id: ID
        firstName: String!
        lastName: String!
        experience: Int!
    }

    type Mutation {
        createCourse(input: CourseInput): Course
        createTeachingAssistant(input: TeachingAssistantInput): TeachingAssistant
    }
`);

export default schema;
