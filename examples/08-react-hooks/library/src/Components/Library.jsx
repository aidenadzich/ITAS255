import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import Book from './Book';
import Hiring from './Hiring';
import { Open } from './Open';

Library.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        pages: PropTypes.number.isRequired
    })).isRequired
};

export default function Library(props) {
    const { books } = props;

    let isHiring = true;

    return (
        <div>
            <h2 className='library'>Your Local Library</h2>
            <Open />
            { isHiring && <Hiring />}
            <section>
                <h4>Title</h4>
                <h4>Author</h4>
                <h4>Pages</h4>
            </section>
            {
                books.sort((a, b) => a.author.localeCompare(b.author))
                .map((book, i) => (
                    <Book key={i} book={book} />
                ))
            }
        </div>
    );
}

