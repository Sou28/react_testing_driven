import React from 'react';
import LoginForm from './LoginForm'
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  return (
    // <div className="app">
    //   <h1>TDD Basics with React</h1>
    //   <LoginForm submit={values => alert(JSON.stringify(values))}/>
    // </div>
    
    // <div>
    //   <First>
    //     <Second/>
    //   </First>
    // </div>

    <div>
      <Parent/>
    </div>

  );
}

export default App;

export function First (props) {
  return <div>
  <h2> First Component</h2>
  {props.children}
</div>;
}

export function Second() {

  const show = () =>{
    return <div>
    <h4> Second Component</h4>
    </div>;
  };

  return <div>
            <h3> Second Component</h3>
            {show}
        </div>;
}


const Parent = () => {
  const [trigger, setTrigger] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setTrigger((trigger) => trigger + 1);
        }}
      >
        click
      </button>
      <Child trigger={trigger} />
    </>
  );
};


const Child = ({ trigger }) => {
  const log = () => {
    console.log("call from parent");
  };

  useEffect(() => {
    if (trigger) {
      log();
    }
  }, [trigger]);

  return <h1>Child</h1>;
};