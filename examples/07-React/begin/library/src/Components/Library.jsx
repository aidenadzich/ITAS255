import PropTypes from 'prop-types'
import Book from './Book'
import { Hiring } from './Hiring';
import { useEffect, useState } from 'react';
import Open from './Open'
import Librarian from './Librarian';
import Login from './Login';


Library.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        year_published: PropTypes.number.isRequired,
        pages: PropTypes.number.isRequired
    })).isRequired
}

export default function Library(props) {
    const { books } = props;
    const [isHiring, setHiring] = useState(true);

    useEffect(() => setHiring(true), []);

    return (
        <div>
            <h2 className='library'>Your Local Library</h2>
            <Open />
            <Librarian />
            { isHiring && <Hiring/> }
            <Login />
            
            <section>
                <h3>Title</h3>
                <h3>Author</h3>
                <h3>Pages</h3>
            </section>
            {
                books
                    .sort((a,b) => a.author.localeCompare(b.author))
                    .map((book, i) => <Book key={i} book={book} />) 
            }
        </div>
    )
}