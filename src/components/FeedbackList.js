import React, {useEffect, useContext} from 'react'
import Feedback from './Feedback'
import style from '../styles/FeedbackList.module.css'   
import { Context } from './App'
const FeedbackList = () => {
 const {setRoadmap,status, data, feedbacks, setFeedbacks} = useContext(Context);

 useEffect(()=>{
  if(status === 'fetched'){
   setFeedbacks(data.productRequests.map((el, index) => {
    setRoadmap(prev => {return {...prev, [el.status]: prev[el.status] + 1 }});
   return(<Feedback data={el} key={index}/>);
   }
   ))
  }
 }, [status]);
 return (
  <section className={style['feedback-list']}>
   {feedbacks}
  </section>
 )
}

export default FeedbackList
