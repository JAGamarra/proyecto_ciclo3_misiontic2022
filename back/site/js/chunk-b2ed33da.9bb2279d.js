(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2ed33da"],{"0b2e":function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{attrs:{fluid:""}},[t("h1",[e._v(" Preguntas frecuentes ")]),e._l(e.preguntas,(function(n){return t("v-expansion-panels",{key:n._id,staticClass:"mb-6"},[t("v-expansion-panel",[t("v-expansion-panel-header",{attrs:{"expand-icon":"mdi-menu-down"}},[t("h3",[e._v(" "+e._s(n.pregunta)+" ")])]),t("v-expansion-panel-content",[e._v(" "+e._s(n.respuesta)+" ")])],1)],1)}))],2)},a=[],s=t("20b0"),o={data:function(){return{preguntas:[]}},created:function(){var e=this;Object(s["c"])().then((function(n){e.preguntas=n.data})).catch((function(e){return console.error(e)}))}},r=o,c=t("2877"),l=t("6544"),u=t.n(l),p=t("a523"),d=t("5530"),h=t("4e82"),v=t("3206"),x=t("80d2"),f=t("58df"),b=Object(f["a"])(Object(h["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(v["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(d["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(x["s"])(this))}}),g=t("0789"),m=t("9d65"),A=t("a9ad"),O=Object(f["a"])(m["a"],A["a"],Object(v["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")),j=O.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,n){var t=this;e&&(this.isBooted=!0),null==n?this.isActive=e:this.$nextTick((function(){return t.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(g["a"],this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(x["s"])(n))])]})))}}),P=t("9d26"),w=t("5607"),y=Object(f["a"])(A["a"],Object(v["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel")),C=y.extend().extend({name:"v-expansion-panel-header",directives:{ripple:w["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(x["s"])(this,"actions")||[this.$createElement(P["a"],this.expandIcon)];return this.$createElement(g["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(d["a"])(Object(d["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(x["s"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),B=(t("0481"),t("210b"),t("604c")),k=t("d9bd"),_=B["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({},B["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(k["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(k["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),i=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(i)}}}),$=Object(c["a"])(r,i,a,!1,null,null,null);n["default"]=$.exports;u()($,{VContainer:p["a"],VExpansionPanel:b,VExpansionPanelContent:j,VExpansionPanelHeader:C,VExpansionPanels:_})},"20b0":function(e,n,t){"use strict";t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return o})),t.d(n,"d",(function(){return r})),t.d(n,"b",(function(){return c}));var i=t("c3cb"),a="/api/faq",s=function(){return i["a"].get(a)},o=function(e){return i["a"].post(a,e)},r=function(e,n){return i["a"].put(a+"/"+e,n)},c=function(e){return i["a"].delete(a+"/"+e)}},"210b":function(e,n,t){}}]);
//# sourceMappingURL=chunk-b2ed33da.9bb2279d.js.map