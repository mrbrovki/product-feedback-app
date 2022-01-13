import React, {useEffect, useContext} from 'react'
import Feedback from './Feedback'
import style from '../styles/FeedbackList.module.css'   
import { Context } from './App'
const FeedbackList = () => {
 const {dispatch, data, state: {feedbacks}, status} = useContext(Context);

 useEffect(()=>{
  if(status === 'fetched'){
    const fbComp = data.productRequests.map((el, index) => {
    dispatch({type: 'ROADMAP', value: el.status});
    return(
     <Feedback data={el} key={index}/>
    );
   })
   dispatch({type: 'FEEDBACKS', value: fbComp});
  }}, [status]);
 return (
  <section className={style['feedback-list']}>
   {feedbacks}
  </section>
 )
}

export default FeedbackList
