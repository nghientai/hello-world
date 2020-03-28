(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{15:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),o=a(8),r=a.n(o),l=a(1),i=a(2),c=a(4),m=a(3),u=a(5),d=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("footer",{className:"my-5 pt-5 text-muted text-center text-small"},s.a.createElement("p",{className:"mb-1"},"\xa9 Bootstrap")))}}]),e}(n.Component),p=a(6),h=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(m.a)(e).call(this,t))).onChange=function(t){var e=t.target,n=e.name,s=e.value;a.setState(Object(p.a)({},n,s))},a.onSearch=function(){a.props.onSearch(a.state.keyword)},a.state={keyword:""},a}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state.keyword;return s.a.createElement("div",{className:"row mt-3"},s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{className:"form-control",name:"keyword",placeholder:"Type something...",value:t,onChange:this.onChange}),s.a.createElement("span",{className:"input-group-btn"},s.a.createElement("button",{onClick:this.onSearch,className:"btn btn-primary",type:"button"},"Search")))))}}]),e}(n.Component),f=(n.Component,h),E=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(c.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(s)))).onUpdateStatus=function(){a.props.onUpdateStatus(a.props.task.id)},a.onDeleteItem=function(){a.props.onDeleteItem(a.props.task.id)},a.onEditItem=function(){a.props.onEditItem(a.props.task.id)},a}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.props,e=t.task,a=t.index;return s.a.createElement("tr",null,s.a.createElement("th",{scope:"row"},a),s.a.createElement("td",null,e.name," "),s.a.createElement("td",null,s.a.createElement("span",{className:!0===e.status?"badge badge-success":"badge badge-danger",onClick:this.onUpdateStatus},!0===e.status?"Active":"Hide")),s.a.createElement("td",{className:"text-center"},s.a.createElement("button",{onClick:this.onEditItem,type:"button",className:"btn btn-warning"},"Edit"),s.a.createElement("button",{onClick:this.onDeleteItem,type:"button",className:"btn btn-danger ml-2"},"Delete")))}}]),e}(n.Component),b=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(m.a)(e).call(this,t))).onChange=function(t){var e=t.target,n=e.name,s=e.value;a.props.onFilter("filterName"==n?s:a.state.filterName,"filterStatus"==n?s:a.state.filterStatus),a.setState(Object(p.a)({},n,s))},a.state={filterName:"",filterStatus:-1},a}return Object(u.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t,e=this,a=this.state,n=a.filterName,o=a.filterStatus;null==this.props.tasks?t=s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"4"},"No items")):t=this.props.tasks.map((function(t,a){return s.a.createElement(E,{key:t.id,task:t,index:a+1,onUpdateStatus:e.props.onUpdateStatus,onDeleteItem:e.props.onDeleteItem,onEditItem:e.props.onEditItem})}));return s.a.createElement("table",{className:"table mt-3"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Status"),s.a.createElement("th",{scope:"col",className:"text-center"},"Action"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null),s.a.createElement("td",null,s.a.createElement("input",{type:"text",className:"form-control",name:"filterName",value:n,onChange:this.onChange})),s.a.createElement("td",null,s.a.createElement("select",{className:"form-control",name:"filterStatus",value:o,onChange:this.onChange},s.a.createElement("option",{value:"-1"},"All"),s.a.createElement("option",{value:"0"},"Hide"),s.a.createElement("option",{value:"1"},"Active"))),s.a.createElement("td",null)),t))}}]),e}(n.Component),g=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(m.a)(e).call(this,t))).resetState=function(){a.setState({id:"",name:"",status:!1})},a.onSubmit=function(t){t.preventDefault(),a.setState(a.state),a.props.onSave(a.state),""===a.state.id&&a.resetState()},a.onChaneHandle=function(t){var e=t.target,n=e.name,s=e.value;a.setState(Object(p.a)({},n,s))},a.onCancel=function(){a.resetState()},a.onClear=function(){a.resetState()},a.state={id:"",name:"",status:!1},a}return Object(u.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.props.taskEditing&&this.setState({id:this.props.taskEditing.id,name:this.props.taskEditing.name,status:this.props.taskEditing.status})}},{key:"componentWillReceiveProps",value:function(t){t&&t.taskEditing&&this.setState({id:t.taskEditing.id,name:t.taskEditing.name,status:t.taskEditing.status})}},{key:"render",value:function(){return s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Task name"),s.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Task name",value:this.state.name,onChange:this.onChaneHandle}),s.a.createElement("input",{type:"hidden",name:"id",value:this.state.id})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Status"),s.a.createElement("select",{className:"form-control",name:"status",onChange:this.onChaneHandle,value:this.state.status},s.a.createElement("option",{value:!1},"Hide"),s.a.createElement("option",{value:!0},"Active"))),s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),s.a.createElement("button",{type:"button",onClick:this.onCancel,className:"btn btn-danger ml-2"},"Cancel"),s.a.createElement("button",{type:"button",onClick:this.onClear,className:"btn btn-danger ml-2"},"Clear"))))}}]),e}(n.Component),v=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(m.a)(e).call(this,t))).toggleForm=function(){a.setState({isShowingForm:!a.state.isShowingForm,taskEditing:null})},a.onSave=function(t){var e=a.state.tasks;(t.status=!("true"!==t.status&&!t.status),console.log(t.status),""===t.id)?(t.id=a.guid(),e.push(t)):(e[a.findIndex(t.id)]=t,a.setState({taskEditing:t}));a.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e))},a.onUpdateStatus=function(t){var e=a.state.tasks,n=a.findIndex(t);-1!==n&&(e[n].status=!e[n].status,a.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e)))},a.onDeleteItem=function(t){var e=a.state.tasks,n=a.findIndex(t);-1!==n&&(e.splice(n,1),a.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e)))},a.findIndex=function(t){var e=a.state.tasks,n=-1;return e.forEach((function(e,a){e.id==t&&(n=a)})),n},a.showForm=function(){a.setState({isShowingForm:!0})},a.onEditItem=function(t){a.showForm();var e=a.state.tasks,n=a.findIndex(t);if(-1!==n){var s=e[n];a.setState({taskEditing:s})}},a.onFilter=function(t,e){e=parseInt(e,10),a.setState({filter:{name:t.toLowerCase(),status:e}})},a.onSearch=function(t){a.setState({keyword:t.toLowerCase()})},a.state={tasks:[],isShowingForm:!1,taskEditing:null,filter:{name:"",status:-1},keyword:""},a}return Object(u.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){if(localStorage&&localStorage.getItem("tasks")){var t=JSON.parse(localStorage.getItem("tasks"));this.setState({tasks:t})}}},{key:"s4",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},{key:"guid",value:function(){return this.s4()+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+this.s4()+this.s4()}},{key:"render",value:function(){var t=this.state,e=t.tasks,a=t.isShowingForm,n=t.taskEditing,o=t.filter,r=t.keyword;o&&(o.name&&(e=e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(o.name)}))),e=e.filter((function(t){return-1===o.status?t:t.status===(1===o.status)}))),r&&(e=e.filter((function(t){return-1!==t.name.toLowerCase().indexOf(r)})));var l=this.state.isShowingForm?s.a.createElement(g,{taskEditing:n,onSave:this.onSave,onCancel:this.onCancel}):"";return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"py-5 text-center"},s.a.createElement("h2",null,"Todo List App")),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:!0===a?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""},l),s.a.createElement("div",{className:!0===a?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"},s.a.createElement("button",{type:"buton",className:"btn btn-primary",onClick:this.toggleForm},a?"Close Todo Form":"Add Todo"),s.a.createElement(f,{onSearch:this.onSearch}),s.a.createElement(b,{tasks:e,onUpdateStatus:this.onUpdateStatus,onDeleteItem:this.onDeleteItem,onEditItem:this.onEditItem,onFilter:this.onFilter}))),s.a.createElement(d,null))}}]),e}(n.Component);a(14);r.a.render(s.a.createElement(v,null),document.getElementById("root"))},9:function(t,e,a){t.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.f1d85c3f.chunk.js.map