import React, { ReactDOM } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { bitGray, lightGray, midGray } from '../theme'
import logo from '../imgs/paxful_logo.png'

const SubNavWrapper = styled.div`
   color: ${midGray};
   display: flex;
   justify-content: space-between;
   align-items: center;
   img {
     margin-left: 10px;
     height: 40px;
   }
   box-shadow: 0 0 3px ${midGray};
`

const SubNaviUl = styled.ul`
   display: flex;
   margin: 0;
`

const SubNaviLi = styled.li`
   list-style-type: none;
   padding: 15px 20px;
   border-left: 1px solid ${bitGray};
   font-weight: bold;
   &:last-child {
      border-right: 1px solid ${bitGray};
   }
   &.active {
      background: ${bitGray};
   }
   a {
     color: ${midGray};
     text-decoration: none;
   }
`

interface ISubNavi {
   path: string,
   label: string,
   active: boolean
}

const NaviList : Array<ISubNavi> = [
   {path:'/sell-bitcoins/overview', label:'Overview', active: false},
   {path:'/sell-bitcoins', label: 'Trades', active: true},  //default as Trade
   {path: '/sell-bitcoins/disputes', label: 'Disputes', active: false},
   {path: '/sell-bitcoins/offers', label: 'Your offers', active: false},
   {path: '/sell-bitcoins/team', label: 'My team', active: false},
   {path: '/sell-bitcoins/trade-history', label: 'Trade History', active: false}
]

//just for display UI no real link
const SubNavBar = () => (
  <SubNavWrapper>
    <SubNaviUl>
       {
         NaviList.map((ele, index)=>{
            return (
               <SubNaviLi key={index} className={ele.active ? 'active' : ''}>
                  <Link to={ele.path}>{ele.label}</Link>              
               </SubNaviLi>
            )
         })
       }
    </SubNaviUl>
  </SubNavWrapper>
)

export default SubNavBar
