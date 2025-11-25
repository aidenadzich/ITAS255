import Item from './Item'

export default function Main() {
    let page = 'Item';
    return (
        <article>
            { (page === "Item" ) && <Item /> }
        </article>
    )
}