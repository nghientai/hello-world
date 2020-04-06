(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{17:function(t,e,a){t.exports=a(29)},29:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(10),s=a.n(o),l=a(1),c=a(2),i=a(5),u=a(3),m=a(6),d=function(t){function e(){return Object(l.a)(this,e),Object(i.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("footer",{className:"my-5 pt-5 text-muted text-center text-small"},r.a.createElement("p",{className:"mb-1"},"\xa9 Bootstrap")))}}]),e}(n.Component),p=a(7),f=a(4),E=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).onChange=function(t){var e=t.target,n=e.name,r=e.value;a.setState(Object(p.a)({},n,r))},a.onSearch=function(){a.props.onSearch(a.state.keyword)},a.state={keyword:""},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.state.keyword;return r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",name:"keyword",placeholder:"Type something...",value:t,onChange:this.onChange}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{onClick:this.onSearch,className:"btn btn-primary",type:"button"},"Search"))))}}]),e}(n.Component),h=Object(f.b)((function(){return{}}),(function(t){return{onSearch:function(e){return t(function(t){return{type:"SEARCH_BY_KEYWORD",keyword:t}}(e))}}}))(E),b=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).onUpdateStatus=function(){a.props.onUpdateStatus(a.props.task.id)},a.onDeleteItem=function(){a.props.onDeleteItem(a.props.task.id)},a.onEditItem=function(){a.props.openForm(),a.props.onEditItem(a.props.task)},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props,e=t.task,a=t.index;return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},a),r.a.createElement("td",null,e.name," "),r.a.createElement("td",null,r.a.createElement("span",{className:!0===e.status?"badge badge-success":"badge badge-danger",onClick:this.onUpdateStatus},!0===e.status?"Active":"Completed")),r.a.createElement("td",{className:"text-center"},r.a.createElement("button",{onClick:this.onEditItem,type:"button",className:"btn btn-warning"},"Edit"),r.a.createElement("button",{onClick:this.onDeleteItem,type:"button",className:"btn btn-danger ml-2"},"Delete")))}}]),e}(n.Component),v=Object(f.b)(null,(function(t){return{onUpdateStatus:function(e){t(function(t){return{type:"UPDATE_SINGLE_STATUS",id:t}}(e))},onDeleteItem:function(e){t(function(t){return{type:"DELETE_SINGLE_ITEM",id:t}}(e))},onEditItem:function(e){t(function(t){return{type:"EDIT_ITEM",task:t}}(e))},openForm:function(){t({type:"OPEN_FORM"})}}}))(b),g=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).onChange=function(t){var e=t.target,n=e.name,r=e.value;a.props.onFilter({filterName:"filterName"===n?r:a.state.filterName,filterStatus:"filterStatus"===n?r:a.state.filterStatus}),a.setState(Object(p.a)({},n,r))},a.state={filterName:"",filterStatus:-1},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t,e=this.props.filter,a=e.filterName,n=e.filterStatus,o=this.props.keyword.keyword,s=this.props.tasks;return a&&(s=s.filter((function(t){return-1!==t.name.toLowerCase().indexOf(a)}))),console.log(this.props),s=s.filter((function(t){return-1===n?t:t.status===(1===n)})),o&&(s=s.filter((function(t){return-1!==t.name.toLowerCase().indexOf(o)}))),t=0===s.length?r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"4"},"No items")):s.map((function(t,e){return r.a.createElement(v,{key:t.id,task:t,index:e+1})})),r.a.createElement("table",{className:"table mt-3"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Status"),r.a.createElement("th",{scope:"col",className:"text-center"},"Action"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control",name:"filterName",value:a,onChange:this.onChange})),r.a.createElement("td",null,r.a.createElement("select",{className:"form-control",name:"filterStatus",value:n,onChange:this.onChange},r.a.createElement("option",{value:"-1"},"All"),r.a.createElement("option",{value:"0"},"Completed"),r.a.createElement("option",{value:"1"},"Active"))),r.a.createElement("td",null)),t))}}]),e}(n.Component),O=Object(f.b)((function(t){return{tasks:t.tasks,filter:t.filterTable,keyword:t.filterByKeyWords,sortByName:t.v}}),(function(t){return{onFilter:function(e){t(function(t){return{type:"TABLE_FILTER",filterData:t}}(e))}}}))(g),S=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).resetState=function(){a.setState({id:"",name:"",status:!0})},a.onSubmit=function(t){t.preventDefault(),a.setState(a.state),a.props.onSaveTask(a.state),"undefined"===typeof a.state.id&&a.resetState()},a.onChaneHandle=function(t){var e=t.target,n=e.name,r=e.value;a.setState(Object(p.a)({},n,r))},a.onCancel=function(){a.resetState()},a.onClear=function(){a.resetState()},a.state={id:"",name:"",status:!0},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.props.taskEditing&&this.setState({id:this.props.taskEditing.id,name:this.props.taskEditing.name,status:this.props.taskEditing.status})}},{key:"componentWillReceiveProps",value:function(t){t&&t.taskEditing?this.setState({id:t.taskEditing.id,name:t.taskEditing.name,status:t.taskEditing.status}):this.resetState()}},{key:"render",value:function(){return this.props.isShowingForm?r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Task name"),r.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Task name",value:this.state.name,onChange:this.onChaneHandle,required:!0}),r.a.createElement("input",{type:"hidden",name:"id",value:this.state.id})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Status"),r.a.createElement("select",{className:"form-control",name:"status",onChange:this.onChaneHandle,value:this.state.status},r.a.createElement("option",{value:!0},"Active"),r.a.createElement("option",{value:!1},"Completed"))),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),r.a.createElement("button",{type:"button",onClick:this.onCancel,className:"btn btn-danger ml-2"},"Cancel"),r.a.createElement("button",{type:"button",onClick:this.onClear,className:"btn btn-danger ml-2"},"Clear")))):""}}]),e}(n.Component),y=Object(f.b)((function(t){return{isShowingForm:t.toggleForm,taskEditing:t.itemEditting}}),(function(t){return{onSaveTask:function(e){t(function(t){return{type:"SAVE_TASK",task:t}}(e))}}}))(S),N=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).onChange=function(t){var e=t.target,n=e.name,r=e.value;a.setState(Object(p.a)({},n,r)),a.props.onSort(a.state)},a.state={sortByName:0},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("select",{className:"form-control",name:"sortByName",value:this.state.sortByName,onChange:this.onChange},r.a.createElement("option",{value:""},"Sort by"),r.a.createElement("option",{value:1},"Name A-Z"),r.a.createElement("option",{value:-1},"Name Z-A"))))}}]),e}(n.Component),k=(Object(f.b)((function(){return{}}),(function(t){return{onSort:function(e){return t(function(t){return{type:"SORT_BY_NAME",v:t}}(e))}}}))(N),function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(i.a)(this,Object(u.a)(e).call(this,t))).toggleForm=function(){a.props.toggleForm()},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.isShowingForm;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-5 text-center"},r.a.createElement("h2",null,"Todo List App")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:!0===t?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""},r.a.createElement(y,{onCancel:this.onCancel})),r.a.createElement("div",{className:!0===t?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"},r.a.createElement("button",{type:"buton",className:"btn btn-primary",onClick:this.toggleForm},t?"Close Todo Form":"Add Todo"),r.a.createElement("div",{className:"row mt-3"},r.a.createElement(h,null)),r.a.createElement(O,null))),r.a.createElement(d,null))}}]),e}(n.Component)),j=Object(f.b)((function(t){return{isShowingForm:t.toggleForm}}),(function(t){return{toggleForm:function(){t({type:"TOGGLE_FORM"})}}}))(k),C=(a(28),a(9)),T=a(11),_=a(8),w=JSON.parse(localStorage.getItem("tasks")),I=w||[],A=function(t,e){var a=-1;return t.forEach((function(t,n){t.id===e&&(a=n)})),a},D=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},F=function(){return D()+D()+"-"+D()+"-"+D()+"-"+D()+"-"+D()+D()+D()},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LIST_ALL":return t;case"SAVE_TASK":if(e.task.id){-1!==(n=A(t,e.task.id))&&(t[n]=Object(_.a)({},t[n],{name:e.task.name,status:"false"!=e.task.status}))}else{var a={id:F(),name:e.task.name,status:"false"!=e.task.status};t.push(a)}return localStorage.setItem("tasks",JSON.stringify(t)),Object(T.a)(t);case"UPDATE_SINGLE_STATUS":return-1!==(n=A(t,e.id))&&(t[n]=Object(_.a)({},t[n],{status:!t[n].status}),localStorage.setItem("tasks",JSON.stringify(t))),Object(T.a)(t);case"DELETE_SINGLE_ITEM":var n;return-1!==(n=A(t,e.id))&&(t.splice(n,1),localStorage.setItem("tasks",JSON.stringify(t))),Object(T.a)(t);default:return t}},x=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TOGGLE_FORM":return!t;case"OPEN_FORM":return!0;default:return t}},B={id:"",name:"",status:!0},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"EDIT_ITEM":return e.task;default:return t}},M={filterName:"",filterStatus:-1},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TABLE_FILTER":var a=parseInt(e.filterData.filterStatus,10);return t={filterName:e.filterData.filterName.toLowerCase(),filterStatus:a},Object(_.a)({},t);default:return t}},G={keyword:""},J=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SEARCH_BY_KEYWORD":return t={keyword:e.keyword},Object(_.a)({},t);default:return t}},K={sortName:0},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SORT_BY_NAME":return t={sortName:e.v};default:return t}},H=Object(C.b)({tasks:L,toggleForm:x,itemEditting:R,filterTable:U,filterByKeyWords:J,sortByName:Y}),P=Object(C.c)(H,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(f.a,{store:P},r.a.createElement(j,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.266370a9.chunk.js.map