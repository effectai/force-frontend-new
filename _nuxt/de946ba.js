/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1253:function(t,e,n){t.exports=n.p+"img/effect-force-icon.828a6c5.png"},1259:function(t,e,n){"use strict";var o={props:["page","perPage","items"],computed:{maxPage:function(){return Math.ceil(this.items/this.perPage)}},watch:{items:function(){this.$emit("setPage",1)}}},c=n(22),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items&&t.items>t.perPage?n("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[n("span",{staticStyle:{"padding-left":"0.5em"}},[t._v(t._s((t.page-1)*t.perPage+1)+"-"+t._s(Math.min(t.page*t.perPage,t.items))+" of\n    "+t._s(t.items))]),t._v(" "),n("a",{staticClass:"pagination-previous",attrs:{disabled:1===t.page},on:{click:function(e){return t.$emit("setPage",t.page-1)}}},[t._v("Previous")]),t._v(" "),n("a",{staticClass:"pagination-next",attrs:{disabled:!t.maxPage||t.page===t.maxPage},on:{click:function(e){return t.$emit("setPage",t.page+1)}}},[t._v("Next page")]),t._v(" "),n("ul",{staticClass:"pagination-list has-margin-top-mobile"},[t.page>2?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",1)}}},[t._v("1")])]):t._e(),t._v(" "),t.page>3?n("li",[n("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._v(" "),t.page>1?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.page-1)}}},[t._v(t._s(t.page-1))])]):t._e(),t._v(" "),n("li",[n("a",{staticClass:"pagination-link is-current",attrs:{"aria-current":"page"}},[t._v(t._s(t.page))])]),t._v(" "),t.page<t.maxPage?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.page+1)}}},[t._v("\n        "+t._s(t.page+1))])]):t._e(),t._v(" "),t.maxPage>t.page+2?n("li",[n("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._v(" "),t.maxPage>t.page+1?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.maxPage)}}},[t._v(t._s(t.maxPage))])]):t._e()])]):t._e()}),[],!1,null,null,null);e.a=component.exports},1260:function(t,e,n){var map={"./effect-captions-icon.png":1261,"./effect-dao-icon.png":1262,"./effect-force-icon.png":1253,"./effect-socials-icon.png":1263,"./effect-translate-icon.png":1264};function o(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=c,t.exports=o,o.id=1260},1261:function(t,e,n){t.exports=n.p+"img/effect-captions-icon.d32e1fd.png"},1262:function(t,e,n){t.exports=n.p+"img/effect-dao-icon.8a49264.png"},1263:function(t,e,n){t.exports=n.p+"img/effect-socials-icon.113948d.png"},1264:function(t,e,n){t.exports=n.p+"img/effect-translate-icon.a76baca.png"},1265:function(t,e,n){var content=n(1270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("7a218c08",content,!0,{sourceMap:!1})},1268:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeT0iMTEuMzA3NyIgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeD0iMTEuMzA3NiIgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeD0iMTEuMzA3NiIgeT0iMTEuMzA3NyIgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPC9zdmc+Cg=="},1269:function(t,e,n){"use strict";n(1265)},1270:function(t,e,n){var o=n(57),c=n(1271),l=n(1272),r=o(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);var d=c(l);r.push([t.i,".title-section[data-v-1f6e8c0f]{height:100%}.column[data-v-1f6e8c0f]{flex-wrap:wrap;align-items:stretch}.box.is-disabled[data-v-1f6e8c0f]{background-color:rgba(222,224,230,.5)}.box.is-disabled .column[data-v-1f6e8c0f]:not(:last-child){opacity:.5}.box.has-reservation[data-v-1f6e8c0f]{box-shadow:0 0 14px 5px rgba(17,72,235,.3)}.box .image img[data-v-1f6e8c0f]{border:1px solid #d2d9eb}.card .card-image[data-v-1f6e8c0f],.card .card-image figure[data-v-1f6e8c0f],.card .card-image img[data-v-1f6e8c0f],.card .card-image p[data-v-1f6e8c0f]{height:75px!important}.card .card-image img[data-v-1f6e8c0f]{width:100%;-o-object-fit:contain;object-fit:contain;border-radius:6px!important}.switch-button[data-v-1f6e8c0f]{background:#d7dcee;border-radius:6px;overflow:hidden;width:80px;text-align:center;font-size:18px;letter-spacing:1px;color:#155fff;padding:4px 40px 4px 4px;position:relative}.switch-button[data-v-1f6e8c0f]:before{content:url("+d+');position:absolute;top:9px;bottom:0;right:1px;width:40px;align-items:center;justify-content:center;z-index:3;pointer-events:none}.switch-button-checkbox[data-v-1f6e8c0f]{cursor:pointer;position:absolute;top:0;left:0;bottom:0;width:100%;height:100%;opacity:0;z-index:2}.switch-button-checkbox:checked+.switch-button-label[data-v-1f6e8c0f]:before{transform:translateX(36px);transition:transform .3s linear}.switch-button-checkbox+.switch-button-label[data-v-1f6e8c0f]{position:relative;padding:1px 0;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.switch-button-checkbox+.switch-button-label[data-v-1f6e8c0f]:before{content:"";padding:1px 0;background:#f6f7ff;height:100%;width:100%;position:absolute;left:0;top:0;border-radius:6px;transform:translateX(0);transition:transform .3s}.switch-button-checkbox+.switch-button-label .switch-button-label-span[data-v-1f6e8c0f]{position:relative;top:5px}.image[data-v-1f6e8c0f]{max-height:90px}@media screen and (min-width:1024px){.column.is-1-desktop[data-v-1f6e8c0f]{flex:none;width:8.33333337%;max-width:76px}}.grid[data-v-1f6e8c0f]{text-align:center}@media screen and (max-width:1023px){.columns[data-v-1f6e8c0f]{text-align:center}}',""]),t.exports=r},1271:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},1272:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0iIzg0OEE5QSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMi40MjMiIGN5PSIyLjQyMzA2IiByPSIxLjYxNTM4IiBmaWxsPSIjODQ4QTlBIi8+CjxyZWN0IHg9IjUuNjUzMzIiIHk9IjEuNjE1MzYiIHdpZHRoPSIxNC41Mzg1IiBoZWlnaHQ9IjEuNjE1MzgiIHJ4PSIwLjgwNzY5MiIgZmlsbD0iIzg0OEE5QSIvPgo8ZWxsaXBzZSBjeD0iMi40MjMiIGN5PSI4LjA3NjkzIiByeD0iMS42MTUzOCIgcnk9IjEuNjE1MzgiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeD0iNS42NTMzMiIgeT0iNy4yNjkyMyIgd2lkdGg9IjE0LjUzODUiIGhlaWdodD0iMS42MTUzOSIgcng9IjAuODA3NjkzIiBmaWxsPSIjODQ4QTlBIi8+CjxlbGxpcHNlIGN4PSIyLjQyMyIgY3k9IjEzLjczMDgiIHJ4PSIxLjYxNTM4IiByeT0iMS42MTUzOCIgZmlsbD0iIzg0OEE5QSIvPgo8cmVjdCB4PSI1LjY1MzMyIiB5PSIxMi45MjMxIiB3aWR0aD0iMTQuNTM4NSIgaGVpZ2h0PSIxLjYxNTM4IiByeD0iMC44MDc2OTIiIGZpbGw9IiMjODQ4QTlBIi8+CjxlbGxpcHNlIGN4PSIyLjQyMyIgY3k9IjE5LjM4NDYiIHJ4PSIxLjYxNTM4IiByeT0iMS42MTUzOCIgZmlsbD0iIzg0OEE5QSIvPgo8cmVjdCB4PSI1LjY1MzMyIiB5PSIxOC41NzY5IiB3aWR0aD0iMTQuNTM4NSIgaGVpZ2h0PSIxLjYxNTM4IiByeD0iMC44MDc2OTIiIGZpbGw9IiM4NDhBOUEiLz4KPC9zdmc+Cg=="},1277:function(t,e,n){"use strict";var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"switch-button-label",attrs:{for:""}},[e("span",{staticClass:"switch-button-label-span"},[e("img",{attrs:{height:"28px",src:n(1268)}})])])}],c=(n(89),n(51),n(80),n(25),n(107),n(59),n(108),n(38)),l=(n(90),n(183));function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"CampaignList",components:{Pagination:n(1259).a},props:["gridToggle","campaigns"],data:function(){return{page:this.$route.query.page||1,perPage:30,ipfsExplorer:this.$blockchain.sdk.config.ipfsNode,categories:["translate","captions","socials","dao"]}},computed:d(d(d({},Object(l.b)({batchesByCampaignId:"campaign/batchesByCampaignId"})),Object(l.c)({campaignsLoading:function(t){return t.campaign.loading},allCampaignsLoaded:function(t){return t.campaign.allCampaignsLoaded},allBatchesLoaded:function(t){return t.campaign.allBatchesLoaded},allSubmissionsLoaded:function(t){return t.campaign.allSubmissionsLoaded}})),{},{list:{get:function(){return this.$store.state.view.grid},set:function(t){this.$store.commit("view/SET_GRID_LIST",t)}},grid:function(){return!this.list&&this.gridToggle},paginatedCampaigns:function(){var t=(this.page-1)*this.perPage;return this.campaigns?this.campaigns.slice(t,t+this.perPage):[]}}),created:function(){this.getForceInfo()},methods:{setPage:function(t){this.page=t},getForceInfo:function(){this.campaigns&&this.allCampaignsLoaded||this.$store.dispatch("campaign/getCampaigns"),this.allBatchesLoaded||this.$store.dispatch("campaign/getBatches"),this.allSubmissionsLoaded||this.$store.dispatch("campaign/getSubmissions")}}},f=(n(1269),n(22)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"is-flex is-justify-content-space-between"},[o("div"),t._v(" "),t.gridToggle?o("div",{staticClass:"is-hidden-touch"},[o("div",{staticClass:"switch-button mb-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.list,expression:"list"}],staticClass:"switch-button-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.list)?t._i(t.list,null)>-1:t.list},on:{change:function(e){var n=t.list,o=e.target,c=!!o.checked;if(Array.isArray(n)){var l=t._i(n,null);o.checked?l<0&&(t.list=n.concat([null])):l>-1&&(t.list=n.slice(0,l).concat(n.slice(l+1)))}else t.list=c}}}),t._v(" "),t._m(0)])]):t._e()]),t._v(" "),o("hr",{staticClass:"mt-1"}),t._v(" "),o("div",{staticClass:"columns is-multiline",class:{grid:t.grid}},t._l(t.paginatedCampaigns,(function(e){return o("div",{key:e.id,staticClass:"column is-one-third-tablet",class:{"is-one-fifth-desktop":t.grid,"is-12-desktop":!t.grid}},[o("nuxt-link",{staticClass:"box p-4",class:{"is-disabled":null===e.info,"has-reservation":e.userHasReservation},attrs:{to:"/campaigns/"+e.id}},[o("div",{staticClass:"columns is-vcentered is-multiline"},[o("div",{staticClass:"column is-12-touch",class:{"is-1-desktop":!t.grid,"is-12-desktop":t.grid}},[o("p",{staticClass:"image has-radius is-vcentered has-background-image"},[e.info&&e.info.image?o("img",{attrs:{src:e.info.image.Hash?t.ipfsExplorer+"/ipfs/"+e.info.image.Hash:e.info.image}}):e.info&&e.info.category&&t.categories.includes(e.info.category)?o("img",{attrs:{src:n(1260)("./effect-"+e.info.category+"-icon.png")}}):o("img",{attrs:{src:n(1253),alt:"campaign title"}})])]),t._v(" "),o("div",{staticClass:"column",class:{"is-12":t.grid,"is-4-desktop is-4-widescreen is-12-touch":!t.grid}},[o("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[o("div",[e.info&&e.info.category?o("nuxt-link",{staticClass:"tag is-light mb-2 has-border is-capitalized",class:{"is-dao":"dao"===e.info.category,"is-dao":"dao"===e.info.category,"is-socials":"socials"===e.info.category,"is-translate":"translate"===e.info.category,"is-captions":"captions"===e.info.category},attrs:{to:"/?category="+e.info.category}},[t._v("\n                  "+t._s(e.info.category)+"\n                ")]):null!==e.info?o("span",{staticClass:"tag is-light mb-2"},[o("span",{staticClass:"loading-text"},[t._v("Loading")])]):t._e()],1),t._v(" "),e.info?o("span",[e.info.title?o("span",[t._v(t._s(e.info.title))]):o("i",[t._v("- Untitled -")])]):null!==e.info?o("span",{staticClass:"loading-text"},[t._v("Loading")]):o("span",{staticClass:"has-text-danger-dark"},[t._v("Could not load campaign info")])]),t._v(" "),o("div",{staticClass:"has-text-grey is-size-7"},[e.info?o("div",[e.info.description?o("div",{staticClass:"is-ellipsis"},[t._v("\n                  "+t._s(e.info.description)+"\n                ")]):o("i",[t._v("- no description -")])]):null!==e.info?o("div",[t._v("\n                ........\n              ")]):t._e()])]),t._v(" "),o("div",{staticClass:"column is-12",class:{"is-2-desktop":!t.grid}},[o("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n              Requester:\n            ")]),t._v(" "),o("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[o("nuxt-link",{attrs:{to:"/profile/"+e.owner[1]}},[o("span",{staticClass:"is-ellipsis"},[t._v(t._s(e.owner[1]))])])],1)]),t._v(" "),o("div",{staticClass:"column"},[o("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n              Reward:\n            ")]),t._v(" "),o("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[t._v("\n              "+t._s(e.reward.quantity)+"\n            ")])]),t._v(" "),e.num_tasks||e.tasks_done?o("div",{staticClass:"column"},[o("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n              Tasks:\n            ")]),t._v(" "),o("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[o("span",[t._v("\n                "+t._s(e.num_tasks-e.tasks_done)+"/"+t._s(e.num_tasks)+" left\n              ")])])]):t._e(),t._v(" "),o("div",{staticClass:"column has-text-right",class:{"is-12":t.grid}},[o("button",{staticClass:"button is-primary has-text-weight-semibold is-fullwidth",class:{"is-loading":void 0===e.info,"is-accent":null===e.info||e.userHasReservation,"is-outlined":null===e.info,"is-wide":!t.grid},attrs:{disabled:!e||null===e.info}},[e.userHasReservation?o("span",[t._v("Go to Task")]):o("span",[t._v("View")])])])])])],1)})),0),t._v(" "),t.campaigns?o("pagination",{staticClass:"mt-2",attrs:{items:t.campaigns.length,page:t.page,"per-page":t.perPage},on:{setPage:t.setPage}}):t._e(),t._v(" "),t.campaignsLoading?o("div",{staticClass:"subtitle loading-text"},[t._v("\n    Campaigns loading\n  ")]):t.allBatchesLoaded?t.campaigns&&!t.campaigns.length?o("div",{staticClass:"subtitle"},[t._v("\n    No tasks\n  ")]):t.campaigns?t._e():o("div",{staticClass:"subtitle has-text-danger"},[t._v("\n    Could not retrieve campaigns\n  ")]):o("div",{staticClass:"loading-text"},[t._v("\n    Batches loading\n  ")])],1)}),o,!1,null,"1f6e8c0f",null);e.a=component.exports},1307:function(t,e,n){var content=n(1358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("58f17ec0",content,!0,{sourceMap:!1})},1308:function(t,e,n){var content=n(1360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("35a26848",content,!0,{sourceMap:!1})},1356:function(t,e,n){"use strict";var o=1e3,c=6e4,l=36e5,r=864e5,d="visibilitychange",h={name:"countdown",data:function(){return{counting:!1,endTime:0,totalMilliseconds:0}},props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:function(t){return t>=0}},now:{type:Function,default:function(){return Date.now()}},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:function(t){return t>=0}},transform:{type:Function,default:function(t){return t}}},computed:{days:function(){return Math.floor(this.totalMilliseconds/r)},hours:function(){return Math.floor(this.totalMilliseconds%r/l)},minutes:function(){return Math.floor(this.totalMilliseconds%l/c)},seconds:function(){return Math.floor(this.totalMilliseconds%c/o)},milliseconds:function(){return Math.floor(this.totalMilliseconds%o)},totalDays:function(){return this.days},totalHours:function(){return Math.floor(this.totalMilliseconds/l)},totalMinutes:function(){return Math.floor(this.totalMilliseconds/c)},totalSeconds:function(){return Math.floor(this.totalMilliseconds/o)}},render:function(t){return t(this.tag,this.$scopedSlots.default?[this.$scopedSlots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:this.$slots.default)},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},methods:{start:function(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit("start"),"visible"===document.visibilityState&&this.continue())},continue:function(){var t=this;if(this.counting){var e=Math.min(this.totalMilliseconds,this.interval);if(e>0)if(window.requestAnimationFrame){var n,o;this.requestId=requestAnimationFrame((function c(l){n||(n=l),o||(o=l);var r=l-n;r>=e||r+(l-o)/2>=e?t.progress():t.requestId=requestAnimationFrame(c),o=l}))}else this.timeoutId=setTimeout((function(){t.progress()}),e);else this.end()}},pause:function(){window.requestAnimationFrame?cancelAnimationFrame(this.requestId):clearTimeout(this.timeoutId)},progress:function(){this.counting&&(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit("progress",{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort:function(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit("abort"))},end:function(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit("end"))},update:function(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisibilityChange:function(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause()}}},mounted:function(){document.addEventListener(d,this.handleVisibilityChange)},beforeDestroy:function(){document.removeEventListener(d,this.handleVisibilityChange),this.pause()}};t.exports=h},1357:function(t,e,n){"use strict";n(1307)},1358:function(t,e,n){var o=n(57)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),o.push([t.i,"div.box[data-v-9212132c]{background:#f7fbff;padding:5%;border-radius:8px;box-shadow:none}",""]),t.exports=o},1359:function(t,e,n){"use strict";n(1308)},1360:function(t,e,n){var o=n(57)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),o.push([t.i,"button.button.is-small.is-info[data-v-102e399c]{border-radius:8px}.payout-detail[data-v-102e399c]{cursor:pointer}.payout-detail span[data-v-102e399c]{color:#1148eb}.payout-detail span[data-v-102e399c]:hover{text-decoration:underline}.payout-table[data-v-102e399c]{transition:all .5s ease-in-out}.payout-table tfoot tr:last-child th[data-v-102e399c]{border-style:dashed}@media screen and (max-width:769px){.is-pulled-right[data-v-102e399c]{float:none!important;margin-bottom:25px}}",""]),t.exports=o},1476:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Campaign")]),t._v(" "),n("th",[t._v("Batch")]),t._v(" "),n("th",[t._v("Date")]),t._v(" "),n("th",[t._v("Countdown")]),t._v(" "),n("th",[t._v("Pending")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Transaction ID")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Date")]),t._v(" "),n("th",[t._v("Status")]),t._v(" "),n("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("img",{staticStyle:{height:"24px"},attrs:{src:n(384)}})])}],c=(n(89),n(51),n(107),n(108),n(48)),l=n(3),r=n(38),d=(n(33),n(280),n(118),n(45),n(219),n(25),n(158),n(80),n(90),n(59),n(378),n(109),n(183)),h=n(1356),f=n.n(h),v=n(1259),m={name:"Balances",computed:{}},_=(n(1357),n(22)),y=Object(_.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"columns is-mobile is-centered is-multiline"},[n("div",{staticClass:"column is-half-mobile"},[n("div",{staticClass:"box "},[t._v("\n        Total\n        "),n("br"),t._v(" "),n("span",{},[n("span",[n("b",[t._v(t._s(null!==t.$blockchain.efxTotal?t.$blockchain.efxTotal.toFixed(2):"...")+" EFX")]),t.$blockchain.efxLoading?n("span",[t._v("..")]):t._e()])])])]),t._v(" "),n("div",{staticClass:"column is-half-mobile"},[n("div",{staticClass:"box "},[t._v("\n        vAccount\n        "),n("br"),t._v(" "),n("b",[null!==t.$blockchain.vefxAvailable?n("span",[t._v(t._s(t.$blockchain.vefxAvailable.toFixed(2)))]):n("span",[t._v(".....")]),n("span",[t._v("  EFX")])])])]),t._v(" "),n("div",{staticClass:"column is-half-mobile"},[n("div",{staticClass:"box "},[t._v("\n        Wallet\n        "),n("br"),t._v(" "),n("b",[null!==t.$blockchain.efxAvailable?n("span",[t._v(t._s(t.$blockchain.efxAvailable.toFixed(2)))]):n("span",[t._v(".....")]),n("span",[t._v("  EFX")])])])]),t._v(" "),n("div",{staticClass:"column is-half-mobile"},[n("div",{staticClass:"box "},[t._v("\n        Pending\n        "),n("br"),t._v(" "),n("b",[null!==t.$blockchain.efxPending?n("span",[t._v(t._s(t.$blockchain.efxPending.toFixed(2)))]):n("span",[t._v(".....")]),n("span",[t._v("  EFX")])])])]),t._v(" "),n("div",{staticClass:"column has-margin-bottom-mobile is-v-centered my-auto"},[n("div",{staticClass:"field is-horizontal is-grouped-centered has-text-centered"},[n("span",{staticClass:"control"},[n("nuxt-link",{staticClass:"button is-fullwidth-mobile is-responsive is-primary ",attrs:{to:"/deposit"}},[t._v("\n                Deposit\n              ")])],1),t._v(" "),n("span",[t._v(" ")]),t._v(" "),n("span",{staticClass:"control"},[n("nuxt-link",{staticClass:"button is-fullwidth-mobile is-responsive is-secondary is-outlined",attrs:{to:"/vtransfer"}},[t._v("\n                vTransfer\n              ")])],1),t._v(" "),n("span",[t._v(" ")]),t._v(" "),n("span",{staticClass:"control"},[n("nuxt-link",{staticClass:"button is-fullwidth-mobile is-responsive is-primary is-outlined",attrs:{to:"/withdraw"}},[t._v("\n                Withdraw\n              ")])],1)])])])])}),[],!1,null,"9212132c",null).exports,x=n(1277),C=(n(121),{props:{message:{type:String,default:null},title:{type:String,default:null}},data:function(){return{messageTitle:this.title,messageContent:this.message,copy_message:"Copy",copy_state:!0,input_type:"password",password_hidden:!0}},methods:{copyToClipboard:function(content){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(content).catch(console.error);case 2:t.copy_message="Copied!",t.copy_state=!1,setTimeout((function(){t.copy_message="Copy",t.copy_state=!0}),5e3);case 5:case"end":return e.stop()}}),e)})))()},togglePasswordVisibility:function(){this.password_hidden=!this.password_hidden}}}),w=Object(_.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",class:{"is-active":null!=t.messageContent}},[n("div",{staticClass:"modal-background",on:{click:function(e){return t.$emit("close")}}}),t._v(" "),n("div",{staticClass:"modal-content p-5 has-background-info-light has-radius"},[n("h3",{staticClass:"subtitle is-5 has-text-centered"},[t._v(t._s(t.messageTitle))]),t._v(" "),n("div",{staticClass:"field has-addons has-addons-centered is-centered"},[n("div",{staticClass:"control has-icons-right has-icons-left is-expanded"},[n("input",{staticClass:"input ",attrs:{type:t.password_hidden?"password":"text",readonly:""},domProps:{value:t.messageContent}}),t._v(" "),n("span",{staticClass:"p-2 icon is-left is-clickable has-tooltip-arrow has-tooltip-fade unselectable",attrs:{"data-tooltip":t.visibility_message},on:{click:function(e){return e.preventDefault(),t.togglePasswordVisibility()},mouseout:function(e){t.visibility_message="Toggle visibility"}}},[t.password_hidden?n("font-awesome-icon",{staticClass:"mx-2 is-small unselectable",attrs:{icon:"fa-solid fa-eye"}}):n("font-awesome-icon",{staticClass:"mx-2 is-small unselectable",attrs:{icon:"fa-solid fa-eye-slash"}})],1),t._v(" "),n("span",{staticClass:"p-2 icon is-right is-clickable has-tooltip-arrow has-tooltip-fade unselectable",attrs:{"data-tooltip":t.copy_message},on:{click:function(e){return e.preventDefault(),t.copyToClipboard(t.messageContent)},mouseout:function(e){t.copy_message="Copy"}}},[t.copy_state?n("font-awesome-icon",{staticClass:" is-small",attrs:{icon:"fa-solid fa-copy"}}):n("font-awesome-icon",{attrs:{icon:"fa-solid fa-square-check"}})],1)])]),t._v(" "),n("button",{staticClass:"button modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(e){return t.$emit("close")}}}),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"has-text-centered"},[n("button",{staticClass:"button",on:{click:function(e){return t.$emit("close")}}},[t._v("Close")])])])])}),[],!1,null,null,null).exports,k=n(374);function I(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function M(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P={components:{Balance:y,CampaignList:x.a,Pagination:v.a,KeyModal:w,VueCountdown:f.a,SuccessModal:k.a},filters:{hide:function(t,e){return e?t:t.toString().split("").map((function(){return"•"})).join("")}},middleware:["auth"],data:function(){return{loading:null,page:1,perPage:10,showPK:!1,pages:[],pendingPayouts:[],showPayoutDetails:!1,successMessage:null,successTitle:null}},computed:M(M(M({},Object(d.b)({transactionsByUser:"transaction/transactionsByUser",getPendingPayouts:"pendingPayout/getPendingPayouts",campaignById:"campaign/campaignById",activeBatchesByCampaignId:"campaign/activeBatchesByCampaignId"})),Object(d.c)({campaigns:function(t){return t.campaign.campaigns}})),{},{myCampaigns:function(){var t=this;if(this.campaigns){var e=this.campaigns.filter((function(e){return e.owner[1]===t.$auth.user.accountName})).map((function(t){return M({},t)}));for(var i in e){var n=this.activeBatchesByCampaignId(e[i].id);e[i].batches=n,n&&(e[i].num_tasks=n.reduce((function(a,b){return a+b.num_tasks}),0),e[i].tasks_done=n.reduce((function(a,b){return a+b.real_tasks_done}),0))}return e}},transactions:function(){return this.transactionsByUser(this.$auth.user.vAccountRows[0].id)},paginatedTransactions:function(){var t=(this.page-1)*this.perPage;return this.transactions?this.transactions.slice(t,t+this.perPage):[]},pendingPayoutsStore:function(){var t;return null!==(t=this.getPendingPayouts)&&void 0!==t?t:null}}),mounted:function(){console.log("mounted"),this.$store.dispatch("pendingPayout/loadPendingPayouts")},methods:{logout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()},setPage:function(t){this.page=t},calculatePendingTime:function(t){var e=new Date("".concat(new Date(t),"UTC")).getTime()+1e3*this.$blockchain.getPayoutDelay()-Date.now();return e<0?0:e},transform:function(t){return Object.entries(t).forEach((function(e){var n=Object(c.a)(e,2),o=n[0],l=n[1],r=l<10?"0".concat(l):l;t[o]=r})),t.minutes>0&&t.seconds?"".concat(t.minutes,":").concat(t.seconds):" ✔"},payout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$blockchain.payout();case 4:n=e.sent,t.$store.dispatch("transaction/addTransaction",n),t.$store.dispatch("pendingPayout/loadPendingPayouts"),t.$blockchain.updateUserInfo(),t.transactionUrl="".concat(t.$blockchain.sdk.config.eosExplorerUrl,"/transaction/").concat(n.transaction_id),t.successTitle="Payout Completed",t.successMessage="All your available pending payouts have been completed and are added to your Effect account",e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),t.loading=!1;case 16:t.loading=!1;case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))()}}},j=(n(1359),Object(_.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center"},[n("h1",{staticClass:"title is-spaced has-text-weight-bold"},[t._v("\n        Effect Account | "+t._s(t.$auth.user.provider)+"@"+t._s(t.$auth.user.blockchain)+"\n      ")]),t._v(" "),n("balance"),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"columns my-auto"},[n("div",{staticClass:"column"},[n("div",{staticClass:"block"},[n("div",{staticClass:"has-text-weight-bold is-size-6 is-vecentered",staticStyle:{"min-height":"32px"}},[n("span",[t._v(t._s("bsc"===t.$auth.user.blockchain?"":"EOS Account Name"))]),t._v(" "),"bsc"===t.$auth.user.blockchain?n("span",[n("span",[t._v(" BSC Address")]),t._v(" "),"burner-wallet"===t.$auth.user.provider?n("button",{staticClass:"button is-info is-light is-small",on:{click:function(e){t.showPK=!t.showPK}}},[n("span",[n("font-awesome-icon",{staticClass:"is-small icon",attrs:{icon:"fa-solid fa-key"}})],1)]):t._e()]):t._e()]),t._v(" "),"bsc"===t.$auth.user.blockchain?n("a",{staticClass:"blockchain-address is-flex is-clipped",attrs:{href:t.$blockchain.bsc.explorer+"/address/"+t.$auth.user.address,target:"_blank"}},[t._v(t._s(t.$auth.user.address))]):n("a",{staticClass:"blockchain-address",attrs:{href:t.$blockchain.eos.explorer+"/address/"+t.$auth.user.accountName,target:"_blank"}},[t._v(t._s(t.$auth.user.accountName))]),t.$auth.user.permission?n("span",[t._v("@"+t._s(t.$auth.user.permission))]):t._e()])]),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"block"},[n("div",{staticClass:"has-text-weight-bold is-size-6",staticStyle:{"min-height":"32px"}},[t._v("\n              Account Name\n            ")]),t._v(" "),n("a",{staticClass:"is-flex is-clipped",attrs:{href:t.$blockchain.eos.explorer+"/account/"+t.$blockchain.sdk.account.config.accountContract+"?loadContract=true&tab=Tables&table=account&account="+t.$blockchain.sdk.account.config.accountContract+"&scope="+t.$blockchain.sdk.account.config.accountContract+"&limit=1&lower_bound="+t.$auth.user.vAccountRows[0].id+"&upper_bound="+t.$auth.user.vAccountRows[0].id,target:"_blank"}},[t._v(t._s(t.$auth.user.accountName))])])]),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"block"},[n("div",{staticClass:"has-text-weight-bold is-size-6",staticStyle:{"min-height":"32px"}},[t._v("\n              ID\n            ")]),t._v("\n            "+t._s(t.$auth.user.vAccountRows[0].id)+"\n          ")])])]),t._v(" "),n("hr"),t._v(" "),0!==t.$blockchain.efxPending?n("div",{staticClass:"py-4"},[n("div",[n("h2",{staticClass:"title is-4"},[t._v("\n            Pending Payout\n          ")]),t._v(" "),null!==t.$blockchain.efxAvailable&&0!==t.$blockchain.efxPayout?n("button",{staticClass:"button is-fullwidth-mobile is-primary",class:{"is-loading":!0===t.loading},on:{click:function(e){return e.preventDefault(),t.payout()}}},[t.loading?t._e():n("p",[t._v("\n              Cash out "),n("span",[t._v(t._s(t.$blockchain.efxPayout.toFixed(2))+" EFX!")])])]):0===t.$blockchain.efxPayout?n("button",{staticClass:"button is-fullwidth-mobile is-primary is-wide",attrs:{disabled:"disabled"}},[n("p",{},[t._v("\n              Nothing to cash out\n            ")])]):n("button",{staticClass:"button is-fullwidth-mobile is-primary",attrs:{disabled:"disabled"}},[n("p",[t._v("... EFX")])]),t._v(" "),n("div",{staticClass:"payout-detail mt-3",on:{click:function(e){t.showPayoutDetails=!t.showPayoutDetails}}},[n("span",[t._v("\n              View Details\n              "),t.showPayoutDetails?n("font-awesome-icon",{staticClass:"ml-1 icon",staticStyle:{width:"10px"},attrs:{icon:"fa-solid fa-chevron-up"}}):n("font-awesome-icon",{staticClass:"ml-1 icon",staticStyle:{width:"10px"},attrs:{icon:"fa-solid fa-chevron-down"}})],1)])]),t._v(" "),t.showPayoutDetails?n("div",{staticClass:"mt-5 payout-table"},[t.pendingPayoutsStore?n("div",{staticClass:"table-container"},[n("table",{staticClass:"table",staticStyle:{width:"100%"}},[t._m(0),t._v(" "),n("tbody",t._l(t.pendingPayoutsStore.payouts.rows,(function(e){return n("tr",{key:e.id},[n("td",[n("nuxt-link",{attrs:{to:{path:"/campaigns/"+t.$blockchain.splitCompositeKey(e.batch_id).campaign}}},[t._v("\n                      "+t._s(t.campaignById(t.$blockchain.splitCompositeKey(e.batch_id).campaign).info.title)+"\n                    ")])],1),t._v(" "),n("td",[n("nuxt-link",{attrs:{to:{path:"/campaigns/"+t.$blockchain.splitCompositeKey(e.batch_id).campaign+"/"+e.batch_id}}},[t._v("\n                      "+t._s(t.$blockchain.splitCompositeKey(e.batch_id).batch)+"\n                    ")])],1),t._v(" "),n("td",[t._v(t._s(new Date(e.last_submission_time).toLocaleDateString()))]),t._v(" "),n("td",[n("vue-countdown",{ref:"countdown",refInFor:!0,attrs:{"auto-start":!0,time:t.calculatePendingTime(e.last_submission_time),transform:t.transform},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                        "+t._s(e)+"\n                      ")]}}],null,!0)})],1),t._v(" "),n("td",[t._v(t._s(parseFloat(e.pending.quantity).toFixed(2))+" EFX")])])})),0),t._v(" "),n("tfoot",[n("tr",[n("th",{attrs:{colspan:"3"}}),t._v(" "),n("th",[t._v("Total")]),t._v(" "),n("th",[n("strong",[t._v(t._s(parseFloat(t.$blockchain.efxPending).toFixed(2))+" EFX")])])]),t._v(" "),n("tr",[n("th",{staticStyle:{border:"none"},attrs:{colspan:"3"}}),t._v(" "),n("th",[t._v("Claimable")]),t._v(" "),n("th",[n("strong",[t._v(t._s(parseFloat(t.$blockchain.efxPayout).toFixed(2))+" EFX")])])])])])]):n("span",[t._v("No Pending Payouts")])]):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"is-flex is-justify-content-space-between mt-6 is-align-items-center"},[n("h2",{staticClass:"title is-4"},[t._v("\n          My Tasks\n        ")]),t._v(" "),n("div",{staticClass:"is-pulled-right no-float-mobile has-margin-bottom-mobile"},[n("nuxt-link",{staticClass:"button is-primary",attrs:{to:"/campaigns/templates"}},[n("span",{staticClass:"icon"},[t._v("\n              +\n            ")]),t._v(" "),n("span",[t._v("Create Task")])]),t._v(" "),n("nuxt-link",{staticClass:"button is-primary",attrs:{to:"/qualifications/new"}},[n("span",{staticClass:"icon"},[t._v("\n              +\n            ")]),t._v(" "),n("span",[t._v("Create Qualifier")])])],1)]),t._v(" "),n("campaign-list",{staticClass:"mb-5",attrs:{campaigns:t.myCampaigns}}),t._v(" "),n("div",{staticClass:"mb-6"},[n("h2",{staticClass:"title is-4 mt-6 is-spaced"},[t._v("\n          Transactions\n        ")]),t._v(" "),t.transactions?n("div",{staticClass:"table-container"},[n("table",{staticClass:"table",staticStyle:{width:"100%"}},[t._m(1),t._v(" "),n("tbody",t._l(t.paginatedTransactions,(function(e){return n("tr",{key:e.transaction_id},[n("td",[n("a",{attrs:{href:t.$blockchain.eos.explorer+"/transaction/"+e.transaction_id,target:"_blank"}},[t._v(t._s(e.transaction_id.substr(0,30))+"…")])]),t._v(" "),n("td",[e.processed&&e.processed.action_traces?n("span",[t._v(t._s(e.processed.action_traces[0].act.name))]):t._e()]),t._v(" "),n("td",[e.processed?n("span",[t._v(t._s(new Date(e.processed.block_time).toLocaleString()))]):t._e()]),t._v(" "),n("td",[e.processed&&e.processed.receipt?n("span",[t._v(t._s(e.processed.receipt.status))]):t._e()])])})),0)])]):n("span",[t._v("No transactions found")]),t._v(" "),t.transactions?n("pagination",{attrs:{items:t.transactions.length,page:t.page,"per-page":t.perPage},on:{setPage:t.setPage}}):t._e()],1),t._v(" "),n("hr"),t._v(" "),n("button",{staticClass:"button is-white",attrs:{"exact-active-class":"is-active"},on:{click:t.logout}},[t._m(2),t._v(" "),n("span",[t._v("Logout")])]),t._v(" "),n("br"),n("br")],1),t._v(" "),t.showPK?n("key-modal",{attrs:{message:t.$auth.user.privateKey,title:"PrivateKey 🔑"},on:{close:function(e){t.showPK=!t.showPK}}}):t._e(),t._v(" "),t.successMessage?n("success-modal",{attrs:{message:t.successMessage,title:t.successTitle}}):t._e()],1)])}),o,!1,null,"102e399c",null));e.default=j.exports}}]);