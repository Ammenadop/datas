(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{467:function(t,e,n){},468:function(t,e,n){},570:function(t,e,n){"use strict";n(467)},571:function(t,e,n){"use strict";n(468)},649:function(t,e,n){"use strict";n.r(e);n(20),n(44),n(243),n(87);var r,o=n(165),l=n.n(o),c=n(10),d=n(9),f=(n(421),n(422)),h=n.n(f),m=(n(423),n(424)),v=n.n(m),w=(n(406),n(407)),_=n.n(w),y=(n(408),n(409)),x=n.n(y),C=(n(36),n(11),n(27),n(71),n(62),n(24),n(72),n(166),n(164),n(17)),k=n(115),D=n(397),j={layout:"DashboardLayout",middleware:["isAuthenticated","checkAdmin"],components:(r={BasePagination:D.a,RouteBreadCrumb:k.a},Object(d.a)(r,x.a.name,x.a),Object(d.a)(r,_.a.name,_.a),Object(d.a)(r,v.a.name,v.a),Object(d.a)(r,h.a.name,h.a),Object(d.a)(r,"Modal",D.d),r),computed:{queriedData:function(){var t=this;if(!this.searchQuery)return this.pagination.total=this.tableData.length,this.pagedData;var e=this.tableData.filter((function(e){var n=!1;return e.name.toLowerCase().includes(t.searchQuery.toLowerCase())&&(n=!0),n}));return this.pagination.total=e.length,e.slice(this.from,this.to)},to:function(){var t=this.from+this.pagination.perPage;return this.total<t&&(t=this.total),t},from:function(){return this.pagination.perPage*(this.pagination.currentPage-1)},total:function(){return this.pagination.total=this.tableData.length,this.tableData.length}},data:function(){return{pagination:{perPage:10,currentPage:1,perPageOptions:[10],total:0},propsToSearch:["name"],searchQuery:"",searchedData:[],fuseSearch:null,tableColumns:[{prop:"name",label:"Name",minWidth:200,sortable:!0},{prop:"phone",label:"Phone",minWidth:200,sortable:!0},{prop:"patientID",label:"patientID",minWidth:200,sortable:!0},{prop:"date",label:"Date",minWidth:200,sortable:!0}],tableData:[],selectedRows:[],keys:0,currentPage:1,dialogVisible:!1,obj:null}},methods:{_back:function(){this.$router.replace("/")},getData:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,C.a.collection("Tasks").getFullList({sort:"-created",filter:'coordinator.id ?= "'.concat(C.a.authStore.model.id,'" && resolve=false')});case 3:return n.tableData=e.sent,e.next=6,C.a.collection("Tasks").subscribe("*",(function(t){t.record.coordinator.includes(C.a.authStore.model.id)&&n.reflx(t)}));case 6:case"end":return e.stop()}}),e)})))()},reflx:function(t){var e=this,n=e.tableData;e.tableData=[];var r=n.findIndex((function(a){return a.id==t.record.id}));if(e.keys++,-1!=r&&"update"==t.action&&1==t.record.resolve)n=n.filter((function(a){return a.id!=t.record.id}));else{if("create"==t.action){var o=t.record;n.unshift(o)}"delete"==t.action&&(n=n.filter((function(a){return a.id!=t.record.id})))}e.tableData=n},_view:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.obj=t,e.dialogVisible=!0;case 2:case"end":return n.stop()}}),n)})))()},_showFirst20:function(text){var t=(new DOMParser).parseFromString(text,"text/html").body.innerText.split(" "),e=t.slice(0,15).join(" ");return e.split(" ").length<t.length&&(e+=" ..."),e},_copy:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(t);case 2:l()({showClose:!0,message:"patientID copied Successfully!",type:"success"});case 3:case"end":return e.stop()}}),e)})))()},_resolve:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.collection("Tasks").update(t.obj.id,{resolve:!0}).then((function(){t.obj=null,t.dialogVisible=!1,l()({showClose:!0,message:"Updated Successfully!",type:"success"})})).catch((function(){l()({showClose:!0,message:"Something went wrong!",type:"error"})}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getData()}},P=(n(570),n(571),n(7)),component=Object(P.a)(j,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("base-header",{staticClass:"pb-6"},[e("div",{staticClass:"row align-items-center py-1"},[e("div",{staticClass:"col-lg-12 d-flex"},[e("button",{staticClass:"btn btn-sm btm-primary",attrs:{type:"button"},on:{click:function(e){return t._back()}}},[e("i",{staticClass:"fa fa-arrow-left text-white",staticStyle:{"font-size":"19px"}})]),t._v(" "),e("h6",{staticClass:"h2 text-white mt-1"},[t._v("Tasks")])])])]),t._v(" "),e("div",{key:t.keys,staticClass:"container-fluid mt--5"},[e("div",[e("card",{staticClass:"no-border-card",attrs:{"body-classes":"px-0 pb-1","footer-classes":"pb-2"}},[e("div",[e("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap mb-2"},[e("el-select",{staticClass:"select-primary pagination-select col-md-2 mt-1",attrs:{placeholder:"Per page"},model:{value:t.pagination.perPage,callback:function(e){t.$set(t.pagination,"perPage",e)},expression:"pagination.perPage"}},t._l(t.pagination.perPageOptions,(function(t){return e("el-option",{key:t,staticClass:"select-primary",attrs:{label:t,value:t}})})),1)],1),t._v(" "),e("el-table",{attrs:{data:t.tableData,"row-key":"id","header-row-class-name":"thead-light"}},[e("el-table-column",{attrs:{"min-width":"180px",align:"right",label:"Action"},scopedSlots:t._u([{key:"default",fn:function(n){n.$index;var r=n.row;return e("div",{staticClass:"d-flex"},[e("base-button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"success",size:"sm",icon:""},nativeOn:{click:function(e){return t._view(r)}}},[t._v("\n                  View\n                ")])],1)}}])}),t._v(" "),e("el-table-column",{attrs:{"min-width":"180px",align:"right",label:"Status"},scopedSlots:t._u([{key:"default",fn:function(n){n.$index;var r=n.row;return e("div",{staticClass:"d-flex"},[1==r.resolve?e("base-button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"success",size:"sm",icon:""}},[t._v("\n                  Resolved\n                ")]):e("base-button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"success",size:"sm",icon:""}},[t._v("\n                  Pending\n                ")])],1)}}])}),t._v(" "),t._l(t.tableColumns,(function(n){return e("el-table-column",t._b({key:n.label},"el-table-column",n,!1))})),t._v(" "),e("el-table-column",{attrs:{"min-width":"300px",align:"left",label:"Description"},scopedSlots:t._u([{key:"default",fn:function(n){n.$index;var r=n.row;return e("div",{staticClass:"d-flex"},[t._v("\n                "+t._s(t._showFirst20(r.desc))+"\n              ")])}}])})],2)],1),t._v(" "),e("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap",attrs:{slot:"footer"},slot:"footer"},[e("div",{},[e("p",{staticClass:"card-category"},[t._v("\n              Showing "+t._s(t.from+1)+" to "+t._s(t.to)+" of "+t._s(t.total)+" entries\n\n              "),t.selectedRows.length?e("span",[t._v("\n                    "+t._s(t.selectedRows.length)+" rows selected\n              ")]):t._e()])]),t._v(" "),e("base-pagination",{staticClass:"pagination-no-border",attrs:{"per-page":t.pagination.perPage,total:t.total},model:{value:t.pagination.currentPage,callback:function(e){t.$set(t.pagination,"currentPage",e)},expression:"pagination.currentPage"}})],1)])],1)]),t._v(" "),null!=t.obj?e("modal",{attrs:{show:t.dialogVisible,size:"lg"},on:{"update:show":function(e){t.dialogVisible=e}}},[e("h6",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v("Detail")]),t._v(" "),e("p",{staticClass:"mt--4"},[t._v(t._s(t.obj.desc))]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("button",{staticClass:"btn btn-primary mt-5",attrs:{type:"button"},on:{click:function(e){return t._copy(t.obj.patientID)}}},[t._v("\n        Copy Patient ID\n      ")]),t._v(" "),e("button",{staticClass:"btn btn-primary mt-5",attrs:{type:"button"},on:{click:function(e){return t._resolve()}}},[t._v("\n        Mark as Resolved\n      ")])])]):t._e()],1)}),[],!1,null,"0b00e6d0",null);e.default=component.exports}}]);