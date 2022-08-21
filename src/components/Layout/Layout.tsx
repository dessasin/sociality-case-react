import logo from '../../assets/logo.png'
import Router from '../Router/Router';
import ClientMenu from '../ClientMenu/CLinetMenu'
import Navbar from '../Navbar/Navbar'

import './Layout.scss';

export default function Layout() {

  return (
    <div className='sociality_layout'>
      <aside className='sociality_aside'>
        <div className="logo">
          <img src={logo} alt="Viyan kusatmasinin 3. gecesi" />
        </div>
        <div className="aside_menus">
          <div className="aside_clients">
            <ClientMenu/>
          </div>
          <div className="aside_nav">
            <Navbar/>
          </div>
        </div>
      </aside >
      <main>
        <Router/>
      </main>
    </div >
  )
}
