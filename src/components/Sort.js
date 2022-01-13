import React, {useContext} from 'react'
import { Context } from './App'
const Sort = () => {
 const {dispatch} = useContext(Context);
 return (
  <section>
   <label htmlFor='sort'>Sort by : </label>
   
  </section>
 )
}

export default Sort
