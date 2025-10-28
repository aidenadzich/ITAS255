import './assets/App.css';
import PropTypes from 'prop-types';
import Message from './Message';

function App(props) {
  return (
    <>
      <div>
        <h1>Shopping List for {props.person}</h1>
        <ol>
          <li>Apples</li>
          <li>Apple Sauce</li>
          <li>Flour</li>
          <li>Baking Soda</li>
          <li>Salt</li>
          <li>Milk</li>
          <li>Eggs</li>
        </ol>
        <Message msg="General Kenobi, you are a bold one"/>
      </div>
    </>
  )
}

App.propTypes = {
  person: PropTypes.string.isRequired,
};

export default App
