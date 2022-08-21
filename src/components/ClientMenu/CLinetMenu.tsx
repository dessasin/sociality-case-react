import './ClientMenu.scss'
import ClientMenuItem from '../ClientMenuItem/ClientMenuItem'
import { useSelector,useDispatch } from 'react-redux'
import { setClientSelect } from '../../stores/clients';
export default function CLinetMenu() {
  const clients = useSelector((state:any)=> state.clients.clients)
  const dispatch = useDispatch();
  return (
    <div className='clientMenu'>
       <>
        {
          clients.map((clientItem:any, index:number) => {
            return <ClientMenuItem key={clientItem.idPrefix + index} id={clientItem.idPrefix + index} label={clientItem.label} select={clientItem.select} icon={clientItem.icon} notifications={clientItem.notifications}  onClick={()=>{
              dispatch(setClientSelect(index))
            }}/>
          })
        }
      </>

    </div>
  )
}
