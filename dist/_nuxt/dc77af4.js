(window.webpackJsonp=window.webpackJsonp||[]).push([[27,6,13,17],{229:function(t,e,r){},230:function(t,e,r){"use strict";r(229)},231:function(t,e,r){"use strict";r.r(e);r(1),r(14),r(92);var l={props:{items:{type:Array,required:!1,default:function(){return[]}},result:{type:Array,required:!1,default:function(){return[]}}},data:function(){return{search:"",results:[],isOpen:!1}},methods:{filterResults:function(){var t=this;this.results=this.items.filter((function(e){return e.name.toLowerCase().indexOf(t.search.toLowerCase())>-1}))},onChange:function(){this.filterResults(),this.isOpen=!0},clearInput:function(){this.isOpen=!1,this.search=""},handleClickOutside:function(t){this.$el.contains(t.target)||(this.isOpen=!1)}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)}},n=(r(230),r(25)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"autocomplete"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text"},domProps:{value:t.search},on:{input:[function(e){e.target.composing||(t.search=e.target.value)},t.onChange]}}),t._v(" "),r("ul",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"autocomplete-results"},t._l(t.items,(function(e){return r("li",{key:e.objectID,staticClass:"autocomplete-result",on:{click:function(e){t.clearInput(),t.$emit("developer-selected",t.result)}}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),0)])}),[],!1,null,null,null);e.default=component.exports},244:function(t,e,r){},245:function(t,e,r){},258:function(t,e,r){"use strict";r(244)},259:function(t,e,r){"use strict";r(245)},262:function(t,e,r){},267:function(t,e,r){"use strict";r.r(e);var l={props:{project:{},users:{}},data:function(){return{}},created:function(){},methods:{}},n=(r(259),r(25)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"modal fade",attrs:{id:"editProjectModal",tabindex:"-1","aria-labelledby":"addProjectModal-label","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),r("div",{staticClass:"modal-inner-body"},[r("form",{attrs:{id:"id_formfield"}},[r("div",{staticClass:"row"},[r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Project Name")]),t._v(" "),r("div",{staticClass:"col-sm-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.project.name,expression:"project.name"}],staticClass:"form-control",attrs:{type:"text",id:"projectName",value:"",placeholder:"Enter Project name",autocomplete:"off"},domProps:{value:t.project.name},on:{input:function(e){e.target.composing||t.$set(t.project,"name",e.target.value)}}}),t._v(" "),t._m(1)])]),t._v(" "),r("div",{staticClass:"row"},[r("label",{staticClass:"col-sm-2 col-form-label"},[t._v("Client")]),t._v(" "),r("div",{staticClass:"col-sm-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.project.client,expression:"project.client"}],staticClass:"form-control",attrs:{type:"text",id:"client",placeholder:"Enter client",autocomplete:"off"},domProps:{value:t.project.client},on:{input:function(e){e.target.composing||t.$set(t.project,"client",e.target.value)}}}),t._v(" "),t._m(2)])]),t._v(" "),r("div",{staticClass:"row"},[r("label",{staticClass:"col-sm-2 col-form-label"},[t._v("Owner")]),t._v(" "),r("div",{staticClass:"col-sm-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.project.owner,expression:"project.owner"}],staticClass:"form-control",attrs:{type:"text",id:"owner",value:"",placeholder:"Enter Owner's name",autocomplete:"off"},domProps:{value:t.project.owner},on:{input:function(e){e.target.composing||t.$set(t.project,"owner",e.target.value)}}}),t._v(" "),t._m(3)])]),t._v(" "),r("div",{staticClass:"row"},[r("label",{staticClass:"col-sm-2 col-form-label"},[t._v("Contact Email")]),t._v(" "),r("div",{staticClass:"col-sm-10"},[r("div",{attrs:{id:"emailPill"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.project.email,expression:"project.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",value:"",placeholder:"Enter Contact email"},domProps:{value:t.project.email},on:{input:function(e){e.target.composing||t.$set(t.project,"email",e.target.value)}}})]),t._v(" "),t._m(4)])]),t._v(" "),r("div",{staticClass:"row"},[r("label",{staticClass:"col-sm-2 col-form-label"},[t._v("Lead")]),t._v(" "),r("div",{staticClass:"col-sm-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.project.lead.name,expression:"project.lead.name"}],staticClass:"form-control",attrs:{type:"text",id:"lead",value:"",placeholder:"Enter Lead",autocomplete:"off "},domProps:{value:t.project.lead.name},on:{input:function(e){e.target.composing||t.$set(t.project.lead,"name",e.target.value)}}}),t._v(" "),t._m(5)])]),t._v(" "),r("div",{staticClass:"row"},[r("label",{staticClass:"col-2 col-form-label"},[t._v("Team")]),t._v(" "),r("div",{staticClass:"col-10"},[r("div",{staticClass:"form-control",attrs:{id:"devsTeam"}},[t._l(t.project.devs,(function(e){return r("div",{key:e.objectID},[r("p",[t._v(t._s(e))])])})),t._v(" "),r("SearchAutocomplete",{attrs:{items:t.users},on:{"developer-selected":t.developerSelected}})],2)])])])]),t._v(" "),r("div",{staticClass:"modal-footer"},[t._m(6),t._v(" "),r("button",{staticClass:"btn send-report",attrs:{type:"submit",id:"create-project"},on:{click:t.addProject}},[t._v("\n            CREATE PROJECT\n          ")])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-header"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-11"},[r("h4",[t._v("Edit Project")])]),t._v(" "),r("div",{staticClass:"col-1"},[r("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"warningEmptyField"},[r("p",[t._v("This field is required")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"warningEmptyField"},[r("p",[t._v("This field is required")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"warningEmptyField"},[r("p",[t._v("This field is required")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"warningEmptyField",attrs:{id:"warning"}},[r("p",[t._v("This field is required")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"warningEmptyField"},[r("p",[t._v("This field is required")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"succes-message"}},[r("p",[t._v("Project Saved")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SearchAutocomplete:r(231).default})},274:function(t,e,r){"use strict";r.r(e);r(258);var l=r(25),component=Object(l.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"col d-md-flex justify-content-md-end"},[r("button",{staticClass:"btn btn-primary add-user-button",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#editProjectModal"}},[t._v("\n    EDIT PROJECT\n    ")])])])}],!1,null,"55ca8162",null);e.default=component.exports},276:function(t,e,r){"use strict";r(262)},286:function(t,e,r){"use strict";r.r(e);var l=r(8),n=(r(33),{data:function(){return{project:{},addMail:!1,addMember:!1,contactMails:[],teamMember:""}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,n,c,o,d,m,v,_,f,C;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$dataProjects,l=t.$dataUsers,n=t.error,c=t.route,o=c.params.id,e.next=4,r.getProject(o);case 4:if((d=e.sent).ok){e.next=7;break}return e.abrupt("return",n({statusCode:d.status,message:d.statusText}));case 7:return m=d.json,e.next=10,l.getUsersByProjectID(m.objectID);case 10:if((v=e.sent).ok){e.next=13;break}return e.abrupt("return",n({statusCode:v.status,message:v.statusText}));case 13:return e.next=15,l.getUser(m.lead_id);case 15:if((_=e.sent).ok){e.next=18;break}return e.abrupt("return",n({statusCode:_.status,message:_.statusText}));case 18:return e.next=20,l.getUsers();case 20:if((f=e.sent).ok){e.next=23;break}return e.abrupt("return",n({statusCode:f.status,message:f.statusText}));case 23:return C=f.json.hits,m.devs=v.json.hits,m.lead=_.json,e.abrupt("return",{project:m,users:C});case 27:case"end":return e.stop()}}),e)})))()},created:function(){},methods:{addContactMail:function(){console.log("CONTACTO DATA: ",this.contact),this.$dataProjects.addContactToProject(this.project.objectID,this.contact)}}}),c=(r(276),r(25)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NavbarLead"),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6 title-dashboard"},[r("h2",[r("span",{staticClass:"gray-title"},[t._v("Project/")]),t._v(t._s(t.project.name))])]),t._v(" "),r("div",{staticClass:"col-5 d-md-flex justify-content-md-end"},[r("div",{staticClass:"align-self-center"},[r("ButtonEditProject"),t._v(" "),r("ModalEditProject",{attrs:{project:t.project,users:t.users}})],1)])]),t._v(" "),r("div",{staticClass:"projects"},[r("div",{staticClass:"row"},[r("div",{staticClass:"container"},[r("ul",[r("li",{staticClass:"project-li"},[r("div",{staticClass:"row"},[t._m(0),t._v(" "),r("div",{staticClass:"col-sm-2 col-lg-2 project-name"},[t._v("\n                "+t._s(t.project.name)+"\n              ")])])]),t._v(" "),r("li",{staticClass:"project-li"},[r("div",{staticClass:"row"},[t._m(1),t._v(" "),r("div",{staticClass:"col-sm-2 col-lg-2 project-client"},[t._v("\n                "+t._s(t.project.client)+"\n              ")])])]),t._v(" "),r("li",{staticClass:"project-li"},[r("div",{staticClass:"row"},[t._m(2),t._v(" "),r("div",{staticClass:"col-sm-2 col-lg-2 project-owner"},[t._v("\n                "+t._s(t.project.owner)+"\n              ")])])]),t._v(" "),r("li",{staticClass:"project-li"},[r("div",{staticClass:"row"},[t._m(3),t._v(" "),r("div",{staticClass:"col-4"},[r("form",{attrs:{id:"add-mail"}},[r("ul",{staticClass:"add-contact-team-member contact-email"},[r("button",{staticClass:"btn add-email-button",attrs:{type:"button"},on:{click:function(e){t.addMail=!t.addMail}}},[t._v("\n                      +ADD CONTACT EMAIL\n                    ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.contact,expression:"contact"},{name:"show",rawName:"v-show",value:t.addMail,expression:"addMail"}],attrs:{type:"email"},domProps:{value:t.contact},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addContactMail.apply(null,arguments)},input:function(e){e.target.composing||(t.contact=e.target.value)}}}),t._v(" "),t._l(t.project.email,(function(e){return r("li",{key:e,attrs:{email:e}},[t._v("\n                      "+t._s(e)+"\n                    ")])}))],2)])])])]),t._v(" "),r("li",{staticClass:"project-li"},[r("div",{staticClass:"row"},[t._m(4),t._v(" "),r("div",{staticClass:"col-sm-2 col-lg-2 project-team-lead"},[t._v("\n                "+t._s(t.project.lead.name)+"\n              ")])])]),t._v(" "),r("li",{staticClass:"project-li"},[r("div",{staticClass:"row"},[t._m(5),t._v(" "),r("div",{staticClass:"col-9"},[r("form",{attrs:{id:"add-TeamMember"}},[r("button",{staticClass:"btn add-email-button",attrs:{type:"button"},on:{click:function(e){t.addMember=!t.addMember}}},[t._v("\n                    +ADD TEAM MEMBER\n                  ")]),t._v(" "),r("SearchAutocomplete",{directives:[{name:"show",rawName:"v-show",value:t.addMember,expression:"addMember"}],attrs:{items:t.project.devs}})],1),t._v(" "),r("table",{staticClass:"add-contact-team-member team-member"},[t._m(6),t._v(" "),t._l(t.project.devs,(function(e){return r("tr",{key:e.objectID},[r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[t._v(t._s(e.email))]),t._v(" "),r("td",[t._v(t._s(e.rol))])])}))],2)])])])])])])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-3 col-lg-3"},[r("h5",[t._v("Project")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-3 col-lg-3"},[r("h5",[t._v("Client")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-3 col-lg-3"},[r("h5",[t._v("Owner")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-3 col-lg-3"},[r("h5",[t._v("email")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-3 col-lg-3"},[r("h5",[t._v("Team Lead")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-3 col-lg-3"},[r("h5",[t._v("Team")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"project-team-headers"},[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Email")]),t._v(" "),r("th",[t._v("Role")])])}],!1,null,"21c77b76",null);e.default=component.exports;installComponents(component,{NavbarLead:r(163).default,ButtonEditProject:r(274).default,ModalEditProject:r(267).default,SearchAutocomplete:r(231).default})}}]);