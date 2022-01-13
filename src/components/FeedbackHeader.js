import React from 'react'
import style from '../styles/FeedbackHeader.module.css'
import Sort from './Sort'
const FeedbackHeader = ({roadmap:{suggestion}, deviceType}) => {
 return (
  <section className={style.header + ' ' + style[deviceType]}>
    <img src='./assets/suggestions/icon-suggestions.svg'/>
    <h2>{suggestion} Suggestions</h2>
    <Sort />
  </section>
 )
}

export default FeedbackHeader
