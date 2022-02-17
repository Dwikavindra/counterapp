import React, { useState } from "react";
import ClassComponent from "./ClassComponent";
import ToggleBox from "./toggleBox";
type Props = {
  count: number;
  isToggled: boolean;
};
function FunctionalComponents(props: Props) {
  const [counter, setCounter] = useState(props.count == null ? 0 : props.count);
  const increment = (p: number) => setCounter(counter + 1);
  const decrement = (p: number) => setCounter(counter - 1);
  const reset = (p: number) => setCounter(0);
  const [isToggled, setIsToggled] = useState(
    props.isToggled == null ? false : props.isToggled
  );
  if (isToggled == false) {
    return (
      <div>
        <div className="flex justify-center mt-32">
          <ToggleBox
            isToggled={isToggled}
            onToggle={() => {
              setIsToggled(!isToggled);
            }}
          ></ToggleBox>
        </div>
        <div className="flex justify-center">Functional Components</div>
        <h1 className={`flex justify-center mt-10 text-3xl`}>Counter App</h1>
        <h1 className="flex justify-center mt-6 mb-6 text-2xl">{counter}</h1>

        <div className="flex justify-center flex-row space-x-5">
          <button
            className="border-2 border-black bg-green-600 text-white"
            onClick={() => increment(counter)}
          >
            Increment
          </button>
          <button
            className="border-2 border-black bg-red-600 text-white"
            onClick={() => decrement(counter)}
          >
            Decrement
          </button>
        </div>
        <div className="flex justify-center mt-3">
          <button
            className="border-2 border-black bg-blue-600 text-white "
            onClick={() => reset(counter)}
          >
            Reset
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <ClassComponent count={counter} isToggled={isToggled}></ClassComponent>
      </div>
    );
  }
}

export default FunctionalComponents;
