"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[759],{3759:function(e,l,a){a.r(l),a.d(l,{default:function(){return N}});var n=a(885),i=a(1614),t=a(1889),s=a(7621),r=a(9585),u=a(9504),c=a(7391),d=a(6362),o=a(4925),m=a(5191),h=a(9891),j=a(2363),x=a(6151),p=a(5705),v=a(2791),Z=a(2797),f=a(184),b={firstName:"",lastName:"",occupation:"",email:"",message:"",subject:""},g=[{label:"Computer Programmer",value:"Computer_programmer"},{label:"Web Developer",value:"web_developer"},{label:"User Experience Designer",value:"user_experience_designer"},{label:"Systems Analyst",value:"systems_analyst"},{label:"Quality Assurance Tester",value:"quality_assurance_tester"}],y=Z.Ry().shape({firstName:Z.Z_().required("Required"),lastName:Z.Z_().required("Required"),email:Z.Z_().email("Invalid email").required("Required"),message:Z.Z_().required("Required"),subject:Z.Z_().required("Required")}),N=function(){var e,l=(0,v.useState)(!1),a=(0,n.Z)(l,2),Z=a[0],N=a[1],C=(0,v.useState)(""),_=(0,n.Z)(C,2),q=_[0],P=_[1];return q?(0,f.jsx)("p",{children:q}):Z?(0,f.jsx)("p",{children:"We have received your message, thank you for contacting!"}):(0,f.jsxs)(i.Z,{className:"contact-page",children:[e,(0,f.jsx)(t.ZP,{container:!0,justify:"center",spacing:1,children:(0,f.jsx)(t.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,f.jsxs)(s.Z,{children:[(0,f.jsx)("div",{className:"page-title",children:(0,f.jsx)(r.Z,{title:"Contact Form"})}),(0,f.jsx)(p.J9,{initialValues:b,validationSchema:y,onSubmit:function(e){console.log(e);fetch("https://formcarry.com/s/1afhSzadT",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){200===e.code?N(!0):P(e.message)})).catch((function(e){return P(e)}))},children:function(e){var l=e.dirty,a=e.isValid,n=e.values,i=e.handleChange,s=e.handleBlur;return console.log("isValid",a,l),(0,f.jsxs)(p.l0,{children:[(0,f.jsx)(u.Z,{children:(0,f.jsxs)(t.ZP,{item:!0,container:!0,spacing:2,justify:"center",children:[(0,f.jsx)(t.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,f.jsx)(c.Z,{label:"First Name",variant:"outlined",fullWidth:!0,name:"firstName",value:n.firstName,onChange:i,onBlur:s})}),(0,f.jsx)(t.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,f.jsx)(c.Z,{label:"Last Name",variant:"outlined",fullWidth:!0,name:"lastName",value:n.lastName,onChange:i,onBlur:s})}),(0,f.jsx)(t.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,f.jsx)(c.Z,{label:"Email",variant:"outlined",fullWidth:!0,name:"email",value:n.email,onChange:i,onBlur:s})}),(0,f.jsx)(t.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,f.jsxs)(d.Z,{fullWidth:!0,variant:"outlined",children:[(0,f.jsx)(o.Z,{id:"demo-simple-select-outlined-label",children:"Occupation"}),(0,f.jsxs)(m.Z,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Occupation",onChange:i,onBlur:s,value:n.occupation,name:"occupation",children:[(0,f.jsx)(h.Z,{children:"None"}),g.map((function(e){return(0,f.jsx)(h.Z,{value:e.value,children:e.label},e.value)}))]})]})}),(0,f.jsx)(t.ZP,{item:!0,xs:12,children:(0,f.jsx)(c.Z,{label:"subject",variant:"outlined",fullWidth:!0,name:"subject",value:n.subject,onChange:i,onBlur:s})}),(0,f.jsx)(t.ZP,{item:!0,xs:12,children:(0,f.jsx)(c.Z,{label:"Message",variant:"outlined",fullWidth:!0,name:"message",value:n.message,type:"text",multiline:!0,rows:3,onChange:i,onBlur:s})})]})}),(0,f.jsx)(j.Z,{children:(0,f.jsx)(x.Z,{disabled:!a||!l,variant:"contained",color:"primary",type:"Submit",children:"Submit"})})]})}})]})})})]})}}}]);
//# sourceMappingURL=759.fc6f3435.chunk.js.map