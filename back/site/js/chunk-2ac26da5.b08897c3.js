(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ac26da5"],{"1fff":function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return c}));var o=a("c3cb"),r="/api/recibos",s=function(){return o["a"].get(r)},n=function(e){return o["a"].post(r,e)},i=function(e,t){return o["a"].put(r+"/"+e,t)},c=function(e){return o["a"].delete(r+"/"+e)}},"3a76":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-div",{staticClass:"contenedor"},[a("div",{staticClass:"recibo"},[a("div",{staticClass:"imagen"},[a("svg",{staticClass:"icon icon-tabler icon-tabler-receipt-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"56",height:"56",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#000000",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"}}),a("path",{attrs:{d:"M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5"}})])]),a("h1",{staticClass:"recibo__title"},[e._v("RECIBO")]),a("div",{staticClass:"recibo__campo"},[a("p",[e._v("Nombre")]),a("p",[e._v(e._s(e.lastNameCliente)+", "+e._s(e.nameCliente))])]),a("div",{staticClass:"recibo__campo"},[a("p",[e._v("Lugar de recogida")]),a("p"),a("p",[e._v(e._s(e.lugarRecogida))])]),a("div",{staticClass:"recibo__campo"},[a("p",[e._v("Fecha de recogida")]),a("p",[e._v(e._s(e.fechaRecogida))])]),a("div",{staticClass:"recibo__campo"},[a("p",[e._v("Lugar de entrega")]),a("p",[e._v(e._s(e.lugarDevolucion))])]),a("div",{staticClass:"recibo__campo"},[a("p",[e._v("Fecha de entrega")]),a("p",[e._v(e._s(e.fechaEntrega))])]),a("div",{staticClass:"recibo__campo"},[a("p",[e._v("Vehículo")]),a("p",[e._v(e._s(e.modeloCarro))])]),a("div",{staticClass:"precios"},[a("div",{staticClass:"precio-contenido"},[a("p",[e._v("Días totales de alquiler")]),a("p",[e._v(e._s(e.diasAlquiler))])]),a("div",{staticClass:"precio-contenido"},[a("p",[e._v("Precio por día del carro")]),a("p",[e._v(e._s(e.precioCarro)+" COP")])])]),a("div",{staticClass:"recibo__campo"},[a("p",{staticClass:"total-texto"},[e._v("TOTAL")]),a("p",[e._v(e._s(e.totalPagar)+" COP")])])]),a("div",{staticClass:"botones"},[a("v-btn",{staticClass:"boton",attrs:{color:"primary",depressed:"",elevation:"4",outlined:"",rounded:"",text:""},on:{click:function(t){return e.registrarReciboBaseDatos()}}},[e._v("RESERVAR")]),a("v-btn",{staticClass:"boton",attrs:{to:"/alquiler",color:"primary",depressed:"",elevation:"4",outlined:"",rounded:"",text:""}},[e._v("VOLVER")]),a("v-snackbar",{attrs:{timeout:e.timeout},scopedSlots:e._u([{key:"action",fn:function(t){var o=t.attrs;return[a("v-btn",e._b({attrs:{color:"blue",text:""},on:{click:function(t){return e.regresarHome()}}},"v-btn",o,!1),[e._v(" Cerrar ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.textSnackbar)+" ")])],1)])},r=[],s=a("1fff"),n=a("bfac"),i={data:function(){return{nameCliente:sessionStorage.getItem("nameCliente"),lastNameCliente:sessionStorage.getItem("lastNameCliente"),documento:sessionStorage.getItem("documento"),lugarRecogida:sessionStorage.getItem("lugarRecogida"),fechaRecogida:sessionStorage.getItem("fechaRecogida"),lugarDevolucion:sessionStorage.getItem("lugarDevolucion"),fechaEntrega:sessionStorage.getItem("fechaEntrega"),modeloCarro:sessionStorage.getItem("modeloCarro"),diasAlquiler:sessionStorage.getItem("diasAlquiler"),precioCarro:sessionStorage.getItem("precioDiaCarro"),totalPagar:sessionStorage.getItem("diasAlquiler")*sessionStorage.getItem("precioDiaCarro"),stock:sessionStorage.getItem("stock"),snackbar:!1,textSnackbar:""}},methods:{regresarHome:function(){this.$router.push("/")},registrarReciboBaseDatos:function(){this.textSnackbar="Reserva exitosa.",this.snackbar=!0;var e={nameCliente:this.nameCliente,lastNameCliente:this.lastNameCliente,documento:this.documento,lugarRecogida:this.lugarRecogida,fechaRecogida:this.fechaRecogida,lugarDevolucion:this.lugarDevolucion,fechaEntrega:this.fechaEntrega,diasAlquiler:this.diasAlquiler,modeloCarro:this.modeloCarro,totalPagar:this.totalPagar};Object(s["a"])(e).then((function(){console.log("Recibo creado con éxito en la abse de datos.")})).catch((function(e){return console.error(e)}));var t={stock:this.stock-1},a=sessionStorage.getItem("_id_carro_elegido");Object(n["e"])(a,t).then((function(){console.log("Stock disminuido.")})).catch((function(e){return console.error(e)}))}}},c=i,l=(a("e7ec"),a("2877")),u=a("6544"),d=a.n(u),g=a("8336"),v=a("2db4"),p=Object(l["a"])(c,o,r,!1,null,"361b1170",null);t["default"]=p.exports;d()(p,{VBtn:g["a"],VSnackbar:v["a"]})},9252:function(e,t,a){},bfac:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return c})),a.d(t,"b",(function(){return l}));var o=a("c3cb"),r="/api/cars",s=function(){return o["a"].get(r)},n=function(e){return o["a"].post(r,e)},i=function(e){return o["a"].get(r+"/"+e)},c=function(e,t){return o["a"].put(r+"/"+e,t)},l=function(e){return o["a"].delete(r+"/"+e)}},e7ec:function(e,t,a){"use strict";a("9252")}}]);
//# sourceMappingURL=chunk-2ac26da5.b08897c3.js.map