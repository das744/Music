import React from 'react'

const Card = (props) => {
  return (
    <div>
         
              <div class="service card-effect">
              <div class="ribbon">
               
                  <h3 class="mt-4 mb-2">{props.title}</h3>
                  <p> {props.des} </p>
                </div>
              </div>
           
    </div>
  )
}

export default Card