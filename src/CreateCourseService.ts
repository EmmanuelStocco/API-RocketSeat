interface Course {
    name: string;
    durantion?: number;
    educator: string; 
}

class CreateCourseService {
    execute({ durantion = 8, educator, name }: Course) {
        console.log(name, durantion, educator);
    }
}

export default new CreateCourseService();
