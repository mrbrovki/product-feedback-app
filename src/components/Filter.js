import React, {useState} from 'react'
import style from '../styles/Filter.module.css'

const Filter = ({deviceType}) => {
 const [filter, setFilter] = useState({all: true, ui: false, ux: false, enhancements: false, bug: false, feature: false});
  const handleChange = (e) => {
    if(e.target.name === 'All'){
      setFilter({all: true, ui: false, ux: false, enhancements: false, bug: false, feature: false});
    }
    else{
      setFilter({...filter, all: false, [e.target.name.toLowerCase()]: e.target.checked});
    }
  };
 const filterInputs = ['All','UI', 'UX', 'Enhancements', 'Bug', 'Feature'].map((el, index) => 
 <span key={index}>
  <input type='checkbox' id={el} name={el} value={el} checked={filter[el.toLowerCase()]} onChange={(e) => handleChange(e)}/>
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
