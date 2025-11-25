import { useParams } from 'react-router-dom';
import { getCourse } from '../api/api';

export default function Course() {
    const { progId, courseId } = useParams();
    const course = getCourse({progId, courseId});

    return (
    <>
        <h3>{course.name}</h3>
        <p>{course.desc}</p>
        <h4>{course.instructor.name}</h4>
        <span>
            {course.instructor.title} at {course.instructor.org}
        </span>
        <p>{course.instructor.bio}</p>
    </>
    )
}