import React, { Component } from "react";
import ToggleBox from "./toggleBox";
import App from "./App";
import FunctionalComponents from "./FunctionalComponents";
type Props = {
  count: number;
  isToggled: boolean;
};
type CounterState = {
  counter: number;
  isToggled: boolean;
};
export class ClassComponent extends Component<Props, CounterState> {
  state = {
    counter: this.props.count,
    isToggled: this.props.isToggled,
  };
  increment = () =>
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  decrement = () =>
    this.setState((state) => ({
      counter: state.counter - 1,
    }));
  reset = () =>
    this.setState((state) => ({
      counter: 0,
    }));
  setisToggled = () =>
    this.setState((state) => ({
      isToggled: !state.isToggled,
    }));
  render() {
    if (this.state.isToggled == true) {
      return (
        <div>
          <div className="flex justify-center mt-32">
            <ToggleBox
              isToggled={this.state.isToggled}
              onToggle={this.setisToggled}
            ></ToggleBox>
          </div>
          <div className="flex justify-center">Class Components</div>
          <h1 className={`flex justify-center mt-10 text-3xl`}>Counter App</h1>
          <h1 className="flex justify-center mt-6 mb-6 text-2xl">
            {this.state.counter}
          </h1>

          <div className="flex justify-center flex-row space-x-5">
            <button
              className="border-2 border-black bg-green-600 text-white"
              onClick={this.increment}
            >
              Increment
            </button>
            <button
              className="border-2 border-black bg-red-600 text-white"
              onClick={this.decrement}
            >
              Decrement
            </button>
          </div>
          <div className="flex justify-center mt-3">
            <button
              className="border-2 border-black bg-blue-600 text-white "
              onClick={this.reset}
            >
              Reset
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <FunctionalComponents
          count={this.state.counter == null ? 0 : this.state.counter}
          isToggled={this.state.isToggled}
        ></FunctionalComponents>
      );
    }
  }
}
export default ClassComponent;
