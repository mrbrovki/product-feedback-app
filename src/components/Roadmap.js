import React from 'react';
import {Link} from 'react-router-dom';
//styles
import style from '../styles/Roadmap.module.css';

const Roadmap = ({roadmap: {planned, ['in-progress']:inProgress, live}, deviceType}) => {
 return (
  <section className={style.roadmap + ' ' + style[deviceType]}> 
    <section>
      <h2>Roadmap</h2>
        <ul>
          <li className={style.planned}>
            <div className={style.dot}></div>
            <p>Planned</p>
          </li>
          <li className={style['in-progress']}>
            <div className={style.dot}></div>
            <p>In-Progress</p>
          </li>
          <li className={style.live}>
            <div className={style.dot}></div>
            <p>Live</p>
          </li>
        </ul>
    </section>
    <section>
    <Link to='/roadmapview'>View</Link>
    <p className={style.amount}>{planned}</p>
    <p className={style.amount}>{inProgress}</p>
    <p className={style.amount}>{live}</p>
    </section>
  </section>
 )
}

export default Roadmap
