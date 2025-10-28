import { PropTypes } from 'prop-types';

export default function Message(props) {
    return (
        <>
            <h3>Hello there!</h3>
            <p>{props.msg}</p>
        </>
    );
}

Message.propTypes = {
    msg: PropTypes.string.isRequired,
};