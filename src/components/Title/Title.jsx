import React from "react";
import s from './Title.module.scss'
const Title=({text})=>(
    <div className={s.wrapper}>
       <h2>{text}</h2>
    </div>)

export default Title