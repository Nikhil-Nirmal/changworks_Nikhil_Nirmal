import React from "react";
import ReactDOM from "react-dom";
import { HotKeys } from 'react-hotkeys';
import Confetti from "react-confetti";
let strCheck = ["c", "h", "a", "n", "g", "w", "o", "r", "k", "s"];
let strAdd = "";
let i = 0;
let height = Window.height;
let width = Window.width;

class Conff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
    return (
      <>
        <Confetti
          recycle={this.state.show}
          numberOfPieces={500}
          width={width}
          height={height}
        />
      </>
    );
  }
}

class HotkeysDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  handleShow(value) {
    this.setState({
      show: value
    });
  }
  a;
  onKeyDown(keyName, e, handle) {
    
    strAdd = keyName.key;
    console.log(strAdd);
    if (strAdd === strCheck[i]) {
      i++;
      this.handleShow(true);
      setTimeout(() => {
        this.handleShow(false);
      }, 1000);
      //console.log("+");
    } else {
      i = 0;
      this.handleShow(false);
    }
  }

  onKeyUp(keyName, e, handle){
    console.log("test:onKeyUp", e, handle);
    this.setState({
      output: `onKeyUp ${keyName.key}`
    }); 
  }

  render() {
    return (
      <>
        <HotKeys
          keyName="a,	b,	c,	d,	e,	f,	g,	h,	i,	j,	k,	l,	m,	n,	o,	p,	q,	r,	s,	t,	u,	v,	w,	x,	y,	z,"
          onKeyDown={this.onKeyDown.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
        >
          <div style={{ padding: "50px" }}>{this.state.output}</div>
        </HotKeys>
        <Confetti
          recycle={this.state.show}
          numberOfPieces={500}
          width={width}
          height={height}
        />
      </>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Conff />
      <HotkeysDemo />
      <h1>Type changworks...</h1>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
