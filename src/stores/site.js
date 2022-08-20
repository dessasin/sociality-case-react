import { createSlice } from "@reduxjs/toolkit";
import rise from '../assets/icons/rise.svg'
import publish from '../assets/icons/publish.svg'
import engage from '../assets/icons/engage.svg'
import listen from '../assets/icons/listen.svg'
import report from '../assets/icons/report.svg'

export const site = createSlice({
    name:'site',
    initialState:{
      value:12,
      navItems:[
        {
          idPrefix: 'navItem',
          label: 'Summary',
          select: false,
          icon:rise,
          childs:[]
        },
        {
          idPrefix: 'navItem',
          label: 'Publish',
          select: true,
          icon:publish,
          childs:[
            {
              label:'Compose',
              idPrefix:'navSubItem',
              path:'/compose'

            },
            {
              label:'Feed',
              idPrefix:'navSubItem',
              path:'/feeds'
            },
          ]
        },
        {
          idPrefix: 'navItem',
          label: 'Engage',
          select: false,
          icon:engage,
          childs:[]
        },
        {
          idPrefix: 'navItem',
          label: 'Listen',
          select: false,
          icon:listen,
          childs:[]
        },
        {
          idPrefix: 'navItem',
          label: 'Report',
          select: false,
          icon:report,
          childs:[]
        },]

    },
    reducers:{
      setNavItemSelect(state, action){
        // state.navItems.map(x=> x.select = false)
        state.navItems[action.payload].select = !state.navItems[action.payload].select
        console.log(state.navItems[action.payload].select);
      }
    }

})

export const {setNavItemSelect} = site.actions;

export default site.reducer