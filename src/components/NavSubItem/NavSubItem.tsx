import React from 'react'
import { Link } from 'react-router-dom'

export interface navSubItemProps{
    path:string,
    label:string,
    selected:boolean
}

export default function NavSubItem(props:navSubItemProps) {
  return (
    <>
        <Link to={props.path} className={`navSubItem ${props.selected ? 'selected' :  ''}` }>{props.label}</Link>
    </>
  )
}
