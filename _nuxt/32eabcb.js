(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1256:function(t,e,n){t.exports=n.p+"img/effect-force-icon.828a6c5.png"},1262:function(t,e,n){"use strict";var c={props:["page","perPage","items"],computed:{maxPage:function(){return Math.ceil(this.items/this.perPage)}},watch:{items:function(){this.$emit("setPage",1)}}},o=n(23),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items&&t.items>t.perPage?n("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[n("span",{staticStyle:{"padding-left":"0.5em"}},[t._v(t._s((t.page-1)*t.perPage+1)+"-"+t._s(Math.min(t.page*t.perPage,t.items))+" of\n    "+t._s(t.items))]),t._v(" "),n("a",{staticClass:"pagination-previous",attrs:{disabled:1===t.page},on:{click:function(e){return t.$emit("setPage",t.page-1)}}},[t._v("Previous")]),t._v(" "),n("a",{staticClass:"pagination-next",attrs:{disabled:!t.maxPage||t.page===t.maxPage},on:{click:function(e){return t.$emit("setPage",t.page+1)}}},[t._v("Next page")]),t._v(" "),n("ul",{staticClass:"pagination-list has-margin-top-mobile"},[t.page>2?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",1)}}},[t._v("1")])]):t._e(),t._v(" "),t.page>3?n("li",[n("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._v(" "),t.page>1?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.page-1)}}},[t._v(t._s(t.page-1))])]):t._e(),t._v(" "),n("li",[n("a",{staticClass:"pagination-link is-current",attrs:{"aria-current":"page"}},[t._v(t._s(t.page))])]),t._v(" "),t.page<t.maxPage?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.page+1)}}},[t._v(t._s(t.page+1))])]):t._e(),t._v(" "),t.maxPage>t.page+2?n("li",[n("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._v(" "),t.maxPage>t.page+1?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.maxPage)}}},[t._v(t._s(t.maxPage))])]):t._e()])]):t._e()}),[],!1,null,null,null);e.a=component.exports},1263:function(t,e,n){var map={"./effect-captions-icon.png":1264,"./effect-dao-icon.png":1265,"./effect-force-icon.png":1256,"./effect-socials-icon.png":1266,"./effect-translate-icon.png":1267};function c(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}c.keys=function(){return Object.keys(map)},c.resolve=o,t.exports=c,c.id=1263},1264:function(t,e,n){t.exports=n.p+"img/effect-captions-icon.d32e1fd.png"},1265:function(t,e,n){t.exports=n.p+"img/effect-dao-icon.8a49264.png"},1266:function(t,e,n){t.exports=n.p+"img/effect-socials-icon.113948d.png"},1267:function(t,e,n){t.exports=n.p+"img/effect-translate-icon.a76baca.png"},1268:function(t,e,n){var content=n(1273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("0416e283",content,!0,{sourceMap:!1})},1271:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeT0iMTEuMzA3NyIgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeD0iMTEuMzA3NiIgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeD0iMTEuMzA3NiIgeT0iMTEuMzA3NyIgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPC9zdmc+Cg=="},1272:function(t,e,n){"use strict";n(1268)},1273:function(t,e,n){var c=n(57),o=n(1274),r=n(1275),l=c(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);var d=o(r);l.push([t.i,".title-section[data-v-330c7372]{height:100%}.column[data-v-330c7372]{flex-wrap:wrap;align-items:stretch}.box.is-disabled[data-v-330c7372]{background-color:rgba(222,224,230,.5)}.box.is-disabled .column[data-v-330c7372]:not(:last-child){opacity:.5}.box.has-reservation[data-v-330c7372]{box-shadow:0 0 14px 5px rgba(17,72,235,.3)}.box .image img[data-v-330c7372]{border:1px solid #d2d9eb}.card .card-image[data-v-330c7372],.card .card-image figure[data-v-330c7372],.card .card-image img[data-v-330c7372],.card .card-image p[data-v-330c7372]{height:75px!important}.card .card-image img[data-v-330c7372]{width:100%;-o-object-fit:contain;object-fit:contain;border-radius:6px!important}.switch-button[data-v-330c7372]{background:#d7dcee;border-radius:6px;overflow:hidden;width:80px;text-align:center;font-size:18px;letter-spacing:1px;color:#155fff;padding:4px 40px 4px 4px;position:relative}.switch-button[data-v-330c7372]:before{content:url("+d+');position:absolute;top:9px;bottom:0;right:1px;width:40px;align-items:center;justify-content:center;z-index:3;pointer-events:none}.switch-button-checkbox[data-v-330c7372]{cursor:pointer;position:absolute;top:0;left:0;bottom:0;width:100%;height:100%;opacity:0;z-index:2}.switch-button-checkbox:checked+.switch-button-label[data-v-330c7372]:before{transform:translateX(36px);transition:transform .3s linear}.switch-button-checkbox+.switch-button-label[data-v-330c7372]{position:relative;padding:1px 0;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.switch-button-checkbox+.switch-button-label[data-v-330c7372]:before{content:"";padding:1px 0;background:#f6f7ff;height:100%;width:100%;position:absolute;left:0;top:0;border-radius:6px;transform:translateX(0);transition:transform .3s}.switch-button-checkbox+.switch-button-label .switch-button-label-span[data-v-330c7372]{position:relative;top:5px}.image[data-v-330c7372]{max-height:90px}@media screen and (min-width:1024px){.column.is-1-desktop[data-v-330c7372]{flex:none;width:8.33333337%;max-width:76px}}.grid[data-v-330c7372]{text-align:center}@media screen and (max-width:1023px){.columns[data-v-330c7372]{text-align:center}}',""]),t.exports=l},1274:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},1275:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0iIzg0OEE5QSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMi40MjMiIGN5PSIyLjQyMzA2IiByPSIxLjYxNTM4IiBmaWxsPSIjODQ4QTlBIi8+CjxyZWN0IHg9IjUuNjUzMzIiIHk9IjEuNjE1MzYiIHdpZHRoPSIxNC41Mzg1IiBoZWlnaHQ9IjEuNjE1MzgiIHJ4PSIwLjgwNzY5MiIgZmlsbD0iIzg0OEE5QSIvPgo8ZWxsaXBzZSBjeD0iMi40MjMiIGN5PSI4LjA3NjkzIiByeD0iMS42MTUzOCIgcnk9IjEuNjE1MzgiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeD0iNS42NTMzMiIgeT0iNy4yNjkyMyIgd2lkdGg9IjE0LjUzODUiIGhlaWdodD0iMS42MTUzOSIgcng9IjAuODA3NjkzIiBmaWxsPSIjODQ4QTlBIi8+CjxlbGxpcHNlIGN4PSIyLjQyMyIgY3k9IjEzLjczMDgiIHJ4PSIxLjYxNTM4IiByeT0iMS42MTUzOCIgZmlsbD0iIzg0OEE5QSIvPgo8cmVjdCB4PSI1LjY1MzMyIiB5PSIxMi45MjMxIiB3aWR0aD0iMTQuNTM4NSIgaGVpZ2h0PSIxLjYxNTM4IiByeD0iMC44MDc2OTIiIGZpbGw9IiMjODQ4QTlBIi8+CjxlbGxpcHNlIGN4PSIyLjQyMyIgY3k9IjE5LjM4NDYiIHJ4PSIxLjYxNTM4IiByeT0iMS42MTUzOCIgZmlsbD0iIzg0OEE5QSIvPgo8cmVjdCB4PSI1LjY1MzMyIiB5PSIxOC41NzY5IiB3aWR0aD0iMTQuNTM4NSIgaGVpZ2h0PSIxLjYxNTM4IiByeD0iMC44MDc2OTIiIGZpbGw9IiM4NDhBOUEiLz4KPC9zdmc+Cg=="},1280:function(t,e,n){"use strict";var c=[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"switch-button-label",attrs:{for:""}},[e("span",{staticClass:"switch-button-label-span"},[e("img",{attrs:{height:"28px",src:n(1271)}})])])}],o=(n(88),n(50),n(79),n(25),n(106),n(59),n(107),n(38)),r=(n(89),n(184));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"CampaignList",components:{Pagination:n(1262).a},props:["gridToggle","campaigns"],data:function(){return{page:this.$route.query.page||1,perPage:30,ipfsExplorer:"https://ipfs.effect.ai",categories:["translate","captions","socials","dao"]}},computed:d(d(d({},Object(r.b)({batchesByCampaignId:"campaign/batchesByCampaignId"})),Object(r.c)({campaignsLoading:function(t){return t.campaign.loading},allCampaignsLoaded:function(t){return t.campaign.allCampaignsLoaded},allBatchesLoaded:function(t){return t.campaign.allBatchesLoaded},allSubmissionsLoaded:function(t){return t.campaign.allSubmissionsLoaded}})),{},{list:{get:function(){return this.$store.state.view.grid&&this.gridToggle},set:function(t){this.$store.commit("view/SET_GRID_LIST",t)}},grid:function(){return!this.list&&this.gridToggle},paginatedCampaigns:function(){var t=(this.page-1)*this.perPage;return this.campaigns?this.campaigns.slice(t,t+this.perPage):[]}}),created:function(){this.getForceInfo()},methods:{setPage:function(t){this.page=t},getForceInfo:function(){this.campaigns&&this.allCampaignsLoaded||this.$store.dispatch("campaign/getCampaigns"),this.allBatchesLoaded||this.$store.dispatch("campaign/getBatches"),this.allSubmissionsLoaded||this.$store.dispatch("campaign/getSubmissions")}}},f=(n(1272),n(23)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"is-flex is-justify-content-space-between"},[c("div"),t._v(" "),t.gridToggle?c("div",{staticClass:"is-hidden-touch"},[c("div",{staticClass:"switch-button mb-1"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.list,expression:"list"}],staticClass:"switch-button-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.list)?t._i(t.list,null)>-1:t.list},on:{change:function(e){var n=t.list,c=e.target,o=!!c.checked;if(Array.isArray(n)){var r=t._i(n,null);c.checked?r<0&&(t.list=n.concat([null])):r>-1&&(t.list=n.slice(0,r).concat(n.slice(r+1)))}else t.list=o}}}),t._v(" "),t._m(0)])]):t._e()]),t._v(" "),c("hr",{staticClass:"mt-1"}),t._v(" "),c("div",{staticClass:"columns is-multiline",class:{grid:t.grid}},t._l(t.paginatedCampaigns,(function(e){return c("div",{key:e.id,staticClass:"column is-one-third-tablet",class:{"is-one-fifth-desktop":t.grid,"is-12-desktop":!t.grid}},[c("nuxt-link",{staticClass:"box p-4",class:{"is-disabled":null===e.info,"has-reservation":e.userHasReservation},attrs:{to:"/campaigns/"+e.id}},[c("div",{staticClass:"columns is-vcentered is-multiline"},[c("div",{staticClass:"column is-12-touch",class:{"is-1-desktop":!t.grid,"is-12-desktop":t.grid}},[c("p",{staticClass:"image has-radius is-vcentered has-background-image"},[e.info&&e.info.image?c("img",{attrs:{src:e.info.image.Hash?t.ipfsExplorer+"/ipfs/"+e.info.image.Hash:e.info.image}}):e.info&&e.info.category&&t.categories.includes(e.info.category)?c("img",{attrs:{src:n(1263)("./effect-"+e.info.category+"-icon.png")}}):c("img",{attrs:{src:n(1256),alt:"campaign title"}})])]),t._v(" "),c("div",{staticClass:"column",class:{"is-12":t.grid,"is-4-desktop is-4-widescreen is-12-touch":!t.grid}},[c("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[c("div",[e.info&&e.info.category?c("nuxt-link",{staticClass:"tag is-light mb-2 has-border is-capitalized",class:{"is-dao":"dao"===e.info.category,"is-dao":"dao"===e.info.category,"is-socials":"socials"===e.info.category,"is-translate":"translate"===e.info.category,"is-captions":"captions"===e.info.category},attrs:{to:"/?category="+e.info.category}},[t._v("\n                  "+t._s(e.info.category)+"\n                ")]):null!==e.info?c("span",{staticClass:"tag is-light mb-2"},[c("span",{staticClass:"loading-text"},[t._v("Loading")])]):t._e()],1),t._v(" "),e.info?c("span",[e.info.title?c("span",[t._v(t._s(e.info.title))]):c("i",[t._v("- Untitled -")])]):null!==e.info?c("span",{staticClass:"loading-text"},[t._v("Loading")]):c("span",{staticClass:"has-text-danger-dark"},[t._v("Could not load campaign info")])]),t._v(" "),c("div",{staticClass:"has-text-grey is-size-7"},[e.info?c("div",[e.info.description?c("div",{staticClass:"is-ellipsis"},[t._v("\n                  "+t._s(e.info.description)+"\n                ")]):c("i",[t._v("- no description -")])]):null!==e.info?c("div",[t._v("\n                ........\n              ")]):t._e()])]),t._v(" "),c("div",{staticClass:"column is-12",class:{"is-2-desktop":!t.grid}},[c("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n              Requester:\n            ")]),t._v(" "),c("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[c("nuxt-link",{attrs:{to:"/profile/"+e.owner[1]}},[c("span",{staticClass:"is-ellipsis"},[t._v(t._s(e.owner[1]))])])],1)]),t._v(" "),c("div",{staticClass:"column"},[c("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n              Reward:\n            ")]),t._v(" "),c("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[t._v("\n              "+t._s(e.reward.quantity)+"\n            ")])]),t._v(" "),c("div",{staticClass:"column"},[c("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n              Tasks:\n            ")]),t._v(" "),c("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[null===t.batchesByCampaignId(e.id)?c("span",{staticClass:"loading-text"},[t._v("\n                Loading\n              ")]):c("span",[t._v("\n                "+t._s(t.batchesByCampaignId(e.id).reduce((function(a,b){return a+b.num_tasks}),0)-t.batchesByCampaignId(e.id).reduce((function(a,b){return a+b.tasks_done}),0))+"/"+t._s(t.batchesByCampaignId(e.id).reduce((function(a,b){return a+b.num_tasks}),0))+" left\n                "),c("br")])])]),t._v(" "),c("div",{staticClass:"column has-text-right",class:{"is-12":t.grid}},[c("button",{staticClass:"button is-primary has-text-weight-semibold is-fullwidth",class:{"is-loading":void 0===e.info,"is-accent":null===e.info||e.userHasReservation,"is-outlined":null===e.info,"is-wide":!t.grid},attrs:{disabled:!e||null===e.info}},[e.userHasReservation?c("span",[t._v("Go to Task")]):c("span",[t._v("View")])])])])])],1)})),0),t._v(" "),t.campaigns?c("pagination",{staticClass:"mt-2",attrs:{items:t.campaigns.length,page:t.page,"per-page":t.perPage},on:{setPage:t.setPage}}):t._e(),t._v(" "),t.campaignsLoading?c("div",{staticClass:"subtitle loading-text"},[t._v("\n    Campaigns loading\n  ")]):t.allBatchesLoaded?t.campaigns&&!t.campaigns.length?c("div",{staticClass:"subtitle"},[t._v("\n    No tasks\n  ")]):t.campaigns?t._e():c("div",{staticClass:"subtitle has-text-danger"},[t._v("\n    Could not retrieve campaigns\n  ")]):c("div",{staticClass:"loading-text"},[t._v("\n    Batches loading\n  ")])],1)}),c,!1,null,"330c7372",null);e.a=component.exports},1491:function(t,e,n){"use strict";n.r(e);n(88),n(50),n(106),n(59),n(107);var c=n(3),o=n(38),r=(n(33),n(71),n(79),n(25),n(184));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{CampaignList:n(1280).a},middleware:["auth"],data:function(){return{name:this.$route.params.name,account:null,loading:!1}},computed:d(d({},Object(r.c)({campaigns:function(t){return t.campaign.campaigns}})),{},{myCampaigns:function(){var t=this;if(this.campaigns)return this.campaigns.filter((function(e){return e.owner[1]===t.name}))}}),created:function(){this.getProfile()},methods:{getProfile:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.$blockchain.getVAccountByName(t.name);case 4:(n=e.sent)&&n.length&&(t.account=n[0]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.$blockchain.handleError(e.t0);case 11:t.loading=!1;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},f=n(23),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center"},[n("h4",{staticClass:"title is-spaced"},[t._v("\n        Effect Account\n      ")]),t._v(" "),t.loading?n("div",{staticClass:"loading-text"},[t._v("\n        Loading\n      ")]):t.account?n("div",[n("div",{staticClass:"block"},[n("div",{staticClass:"has-text-weight-bold is-size-6"},[t._v("\n            Effect Account Name:\n          ")]),t._v(" "),n("div",{staticClass:"subtitle"},["address"===t.account.address[0]?n("span",{staticClass:"blockchain-address"},[t._v(t._s(t.account.address[1]))]):n("a",{attrs:{href:t.$blockchain.eos.explorer+"/address/"+t.account.address[1],target:"_blank"}},[t._v(t._s(t.account.address[1]))])])]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"has-text-weight-bold is-size-6"},[t._v("\n            Effect Account ID:\n          ")]),t._v(" "),n("div",{staticClass:"subtitle"},[t._v("\n            "+t._s(t.account.id)+"\n          ")])]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"has-text-weight-bold is-size-6"},[t._v("\n            Blockchain:\n          ")]),t._v(" "),n("div",{staticClass:"subtitle"},[n("a",{attrs:{href:t.$blockchain.eos.explorer+"/account/"+t.$blockchain.sdk.account.config.account_contract+"?loadContract=true&tab=Tables&table=account&account="+t.$blockchain.sdk.account.config.account_contract+"&scope="+t.$blockchain.sdk.account.config.account_contract+"&limit=1&lower_bound="+t.account.id+"&upper_bound="+t.account.id,target:"_blank"}},[t._v("View on explorer")])])]),t._v(" "),n("h2",{staticClass:"title is-4"},[t._v("\n          Campaigns\n        ")]),t._v(" "),n("campaign-list",{staticClass:"mb-6",attrs:{campaigns:t.myCampaigns}})],1):n("div",[t._v("\n        Could not retrieve account\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);