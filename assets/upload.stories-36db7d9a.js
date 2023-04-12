import{j as a}from"./jsx-runtime-ccada58e.js";import{a as j}from"./chunk-KKE3V3AL-168aaf13.js";import{r as V}from"./index-f1f749bf.js";import{a as T}from"./axios-707ed124.js";import{I as o}from"./icon-517f4a87.js";import{P as M}from"./progress-a1c0d9c5.js";import{c as $}from"./index-2e4736b8.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-5ae439ea.js";import"./index-4d501b15.js";const C=r=>{const{fileList:d,onRemove:p}=r;return a.jsx("ul",{className:"v-upload-list",children:d.map(n=>a.jsxs("li",{className:"v-upload-list-item",children:[a.jsxs("span",{className:`file-name file-name-${n.status}`,children:[a.jsx(o,{icon:"file-alt",theme:"secondary"}),n.name]}),a.jsxs("span",{className:"file-status",children:[(n.status==="uploading"||n.status==="ready")&&a.jsx(o,{icon:"spinner",spin:!0,theme:"primary"}),n.status==="success"&&a.jsx(o,{icon:"check-circle",theme:"success"}),n.status==="error"&&a.jsx(o,{icon:"times-circle",theme:"danger"})]}),a.jsx("span",{className:"file-actions",children:a.jsx(o,{icon:"times",onClick:()=>{p(n)}})}),n.status==="uploading"&&a.jsx(M,{percent:n.percent||0})]},n.uid))})};try{C.displayName="UploadList",C.__docgenInfo={description:"",displayName:"UploadList",props:{fileList:{defaultValue:null,description:"",name:"fileList",required:!0,type:{name:"UploadFile[]"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(_file: UploadFile) => void"}}}}}catch{}try{uploadList.displayName="uploadList",uploadList.__docgenInfo={description:"",displayName:"uploadList",props:{fileList:{defaultValue:null,description:"",name:"fileList",required:!0,type:{name:"UploadFile[]"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(_file: UploadFile) => void"}}}}}catch{}const x=r=>{const{onFile:d,children:p}=r,[n,c]=V.useState(!1),g=$("v-uploader-dragger",{"is-dragover":n}),h=t=>{t.preventDefault(),c(!1),d(t.dataTransfer.files)},s=(t,_)=>{t.preventDefault(),c(_)};return a.jsx("div",{className:g,onDragOver:t=>{s(t,!0)},onDragLeave:t=>{s(t,!1)},onDrop:h,children:p})};try{x.displayName="Dragger",x.__docgenInfo={description:"",displayName:"Dragger",props:{onFile:{defaultValue:null,description:"",name:"onFile",required:!0,type:{name:"(files: FileList) => void"}}}}}catch{}try{dragger.displayName="dragger",dragger.__docgenInfo={description:"",displayName:"dragger",props:{onFile:{defaultValue:null,description:"",name:"onFile",required:!0,type:{name:"(files: FileList) => void"}}}}}catch{}const y=r=>{const{action:d,defaultFileList:p,beforeUpload:n,onProgress:c,onSuccess:g,onError:h,onChange:s,onRemove:t,name:_,headers:R,data:E,withCredentials:A,accept:k,multiple:P,children:U,drag:I}=r,m=V.useRef(null),[S,v]=V.useState(p||[]),D=(u,l)=>{v(i=>i.map(e=>e.uid===u.uid?{...e,...l}:e))},w=()=>{m.current&&m.current.click()},z=u=>{const l=u.target.files;l&&(b(l),m.current&&(m.current.value=""))},O=u=>{v(l=>l.filter(i=>i.uid!==u.uid)),t&&t(u)},b=u=>{Array.from(u).forEach(i=>{if(!n)q(i);else{const e=n(i);e&&e instanceof Promise?e.then(f=>{q(f)}):e!==!1&&q(i)}})},q=u=>{const l={uid:Date.now()+"upload-file",status:"ready",name:u.name,size:u.size,percent:0,raw:u};v(e=>[l,...e]);const i=new FormData;i.append(_||"file",u),E&&Object.keys(E).forEach(e=>{i.append(e,E[e])}),T.post(d,i,{headers:{...R,"Content-Type":"multipart/form-data"},withCredentials:A,onUploadProgress:e=>{const f=Math.round(e.loaded*100/e.total)||0;f<100&&(D(l,{percent:f,status:"uploading"}),c&&c(f,u))}}).then(e=>{D(l,{status:"success",response:e.data}),g&&g(e.data,u),s&&s(u)}).catch(e=>{D(l,{status:"error",error:e}),h&&h(e,u),s&&s(u)})};return a.jsxs("div",{className:"v-upload-component",children:[a.jsxs("div",{className:"v-upload-input",style:{display:"inline-block"},onClick:w,children:[I?a.jsx(x,{onFile:u=>{b(u)},children:U}):U,a.jsx("input",{className:"v-file-input",style:{display:"none"},ref:m,onChange:z,type:"file",accept:k,multiple:P})]}),a.jsx(C,{fileList:S,onRemove:O})]})};y.defaultProps={name:"file"};try{y.displayName="Upload",y.__docgenInfo={description:"",displayName:"Upload",props:{action:{defaultValue:null,description:"接口地址",name:"action",required:!0,type:{name:"string"}},defaultFileList:{defaultValue:null,description:"file array",name:"defaultFileList",required:!1,type:{name:"UploadFile[]"}},beforeUpload:{defaultValue:null,description:"上传前回调函数",name:"beforeUpload",required:!1,type:{name:"((file: File) => boolean | Promise<File>)"}},onProgress:{defaultValue:null,description:"on progress",name:"onProgress",required:!1,type:{name:"((percentage: number, file: File) => void)"}},onSuccess:{defaultValue:null,description:"上传成功的回调函数",name:"onSuccess",required:!1,type:{name:"((data: any, file: File) => void)"}},onError:{defaultValue:null,description:"上传错误的回调",name:"onError",required:!1,type:{name:"((err: any, file: File) => void)"}},onChange:{defaultValue:null,description:"文件修改的回调",name:"onChange",required:!1,type:{name:"((file: File) => void)"}},onRemove:{defaultValue:null,description:"移除上传文件的回调",name:"onRemove",required:!1,type:{name:"((file: UploadFile) => void)"}},headers:{defaultValue:null,description:"请求头信息",name:"headers",required:!1,type:{name:"{ [key: string]: any; }"}},name:{defaultValue:{value:"file"},description:"name",name:"name",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"data",name:"data",required:!1,type:{name:"{ [key: string]: any; }"}},withCredentials:{defaultValue:null,description:"跨域请求时是否需要使用凭证",name:"withCredentials",required:!1,type:{name:"boolean"}},accept:{defaultValue:null,description:"返回数据的类型",name:"accept",required:!1,type:{name:"string"}},multiple:{defaultValue:null,description:"是否允许选择多项",name:"multiple",required:!1,type:{name:"boolean"}},drag:{defaultValue:null,description:"是否开启拖拽",name:"drag",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{upload.displayName="upload",upload.__docgenInfo={description:"",displayName:"upload",props:{action:{defaultValue:null,description:"接口地址",name:"action",required:!0,type:{name:"string"}},defaultFileList:{defaultValue:null,description:"file array",name:"defaultFileList",required:!1,type:{name:"UploadFile[]"}},beforeUpload:{defaultValue:null,description:"上传前回调函数",name:"beforeUpload",required:!1,type:{name:"((file: File) => boolean | Promise<File>)"}},onProgress:{defaultValue:null,description:"on progress",name:"onProgress",required:!1,type:{name:"((percentage: number, file: File) => void)"}},onSuccess:{defaultValue:null,description:"上传成功的回调函数",name:"onSuccess",required:!1,type:{name:"((data: any, file: File) => void)"}},onError:{defaultValue:null,description:"上传错误的回调",name:"onError",required:!1,type:{name:"((err: any, file: File) => void)"}},onChange:{defaultValue:null,description:"文件修改的回调",name:"onChange",required:!1,type:{name:"((file: File) => void)"}},onRemove:{defaultValue:null,description:"移除上传文件的回调",name:"onRemove",required:!1,type:{name:"((file: UploadFile) => void)"}},headers:{defaultValue:null,description:"请求头信息",name:"headers",required:!1,type:{name:"{ [key: string]: any; }"}},name:{defaultValue:{value:"file"},description:"name",name:"name",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"data",name:"data",required:!1,type:{name:"{ [key: string]: any; }"}},withCredentials:{defaultValue:null,description:"跨域请求时是否需要使用凭证",name:"withCredentials",required:!1,type:{name:"boolean"}},accept:{defaultValue:null,description:"返回数据的类型",name:"accept",required:!1,type:{name:"string"}},multiple:{defaultValue:null,description:"是否允许选择多项",name:"multiple",required:!1,type:{name:"boolean"}},drag:{defaultValue:null,description:"是否开启拖拽",name:"drag",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"children",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const ue={title:"Data Entry/Upload 上传",component:y},G=r=>a.jsxs(y,{...r,children:[a.jsx(o,{icon:"plus",size:"3x",theme:"secondary"}),a.jsx("br",{}),a.jsx("p",{style:{margin:0},children:"Upload"})]}),F=G.bind({});F.args={action:"https://run.mocky.io/v3/f58d4544-a9d0-44ad-b9f8-ce2ddf48a1ba",onChange:j("changed"),onRemove:j("removed"),name:"file",multiple:!0,drag:!0,defaultFileList:[{uid:"aaaa",name:"image.png",status:"success",size:1024},{uid:"bbbb",name:"image1.png",status:"ready",size:1024},{uid:"cccc",name:"image2.png",status:"uploading",size:1024,percent:80},{uid:"ffff",name:"image3.png",status:"error",size:1024}]};var L,N,B;F.parameters={...F.parameters,docs:{...(L=F.parameters)==null?void 0:L.docs,source:{originalSource:`props => <Upload {...props}>
    <Icon icon="plus" size="3x" theme="secondary" />
    <br />
    <p style={{
    margin: 0
  }}>Upload</p>
  </Upload>`,...(B=(N=F.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const ne=["SimpleUpload"];export{F as SimpleUpload,ne as __namedExportsOrder,ue as default};
//# sourceMappingURL=upload.stories-36db7d9a.js.map
