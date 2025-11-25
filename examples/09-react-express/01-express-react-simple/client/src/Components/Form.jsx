import { useEffect, useState, useRef } from 'react';

const Form = () => {
    const [sports, setSports] = useState([]);
    const sportInput = useRef(null);

    useEffect(() => {
        const fetchSports = async () => {
            setSports(
                await fetch("http://localhost:5000/sports")
                    .then((resp) => resp.json())
                    .then((data) => data.sports)
            );
        }

        fetchSports();
    });

    const submitSport = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:5000/sports", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                newSport: sportInput.current.value,
            }),
        });
    }

    return(
        <div>
            <h2>Favourite Sports</h2>
            {sports.map((sport, key) => <div key={key}>{sport}</div>)}
            <br/>
            <form onSubmit={submitSport}>
                <input type="text" placeholder="New Sport Name" width="30" id="sportToAdd" ref={sportInput} />
                <input type="submit" value="Add Sport" />
            </form>

        </div>
    )
}

export default Form;