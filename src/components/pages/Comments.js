import React from 'react'
import { useParams } from 'react-router-dom'
import Feedback from '../Feedback';

import '../../styles/Comments.module.css'
const Comments = () => {
 const  {id} = useParams();
 return (
  <div>
   {id}
  </div>
 )
}

export default Comments
