import useFetch from "../hooks/useFetch";
const URL = "https://jsonplaceholder.typicode.com/albums";

export default function Album() {
    const data = useFetch(URL);
    return (
        <>
            <h1>Albums</h1>
            {data && data.map((item) => {
                return <p key={item.id}>{item.title}</p>
            })}
        </>
    );
}