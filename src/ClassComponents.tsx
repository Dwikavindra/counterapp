import React,{Component} from "React";
type CounterState={
    count:number
}
export class ClassComponent extends Component<CounterState> {
      state = {
        count: 0,
      };
   
    render() {
      return (
        <div>
          <p>count: {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click
          </button>
        </div>
      );
    }
   }
   export default ClassComponent;