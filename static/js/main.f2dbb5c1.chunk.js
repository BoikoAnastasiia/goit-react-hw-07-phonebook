(this.webpackJsonp2_2_homework=this.webpackJsonp2_2_homework||[]).push([[0],{16:function(t,n,e){t.exports={label:"Search_label__tR6hB",container:"Search_container__IsCht",input:"Search_input__2v3AA"}},31:function(t,n,e){t.exports={Container:"Container_Container__29h5C"}},38:function(t,n,e){},65:function(t,n,e){"use strict";e.r(n);var c,a,r=e(0),o=e.n(r),i=e(10),u=e.n(i),s=(e(38),e(6)),b=e(2),l=e(3),j=e(33),d=e(5),f=Object(b.b)("contacts/fetchContactsRequest"),h=Object(b.b)("contacts/fetchContactsSuccess"),m=Object(b.b)("contacts/fetchContactsError"),O=Object(b.b)("contacts/addContactRequest"),p=Object(b.b)("contacts/addContactSuccess"),C=Object(b.b)("contacts/addContactError"),_=Object(b.b)("contacts/deleteContactRequest"),v=Object(b.b)("contacts/deleteContactSuccess"),x=Object(b.b)("contacts/deleteContactError"),g=Object(b.b)("contacts/changeFilter"),y=Object(b.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(c={},Object(l.a)(c,h,(function(t,n){return n.payload})),Object(l.a)(c,p,(function(t,n){var e=n.payload;return[].concat(Object(j.a)(t),[e])})),Object(l.a)(c,v,(function(t,n){var e=n.payload;return t.filter((function(t){return t.id!==e}))})),c)),N=Object(b.c)("",Object(l.a)({},g,(function(t,n){return n.payload}))),k=Object(b.c)(!1,(a={},Object(l.a)(a,f,(function(){return!0})),Object(l.a)(a,h,(function(){return!1})),Object(l.a)(a,m,(function(){return!1})),Object(l.a)(a,O,(function(){return!0})),Object(l.a)(a,p,(function(){return!1})),Object(l.a)(a,C,(function(){return!1})),Object(l.a)(a,_,(function(){return!0})),Object(l.a)(a,v,(function(){return!1})),Object(l.a)(a,x,(function(){return!1})),a)),S=Object(d.c)({contacts:y,filter:N,loading:k}),L=Object(b.a)({reducer:{contacts:S}}),A=e(12),w=e(13),B=e(15),P=e(14),R=e(31),E=e.n(R),q=e(1),z=function(t){var n=t.children;return Object(q.jsxs)("div",{className:E.a.Container,children:[" ",n," "]})},D=e(7),J=e.n(D),M=e(21),V=e.n(M),Z=e(32),F=e(9),I=e.n(F);I.a.defaults.baseURL="http://localhost:4041";var H=function(t){var n=t.name,e=t.number;return function(t){var c={name:n,number:e};t(O),I.a.post("/contacts",c).then((function(n){var e=n.data;return t(p(e))})).catch((function(n){return t(C(n))}))}},T=function(t){return function(n){n(_()),I.a.delete("/contacts/".concat(t)).then((function(){return n(v(t))})).catch((function(t){return n(x(t))}))}},K=function(){return function(){var t=Object(Z.a)(V.a.mark((function t(n){var e,c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(f()),t.prev=1,t.next=4,I.a.get("/contacts");case 4:e=t.sent,c=e.data,n(h(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(m(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(n){return t.apply(this,arguments)}}()},Q=e(11),U=function(t){return t.contacts.filter},X=function(t){return t.contacts.contacts};console.log(X);var Y={getLoading:function(t){return t.contacts.loading},getFilter:U,getVisibleContacts:Object(Q.a)([X,U],(function(t,n){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}))},$=function(t){Object(B.a)(e,t);var n=Object(P.a)(e);function e(){var t;Object(A.a)(this,e);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=n.call.apply(n,[this].concat(a))).state={name:"",number:""},t.handleSubmit=function(n){if(n.preventDefault(),t.props.contacts.some((function(n){return n.name===t.state.name})))return alert("".concat(t.state.name," is already in your contacts"));t.props.onSubmit(t.state),t.reset()},t.handleChange=function(n){var e=n.currentTarget,c=e.name,a=e.value;t.setState(Object(l.a)({},c,a))},t.reset=function(){t.setState({name:"",number:" "})},t}return Object(w.a)(e,[{key:"render",value:function(){return Object(q.jsxs)("form",{className:J.a.form,onSubmit:this.handleSubmit,children:[Object(q.jsx)("label",{className:J.a.label,children:" Name "}),Object(q.jsx)("input",{onChange:this.handleChange,value:this.state.name,className:J.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(q.jsx)("label",{className:J.a.label,children:" Phone number "}),Object(q.jsx)("input",{type:"tel",onChange:this.handleChange,className:J.a.input,name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(q.jsx)("button",{type:"submit",className:J.a.button,children:"Add"})]})}}]),e}(r.Component),G=Object(s.b)((function(t){return{contacts:Y.getVisibleContacts(t)}}),(function(t){return{onSubmit:function(n){return t(H(n))}}}))($),W=e(8),tt=e.n(W),nt=Object(s.b)((function(t){return{contacts:Y.getVisibleContacts(t)}}),(function(t){return{onDelete:function(n){return t(T(n))}}}))((function(t){var n=t.contacts,e=t.onDelete;return Object(q.jsx)("ul",{className:tt.a.container,children:n.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(q.jsxs)("li",{className:tt.a.list,children:[Object(q.jsx)("div",{className:tt.a.buttonContainer,children:Object(q.jsx)("button",{className:tt.a.delete,onClick:function(){return e(n)},children:"-"})}),Object(q.jsxs)("div",{children:[Object(q.jsxs)("p",{className:tt.a.name,children:[c," "]}),Object(q.jsx)("span",{className:tt.a.number,children:a})]})]},n)}))})})),et=e(16),ct=e.n(et),at=Object(s.b)((function(t){return{value:Y.getFilter(t)}}),(function(t){return{onChange:function(n){return t(g(n.target.value))}}}))((function(t){var n=t.value,e=t.onChange;return Object(q.jsx)("div",{className:ct.a.container,children:Object(q.jsxs)("label",{className:ct.a.label,children:["Phone book search",Object(q.jsx)("input",{type:"text",value:n,onChange:e,className:ct.a.input})]})})})),rt=function(t){Object(B.a)(e,t);var n=Object(P.a)(e);function e(){return Object(A.a)(this,e),n.apply(this,arguments)}return Object(w.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(q.jsxs)(z,{children:[Object(q.jsx)(G,{}),Object(q.jsx)(at,{}),this.props.isLoadingContacts&&Object(q.jsx)("p",{children:"loading "}),Object(q.jsx)(nt,{})]})}}]),e}(r.Component),ot=Object(s.b)((function(t){return{isLoadingContacts:Y.getLoading(t)}}),(function(t){return{fetchContacts:function(){return t(K())}}}))(rt);u.a.render(Object(q.jsx)(o.a.StrictMode,{children:Object(q.jsx)(s.a,{store:L,children:Object(q.jsx)(ot,{})})}),document.getElementById("root"))},7:function(t,n,e){t.exports={form:"PhoneBook_form__BPD4Q",label:"PhoneBook_label__2LY1u",input:"PhoneBook_input__3jlId",button:"PhoneBook_button__1SJV1"}},8:function(t,n,e){t.exports={list:"ContactList_list__32zkO",container:"ContactList_container__1MC0H",name:"ContactList_name__2OxTB",number:"ContactList_number__1i7ZR",delete:"ContactList_delete__uXEt7",buttonContainer:"ContactList_buttonContainer__3c_bt"}}},[[65,1,2]]]);
//# sourceMappingURL=main.f2dbb5c1.chunk.js.map