(this["webpackJsonpsimple-budget-react"]=this["webpackJsonpsimple-budget-react"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),i=(a(13),a(14),function(){return r.a.createElement("h2",{style:{marginLeft:"15px"}},"Budget for May")}),u=a(1),l=a(7),s=a(4),m=function(e,t){switch(t.type){case"ADD_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{transactions:[].concat(Object(l.a)(e.transactions),[t.payload])});default:return e}},d={transactions:[{id:1,description:"Food Outside Home",amount:200,category:"Expense"},{id:2,description:"Book",amount:20,category:"Expense"},{id:3,description:"Movie",amount:20,category:"Expense"},{id:4,description:"Salary",amount:2e4,category:"Income"},{id:5,description:"Other",amount:2e4,category:"Income"}]},p=Object(n.createContext)(d),E=function(e){var t=e.children,a=Object(n.useReducer)(m,d),c=Object(u.a)(a,2),o=c[0],i=c[1];return r.a.createElement(p.Provider,{value:{transactions:o.transactions,addTransaction:function(e){i({type:"ADD_TRANSACTION",payload:e})}}},t)},f=function(e){var t=e.transaction;return r.a.createElement("ul",{className:"details"},r.a.createElement("li",null,t.description," ",r.a.createElement("span",null,"INR ",t.amount)))},v=function(){var e=Object(n.useContext)(p).transactions.filter((function(e){return"income"===e.category.toLowerCase()})),t=e.map((function(e){return r.a.createElement(f,{transaction:e,key:e.id})})),a=e.reduce((function(e,t){return e+t.amount}),0);return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"heading"},r.a.createElement("h4",null,"Income"),r.a.createElement("p",null,"INR ",a)),t)},g=function(){var e=Object(n.useContext)(p).transactions.filter((function(e){return"expense"===e.category.toLowerCase()})),t=e.map((function(e){return r.a.createElement(f,{transaction:e,key:e.id})})),a=e.reduce((function(e,t){return e+t.amount}),0);return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"heading"},r.a.createElement("h4",null,"Expense"),r.a.createElement("p",null,"INR ",a)),t)},y=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),i=Object(u.a)(o,2),l=i[0],s=i[1],m=Object(n.useState)("Income"),d=Object(u.a)(m,2),E=d[0],f=d[1],v=Object(n.useContext)(p),g=(v.transactions,v.addTransaction);return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"heading"},r.a.createElement("h4",{style:{margin:"0"}},"Add a new Transaction")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(100002*Math.random()),description:a,amount:+l,category:E};g(t)}},r.a.createElement("input",{value:a,onChange:function(e){c(e.target.value)},type:"text",name:"description",id:"description",placeholder:"Description",required:!0}),r.a.createElement("input",{value:l,onChange:function(e){s(e.target.value)},type:"number",name:"amount",id:"amount",required:!0}),r.a.createElement("div",{className:"category"},r.a.createElement("select",{onChange:function(e){f(e.target.value)},name:"category",id:"category"},r.a.createElement("option",{value:"Income"},"Income"),r.a.createElement("option",{value:"Expense"},"Expense"))),r.a.createElement("button",{type:"submit"},"Submit")))};var b=function(){return r.a.createElement(E,null,r.a.createElement("div",{className:"container"},r.a.createElement(i,null),r.a.createElement("div",{id:"summary_cards"},r.a.createElement(v,null),r.a.createElement(g,null)),r.a.createElement(y,null)))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.276f2c3c.chunk.js.map