import { Outlet, useParams } from 'react-router-dom';
import { getProgram } from '../api/api';
import { NavLink } from 'react-router-dom';

export default function Program() {
    const { progId } = useParams();
    const program = getProgram(progId);

    return (
        <>
            <h2>{program.name} Classes</h2>
            <ul className="course-list">
                {program?.courses.map((course) => (
                    <li className="course" key={course.id}>
                        {/* <p className="session-name">{course.name}</p>
                        <p>{course.instructor.name} | {course.instructor.org}</p> */}
                        <NavLink className={ ({ isActive }) => (isActive ? "program-active" : null)} to={course.id}>{course.name}</NavLink>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>
    )
}