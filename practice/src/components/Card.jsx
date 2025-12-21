import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className='Card'>
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda suscipit asperiores ratione ut. Ad eum tenetur deleniti velit in.</p>
        </div>
      
    </div>
  )
}

export default Card
