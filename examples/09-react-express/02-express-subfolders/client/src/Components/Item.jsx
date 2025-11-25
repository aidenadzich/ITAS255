import { useEffect, useState } from 'react';

export default function Item() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            setItems(await fetch('http://localhost:8134/item')
            .then(resp => resp.json())
            .then(data => data));
        }
        fetchItems();
    }, []);
    return (
        <>
            <h2>List of Items</h2>
            {(items.length) ? (
                <div>
                    {items.map((item, key) => <div key={key}>{item.name} ** {item.category} </div>
                    )}
                </div>
            ) : (
                <div><h4>No items found</h4></div>
            )
            }

        </>
    )
}
