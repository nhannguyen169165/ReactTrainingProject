import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props =>  {

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

  const [otherState, setOtherState] = useState(
    "other value 1"
  )
  console.log(personState,otherState);
  const switchNameHandler = (newName) => {
    // console.log('aa');
    // personState.person[0].name = 'nhan dt';
    setPersonState(
      {
        person:[
          {
            name:newName,
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
        ]
    
      }
    )
  }
  return (
    <div className="App">
      <h1>Hello World :)</h1>
      <button onClick={ () => switchNameHandler('nhan dt')}>Swicth name</button>
      <p>Worked!</p>
      <Person 
        name = {personState.person[0].name} 
        age={personState.person[0].age}
        click={switchNameHandler.bind(this,'nhannnn')} />
      <Person 
        name = {personState.person[1].name} 
        age={personState.person[1].age} 
        click={switchNameHandler.bind(this,'nhan!')}/>
      <Person 
        name = {personState.person[2].name} 
        age={personState.person[2].age} 
        click={switchNameHandler}/>
      <Person>HeHEhehEHE</Person>
    </div>
  );
}

export default App;

