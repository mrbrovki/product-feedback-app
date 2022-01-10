import React from 'react'
//styles
import styles from '../styles/Header.module.css'
const Header = ({deviceType}) => {
 return (
  <header className={styles[`${deviceType}`]}>
   <h1>frontend mentor</h1>
   <p>feedback board</p>
  </header>
 )
}

export default Header
