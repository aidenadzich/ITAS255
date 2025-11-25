import useFetch from "../hooks/useFetch";
const URL = "https://jsonplaceholder.typicode.com/todos";

export default function DiyHook() {
    const data = useFetch(URL);
    return (
        <>
            <h1>To Dos</h1>
            {data && data.map((item) => {
                return <p key={item.id}>{item.title}</p>
            })}
        </>
    );
}