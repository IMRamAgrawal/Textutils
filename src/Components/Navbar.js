import React, {useState} from 'react'
import PropTypes from 'prop-types';


const mystyle = {
  
  backgroundColor:'black',
  verticalAlign: 'center',
  height: '30px',
  color:'white',
  textDecoration:'none',
  listStyle:'none'

}
const style = {
position:'absolute',
right: '20px',
top: '3.5px',
padding:'3px',
backgroundColor:'blue'
}

export default function Navbar(props){
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav" mode={props.mode} style={mystyle}>
           <li className="nav-item">
    <a className="navbar-brand" style={{padding: '40px',textDecoration:'none', color:'white'}} href="#">{props.title}</a>
    <a className="nav-link disabled"  style={{padding: '40px',textDecoration:'none', color:'white'}}  href="#">{props.aboutText}</a>
        </li>
      {/* <div style={{height:'20px',width:'20px',backgroundColor:'red'}}></div> */}
    <button onClick={props.toggleMode} id="Toggle" style={style}>Enable dark mode</button>
  </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About here'
};