import PropTypes from 'prop-types';

export default function Book({book}) {
    const { title, author, pages } = book;
    return(
        <section>
            <h4>{title}</h4>
            <h4>{author}</h4>
            <h4>{pages}</h4>
        </section>
    );
}

Book.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        pages: PropTypes.number.isRequired
    }).isRequired
};  