var q=Object.defineProperty;var l=(e,t)=>q(e,"name",{value:t,configurable:!0});import{r as C,j as n,R as b,b as m}from"./jsx-runtime-597274de.js";import{c as _}from"./index-9f7f24f4.js";import{I as R}from"./icon-85347f99.js";import{T}from"./transition-67cab8da.js";import{a as O}from"./index-4f5f4b98.js";import"./iframe-ffb46370.js";import"./index-55a28f55.js";import"./index-a2f37619.js";import"./index-1a0fb9f3.js";import"./make-decorator-f61b13ac.js";const A=C.exports.createContext({index:"0"}),S=l(e=>{const{className:t,mode:s,style:p,children:o,defaultIndex:f,onSelect:i,defaultOpenSubMenus:r}=e,[M,E]=C.exports.useState(f),x=_("v-menu",t,{"menu-vertical":s==="vertical","menu-horizontal":s!=="vertical"}),h={index:M||"0",onSelect:l(c=>{E(c),i&&i(c)},"handleClick"),mode:s,defaultOpenSubMenus:r},v=l(()=>b.Children.map(o,(c,F)=>{const a=c,{displayName:d}=a.type;if(d==="MenuItem"||d==="SubMenu")return b.cloneElement(a,{index:F.toString()});console.error("Warning: Menu has a child which is not a MenuItem component")}),"renderChildren");return n("ul",{className:x,style:p,"data-testid":"test-menu",children:n(A.Provider,{value:h,children:v()})})},"Menu$1");S.defaultProps={defaultIndex:"0",mode:"horizontal",defaultOpenSubMenus:[]};try{S.displayName="Menu",S.__docgenInfo={description:`> 为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。

### 引用方法

\`\`\`js

 import { Menu } from 'v-design'

\`\`\``,displayName:"Menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"默认 active 的菜单项的索引值",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"菜单类型 横向或者纵向",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"菜单样式",name:"style",required:!1,type:{name:"CSSProperties"}},onSelect:{defaultValue:null,description:"点击菜单项触发的回掉函数",name:"onSelect",required:!1,type:{name:"((selectedIndex: string) => void)"}},defaultOpenSubMenus:{defaultValue:{value:"[]"},description:"设置子菜单的默认打开 只在纵向模式下生效",name:"defaultOpenSubMenus",required:!1,type:{name:"string[]"}},children:{defaultValue:null,description:"子元素",name:"children",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.tsx#Menu"]={docgenInfo:S.__docgenInfo,name:"Menu",path:"src/components/Menu/menu.tsx#Menu"})}catch{}try{menu.displayName="menu",menu.__docgenInfo={description:`> 为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。

### 引用方法

\`\`\`js

 import { Menu } from 'v-design'

\`\`\``,displayName:"menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"默认 active 的菜单项的索引值",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"菜单类型 横向或者纵向",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"菜单样式",name:"style",required:!1,type:{name:"CSSProperties"}},onSelect:{defaultValue:null,description:"点击菜单项触发的回掉函数",name:"onSelect",required:!1,type:{name:"((selectedIndex: string) => void)"}},defaultOpenSubMenus:{defaultValue:{value:"[]"},description:"设置子菜单的默认打开 只在纵向模式下生效",name:"defaultOpenSubMenus",required:!1,type:{name:"string[]"}},children:{defaultValue:null,description:"子元素",name:"children",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.tsx#menu"]={docgenInfo:menu.__docgenInfo,name:"menu",path:"src/components/Menu/menu.tsx#menu"})}catch{}const I=l(({index:e,title:t,children:s,className:p})=>{const o=C.exports.useContext(A),f=o.defaultOpenSubMenus,i=e&&o.mode==="vertical"?f.includes(e):!1,[r,M]=C.exports.useState(i),E=_("menu-item submenu-item",p,{"is-active":o.index===e,"is-opened":r,"is-vertical":o.mode==="vertical"}),x=l(a=>{a.preventDefault(),M(!r)},"handleClick");let B;const h=l((a,d)=>{clearTimeout(B),a.preventDefault(),B=setTimeout(()=>{M(d)},300)},"handleMouse"),v=o.mode==="vertical"?{onClick:x}:{},c=o.mode!=="vertical"?{onMouseEnter:a=>{h(a,!0)},onMouseLeave:a=>{h(a,!1)}}:{},F=l(()=>{const a=_("v-submenu",{"menu-opened":r}),d=b.Children.map(s,(N,V)=>{const g=N;if(g.type.displayName==="MenuItem")return b.cloneElement(g,{index:`${e}-${V}`});console.error("Warning: SubMenu has a child which is not a MenuItem component")});return n(T,{in:r,timeout:300,animation:"zoom-in-top",children:n("ul",{className:a,children:d})})},"renderChildren");return m("li",{className:E,...c,children:[m("div",{className:"submenu-title",...v,children:[t,n(R,{icon:"angle-down",className:"arrow-icon"})]}),F()]},e)},"SubMenu");I.displayName="SubMenu";try{I.displayName="SubMenu",I.__docgenInfo={description:"",displayName:"SubMenu",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Menu/subMenu.tsx#SubMenu"]={docgenInfo:I.__docgenInfo,name:"SubMenu",path:"src/components/Menu/subMenu.tsx#SubMenu"})}catch{}const y=l(e=>{const{index:t,disabled:s,className:p,style:o,children:f}=e,i=C.exports.useContext(A),r=_("menu-item",p,{"is-disabled":s,"is-active":i.index===t});return n("li",{className:r,style:o,onClick:l(()=>{i.onSelect&&!s&&typeof t=="string"&&i.onSelect(t)},"handleClick"),children:f})},"MenuItem");y.displayName="MenuItem";try{y.displayName="MenuItem",y.__docgenInfo={description:"",displayName:"MenuItem",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menuItem.tsx#MenuItem"]={docgenInfo:y.__docgenInfo,name:"MenuItem",path:"src/components/Menu/menuItem.tsx#MenuItem"})}catch{}const D=S;D.Item=y;D.SubMenu=I;const u=D,G={parameters:{storySource:{source:`import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Menu from './index'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Data Entry/Menu 导航菜单',
  component: Menu
} as ComponentMeta<typeof Menu>

export const HorizontalMenu: ComponentStory<typeof Menu> = (args) => (
  <Menu
    {...args}
    defaultIndex={'0'}
    onSelect={(index) => action(\`clicked \${index} item\`)}
  >
    <Menu.Item>menu 1</Menu.Item>
    <Menu.Item disabled>disabled</Menu.Item>
    <Menu.SubMenu title="sub menu">
      <Menu.Item>submenu 1</Menu.Item>
      <Menu.Item>submenu 1</Menu.Item>
      <Menu.Item>submenu 1</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item>menu2</Menu.Item>
  </Menu>
)
export const VerticalMenu: ComponentStory<typeof Menu> = (args) => (
  <Menu
    {...args}
    defaultIndex={'0'}
    mode="vertical"
    onSelect={(index) => action(\`clicked \${index} item\`)}
  >
    <Menu.Item>cool link</Menu.Item>
    <Menu.Item disabled>disabled</Menu.Item>
    <Menu.SubMenu title="sub menu">
      <Menu.Item>submenu 1</Menu.Item>
      <Menu.Item>submenu 1</Menu.Item>
      <Menu.Item>submenu 1</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item>cool link 2</Menu.Item>
  </Menu>
)
`,locationsMap:{"horizontal-menu":{startLoc:{col:59,line:12},endLoc:{col:1,line:27},startBody:{col:59,line:12},endBody:{col:1,line:27}},"vertical-menu":{startLoc:{col:57,line:28},endLoc:{col:1,line:44},startBody:{col:57,line:28},endBody:{col:1,line:44}}}}},title:"Data Entry/Menu 导航菜单",component:u},J=l(e=>m(u,{...e,defaultIndex:"0",onSelect:t=>O(`clicked ${t} item`),children:[n(u.Item,{children:"menu 1"}),n(u.Item,{disabled:!0,children:"disabled"}),m(u.SubMenu,{title:"sub menu",children:[n(u.Item,{children:"submenu 1"}),n(u.Item,{children:"submenu 1"}),n(u.Item,{children:"submenu 1"})]}),n(u.Item,{children:"menu2"})]}),"HorizontalMenu"),Q=l(e=>m(u,{...e,defaultIndex:"0",mode:"vertical",onSelect:t=>O(`clicked ${t} item`),children:[n(u.Item,{children:"cool link"}),n(u.Item,{disabled:!0,children:"disabled"}),m(u.SubMenu,{title:"sub menu",children:[n(u.Item,{children:"submenu 1"}),n(u.Item,{children:"submenu 1"}),n(u.Item,{children:"submenu 1"})]}),n(u.Item,{children:"cool link 2"})]}),"VerticalMenu"),U=["HorizontalMenu","VerticalMenu"];export{J as HorizontalMenu,Q as VerticalMenu,U as __namedExportsOrder,G as default};
//# sourceMappingURL=menu.stories-cf8d4b93.js.map
