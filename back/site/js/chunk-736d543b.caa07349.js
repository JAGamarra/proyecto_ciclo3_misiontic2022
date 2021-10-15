(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-736d543b"],{"0d36":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"container"},[n("v-icon",{attrs:{"x-large":"",color:"blue"}},[e._v("mdi-account-circle")]),n("h1",{staticClass:"form-title"},[e._v("Registro")]),n("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-container",[n("v-row",{staticClass:"v-row"},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{rules:e.nameRules,counter:50,label:"Nombres",required:"","append-icon":"mdi-account-settings"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{rules:e.nameRules,counter:50,label:"Apellidos","append-icon":"mdi-account-settings",required:""},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1)],1),n("v-row",{staticClass:"v-row"},[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{rules:e.usernameRules,counter:10,label:"Nombre de usuario",required:"","append-icon":"mdi-form-textbox"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{rules:e.passwordRules,counter:12,label:"Contraseña",required:"",type:e.showPassword?"text":"password","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{rules:[e.passwordRules,e.password===e.repeatPassword||"Password must match"],counter:12,label:"Repetir Contraseña",required:"",type:e.showPassword?"text":"password","append-icon":e.showPassword?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.repeatPassword,callback:function(t){e.repeatPassword=t},expression:"repeatPassword"}})],1)],1),n("v-row",{staticClass:"v-row"},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:"","append-icon":"mdi-email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{rules:e.numberRules,label:"Número de teléfono",required:"","append-icon":"mdi-cellphone"},model:{value:e.cellphone,callback:function(t){e.cellphone=e._n(t)},expression:"cellphone"}})],1)],1),n("v-row",{staticClass:"v-row"},[n("v-col",{staticClass:"d-flex mt-3",attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:e.items,label:"Tipo de documento",dense:"",outlined:"",required:""},model:{value:e.tipoDocumento,callback:function(t){e.tipoDocumento=t},expression:"tipoDocumento"}})],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{rules:e.numberRules,counter:14,label:"Número de documento",required:"","append-icon":"mdi-card-account-details"},model:{value:e.documento,callback:function(t){e.documento=e._n(t)},expression:"documento"}})],1),n("v-col",{staticClass:"flex-boton d-flex justify-center "},[n("v-btn",{staticClass:"mx-2",attrs:{color:"secundary",depressed:"",elevation:"4",outlined:"",rounded:"",text:""},on:{click:function(t){return e.cancelarregistro()}}},[e._v("Cancelar")]),n("v-btn",{staticClass:"mx-2",attrs:{color:"secundary",depressed:"",elevation:"4",outlined:"",rounded:"",text:""},on:{click:function(t){return e.LimpiarRegistro()}}},[e._v("Limpiar")]),n("v-btn",{staticClass:"mx-2",attrs:{color:"primary",depressed:"",elevation:"4",outlined:"",rounded:"",text:""},on:{click:function(t){return e.registrarBaseDatos()}}},[e._v("Registrar")])],1)],1)],1),n("v-snackbar",{attrs:{timeout:e.timeout},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({attrs:{color:"blue",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",r,!1),[e._v(" Cerrar ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.textSnackbar)+" ")])],1)],1)},a=[],s=(n("b0c0"),n("8cb9")),o={data:function(){return{valid:!1,name:"",lastname:"",username:"",password:"",repeatPassword:"",showPassword:!1,email:"",cellphone:"",tipoDocumento:"",documento:"",items:["C.C","C.E","Pasaporte"],nameRules:[function(e){return!!e||"Required"},function(e){return e.length<=50||"Name must be less than 10 characters"},function(e){return/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(e)||"Name/Lastname is incorrect"}],usernameRules:[function(e){return!!e||"Required."},function(e){return/^[a-zA-Z0-9]{4,16}$/.test(e)}],passwordRules:[function(e){return!!e||"Required"},function(e){return e.length>=3||"Password must be greater than 6 characters"}],emailRules:[function(e){return!!e||"Required"},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}],numberRules:[function(e){return!!e||"Required"},function(e){return/^\d{1,16}$/.test(e)||"Only numbers"}],snackbar:!1,textSnackbar:"",timeout:8e3}},methods:{cancelarregistro:function(){this.$router.push("/")},LimpiarRegistro:function(){this.$refs.form.reset()},registrarBaseDatos:function(){var e=this;if(this.valid){var t={username:this.username,password:this.password,userType:"client",email:this.email,cellphone:this.cellphone,name:this.name,lastname:this.lastname,documento:this.documento,tipoDocumento:this.tipoDocumento};Object(s["a"])(t).then((function(){e.$router.push("/login")})).catch((function(t){e.textSnackbar=t,e.snackbar=!0}))}else this.textSnackbar=" Corrige tu registro por favor.",this.snackbar=!0}}},i=o,u=(n("e3a7"),n("2877")),c=n("6544"),l=n.n(c),d=n("7496"),m=n("8336"),f=n("62ad"),p=n("a523"),h=n("4bd4"),v=n("132d"),b=n("0fd9"),w=n("b974"),x=n("2db4"),k=n("8654"),g=Object(u["a"])(i,r,a,!1,null,"4555ec91",null);t["default"]=g.exports;l()(g,{VApp:d["a"],VBtn:m["a"],VCol:f["a"],VContainer:p["a"],VForm:h["a"],VIcon:v["a"],VRow:b["a"],VSelect:w["a"],VSnackbar:x["a"],VTextField:k["a"]})},"4bd4":function(e,t,n){"use strict";var r=n("5530"),a=(n("caad"),n("2532"),n("07ac"),n("4de4"),n("159b"),n("7db0"),n("58df")),s=n("7e2b"),o=n("3206");t["a"]=Object(a["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,n=function(e){return e.$watch("hasError",(function(n){t.$set(t.errorBag,e._uid,n)}),{immediate:!0})},r={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=e.$watch("shouldValidate",(function(a){a&&(t.errorBag.hasOwnProperty(e._uid)||(r.valid=n(e)))})):r.valid=n(e),r},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var n=this.watchers.find((function(e){return e._uid===t._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},"6b9d":function(e,t,n){},"8cb9":function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return c}));var r=n("c3cb"),a="/api/users",s=function(){return r["a"].get(a)},o=function(e){return r["a"].post(a,e)},i=function(e){return r["a"].get(a+"/"+e)},u=function(e,t){return r["a"].put(a+"/"+e,t)},c=function(e){return r["a"].delete(a+"/"+e)}},e3a7:function(e,t,n){"use strict";n("6b9d")}}]);
//# sourceMappingURL=chunk-736d543b.caa07349.js.map