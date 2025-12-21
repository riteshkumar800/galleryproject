import React, { useState, useTransition } from 'react'
import Card from  './components/Card'


const App = () => {

  // function inputchanging(){
  //   console.log("input typed");
  // }

  // const [num, setfirst] = useState(10)
  // const [username, setusername] = useState('ritesh')

  // function changenum(){
  //   setfirst(30)
  //   setusername('kumar')
  // }

  // const [num, setnum] = useState({username:'sarthak', age:20});

  // const btnclicked=()=>{
  //   const newnum={...num};
  //   newnum.username='aman'

  //   setnum(newnum)

  // }
  // const [num, setnum] = useState([10,20,30])

  // const btnclicked=()=>{
  //   const newnum=[...num]
  //   newnum.push(99)

  //   setnum(newnum)

  // }


  const [title, settitle] = useState('')
  
  function submithandler(e){
    e.preventDefault();
    console.log("form submitted")
    settitle('')

  }
  return (
    <div className='parent'>
     {/* <button onClick={()=>{
      console.log('Button clicked');
     }}>click here</button> */}

     {/* <input  onChange={function(elem){
      console.log(elem.target.value)
     }}   type="text" /> */}

     {/* <div  onMouseMove={function(elem){
      console.log(elem.clientX, elem.clientY)

     }} className='box'></div> */}

     {/* <h1>value of num is {num}</h1>
     <h1>value of num is {username}</h1>
     <button onClick={changenum}>click</button> */}

     {/* <h1>{num.username}, {num.age}</h1>
     <button onClick={btnclicked}>click here</button> */}

     {/* <h1>{num}</h1>
     <button onClick={btnclicked}> clik here</button> */}

     <form onSubmit={(e)=>{
      submithandler(e);
     }}> 
     <input onChange={(e)=>{
      settitle(e.target.value);
     }} type="text" placeholder='Enter your name' value={title} />
     <button>submit</button>
     
     </form>
     
    </div>
  )
}

export default App
