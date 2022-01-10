import React, {useContext} from 'react'
import { Context } from '../App'
//components
import Filter from '../Filter'
import Roadmap from '../Roadmap'
import Header from '../Header'
import FeedbackList from '../FeedbackList'
//styles
import style from '../../styles/Home.module.css'
import FeedbackHeader from '../FeedbackHeader'

const Home = () => {
 const {deviceType} = useContext(Context);
 return (
  <body className={style[deviceType]}>
    <Header deviceType={deviceType}/>
   <section className={'filter-roadmap-'+ style[deviceType]}>
    <Filter />
    <Roadmap />
   </section>
   <section className={style['flex-column']}>
    <FeedbackHeader />
   <FeedbackList />
   </section>
  </body>

 )
}

export default Home
