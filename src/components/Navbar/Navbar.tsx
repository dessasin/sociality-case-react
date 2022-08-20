import NavItem from '../NavItem/NavItem'
import './Navbar.scss'
import { useSelector,useDispatch } from 'react-redux'
import { setNavItemSelect } from '../../stores/site';
export default function Navbar() {
  const navItems = useSelector((state:any) => state.siteDefaults.navItems )
  const dispatch = useDispatch();

  return (
    <div className='navbar'>
      <>
        {
          navItems.map((navitem:any, index:number) => {
            return <NavItem key={navitem.idPrefix + index} id={navitem.idPrefix + index} label={navitem.label} select={navitem.select} icon={navitem.icon} childs={navitem.childs} onClick={()=>{
              dispatch(setNavItemSelect(index))
            }}/>
          })
        }
      </>
    </div>
  )
}
