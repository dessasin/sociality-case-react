import { createSlice } from "@reduxjs/toolkit";
import client0 from '../assets/clientLogos/Logo1.png'
import client1 from '../assets/clientLogos/Logo2.png'
import client2 from '../assets/clientLogos/Logo3.png'
import client3 from '../assets/clientLogos/Logo4.png'
import client4 from '../assets/clientLogos/Logo5.png'
import client5 from '../assets/clientLogos/Logo6.png'


export const clients = createSlice({
    name:'clients',
    initialState:{
      clients:[
        {
          idPrefix: 'clientItem',
          label: 'Client0',
          select: false,
          notifications:10,
          icon:client0,
        },
        {
          idPrefix: 'clientItem',
          label: 'Client1',
          select: false,
          notifications:12,
          icon:client1,

        },
        {
          idPrefix: 'clientItem',
          label: 'Client2',
          select: false,
          notifications:13,
          icon:client2,
        },
        {
          idPrefix: 'clientItem',
          label: 'Client3',
          select: true,
          notifications:99,
          icon:client3,
        },
        {
          idPrefix: 'clientItem',
          label: 'Client4',
          select: false,
          notifications:2,
          icon:client4,
        },
        {
          idPrefix: 'clientItem',
          label: 'Client5',
          select: false,
          notifications:6,
          icon:client5,
        },]

    },
    reducers:{
      setClientSelect(state, action){
        state.clients.map(x=> {return x.select = false})
        state.clients[action.payload].select = !state.clients[action.payload].select
      }
    }

})

export const {setClientSelect} = clients.actions;

export default clients.reducer