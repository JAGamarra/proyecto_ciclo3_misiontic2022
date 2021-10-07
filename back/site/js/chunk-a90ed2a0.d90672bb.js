(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a90ed2a0"],{"0d36":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticClass:"container"},[a("v-icon",{attrs:{"x-large":"",color:"blue"}},[e._v("mdi-account-circle")]),a("h1",{staticClass:"form-title"},[e._v("Registro")]),a("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-row",{staticClass:"v-row"},[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{rules:e.nameRules,counter:50,label:"Nombres",required:"","append-icon":"mdi-account-settings"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{rules:e.nameRules,counter:50,label:"Apellidos","append-icon":"mdi-account-settings",required:""},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1)],1),a("v-row",{staticClass:"v-row"},[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{rules:e.usernameRules,counter:10,label:"Nombre de usuario",required:"","append-icon":"mdi-form-textbox"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{rules:e.passwordRules,counter:12,label:"Contraseña",required:"",type:e.showPassword?"text":"password","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{rules:[e.passwordRules,e.password===e.repeatPassword||"Password must match"],counter:12,label:"Repetir Contraseña",required:"",type:e.showPassword?"text":"password","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.repeatPassword,callback:function(t){e.repeatPassword=t},expression:"repeatPassword"}})],1)],1),a("v-row",{staticClass:"v-row"},[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:"","append-icon":"mdi-email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{rules:e.numberRules,label:"Número de teléfono",required:"","append-icon":"mdi-cellphone"},model:{value:e.cellphone,callback:function(t){e.cellphone=e._n(t)},expression:"cellphone"}})],1)],1),a("v-row",{staticClass:"v-row"},[a("v-col",{staticClass:"d-flex mt-3",attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{items:e.items,label:"Tipo de documento",dense:"",outlined:"",required:""},model:{value:e.tipoDocumento,callback:function(t){e.tipoDocumento=t},expression:"tipoDocumento"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{rules:e.numberRules,counter:14,label:"Número de documento",required:"","append-icon":"mdi-card-account-details"},model:{value:e.documento,callback:function(t){e.documento=e._n(t)},expression:"documento"}})],1),a("v-col",{staticClass:"flex-boton d-flex justify-center"},[a("v-btn",{attrs:{color:"primary",depressed:"",elevation:"4",outlined:"",rounded:"",text:""},on:{click:function(t){return e.registrarBaseDatos()}}},[e._v("Registrar")])],1)],1)],1),a("v-snackbar",{attrs:{timeout:e.timeout},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[a("v-btn",e._b({attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",r,!1),[e._v(" Cerrar ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.textSnackbar)+" ")])],1)],1)},n=[],s=(a("b0c0"),a("8cb9")),o={data:function(){return{valid:!1,name:"",lastname:"",username:"",password:"",repeatPassword:"",showPassword:!1,email:"",cellphone:"",tipoDocumento:"",documento:"",items:["C.C","C.E","Pasaporte"],nameRules:[function(e){return!!e||"Required"},function(e){return e.length<=50||"Name must be less than 10 characters"},function(e){return/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(e)||"Name/Lastname is incorrect"}],usernameRules:[function(e){return!!e||"Required."},function(e){return/^[a-zA-Z0-9]{4,16}$/.test(e)}],passwordRules:[function(e){return!!e||"Required"},function(e){return e.length>=3||"Password must be greater than 6 characters"}],emailRules:[function(e){return!!e||"Required"},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}],numberRules:[function(e){return!!e||"Required"},function(e){return/^\d{1,16}$/.test(e)||"Only numbers"}],snackbar:!1,textSnackbar:"",timeout:8e3}},methods:{registrarBaseDatos:function(){var e=this;if(console.log("es valido ? :".concat(this.valid)),this.valid){var t={username:this.username,password:this.password,userType:"client",email:this.email,cellphone:this.cellphone,name:this.name,lastname:this.lastname,documento:this.documento};Object(s["a"])(t).then((function(){console.log("registrado con éxito en la abse de datos.ya puedes loguearte."),e.textSnackbar=" Registro exitoso. Puedes Iniciar sesión.",e.snackbar=!0,e.$refs.form.reset(),0==e.snackbar&&e.$router.push("/")})).catch((function(t){e.textSnackbar=t,e.snackbar=!0}))}else console.log("corrige erratas en registro."),this.textSnackbar=" Corrige tu registro por favor.",this.snackbar=!0}}},i=o,u=(a("5465"),a("2877")),c=a("6544"),l=a.n(c),d=a("7496"),m=a("8336"),f=a("62ad"),p=a("a523"),h=a("4bd4"),v=a("132d"),b=a("0fd9"),w=a("b974"),x=a("2db4"),k=a("8654"),g=Object(u["a"])(i,r,n,!1,null,"1af1f0a4",null);t["default"]=g.exports;l()(g,{VApp:d["a"],VBtn:m["a"],VCol:f["a"],VContainer:p["a"],VForm:h["a"],VIcon:v["a"],VRow:b["a"],VSelect:w["a"],VSnackbar:x["a"],VTextField:k["a"]})},4550:function(e,t,a){},"4bd4":function(e,t,a){"use strict";var r=a("5530"),n=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),s=a("7e2b"),o=a("3206");t["a"]=Object(n["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,a=function(e){return e.$watch("hasError",(function(a){t.$set(t.errorBag,e._uid,a)}),{immediate:!0})},r={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=e.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(e._uid)||(r.valid=a(e)))})):r.valid=a(e),r},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var a=this.watchers.find((function(e){return e._uid===t._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},5465:function(e,t,a){"use strict";a("4550")},"8cb9":function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return u})),a.d(t,"b",(function(){return c}));var r=a("c3cb"),n="/api/users",s=function(){return r["a"].get(n)},o=function(e){return r["a"].post(n,e)},i=function(e){return r["a"].get(n+"/"+e)},u=function(e,t){return r["a"].put(n+"/"+e,t)},c=function(e){return r["a"].delete(n+"/"+e)}}}]);
//# sourceMappingURL=chunk-a90ed2a0.d90672bb.js.map