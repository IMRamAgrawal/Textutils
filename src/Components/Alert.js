import React, {useState} from 'react'

export default function Alert(props) {

  return (
    <div style={{height:'50px'}}>
    {props.alert && <div style={{backgroundColor:'grey',height:'50px'}}><strong>{props.alert.type}</strong>:{props.alert.msg}</div>}
    </div>
  )
}
