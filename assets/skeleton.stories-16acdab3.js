var p=Object.defineProperty;var r=(e,s)=>p(e,"name",{value:s,configurable:!0});import{c as m}from"./index-ed86a6de.js";import{j as o,F as k}from"./jsx-runtime-82e0d3de.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const t=r(({active:e,row:s,children:a})=>{let l=[0];a||(l=Array.from({length:s},()=>1).map((c,d)=>d));const i=m("v-skeleton",{"v-skeleton__active":e,"v-skeleton__row":l.length>0,"v-skeleton__bg":!!a});return o(k,{children:l.map(c=>o("div",{className:i,children:a},c))})},"Skeleton");t.defaultProps={row:4};try{t.displayName="Skeleton",t.__docgenInfo={description:"",displayName:"Skeleton",props:{active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},row:{defaultValue:{value:"4"},description:"",name:"row",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/skeleton.tsx#Skeleton"]={docgenInfo:t.__docgenInfo,name:"Skeleton",path:"src/components/Skeleton/skeleton.tsx#Skeleton"})}catch{}try{skeleton.displayName="skeleton",skeleton.__docgenInfo={description:"",displayName:"skeleton",props:{active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},row:{defaultValue:{value:"4"},description:"",name:"row",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/skeleton.tsx#skeleton"]={docgenInfo:skeleton.__docgenInfo,name:"skeleton",path:"src/components/Skeleton/skeleton.tsx#skeleton"})}catch{}const b={title:"Feedback/Skeleton 骨架屏",component:t},n=r(e=>o(t,{...e}),"Template"),_=n.bind({});_.args={};const S=n.bind({});S.args={active:!0};const u=n.bind({});u.args={active:!0,children:o("p",{style:{padding:"20px"},children:"Content here(it could be images or others)"})};const f=n.bind({});f.args={row:8,active:!0};const w=["BasicSkeleton","ActiveSkeleton","SkeletonAsBackground","MultiRow"];export{S as ActiveSkeleton,_ as BasicSkeleton,f as MultiRow,u as SkeletonAsBackground,w as __namedExportsOrder,b as default};
//# sourceMappingURL=skeleton.stories-16acdab3.js.map