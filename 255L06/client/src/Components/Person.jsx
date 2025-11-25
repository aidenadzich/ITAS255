import { useState, useEffect } from "react";
export default function Person() {
    const [ persons, setPersons ] = useState([]);

    useEffect(() => {
        const fetchPersons = async () => {
            setPersons(
                await fetch("http://localhost:5555/person")
                    .then((resp) => resp.json())
            );
        }

        fetchPersons();
    }, []);

    return (
        <div className="games-list">
            <h2>People</h2>
            <ul>
                {(persons.length) ? (
                    <>
                        {persons.map((person, index) => <div key={index}>{person.first_name} {person.last_name}</div>
                        )}
                    </>
                    ) : (
                        <div><h4>No people found</h4></div>
                    )
                }
            </ul>
        </div>
    )
}