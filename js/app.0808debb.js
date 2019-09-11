(function(e){function t(t){for(var a,i,o=t[0],c=t[1],u=t[2],l=0,h=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&h.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(h.length)h.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,o=1;o<r.length;o++){var c=r[o];0!==s[c]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},s={app:0},n=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/charater-manager-vuejs/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("64a9"),s=r.n(a);s.a},1941:function(e,t,r){"use strict";var a=r("a9bf"),s=r.n(a);s.a},2906:function(e,t,r){},"2b03":function(e,t,r){"use strict";var a=r("2906"),s=r.n(a);s.a},"2fe7":function(e,t,r){"use strict";var a=r("5cfb"),s=r.n(a);s.a},"31df":function(e,t,r){"use strict";var a=r("8322"),s=r.n(a);s.a},"3dd4":function(e,t,r){"use strict";var a=r("f758"),s=r.n(a);s.a},"55d5":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var a={};r.r(a),r.d(a,"state",function(){return Yt}),r.d(a,"getters",function(){return qt}),r.d(a,"mutations",function(){return Gt}),r.d(a,"actions",function(){return Jt});var s={};r.r(s),r.d(s,"state",function(){return Vt}),r.d(s,"getters",function(){return zt}),r.d(s,"mutations",function(){return Wt}),r.d(s,"actions",function(){return Kt});var n={};r.r(n),r.d(n,"state",function(){return Qt}),r.d(n,"getters",function(){return Xt}),r.d(n,"mutations",function(){return Zt}),r.d(n,"actions",function(){return er});var i={};r.r(i),r.d(i,"state",function(){return tr}),r.d(i,"getters",function(){return rr}),r.d(i,"mutations",function(){return ar}),r.d(i,"actions",function(){return sr});var o={};r.r(o),r.d(o,"namespaced",function(){return or}),r.d(o,"state",function(){return cr}),r.d(o,"mutations",function(){return dr}),r.d(o,"actions",function(){return lr});r("cadf"),r("551c"),r("f751"),r("097d");var c=r("2b0e"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("NavBar"),r("NotificationContainer"),r("router-view")],1)},d=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"nav",attrs:{id:"nav"}},[r("router-link",{staticClass:"brand",attrs:{to:{name:"home"}}},[e._v("Home")]),r("nav",[r("div",[r("router-link",{attrs:{to:{name:"characters"}}},[e._v("Characters")]),r("span",[e._v("|")]),r("router-link",{attrs:{to:{name:"users"}}},[e._v("Users")])],1),"admims"===e.session.role?r("router-link",{attrs:{to:{name:"dashboard"}}},[e._v("Admin Dashboard")]):e._e()],1),e.isLoggedIn?r("div",{staticClass:"session-box"},[r("div",{staticClass:"session-links"},[r("LoggedUser",{attrs:{id:this.session.id}}),r("router-link",{attrs:{to:{name:"createcharacter"}}},[e._v("Character creation")])],1),r("span",{staticClass:"button badge -fill-gradient",on:{click:e.logOut}},[e._v("Log out")])]):r("router-link",{attrs:{to:{name:"session"}}},[e._v("Session")])],1)},h=[],p=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),f=r("2f62"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v("\n  Welcome\n  "),e.user?r("router-link",{staticClass:"event-link",attrs:{to:{name:"displayuser",params:{id:e.user.id}}}},[e._v(e._s(e.user.name))]):e._e()],1)},v=[],g={props:{id:{type:String}},created:function(){this.$store.dispatch("fetchLoggedUser",this.id)},computed:Object(f["c"])({user:function(e){return e.users.loggedUser}})},b=g,_=r("2877"),y=Object(_["a"])(b,m,v,!1,null,"0ea7a960",null),C=y.exports;function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(r,!0).forEach(function(t){Object(p["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var E={computed:O({isLoggedIn:function(){return this.$store.getters.isLoggedIn}},Object(f["c"])({session:function(e){return e.users.session}})),components:{LoggedUser:C},methods:{logOut:function(){var e=this;this.$store.dispatch("logUserOut").then(function(){e.$router.push("/session")})}}},T=E,w=(r("31df"),Object(_["a"])(T,l,h,!1,null,"1f3891e7",null)),U=w.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"notification-container"},e._l(e.notifications,function(e){return r("NotificationBar",{key:e.id,attrs:{notification:e}})}),1)},D=[],$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"notification-bar",class:e.notificationTypeClass},[r("p",[e._v(e._s(e.notification.message))])])},A=[],P={props:{notification:{type:Object,required:!0}},data:function(){return{timeout:null}},computed:{notificationTypeClass:function(){return"-text-".concat(this.notification.type)}},methods:Object(f["b"])("notification",["remove"]),mounted:function(){var e=this;this.timeout=setTimeout(function(){return e.remove(e.notification)},5e3)},beforeDestroy:function(){clearTimeout(this.timeout)}},R=P,k=(r("2b03"),Object(_["a"])(R,$,A,!1,null,"0f461546",null)),x=k.exports,I={components:{NotificationBar:x},computed:Object(f["c"])("notification",["notifications"])},N=I,L=(r("98be"),Object(_["a"])(N,j,D,!1,null,"7be13e29",null)),H=L.exports,F={components:{NavBar:U,NotificationContainer:H}},B=F,M=(r("034f"),Object(_["a"])(B,u,d,!1,null,null,null)),Y=M.exports,q=r("8c4f"),G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h3",[e._v("Current raid composition.")]),"admims"===e.session.role?r("span",{staticClass:"button badge -fill-gradient",on:{click:e.saveSnapshot}},[e._v("Save current Roster")]):e._e(),e._l(e.raid,function(e){return r("CharacterCard",{key:e.id,attrs:{character:e}})})],2)},J=[],V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.character?r("router-link",{staticClass:"event-link",attrs:{to:{name:"displaycharacter",params:{id:e.character.id}}}},[r("div",{staticClass:"event-card -shadow"},[r("h4",{staticClass:"title"},[e._v(e._s(e.character.name))]),r("p",[e._v(e._s(e.character.description))])])]):e._e()],1)},z=[],W={props:{character:{type:Object}}},K=W,Q=(r("2fe7"),Object(_["a"])(K,V,z,!1,null,"42b1d26d",null)),X=Q.exports,Z={name:"home",components:{CharacterCard:X},methods:{saveSnapshot:function(){this.$store.dispatch("saveSnapshot")}},created:function(){this.$store.dispatch("fetchRaid")},computed:Object(f["c"])({raid:function(e){return e.raids.raid},session:function(e){return e.users.session}})},ee=Z,te=Object(_["a"])(ee,G,J,!1,null,null,null),re=te.exports,ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h3",[e._v("List of the guild's characters.")]),e._l(e.characters,function(e){return r("CharacterCard",{key:e.id,attrs:{character:e}})})],2)},se=[],ne={components:{CharacterCard:X},created:function(){this.$store.dispatch("fetchCharacters")},computed:Object(f["c"])({characters:function(e){return e.characters.characters}})},ie=ne,oe=Object(_["a"])(ie,ae,se,!1,null,null,null),ce=oe.exports,ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h3",[e._v("List of the registered guild members.")]),e._l(e.users,function(e){return r("UserCard",{key:e.id,attrs:{user:e}})})],2)},de=[],le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.user?r("router-link",{staticClass:"event-link",attrs:{to:{name:"displayuser",params:{id:e.user.id}}}},[r("div",{staticClass:"event-card -shadow"},[r("h4",{staticClass:"title"},[e._v(e._s(e.user.name))]),e.user.is_available?r("p",[e._v("This user is available")]):r("p",[e._v("This user is currently unavailable")])])]):e._e()},he=[],pe={props:{user:{type:Object}}},fe=pe,me=(r("3dd4"),Object(_["a"])(fe,le,he,!1,null,"d5725902",null)),ve=me.exports,ge={components:{UserCard:ve},created:function(){this.$store.dispatch("fetchUsers")},computed:Object(f["c"])({users:function(e){return e.users.users}})},be=ge,_e=Object(_["a"])(be,ue,de,!1,null,null,null),ye=_e.exports,Ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.createSession(t)}}},[r("h3",[e._v("Login")]),r("div",{staticClass:"field"},[r("label",[e._v("email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{type:"text",placeholder:"Add an email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),r("div",{staticClass:"field"},[r("label",[e._v("password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"Add a password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),r("input",{staticClass:"button badge -fill-gradient",attrs:{type:"submit",value:"Submit"}})]),r("UserForm")],1)},Se=[],Oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.submitUser(t)}}},[r("h3",[e._v("Fill in the following form")]),r("div",{staticClass:"field"},[r("label",[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{type:"text",placeholder:"Add an user name"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),r("div",{staticClass:"field"},[r("label",[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{type:"email",placeholder:"Add an email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.userToEdit,expression:"!userToEdit"}],staticClass:"field"},[r("label",[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"Add a password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e.userToEdit?r("div",{staticClass:"field"},[e.user.image.name?r("div",[r("img",{attrs:{src:e.user.image.name}}),r("input",{staticClass:"button badge -fill-gradient",attrs:{type:"button",value:"Remove image"},on:{click:e.removeImage}})]):r("div",[r("label",[e._v("\n          Select a picture\n          "),r("input",{ref:"file",attrs:{type:"file",accept:"image/*",id:"file"},on:{change:function(t){return e.handleFileUpload()}}})])])]):e._e(),r("div",{staticClass:"field"},[r("label",[e._v("Is_available")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.is_available,expression:"user.is_available"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.user.is_available)?e._i(e.user.is_available,null)>-1:e.user.is_available},on:{change:function(t){var r=e.user.is_available,a=t.target,s=!!a.checked;if(Array.isArray(r)){var n=null,i=e._i(r,n);a.checked?i<0&&e.$set(e.user,"is_available",r.concat([n])):i>-1&&e.$set(e.user,"is_available",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.user,"is_available",s)}}})]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.userToEdit,expression:"userToEdit"}],staticClass:"field"},[r("label",[e._v("Main_char_id")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.user.main_char_id,expression:"user.main_char_id"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.user,"main_char_id",t.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}},[e._v("No character selected")]),e._l(e.user.characters,function(t){return r("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)]),r("input",{staticClass:"button badge -fill-gradient",attrs:{type:"submit",value:"Submit"}})])])},Ee=[],Te={props:{userToEdit:{type:Object,default:null}},data:function(){return{user:this.userToEdit?this.userToEdit:this.createFreshUser(),isImgChanged:!1,file:"",previousImgId:""}},methods:{handleFileUpload:function(){this.isImgChanged=!0;var e=this.$refs.file.files[0];this.createPreview(e),this.file=e},createPreview:function(e){var t=new FileReader,r=this;t.onload=function(e){r.user.image.name=e.target.result},t.readAsDataURL(e)},removeImage:function(){this.previousImgId=this.user.image.id,this.user.image={name:"",id:this.user.image.id}},createFreshUser:function(){return{name:"",email:"",password:"",is_available:!1,main_char_id:""}},submitUser:function(){return this.userToEdit?this.updateUser():this.registerUser()},registerUser:function(){var e=this;this.$store.dispatch("registerUser",this.user).then(function(){e.$router.push({name:"home"}),e.user=e.createFreshUser()})},updateUser:function(){var e=this;this.$store.dispatch("updateUser",this.user).then(function(){e.$router.push({name:"users"}),e.user=e.createFreshUser()}).catch(function(e){console.log(e)}),this.isImgChanged&&this.submitFile()},submitFile:function(){var e=this.previousImgId,t=new FormData;t.append("file",this.file),this.$store.dispatch("updateImage",{image:t,id:e})}}},we=Te,Ue=(r("eecf"),Object(_["a"])(we,Oe,Ee,!1,null,"128dc670",null)),je=Ue.exports,De={components:{UserForm:je},data:function(){return{user:{}}},methods:{createSession:function(){var e=this;this.$store.dispatch("logUserIn",this.user).then(function(){e.$router.push({name:"home"})})}}},$e=De,Ae=(r("edf1"),Object(_["a"])($e,Ce,Se,!1,null,"39db1b3a",null)),Pe=Ae.exports,Re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h3",[e._v(e._s(e.character.name))]),r("p",[e._v(e._s(e.character.description))]),r("p",[e._v("\n    Build :\n    "),r("a",{attrs:{href:e.character.build_url}},[e._v("Link")])]),e.hasEditionRights?r("router-link",{attrs:{to:{name:"editcharacter",params:{id:e.character.id}}}},[e._v("Character edition")]):e._e(),e.hasEditionRights?r("span",{staticClass:"button badge -fill-gradient",on:{click:e.deleteCharacter}},[e._v("Delete")]):e._e(),r("h4",[e._v("Owner")]),r("UserCard",{attrs:{user:e.character.user}})],1)},ke=[];function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function Ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(r,!0).forEach(function(t){Object(p["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Ne={props:{id:{type:String}},components:{UserCard:ve},created:function(){this.$store.dispatch("fetchCharacter",this.id)},computed:Ie({isLoggedIn:function(){return this.$store.getters.isLoggedIn},hasEditionRights:function(){return!(!this.isLoggedIn||this.session.id!==this.character.user.id&&"admims"!==this.session.role)}},Object(f["c"])({character:function(e){return e.characters.character},session:function(e){return e.users.session}})),methods:{deleteCharacter:function(){this.$store.dispatch("deleteCharacter",this.character).then(this.$router.push({name:"characters"}))}}},Le=Ne,He=Object(_["a"])(Le,Re,ke,!1,null,null,null),Fe=He.exports,Be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h3",[e._v(e._s(e.user.name))]),e.user.image?r("img",{attrs:{src:e.user.image.name,alt:e.user.name}}):e._e(),e.user.is_available?r("p",[e._v("This user is available")]):r("p",[e._v("This user is currently unavailable")]),e.hasEditionRights?r("router-link",{attrs:{to:{name:"edituser",params:{id:e.user.id}}}},[e._v("User edition")]):e._e(),r("h4",[e._v(e._s(e.user.name)+"'s characters")]),e._l(e.user.characters,function(e){return r("CharacterCard",{key:e.id,attrs:{character:e}})})],2)},Me=[];function Ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function qe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ye(r,!0).forEach(function(t){Object(p["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ye(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Ge={props:{id:{type:String}},components:{CharacterCard:X},created:function(){this.$store.dispatch("fetchUser",this.id)},computed:qe({isLoggedIn:function(){return this.$store.getters.isLoggedIn},hasEditionRights:function(){return!(!this.isLoggedIn||this.session.id!==this.user.id&&"admims"!==this.session.role)}},Object(f["c"])({user:function(e){return e.users.user},session:function(e){return e.users.session}}))},Je=Ge,Ve=Object(_["a"])(Je,Be,Me,!1,null,null,null),ze=Ve.exports,We=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h3",[e._v("This creates a new character through the CharacterForm component")]),r("CharacterForm")],1)},Ke=[],Qe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.submitCharacter(t)}}},[r("h3",[e._v("Fill in the following form")]),r("div",{staticClass:"field"},[r("label",[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.character.name,expression:"character.name"}],attrs:{type:"text",placeholder:"Add your character name"},domProps:{value:e.character.name},on:{input:function(t){t.target.composing||e.$set(e.character,"name",t.target.value)}}})]),r("div",{staticClass:"field"},[r("label",[e._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.character.description,expression:"character.description"}],attrs:{placeholder:"Add a description to your character"},domProps:{value:e.character.description},on:{input:function(t){t.target.composing||e.$set(e.character,"description",t.target.value)}}})]),r("div",{staticClass:"field"},[r("label",[e._v("Build")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.character.build_url,expression:"character.build_url"}],attrs:{type:"text",placeholder:"Add a link to an external template builder"},domProps:{value:e.character.build_url},on:{input:function(t){t.target.composing||e.$set(e.character,"build_url",t.target.value)}}})]),r("input",{staticClass:"button badge -fill-gradient",attrs:{type:"submit",value:"Submit"}})])])},Xe=[],Ze={props:{characterToEdit:{type:Object,default:null}},data:function(){return{character:this.characterToEdit?this.characterToEdit:this.createFreshCharacter()}},methods:{createFreshCharacter:function(){return{name:"",description:"",build_url:""}},submitCharacter:function(){return this.characterToEdit?this.updateCharacter():this.createCharacter()},createCharacter:function(){var e=this;this.$store.dispatch("createCharacter",this.character).then(function(){e.$router.push({name:"characters"}),e.character=e.createFreshCharacter()})},updateCharacter:function(){var e=this;this.$store.dispatch("updateCharacter",this.character).then(function(){e.$router.push({name:"displaycharacter",params:{id:e.character.id}}),e.character=e.createFreshCharacter()}).catch(function(e){console.log(e)})}}},et=Ze,tt=(r("1941"),Object(_["a"])(et,Qe,Xe,!1,null,"346169e2",null)),rt=tt.exports,at={components:{CharacterForm:rt}},st=at,nt=Object(_["a"])(st,We,Ke,!1,null,null,null),it=nt.exports,ot=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h3",[e._v("You are editing "+e._s(e.character.name))]),r("CharacterForm",{attrs:{characterToEdit:e.character}})],1)},ct=[],ut={components:{CharacterForm:rt},props:{id:{type:String,default:null}},created:function(){this.$store.dispatch("fetchCharacter",this.id)},computed:Object(f["c"])({character:function(e){return e.characters.character}})},dt=ut,lt=Object(_["a"])(dt,ot,ct,!1,null,null,null),ht=lt.exports,pt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h3",[e._v("You are editing "+e._s(e.user.name))]),r("UserForm",{attrs:{userToEdit:e.user}})],1)},ft=[],mt={components:{UserForm:je},props:{id:{type:String,default:null}},created:function(){this.$store.dispatch("fetchUser",this.id)},computed:Object(f["c"])({user:function(e){return e.users.user}}),beforeRouteEnter:function(e,t,r){e.matched.some(function(e){return e.meta.restricted})&&r(function(e){e.$options.propsData.id!==e.$store._modules.root.state.users.session.id&&"admims"!==e.$store._modules.root.state.users.session.role&&e.$router.push({name:"home"})}),r()}},vt=mt,gt=Object(_["a"])(vt,pt,ft,!1,null,null,null),bt=gt.exports,_t=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h4",[e._v("Raid "+e._s(e.snapshot.date))]),r("ul",e._l(e.snapshot.composition,function(t,a){return r("li",{key:a,staticClass:"flex-box"},[t?r("router-link",{staticClass:"event-link",attrs:{to:{name:"displaycharacter",params:{id:t.id}}}},[r("h5",[e._v(e._s(t.name))])]):e._e(),r("h6",[e._v("Class : (not implemented yet)")]),r("h6",[e._v("Owner: "+e._s(t.owner))]),r("span")],1)}),0)])},yt=[],Ct={props:{id:{type:String}},created:function(){this.$store.dispatch("fetchSnapshot",this.id)},computed:Object(f["c"])({snapshot:function(e){return e.raids.snapshot}})},St=Ct,Ot=(r("a7ed"),Object(_["a"])(St,_t,yt,!1,null,"100371e0",null)),Et=Ot.exports,Tt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v("\n  Admin Dashboard\n  "),r("DashboardList",{attrs:{users:e.users,characters:e.characters,snapshots:e.snapshots}})],1)},wt=[],Ut=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[e._l(e.tabs,function(t,a){return r("span",{key:a,staticClass:"tab",class:{activeTab:e.selectedTab===t},on:{click:function(r){e.selectedTab=t}}},[e._v(e._s(t))])}),r("div",{directives:[{name:"show",rawName:"v-show",value:"Users"===e.selectedTab,expression:"selectedTab === 'Users'"}]},[r("ul",e._l(e.users,function(t,a){return r("li",{key:a,staticClass:"d-flex"},[r("h4",[e._v(e._s(t.name))]),r("router-link",{staticClass:"button badge -fill-gradient",attrs:{to:{name:"displayuser",params:{id:t.id}}}},[e._v("Details")]),r("span",{staticClass:"button badge -fill-gradient",on:{click:function(r){return e.deleteUser(t)}}},[e._v("Delete")])],1)}),0)]),r("div",{directives:[{name:"show",rawName:"v-show",value:"Characters"===e.selectedTab,expression:"selectedTab === 'Characters'"}]},[r("ul",e._l(e.characters,function(t,a){return r("li",{key:a,staticClass:"d-flex"},[r("h4",[e._v(e._s(t.name))]),r("router-link",{staticClass:"button badge -fill-gradient",attrs:{to:{name:"displaycharacter",params:{id:t.id}}}},[e._v("Details")]),r("span",{staticClass:"button badge -fill-gradient",on:{click:function(r){return e.deleteCharacter(t)}}},[e._v("Delete")])],1)}),0)]),r("div",{directives:[{name:"show",rawName:"v-show",value:"Snapshots"===e.selectedTab,expression:"selectedTab === 'Snapshots'"}]},[r("ul",e._l(e.snapshots,function(t,a){return r("li",{key:a,staticClass:"d-flex"},[r("h4",[e._v(e._s(t.date))]),r("router-link",{staticClass:"button badge -fill-gradient",attrs:{to:{name:"displaysnapshot",params:{id:t.id}}}},[e._v("Details")]),r("span",{staticClass:"button badge -fill-gradient",on:{click:function(r){return e.deleteSnapshot(t)}}},[e._v("Delete")])],1)}),0)])],2)])},jt=[],Dt={props:{users:{type:Array},characters:{type:Array},snapshots:{type:Array}},data:function(){return{selectedTab:"Users",tabs:["Users","Characters","Snapshots"]}},methods:{deleteUser:function(e){this.$store.dispatch("deleteUser",e).then(this.$store.dispatch("fetchDashboardUsers"))},deleteCharacter:function(e){this.$store.dispatch("deleteCharacter",e).then(this.$store.dispatch("fetchDashboardCharacters"))},deleteSnapshot:function(e){this.$store.dispatch("deleteSnapshot",e).then(this.$store.dispatch("fetchDashboardSnapshots"))}}},$t=Dt,At=(r("70d8"),Object(_["a"])($t,Ut,jt,!1,null,"a8ab5d6a",null)),Pt=At.exports,Rt={components:{DashboardList:Pt},created:function(){this.$store.dispatch("fetchDashboardUsers"),this.$store.dispatch("fetchDashboardCharacters"),this.$store.dispatch("fetchDashboardSnapshots")},computed:Object(f["c"])({users:function(e){return e.dashboard.users},characters:function(e){return e.dashboard.characters},snapshots:function(e){return e.dashboard.snapshots}})},kt=Rt,xt=Object(_["a"])(kt,Tt,wt,!1,null,"08f0833a",null),It=xt.exports;c["a"].use(q["a"]);var Nt=new q["a"]({mode:"history",base:"/charater-manager-vuejs/",routes:[{path:"/",name:"home",component:re},{path:"/characters",name:"characters",component:ce},{path:"/users",name:"users",component:ye},{path:"/session",name:"session",component:Pe},{path:"/character/:id",name:"displaycharacter",component:Fe,props:!0},{path:"/user/:id",name:"displayuser",component:ze,props:!0},{path:"/snapshot/:id",name:"displaysnapshot",component:Et,props:!0},{path:"/characters/create",name:"createcharacter",component:it,meta:{requiresAuth:!0}},{path:"/character/:id/edit",name:"editcharacter",component:ht,props:!0,meta:{requiresAuth:!0,restricted:!0},beforeEnter:function(e,t,r){console.log("router",this),r()}},{path:"/user/:id/edit",name:"edituser",component:bt,props:!0,meta:{requiresAuth:!0,restricted:!0}},{path:"/dashboard",name:"dashboard",component:It,meta:{requiresAuth:!0,restricted:!0},beforeEnter:function(e,t,r){var a=JSON.parse(localStorage.getItem("session"));"admims"!==a.role&&r("/"),r()}}]});Nt.beforeEach(function(e,t,r){var a=localStorage.getItem("session");!e.matched.some(function(e){return e.meta.requiresAuth})||a||e.matched.some(function(e){return e.meta.restricted})||r("/"),r()});var Lt=Nt,Ht=(r("7514"),r("bc3a")),Ft=r.n(Ht),Bt=Ft.a.create({baseURL:"http://localhost:8000/api/v1",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});Bt.interceptors.response.use(function(e){return e},function(e){return 401===e.response.status&&(console.log("expired or invalid token"),hr.dispatch("logUserOut"),Lt.push("/session")),Promise.reject(e)});var Mt={getRaid:function(){return Bt.get("/raid")},deleteSnapshot:function(e){return Bt.delete("/raidsnapshot/"+e)},getUsers:function(){return Bt.get("/user")},getUser:function(e){return Bt.get("/user/"+e)},updateUser:function(e,t){return Bt.put("/user/"+e,t)},deleteUser:function(e){return Bt.delete("/user/"+e)},registerUser:function(e){return Bt.post("/register",e)},logUserIn:function(e){return Bt.post("/login",e)},getCharacters:function(){return Bt.get("/character")},getCharacter:function(e){return Bt.get("/character/"+e)},createCharacter:function(e){return Bt.post("/character",e)},updateCharacter:function(e,t){return Bt.put("/character/"+e,t)},deleteCharacter:function(e){return Bt.delete("/character/"+e)},updateImage:function(e,t){return e.append("_method","PUT"),Bt.post("/image/"+t,e,{headers:{"Content-Type":"multipart/form-data"}})},getDashboardUsers:function(){return Bt.get("/dashboard-users")},getDashboardCharacters:function(){return Bt.get("/dashboard-characters")},getDashboardSnapshots:function(){return Bt.get("/dashboard-snapshots")},saveSnapshot:function(e){var t=JSON.stringify(e);return Bt.post("/raidsnapshot",t)}},Yt={users:[],user:{},loggedUser:{},session:{token:"",role:"",id:""}},qt={getUserById:function(e){return function(t){return e.users.find(function(e){return e.id===t})}},isLoggedIn:function(e){return!!e.session.token}},Gt={SET_USERS:function(e,t){e.users=t},SET_USER:function(e,t){e.user=t},SET_LOGGED_USER:function(e,t){e.loggedUser=t},UPDATE_USER:function(e,t){e.user=t},ADD_USER:function(e,t){e.users.push(t)},REMOVE_USER:function(e,t){e.users.filter(function(e){return e.id!==t})},SET_SESSION:function(e,t){localStorage.setItem("session",JSON.stringify(t)),Bt.defaults.headers.common.Authorization=t.token,e.session=t},DESTROY_SESSION:function(e){localStorage.removeItem("session"),Bt.defaults.headers.common.Authorization=null,e.session={token:"",role:"",id:""}}},Jt={fetchUsers:function(e){var t=e.commit,r=e.dispatch;Mt.getUsers().then(function(e){return t("SET_USERS",e.data.data)}).catch(function(e){var t={type:"error",message:"There was a problem fetching the users: "+e.message};r("notification/add",t,{root:!0})})},fetchUser:function(e,t){var r=e.commit,a=e.getters,s=e.dispatch,n=a.getUserById(t);n?r("SET_USER",n):Mt.getUser(t).then(function(e){return r("SET_USER",e.data.data)}).catch(function(e){var t={type:"error",message:"There was a problem fetching the user: "+e.message};s("notification/add",t,{root:!0})})},fetchLoggedUser:function(e,t){var r=e.commit,a=e.getters,s=e.dispatch,n=a.getUserById(t);n?r("SET_LOGGED_USER",n):Mt.getUser(t).then(function(e){return r("SET_LOGGED_USER",e.data.data)}).catch(function(e){var t={type:"error",message:"There was a problem fetching the user: "+e.message};s("notification/add",t,{root:!0})})},updateUser:function(e,t){var r=e.commit,a=e.dispatch;Mt.updateUser(t.id,t).then(function(e){r("UPDATE_USER",e.data.data);var t={type:"success",message:"Your user profile has been updated!"};a("notification/add",t,{root:!0})}).catch(function(e){var t={type:"error",message:"There was a problem updating the profile: "+e.message};a("notification/add",t,{root:!0})})},deleteUser:function(e,t){var r=e.commit,a=e.dispatch;Mt.deleteUser(t.id).then(r("REMOVE_USER",t.id)).catch(function(e){var t={type:"error",message:"There was a problem updating the profile: "+e.message};a("notification/add",t,{root:!0})})},updateImage:function(e,t){var r=e.dispatch,a=t.image,s=t.id;Mt.updateImage(a,s).then(function(){var e={type:"success",message:"Your user profile has been updated!"};r("notification/add",e,{root:!0})}).catch(function(e){var t={type:"error",message:"There was a problem updating the profile: "+e.message};console.log(t),r("notification/add",t,{root:!0})})},registerUser:function(e,t){var r=e.commit,a=e.dispatch;return Mt.registerUser(t).then(function(e){r("ADD_USER",t),r("SET_SESSION",{token:"Bearer ".concat(e.data.access_token),role:e.data.role,id:e.data.id});var s={type:"success",message:"Your user has been created!"};a("notification/add",s,{root:!0})}).catch(function(e){var t={type:"error",message:"There was a problem creating your profile: "+e.message};throw a("notification/add",t,{root:!0}),e})},logUserIn:function(e,t){var r=e.commit,a=e.dispatch;return Mt.logUserIn(t).then(function(e){a("fetchUser",e.data.id),r("SET_SESSION",{token:"Bearer ".concat(e.data.access_token),role:e.data.role,id:e.data.id})}).catch(function(e){var t={type:"error",message:"There was a problem logging you in: "+e.message};throw a("notification/add",t,{root:!0}),e})},logUserOut:function(e){var t=e.commit;t("DESTROY_SESSION")}},Vt={characters:[],character:{}},zt={getCharacterById:function(e){return function(t){return e.characters.find(function(e){return e.id===t})}}},Wt={SET_CHARACTERS:function(e,t){e.characters=t},SET_CHARACTER:function(e,t){e.character=t},ADD_CHARACTER:function(e,t){e.characters.push(t)},UPDATE_CHARACTER:function(e,t){e.character=t},REMOVE_CHARACTER:function(e,t){e.characters.filter(function(e){return e.id!==t})}},Kt={fetchCharacters:function(e){var t=e.commit,r=e.dispatch;Mt.getCharacters().then(function(e){return t("SET_CHARACTERS",e.data.data)}).catch(function(e){var t={type:"error",message:"There was a problem fetching events: "+e.message};r("notification/add",t,{root:!0})})},fetchCharacter:function(e,t){var r=e.commit,a=e.getters,s=e.dispatch,n=a.getCharacterById(t);n?r("SET_CHARACTER",n):Mt.getCharacter(t).then(function(e){return r("SET_CHARACTER",e.data.data)}).catch(function(e){var t={type:"error",message:"There was a problem fetching events: "+e.message};s("notification/add",t,{root:!0})})},createCharacter:function(e,t){var r=e.commit,a=e.dispatch;return Mt.createCharacter(t).then(function(e){r("ADD_CHARACTER",e.data.data);var t={type:"success",message:"Your character has been created!"};a("notification/add",t,{root:!0})}).catch(function(e){var t={type:"error",message:"There was a problem creating your character: "+e.message};throw a("notification/add",t,{root:!0}),e})},updateCharacter:function(e,t){var r=e.commit,a=e.dispatch;Mt.updateCharacter(t.id,t).then(function(e){return r("UPDATE_CHARACTER",e.data.data)}).catch(function(e){var t={type:"error",message:"There was a problem updating the character: "+e.message};a("notification/add",t,{root:!0})})},deleteCharacter:function(e,t){var r=e.commit,a=e.dispatch;Mt.deleteCharacter(t.id).then(r("REMOVE_CHARACTER",t.id)).catch(function(e){var t={type:"error",message:"There was a problem removing the character: "+e.message};a("notification/add",t,{root:!0})})}},Qt=(r("7f7f"),{raid:[],snapshot:{snapshot:{}}}),Xt={},Zt={SET_RAID:function(e,t){e.raid=t},SET_SNAPSHOT:function(e,t){e.snapshot=t}},er={fetchRaid:function(e){var t=e.commit,r=e.dispatch;Mt.getRaid().then(function(e){return t("SET_RAID",e.data.data)}).catch(function(e){var t={type:"error",message:"There was a problem fetching events: "+e.message};r("notification/add",t,{root:!0})})},fetchSnapshot:function(e,t){var r=e.commit,a=e.getters,s=e.dispatch,n=a.getSnapshotById(t);n?r("SET_SNAPSHOT",n):Mt.getSnapshot(t).then(function(e){return r("SET_SNAPSHOT",e.data.data)}).catch(function(e){var t={type:"error",message:"There was a problem fetching the snapshot: "+e.message};s("notification/add",t,{root:!0})})},saveSnapshot:function(e){var t=e.commit,r=e.dispatch,a={snapshot:[]};Qt.raid.map(function(e){a.snapshot.push({id:e.id,name:e.name,owner:e.user.name})}),Mt.saveSnapshot(a).then(function(e){t("ADD_SNAPSHOT",e.data);var a={type:"success",message:"The current roster composition has been stored!"};r("notification/add",a,{root:!0})}).catch(function(e){var t={type:"error",message:"There was a problem saving the snapshot: "+e.message};r("notification/add",t,{root:!0})})},deleteSnapshot:function(e,t){var r=e.commit,a=e.dispatch;Mt.deleteSnapshot(t.id).then(r("REMOVE_SNAPSHOT",t.id)).catch(function(e){var t={type:"error",message:"There was a problem updating the profile: "+e.message};a("notification/add",t,{root:!0})})}},tr={users:[],characters:[],snapshots:[],snapshot:{}},rr={getSnapshotById:function(e){return function(t){return e.snapshots.find(function(e){return e.id===t})}}},ar={SET_D_USERS:function(e,t){e.users=t},SET_D_CHARACTERS:function(e,t){e.characters=t},SET_D_SNAPSHOTS:function(e,t){e.snapshots=t},ADD_SNAPSHOT:function(e,t){e.snapshots.push(t)},REMOVE_SNAPSHOT:function(e,t){e.snapshots.filter(function(e){return e.id!==t})}},sr={fetchDashboardUsers:function(e){var t=e.commit,r=e.dispatch;Mt.getDashboardUsers().then(function(e){t("SET_D_USERS",e.data.data)}).catch(function(e){var t={type:"error",message:"There was a problem fetching users: "+e.message};r("notification/add",t,{root:!0})})},fetchDashboardCharacters:function(e){var t=e.commit,r=e.dispatch;Mt.getDashboardCharacters().then(function(e){return t("SET_D_CHARACTERS",e.data.data)}).catch(function(e){var t={type:"error",message:"There was a problem fetching characters: "+e.message};r("notification/add",t,{root:!0})})},fetchDashboardSnapshots:function(e){var t=e.commit,r=e.dispatch;Mt.getDashboardSnapshots().then(function(e){t("SET_D_SNAPSHOTS",e.data.data)}).catch(function(e){var t={type:"error",message:"There was a problem fetching SNAPSHOTS: "+e.message};r("notification/add",t,{root:!0})})}};function nr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function ir(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?nr(r,!0).forEach(function(t){Object(p["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nr(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var or=!0,cr={notifications:[]},ur=1,dr={PUSH:function(e,t){e.notifications.push(ir({},t,{id:ur++}))},DELETE:function(e,t){e.notifications=e.notifications.filter(function(e){return e.id!==t.id})}},lr={add:function(e,t){var r=e.commit;r("PUSH",t)},remove:function(e,t){var r=e.commit;r("DELETE",t)}};c["a"].use(f["a"]);var hr=new f["a"].Store({modules:{users:a,characters:s,raids:n,dashboard:i,notification:o},state:{},mutations:{},actions:{},getters:{}});c["a"].config.productionTip=!1,new c["a"]({router:Lt,store:hr,created:function(){var e=localStorage.getItem("session");if(e){var t=JSON.parse(e);this.$store.commit("SET_SESSION",t)}},render:function(e){return e(Y)}}).$mount("#app")},"5cfb":function(e,t,r){},"64a9":function(e,t,r){},"70d8":function(e,t,r){"use strict";var a=r("872e"),s=r.n(a);s.a},8322:function(e,t,r){},8507:function(e,t,r){},"872e":function(e,t,r){},"98be":function(e,t,r){"use strict";var a=r("8507"),s=r.n(a);s.a},a7ed:function(e,t,r){"use strict";var a=r("d2fd"),s=r.n(a);s.a},a9bf:function(e,t,r){},d2fd:function(e,t,r){},d8a5:function(e,t,r){},edf1:function(e,t,r){"use strict";var a=r("55d5"),s=r.n(a);s.a},eecf:function(e,t,r){"use strict";var a=r("d8a5"),s=r.n(a);s.a},f758:function(e,t,r){}});
//# sourceMappingURL=app.0808debb.js.map