import { insertCourse } from "./actions/Course"
import courseData from "./data/course.json";

export const loadData = () => {
    courseData.forEach(data  => insertCourse(data));
}