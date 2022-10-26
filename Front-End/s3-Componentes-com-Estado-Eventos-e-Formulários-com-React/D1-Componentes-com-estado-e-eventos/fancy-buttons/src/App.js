import { Component } from "react";

class App extends Component {
  state = { button1: 0, button2: 0, button3: 0 };

  firstButton = () => {
    this.setState(({button1}) => ({ button1: button1 += 1 }),
     () => {console.log(`Button 1: ${this.buttonColor(this.state.button1)}`)})
  }
  secondButton = () => {
    this.setState(({button2}) => ({ button2: button2 += 1 }),
    () => {console.log(`Button 2: ${this.buttonColor(this.state.button2)}`)})
  }

  thirdButton = () => {
    this.setState(({button3}) => ({ button3: button3 += 1 }),
    () => {console.log(`Button 3: ${this.buttonColor(this.state.button3)}`)})
  }


  buttonColor = (num) => {
    return num % 2 === 0 ? 'green' : 'whitesmoke';
  }

  render() {
    const { button1, button2, button3 } = this.state;
    const size = {width: '50px', height: '50px'}; 

    return (
      <>
        <button onClick={this.firstButton} 
        style={ { backgroundColor: this.buttonColor(button1), ...size  } }>{button1}</button>
        <button onClick={this.secondButton} 
        style={ { backgroundColor: this.buttonColor(button2), ...size  } }>{button2}</button>
        <button onClick={this.thirdButton} 
        style={ { backgroundColor: this.buttonColor(button3), ...size } }>{button3}</button>
      </>)
  }
}

export default App;
