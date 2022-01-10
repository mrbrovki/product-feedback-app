import React, {useEffect, useContext} from 'react'
import Feedback from './Feedback'
import style from '../styles/FeedbackList.module.css'   
import { Context } from './App'
const FeedbackList = () => {
 const {status, data, feedbacks, setFeedbacks} = useContext(Context);

 useEffect(()=>{
  if(status === 'fetched'){
   setFeedbacks(data.productRequests.map((el, index) => <Feedback data={el} key={index}/>))
  }
 }, [status]);
 return (
  <section>
   {feedbacks}
  </section>
 )
}

export default FeedbackList
