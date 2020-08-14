import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props =>  {

  const [personState,setPersonState] = useState(
    {
      person:[
        {
          name:'Nhan',
          age:23
        },
        {
          name:'Tri',
          age:27
        },
        {
          name:'Luong',
          age:23
        }
      ],
      otherState : 'other value'
  
    }
  );
  const switchNameHandler = () => {
    // console.log('aa');
    // personState.person[0].name = 'nhan dt';
    setPersonState(
      {
        person:[
          {
            name:'Nhan dt',
            age:23
          },
          {
            name:'Tri',
            age:27
          },
          {
            name:'Luong',
            age:26
          }
        ],
        otherState : 'other value'
    
      }
    )
  }
  return (
    <div className="App">
      <h1>Hello World :)</h1>
      <button onClick={switchNameHandler}>Swicth name</button>
      <p>Worked!</p>
      <Person name = {personState.person[0].name} age={personState.person[0].age} />
      <Person name = {personState.person[1].name} age={personState.person[1].age} />
      <Person name = {personState.person[2].name} age={personState.person[2].age} />
      <Person>HeHEhehEHE</Person>
    </div>
  );
}

export default app;

