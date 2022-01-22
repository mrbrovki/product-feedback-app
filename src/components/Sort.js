import React, {useContext, useEffect, useState} from 'react';
import { Context } from './App';
import styles from '../styles/FeedbackHeader.module.css';
const Sort = () => {
 const {state: {sort}, dispatch} = useContext(Context);
 const [visibility, setVisibility] = useState('hidden');

 const changeVisibility = () =>{
  setVisibility(prev => prev === 'hidden' ? 'shown': 'hidden');
 }
 const changeSort = (val) =>{
  dispatch({type: 'SORT', value: val});
 }
 useEffect(() =>{
  const sort = document.querySelector('#sort');
  sort.addEventListener('click', changeVisibility);
 }, [])
 return (
   <div className={styles.sort} id='sort'>Sort by:
   <span> {sort} </span>
   <img src='./assets/shared/icon-arrow-down.svg'/>
   <ul className={styles[visibility]}>
    <li onClick={() => changeSort('most upvoted')}>most upvoted</li>
    <li onClick={() => changeSort('least upvoted')}>least upvoted</li>
    <li onClick={() => changeSort('most comments')}>most comments</li>
    <li onClick={() => changeSort('least comments')}>least comments</li>
   </ul>
   </div>
 )
}

export default Sort
