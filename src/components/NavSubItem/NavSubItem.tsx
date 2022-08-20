import React from 'react'
import { Link } from 'react-router-dom'

import './NavSubItem.scss'

export interface navSubItemProps{
    path:string,
    label:string,
    selected:boolean
}

export default function NavSubItem(props:navSubItemProps) {
  return (
    <>
        <span  className={`navSubItem ${props.selected ? 'selected' :  ''}` }>
        <span className='navSubItem_bullet'></span>
        <Link to={props.path}>{props.label}</Link>
        </span>
    </>
  )
}
