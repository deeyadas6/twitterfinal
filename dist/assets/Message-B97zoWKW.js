import{r as s,j as e,L as r,I as i}from"./react-vendor-YaBxlGmv.js";import"./vendor-DkYvuI6X.js";const c=[{user:"@Alice.grace",text:"Hey! How are you?",time:"2m ago",avatar:"https://i.pravatar.cc/40?img=1"},{user:"@Bob.marley",text:"Did you check the latest update?",time:"10m ago",avatar:"https://i.pravatar.cc/40?img=2"},{user:"@Charlie._.puth",text:"Let's meet at 5 PM.",time:"30m ago",avatar:"https://i.pravatar.cc/40?img=3"},{user:"@David.dcosta",text:"Can you send me the report?",time:"1h ago",avatar:"https://i.pravatar.cc/40?img=4"},{user:"@Evelyn.reeya",text:"Great job on the project!",time:"3h ago",avatar:"https://i.pravatar.cc/40?img=5"}],m=s.memo(({msg:t})=>e.jsxs(r.Item,{className:"d-flex align-items-center",children:[e.jsx(i,{src:t.avatar,roundedCircle:!0,className:"me-3",width:40,height:40,loading:"lazy"}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsxs("div",{className:"d-flex justify-content-between",children:[e.jsx("strong",{children:t.user}),e.jsx("small",{className:"text-muted",children:t.time})]}),e.jsx("p",{className:"mb-0 text-truncate",children:t.text})]})]}));function l(){const t=s.useMemo(()=>c,[]);return e.jsxs("div",{className:"container mt-3",children:[e.jsx("h1",{className:"text-center",children:"Messages"}),e.jsx(r,{children:t.map(a=>e.jsx(m,{msg:a},a.user))})]})}export{l as default};
