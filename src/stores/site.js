import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({
    name:'site',
    initialState:{
      value:12,
      navItems:[
        {
          idPrefix: 'navItem',
          label: 'Summary',
          select: false,
          childs:[]
        },
        {
          idPrefix: 'navItem',
          label: 'Publish',
          select: false,
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
          childs:[]
        },
        {
          idPrefix: 'navItem',
          label: 'Listen',
          select: false,
          childs:[]
        },
        {
          idPrefix: 'navItem',
          label: 'Report',
          select: false,
          childs:[]
        },]

    },
    reducers:{
      setNavItemSelect(state, action){
        state.navItems[action.payload].select = !state.navItems[action.payload].select
      }
    }

})

export const {setNavItemSelect} = site.actions;

export default site.reducer