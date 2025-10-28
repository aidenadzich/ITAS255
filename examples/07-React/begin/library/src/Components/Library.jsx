import PropTypes from 'prop-types'
import Book from './Book'
import { Hiring, NotHiring } from './Hiring';



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
    const isHiring = false;

    return (
        <div>
            <h2 className='library'>Your Local Library</h2>
            { isHiring ? <Hiring/> : <NotHiring/>}
            
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