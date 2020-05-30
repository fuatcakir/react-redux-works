import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";

class App extends Component {
  // state = {
  //   counter: 1,
  // };

  // countUp = () => {
  //   this.setState({ ...this.state, counter: this.state.counter + 1 });
  // };

  // countDown = () => {
  //   this.setState({ counter: this.state.counter - 1 });
  // };

  render() {
    return (
      <div className="App">
        <h1>Merhaba React!</h1>
        <div>
          <p>React-Redux çalışması</p>
        </div>
        <div>
          Redux Sayac :<span>{this.props.counter}</span>
          <br></br>
          {/* Local Sayac :<span>{this.state.counter}</span> */}
        </div>
        <div>
          <button onClick={this.props.countUp}>Arttır</button>
          <button onClick={this.props.countDown}>Azalt</button>
          {/* <button onClick={this.countUp}>Local</button> */}
        </div>

        <div>
          <ul>
            {this.props.history.map((item) => (
              <li key={item.id} onClick={() => this.props.deleteItem(item.id)}>
                Counter Tarihçesi : {item.counter2}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    history: state.history,
  };
};

const mapDispach = (dispatch) => {
  return {
    countUp: () => dispatch({ type: "COUNT_UP", value: 5 }),
    countDown: () => dispatch({ type: "COUNT_DOWN", value: 4 }),
    deleteItem: (key) => dispatch({ type: "DEL_ITEM", value:  key  }),
  };
};

export default connect(mapStateToProps, mapDispach)(App);
