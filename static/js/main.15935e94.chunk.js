(this["webpackJsonpgoit-react-hw-02"]=this["webpackJsonpgoit-react-hw-02"]||[]).push([[0],{34:function(n,e,t){"use strict";t.r(e);var a,r,i,o,c,s,l,b,d,u,h,m,p,j=t(0),x=t.n(j),g=t(16),f=t.n(g),O=t(21),y=t(5),v=t(6),C=t(7),k=t(9),w=t(8),S=t(20),z=Object(j.createContext)(),F=t(3),N=t(2),A=N.b.label(a||(a=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px;\n  font-size: 22px;\n  line-height: 1.25;\n"]))),M=N.b.input(r||(r=Object(F.a)(["\n  margin-top: 20px;\n  width: 210px;\n  font-size: 15px;\n  line-height: 1.25;\n  border-radius: 5px;\n"]))),D=t(1),L=function(n){var e=n.handleChange,t=n.filter;return Object(D.jsxs)(A,{children:["Find contacts by name",Object(D.jsx)(M,{onChange:e,type:"text",name:"filter",value:t})]})},P=N.b.form(i||(i=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 20px;\n  border: 2px solid gray;\n"]))),_=N.b.label(o||(o=Object(F.a)(["\n  margin-top: 10px;\n  font-size: 20px;\n  line-height: 1.25;\n"]))),B=N.b.input(c||(c=Object(F.a)(["\n  margin-top: 15px;\n  font-size: 16px;\n  line-height: 1.25;\n  border-radius: 5px;\n"]))),Z=N.b.button(s||(s=Object(F.a)(["\n  margin: 15px auto 10px auto;\n  padding: 10px;\n  width: 150px;\n  font-size: 15px;\n  line-height: 1.25;\n  background-color: yellow;\n  border: none;\n  border-radius: 15px;\n  cursor: pointer;\n"]))),q=function(n){Object(k.a)(t,n);var e=Object(w.a)(t);function t(){var n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).state={name:"",number:""},n.handleChange=function(e){n.setState(Object(y.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.submitForm(n.state),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(C.a)(t,[{key:"render",value:function(){return Object(D.jsxs)(P,{onSubmit:this.handleSubmit,children:[Object(D.jsx)(_,{htmlFor:"contact_name",children:"Name"}),Object(D.jsx)(B,{onChange:this.handleChange,id:"contact_name",type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Mykola, Genka Metla, Charles de Batz de Castelmore d'Artagnan",required:!0}),Object(D.jsx)(_,{htmlFor:"contact_number",children:"Number"}),Object(D.jsx)(B,{onChange:this.handleChange,value:this.state.number,id:"contact_number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),Object(D.jsx)(Z,{type:"submit",children:"Add contact"})]})}}]),t}(j.Component),G=N.b.li(l||(l=Object(F.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin: 20px 10px;\n"]))),I=N.b.button(b||(b=Object(F.a)(["\n  padding: 3px;\n  width: 100px;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 1.25;\n  background-color: yellow;\n  border: none;\n  border-radius: 15px;\n  cursor: pointer;\n"]))),J=function(){return Object(D.jsx)(z.Consumer,{children:function(n){var e=n.filter,t=n.contacts,a=n.onDeleteName,r=e.toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(r)})).map((function(n){var e=n.id,t=n.name,r=n.number;return Object(D.jsxs)(G,{children:[Object(D.jsxs)("p",{children:[t," : ",r]}),Object(D.jsx)(I,{type:"button",onClick:function(){return a(e)},children:"Delete"})]},e)}))}})},R=N.b.ul(d||(d=Object(F.a)(["\n  padding: 20px;\n  background-color: gray;\n"]))),U=function(){return Object(D.jsx)(R,{children:Object(D.jsx)(J,{})})},V=Object(N.a)(u||(u=Object(F.a)(["\n* {\n  box-sizing: border-box;\n  }\n  html {\n    scroll-behavior: smooth;\n  }\n  body {\n    min-height: 100vh;\n    margin: 0;\n    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu',\n    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    background-color: #fff;\n    color: #010101;\n    line-height: 1.5;\n    scroll-behavior: smooth;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  img {\n    display: block;\n    max-width: 100%;\n  }\n  ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p {\n    margin: 0;\n  }\n"]))),E=N.b.h1(h||(h=Object(F.a)(["\n  padding-top: 30px;\n  padding-bottom: 30px;\n  font-size: 30px;\n  line-height: 1.25;\n  text-align: center;\n  color: black;\n"]))),H=N.b.h2(m||(m=Object(F.a)(["\n  padding-top: 30px;\n  padding-bottom: 15px;\n  font-size: 30px;\n  line-height: 1.25;\n  text-align: center;\n  color: black;\n"]))),K=N.b.div(p||(p=Object(F.a)(["\n  width: 400px;\n  margin: 0 auto;\n  background-color: gray;\n"]))),T=function(n){Object(k.a)(t,n);var e=Object(w.a)(t);function t(){var n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Kolya Pushka",number:"459-12-56"},{id:"id-2",name:"Stepan Sraka",number:"443-89-12"},{id:"id-3",name:"Vasyl Mordovorot",number:"645-17-79"},{id:"id-4",name:"Genka Metla",number:"227-91-26"},{id:"id-5",name:"Tolya Vantus",number:"245-21-48"}],filter:""},n.handleChange=function(e){n.setState(Object(y.a)({},e.target.name,e.target.value))},n.getSubmitForm=function(e){var t=e.name,a=e.number,r=t.toLowerCase();if(n.state.contacts.find((function(n){return n.name.toLowerCase()===r})))return alert("".concat(t," is already in contacts."));n.setState((function(n){return{contacts:[{name:t,number:a,id:Object(S.a)(5)}].concat(Object(O.a)(n.contacts))}}))},n.deleteName=function(e){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==e}))}}))},n}return Object(C.a)(t,[{key:"render",value:function(){return Object(D.jsxs)(z.Provider,{value:{contacts:this.state.contacts,filter:this.state.filter,onDeleteName:this.deleteName},children:[Object(D.jsx)(V,{}),Object(D.jsxs)(K,{children:[Object(D.jsx)(E,{children:"Phonebook"}),Object(D.jsx)(q,{submitForm:this.getSubmitForm}),Object(D.jsx)(H,{children:"Contacts"}),Object(D.jsx)(L,{handleChange:this.handleChange,filter:this.state.filter}),Object(D.jsx)(U,{})]})]})}}]),t}(j.Component);f.a.createRoot(document.getElementById("root")).render(Object(D.jsx)(x.a.StrictMode,{children:Object(D.jsx)(T,{})}))}},[[34,1,2]]]);
//# sourceMappingURL=main.15935e94.chunk.js.map