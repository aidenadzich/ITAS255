import { useEffect, useState } from "react"

const URL = 'https://randomuser.me/api/?results=1'

export default function Librarian() {
    
    const [librarian, setLib] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(URL).then(resp => resp.json());
            setLib(data.results[0]);
        }
        fetchData();

    }, []);
    
    return (
        <>
            { librarian && 
            <div>
                <h3>Head Librarian</h3>
                <h4>{ librarian.name.first } { librarian.name.last }</h4>
                <img src={ librarian.picture.large } alt={ librarian.name.first } />
                <p>{ librarian.location.city }, { librarian.location.country }</p>
            </div> 
            }
        </>
    )
}