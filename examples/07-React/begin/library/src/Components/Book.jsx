import PropTypes from 'prop-types'

Book.proTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        year_published: PropTypes.number.isRequired,
        pages: PropTypes.number.isRequired
    })).isRequired
}

export default function Book({book}) {
    return (
        <section>
            <h4>{book.title}</h4>
            <h4>{book.author}</h4>
            {/* <h4>{book.year_published}</h4> */}
            <h4>{book.pages}</h4>
        </section>
    )
}