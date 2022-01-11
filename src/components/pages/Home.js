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
 const {roadmap, deviceType} = useContext(Context);
 return (
  <div className={style.home + ' ' + style[deviceType]}>
   <section className={style['hfr-' + deviceType]}>
    <Header deviceType={deviceType}/>
    <Filter deviceType={deviceType}/>
    <Roadmap deviceType={deviceType} roadmap={roadmap}/>
   </section>
   <section className={style.feedback}>
    <FeedbackHeader/>
   <FeedbackList />
   </section>
  </div>

 )
}

export default Home
