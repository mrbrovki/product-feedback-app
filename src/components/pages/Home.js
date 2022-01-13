import React, {useContext} from 'react'
import { Context } from '../App'
//components
import Filter from '../Filter'
import Roadmap from '../Roadmap'
import Header from '../Header'
import FeedbackHeader from '../FeedbackHeader'
import FeedbackList from '../FeedbackList'
//styles
import style from '../../styles/Home.module.css'

const Home = () => {
 const {state: {deviceType, filter, roadmap}, dispatch} = useContext(Context);
 return (
  <div className={style.home + ' ' + style[deviceType]}>
   <section className={style['hfr-' + deviceType]}>
    <Header deviceType={deviceType}/>
    <Filter deviceType={deviceType} filter={filter} dispatch={dispatch}/>
    <Roadmap deviceType={deviceType} roadmap={roadmap}/>
   </section>
   <section className={style.feedback}>
    <FeedbackHeader deviceType={deviceType} roadmap={roadmap}/>
   <FeedbackList />
   </section>
  </div>

 )
}

export default Home
