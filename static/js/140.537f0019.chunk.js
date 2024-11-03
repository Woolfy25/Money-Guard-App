"use strict";(self.webpackChunkmoney_guard_app=self.webpackChunkmoney_guard_app||[]).push([[140],{742:(s,e,a)=>{a.d(e,{A:()=>n});a(5043);var t=a(4430),r=a(579);const n=s=>{let{type:e,text:a,onClick:n}=s;return(0,r.jsx)("button",{className:t.A.main,type:e,onClick:n,children:a})}},2335:(s,e,a)=>{a.d(e,{A:()=>n});a(5043);var t=a(4430),r=a(579);const n=s=>{let{type:e,text:a,onClick:n}=s;return(0,r.jsx)("button",{className:t.A.secondary,type:e,onClick:n,children:a})}},1140:(s,e,a)=>{a.r(e),a.d(e,{default:()=>b});var t=a(5043),r=a(25);const n={backgorund:"RegisterPage_backgorund__mmG2v",form:"RegisterPage_form__UYA07",logo:"RegisterPage_logo__X7XQZ",divInput:"RegisterPage_divInput__TwRO3",inputContainer:"RegisterPage_inputContainer__J2WA8",input:"RegisterPage_input__aTof2",divButtons:"RegisterPage_divButtons__UHBrc",inputIcon:"RegisterPage_inputIcon__Zfrm7",toggleIcon:"RegisterPage_toggleIcon__tHdAJ",inputPasswordNormal:"RegisterPage_inputPasswordNormal__D2Bah",inputPasswordReadable:"RegisterPage_inputPasswordReadable__ERE9P",error:"RegisterPage_error__jj6Sz"};var i=a(1672),o=a(3003),l=a(3216),d=a(653),c=a.n(d),u=a(3726),m=a.n(u),g=a(3892),p=a(3280),x=a(742),w=a(2335),A=a(5394),j=a(4339),v=a(423),N=a(579);const P=s=>{let{css:e,isPasswordVisible:a,togglePasswordVisibility:t,testResult:r}=s;const{setFieldValue:n}=(0,g.j7)();return(0,N.jsxs)("div",{className:e.inputContainer,children:[(0,N.jsx)(g.D0,{className:e.input,id:"password",name:"password",type:a?"text":"password",onChange:s=>{const e=s.target.value;n("password",e),n("passwordStrength",c()(e).score)},placeholder:"Password"}),(0,N.jsx)(g.Kw,{name:"password",component:"div",className:e.error}),(0,N.jsx)(j.nMq,{className:e.inputIcon}),(0,N.jsx)("span",{className:e.toggleIcon,onClick:t,children:a?(0,N.jsx)(v.$3n,{className:e.inputPasswordReadable}):(0,N.jsx)(v.M8f,{className:e.inputPasswordNormal})}),(0,N.jsx)(y,{strength:r,css:e})]})},y=s=>{let{strength:e,css:a}=s;const t=["rgba(255, 255, 255, 0.60)","red","orange","yellow","green"],r=25*e+"%";return(0,N.jsx)("div",{style:{width:"100%",backgroundColor:t[0],height:"5px",borderRadius:"5px"},children:(0,N.jsx)("div",{style:{height:"100%",width:r,backgroundColor:t[e],borderRadius:"5px",transition:"width 0.3s ease-in-out"}})})},b=()=>{const s=(0,o.wA)(),[e,a]=(0,t.useState)(!1),d=(0,l.Zp)(),c=()=>{a(!e)},u=p.Ik({username:p.Yj().min(2,"Name must be at least 2 characters").required("Name is required"),email:p.Yj().email("Invalid email format").required("Email is required"),password:p.Yj().min(6,"Password must be at least 6 characters").required("Password is required"),verifyPassword:p.Yj().oneOf([p.KR("password"),null],"Passwords must match").required("Please confirm your password")});return(0,N.jsx)(g.l1,{initialValues:{username:"",email:"",password:"",verifyPassword:""},validationSchema:u,onSubmit:(e,a)=>{let{resetForm:t}=a;const r={username:e.username,email:e.email,password:e.password};s((0,i.kz)(r)).then((()=>{m().Notify.success("Registration successful!"),t()})).catch((s=>{m().Notify.failure("Registration failed. Please try again."),console.error(s)}))},children:s=>{let{isSubmitting:a,values:t}=s;return(0,N.jsx)("div",{className:n.backgorund,children:(0,N.jsxs)(g.lV,{className:n.form,children:[(0,N.jsx)("img",{src:r,alt:"Money Guard Logo",className:n.logo,loading:"lazy"}),(0,N.jsxs)("div",{className:n.divInput,children:[(0,N.jsxs)("div",{className:n.inputContainer,children:[(0,N.jsx)(g.D0,{className:n.input,type:"text",id:"username",name:"username",placeholder:"Name"}),(0,N.jsx)(g.Kw,{name:"username",component:"div",className:n.error}),(0,N.jsx)(A.sLb,{className:n.inputIcon})]}),(0,N.jsxs)("div",{className:n.inputContainer,children:[(0,N.jsx)(g.D0,{className:n.input,type:"text",id:"email",name:"email",placeholder:"Email"}),(0,N.jsx)(g.Kw,{name:"email",component:"div",className:n.error}),(0,N.jsx)(A.U4w,{className:n.inputIcon})]}),(0,N.jsx)(P,{css:n,isPasswordVisible:e,togglePasswordVisibility:c,testResult:t.passwordStrength}),(0,N.jsxs)("div",{className:n.inputContainer,children:[(0,N.jsx)(g.D0,{className:n.input,id:"verifyPassword",name:"verifyPassword",placeholder:"Confirm password",type:e?"text":"password"}),(0,N.jsx)(g.Kw,{name:"verifyPassword",component:"div",className:n.error}),(0,N.jsx)(j.nMq,{className:n.inputIcon}),(0,N.jsx)("span",{className:n.toggleIcon,onClick:c,children:e?(0,N.jsx)(v.$3n,{className:n.inputPasswordReadable}):(0,N.jsx)(v.M8f,{className:n.inputPasswordNormal})})]})]}),(0,N.jsxs)("div",{className:n.divButtons,children:[(0,N.jsx)(x.A,{type:"Submit",text:"REGISTER",disabled:a}),(0,N.jsx)(w.A,{type:"Button",text:"LOG IN",onClick:()=>{d("/login")}})]})]})})}})}},4430:(s,e,a)=>{a.d(e,{A:()=>t});const t={main:"Buttons_main__GGBqx",secondary:"Buttons_secondary__wTkPt"}},25:s=>{s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAABMCAMAAAD3J71JAAAAYFBMVEUAAAD9/f36+vr7+/v7+/v7+/v////7+/v6+vr7+/v8/Pz6+vr7+/v6+vr7+/v8/Pz7+/v/xyj/yCD/xif/xij/xyb/xyb/yCb/xyb/xyb/xyf/xyX/xij/yCf7+/v/xyfYD07vAAAAHnRSTlMAIIDfv0AQYKDvnzCQcM9QryAQ70DXn7CAX7+QcE9UEIpNAAAEx0lEQVRo3uyYW7KDIBBEGzBAgsb4yDt33P8ubyaOkexgqPJ8SOHX0Wp7KLHxS//sUB7deRruKIz+NkxvriW98H58DpPwuBdjPk45FxRCV6Y2hlz7BvVYA+aaa//hQ4JeovO8vHLtHkxzgF4iVbz0WUquYBLp1qaa18uqPfLeOO3a1Px0yUWs1WtTC+Am1ucOgD9SAdp7A+CRReRAJWiTM0B/Zus73lgqQ5uO/uM9jLN1Kdqz46vja0v6tc1eJG1+RwKvmERCI9ZO9juoJpCQeOfd9ymUYylLxWnNjIderAFqUXX+G+wIGAu9ROfXOqmAtJc+9E5zk0SqZJYzNXvP0+ekugAju671YdmbQ25197acAL/eAUgtYJWPGysVnZYhk/CmVV+BlVRfoBm3DMoKmvFOToCNpFsS4zTXNkQyLHmpZG461ScSJok2ItuKtua/DUIQbRxp99kr/xwXrGj7Rh5D81zPiAEZoUYZ+ISMnfIS2dj4b9cMlx0FYSjcQABBRJ+A93/MJU0wtNjZ2Z3uTO9Ozx+VCzkfEdJW71dfffXV/6P+pC4nOqq2lPzbzVy2tdaS4G3YLZ57+qIPb4YGrF0J3oeNQ3Oob8cGstjc6rZ2YuFN2Mo5X87yf0Mddzk3f/670r/GzkOyFdthbC5JrgLibb23ZHhYshHDjYS49fYdUd2W8VdZZtsVEW4al/kMBTsc/ZEGbJgbQk3ci5wxjNhY42lSahFsXZCmJypIg4WeO9EdcghT6qG7UQIIW0qZG0FvAPeL3c7xblsq9gdDULoRKLbBagYPjuhtG+FgDe2YO6MN4N3Sjt0Qnb83FB4r6W6xd022zkY1Y0NsPux3dGxbYzI7s6AD2EvFATtQZPFIgSM2liBtHMWcWc5MBefiChwrVuwjrBKW3voaWwsaZ1awR0NzdlbsZhh6moCx21nSZzYoi0QaYk2PcFgt91glZFDCPjkPXf4CexccybtgOx451DocsY20L21NMnYgBA3cnIw6Hffu+iKdx1B4o1dduje60gV2Jg9R7thRNviw5tyATflznGwnplnGyDDXw8vskHNgRJIY5EEHgU3Z3izrGhuHpRQ6dhnSJvIDNlEiRa5WcjWuAPIIMzbUBznu6GTyKitVRX3zb7C1kmiPUwM2W8manLPtXmX7MCo4t1/gGU+VRO/4JXbRLk/Y26ts07DEfoK9aVw+n7BvUT+lxl3wuCG1Luru1YSSsqxtndyi2DqNq7VNl9Gz31lJjN7mcrvAXjRBWzK9xhhJ5AgatWHjuEP4UqvgaOVSbImKaq3YHBzJj7HZbD1TGGbs0Wk9q2WuduFzFUSpvxzcCmwEmYfU7XNyqZ7YekO2Pusn7L2St2CzWdygwSHtoQlboiWqe5tyuTo9F+Z3ImkHgICVezJ/Y/OGBsjIGNgPFVvzn9YWKFc7YpMi4zI2mdkqWvwFtnDXKC8Q9OOgXH5zFR3+6XWxTRI3nHZaSaYAFp6xDSebsUmw3DsjhZixuS9WIjd+XLvhNitgpI7JDU2Fh1Jc8aNgZZsKILOIEWH/TuBW/7vHqw70Suv9LAA/jYXnBm2ZREb/TJ/9r3OTtFJ8/OulC5UPfwN5rZU25M8TbcifJ2/tT3nB9NVXn6lfdCyQVyiwP8cAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=140.537f0019.chunk.js.map