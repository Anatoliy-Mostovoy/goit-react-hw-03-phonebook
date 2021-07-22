(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={List:"Contacts_List__2V3YO",Button:"Contacts_Button__3WuIa"}},11:function(t,e,n){t.exports={Label:"Filter_Label__1q_sH",Input:"Filter_Input__2MQXK"}},12:function(t,e,n){t.exports={Title:"App_Title__2qxNr"}},2:function(t,e,n){t.exports={Container:"Form_Container__2LBkn",Label:"Form_Label__1q0Y-",Input:"Form_Input__29dvv",Button:"Form_Button__Zkrc7"}},21:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),s=n(3),r=n.n(s),i=n(14),o=n(4),l=n(5),u=n(7),b=n(6),h=n(9),d=n(23),j=n(2),m=n.n(j),p=n(1),f=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",id:""},t.uniqId=Object(d.a)(),t.handleClick=function(e){var n,a=e.target,c=a.value,s=a.name,r=a.id;t.setState((n={},Object(h.a)(n,s,c),Object(h.a)(n,"id",r),n))},t.handleSubmit=function(e){e.preventDefault(),t.props.submitMethod(t.state),t.resetState()},t.resetState=function(){t.setState({name:"",number:"",id:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsx)("div",{className:m.a.Container,children:Object(p.jsxs)("form",{className:m.a.Form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:m.a.Label,htmlFor:this.uniqId,children:["Name",Object(p.jsx)("input",{className:m.a.Input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleClick,id:Object(d.a)()})]}),Object(p.jsxs)("label",{children:["Number",Object(p.jsx)("input",{type:"tel",className:m.a.Input,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleClick,value:n,id:Object(d.a)()})]}),Object(p.jsx)("button",{type:"submit",className:m.a.Button,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})}}]),n}(a.Component),O=n(10),v=n.n(O),x=function(t){var e=t.contacts,n=t.deleteFunction;return Object(p.jsx)("div",{children:Object(p.jsx)("ul",{children:e.map((function(t){return Object(p.jsxs)("li",{className:v.a.List,children:[t.name,": ",t.number,Object(p.jsx)("button",{className:v.a.Button,type:"button",onClick:function(){n(t.id)},children:"Delete"})]},t.id)}))})})},_=n(11),C=n.n(_),g=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:C.a.Label,children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438:",Object(p.jsx)("input",{className:C.a.Input,type:"text",value:e,onChange:n})]})},S=n(12),y=n.n(S),N=n(13),k=(n(20),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.getSubmitData=function(e){t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?N.b.error("Hey, this name always here!"):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},t.changeFilterValue=function(e){var n=e.target.value;t.setState({filter:n})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.handelDelete=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"render",value:function(){var t=this.getVisibleContacts(),e=this.state.filter;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:y.a.Title,children:"PhoneBook"}),Object(p.jsx)(f,{submitMethod:this.getSubmitData}),Object(p.jsx)("h2",{className:y.a.Title,children:"Contacts"}),Object(p.jsx)(g,{value:e,onChange:this.changeFilterValue}),Object(p.jsx)(x,{contacts:t,deleteFunction:this.handelDelete}),Object(p.jsx)(N.a,{})]})}}]),n}(a.Component));r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.35bda00f.chunk.js.map