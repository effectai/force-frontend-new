(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1255:function(t,e,n){var content=n(1258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("4448f946",content,!0,{sourceMap:!1})},1256:function(t,e,n){"use strict";var r=n(17),o=n(5),c=n(12),l=n(90),d=n(604),f=n(603),m=n(14),h=o.RangeError,v=o.String,_=Math.floor,k=c(f),w=c("".slice),x=c(1..toFixed),y=function(t,e,n){return 0===e?n:e%2==1?y(t,e-1,n*t):y(t*t,e/2,n)},C=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=_(r/1e7)},T=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=_(n/t),n=n%t*1e7},R=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=v(data[t]);s=""===s?e:s+k("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:m((function(){return"0.000"!==x(8e-5,3)||"1"!==x(.9,0)||"1.25"!==x(1.255,2)||"1000000000000000128"!==x(0xde0b6b3a7640080,0)}))||!m((function(){x({})}))},{toFixed:function(t){var e,n,r,o,c=d(this),f=l(t),data=[0,0,0,0,0,0],m="",_="0";if(f<0||f>20)throw h("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return v(c);if(c<0&&(m="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*y(2,69,1))-69)<0?c*y(2,-e,1):c/y(2,e,1),n*=4503599627370496,(e=52-e)>0){for(C(data,0,n),r=f;r>=7;)C(data,1e7,0),r-=7;for(C(data,y(10,r,1),0),r=e-1;r>=23;)T(data,1<<23),r-=23;T(data,1<<r),C(data,1,1),T(data,2),_=R(data)}else C(data,0,n),C(data,1<<-e,0),_=R(data)+k("0",f);return _=f>0?m+((o=_.length)<=f?"0."+k("0",f-o)+_:w(_,0,o-f)+"."+w(_,o-f)):m+_}})},1257:function(t,e,n){"use strict";n(1255)},1258:function(t,e,n){var r=n(57)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),r.push([t.i,".template-wrapper[data-v-16df79ba]{width:100%;padding:5px}#mediaFrame[data-v-16df79ba]{width:100%;border:none;border-radius:14px}",""]),t.exports=r},1260:function(t,e,n){"use strict";n(25),n(69);var r={props:{html:{type:String,default:null}},data:function(){return{loading:!0}},mounted:function(){document.addEventListener("keydown",this.sendKeyEvents)},created:function(){window.addEventListener("message",this.communicateWithIframe)},beforeDestroy:function(){window.removeEventListener("message",this.communicateWithIframe),document.removeEventListener("keydown",this.sendKeyEvents)},methods:{mediaFrameLoaded:function(){this.loading=!1,this.$emit("templateLoaded")},sendKeyEvents:function(t){var e=document.getElementById("mediaFrame");e&&e.contentWindow.postMessage({task:"key",key:t.key},"*")},communicateWithIframe:function(t){var data=t.data;switch(data.task){case"setHeight":document.getElementById("mediaFrame").height=data.height+"px";break;case"submit":this.$emit("submit",data.values);break;case"results":document.getElementById("mediaFrame").contentWindow.postMessage(data,"*")}}}},o=(n(1257),n(23)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"template-wrapper"},[t.loading?n("div",{staticClass:"loading-text subtitle"},[t._v("\n    Loading\n  ")]):t._e(),t._v(" "),n("iframe",{ref:"mediaFrame",attrs:{id:"mediaFrame",srcdoc:t.html,name:"mediaFrame",sandbox:"allow-scripts allow-modals allow-downloads allow-forms allow-popups allow-pointer-lock allow-same-origin",allow:"geolocation; microphone; camera; autoplay; fullscreen",allowFullScreen:""},on:{load:t.mediaFrameLoaded}})])}),[],!1,null,"16df79ba",null);e.a=component.exports},1261:function(t,e,n){t.exports=n.p+"img/effect-force-icon.828a6c5.png"},1262:function(t,e,n){"use strict";var r=n(1275),o=n.n(r),c={name:"InstructionsModal",props:{campaign:{type:Object,required:!0,default:function(){return{}}},info:{type:Object,required:!0,default:function(){return{}}},show:{type:Boolean,required:!1,default:!1},functional:{type:Boolean,required:!1,default:!0},readonly:{type:Boolean,required:!1,default:!1}},data:function(){return{tac:!1}},computed:{showModal:{get:function(){return this.show},set:function(t){this.$emit("clicked",t)}}},methods:{onCancel:function(){this.functional&&(this.showModal=!1)},onClick:function(){this.functional&&this.$parent.joinCampaign()},sanitizeHtmlCustom:function(t){return o()(t,{allowedTags:["h1","h2","h3","h4","h5","h6","blockquote","p","a","ul","ol","nl","li","b","i","strong","em","strike","code","hr","br","div","table","thead","caption","tbody","tr","th","td","pre","iframe","img","span","label"],allowedAttributes:{a:["href","name","target","class"],img:["src","alt"],iframe:["src"],"*":["style"]}})}}},l=n(23),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.campaign&&t.info?n("div",{staticClass:"modal",class:{"is-active":t.showModal},style:{position:t.functional?"fixed":"relative",padding:t.functional?"initial":"10px",zIndex:t.functional?"40":"1"}},[n("div",{staticClass:"modal-background"}),t._v(" "),n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("\n        "+t._s(t.info.title)+"\n      ")]),t._v(" "),n("button",{staticClass:"delete",attrs:{"aria-label":"close",disabled:!t.functional},on:{click:function(e){return e.preventDefault(),t.onCancel()}}})]),t._v(" "),n("section",{staticClass:"modal-card-body"},[t.campaign&&t.info?n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.sanitizeHtmlCustom(t.$md.render(t.info.instructions)))}}):n("p",[t._v("\n        ...\n      ")]),t._v(" "),n("label",{staticClass:"checkbox"},[t.readonly?n("input",{attrs:{checked:"",type:"checkbox",disabled:""}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.tac,expression:"tac"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.tac)?t._i(t.tac,null)>-1:t.tac},on:{change:function(e){var n=t.tac,r=e.target,o=!!r.checked;if(Array.isArray(n)){var c=t._i(n,null);r.checked?c<0&&(t.tac=n.concat([null])):c>-1&&(t.tac=n.slice(0,c).concat(n.slice(c+1)))}else t.tac=o}}}),t._v("\n        I agree to the "),n("a",{attrs:{href:"/download/tac.pdf",target:"_blank"}},[t._v("terms and conditions")])])]),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[t.readonly?n("button",{staticClass:"button is-primary",attrs:{disabled:!t.functional},on:{click:function(e){return e.preventDefault(),t.onCancel()}}},[t._v("\n        OK\n      ")]):[n("button",{staticClass:"button is-primary has-tooltip has-tooltip-arrow",attrs:{"data-tooltip":t.tac?"No additional\nqualifications needed":"agree to the terms and\nconditions to qualify",disabled:!(t.tac&&t.campaign&&t.info&&t.functional)},on:{click:function(e){return e.preventDefault(),t.onClick()}}},[t._v("\n          Qualify\n        ")]),t._v(" "),n("button",{staticClass:"button",attrs:{disabled:!t.functional},on:{click:function(e){return e.preventDefault(),t.onCancel()}}},[t._v("\n          Cancel\n        ")])]],2)])]):t._e()}),[],!1,null,"40d012a4",null);e.a=component.exports},1264:function(t,e){},1265:function(t,e){},1268:function(t,e,n){var map={"./effect-captions-icon.png":1271,"./effect-dao-icon.png":1272,"./effect-force-icon.png":1261,"./effect-socials-icon.png":1273,"./effect-translate-icon.png":1274};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=1268},1269:function(t,e){},1270:function(t,e){},1271:function(t,e,n){t.exports=n.p+"img/effect-captions-icon.d32e1fd.png"},1272:function(t,e,n){t.exports=n.p+"img/effect-dao-icon.8a49264.png"},1273:function(t,e,n){t.exports=n.p+"img/effect-socials-icon.113948d.png"},1274:function(t,e,n){t.exports=n.p+"img/effect-translate-icon.a76baca.png"},1278:function(t,e){},1279:function(t,e,n){"use strict";var r=n(3);n(33),n(135),n(1256),n(79),n(25),n(89),n(71),n(92),n(70),n(51),n(50),n(91),n(93),n(69);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){d=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l=n(376),d={props:{batch:{type:Object,default:null}},data:function(){return{loading:!1,error:null,now:0}},mounted:function(){this.updateNow(),setInterval(this.updateNow,1e3),this.makeReservation()},methods:{updateNow:function(){this.now=parseInt((Date.now()/1e3).toFixed(0))},makeReservation:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,c,d,f,m,h,v,sub,_,k,w,x,y,C;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.$blockchain.getSubmissionsAndReservationsForBatch(t.batch.batch_id);case 4:return n=e.sent,c=n.filter((function(t){return!t.data||!t.data.length})),d=n.filter((function(s){return s.data||s.data.length})),e.next=9,t.getReservationForUser(c);case 9:if(null!==(f=e.sent).reservation||!1!==f.isReleased){e.next=40;break}m=t.batch.tasks_done,h=o(d),e.prev=13,h.s();case 15:if((v=h.n()).done){e.next=26;break}if(sub=v.value,_=[],sub.account_id!==t.$auth.user.vAccountRows[0].id){e.next=23;break}return e.next=21,t.$blockchain.getTaskIndexFromLeaf(t.batch.campaign_id,t.batch.id,sub.leaf_hash,t.batch.tasks);case 21:k=e.sent,_.push(k);case 23:_.length>0&&Math.max(_)>=t.batch.tasks_done&&(m=Math.max(_)+1);case 24:e.next=15;break;case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(13),h.e(e.t0);case 31:return e.prev=31,h.f(),e.finish(31);case 34:return e.next=36,t.$blockchain.reserveTask(t.batch.id,m,t.batch.campaign_id,t.batch.tasks);case 36:return w=e.sent,t.$store.dispatch("transaction/addTransaction",w),e.next=40,l(Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$blockchain.getTaskReservationsForBatch(t.batch.batch_id);case 2:return n=e.sent,e.next=5,t.getReservationForUser(n);case 5:if((f=e.sent).reservation){e.next=8;break}throw new Error("Reservation not found");case 8:case"end":return e.stop()}}),e)}))),{retries:5,onRetry:function(t,e){console.log("attempt",e,t)}});case 40:if(!f.reservation||!1!==f.isReleased||!0!==f.isExpired){e.next=47;break}return e.next=43,t.$blockchain.claimExpiredTask(f.reservation.id);case 43:return x=e.sent,t.$store.dispatch("transaction/addTransaction",x),e.next=47,l(Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$blockchain.getTaskReservationsForBatch(t.batch.batch_id);case 2:return n=e.sent,e.next=5,t.getReservationForUser(n);case 5:if((f=e.sent).reservation){e.next=8;break}throw new Error("Reservation not found");case 8:case"end":return e.stop()}}),e)}))),{retries:5,onRetry:function(t,e){console.log("attempt",e,t)}});case 47:if(!f.reservation||!0!==f.isReleased||!1!==f.isExpired){e.next=54;break}return e.next=50,t.$blockchain.reclaimTask(f.reservation.id);case 50:return y=e.sent,t.$store.dispatch("transaction/addTransaction",y),e.next=54,l(Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$blockchain.getTaskReservationsForBatch(t.batch.batch_id);case 2:return n=e.sent,e.next=5,t.getReservationForUser(n);case 5:if((f=e.sent).reservation){e.next=8;break}throw new Error("Reservation not found");case 8:case"end":return e.stop()}}),e)}))),{retries:5,onRetry:function(t,e){console.log("attempt",e,t)}});case 54:if(!f.reservation||!1!==f.isExpired||!1!==f.isReleased){e.next=61;break}return e.next=57,t.$blockchain.getTaskIndexFromLeaf(t.batch.campaign_id,t.batch.id,f.reservation.leaf_hash,t.batch.tasks);case 57:C=e.sent,t.$router.push("/campaigns/"+t.batch.campaign_id+"/"+t.batch.batch_id+"/"+C+"?submissionId="+f.reservation.id),e.next=62;break;case 61:t.$router.push("/campaigns/"+t.batch.campaign_id);case 62:t.loading=!1,e.next=69;break;case 65:e.prev=65,e.t1=e.catch(0),t.loading=!1,t.$blockchain.handleError(e.t1);case 69:case"end":return e.stop()}}),e,null,[[0,65],[13,28,31,34]])})))()},getReservationForUser:function(t){var e,n,r,c,l=o(t);try{for(l.s();!(c=l.n()).done;){var d=c.value;if(!(d.account_id!==this.$auth.user.vAccountRows[0].id||parseInt(this.batch.batch_id)!==parseInt(d.batch_id)||d.data&&d.data.length)){e=d,n=!1,r=!1;break}if(!(null!==d.account_id||parseInt(this.batch.batch_id)!==parseInt(d.batch_id)||d.data&&d.data.length)){e=d,n=!0,r=!1;break}!(null!==d.account_id&&parseInt(new Date(new Date(d.submitted_on)+"UTC").getTime()/1e3)+parseInt(this.$blockchain.sdk.force.config.release_task_delay_sec.toFixed(0))<this.now&&parseInt(this.batch.batch_id)===parseInt(d.batch_id))||d.data&&d.data.length?(e=null,n=!1,r=!1):(e=d,n=!1,r=!0)}}catch(t){l.e(t)}finally{l.f()}return 0===t.length&&(e=null,n=!1,r=!1),{reservation:e,isReleased:n,isExpired:r}}}},f=n(23),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[t.loading?r("div",{staticClass:"loader-wrapper is-active"},[r("img",{attrs:{src:n(374)}}),t._v(" "),r("br"),r("span",{staticClass:"loading-text"},[t._v("Making reservation")])]):t._e()])}),[],!1,null,null,null);e.a=component.exports},1331:function(t,e,n){var content=n(1428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("f75fd34c",content,!0,{sourceMap:!1})},1427:function(t,e,n){"use strict";n(1331)},1428:function(t,e,n){var r=n(57)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),r.push([t.i,".box-title[data-v-0de55b3d]{text-align:center;border-bottom:2px solid #cdd4e6;padding-bottom:31px;margin:10px 0 15px}.progress[data-v-0de55b3d]::-webkit-progress-value{-webkit-transition:width .5s ease;transition:width .5s ease}.tabs li[data-v-0de55b3d]{font-weight:500}.tabs li a[data-v-0de55b3d]{padding-left:35px;padding-right:35px}.tabs li.is-active a[data-v-0de55b3d]{border-bottom-width:2px;border-bottom-color:#1977f3;color:#151a1f;font-weight:600}.information-block[data-v-0de55b3d]{border:1px solid #e8eeff;border-radius:8px}.information-block .block[data-v-0de55b3d]{margin-bottom:10px}.information-block .information-header[data-v-0de55b3d]{background:#f7fbff}",""]),t.exports=r},1472:function(t,e,n){"use strict";n.r(e);n(88),n(50),n(79),n(106),n(59),n(107),n(89),n(71),n(92),n(70),n(51),n(91),n(93),n(69);var r=n(3),o=n(39),c=(n(33),n(186),n(25),n(1256),n(185)),l=n(136),d=n(1260),f=n(1279),m=n(1262),h={name:"BatchModal",props:{show:{type:Boolean,required:!1,default:!0}},data:function(){return{id:parseInt(this.$route.params.id)}},computed:{showModal:{get:function(){return this.show},set:function(){this.$emit("cancelled")}}},methods:{onCancel:function(){this.showModal=!1}}},v=n(23),_=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",class:{"is-active":t.showModal}},[n("div",{staticClass:"modal-background"}),t._v(" "),n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("\n        Add first tasks\n      ")]),t._v(" "),n("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return e.preventDefault(),t.onCancel()}}})]),t._v(" "),t._m(0),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[n("div",{staticClass:"buttons is-centered mx-auto"},[n("nuxt-link",{staticClass:"button is-primary",attrs:{to:"/campaigns/"+t.id+"/new"}},[n("span",{staticClass:"icon"},[t._v("\n            +\n          ")]),t._v(" "),n("span",[t._v("Add Tasks")])]),t._v(" "),n("button",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.onCancel()}}},[t._v("\n          Cancel\n        ")])],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"modal-card-body"},[n("div",{staticClass:"content"},[t._v("\n        It looks like you haven't added any tasks yet... Let's add some!\n      ")])])}],!1,null,null,null).exports;function k(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={components:{TemplateMedia:d.a,ReserveTask:f.a,InstructionsModal:m.a,BatchModal:_},middleware:["auth"],data:function(){return{ipfsExplorer:"https://ipfs.effect.ai",id:parseInt(this.$route.params.id),accountId:this.$auth.user.vAccountRows[0].id,body:"description",userJoined:null,loading:!1,joinCampaignPopup:!1,showReserveTask:!1,reserveInBatch:null,userReservation:null,cancelledBatchesPopup:!1,showBatchesPopup:!1,waitingOnTransaction:!1,categories:["translate","captions","socials","dao"]}},computed:y(y(y({},Object(c.b)({batchByCampaignId:"campaign/batchByCampaignId"})),Object(c.c)({batches:function(t){return t.campaign.batches},campaigns:function(t){return t.campaign.campaigns},batchesLoading:function(t){return t.campaign.loadingBatch&&!t.campaign.allBatchesLoaded}})),{},{campaignBatches:function(){return this.batchByCampaignId(this.id)},campaign:function(){var t=this;if(this.campaigns)return this.campaigns.find((function(e){return e.id===t.id}))}}),mounted:function(){},created:function(){this.checkUserCampaign(),this.getCampaign(),this.getBatches()},methods:{reserveTask:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.prepareReserveTask();case 2:t.showReserveTask=!0;case 3:case"end":return e.stop()}}),e)})))()},prepareReserveTask:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.campaignBatches.find((function(b){return b.num_tasks-b.tasks_done>0}))){e.next=4;break}return console.error("Could not find batch with active tasks"),e.abrupt("return");case 4:return e.next=6,t.$store.dispatch("campaign/getBatchTasks",n);case 6:t.reserveInBatch=n;case 7:case"end":return e.stop()}}),e)})))()},goToTask:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.campaignBatches.find((function(b){return parseInt(b.batch_id)===parseInt(t.userReservation.batch_id)})),e.next=3,t.$store.dispatch("campaign/getBatchTasks",n);case 3:t.reserveInBatch=n,t.showReserveTask=!0;case 5:case"end":return e.stop()}}),e)})))()},renderTemplate:function(template){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new l.Template(template,t,e).render()},campaignModalChange:function(t){this.joinCampaignPopup=t},cancelBatchModal:function(){this.cancelledBatchesPopup=!0},joinCampaign:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.prepareReserveTask();case 4:return t.joinCampaignPopup=!1,e.next=7,t.$blockchain.joinCampaignAndReserveTask(t.id,t.reserveInBatch.id,t.reserveInBatch.tasks_done,t.reserveInBatch.tasks);case 7:if(data=e.sent,t.$store.dispatch("transaction/addTransaction",data),!data){e.next=17;break}return t.loading=!0,t.waitingOnTransaction=!0,e.next=14,t.$blockchain.waitForTransaction(data);case 14:return e.next=16,t.checkUserCampaign();case 16:t.userJoined&&t.reserveTask();case 17:t.loading=!1,t.waitingOnTransaction=!1,t.joinCampaignPopup=!1,e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),t.$blockchain.handleError(e.t0);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})))()},getBatches:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("campaign/getBatches");case 2:t.campaignBatches.length||(t.userReservation=!1),n=k(t.campaignBatches),e.prev=4,n.s();case 6:if((r=n.n()).done){e.next=15;break}return o=r.value,e.next=10,t.$blockchain.getTaskReservationsForBatch(o.batch_id);case 10:c=e.sent,(l=c.find((function(e){return e.account_id===t.$auth.user.vAccountRows[0].id&&parseInt(new Date(new Date(e.submitted_on)+"UTC").getTime()/1e3)+parseInt(t.$blockchain.sdk.force.config.release_task_delay_sec.toFixed(0))>parseInt((Date.now()/1e3).toFixed(0))})))&&(t.userReservation=l);case 13:e.next=6;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),n.e(e.t0);case 20:return e.prev=20,n.f(),e.finish(20);case 23:0===t.campaignBatches.length&&(t.showBatchesPopup=!0);case 24:case"end":return e.stop()}}),e,null,[[4,17,20,23]])})))()},checkUserCampaign:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$blockchain.getCampaignJoins(t.id);case 4:data=e.sent,t.userJoined=data.rows.length>0,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.$blockchain.handleError(e.t0);case 11:t.loading=!1;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()},submitTask:function(t){console.log("Task submitted!",t)},getCampaign:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("campaign/getCampaign",t.id);case 2:case"end":return e.stop()}}),e)})))()}}},T=C,R=(n(1427),Object(v.a)(T,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section is-max-widescreen"},[t.campaign&&t.campaign.info?r("instructions-modal",{attrs:{show:t.joinCampaignPopup,campaign:t.campaign,info:t.campaign.info},on:{clicked:t.campaignModalChange}}):t._e(),t._v(" "),t.showReserveTask?r("reserve-task",{attrs:{batch:t.reserveInBatch}}):t._e(),t._v(" "),t.campaign&&t.campaignBatches?r("batch-modal",{attrs:{show:t.$auth.user.accountName===t.campaign.owner[1]&&t.showBatchesPopup&&!t.cancelledBatchesPopup},on:{cancelled:t.cancelBatchModal}}):t._e(),t._v(" "),r("div",{staticClass:"container"},[r("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[r("ul",[r("li",[r("nuxt-link",{attrs:{to:"/"}},[t._v("\n            Tasks\n          ")])],1),t._v(" "),r("li",{staticClass:"is-active"},[r("nuxt-link",{attrs:{to:"/campaigns/"+t.id,"aria-current":"page"}},[t._v("\n            Task "+t._s(t.id)+"\n          ")])],1)])]),t._v(" "),t.loading?r("div",{staticClass:"loader-wrapper is-active"},[r("img",{attrs:{src:n(374)}}),t._v(" "),r("br"),t._v(" "),t.waitingOnTransaction?r("span",{staticClass:"loading-text subtitle"},[t._v("Waiting for the transaction to complete")]):r("span",{staticClass:"loading-text subtitle"},[t._v("Please sign the transaction")])]):t._e(),t._v(" "),t.campaign?r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-three-fifths"},[r("div",{staticClass:"is-flex is-align-items-center mb-6"},[t.campaign?r("p",{staticClass:"image has-radius mr-4",staticStyle:{width:"52px",height:"52px"}},[t.campaign.info&&t.campaign.info.image?r("img",{attrs:{src:t.campaign.info.image.Hash?t.ipfsExplorer+"/ipfs/"+t.campaign.info.image.Hash:t.campaign.info.image}}):t.campaign.info&&t.campaign.info.category&&t.categories.includes(t.campaign.info.category)?r("img",{attrs:{src:n(1268)("./effect-"+t.campaign.info.category+"-icon.png")}}):r("img",{attrs:{src:n(1261),alt:"campaign title"}})]):t._e(),t._v(" "),r("div",{staticClass:"title has-text-weight-bold"},[r("span",[t._v("#"+t._s(t.id)+" ")]),t._v(" "),t.campaign.info?r("span",[t._v(t._s(t.campaign.info.title))]):null!==t.campaign.info?r("span",{staticClass:"loading-text"},[t._v("Loading")]):r("span",{staticClass:"has-text-danger-dark"},[t._v("Could not load campaign info")])])]),t._v(" "),r("div",{staticClass:"tabs campaign-tabs"},[r("ul",[r("li",{class:{"is-active":"description"===t.body}},[r("a",{on:{click:function(e){e.preventDefault(),t.body="description"}}},[t._v("Tasks")])]),t._v(" "),r("li",{class:{"is-active":"instruction"===t.body}},[r("a",{on:{click:function(e){e.preventDefault(),t.body="instruction"}}},[t._v("Instructions")])]),t._v(" "),r("li",{class:{"is-active":"preview"===t.body}},[r("a",{on:{click:function(e){e.preventDefault(),t.body="preview"}}},[t._v("Preview")])])])]),t._v(" "),"description"===t.body?r("div",{staticClass:"block"},[t.campaign.info?r("p",[t._v("\n            "+t._s(t.campaign.info.description)+"\n          ")]):r("p",[t._v("\n            ...\n          ")]),t._v(" "),r("div",{staticClass:"mt-5"},[r("div",{staticClass:"is-flex is-justify-content-space-between is-align-items-center"},[r("h4",{staticClass:"is-size-6 mb-0 has-text-weight-bold"},[t._v("\n                Tasks\n              ")]),t._v(" "),t.$auth.user.accountName===t.campaign.owner[1]?r("nuxt-link",{staticClass:"button is-primary is-pulled-right no-float-mobile has-margin-bottom-mobile",attrs:{to:"/campaigns/"+t.id+"/new"}},[r("span",{staticClass:"icon"},[t._v("\n                  +\n                ")]),t._v(" "),r("span",[t._v("Add Tasks")])]):t._e()],1),t._v(" "),r("hr",{staticClass:"mt-2 mb-5"}),t._v(" "),r("div",{staticClass:"block mt-5"},[t.campaignBatches?r("div",t._l(t.campaignBatches.slice().reverse(),(function(e){return r("nuxt-link",{key:e.id,staticClass:"box p-4",class:{"is-disabled":!1},attrs:{to:"/campaigns/"+e.campaign_id+"/"+e.batch_id}},[r("div",{staticClass:"columns is-vcentered is-multiline is-mobile"},[r("div",{staticClass:"column"},[r("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n                        Batch\n                      ")]),t._v(" "),r("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[t._v("\n                        #"),t.campaign?r("span",[t._v(t._s(t.campaign.id)+".")]):t._e(),t._v(t._s(e.id)+"\n                      ")])]),t._v(" "),r("div",{staticClass:"column"},[r("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n                        Status\n                      ")]),t._v(" "),e?r("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[t._v("\n                        "+t._s(e.status)+"\n                      ")]):t._e()]),t._v(" "),r("div",{staticClass:"column"},[e.num_tasks-e.tasks_done==0?r("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n                        "+t._s(e.tasks_done)+" Task"),e.tasks_done>1?r("span",[t._v("s")]):t._e(),t._v(" "),r("small",[t._v("("),r("b",{staticClass:"has-text-success"},[t._v("Done")]),t._v(")")])]):"Active"===e.status&&e.num_tasks-e.tasks_done>0?r("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n                        Tasks "),r("small",[t._v("("),r("b",[t._v(t._s(e.num_tasks-e.tasks_done)+" / "+t._s(e.num_tasks))]),t._v(" left)")])]):"Paused"===e.status?r("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n                        "+t._s(e.tasks_done)+" Task "),e.tasks_done>1?r("span",[t._v("s")]):t._e(),r("small",[r("b",[t._v("completed")])])]):t._e(),t._v(" "),r("progress",{staticClass:"progress is-small mt-2",class:{"is-success":!!e&&e.tasks_done===e.num_tasks},attrs:{max:e.num_tasks},domProps:{value:e.tasks_done}})])])])})),1):t._e(),t._v(" "),t.batchesLoading?r("div",{staticClass:"loading-text"},[t._v("\n                Tasks loading\n              ")]):t.campaignBatches&&!t.campaignBatches.length?r("div",[t._v("\n                No tasks\n              ")]):t.campaignBatches?t._e():r("div",[t._v("\n                Could not retrieve batches\n              ")])])])]):t._e(),t._v(" "),"instruction"===t.body?r("div",{staticClass:"block"},[t.campaign&&t.campaign.info?r("div",{staticClass:"content",domProps:{innerHTML:t._s(t.$md.render(t.campaign.info.instructions))}}):r("p",[t._v("\n            ...\n          ")])]):t._e(),t._v(" "),"preview"===t.body?r("div",{staticClass:"block"},[t.campaign&&t.campaign.info?r("template-media",{attrs:{html:t.renderTemplate(t.campaign.info.template||"No template found..",t.campaign.info.example_task||{})},on:{submit:t.submitTask}}):t._e()],1):t._e()]),t._v(" "),r("div",{staticClass:"column is-two-fifths"},[r("div",{staticClass:"information-block"},[t._m(0),t._v(" "),r("div",{staticClass:"columns p-5"},[r("div",{staticClass:"column is-half"},[t.campaign.info?r("div",{staticClass:"block"},[t.campaign.info&&t.campaign.info.category?r("nuxt-link",{staticClass:"tag is-light is-medium mb-5",class:{"is-dao":"dao"===t.campaign.info.category,"is-dao":"dao"===t.campaign.info.category,"is-socials":"socials"===t.campaign.info.category,"is-translate":"translate"===t.campaign.info.category,"is-captions":"captions"===t.campaign.info.category},attrs:{to:"/?category="+t.campaign.info.category}},[t._v("\n                  "+t._s(t.campaign.info.category)+"\n                ")]):r("span",{staticClass:"tag is-info is-light is-medium"},[t._v("...")])],1):t._e(),t._v(" "),r("div",{staticClass:"block mb-6"},[t._v("\n                Reward\n                "),r("br"),t._v(" "),r("b",[r("span",[t._v(t._s(t.campaign.reward.quantity))])])]),t._v(" "),r("div",{staticClass:"block"},[t.$auth.user.accountName===t.campaign.owner[1]?r("div",[r("nuxt-link",{staticClass:"button is-fullwidth is-primary is-light has-margin-bottom-mobile",attrs:{to:"/campaigns/"+t.id+"/edit"}},[t._v("\n                    Edit Task\n                  ")]),t._v(" "),r("br")],1):t._e(),t._v(" "),t.loading||null===t.campaignBatches?r("button",{staticClass:"button is-fullwidth is-primary is-loading"},[t._v("\n                  Loading\n                ")]):!1===t.userJoined?r("button",{staticClass:"button is-fullwidth is-primary",on:{click:function(e){e.preventDefault(),t.joinCampaignPopup=!0}}},[t._v("\n                  Qualify\n                ")]):t.campaignBatches.reduce((function(a,b){return a+b.num_tasks}),0)-t.campaignBatches.reduce((function(a,b){return a+b.tasks_done}),0)>0&&!t.userReservation?r("button",{staticClass:"button is-fullwidth is-primary",on:{click:function(e){return e.preventDefault(),t.reserveTask.apply(null,arguments)}}},[t._v("\n                  Make Task Reservation\n                ")]):t.userReservation?r("button",{staticClass:"button is-fullwidth is-accent has-text-weight-semibold",on:{click:function(e){return e.preventDefault(),t.goToTask.apply(null,arguments)}}},[t._v("\n                  Go To Task\n                ")]):[t.userJoined?r("button",{staticClass:"button is-fullwidth is-primary",attrs:{disabled:!0}},[t._v("\n                    Qualified for Task\n                  ")]):t._e(),t._v(" "),t._m(1)]],2)]),t._v(" "),r("div",{staticClass:"column is-half"},[r("div",{staticClass:"block"},[t._v("\n                Requester\n                "),r("br"),t._v(" "),r("div",{staticClass:"blockchain-address"},[r("nuxt-link",{attrs:{to:"/profile/"+t.campaign.owner[1]}},[t._v("\n                    "+t._s(t.campaign.owner[1])+"\n                  ")])],1)]),t._v(" "),r("div",{staticClass:"block"},[t._v("\n                IPFS\n                "),r("br"),t._v(" "),r("div",{staticClass:"blockchain-address"},[r("a",{attrs:{target:"_blank",href:t.ipfsExplorer+"/ipfs/"+t.campaign.content.field_1}},[t._v(t._s(t.campaign.content.field_1))])])]),t._v(" "),r("div",{staticClass:"block"},[t._v("\n                Blockchain\n                "),r("br"),t._v(" "),r("a",{attrs:{target:"_blank",href:t.$blockchain.eos.explorer+"/account/"+t.$blockchain.sdk.force.config.force_contract+"?loadContract=true&tab=Tables&table=campaign&account="+t.$blockchain.sdk.force.config.force_contract+"&scope="+t.$blockchain.sdk.force.config.force_contract+"&limit=1&lower_bound="+t.id+"&upper_bound="+t.id}},[t._v("View in Explorer")])]),t._v(" "),r("div",{staticClass:"block"},[t._v("\n                Tasks\n                "),r("br"),t._v(" "),null===t.batchByCampaignId(t.campaign.id)?r("span",{staticClass:"loading-text"},[t._v("\n                  Loading\n                ")]):r("span",[t._v("\n                  "+t._s(t.batchByCampaignId(t.campaign.id).reduce((function(a,b){return a+b.num_tasks}),0)-t.batchByCampaignId(t.campaign.id).reduce((function(a,b){return a+b.tasks_done}),0))+"/"+t._s(t.batchByCampaignId(t.campaign.id).reduce((function(a,b){return a+b.num_tasks}),0))+" left\n                  "),r("br")])])])])])])]):r("div",{staticClass:"loading-text"},[t._v("\n      Task loading\n    ")])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"information-header has-text-centered"},[n("h4",{staticClass:"p-5 is-size-4"},[n("b",[t._v("Information")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"has-text-centered"},[n("i",[t._v("No active tasks currently")])])}],!1,null,"0de55b3d",null));e.default=R.exports}}]);