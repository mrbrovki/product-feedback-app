import React, {useState} from 'react'
import style from '../styles/Filter.module.css'

const Filter = ({filter, dispatch, deviceType}) => {
  const anyIsTRue = obj => {
    for(let el in obj ){
      if(obj[el] === true){
        return true
      }
    }
    return false;
}
  const handleChange = (e) => {
    if(e.target.name === 'All'){
      dispatch({type: 'FILTER', value: {all: true, ui: false, ux: false, enhancements: false, bug: false, feature: false}});
    }
    else{
      if(!anyIsTRue){
        dispatch({type: 'FILTER', value: {all: true, ui: false, ux: false, enhancements: false, bug: false, feature: false}});
      }
      else{
        dispatch({type: 'FILTER', value: {all: false, [e.target.name.toLowerCase()]: e.target.checked}});
      }
    }
  };
 const filterInputs = ['All','UI', 'UX', 'Enhancements', 'Bug', 'Feature'].map((el, index) => 
 <span key={index}>
  <input type='checkbox' id={el} name={el} value={el} checked={filter[el.toLowerCase()]}
         onChange={(e) => handleChange(e)}/>
  <label htmlFor={el}>{el}</label>
 </span>);
 return (
  <form>
   <fieldset className={style.filter + ' ' + style[deviceType]}>
    {filterInputs}
   </fieldset>
  </form>
 )
}

export default Filter
