import React from 'react'
//styles
import style from '../styles/Header.module.css'
const Header = ({deviceType}) => {
 return (
  <header className={style[`${deviceType}`]}>
   <h1>frontend mentor</h1>
   <p>feedback board</p>
  </header>
 )
}

export default Header
