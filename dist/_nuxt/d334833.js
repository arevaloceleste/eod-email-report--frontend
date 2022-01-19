(window.webpackJsonp=window.webpackJsonp||[]).push([[11,17],{229:function(e,t,r){},230:function(e,t,r){"use strict";r(229)},231:function(e,t,r){"use strict";r.r(t);r(1),r(14),r(92);var o={props:{items:{type:Array,required:!1,default:function(){return[]}},result:{type:Array,required:!1,default:function(){return[]}}},data:function(){return{search:"",results:[],isOpen:!1}},methods:{filterResults:function(){var e=this;this.results=this.items.filter((function(t){return t.name.toLowerCase().indexOf(e.search.toLowerCase())>-1}))},onChange:function(){this.filterResults(),this.isOpen=!0},clearInput:function(){this.isOpen=!1,this.search=""},handleClickOutside:function(e){this.$el.contains(e.target)||(this.isOpen=!1)}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}},c=(r(230),r(25)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"autocomplete"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text"},domProps:{value:e.search},on:{input:[function(t){t.target.composing||(e.search=t.target.value)},e.onChange]}}),e._v(" "),r("ul",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"autocomplete-results"},e._l(e.items,(function(t){return r("li",{key:t.objectID,staticClass:"autocomplete-result",on:{click:function(t){e.clearInput(),e.$emit("developer-selected",e.result)}}},[e._v("\n      "+e._s(t.name)+"\n    ")])})),0)])}),[],!1,null,null,null);t.default=component.exports},238:function(e,t,r){},254:function(e,t,r){"use strict";r(238)},264:function(e,t,r){"use strict";r.r(t);var o,c=r(8),l=(r(16),r(33),{props:{users:{type:Array,requiered:!0},devsTeam:{type:Object,requiered:!0}},data:function(){return{projectObject:this.getEmptyProject()}},created:function(){this.projectObject=this.getEmptyProject()},methods:{addProject:(o=Object(c.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("ADD PROJECT"),e.next=3,this.$dataProjects.addProject(this.getObjectToSave());case 3:if(t=e.sent,console.log("RESPUESTA ADD PROJECR:",t),t.ok){e.next=9;break}return e.abrupt("return",error({statusCode:t.status,message:t.statusText}));case 9:this.projectObject=this.getEmptyProject(),this.$emit("add-project",{});case 11:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)}),getEmptyProject:function(){return{name:"",client:"",owner:"",email:[""],lead_id:"",active:1}},getObjectToSave:function(){var e=Object.assign({},this.projectObject);return Array.isArray(e.email)||(e.email=e.email.split(",")),e},developerSelected:function(e){this.$emit("dev-selected",e)}}}),n=l,d=(r(254),r(25)),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"modal fade",attrs:{id:"addProjectModal",tabindex:"-1","aria-labelledby":"addProjectModal-label","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-content"},[e._m(0),e._v(" "),r("div",{staticClass:"modal-inner-body"},[r("form",{attrs:{id:"id_formfield"}},[r("div",{staticClass:"row"},[r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[e._v("Project Name")]),e._v(" "),r("div",{staticClass:"col-sm-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.projectObject.name,expression:"projectObject.name"}],staticClass:"form-control",attrs:{type:"text",id:"projectName",value:"",placeholder:"Enter Project name",autocomplete:"off"},domProps:{value:e.projectObject.name},on:{input:function(t){t.target.composing||e.$set(e.projectObject,"name",t.target.value)}}}),e._v(" "),e._m(1)])]),e._v(" "),r("div",{staticClass:"row"},[r("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Client")]),e._v(" "),r("div",{staticClass:"col-sm-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.projectObject.client,expression:"projectObject.client"}],staticClass:"form-control",attrs:{type:"text",id:"client",placeholder:"Enter client",autocomplete:"off"},domProps:{value:e.projectObject.client},on:{input:function(t){t.target.composing||e.$set(e.projectObject,"client",t.target.value)}}}),e._v(" "),e._m(2)])]),e._v(" "),r("div",{staticClass:"row"},[r("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Owner")]),e._v(" "),r("div",{staticClass:"col-sm-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.projectObject.owner,expression:"projectObject.owner"}],staticClass:"form-control",attrs:{type:"text",id:"owner",value:"",placeholder:"Enter Owner's name",autocomplete:"off"},domProps:{value:e.projectObject.owner},on:{input:function(t){t.target.composing||e.$set(e.projectObject,"owner",t.target.value)}}}),e._v(" "),e._m(3)])]),e._v(" "),r("div",{staticClass:"row"},[r("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Contact Email")]),e._v(" "),r("div",{staticClass:"col-sm-10"},[r("div",{attrs:{id:"emailPill"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.projectObject.email,expression:"projectObject.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",value:"",placeholder:"Enter Contact email"},domProps:{value:e.projectObject.email},on:{input:function(t){t.target.composing||e.$set(e.projectObject,"email",t.target.value)}}})]),e._v(" "),e._m(4)])]),e._v(" "),r("div",{staticClass:"row"},[r("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Lead")]),e._v(" "),r("div",{staticClass:"col-sm-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.projectObject.lead_id,expression:"projectObject.lead_id"}],staticClass:"form-control",attrs:{type:"text",id:"lead",value:"",placeholder:"Enter Lead",autocomplete:"off "},domProps:{value:e.projectObject.lead_id},on:{input:function(t){t.target.composing||e.$set(e.projectObject,"lead_id",t.target.value)}}}),e._v(" "),e._m(5)])]),e._v(" "),r("div",{staticClass:"row"},[r("label",{staticClass:"col-2 col-form-label"},[e._v("Team")]),e._v(" "),r("div",{staticClass:"col-10"},[r("div",{staticClass:"form-control",attrs:{id:"devsTeam"}},[e._l(e.devsTeam,(function(t){return r("div",{key:t.name},[r("p",[e._v(e._s(t))])])})),e._v(" "),r("SearchAutocomplete",{attrs:{items:e.users},on:{"developer-selected":e.developerSelected}})],2)])])])]),e._v(" "),r("div",{staticClass:"modal-footer"},[e._m(6),e._v(" "),r("button",{staticClass:"btn send-report",attrs:{type:"submit",id:"create-project"},on:{click:e.addProject}},[e._v("\n            CREATE PROJECT\n          ")])])])])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal-header"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-11"},[r("h4",[e._v("Add Project")])]),e._v(" "),r("div",{staticClass:"col-1"},[r("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"warningEmptyField"},[r("p",[e._v("This field is required")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"warningEmptyField"},[r("p",[e._v("This field is required")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"warningEmptyField"},[r("p",[e._v("This field is required")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"warningEmptyField",attrs:{id:"warning"}},[r("p",[e._v("This field is required")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"warningEmptyField"},[r("p",[e._v("This field is required")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"succes-message"}},[r("p",[e._v("Project Saved")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{SearchAutocomplete:r(231).default})}}]);