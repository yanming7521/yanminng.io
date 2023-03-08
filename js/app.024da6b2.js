!function(){"use strict";var t,e,a={2283:function(t,e,a){var i=a(6369),n=(a(7658),a(569)),s=a(6154),o=a.n(s),l=a(4171);const r=(t,e)=>{var{removedIndex:e,addedIndex:a,payload:i}=e;if(null===e&&null===a)return t;t=[...t];let n=i;return null!==e&&(n=t.splice(e,1)[0]),null!==a&&t.splice(a,0,n),t};s={components:{Container:n.Container,Draggable:n.Draggable},data(){return{taskColumnList:[{name:"日间申请",list:[{name:"入院信息登记",parent:"日间申请",id:"1677201449285-0"}],id:1677201449285},{name:"日间登记",list:[{name:"办理预住院",parent:"日间登记",id:"1677201467821-0"},{name:"拟定手术",parent:"日间登记",id:"1677201467821-1"},{name:"确认麻醉方式",parent:"日间登记",id:"1677201467821-2"},{name:"补充登记信息",parent:"日间登记",id:"1677201467821-3"}],id:1677201467821},{name:"院前检查",list:[{name:"检验检查",parent:"院前检查",id:"1677201537277-0"}],id:1677201537277},{name:"院前评估",list:[{name:"麻醉评估",parent:"院前评估",id:"1677201553589-0"},{name:"专科评估",parent:"院前评估",id:"1677201553589-1"},{name:"中心评估",parent:"院前评估",id:"1677201553589-2"}],id:1677201553589},{name:"术前宣教",list:[{name:"用户宣教",parent:"术前宣教",id:"1677201594797-0"}],id:1677201594797},{name:"手术安排",list:[{name:"手术预约",parent:"手术安排",id:"1677201614341-0"},{name:"手术排程",parent:"手术安排",id:"1677201614341-1"},{name:"排程通知",parent:"手术安排",id:"1677201614341-2"}],id:1677201614341},{name:"出入科",list:[{name:"麻醉复苏评估",parent:"出入科",id:"1677201648021-2"},{name:"入科",parent:"出入科",id:"1677201648021-1"},{name:"出科",parent:"出入科",id:"1677201648021-0"}],id:1677201648021},{name:"出院评估",list:[{name:"出院评估",parent:"出院评估",id:"1677201654933-0"}],id:1677201654933},{name:"随访",list:[{name:"专科随访",parent:"随访",id:"1677201670733-0"},{name:"中心随访",parent:"随访",id:"1677201670733-1"}],id:1677201670733}],dropPlaceholderOptions:{className:"drop-preview",animationDuration:"150",showOnTop:!0},dialogFormVisible:!1,taskVisible:!1,formLabelWidth:"80px",jdform:{name:""},form:{name:"",id:""}}},mounted(){},methods:{shepher(){var t=(0,l.shepherd)();t.addSteps([{attachTo:{element:document.querySelector("#Create-node"),on:"auto"},title:"创建新的任务节点",text:"创建新的任务节点到零时节点区域",buttons:[{action(){return this.next()},text:"下一步"}]},{attachTo:{element:document.querySelector("#Create-task"),on:"auto"},title:"创建新的任务",text:"创建新的任务到零时任务区域"},{attachTo:{element:document.querySelector(".temp"),on:"auto"},title:"临时任务区",text:"此处是已创建的临时节点和零时任务"},{attachTo:{element:document.querySelector(".columnSh"),on:"auto"},title:"设计的流程节点",text:"通过拖动 &#x2630; 来改变节点位置，也可以删除节点（将存放到零时节点区域）"},{attachTo:{element:document.querySelector(".taskSh"),on:"auto"},title:"设计的节点任务",text:"通过拖动改变任务顺序和所在节点，也可以删除任务（将存放到零时任务区域）"},{attachTo:{element:document.querySelector("#cz"),on:"left"},title:"重置流程",text:"初始化设计图到上次保存的状态"},{attachTo:{element:document.querySelector("#save"),on:"right"},title:"保存流程",text:"保存完整的任务流程"},{attachTo:{element:document.querySelector("#main-btn2"),on:"auto"},title:"完成引导",text:"恭喜您已经掌握全部技能！",buttons:[{action(){return this.cancel()},text:"完成"}]}]),t.start()},deletetask(t,e){var a=t.list;let i=[];a.map((t=>{t.id!==e.id&&i.push(t)})),this.$message({showClose:!0,message:"删除成功",offset:80,type:"success"}),setTimeout((()=>{this.taskColumnList.find((e=>e.id===t.id)).list=i}),300)},deleteJD(t){var e=this.taskColumnList;let a=[];e.map((e=>{e.id!==t.id&&a.push(e)})),this.$message({showClose:!0,message:"删除成功",offset:80,type:"success"}),setTimeout((()=>{this.taskColumnList=a}),300)},addtask(t){var e={name:t.name,parent:this.taskColumnList.find((e=>e.id===t.id)).name,id:this.taskColumnList.find((e=>e.id===t.id)).list.length?t.id+"-"+this.taskColumnList.find((e=>e.id===t.id)).list.length:t.id+"-0"};this.taskColumnList.find((e=>e.id===t.id)).list.push(e),this.$message({showClose:!0,message:"添加成功",offset:80,type:"success"}),this.form={}},addjd(t){var e=Date.now();this.taskColumnList.push({name:t.name,list:[],id:e}),this.$message({showClose:!0,message:"添加成功",offset:80,type:"success"}),this.jdform={}},startD(t){},ready(t){},onColumnDrop(t){this.taskColumnList=r(this.taskColumnList,t),this.taskColumnList.forEach((t=>{t.display=!0}))},onCardDrop(t,e){var{removedIndex:a,addedIndex:i,payload:n}=e;null===a&&null===i||(a=this.taskColumnList.find((e=>e.id===t)),null!==i&&n&&(e.payload={...n,parent:a.name}),a.list=r(a.list,e))},getCardPayload(t){return e=>this.taskColumnList.find((e=>e.id===t)).list[e]},sive(){var t=JSON.stringify(this.taskColumnList);t=new Blob([t],{type:"application/json"});this.$message({showClose:!0,message:"开始下载",offset:80,type:"success"}),o().saveAs(t,"flowPath.json")},initialization(){this.$message({showClose:!0,message:"重置成功",offset:80,type:"success"}),setTimeout((()=>{this.taskColumnList=[{name:"日间申请",list:[{name:"入院信息登记",parent:"日间申请",id:"1677201449285-0"}],id:1677201449285},{name:"日间登记",list:[{name:"办理预住院",parent:"日间登记",id:"1677201467821-0"},{name:"拟定手术",parent:"日间登记",id:"1677201467821-1"},{name:"确认麻醉方式",parent:"日间登记",id:"1677201467821-2"},{name:"补充登记信息",parent:"日间登记",id:"1677201467821-3"}],id:1677201467821},{name:"院前检查",list:[{name:"检验检查",parent:"院前检查",id:"1677201537277-0"}],id:1677201537277},{name:"院前评估",list:[{name:"麻醉评估",parent:"院前评估",id:"1677201553589-0"},{name:"专科评估",parent:"院前评估",id:"1677201553589-1"},{name:"中心评估",parent:"院前评估",id:"1677201553589-2"}],id:1677201553589},{name:"术前宣教",list:[{name:"用户宣教",parent:"术前宣教",id:"1677201594797-0"}],id:1677201594797},{name:"手术安排",list:[{name:"手术预约",parent:"手术安排",id:"1677201614341-0"},{name:"手术排程",parent:"手术安排",id:"1677201614341-1"},{name:"排程通知",parent:"手术安排",id:"1677201614341-2"}],id:1677201614341},{name:"出入科",list:[{name:"麻醉复苏评估",parent:"出入科",id:"1677201648021-2"},{name:"入科",parent:"出入科",id:"1677201648021-1"},{name:"出科",parent:"出入科",id:"1677201648021-0"}],id:1677201648021},{name:"出院评估",list:[{name:"出院评估",parent:"出院评估",id:"1677201654933-0"}],id:1677201654933},{name:"随访",list:[{name:"专科随访",parent:"随访",id:"1677201670733-0"},{name:"中心随访",parent:"随访",id:"1677201670733-1"}],id:1677201670733}]}),300)}}},n=a(1001),s=(0,n.Z)(s,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"100%"}},[t._m(0),e("div",{staticClass:"edit"},[e("div",{staticClass:"e-title"},[t._v("创建新节点 :")]),e("div",{staticClass:"edit-type"},[e("div",{staticClass:"card-container",attrs:{id:"Create-node"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._m(1)])]),e("div",{staticClass:"e-title"},[t._v("创建新任务 :")]),e("div",{staticClass:"edit-item"},[e("div",{staticClass:"task-card",attrs:{id:"Create-task"},on:{click:function(e){t.taskVisible=!0}}},[e("div",{staticClass:"task-title",staticStyle:{padding:"0 10px"}},[t._v("点击添加新任务")])])]),e("div",{staticClass:"explain"},[e("el-button",{attrs:{type:"warning",plain:"",size:"mini",icon:"el-icon-search"},on:{click:function(e){return t.shepher()}}},[t._v("使用说明")])],1)]),e("el-dialog",{attrs:{title:"设置新节点",visible:t.dialogFormVisible,width:"400px","custom-class":"jd"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[e("el-form",{attrs:{model:t.jdform}},[e("el-form-item",{attrs:{label:"节点名称:","label-width":t.formLabelWidth}},[e("el-input",{style:{width:"100%"},attrs:{autocomplete:"off"},model:{value:t.jdform.name,callback:function(e){t.$set(t.jdform,"name",e)},expression:"jdform.name"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addjd(t.jdform),t.dialogFormVisible=!1}}},[t._v("确 定")])],1)],1),e("el-dialog",{attrs:{title:"设置新任务",visible:t.taskVisible,width:"400px","custom-class":"jd"},on:{"update:visible":function(e){t.taskVisible=e}}},[e("el-form",{attrs:{model:t.form}},[e("el-form-item",{attrs:{label:"任务名称:","label-width":t.formLabelWidth}},[e("el-input",{style:{width:"100%"},attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("el-form-item",{attrs:{label:"选择节点:","label-width":t.formLabelWidth}},[e("el-select",{style:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}},t._l(t.taskColumnList,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.taskVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addtask(t.form),t.taskVisible=!1}}},[t._v("确 定")])],1)],1),e("div",{staticClass:"card-scene"},[e("Container",{attrs:{orientation:"horizontal","drag-handle-selector":".column-drag-handle"},on:{"drag-start":function(e){return t.startD(e)},drop:function(e){return t.onColumnDrop(e)},"drop-ready":function(e){return t.ready(e)}}},t._l(t.taskColumnList,(function(a,i){return e("Draggable",{key:a.name},[e("div",{staticClass:"card-container",class:{columnSh:0===i}},[e("div",{staticClass:"card-column-header"},[e("span",{staticClass:"column-drag-handle"},[t._v("☰")]),t._v(" "+t._s(a.name)+" "),e("span",{staticClass:"el-icon-error delete",on:{click:function(e){return t.deleteJD(a)}}})]),i<t.taskColumnList.length-1?e("div",{staticClass:"arrow el-icon-right"}):t._e(),e("Container",{staticClass:"draggable-container",attrs:{"group-name":"col","get-child-payload":t.getCardPayload(a.id),"drag-class":"card-ghost","drop-class":"card-ghost-drop","drop-placeholder":t.dropPlaceholderOptions},on:{drop:e=>t.onCardDrop(a.id,e)}},t._l(a.list,(function(n){return e("Draggable",{key:n.id},[e("div",{staticClass:"task-card",class:{taskSh:0===i}},[e("div",{staticClass:"task-title"},[t._v(" "+t._s(n.name)),e("span",{staticClass:"el-icon-close delete pos",on:{click:function(e){return t.deletetask(a,n)}}})])])])})),1)],1)])})),1)],1),e("div",{staticClass:"temp"}),e("div",{staticClass:"foot"},[e("div",{staticClass:"but"},[e("el-button",{staticStyle:{"margin-right":"40px"},attrs:{type:"",id:"cz"},on:{click:function(e){return t.initialization()}}},[t._v("重 置")]),e("el-button",{attrs:{id:"save",type:"primary"},on:{click:function(e){return t.sive()}}},[t._v("保 存")])],1)])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"title"},[t("h2",[this._v("流程设计管理")])])},function(){var t=this._self._c;return t("div",{staticClass:"card-column-header mouth"},[t("span",{staticClass:"column-drag-handle mouth"},[this._v("☰")]),this._v(" 点击添加节点 ")])}],!1,null,null,null).exports;var d=(0,n.Z)({name:"App",components:{HelloWorld:s}},(function(){var t=this._self._c;return t("div",{attrs:{id:"app"}},[t("HelloWorld")],1)}),[],!1,null,null,null).exports;n=a(3822),i.default.use(n.ZP),s=new n.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),n=a(8499),a=a.n(n);i.default.config.productionTip=!1,i.default.use(a()),new i.default({store:s,render:t=>t(d)}).$mount("#app")}},i={};function n(t){var e=i[t];return void 0!==e||(e=i[t]={id:t,loaded:!1,exports:{}},a[t].call(e.exports,e,e.exports,n),e.loaded=!0),e.exports}function s(t,a){var i,s,o,l=a[0],r=a[1],d=a[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);d&&(o=d(n))}for(t&&t(a);c<l.length;c++)s=l[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(o)}n.m=a,n.amdO={},t=[],n.O=function(e,a,i,s){if(!a){for(var o=1/0,l=0;l<t.length;l++){a=t[l][0],i=t[l][1],s=t[l][2];for(var r,d=!0,c=0;c<a.length;c++)(!1&s||s<=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(d=!1,s<o&&(o=s));d&&(t.splice(l--,1),void 0!==(r=i()))&&(e=r)}return e}s=s||0;for(l=t.length;0<l&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[a,i,s]},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},e={143:0},n.O.j=function(t){return 0===e[t]},(o=self.webpackChunkflow_hart=self.webpackChunkflow_hart||[]).forEach(s.bind(null,0)),o.push=s.bind(null,o.push.bind(o));var o=n.O(void 0,[998],(function(){return n(2283)}));n.O(o)}();