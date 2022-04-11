import { Request, Response} from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse(request :Request, response : Response){
    CreateCourseService.execute({
        name: "NodeJS",
        durantion: 10,
        educator: "Dani"
    });
    return response.send();
}