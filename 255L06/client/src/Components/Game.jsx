import { useState, useEffect } from "react";
export default function Game() {
    const [ games, setGames ] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            setGames(
                await fetch("http://localhost:5555/games")
                    .then((resp) => resp.json())
            );
        }

        fetchGames();
    }, []);

    return (
        <div className="games-list">
            <h2>Games</h2>
            <ul>
                {(games.length) ? (
                    <>
                        {games.map((game, index) => <div key={index}>{game.game}</div>
                        )}
                    </>
                    ) : (
                        <div><h4>No games found</h4></div>
                    )
                }
            </ul>
        </div>
    )
}