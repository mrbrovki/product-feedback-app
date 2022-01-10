import React from 'react'
import style from '../styles/Feedback.module.css'
const Feedback = ({data}) => {
 const {title, description, upvotes, category} = data;
 return (
  <section className={style.feedback}>
   <div className={style.upvotes}>
    <img src='./assets/shared/icon-arrow-up.svg'/>
    <p>{upvotes}</p>
    </div>
   <h3>{title}</h3>
   <p>{description}</p>
   <p className={style.category}>{category}</p>

   {/* Link */}
   <div className={style['comments-length']}>
    <img src='./assets/shared/icon-comments.svg'/>
    <span>{data.comments?.length}</span>
    </div>
    {/* Link */}
  </section>
 )
}

export default Feedback
