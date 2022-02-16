import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleBox from './togglebox';
function App() {
  const[counter,setCounter]=useState(1);
  const increment=(p:number)=>setCounter(counter+1);
  const decrement=(p:number)=>setCounter(counter-1);
  const reset=(p:number)=>setCounter(0);
  const [isToggled,setIsToggled]=useState(false);
  const[isHidden,setIsHidden]=useState("visible");
  if(isToggled==false){
  return (
      <div>

        <div className="flex justify-center mt-32">
          <ToggleBox isToggled={isToggled} onToggle={()=>{
            setIsToggled(!isToggled);
          }}></ToggleBox></div>
      <h1 className={`flex justify-center mt-10 text-3xl`}>
        Counter App
      </h1>
      <h1 className='flex justify-center mt-6 mb-6 text-2xl'>
          {counter}
      </h1>

      <div className="flex justify-center flex-row space-x-5">
          <button className="border-2 border-black bg-green-600 text-white"onClick={()=>increment(counter)}>
            Increment 
          </button>
          <button className="border-2 border-black bg-red-600 text-white"onClick={()=>decrement(counter)}>
            Decrement
          </button>
      </div>
      <div className='flex justify-center mt-3'>
      <button className="border-2 border-black bg-blue-600 text-white "onClick={()=>reset(counter)}> 
        Reset
      </button>
      
      </div>
      
      
    </div>
      

  );
        }
        else{
          return(
            <div>
            <div className="flex justify-center mt-32">
            <ToggleBox isToggled={isToggled} onToggle={()=>{
              setIsToggled(!isToggled);
            }}></ToggleBox>
            </div>
            </div>

          );

        }
}

export default App;
