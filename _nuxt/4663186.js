(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{405:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(128);var c=n(167),o=n(88);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(c.a)(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},441:function(t,e,n){},442:function(t,e,n){},535:function(t,e,n){"use strict";n(441)},536:function(t,e,n){"use strict";n(442)},635:function(t,e,n){"use strict";n.r(e);n(11);var r=n(405),c=n(10),o=(n(36),n(72),n(71),n(62),n(166),n(164),n(24),n(17)),l={layout:"DashboardLayout",middleware:["isAuthenticated","checkAdmin"],data:function(){return{chats:[],chatMsgs:[],obj:null,msg:"",sin:!1,width:0,show:!1,show1:!1,loading:!1,messages:[],myname:"",inputmessage:"",isRecording:!1,mediaRecorder:null,audioChunks:[],load:!1,load1:!0,load2:!1,page:1}},methods:{_back:function(){this.$router.replace("/")},deletemsg:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.collection("chatMsgs").delete("".concat(t));case 2:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t).width=window.innerWidth,e.next=4,o.a.collection("chats").getList(n.page,10,{sort:"-created",filter:'coordinators.id ?= "'.concat(n.$store.state.cid,'"')});case 4:return c=e.sent,n.chats=c.items,10==n.chats.length&&(n.show1=!0),e.next=9,o.a.collection("cordinator").getOne(n.$store.state.cid);case 9:l=e.sent,n.myname=l.name,n.load1=!1,o.a.collection("chats").subscribe("*",(function(t){if(t.record.coordinators.includes(n.$store.state.cid)&&("create"==t.action&&(n.chats=[t.record].concat(Object(r.a)(n.chats))),"update"==t.action)){var e=n.chats.findIndex((function(a){return a.id==t.record.id}));-1!=e&&(n.chats[e]=t.record)}}),{}),o.a.collection("chatMsgs").subscribe("*",(function(t){n.subChats(n.obj)}),{});case 14:case"end":return e.stop()}}),e)})))()},getChats:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e,null==t){n.next=13;break}return r.obj=t,r.show=!0,r.loading=!0,n.next=7,o.a.collection("chats").update(t.id,{isRead:t.sentby!=r.$store.state.email});case 7:return n.next=9,o.a.collection("chatMsgs").getFullList({sort:"created",filter:'chatid="'.concat(t.id,'"')});case 9:c=n.sent,r.chatMsgs=c,r.loading=!1,r.scrollToBottom();case 13:case"end":return n.stop()}}),n)})))()},subChats:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e,null==t){n.next=7;break}return n.next=4,o.a.collection("chatMsgs").getFullList({sort:"created",filter:'chatid="'.concat(t.id,'"')});case 4:c=n.sent,r.chatMsgs=c;try{r.scrollToBottom()}catch(t){}case 7:case"end":return n.stop()}}),n)})))()},scrollToBottom:function(){var t=this;try{t.$nextTick((function(){var e=t.$refs.chatWindow;e.scrollTop=e.scrollHeight}))}catch(t){}},_view:function(t){window.open(t,"_blank")},_send:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,c,dd,l,d,dt,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,r=function(t){var e=t.getHours(),n=t.getMinutes(),r=e>=12?"PM":"AM";return(e=(e=(e%=12)||12)<10?"0"+e:e)+":"+(n=n<10?"0"+n:n)+" "+r},c=new Date,dd=c.getDate(),l=c.getMonth()+1,d=c.getFullYear(),dt="".concat(dd<10?"0"+dd:dd,"/").concat(l<10?"0"+l:l,"/").concat(d),data={msg:n.msg,msgType:"text",date:dt,time:r(c),sent_by:n.myname,sentby_id:n.$store.state.email,chatid:n.obj.id,sender:"Coordinator"},e.next=10,o.a.collection("chatMsgs").create(data);case 10:return e.next=12,o.a.collection("chats").update(t.obj.id,{lastMsg:n.msg,msgType:"text",sentby:t.$store.state.email,isRead:!1});case 12:n.msg="";case 13:case"end":return e.stop()}}),e)})))()},showFirstTenWords:function(text){var t=text.split(" "),e=t.slice(0,5).join(" ");return e.split(" ").length<t.length&&(e+=" ..."),e},_show:function(){var t=this;return t.width<=999&&0==t.show||!(t.width<=999&&1==t.show)&&(t.width>999||void 0)},_show1:function(){var t=this;return null!=t.obj&&(!(t.width<=999&&0==t.show)&&(t.width<=999&&1==t.show||t.width>999||console.log("first"),!0))},_show2:function(){var t=this;return null==t.obj&&(!(t.width<=999&&0==t.show)&&(t.width<=999&&1==t.show||t.width,!0))},opp:function(){this.isRecording=!this.isRecording,1==this.isRecording?this.startRecording():0==this.isRecording&&this.stopRecording()},startRecording:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!0});case 3:n=e.sent,t.mediaRecorder=new MediaRecorder(n),t.audioChunks=[],t.mediaRecorder.ondataavailable=function(e){t.audioChunks.push(e.data)},t.mediaRecorder.start(),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))()},stopRecording:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,l,d,dt,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.mediaRecorder&&(t.load=!0,t.mediaRecorder.stop(),n=new Date,r=n.getFullYear(),l=n.getMonth()+1,d=n.getDate(),dt="".concat(d<10?"0"+d:d,"/").concat(l<10?"0"+l:l,"/").concat(r),h=function(t){var e=t.getHours(),n=t.getMinutes(),r=e>=12?"PM":"AM";return(e=(e=(e%=12)||12)<10?"0"+e:e)+":"+(n=n<10?"0"+n:n)+" "+r},t.mediaRecorder.onstop=Object(c.a)(regeneratorRuntime.mark((function e(){var r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new Blob(t.audioChunks,{type:"audio/mpeg"}),(c=new FormData).append("audio",r,"audio-message.mp3"),c.append("msgType","audio"),c.append("msg",""),c.append("date",dt),c.append("sent_by",t.myname),c.append("time",h(n)),c.append("sender","Coordinator"),c.append("sentby_id",t.$store.state.email),c.append("chatid",t.obj.id),e.next=14,o.a.collection("chatMsgs").create(c);case 14:return e.next=16,o.a.collection("chats").update(t.obj.id,{lastMsg:"",msgType:"audio",sentby:t.$store.state.email,isRead:!1});case 16:t.mediaRecorder=null,t.load=!1,e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),t.load=!1;case 23:case"end":return e.stop()}}),e,null,[[0,20]])}))),t.mediaRecorder=null);case 1:case"end":return e.stop()}}),e)})))()},_loadMore:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t).page++,n.load2=!0,e.next=5,o.a.collection("chats").getList(n.page,10,{sort:"-created",filter:'coordinators.id ?= "'.concat(n.$store.state.cid,'"')});case 5:c=e.sent,n.chats=[].concat(Object(r.a)(n.chats),Object(r.a)(c.items)),10==c.items.length?n.show1=!0:n.show1=!1,n.load2=!1;case 9:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getData()}},d=(n(535),n(536),n(7)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid"},[e("span",{staticClass:"bg-white mt-2 d-flex",staticStyle:{cursor:"pointer"},on:{click:function(e){return t._back()}}},[e("i",{staticClass:"fa fa-arrow-left text-black",staticStyle:{"font-size":"19px","margin-top":"3px"}}),t._v(" "),e("h4",{staticClass:"ml-3"},[t._v("Chats")])]),t._v(" "),e("div",{staticClass:"container row clearfix"},[t._show()?e("div",{class:{"people-list":!0,"col-md-4":t.width>999,"col-md-12":t.width<=999},attrs:{id:"people-list"}},[0!=t.chats.length?e("ul",{staticClass:"list"},t._l(t.chats,(function(n,i){return e("li",{key:i,staticClass:"clearfix",on:{click:function(e){return t.getChats(n)}}},[e("img",{staticStyle:{width:"55px",height:"55px"},attrs:{src:"https://cdn-icons-png.flaticon.com/512/149/149071.png",alt:"avatar"}}),t._v(" "),e("div",{staticClass:"about"},[e("div",{staticClass:"name text-white text-truncate"},[t._v("\n              "+t._s(n.name)+"  \n              "),0==n.isRead&&n.sentby!=t.$store.state.email?e("i",{staticClass:"fa fa-circle online"}):t._e()]),t._v(" "),e("div",{staticClass:"name text-white",staticStyle:{"font-size":"12px"}},[t._v("\n              "+t._s(n.treatmentID)+", "+t._s(n.patientID)+"\n            ")]),t._v(" "),"text"==n.msgType?e("div",{staticClass:"name text-white"},[t._v("\n              "+t._s(t.showFirstTenWords(n.lastMsg))+"\n            ")]):e("div",{staticClass:"d-flex"},[e("i",{staticClass:"fas fa-file-audio",staticStyle:{color:"white","margin-right":"7px","margin-top":"5px"}}),t._v(" "),e("p",{staticClass:"text-white"},[t._v("Audio File")])])])])})),0):t._e(),t._v(" "),1==t.show1?e("div",{staticStyle:{display:"flex"}},[e("button",{staticClass:"btn btn-white btn-sm d-flex",staticStyle:{width:"100%","justify-content":"center","align-items":"center"},on:{click:function(e){return t._loadMore()}}},[1==t.load2?e("p",{staticClass:"spinner mr-4"}):t._e(),t._v("\n          "+t._s(1==t.load2?"Loading":"Load")+"\n        ")])]):t._e(),t._v(" "),0==t.chats.length&&0==t.load1?e("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"100%"}},[e("h4",{staticClass:"text-white"},[t._v("No Chats")])]):t._e(),t._v(" "),1==t.load1?e("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"100%"}},[e("h4",{staticClass:"text-white"},[t._v("Loading...")])]):t._e()]):t._e(),t._v(" "),t._show1()?e("div",{class:{chat:!0,"col-md-8":t.width>999,"col-md-12":t.width<=999}},[e("div",{staticClass:"chat-header clearfix"},[t.width<=999?e("div",{staticClass:"chat-about"},[e("div",{staticClass:"chat-with mr-4"},[e("i",{staticClass:"fa fa-arrow-left",on:{click:function(e){t.show=!1,t.obj=null}}})])]):t._e(),t._v(" "),e("img",{staticStyle:{width:"45px",height:"45px"},attrs:{src:"https://cdn-icons-png.flaticon.com/512/149/149071.png",alt:"avatar"}}),t._v(" "),e("div",{staticClass:"chat-about"},[e("div",{staticClass:"chat-with"},[t._v(t._s(t.obj.name))]),t._v(" "),e("div",{staticClass:"chat-with"},[t._v("\n            ("+t._s(t.obj.treatmentID)+", "+t._s(t.obj.patientID)+")\n          ")])])]),t._v(" "),e("div",{ref:"chatWindow",staticClass:"chat-history"},[0==t.loading?e("div",t._l(t.chatMsgs,(function(n,i){return e("ul",{key:i},[e("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[i-1>0&&t.chatMsgs[i].date!=t.chatMsgs[i-1].date||i-1==-1?e("span",{staticClass:"text-center",staticStyle:{width:"100%","text-align":"center","font-size":"14px"}},[t._v(t._s(n.date))]):t._e()]),t._v(" "),n.sentby_id==t.$store.state.email?e("li",{staticClass:"clearfix"},[e("div",{staticClass:"message-data align-right"},[e("span",{staticClass:"message-data-time"},[t._v(t._s(n.time))]),t._v("\n                   \n                "),e("p",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.deletemsg(n.id)}}},[e("i",{staticClass:"el-icon-delete"})])]),t._v(" "),e("div",{staticClass:"message other-message float-right"},["text"==n.msgType?e("span",[t._v("\n                  "+t._s(n.msg)+"\n                  "),e("p",{staticStyle:{"font-size":"12px"}},[t._v(t._s(n.sent_by))])]):e("div",[e("audio",{attrs:{src:"https://api.kktel.org/api/files/ejiz05ki7gmq8ns/".concat(n.id,"/").concat(n.audio)||!1,controls:""}}),t._v(" "),e("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(n.sent_by))])])])]):e("li",[e("div",{staticClass:"message-data"},[e("span",{staticClass:"message-data-time"},[t._v(t._s(n.time))]),t._v(" "),e("p",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.deletemsg(n.id)}}},[e("i",{staticClass:"el-icon-delete"})])]),t._v(" "),e("div",{staticClass:"message my-message"},["text"==n.msgType?e("span",[t._v("\n                  "+t._s(n.msg)+"\n                  "),e("p",{staticStyle:{"font-size":"12px"}},[t._v(t._s(n.sent_by))])]):e("div",[e("audio",{attrs:{src:"https://api.kktel.org/api/files/ejiz05ki7gmq8ns/".concat(n.id,"/").concat(n.audio)||!1,controls:""}}),t._v(" "),e("p",{staticStyle:{"font-size":"12px"}},[t._v(t._s(n.sent_by))])])])])])})),0):e("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"100%"}},[e("h3",[t._v("Loading...")])])]),t._v(" "),e("div",{staticClass:"chat-message clearfix"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{name:"message-to-send",id:"message-to-send",placeholder:"Type your message",rows:"3"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),t._v(" "),e("div",{staticClass:"d-flex",staticStyle:{"justify-content":"space-between"}},[e("div",{staticClass:"d-flex"},[e("i",{staticClass:"icon fa fa-microphone clickable mt-3",class:{"recording-active":t.isRecording},staticStyle:{cursor:"pointer"},attrs:{"aria-hidden":"true",disabled:t.load},on:{click:function(e){return t.opp()}}}),t._v(" "),t.isRecording?e("span",{staticClass:"recording-indicator"},[e("img",{staticStyle:{"margin-left":"1.5rem",width:"2rem",height:"1rem","margin-top":"1rem"},attrs:{src:"img/assets/tenor.gif"}})]):t._e(),t._v(" "),1==t.load?e("p",{staticClass:"spinner",staticStyle:{"margin-top":"1rem"}}):t._e()]),t._v(" "),e("button",{attrs:{type:"button"},on:{click:function(e){return t._send()}}},[t._v("Send")])])])]):t._e(),t._v(" "),t._show2()?e("div",{class:{chat:!0,"col-md-8":t.width>999,"col-md-12":t.width<=999},staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"770px"}},[e("h4",[t._v("Chats Empty")])]):t._e()])])}),[],!1,null,"b00c9130",null);e.default=component.exports}}]);