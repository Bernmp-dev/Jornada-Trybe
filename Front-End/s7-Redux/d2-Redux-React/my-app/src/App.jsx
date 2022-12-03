import { connect } from 'react-redux';
import './App.css'
import actionCreator from "./redux/actions/actionCreator";

function App(props) {
  const { countState, dispatch } = props; 
  return (
    <div className="App">
      <h1>Container</h1>
      <h2>{ countState }</h2>
      <button 
        id="plusOneButton"
        onClick={() => dispatch(actionCreator())} 
      > + 1 
      </button>
        <br />
        <br />
      <button
        id="plusFiveButton"
        onClick={() => dispatch(actionCreator(5))}
      > + 5 
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  countState: state.count,
});

export default connect(mapStateToProps)(App);
