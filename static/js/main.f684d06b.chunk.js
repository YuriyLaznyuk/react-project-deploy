(this["webpackJsonpreact-project-deploy"]=this["webpackJsonpreact-project-deploy"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(23),a=n.n(s),o=n(10),i=n(11),l=n(13),d=n(12),u=(n(30),n(31),n(3)),j=n(8),b=n(15),h=(n(32),n(0));function m(e){var t=e.layoutAdmin;return Object(h.jsxs)("ul",{className:"AdminMainMenu_ul",children:[Object(h.jsx)("li",{className:"products"===t?"admin_red":"admin_blue",onClick:function(){return e.onChangeAdminMenu("products")},children:"Products"}),Object(h.jsx)("li",{className:"customers"===t?"admin_red":"admin_blue",onClick:function(){return e.onChangeAdminMenu("customers")},children:"Customers"}),Object(h.jsx)("li",{className:"orders"===t?"admin_red":"admin_blue",onClick:function(){return e.onChangeAdminMenu("orders")},children:"Orders"}),Object(h.jsx)("li",{className:"stock"===t?"admin_red":"admin_blue",onClick:function(){return e.onChangeAdminMenu("stock")},children:"Stock"})]})}var O=n(16),x=(n(34),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).onValueChange=function(e){var t=e.target.name,n=e.target.value;c.product[t]=n,c.setState(Object(O.a)({},t,n),(function(){return c.onValidProduct(t,n)}))},c.onValidProduct=function(e,t){var n=c.state.nameValid,r=c.state.unitValid,s=c.state.priceValid;switch(e){case"name":n=t.length>=3;break;case"unit":r=t.length>=3;break;case"price":s=t.length>=3}c.setState({nameValid:n,unitValid:r,priceValid:s},c.onValidForm)},c.onValidForm=function(){c.setState({formValid:c.state.priceValid&&c.state.unitValid&&c.state.nameValid})},c.pushLS=function(e){var t=JSON.stringify(e);localStorage.setItem(e.name,t)},c.validStyle=function(e,t){return c.state[e].length>0&&!c.state[t]},c.state={name:"",unit:"",price:"",nameValid:!1,unitValid:!1,priceValid:!1,formValid:!1},c.product={},c}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t="";return this.props.liIndex>=0&&(t=this.props.products[this.props.liIndex]),t&&!this.product.name&&(this.product.name=t.name,this.setState({nameValid:t.name.length>=3,name:t.name,formValid:!0})),t&&!this.product.unit&&(this.product.unit=t.unit,this.setState({unitValid:t.unit.length>=3,unit:t.unit,formValid:!0})),t&&!this.product.price&&(this.product.price=t.price,this.setState({priceValid:t.price.length>=3,price:t.price,formValid:!0})),Object(h.jsxs)("div",{className:"ModalAdmin",style:this.props.createProduct?{display:"flex"}:{display:"none"},children:[Object(h.jsxs)("h2",{children:[t&&"Admin panel redactor products"," ",!t&&"Admin panel create products"]}),Object(h.jsxs)("form",{action:"",children:[Object(h.jsx)("label",{className:"ModalAdmin_label",htmlFor:"name",children:"Name"}),Object(h.jsx)("span",{className:"invalid",style:{opacity:this.validStyle("name","nameValid")?1:0},children:"Field Name invalid"}),Object(h.jsx)("input",{className:"ModalAdmin_text",type:"text",id:"name",name:"name",style:{border:this.validStyle("name","nameValid")&&"2px solid red"},defaultValue:t?t.name:"",onChange:function(t){return e.onValueChange(t)}}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{className:"ModalAdmin_label",htmlFor:"unit",children:"Unit"}),Object(h.jsx)("span",{className:"invalid",style:{opacity:this.validStyle("unit","unitValid")?1:0},children:"Field Unit invalid"}),Object(h.jsx)("input",{className:"ModalAdmin_text",type:"text",id:"unit",name:"unit",style:{border:this.validStyle("unit","unitValid")&&"2px solid red"},defaultValue:t?t.unit:"",onChange:function(t){return e.onValueChange(t)}}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{className:"ModalAdmin_label",htmlFor:"price",children:"Price"}),Object(h.jsx)("span",{className:"invalid",style:{opacity:this.validStyle("price","priceValid")?1:0},children:"Field Price invalid"}),Object(h.jsx)("input",{className:"ModalAdmin_text",type:"text",id:"price",name:"price",style:{border:this.validStyle("price","priceValid")&&"2px solid red"},defaultValue:t?t.price:"",onChange:function(t){return e.onValueChange(t)}}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"ModalAdmin_btnBlock",children:[Object(h.jsx)("input",{type:"reset",value:"Cancel",onClick:function(){return e.props.onCreateProduct(!1)}}),t&&Object(h.jsx)("input",{type:"reset",value:"Delete",onClick:function(){return e.props.onDeleteProduct(e.props.liIndex)}}),Object(h.jsx)("input",{type:"button",value:"Save",disabled:!this.state.formValid,onClick:function(){return e.props.onPushNameProduct(e.product,e.props.liIndex)}})]})]})]})}}]),n}(c.Component)),p=(n(35),{start:{name:"white",age:111}}),C=r.a.createContext(p);function f(e){var t=e.products.length;Object(c.useContext)(C);console.log(e.productslS);var n=e.products.map((function(t,n){return Object(h.jsxs)("tr",{onClick:function(){return e.onCreateProduct(!0,n)},children:[Object(h.jsx)("td",{children:t.name}),Object(h.jsx)("td",{children:t.unit}),Object(h.jsx)("td",{children:t.price})]},n)}));return Object(h.jsxs)("div",{className:"Products",children:[Object(h.jsx)("h1",{children:"Product control panel"}),Object(h.jsx)("p",{children:Object(h.jsx)("button",{className:"btn-create",onClick:function(){return e.onCreateProduct(!0)},children:"create product"})}),e.createProduct&&Object(h.jsx)(x,{onPushNameProduct:e.onPushNameProduct,createProduct:e.createProduct,onCreateProduct:e.onCreateProduct,liIndex:e.liIndex,products:e.products,onDeleteProduct:e.onDeleteProduct}),Object(h.jsxs)("table",{className:"Products_table",children:[Object(h.jsxs)("thead",{children:[Object(h.jsx)("tr",{children:Object(h.jsx)("th",{className:"th_head",colSpan:"3",children:0===t?"No products":"Table Products"})}),Object(h.jsxs)("tr",{className:"thead-tr",children:[Object(h.jsx)("th",{children:"name"}),Object(h.jsx)("th",{children:"unit"}),Object(h.jsx)("th",{children:"price"})]})]}),Object(h.jsx)("tbody",{children:n})]})]})}n(36);var v=n(2);n(37);var S=function(e){Object(c.useContext)(C);var t,n=Object(c.useState)(""),r=Object(v.a)(n,2),s=r[0],a=r[1],o=Object(c.useState)(""),i=Object(v.a)(o,2),l=i[0],d=i[1],u=Object(c.useState)(""),j=Object(v.a)(u,2),b=j[0],m=j[1],O=Object(c.useState)(!1),x=Object(v.a)(O,2),p=x[0],f=x[1],S=Object(c.useState)(!1),k=Object(v.a)(S,2),g=k[0],N=k[1],y=Object(c.useState)(!1),P=Object(v.a)(y,2),V=P[0],I=P[1],A=Object(c.useState)(!1),_=Object(v.a)(A,2),M=_[0],D=_[1];Object(c.useEffect)((function(){f(/[a-z]{3,7}/.test(s)),N(/\d{7,10}/.test(l)),I(/^[\w-\\.\d*]+@[\w\d]+(\.\w{2,4})$/.test(b)),D(p&&g&&V)})),t={name:s,tel:l,email:b};var F=e.customerIndex>=0,w=e.customers[e.customerIndex];return console.log(t),console.log(e.customerIndex),w&&!t.name&&a(w.name),w&&!t.tel&&d(w.tel),w&&!t.email&&m(w.email),Object(h.jsxs)("div",{className:"ModalCreate",children:[Object(h.jsx)("h1",{children:F?"Modal Redactor Customers":"Modal Create Customers"}),Object(h.jsxs)("form",{className:"ModalCreate_form",action:"",children:[Object(h.jsx)("label",{htmlFor:"name",children:"NAME"}),Object(h.jsx)("span",{className:"valid",children:s.length>0&&!p&&"Invalid Name"}),Object(h.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)},style:{border:s.length>0&&!p&&"2px solid red"},name:"name",id:"name",defaultValue:F?w.name:""}),Object(h.jsx)("label",{htmlFor:"tel",children:"Tel"}),Object(h.jsx)("span",{className:"valid",children:l.length>0&&!g&&"Invalid Tel"}),Object(h.jsx)("input",{type:"text",onChange:function(e){return d(e.target.value)},style:{border:l.length>0&&!g&&"2px solid red"},name:"tel",id:"tel",defaultValue:F?w.tel:""}),Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsx)("span",{className:"valid",children:b.length>0&&!V&&"Invalid Email"}),Object(h.jsx)("input",{type:"text",onChange:function(e){return m(e.target.value)},style:{border:b.length>0&&!V&&"2px solid red"},name:"email",id:"email",defaultValue:F?w.email:""}),Object(h.jsxs)("div",{className:"block_button",children:[Object(h.jsx)("input",{value:"cancel",type:"button",onClick:function(){return e.onCreateCustomer(!1)}}),F&&Object(h.jsx)("input",{value:"delete",type:"button",onClick:function(){return e.onDeleteCustomer(e.customerIndex)}}),Object(h.jsx)("input",{value:"save",type:"button",onClick:function(){return e.onPushNameCustomer(t,e.customerIndex)},disabled:!M})]})]})]})};function k(e){var t=e.customers.map((function(t,n){return Object(h.jsxs)("tr",{onClick:function(){return e.onCreateCustomer(!0,n)},children:[Object(h.jsx)("td",{children:t.name}),Object(h.jsxs)("td",{children:[" ",t.tel]}),Object(h.jsx)("td",{children:t.email})]},n)}));return Object(h.jsxs)("div",{className:"Customers",children:[Object(h.jsx)("h1",{children:"Customer"}),Object(h.jsx)("button",{className:"btn_Customers",onClick:function(){return e.onCreateCustomer(!0)},children:"Create Customer"}),e.createCustomer&&Object(h.jsx)(S,{customers:e.customers,onCreateCustomer:e.onCreateCustomer,customerIndex:e.customerIndex,onDeleteCustomer:e.onDeleteCustomer,onPushNameCustomer:e.onPushNameCustomer}),Object(h.jsxs)("table",{className:"table_Customers",children:[Object(h.jsxs)("thead",{children:[Object(h.jsx)("tr",{children:Object(h.jsx)("th",{colSpan:"3",children:e.customers.length?"Table Customers":"NO Customers"})}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"NAME"}),Object(h.jsx)("th",{children:"Tel"}),Object(h.jsx)("th",{children:"Email"})]})]}),Object(h.jsx)("tbody",{children:t})]})]})}n(38),n(39);var g=function(e){var t=Object(c.useContext)(C),n=t.orderIndex,r=t.orders[n],s=Object(c.useState)(""),a=Object(v.a)(s,2),o=a[0],i=a[1],l=Object(c.useState)(""),d=Object(v.a)(l,2),u=d[0],j=d[1],b=Object(c.useState)(""),m=Object(v.a)(b,2),O=m[0],x=m[1],p={name:o,cols:u,price:O},f=Object(c.useState)(!1),S=Object(v.a)(f,2),k=S[0],g=S[1],N=Object(c.useState)(!1),y=Object(v.a)(N,2),P=y[0],V=y[1],I=Object(c.useState)(!1),A=Object(v.a)(I,2),_=A[0],M=A[1],D=Object(c.useState)(!1),F=Object(v.a)(D,2),w=F[0],E=F[1];return Object(c.useEffect)((function(){g(/^[A-Za-z][a-z]{2,8}$/.test(o)),V(/^[1-9]\d{0,3}$/.test(u)),M(/^[1-9]+[,]?([0-9]|[1-9])?[1-9]$/.test(O)),E(k&&P&&_)})),r&&!p.name&&(p.name=r.name,i(r.name)),r&&!p.cols&&j(r.cols),r&&!p.price&&x(r.price),Object(h.jsxs)("div",{className:"ModalOrders",children:[Object(h.jsx)("h1",{children:n>=0?"Panel Redactor Orders":"Panel Create Orders"}),Object(h.jsxs)("form",{className:"ModalOrders_form",action:"",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name"}),Object(h.jsx)("span",{className:"valid",children:!k&&o.length>0&&"Name no valid"}),Object(h.jsx)("input",{type:"text",id:"name",onChange:function(e){return i(e.target.value)},name:"name",defaultValue:n>=0?r.name:"",style:{border:!k&&o.length>0&&"2px solid red"}}),Object(h.jsx)("label",{htmlFor:"quantity",children:"Quantity "}),!P&&u.length>0&&Object(h.jsx)("span",{className:"valid",children:"Quantity no Valid"}),Object(h.jsx)("input",{type:"text",id:"quantity",onChange:function(e){return j(e.target.value)},name:"quantity",defaultValue:n>=0?r.cols:"",style:{border:!P&&u.length>0&&"2px solid red"}}),Object(h.jsx)("label",{htmlFor:"price",children:"Price"}),!_&&O.length>0&&Object(h.jsx)("span",{className:"valid",children:"Price no valid"}),Object(h.jsx)("input",{type:"text",id:"price",onChange:function(e){return x(e.target.value)},name:"price",defaultValue:n>=0?r.price:"",style:{border:!_&&O.length>0&&"2px solid red"}}),Object(h.jsxs)("div",{className:"block_button",children:[Object(h.jsx)("input",{type:"button",value:"cancel",onClick:function(){return t.CreateOrder(!1)}}),n>=0&&Object(h.jsx)("input",{type:"button",value:"delete",onClick:function(){return t.DeleteOrder(n)}}),Object(h.jsx)("input",{type:"button",value:"save",onClick:function(){return t.PushNameOrder(p,n)},disabled:!w})]})]})]})};function N(e){var t=Object(c.useContext)(C),n=t.orders.map((function(e,n){return Object(h.jsxs)("tr",{onClick:function(){return t.CreateOrder(!0,n)},children:[Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.cols}),Object(h.jsx)("td",{children:e.price})]},n)}));return Object(h.jsxs)("div",{className:"Orders",children:[t.createOrders&&Object(h.jsx)(g,{}),Object(h.jsx)("h1",{children:"Orders Panel Control"}),Object(h.jsx)("button",{className:"btn_Orders",onClick:function(){return t.CreateOrder(!0)},children:"Create Order"}),Object(h.jsxs)("table",{className:"table_Orders",children:[Object(h.jsxs)("thead",{children:[Object(h.jsx)("tr",{children:Object(h.jsx)("th",{colSpan:"3",children:t.orders.length>0?"Table Orders":"No Orders"})}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"name"}),Object(h.jsx)("th",{children:"quantity"}),Object(h.jsx)("th",{children:"price"})]})]}),Object(h.jsx)("tbody",{children:n})]})]})}n(40);var y=function(e){var t=Object(c.useContext)(C),n=t.stockIndex,r=t.stock[n],s=Object(c.useState)(""),a=Object(v.a)(s,2),o=a[0],i=a[1],l=Object(c.useState)(""),d=Object(v.a)(l,2),u=d[0],j=d[1],b=Object(c.useState)(""),m=Object(v.a)(b,2),O=m[0],x=m[1],p=Object(c.useState)(""),f=Object(v.a)(p,2),S=f[0],k=f[1],g=Object(c.useState)(!1),N=Object(v.a)(g,2),y=N[0],P=N[1],V=Object(c.useState)(!1),I=Object(v.a)(V,2),A=I[0],_=I[1],M=Object(c.useState)(!1),D=Object(v.a)(M,2),F=D[0],w=D[1],E=Object(c.useState)(!1),$=Object(v.a)(E,2),T=$[0],q=$[1],z=Object(c.useState)(!1),Q=Object(v.a)(z,2),J=Q[0],L=Q[1];Object(c.useEffect)((function(){P(/^[a-zA-z][a-z]{2,10}$/.test(o)),_(/^[1-9][0-9]{0,5}$/.test(u)),w(/^[1-9][0-9]?[%]$/.test(O)),q(/(^[1-9][0-9]{0,5}[.]?([0-9]|[1-9])[0-9]$)|(^[1-9][0-9]{0,5}$)/.test(S)),L(y&&A&&F&&T)}));var U={name:o,cols:u,stock:O,price:S};return r&&!U.name&&i(r.name),r&&!U.cols&&j(r.cols),r&&!U.stock&&x(r.stock),r&&!U.price&&k(r.price),Object(h.jsxs)("div",{className:"ModalStock",children:[Object(h.jsx)("h1",{children:n>=0?"Redactor stock product":"Create stock product"}),Object(h.jsxs)("form",{action:"",className:"ModalStock_form",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name"}),!y&&o.length>0&&Object(h.jsx)("span",{className:"ModalStock-valid_span",children:"Invalid Name"}),Object(h.jsx)("input",{type:"text",id:"name",onChange:function(e){return i(e.target.value)},defaultValue:n>=0?r.name:"",style:{border:!y&&o.length>0&&"2px solid red"}}),Object(h.jsx)("label",{htmlFor:"quantity",children:"Quantity"}),!A&&u.length>0&&Object(h.jsx)("span",{className:"ModalStock-valid_span",children:"Invalid Quantity"}),Object(h.jsx)("input",{type:"text",id:"quantity",onChange:function(e){return j(e.target.value)},defaultValue:n>=0?r.cols:"",style:{border:!A&&u.length>0&&"2px solid red"}}),Object(h.jsx)("label",{htmlFor:"sale",children:"Sale"}),!F&&O.length>0&&Object(h.jsx)("span",{className:"ModalStock-valid_span",children:"Invalid Sale"}),Object(h.jsx)("input",{type:"text",id:"sale",onChange:function(e){return x(e.target.value)},defaultValue:n>=0?r.stock:"",style:{border:!F&&O.length>0&&"2px solid red"}}),Object(h.jsx)("label",{htmlFor:"prise",children:"Price"}),!T&&S.length>0&&Object(h.jsx)("span",{className:"ModalStock-valid_span",children:"Invalid Price"}),Object(h.jsx)("input",{type:"text",id:"prise",onChange:function(e){return k(e.target.value)},defaultValue:n>=0?r.price:"",style:{border:!T&&S.length>0&&"2px solid red"}}),Object(h.jsxs)("div",{className:"ModalStock_button",children:[Object(h.jsx)("input",{type:"button",value:"cancel",onClick:function(){return t.CreateStock(!1)}}),n>=0&&Object(h.jsx)("input",{type:"button",value:"delete",onClick:function(){return t.DeleteStock(n)}}),Object(h.jsx)("input",{type:"button",value:"save",onClick:function(){return t.PushNameStock(U,n)},disabled:!J})]})]})]})};n(41);function P(e){var t=Object(c.useContext)(C),n=t.stock.length,r=t.stock.map((function(e,n){return Object(h.jsxs)("tr",{onClick:function(){return t.CreateStock(!0,n)},children:[Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.cols}),Object(h.jsx)("td",{children:e.stock}),Object(h.jsx)("td",{children:e.price})]},n)}));return Object(h.jsxs)("div",{className:"Stock",children:[Object(h.jsx)("h1",{children:"Admin panel stock product"}),Object(h.jsx)("button",{className:"Stock_button",onClick:function(){return t.CreateStock(!0)},children:"Create stock product"}),t.createStock&&Object(h.jsx)(y,{}),Object(h.jsxs)("table",{className:"Stock_table",children:[Object(h.jsxs)("thead",{children:[Object(h.jsx)("tr",{children:Object(h.jsx)("th",{colSpan:4,children:n?"Table stock product":"No stock product"})}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Quantity"}),Object(h.jsx)("th",{children:"Sale"}),Object(h.jsx)("th",{children:"Price"})]})]}),Object(h.jsx)("tbody",{children:r})]})]})}function V(e){for(var t=e.componentAdmin,n=e.products,c=e.customers,r=e.orders,s=e.stock,a=e.onCreateProduct,o=e.onPushNameProduct,i=e.createProduct,l=e.liIndex,d=e.onDeleteProduct,u=e.customerIndex,j=e.onCreateCustomer,b=e.createCustomer,m=e.onDeleteCustomer,O=e.onPushNameCustomer,x=[],p=0;p<localStorage.length;p++){var C=localStorage.key(p);x.push(JSON.parse(localStorage.getItem(C))),console.log(localStorage.getItem(C))}console.log(x);var v=null;switch(t){case"products":v=Object(h.jsx)(f,{products:n,onCreateProduct:a,onPushNameProduct:o,createProduct:i,liIndex:l,onDeleteProduct:d,productslS:x});break;case"customers":v=Object(h.jsx)(k,{customers:c,customerIndex:u,onCreateCustomer:j,onDeleteCustomer:m,onPushNameCustomer:O,createCustomer:b});break;case"orders":v=Object(h.jsx)(N,{orders:r});break;case"stock":v=Object(h.jsx)(P,{stock:s});break;default:v=Object(h.jsx)("div",{children:"Ku-Ku"})}return Object(h.jsx)("div",{children:v})}var I=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).onDeleteProduct=function(e){c.prdelete=c.state.products,c.prdelete.splice(e,1),c.setState({products:c.prdelete,createProduct:!1})},c.onPushNameProduct=function(e,t){c.prpush=c.state.products,t>=0?(c.prpush[t]=e,c.setState({products:c.prpush})):(c.prpush.push(e),c.setState({products:c.prpush})),c.setState({createProduct:!1}),console.log(c.state.products)},c.onCreateProduct=function(e,t){c.setState({createProduct:e}),c.setState({liIndex:t})},c.onCreateCustomer=function(e,t){c.setState({createCustomer:e,customerIndex:t})},c.onPushNameCustomer=function(e,t){var n=c.state.customers;t>=0?(n[t]=e,c.setState({customers:n})):(n.push(e),c.setState({customers:n})),c.setState({createCustomer:!1})},c.onDeleteCustomer=function(e){c.newCustomers=c.state.customers,c.newCustomers.splice(e,1),c.setState({customers:c.newCustomers}),c.setState({createCustomer:!1})},c.onCreateOrder=function(e,t){c.setState({createOrders:e,orderIndex:t})},c.onPushNameOrder=function(e,t){var n=c.state.orders;t>=0?(n[t]=e,c.setState({orders:n,createOrders:!1})):(n.push(e),c.setState({orders:n,createOrders:!1}))},c.onDeleteOrder=function(e){var t=c.state.orders;t.splice(e,1),c.setState({orders:t,createOrders:!1})},c.onCreateStock=function(e,t){c.setState({createStock:e,stockIndex:t})},c.onPushNameStock=function(e,t){var n=c.state.stock;t>=0?(n[t]=e,c.setState({stock:n,createStock:!1})):(n.push(e),c.setState({stock:n,createStock:!1}))},c.onDeleteNameStock=function(e){var t=c.state.stock;t.splice(e,1),c.setState({stock:t,createStock:!1})},c.state={layoutAdmin:"",createProduct:!1,createCustomer:!1,createOrders:!1,createStock:!1,products:[],customers:[],orders:[],stock:[],liIndex:"",customerIndex:"",orderIndex:"",stockIndex:""},c.onChangeAdminMenu=c.onChangeAdminMenu.bind(Object(b.a)(c)),c}return Object(i.a)(n,[{key:"onChangeAdminMenu",value:function(e){this.setState({layoutAdmin:e})}},{key:"render",value:function(){return console.log(this.state.products+" AdminContainer"),console.log(this.state.customers),Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{layoutAdmin:this.state.layoutAdmin,onChangeAdminMenu:this.onChangeAdminMenu}),Object(h.jsx)(C.Provider,{value:{myCont:"\u044d\u0442\u043e \u043c\u043e\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442",createOrders:this.state.createOrders,orders:this.state.orders,orderIndex:this.state.orderIndex,CreateOrder:this.onCreateOrder,PushNameOrder:this.onPushNameOrder,DeleteOrder:this.onDeleteOrder,stock:this.state.stock,createStock:this.state.createStock,stockIndex:this.state.stockIndex,CreateStock:this.onCreateStock,PushNameStock:this.onPushNameStock,DeleteStock:this.onDeleteNameStock},children:Object(h.jsx)(V,{componentAdmin:this.state.layoutAdmin,products:this.state.products,customers:this.state.customers,orders:this.state.orders,stock:this.state.stock,onCreateProduct:this.onCreateProduct,createProduct:this.state.createProduct,liIndex:this.state.liIndex,onPushNameProduct:this.onPushNameProduct,onDeleteProduct:this.onDeleteProduct,onCreateCustomer:this.onCreateCustomer,customerIndex:this.state.customerIndex,createCustomer:this.state.createCustomer,onPushNameCustomer:this.onPushNameCustomer,onDeleteCustomer:this.onDeleteCustomer})})]})}}]),n}(c.Component);function A(e){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"User Container"})})}n(42);var _={isAuthentication:!1,methodAuthentication:function(e){this.isAuthentication=!0,setTimeout(e,100)}},M=function(e){var t=(Object(u.g)().state||{from:{pathname:"/"}}).from,n=Object(c.useState)(!1),r=Object(v.a)(n,2),s=r[0],a=r[1],o=Object(c.useState)(""),i=Object(v.a)(o,2),l=i[0],d=i[1],j=Object(c.useState)(!1),b=Object(v.a)(j,2),m=b[0],O=b[1];return Object(c.useEffect)((function(){O(/^admin$/.test(l))})),s?Object(h.jsx)(u.a,{to:t}):Object(h.jsxs)("div",{className:"Login",children:[Object(h.jsxs)("p",{className:"Login__p",children:["You must log in to view the page at ",t.pathname]}),!m&&l.length>0&&Object(h.jsx)("span",{className:"Login__span",children:"Invalid password"}),Object(h.jsx)("label",{htmlFor:"pass",children:"Password admin"}),Object(h.jsx)("input",{type:"text",id:"pass",onChange:function(e){return d(e.target.value)}}),Object(h.jsx)("input",{type:"button",value:"Password in",onClick:function(){_.methodAuthentication((function(){return m&&""!==l?a(!0):_.isAuthentication=!1}))}})]})},D=n(21),F=n(25);var w=function(e){var t=e.component,n=Object(F.a)(e,["component"]),c=Object(u.g)();return Object(h.jsx)(u.b,Object(D.a)(Object(D.a)({},n),{},{children:!0===_.isAuthentication?Object(h.jsx)(t,{}):Object(h.jsx)(u.a,{to:{pathname:"/login",state:{from:c}}})}))};function E(e){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("ul",{className:"MainMenu_ul",children:[Object(h.jsx)("li",{className:Object(u.h)("/admin")?"red":"blue",children:Object(h.jsx)(j.b,{to:"/admin",children:"Admin"})}),Object(h.jsx)("li",{className:Object(u.h)("/usecontainer")?"red":"blue",children:Object(h.jsx)(j.b,{to:"/usecontainer",children:"UserContainer"})}),Object(h.jsx)("li",{className:Object(u.h)("/container1")?"red":"blue",children:Object(h.jsx)(j.b,{to:"/container1",children:"Container 1"})}),Object(h.jsx)("li",{className:Object(u.h)("/container2")?"red":"blue",children:Object(h.jsx)(j.b,{to:"/container2",children:"Container 2"})})]}),Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{exact:!0,path:"/usecontainer",children:Object(h.jsx)(A,{})}),Object(h.jsx)(u.b,{path:"/container1",children:Object(h.jsx)("h1",{children:"Container 1"})}),Object(h.jsx)(u.b,{path:"/container2",children:Object(h.jsx)("h1",{children:"Container 2"})}),Object(h.jsx)(u.b,{path:"/login",children:Object(h.jsx)(M,{})}),Object(h.jsx)(w,{path:"/admin",component:I})]})]})}var $=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)(j.a,{children:Object(h.jsx)(E,{})})}}]),n}(c.Component);a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)($,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.f684d06b.chunk.js.map