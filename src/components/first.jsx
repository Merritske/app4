import { useState, useEffect } from 'react';
const Person = (props)=>{
    return (
      <div>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
      </div>
    )
  }
  


export default function First(){
    const [counter, setCounter] = useState(0)
    useEffect(()=>{
    alert ("you have changed the counter to " + counter)
    }, [counter])
      const name= "Jane"
      const isShown = true
      const isLoggedIn = true
return (
    <div>
    <div className='counter'>
    <button onClick={()=> setCounter((prevcount) => prevcount +1)}>+</button>
<h1>{counter}</h1>
<button onClick={()=> setCounter((prevcount) => prevcount -1)}>-</button>  
    </div>



  <Person 
  name={"John"} 
  lastName={"doe"} 
  age={30}
  />
  <Person 
  name={"Marie"} 
  lastName={"sloe"} 
  age={24}
  />

<h1>Hello {isShown? name : "someone"}!</h1>
{name? (
 <>
 
 <h1>{name}</h1>
 {isLoggedIn? "welcome" : "sign in"}
 </>
): (<>
<h1> test2</h1>
<h2>There is no name</h2>
</>)}
</div>)    

}