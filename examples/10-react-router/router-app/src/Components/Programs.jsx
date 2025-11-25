import { getPrograms } from '../api/api.js';
import { NavLink, Outlet } from 'react-router-dom';

export default function Programs() {
    const programs = getPrograms();
    return (
        <div className='container'>
            <h1>School Programs</h1>

            <ul className='programs'>
                {programs.map((prog) => (
                    <li key={prog.id}>
                        <NavLink className={ ({ isActive }) => (isActive ? "program-active" : null)} to={prog.id}>{prog.name}</NavLink>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
}