import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'

function App() {


  const reduxStore = useSelector(store =>store)
  //setting up a local state for a new element 
  const [newAirline, setNewAirline] = useState(''); 

      //disptch is how we talk to redux from react 
      const dispatch = useDispatch() 

      //we want one thing
      //here we return one part of the store, count
      const count = useSelector(store =>    store.count     )
  
      const airlineList = useSelector( store => store.airlineList) 
  
  
      const handleSubmit = (event) => {
        event.preventDefault() 
  
          //Tell redux that we want to add new Element 
          dispatch({
            type: 'ADD_AIRLINE',
            //Pass in the element name, that we're tracking in state 
            payload: newAirline
          });
  
  
          //Clear the form field. 
          setNewAirline('');
  
        }

  return (
    <div>
      <h1>Redux Airport</h1>
      <br></br>

      <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder='Airline Name'
            value={newAirline}
            onChange={event => setNewAirline(event.target.value)}
            />
           <button>Add Airline</button>
      </form>

      <ul> 
        {airlineList.map((airline, i) =>(
          <li key={i}> {airline} </li>
        ))}
      </ul>
      
      <table>{/* Airlines should be listed here */}
      </table>
    </div>
  );
}

export default App;
