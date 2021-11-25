(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1232:function(t,n,e){var content=e(1240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(98).default)("49463a7a",content,!0,{sourceMap:!1})},1239:function(t,n,e){"use strict";e(1232)},1240:function(t,n,e){var r=e(97)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),r.push([t.i,".template-wrapper[data-v-225947fa]{width:100%;padding:5px}#mediaFrame[data-v-225947fa]{width:100%;border:none;border-radius:14px}",""]),t.exports=r},1243:function(t,n,e){"use strict";var r=e(1254),c=e.n(r),o={name:"InstructionsModal",props:{campaign:{type:Object,required:!0,default:function(){return{}}},info:{type:Object,required:!0,default:function(){return{}}},show:{type:Boolean,required:!1,default:!1},functional:{type:Boolean,required:!1,default:!0}},data:function(){return{tac:!1}},computed:{showModal:{get:function(){return this.show},set:function(t){this.$emit("clicked",t)}}},methods:{onCancel:function(){this.functional&&(this.showModal=!1)},onClick:function(){this.functional&&this.$parent.joinCampaign()},sanitizeHtmlCustom:function(t){return c()(t,{allowedTags:["h1","h2","h3","h4","h5","h6","blockquote","p","a","ul","ol","nl","li","b","i","strong","em","strike","code","hr","br","div","table","thead","caption","tbody","tr","th","td","pre","iframe","img","span","label"],allowedAttributes:{a:["href","name","target","class"],img:["src","alt"],iframe:["src"],"*":["style"]}})}}},l=e(32),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.campaign&&t.info?e("div",{staticClass:"modal",class:{"is-active":t.showModal},style:{position:t.functional?"fixed":"relative",padding:t.functional?"initial":"10px"}},[e("div",{staticClass:"modal-background"}),t._v(" "),e("div",{staticClass:"modal-card"},[e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title"},[t._v("\n        "+t._s(t.info.title)+"\n      ")]),t._v(" "),e("button",{staticClass:"delete",attrs:{"aria-label":"close",disabled:!t.functional},on:{click:function(n){return n.preventDefault(),t.onCancel()}}})]),t._v(" "),e("section",{staticClass:"modal-card-body"},[t.campaign&&t.info?e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.sanitizeHtmlCustom(t.$md.render(t.info.instructions)))}}):e("p",[t._v("\n        ...\n      ")]),t._v(" "),e("label",{staticClass:"checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tac,expression:"tac"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.tac)?t._i(t.tac,null)>-1:t.tac},on:{change:function(n){var e=t.tac,r=n.target,c=!!r.checked;if(Array.isArray(e)){var o=t._i(e,null);r.checked?o<0&&(t.tac=e.concat([null])):o>-1&&(t.tac=e.slice(0,o).concat(e.slice(o+1)))}else t.tac=c}}}),t._v("\n        I agree to the "),e("a",{attrs:{href:"#"}},[t._v("terms and conditions")])])]),t._v(" "),e("footer",{staticClass:"modal-card-foot"},[e("button",{staticClass:"button is-primary",attrs:{disabled:!(t.tac&&t.campaign&&t.info&&t.functional)},on:{click:function(n){return n.preventDefault(),t.onClick()}}},[t._v("\n        Join Campaign\n      ")]),t._v(" "),e("button",{staticClass:"button",attrs:{disabled:!t.functional},on:{click:function(n){return n.preventDefault(),t.onCancel()}}},[t._v("\n        Cancel\n      ")])])])]):t._e()}),[],!1,null,"2c60a330",null);n.a=component.exports},1244:function(t,n,e){"use strict";e(24),e(74);var r={props:{html:{type:String,default:null}},data:function(){return{loading:!0}},mounted:function(){document.addEventListener("keydown",this.sendKeyEvents)},created:function(){window.addEventListener("message",this.communicateWithIframe)},beforeDestroy:function(){window.removeEventListener("message",this.communicateWithIframe),document.removeEventListener("keydown",this.sendKeyEvents)},methods:{mediaFrameLoaded:function(){this.loading=!1,this.$emit("templateLoaded")},sendKeyEvents:function(t){var n=document.getElementById("mediaFrame");n&&n.contentWindow.postMessage({task:"key",key:t.key},"*")},communicateWithIframe:function(t){var data=t.data;switch(data.task){case"setHeight":document.getElementById("mediaFrame").height=data.height+"px";break;case"submit":this.$emit("submit",data.values)}}}},c=(e(1239),e(32)),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"template-wrapper"},[t.loading?e("div",[t._v("\n    Loading..\n  ")]):t._e(),t._v(" "),e("iframe",{ref:"mediaFrame",attrs:{id:"mediaFrame",srcdoc:t.html,name:"mediaFrame",sandbox:"allow-scripts allow-modals allow-downloads allow-forms allow-popups allow-pointer-lock allow-same-origin",allow:"geolocation; microphone; camera; autoplay; fullscreen",allowFullScreen:""},on:{load:t.mediaFrameLoaded}})])}),[],!1,null,"225947fa",null);n.a=component.exports},1246:function(t,n){},1247:function(t,n){},1249:function(t,n){},1250:function(t,n){},1252:function(t,n,e){"use strict";e(101),e(24),e(84),e(103),e(76),e(56),e(55),e(102),e(104),e(74);var r=e(4);e(40);function c(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,d=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return l=t.done,t},e:function(t){d=!0,c=t},f:function(){try{l||null==e.return||e.return()}finally{if(d)throw c}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var l=e(589),d={props:{batch:{type:Object,default:null}},data:function(){return{loading:!1,error:null}},created:function(){this.makeReservation()},methods:{makeReservation:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e,c,o,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.loading=!0,n.next=4,t.$blockchain.getReservations();case 4:if(e=n.sent,c=t.getReservationForUser(e)){n.next=13;break}return n.next=9,t.$blockchain.reserveTask(t.batch.id,t.batch.campaign_id,t.batch.tasks_done,t.batch.tasks);case 9:return o=n.sent,t.$store.dispatch("transaction/addTransaction",o),n.next=13,l(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$blockchain.getReservations();case 2:if(e=n.sent,c=t.getReservationForUser(e)){n.next=6;break}throw new Error("Reservation not found");case 6:case"end":return n.stop()}}),n)}))),{retries:5,onRetry:function(t,n){console.log("attempt",n,t)}});case 13:if(!c){n.next=20;break}return n.next=16,t.$blockchain.getTaskIndexFromLeaf(c.leaf_hash,t.batch.tasks);case 16:d=n.sent,t.$router.push("/campaigns/"+t.batch.campaign_id+"/"+t.batch.batch_id+"/"+d+"?submissionId="+c.id),n.next=21;break;case 20:t.$router.push("/campaigns/"+t.batch.campaign_id+"/"+t.batch.batch_id);case 21:t.loading=!1,n.next=28;break;case 24:n.prev=24,n.t0=n.catch(0),t.loading=!1,t.$blockchain.handleError(n.t0);case 28:case"end":return n.stop()}}),n,null,[[0,24]])})))()},getReservationForUser:function(t){var n,e,r=c(t.rows);try{for(r.s();!(e=r.n()).done;){var o=e.value;if(!(o.account_id!==this.$auth.user.vAccountRows[0].id||parseInt(this.batch.batch_id)!==parseInt(o.batch_id)||o.data&&o.data.length)){n=o;break}}}catch(t){r.e(t)}finally{r.f()}return n}}},m=e(32),component=Object(m.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",[t.loading?e("div",{staticClass:"loader-wrapper is-active"},[e("div",{staticClass:"loader is-loading"}),t._v(" "),e("br"),t._v("Making reservation...\n  ")]):t._e()])}),[],!1,null,null,null);n.a=component.exports},1258:function(t,n){},1296:function(t,n,e){var content=e(1375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(98).default)("58aa0b91",content,!0,{sourceMap:!1})},1374:function(t,n,e){"use strict";e(1296)},1375:function(t,n,e){var r=e(97)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),r.push([t.i,".box-title[data-v-a37802dc]{text-align:center;border-bottom:2px solid #cdd4e6;padding-bottom:31px;margin:10px 0 15px}.progress[data-v-a37802dc]::-webkit-progress-value{-webkit-transition:width .5s ease;transition:width .5s ease}",""]),t.exports=r},1388:function(t,n,e){"use strict";e.r(n);e(100),e(55),e(72),e(114),e(73),e(115);var r=e(4),c=e(43),o=(e(40),e(153),e(216),e(24),e(183)),l=e(157),d=e(1244),m=e(1252),f=e(1243);function v(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var h={components:{TemplateMedia:d.a,ReserveTask:m.a,InstructionsModal:f.a},middleware:["auth"],data:function(){return{ipfsExplorer:"https://ipfs.effect.ai",campaignId:parseInt(this.$route.params.id),batchId:parseInt(this.$route.params.batch),campaign:void 0,batch:void 0,body:"description",accountId:this.$auth.user.vAccountRows[0].id,userJoined:null,loading:!1,joinCampaignPopup:!1,reserveTask:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(n){Object(c.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},Object(o.c)({batches:function(t){return t.campaign.batches},campaigns:function(t){return t.campaign.campaigns},campaignLoading:function(t){return t.campaign.loading},batchLoading:function(t){return t.campaign.loadingBatch}})),mounted:function(){},created:function(){this.checkUserCampaign(),this.getBatch(),this.getCampaign()},methods:{campaignModalChange:function(t){this.joinCampaignPopup=t},joinCampaign:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$blockchain.joinCampaign(t.campaignId);case 3:data=n.sent,t.$store.dispatch("transaction/addTransaction",data),data&&(t.loading=!0,setTimeout(Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.checkUserCampaign();case 2:t.userJoined&&(t.reserveTask=!0);case 3:case"end":return n.stop()}}),n)}))),1500)),t.joinCampaignPopup=!1,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),t.$blockchain.handleError(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()},checkUserCampaign:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,n.prev=1,n.next=4,t.$blockchain.getCampaignJoins(t.campaignId);case 4:data=n.sent,t.userJoined=data.rows.length>0,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),t.$blockchain.handleError(n.t0);case 11:t.loading=!1;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))()},submitTask:function(t){console.log("Task submitted!",t)},renderTemplate:function(template){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new l.Template(template,t,n).render()},getBatch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("campaign/getBatch",{batchId:t.batchId});case 2:t.batch=t.batches.find((function(b){return b.batch_id===t.batchId})),e=t.$blockchain.getTaskSubmissionsForBatch(t.batchId),console.log("batch submissions:",e);case 5:case"end":return n.stop()}}),n)})))()},getCampaign:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("campaign/getCampaign",t.campaignId);case 2:t.campaign=t.campaigns.find((function(n){return n.id===t.campaignId}));case 3:case"end":return n.stop()}}),n)})))()}}},_=h,k=(e(1374),e(32)),component=Object(k.a)(_,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"section is-max-widescreen"},[e("div",{staticClass:"container"},[e("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("\n            All Campaigns\n          ")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:"/campaigns/"+t.campaignId}},[t._v("\n            Campaign "+t._s(t.campaignId)+"\n          ")])],1),t._v(" "),e("li",{staticClass:"is-active"},[t.batch?e("nuxt-link",{attrs:{to:"/campaigns/"+t.campaignId+"/"+t.batchId,"aria-current":"page"}},[t._v("\n            Batch "+t._s(t.batch.id)+"\n          ")]):t._e()],1)])]),t._v(" "),t.campaignLoading||t.batchLoading?e("div",[t._v("\n      Campaign loading..\n    ")]):t.campaign&&t.batch?t._e():e("div",[t._v("\n      Could not retrieve campaign\n    ")]),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-two-thirds"},[e("div",{staticClass:"title"},[t.batch?e("span",[t._v("#"+t._s(t.campaignId)+"."+t._s(t.batch.id)+": ")]):t._e(),t._v(" "),t.campaign&&t.campaign.info?e("span",[t._v(t._s(t.campaign.info.title))]):t.campaign&&null===t.campaign.info?e("span",{staticClass:"has-text-danger-dark"},[t._v("Could not load campaign info")]):e("span",[t._v("Loading..")])]),t._v(" "),e("div",{staticClass:"tabs"},[e("ul",[e("li",{class:{"is-active":"description"===t.body}},[e("a",{on:{click:function(n){n.preventDefault(),t.body="description"}}},[t._v("Description")])]),t._v(" "),e("li",{class:{"is-active":"instruction"===t.body}},[e("a",{on:{click:function(n){n.preventDefault(),t.body="instruction"}}},[t._v("Instructions")])])])]),t._v(" "),"description"===t.body?e("div",{staticClass:"block"},[t.campaign&&t.campaign.info?e("p",[t._v("\n            "+t._s(t.campaign.info.description)+"\n          ")]):e("p",[t._v("\n            ...\n          ")]),t._v(" "),e("h2",{staticClass:"subtitle mt-5"},[t._v("\n            Task Preview\n          ")]),t._v(" "),t.campaign&&t.campaign.info?e("template-media",{attrs:{html:t.renderTemplate(t.campaign.info.template||"No template found..",t.campaign.info.example_task||{})},on:{submit:t.submitTask}}):t._e()],1):t._e(),t._v(" "),"instruction"===t.body?e("div",{staticClass:"block"},[t.campaign&&t.campaign.info?e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.$md.render(t.campaign.info.instructions))}}):e("p",[t._v("\n            ...\n          ")])]):t._e()]),t._v(" "),e("div",{staticClass:"column is-one-third"},[e("div",{staticClass:"box"},[t._m(0),t._v(" "),e("div",{staticClass:"block"},[e("b",[t._v("Requester")]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"blockchain-address"},[t.campaign?e("nuxt-link",{attrs:{to:"/profile/"+t.campaign.owner[1]}},[t._v("\n                "+t._s(t.campaign.owner[1])+"\n              ")]):e("span",[t._v(".....")])],1)]),t._v(" "),e("div",{staticClass:"block"},[e("b",[t._v("Reward")]),t._v(" "),e("br"),t._v(" "),t.campaign?e("span",[t._v(t._s(t.campaign.reward.quantity))]):e("span",[t._v(".....")])]),t._v(" "),e("div",{staticClass:"block"},[e("b",[t._v("Tasks")]),t._v(" "),e("br"),t._v(" "),t.batch&&t.batch.num_tasks-t.batch.tasks_done==0?[e("span",[t._v("Done.")])]:t.batch&&t.batch.num_tasks-t.batch.tasks_done>0?[e("span",[t._v(t._s(t.batch.num_tasks-t.batch.tasks_done))]),t._v(" "),e("span",[t._v("/ "+t._s(t.batch.num_tasks)+" left")])]:e("span",[t._v("...")]),t._v(" "),e("progress",{staticClass:"progress",class:{"is-success":!!t.batch&&t.batch.tasks_done===t.batch.num_tasks,"is-secondary":!!t.batch&&t.batch.tasks_done<t.batch.num_tasks},attrs:{max:t.batch?t.batch.num_tasks:void 0},domProps:{value:t.batch?t.batch.tasks_done:void 0}},[t._v("\n              Left\n            ")])],2),t._v(" "),e("div",{staticClass:"block"},[e("b",[t._v("Category")]),t._v(" "),e("br"),t._v(" "),t.campaign&&t.campaign.info?e("span",{staticClass:"tag is-info is-light is-medium"},[t._v(t._s(t.campaign.info.category))]):e("span",{staticClass:"tag is-info is-light is-medium"},[t._v("...")])]),t._v(" "),e("div",{staticClass:"block"},[e("b",[t._v("IPFS")]),t._v(" "),e("br"),t._v(" "),t.batch?e("div",{staticClass:"blockchain-address"},[e("a",{attrs:{target:"_blank",href:t.ipfsExplorer+"/ipfs/"+t.batch.content.field_1}},[t._v(t._s(t.batch.content.field_1))])]):e("span",[t._v(".....")])]),t._v(" "),e("div",{staticClass:"block"},[e("b",[t._v("Blockchain")]),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{target:"_blank",href:t.$blockchain.eos.explorer+"/account/"+t.$blockchain.sdk.force.config.force_contract+"?loadContract=true&tab=Tables&table=batch&account="+t.$blockchain.sdk.force.config.force_contract+"&scope="+t.$blockchain.sdk.force.config.force_contract+"&limit=1&lower_bound="+t.batchId+"&upper_bound="+t.batchId}},[t._v("View Batch on Explorer")])]),t._v(" "),e("div",{staticClass:"block"},[t.userJoined?t.batch?e("button",{staticClass:"button is-primary",on:{click:function(n){n.preventDefault(),t.reserveTask=!0}}},[t._v("\n              Make Task Reservation\n            ")]):t._e():e("button",{staticClass:"button is-primary",class:{"is-loading":!0===t.loading},on:{click:function(n){n.preventDefault(),t.joinCampaignPopup=!0}}},[t._v("\n              Join Campaign\n            ")])])])])]),t._v(" "),t.reserveTask?e("reserve-task",{attrs:{batch:t.batch}}):t._e(),t._v(" "),t.campaign&&t.campaign.info?e("instructions-modal",{attrs:{campaign:t.campaign,info:t.campaign.info,show:t.joinCampaignPopup},on:{clicked:t.campaignModalChange}}):t._e()],1)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h4",{staticClass:"box-title is-size-4"},[e("b",[t._v("Information")])])}],!1,null,"a37802dc",null);n.default=component.exports}}]);