(window.webpackJsonp=window.webpackJsonp||[]).push([[29,5,9,22],{233:function(t,e,r){},241:function(t,e,r){},242:function(t,e,r){},243:function(t,e,r){"use strict";r(233)},249:function(t,e,r){"use strict";r.r(e);var n={props:{user:{}}},c=(r(243),r(25)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("li",{staticClass:"user-li"},[r("div",{staticClass:"row user"},[r("input",{attrs:{type:"hidden",id:"userId",name:"id",value:"${userId}"}}),t._v(" "),r("div",{staticClass:"col-sm-2"},[r("p",[t._v(t._s(t.user.name))])]),t._v(" "),r("div",{staticClass:"col-sm-3"},[r("p",[t._v(t._s(t.user.email))])]),t._v(" "),r("div",{staticClass:"col-sm-1"},[r("p",[t._v(t._s(t.user.rol))])]),t._v(" "),r("div",{staticClass:"col-sm-2"},[t.user.lead?r("span",{staticClass:"badge rounded-pill bg team-lead-badge"},[t._v("TEAM LEAD")]):r("span",{staticClass:"badge rounded-pill bg team-lead-badge not-lead"},[t._v("TEAM LEAD")])]),t._v(" "),r("div",{staticClass:"col-sm-3"},t._l(t.user.projectsList,(function(e,n){return r("p",{key:e.objectID,staticClass:"d-inline"},[t._v("\n          "+t._s(e.name)+"\n          "),n!=t.user.projects.length-1?r("span",[t._v(", ")]):t._e()])})),0),t._v(" "),t._m(0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-1"},[r("button",{staticClass:"btn btn-outline-light view-edit-button",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#userModal"}},[t._v("\n          EDIT USER\n        ")])])}],!1,null,"42e9cf41",null);e.default=component.exports},256:function(t,e,r){"use strict";r(241)},257:function(t,e,r){"use strict";r(242)},266:function(t,e,r){"use strict";r.r(e);var n={props:{users:{}}},c=(r(257),r(25)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"users"},[r("div",{staticClass:"row"},[r("div",{staticClass:"container align-middle"},[r("ul",{attrs:{id:"users-list"}},[t._m(0),t._v(" "),t._l(t.users,(function(t){return r("LiUsers",{key:t.objectID,attrs:{user:t}})}))],2)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"user-li"},[r("div",{staticClass:"row user-list-header"},[r("div",{staticClass:"col-sm-2"},[r("h5",[t._v("Name")])]),t._v(" "),r("div",{staticClass:"col-sm-3"},[r("h5",[t._v("Email")])]),t._v(" "),r("div",{staticClass:"col-sm-3"},[r("h5",[t._v("Rol")])]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("h5",[t._v("Projects")])])])])}],!1,null,"2c27f9f1",null);e.default=component.exports;installComponents(component,{LiUsers:r(249).default})},273:function(t,e,r){"use strict";r.r(e);r(256);var n=r(25),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"col d-md-flex justify-content-md-end"},[r("button",{staticClass:"btn btn-primary add-user-button",attrs:{type:"button"},on:{click:function(e){return t.$emit("newUser")}}},[t._v("\n    ADD USER\n    ")])])])}),[],!1,null,"efc920c2",null);e.default=component.exports},285:function(t,e,r){"use strict";r.r(e);var n=r(8),c=(r(33),r(1),r(71),r(72),{layout:"lead",data:function(){return{userObject:{name:"Antonio Faria",id:9,projects:[8,9,10],email:"marley@gmail.com",rol:"developer"}}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,o,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$dataUsers,n=t.$dataProjects,c=t.error,e.next=3,r.getUsers();case 3:if((l=e.sent).ok){e.next=6;break}return e.abrupt("return",c({statusCode:l.status,message:l.statusText}));case 6:return e.next=8,n.getProjects();case 8:if((o=e.sent).ok){e.next=11;break}return e.abrupt("return",c({statusCode:o.status,message:o.statusText}));case 11:return d=[],v=o.json.hits,l.json.hits.forEach((function(t){t.projectsList=v.filter((function(e){return t.projects.includes(parseInt(e.objectID))})),d.push(t)})),e.abrupt("return",{users:d});case 15:case"end":return e.stop()}}),e)})))()},created:function(){console.log(this.userObject)},methods:{newUser:function(){console.log(this.userObject),this.$dataUsers.addUser(this.userObject)}}}),l=r(25),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),r("div",{staticClass:"col-6"},[r("ButtonAddUser",{on:{newUser:t.newUser}})],1)]),t._v(" "),r("UlUsers",{attrs:{users:t.users}}),t._v(" "),r("nuxt")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-5 title-dashboard"},[r("h1",[t._v("Users")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonAddUser:r(273).default,UlUsers:r(266).default})}}]);