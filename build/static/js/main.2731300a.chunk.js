(this.webpackJsonpmedi_front=this.webpackJsonpmedi_front||[]).push([[0],{147:function(e,t,a){},154:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},179:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(16),n=a.n(s),i=a(41),l=a(21),r=a(11),o=a.n(r),j=a(24),d=a(14),b=a(51),u=a(223),m=a(222),h=a(37),x=a.n(h),O=(a(147),a(218)),p=a(2),f=Object(O.a)({root:{paddingBottom:"15px",width:"300px"}}),g=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],s=t[1],n=f(),i=Object(b.a)(),l=i.register,r=i.handleSubmit;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"mainDataCard",children:[Object(p.jsx)("h3",{children:"Hospital Details "}),Object(p.jsxs)("form",{onSubmit:r((function(e){var t=new FormData;t.append("file",a),t.append("upload_preset","medical_issue"),t.append("cloud_name","doqa8hpez"),x.a.post("http://localhost:8000/post",e,{withCredentials:!0}).then((function(e){x.a.post("https://api.cloudinary.com/v1_1/doqa8hpez/image/upload",t).then(function(){var t=Object(j.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x.a.patch("http://localhost:8000/imgupload/patch/".concat(e.data.postData._id),{img:a.data.url},{withCredentials:!0}).then((function(e){console.log(e),alert("img & data uploaded successfully")})).catch((function(e){console.log(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})),children:[Object(p.jsxs)("div",{className:"dataCard",children:[Object(p.jsxs)("div",{className:"fstCardDiv",children:[Object(p.jsx)(u.a,{className:n.root,inputRef:l,name:"hospitalName",id:"HospitalName",label:"Hospital Name",type:"text",variant:"outlined"}),Object(p.jsx)("br",{}),Object(p.jsx)(u.a,{className:n.root,inputRef:l,name:"typeOfTreatment",id:"TypeOfTreatment",label:"Type Of Treatment",type:"text",variant:"outlined"}),Object(p.jsx)("br",{}),Object(p.jsx)(u.a,{className:n.root,inputRef:l,name:"address",id:"Address",label:"Address",type:"text",variant:"outlined"}),Object(p.jsx)("br",{}),Object(p.jsx)(u.a,{className:n.root,inputRef:l,name:"availableDoctors",id:"Available Doctors",label:"Available Doctors",type:"text",variant:"outlined"}),Object(p.jsx)("br",{}),Object(p.jsx)(u.a,{className:n.root,inputRef:l,name:"openCloseTime",id:"OpenCloseTime",label:"Open & Close Time",type:"text",variant:"outlined"}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{children:Object(p.jsxs)(m.a,{children:[Object(p.jsx)("label",{className:"inputFile",htmlFor:"inputFile",children:"Upload Image"}),Object(p.jsx)("input",{onChange:function(e){console.log(e.target.files),s(e.target.files[0])},id:"inputFile",className:"fstdivInput",type:"file"})]})})]}),Object(p.jsxs)("div",{className:"sndCardiv",children:[Object(p.jsx)(u.a,{className:n.root,inputRef:l,name:"facilities",id:"Facilities",label:"Facilities",type:"text",variant:"outlined"}),Object(p.jsx)("br",{}),Object(p.jsx)(u.a,{className:n.root,inputRef:l,name:"longitude",id:"Longitude",label:"Longitude",type:"text",variant:"outlined"}),Object(p.jsx)("br",{}),Object(p.jsx)(u.a,{className:n.root,inputRef:l,name:"latitude",id:"Langitude",label:"Langitude",type:"text",variant:"outlined"}),Object(p.jsx)("br",{}),Object(p.jsx)(u.a,{className:n.root,inputRef:l,name:"contactNumber",id:"ContactNumber",label:"Contact Number",type:"text",variant:"outlined"}),Object(p.jsx)("br",{}),Object(p.jsx)(u.a,{className:n.root,inputRef:l,name:"about",id:"About",label:"About",type:"text",variant:"outlined"}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)(m.a,{variant:"contained",type:"submit",color:"primary",children:"Add New"})]})]}),Object(p.jsx)("div",{className:"trdCardDiv"})]})]})})},v=a.p+"static/media/sideimg.ca89648c.png",N=a.p+"static/media/logo.b6780f76.png",y=(a(154),function(){var e=Object(l.f)(),t=Object(b.a)(),a=t.register,c=t.handleSubmit;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"loginCardMain",children:[Object(p.jsx)("div",{className:"loginImage",children:Object(p.jsx)("img",{src:v,alt:"loginimg"})}),Object(p.jsx)("div",{className:"loginDetailsForm",children:Object(p.jsxs)("div",{className:"loginCard",children:[Object(p.jsx)("img",{className:"loginlogo",src:N,alt:"logologin"}),Object(p.jsxs)("form",{onSubmit:c((function(t){console.log(t),x.a.post("http://localhost:8000/admin/login",t,{withCredentials:!0}).then((function(t){alert("successfully logged-in"),console.log(t),e.push("/admin/data_entry")})).catch((function(e){console.log(e)}))})),children:[Object(p.jsxs)("div",{className:"loginTextfield",children:[Object(p.jsx)("br",{}),Object(p.jsx)(u.a,{inputRef:a,name:"email",id:"Email",label:"Email",type:"email",variant:"outlined"})]}),Object(p.jsx)("div",{className:"loginTextfield",children:Object(p.jsx)(u.a,{inputRef:a,name:"password",id:"Password",label:"Password",type:"password",variant:"outlined"})}),Object(p.jsx)(m.a,{variant:"contained",type:"submit",color:"primary",children:"Login"})]})]})})]})})}),w=(a(158),function(){var e=Object(l.f)(),t=Object(b.a)(),a=t.register,c=t.handleSubmit;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"signupCardMain",children:[Object(p.jsx)("div",{className:"signupImage",children:Object(p.jsx)("img",{src:v,alt:"signupimg"})}),Object(p.jsx)("div",{className:"signupDetailsForm",children:Object(p.jsxs)("div",{className:"signupCard",children:[Object(p.jsx)("img",{className:"signuplogo",src:N,alt:"logosignup"}),Object(p.jsx)("br",{}),Object(p.jsxs)("form",{onSubmit:c((function(t){console.log(t),x.a.post("http://localhost:8000/admin/signup",t,{withCredentials:!0}).then((function(t){console.log(t),alert("successfully signed-up"),e.push("/admin/login")})).catch((function(e){console.log(e),alert("error siging you up")}))})),children:[Object(p.jsx)("div",{className:"signupTextfield",children:Object(p.jsx)(u.a,{inputRef:a,name:"name",id:"name",label:"Name",type:"text",variant:"outlined"})}),Object(p.jsx)("div",{className:"signupTextfield",children:Object(p.jsx)(u.a,{inputRef:a,name:"email",id:"email",label:"Email",type:"email",variant:"outlined"})}),Object(p.jsx)("div",{className:"signupTextfield",children:Object(p.jsx)(u.a,{inputRef:a,name:"password",id:"password",label:"Password",type:"password",variant:"outlined"})}),Object(p.jsx)("div",{className:"signupTextfield",children:Object(p.jsx)(u.a,{inputRef:a,name:"confirmPassword",id:"confirmPassword",label:"Confirm Password",type:"password",variant:"outlined"})}),Object(p.jsx)(m.a,{variant:"contained",type:"submit",color:"primary",children:"signup"})]})]})})]})})}),C=function(e){var t=e.src,a=e.alt;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"aboutusmain",children:[Object(p.jsx)("div",{className:"firstimg",children:Object(p.jsx)("img",{src:t,alt:a})}),Object(p.jsxs)("div",{className:"firstdetails",children:[Object(p.jsx)("h3",{children:"Name:"}),Object(p.jsx)("p",{children:"Designation:"})]})]})})},_=a.p+"static/media/boy.f43d3efc.png",k=a.p+"static/media/amartya.5c9deb23.jpeg",T=a.p+"static/media/kg.6276c6b5.jpeg",F=a.p+"static/media/rahul.da8a333f.jpeg",S=a.p+"static/media/sagnik.783bceb9.jpeg",D=a.p+"static/media/jethi maa.c5a66bdf.jpg",A=a.p+"static/media/jethu.1661d98e.jpg",R=(a(159),function(){return Object(p.jsxs)("div",{className:"aboutCard",children:[Object(p.jsx)("img",{className:"bgimg1",src:_,alt:"img"}),Object(p.jsxs)("div",{className:"aboutCard1",children:[Object(p.jsx)(C,{src:k,alt:"member"}),Object(p.jsx)(C,{src:T,alt:"member"})]}),Object(p.jsxs)("div",{className:"aboutCard2",children:[Object(p.jsx)(C,{src:F,alt:"member"}),Object(p.jsx)(C,{src:S,alt:"member"})]}),Object(p.jsxs)("div",{className:"aboutCard3",children:[Object(p.jsx)(C,{src:D,alt:"member"}),Object(p.jsx)(C,{src:A,alt:"member"})]}),Object(p.jsx)("img",{className:"bgimg2",src:_,alt:"img"})]})}),I=(a(160),function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{id:"footer",className:"footer",children:Object(p.jsxs)("div",{className:"Footer_detail",children:[Object(p.jsxs)("div",{className:"footer_rapper1",children:[Object(p.jsxs)("div",{className:"Get_started",children:[Object(p.jsx)("h3",{children:"Get started"}),Object(p.jsx)("p",{children:"Home"})]}),Object(p.jsxs)("div",{className:"About_us",children:[Object(p.jsx)("h3",{children:"About us"}),Object(p.jsx)("p",{children:"Contact us"}),Object(p.jsx)("p",{children:"Review"}),Object(p.jsx)(i.b,{to:"/aboutus",children:Object(p.jsx)("p",{children:"Team"})})]})]}),Object(p.jsxs)("div",{className:"footer_rapper2",children:[Object(p.jsxs)("div",{className:"Support",children:[Object(p.jsx)("h3",{children:"Support"}),Object(p.jsx)("p",{children:"FAQ"}),Object(p.jsx)("p",{children:"Help Desk"}),Object(p.jsx)("p",{children:"Forum"})]}),Object(p.jsxs)("div",{className:"Social",children:[Object(p.jsx)("h3",{children:"Follow Us"}),Object(p.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("i",{className:"fab fa-facebook"})}),Object(p.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("i",{className:"fab fa-instagram"})}),Object(p.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("i",{className:"fab fa-twitter"})}),Object(p.jsx)("span",{className:"social_youtube",children:Object(p.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("i",{className:"fab fa-youtube"})})})]})]})]})}),Object(p.jsx)("div",{className:"Copyright",children:Object(p.jsx)("p",{children:"@2021 Copyright Text"})})]})}),P=a(13),H=(a(161),a(60)),L=a(86),B=a(68),M=a.n(B),E=a(116),z=(a(179),a(117)),q=a.n(z);var J=function(e){var t=e.handlemapClose,a=e.longitude,s=e.latitude;M.a.workerClass=E.a;var n=Object(c.useState)({latitude:0,longitude:0,zoom:10,height:"500px",width:"600px",pitch:50}),i=Object(d.a)(n,2),l=i[0],r=i[1];return Object(c.useEffect)((function(){r({latitude:s,longitude:a,zoom:8,height:"500px",width:"600px",pitch:50})}),[s,a]),console.log(s,a),Object(p.jsxs)("div",{className:"mainMap",children:[s&&a?Object(p.jsx)(L.b,Object(H.a)(Object(H.a)({mapboxApiAccessToken:"pk.eyJ1Ijoid2VibG9vcCIsImEiOiJja21pdXBrMWQwbDBtMndzMjZnZ3FicTIxIn0.sTsSShxZ2LqjqUWb_akSyw",mapStyle:"mapbox://styles/mapbox/streets-v11"},l),{},{onViewportChange:function(e){return r(e)},children:Object(p.jsx)(L.a,{longitude:a,latitude:s,children:Object(p.jsx)("div",{className:"marker",children:Object(p.jsx)(q.a,{})})})})):null,Object(p.jsx)("div",{className:"btnClose",children:Object(p.jsx)("button",{onClick:t,children:"close"})})]})};var U=function(e){var t=e.handleClose,a=e.hospital_name,c=e.detailspopup,s=e.type_of_treatment,n=e.available_doctors;return Object(p.jsxs)("div",{className:"detailsPopup",children:[Object(p.jsx)("div",{className:"btnClose",children:Object(p.jsx)("p",{onClick:t,children:Object(p.jsx)("i",{className:"fas fa-times"})})}),Object(p.jsx)("h3",{children:a}),Object(p.jsxs)("div",{className:"detailsPopup_flex",children:[Object(p.jsxs)("div",{className:"detailsPopup_doctorName",children:[Object(p.jsx)("h4",{children:"Doctors Name"}),Object(p.jsx)("p",{children:"-------------------"}),Object(p.jsx)("p",{children:n})]}),Object(p.jsxs)("div",{className:"detailsPopup_treatment",children:[Object(p.jsx)("h4",{children:"Treatment"}),Object(p.jsx)("p",{children:"----------------"}),Object(p.jsx)("p",{children:s})]})]}),Object(p.jsxs)("div",{className:"para",children:[Object(p.jsx)("h4",{children:"About"}),Object(p.jsx)("p",{children:c})]})]})},G=function(e){var t=e.img_url,a=e.latitude,s=e.longitude,n=e.contact,i=e.detailspopup,l=e.hospital_name,r=e.time,o=e.type_of_treatment,j=e.available_doctors,b=e.address,u=Object(c.useState)(!1),m=Object(d.a)(u,2),h=m[0],x=m[1],O=Object(c.useState)(!1),f=Object(d.a)(O,2),g=f[0],v=f[1];console.log(a,s);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"imgdiv",children:Object(p.jsx)("img",{src:t,alt:"pic"})}),Object(p.jsxs)("div",{className:"contentdiv",children:[Object(p.jsx)("h3",{children:l}),Object(p.jsx)("div",{className:"details",children:Object(p.jsxs)("div",{className:"column2",children:[Object(p.jsxs)("p",{children:["Address : ",b]}),Object(p.jsxs)("p",{children:["Contact : ",n]}),Object(p.jsxs)("p",{children:["Timing : ",r]})]})}),Object(p.jsxs)("div",{className:"buttondiv",children:[Object(p.jsx)("button",{onClick:function(){x(!0)},children:"Know more"}),Object(p.jsx)("button",{onClick:function(){v(!0)},children:"location"})]})]})]}),h?Object(p.jsx)(U,{hospital_name:l,detailspopup:i,type_of_treatment:o,available_doctors:j,handleClose:function(){x(!1)}}):null,Object(p.jsx)("div",{children:g?Object(p.jsx)(J,{longitude:s,latitude:a,handlemapClose:function(){v(!1)}}):null})]})},K=a(224),W=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),i=Object(d.a)(n,2),l=i[0],r=i[1],b=Object(c.useState)(""),u=Object(d.a)(b,2),m=u[0],h=u[1],O=Object(c.useState)(1),f=Object(d.a)(O,2),g=f[0],v=f[1];Object(c.useEffect)((function(){x.a.get("http://localhost:8000/get").then(function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(Object(P.a)(t.data.getDetails));case 2:return e.next=4,v(t.data.number_of_item);case 4:console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}),[]);return console.log(a.length),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"bodyContainer",children:[Object(p.jsx)("div",{className:"sideArea",children:Object(p.jsxs)("form",{className:"formClass",children:[Object(p.jsx)("h3",{children:"Filter"}),Object(p.jsxs)("div",{className:"Label",children:[Object(p.jsxs)("div",{className:"Label1",children:[Object(p.jsx)("label",{htmlFor:"location",children:"Location:"}),Object(p.jsx)("br",{}),Object(p.jsxs)("select",{value:m,onChange:function(e){return h(e.target.value)},className:"selectOption",name:"location",id:"location",children:[Object(p.jsx)("option",{children:"Select Option"}),Object(p.jsx)("option",{value:"kolkata",children:"Kolkata"}),Object(p.jsx)("option",{value:"barasat",children:"Barasat"}),Object(p.jsx)("option",{value:"bidhan_nagar",children:"Bidhan_nagar"}),Object(p.jsx)("option",{value:"dellhi",children:"Dellhi"})]})]}),Object(p.jsxs)("div",{className:"Label2",children:[Object(p.jsx)("label",{htmlFor:"typeOfTreatment",children:"Treatment:"}),Object(p.jsx)("br",{}),Object(p.jsxs)("select",{value:l,onChange:function(e){return r(e.target.value)},className:"selectOption",name:"typeOfTreatment",id:"typeOfTreatment",children:[Object(p.jsx)("option",{children:"Select Option"}),Object(p.jsx)("option",{value:"eye",children:"eye"}),Object(p.jsx)("option",{value:"teeth",children:"teeth"}),Object(p.jsx)("option",{value:"skin",children:"skin"}),Object(p.jsx)("option",{value:"cancer",children:"cancer"})]})]})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"submitClass",children:Object(p.jsx)("button",{onClick:function(){var e="";m&&(e+="location=".concat(m,"&"),h("")),l&&(e+="typeOfTreatment=".concat(l,"&"),r("")),e&&(e="?"+e),x.a.get("http://localhost:8000/get".concat(e)).then(function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t.data.number_of_item);case 2:return e.next=4,s(Object(P.a)(t.data.getDetails));case 4:console.log(t.data.getDetails);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)})),console.log(e)},type:"button",children:"Submit"})})]})}),Object(p.jsx)("div",{className:"mainBody",children:Object(p.jsxs)("div",{className:"card_display",children:[0!==g?a.map((function(e){return Object(p.jsx)(G,{contact:e.contact,location:e.location,img_url:e.img,detailspopup:e.about,hospital_name:e.hospitalName,type_of_treatment:e.typeOfTreatment,facilities:e.facilities,time:e.openCloseTime,available_doctors:e.availableDoctors,address:e.address,latitude:e.latitude,longitude:e.longitude},e._id)})):Object(p.jsx)("div",{className:"errormsg",children:Object(p.jsx)("h2",{children:"no data found!!!!!!"})}),Object(p.jsx)("div",{className:"pagination",children:Math.floor(g/10)<1?null:Object(p.jsx)(K.a,{count:parseInt(g/10)+1,onChange:function(e,t){x.a.get("http://localhost:8000/get?page=".concat(t)).then(function(){var e=Object(j.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(Object(P.a)(a.data.getDetails));case 2:console.log(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))},size:"large",color:"primary"})})]})})]})})},Z=a(85),Q=(a(183),function(){var e=Object(Z.useSpring)({loop:{reverse:!0},from:{x:-60},to:{x:0},config:{duration:2e3}});return Object(p.jsx)("div",{className:"Content",children:Object(p.jsx)("div",{className:"Bg_text",children:Object(p.jsxs)("div",{className:"Maintext",children:[Object(p.jsxs)("div",{className:"text",children:[Object(p.jsx)(Z.animated.div,{style:Object(H.a)({},e),children:Object(p.jsx)("p",{children:Object(p.jsx)("i",{className:"fas fa-heartbeat"})})}),Object(p.jsx)("h2",{children:"Want to Know"}),Object(p.jsx)("h2",{children:"About Hospitals & Treatments"})]}),Object(p.jsx)("div",{className:"carousel_button",children:Object(p.jsx)(i.b,{to:"/homePage",children:Object(p.jsx)("p",{children:"Click Here"})})})]})})})}),V=(a(184),function(){return Object(p.jsx)("div",{className:"mainDiv",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{className:"logo",children:"HOSPITAL INFO"}),Object(p.jsx)("li",{className:"navbarHover",children:Object(p.jsx)(i.c,{exact:!0,to:"/",children:"Home"})}),Object(p.jsx)("li",{className:"navbarHover",children:Object(p.jsx)(i.c,{exact:!0,to:"/aboutus",children:"About Us"})})]})})}),X=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(i.a,{children:[Object(p.jsx)(V,{}),Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/admin/login",children:Object(p.jsx)(y,{})}),Object(p.jsx)(l.a,{exact:!0,path:"/admin/signup",children:Object(p.jsx)(w,{})}),Object(p.jsx)(l.a,{exact:!0,path:"/admin/data_entry",children:Object(p.jsx)(g,{})}),Object(p.jsx)(l.a,{exact:!0,path:"/",component:Q}),Object(p.jsx)(l.a,{exact:!0,path:"/aboutus",component:R}),Object(p.jsx)(l.a,{exact:!0,path:"/homePage",component:W})]}),Object(p.jsx)(I,{})]})})};a(185);n.a.render(Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(X,{})}),document.getElementById("root"))}},[[186,1,2]]]);
//# sourceMappingURL=main.2731300a.chunk.js.map