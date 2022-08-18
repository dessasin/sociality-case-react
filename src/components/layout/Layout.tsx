import React from 'react'
import logo from '../../assets/logo.png'
import './Layout.scss';
interface layoutProps {
  children?: React.ReactElement,
  routes:any,
}

export default function Layout(props: layoutProps) {
  return (
    <div className='sociality_layout'>
      <aside className='sociality_aside'>
        <div className="logo">
          <img src={logo} alt="Viyan kusatmasinin 3. gecesi" />
        </div>
        <div className="aside_menus">
          <div className="aside_clients">
          a
          </div>
          <div className="aside_nav">
            b
          </div>
        </div>
      </aside>
      <main>
        {props.children}
      </main>
    </div>
  )
}
