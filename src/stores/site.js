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
          childs:[
            {
              label:'Hi 🙋‍♂️.',
              idPrefix:'navSubItem',
              path:'/'

            },
            {
              label:'I\'m glad to meet you. 🎉',
              idPrefix:'navSubItem',
              path:'/'

            },
          ]
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
              path:'/'

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
          childs:[
            {
              label:'I hope we will meet together. 🤗',
              idPrefix:'navSubItem',
              path:'/'

            },
          ]
        },
        {
          idPrefix: 'navItem',
          label: 'Listen',
          select: false,
          icon:listen,
          childs:[
            {
              label:'I ❤️  frontend .',
              idPrefix:'navSubItem',
              path:'/'

            },
            {
              label:'And also love goats. 🐐',
              idPrefix:'navSubItem',
              path:'/'

            },
          ]
        },
        {
          idPrefix: 'navItem',
          label: 'Report',
          select: false,
          icon:report,
          childs:[
            {
              label:'Lets connect https://dessasin.dev.',
              idPrefix:'navSubItem',
              path:'/'

            },
          ]
        },]

    },
    reducers:{
      setNavItemSelect(state, action){
        state.navItems.map(x=> {return x.select = false})
        state.navItems[action.payload].select = !state.navItems[action.payload].select
      }
    }

})

export const {setNavItemSelect} = site.actions;

export default site.reducer