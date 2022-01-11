import React from 'react'
import style from '../styles/FeedbackHeader.module.css'
const FeedbackHeader = ({deviceType}) => {
 return (
  <section className={style.header + ' ' + style[deviceType]}>
    <img src='./assets/suggestions/icon-suggestions.svg'/>
  </section>
 )
}

export default FeedbackHeader
