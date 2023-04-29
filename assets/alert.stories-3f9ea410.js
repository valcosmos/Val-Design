import{j as e}from"./jsx-runtime-94f6e698.js";import{a as k}from"./chunk-OPEUWD42-ea7fb94f.js";import{r as W}from"./index-8db94870.js";import{c as d}from"./index-582f377c.js";import"./index-0d89e6c9.js";import"./index-2bf6b95c.js";import{T as z}from"./transition-fb4c8409.js";import{I as H}from"./icon-57bbb62c.js";import"./v4-a960c1f4.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-9eefaa95.js";import"./index-8ce4a492.js";import"./index-5ae439ea.js";import"./index-1fc0ca9a.js";const o=r=>{const[j,q]=W.useState(!1),{title:V,description:i,type:c,onClose:p,closable:N}=r,S=d("v-alert",{[`v-alert-${c}`]:c}),w=d("v-alert-title",{"bold-title":i}),I=T=>{console.log(T),p&&p(),q(!0)};return e.jsx(z,{in:!j,timeout:300,animation:"zoom-in-top",children:e.jsxs("div",{className:S,children:[e.jsx("span",{className:w,children:V}),i&&e.jsx("p",{className:"v-alert-desc",children:i}),N&&e.jsx("div",{className:"v-alert-close",onClick:I,children:e.jsx(H,{icon:"times"})})]})})};o.defaultProps={type:"default",closable:!0};try{o.displayName="Alert",o.__docgenInfo={description:`> 用于页面中展示重要的提示信息, 点击右侧的叉提示自动消失。

### 引用方法

\`\`\`js

import { Alert } from 'val-design'


\`\`\``,displayName:"Alert",props:{title:{defaultValue:null,description:"标题",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"描述",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"类型 四种可选 针对四种不同的场景",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'}]}},onClose:{defaultValue:null,description:"关闭alert时触发的事件",name:"onClose",required:!1,type:{name:"(() => void)"}},closable:{defaultValue:{value:"true"},description:"是否显示关闭图标",name:"closable",required:!1,type:{name:"boolean"}}}}}catch{}try{alert.displayName="alert",alert.__docgenInfo={description:`> 用于页面中展示重要的提示信息, 点击右侧的叉提示自动消失。

### 引用方法

\`\`\`js

import { Alert } from 'val-design'


\`\`\``,displayName:"alert",props:{title:{defaultValue:null,description:"标题",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"描述",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"类型 四种可选 针对四种不同的场景",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'}]}},onClose:{defaultValue:null,description:"关闭alert时触发的事件",name:"onClose",required:!1,type:{name:"(() => void)"}},closable:{defaultValue:{value:"true"},description:"是否显示关闭图标",name:"closable",required:!1,type:{name:"boolean"}}}}}catch{}const ee={title:"Feedback/Alert 警告提示",component:o},n=r=>e.jsx(o,{...r}),u=n.bind({});u.args={title:"this is alert"};const t=n.bind({});t.args={title:"this is success alert",type:"success"};const s=n.bind({});s.args={title:"this is danger alert",type:"danger"};const a=n.bind({});a.args={title:"this is warning alert",type:"warning"};const l=n.bind({});l.args={title:"this is desc alert",description:"this is long description",onClose:k("closed")};var m,f,A;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:"props => <Alert {...props} />",...(A=(f=u.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var g,D,F;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"props => <Alert {...props} />",...(F=(D=t.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var E,y,C;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:"props => <Alert {...props} />",...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var v,B,_;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:"props => <Alert {...props} />",...(_=(B=a.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var b,h,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:"props => <Alert {...props} />",...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const re=["DefaultAlert","SuccessAlert","DangerAlert","WarningAlert","DescAlert"];export{s as DangerAlert,u as DefaultAlert,l as DescAlert,t as SuccessAlert,a as WarningAlert,re as __namedExportsOrder,ee as default};
//# sourceMappingURL=alert.stories-3f9ea410.js.map
