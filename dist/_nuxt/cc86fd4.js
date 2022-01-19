(window.webpackJsonp=window.webpackJsonp||[]).push([[13,17],{229:function(e,t,l){},230:function(e,t,l){"use strict";l(229)},231:function(e,t,l){"use strict";l.r(t);l(1),l(14),l(92);var r={props:{items:{type:Array,required:!1,default:function(){return[]}},result:{type:Array,required:!1,default:function(){return[]}}},data:function(){return{search:"",results:[],isOpen:!1}},methods:{filterResults:function(){var e=this;this.results=this.items.filter((function(t){return t.name.toLowerCase().indexOf(e.search.toLowerCase())>-1}))},onChange:function(){this.filterResults(),this.isOpen=!0},clearInput:function(){this.isOpen=!1,this.search=""},handleClickOutside:function(e){this.$el.contains(e.target)||(this.isOpen=!1)}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}},o=(l(230),l(25)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"autocomplete"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text"},domProps:{value:e.search},on:{input:[function(t){t.target.composing||(e.search=t.target.value)},e.onChange]}}),e._v(" "),l("ul",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"autocomplete-results"},e._l(e.items,(function(t){return l("li",{key:t.objectID,staticClass:"autocomplete-result",on:{click:function(t){e.clearInput(),e.$emit("developer-selected",e.result)}}},[e._v("\n      "+e._s(t.name)+"\n    ")])})),0)])}),[],!1,null,null,null);t.default=component.exports},245:function(e,t,l){},259:function(e,t,l){"use strict";l(245)},267:function(e,t,l){"use strict";l.r(t);var r={props:{project:{},users:{}},data:function(){return{}},created:function(){},methods:{}},o=(l(259),l(25)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticClass:"modal fade",attrs:{id:"editProjectModal",tabindex:"-1","aria-labelledby":"addProjectModal-label","aria-hidden":"true"}},[l("div",{staticClass:"modal-dialog"},[l("div",{staticClass:"modal-content"},[e._m(0),e._v(" "),l("div",{staticClass:"modal-inner-body"},[l("form",{attrs:{id:"id_formfield"}},[l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[e._v("Project Name")]),e._v(" "),l("div",{staticClass:"col-sm-10"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.project.name,expression:"project.name"}],staticClass:"form-control",attrs:{type:"text",id:"projectName",value:"",placeholder:"Enter Project name",autocomplete:"off"},domProps:{value:e.project.name},on:{input:function(t){t.target.composing||e.$set(e.project,"name",t.target.value)}}}),e._v(" "),e._m(1)])]),e._v(" "),l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Client")]),e._v(" "),l("div",{staticClass:"col-sm-10"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.project.client,expression:"project.client"}],staticClass:"form-control",attrs:{type:"text",id:"client",placeholder:"Enter client",autocomplete:"off"},domProps:{value:e.project.client},on:{input:function(t){t.target.composing||e.$set(e.project,"client",t.target.value)}}}),e._v(" "),e._m(2)])]),e._v(" "),l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Owner")]),e._v(" "),l("div",{staticClass:"col-sm-10"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.project.owner,expression:"project.owner"}],staticClass:"form-control",attrs:{type:"text",id:"owner",value:"",placeholder:"Enter Owner's name",autocomplete:"off"},domProps:{value:e.project.owner},on:{input:function(t){t.target.composing||e.$set(e.project,"owner",t.target.value)}}}),e._v(" "),e._m(3)])]),e._v(" "),l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Contact Email")]),e._v(" "),l("div",{staticClass:"col-sm-10"},[l("div",{attrs:{id:"emailPill"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.project.email,expression:"project.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",value:"",placeholder:"Enter Contact email"},domProps:{value:e.project.email},on:{input:function(t){t.target.composing||e.$set(e.project,"email",t.target.value)}}})]),e._v(" "),e._m(4)])]),e._v(" "),l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Lead")]),e._v(" "),l("div",{staticClass:"col-sm-10"},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.project.lead.name,expression:"project.lead.name"}],staticClass:"form-control",attrs:{type:"text",id:"lead",value:"",placeholder:"Enter Lead",autocomplete:"off "},domProps:{value:e.project.lead.name},on:{input:function(t){t.target.composing||e.$set(e.project.lead,"name",t.target.value)}}}),e._v(" "),e._m(5)])]),e._v(" "),l("div",{staticClass:"row"},[l("label",{staticClass:"col-2 col-form-label"},[e._v("Team")]),e._v(" "),l("div",{staticClass:"col-10"},[l("div",{staticClass:"form-control",attrs:{id:"devsTeam"}},[e._l(e.project.devs,(function(t){return l("div",{key:t.objectID},[l("p",[e._v(e._s(t))])])})),e._v(" "),l("SearchAutocomplete",{attrs:{items:e.users},on:{"developer-selected":e.developerSelected}})],2)])])])]),e._v(" "),l("div",{staticClass:"modal-footer"},[e._m(6),e._v(" "),l("button",{staticClass:"btn send-report",attrs:{type:"submit",id:"create-project"},on:{click:e.addProject}},[e._v("\n            CREATE PROJECT\n          ")])])])])])])}),[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"modal-header"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-11"},[l("h4",[e._v("Edit Project")])]),e._v(" "),l("div",{staticClass:"col-1"},[l("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"warningEmptyField"},[l("p",[e._v("This field is required")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"warningEmptyField"},[l("p",[e._v("This field is required")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"warningEmptyField"},[l("p",[e._v("This field is required")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"warningEmptyField",attrs:{id:"warning"}},[l("p",[e._v("This field is required")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"warningEmptyField"},[l("p",[e._v("This field is required")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"succes-message"}},[l("p",[e._v("Project Saved")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{SearchAutocomplete:l(231).default})}}]);