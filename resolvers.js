import { v4 as uuidv4} from "uuid";
class Course{
    constructor(id, {courseName, category, price, language, email, stack, teachingAssistant}){
        this.id = id;
        this.courseName = courseName;
        this.category = category;
        this.price = price;
        this.language = language;
        this.email = email;
        this.stack = stack;
        this.teachingAssistant = teachingAssistant;
    }
}

const courseHolder = {};


const resolvers = {
    getCourse: ({id}) => {
        console.log(id)
        console.log(courseHolder[id])
        return new Course(id, courseHolder[id]);
    },
    createCourse: ({input}) => {
      
        let id = uuidv4();
        courseHolder[id] = input;
        return new Course(id, input);
    }
}

export default resolvers;