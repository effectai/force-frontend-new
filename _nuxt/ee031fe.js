(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1256:function(t,e,n){t.exports=n.p+"img/effect-force-icon.828a6c5.png"},1262:function(t,e,n){"use strict";var o={props:["page","perPage","items"],computed:{maxPage:function(){return Math.ceil(this.items/this.perPage)}},watch:{items:function(){this.$emit("setPage",1)}}},c=n(23),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items&&t.items>t.perPage?n("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[n("span",{staticStyle:{"padding-left":"0.5em"}},[t._v(t._s((t.page-1)*t.perPage+1)+"-"+t._s(Math.min(t.page*t.perPage,t.items))+" of\n    "+t._s(t.items))]),t._v(" "),n("a",{staticClass:"pagination-previous",attrs:{disabled:1===t.page},on:{click:function(e){return t.$emit("setPage",t.page-1)}}},[t._v("Previous")]),t._v(" "),n("a",{staticClass:"pagination-next",attrs:{disabled:!t.maxPage||t.page===t.maxPage},on:{click:function(e){return t.$emit("setPage",t.page+1)}}},[t._v("Next page")]),t._v(" "),n("ul",{staticClass:"pagination-list has-margin-top-mobile"},[t.page>2?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",1)}}},[t._v("1")])]):t._e(),t._v(" "),t.page>3?n("li",[n("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._v(" "),t.page>1?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.page-1)}}},[t._v(t._s(t.page-1))])]):t._e(),t._v(" "),n("li",[n("a",{staticClass:"pagination-link is-current",attrs:{"aria-current":"page"}},[t._v(t._s(t.page))])]),t._v(" "),t.page<t.maxPage?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.page+1)}}},[t._v(t._s(t.page+1))])]):t._e(),t._v(" "),t.maxPage>t.page+2?n("li",[n("span",{staticClass:"pagination-ellipsis"},[t._v("…")])]):t._e(),t._v(" "),t.maxPage>t.page+1?n("li",[n("a",{staticClass:"pagination-link",on:{click:function(e){return t.$emit("setPage",t.maxPage)}}},[t._v(t._s(t.maxPage))])]):t._e()])]):t._e()}),[],!1,null,null,null);e.a=component.exports},1263:function(t,e,n){var map={"./effect-captions-icon.png":1264,"./effect-dao-icon.png":1265,"./effect-force-icon.png":1256,"./effect-socials-icon.png":1266,"./effect-translate-icon.png":1267};function o(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=c,t.exports=o,o.id=1263},1264:function(t,e,n){t.exports=n.p+"img/effect-captions-icon.d32e1fd.png"},1265:function(t,e,n){t.exports=n.p+"img/effect-dao-icon.8a49264.png"},1266:function(t,e,n){t.exports=n.p+"img/effect-socials-icon.113948d.png"},1267:function(t,e,n){t.exports=n.p+"img/effect-translate-icon.a76baca.png"},1268:function(t,e,n){var content=n(1273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("7f71a766",content,!0,{sourceMap:!1})},1271:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeT0iMTEuMzA3NyIgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeD0iMTEuMzA3NiIgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeD0iMTEuMzA3NiIgeT0iMTEuMzA3NyIgd2lkdGg9IjkuNjkyMzEiIGhlaWdodD0iOS42OTIzMSIgcng9IjIiIGZpbGw9IiM4NDhBOUEiLz4KPC9zdmc+Cg=="},1272:function(t,e,n){"use strict";n(1268)},1273:function(t,e,n){var o=n(57),c=n(1274),r=n(1275),l=o(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);var d=c(r);l.push([t.i,".title-section[data-v-1ec4ebca]{height:100%}.column[data-v-1ec4ebca]{flex-wrap:wrap;align-items:stretch}.box.is-disabled[data-v-1ec4ebca]{background-color:rgba(222,224,230,.5)}.box.is-disabled .column[data-v-1ec4ebca]:not(:last-child){opacity:.5}.box.has-reservation[data-v-1ec4ebca]{box-shadow:0 0 14px 5px rgba(17,72,235,.3)}.box .image img[data-v-1ec4ebca]{border:1px solid #d2d9eb}.card .card-image[data-v-1ec4ebca],.card .card-image figure[data-v-1ec4ebca],.card .card-image img[data-v-1ec4ebca],.card .card-image p[data-v-1ec4ebca]{height:75px!important}.card .card-image img[data-v-1ec4ebca]{width:100%;-o-object-fit:contain;object-fit:contain;border-radius:6px!important}.switch-button[data-v-1ec4ebca]{background:#d7dcee;border-radius:6px;overflow:hidden;width:80px;text-align:center;font-size:18px;letter-spacing:1px;color:#155fff;padding:4px 40px 4px 4px;position:relative}.switch-button[data-v-1ec4ebca]:before{content:url("+d+');position:absolute;top:9px;bottom:0;right:1px;width:40px;align-items:center;justify-content:center;z-index:3;pointer-events:none}.switch-button-checkbox[data-v-1ec4ebca]{cursor:pointer;position:absolute;top:0;left:0;bottom:0;width:100%;height:100%;opacity:0;z-index:2}.switch-button-checkbox:checked+.switch-button-label[data-v-1ec4ebca]:before{transform:translateX(36px);transition:transform .3s linear}.switch-button-checkbox+.switch-button-label[data-v-1ec4ebca]{position:relative;padding:1px 0;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.switch-button-checkbox+.switch-button-label[data-v-1ec4ebca]:before{content:"";padding:1px 0;background:#f6f7ff;height:100%;width:100%;position:absolute;left:0;top:0;border-radius:6px;transform:translateX(0);transition:transform .3s}.switch-button-checkbox+.switch-button-label .switch-button-label-span[data-v-1ec4ebca]{position:relative;top:5px}.image[data-v-1ec4ebca]{max-height:90px}@media screen and (min-width:1024px){.column.is-1-desktop[data-v-1ec4ebca]{flex:none;width:8.33333337%;max-width:76px}}.grid[data-v-1ec4ebca]{text-align:center}@media screen and (max-width:1023px){.columns[data-v-1ec4ebca]{text-align:center}}',""]),t.exports=l},1274:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},1275:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0iIzg0OEE5QSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMi40MjMiIGN5PSIyLjQyMzA2IiByPSIxLjYxNTM4IiBmaWxsPSIjODQ4QTlBIi8+CjxyZWN0IHg9IjUuNjUzMzIiIHk9IjEuNjE1MzYiIHdpZHRoPSIxNC41Mzg1IiBoZWlnaHQ9IjEuNjE1MzgiIHJ4PSIwLjgwNzY5MiIgZmlsbD0iIzg0OEE5QSIvPgo8ZWxsaXBzZSBjeD0iMi40MjMiIGN5PSI4LjA3NjkzIiByeD0iMS42MTUzOCIgcnk9IjEuNjE1MzgiIGZpbGw9IiM4NDhBOUEiLz4KPHJlY3QgeD0iNS42NTMzMiIgeT0iNy4yNjkyMyIgd2lkdGg9IjE0LjUzODUiIGhlaWdodD0iMS42MTUzOSIgcng9IjAuODA3NjkzIiBmaWxsPSIjODQ4QTlBIi8+CjxlbGxpcHNlIGN4PSIyLjQyMyIgY3k9IjEzLjczMDgiIHJ4PSIxLjYxNTM4IiByeT0iMS42MTUzOCIgZmlsbD0iIzg0OEE5QSIvPgo8cmVjdCB4PSI1LjY1MzMyIiB5PSIxMi45MjMxIiB3aWR0aD0iMTQuNTM4NSIgaGVpZ2h0PSIxLjYxNTM4IiByeD0iMC44MDc2OTIiIGZpbGw9IiMjODQ4QTlBIi8+CjxlbGxpcHNlIGN4PSIyLjQyMyIgY3k9IjE5LjM4NDYiIHJ4PSIxLjYxNTM4IiByeT0iMS42MTUzOCIgZmlsbD0iIzg0OEE5QSIvPgo8cmVjdCB4PSI1LjY1MzMyIiB5PSIxOC41NzY5IiB3aWR0aD0iMTQuNTM4NSIgaGVpZ2h0PSIxLjYxNTM4IiByeD0iMC44MDc2OTIiIGZpbGw9IiM4NDhBOUEiLz4KPC9zdmc+Cg=="},1280:function(t,e,n){"use strict";var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"switch-button-label",attrs:{for:""}},[e("span",{staticClass:"switch-button-label-span"},[e("img",{attrs:{height:"28px",src:n(1271)}})])])}],c=(n(88),n(50),n(79),n(25),n(106),n(59),n(107),n(38)),r=(n(89),n(184));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"CampaignList",components:{Pagination:n(1262).a},props:["gridToggle","campaigns"],data:function(){return{page:this.$route.query.page||1,perPage:30,ipfsExplorer:"https://ipfs.effect.ai",categories:["translate","captions","socials","dao"]}},computed:d(d(d({},Object(r.b)({batchesByCampaignId:"campaign/batchesByCampaignId"})),Object(r.c)({campaignsLoading:function(t){return t.campaign.loading},allCampaignsLoaded:function(t){return t.campaign.allCampaignsLoaded},allBatchesLoaded:function(t){return t.campaign.allBatchesLoaded},allSubmissionsLoaded:function(t){return t.campaign.allSubmissionsLoaded}})),{},{list:{get:function(){return this.$store.state.view.grid},set:function(t){this.$store.commit("view/SET_GRID_LIST",t)}},grid:function(){return!this.list&&this.gridToggle},paginatedCampaigns:function(){var t=(this.page-1)*this.perPage;return this.campaigns?this.campaigns.slice(t,t+this.perPage):[]}}),created:function(){this.getForceInfo()},methods:{setPage:function(t){this.page=t},getForceInfo:function(){this.campaigns&&this.allCampaignsLoaded||this.$store.dispatch("campaign/getCampaigns"),this.allBatchesLoaded||this.$store.dispatch("campaign/getBatches"),this.allSubmissionsLoaded||this.$store.dispatch("campaign/getSubmissions")}}},f=(n(1272),n(23)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"is-flex is-justify-content-space-between"},[o("div"),t._v(" "),t.gridToggle?o("div",{staticClass:"is-hidden-touch"},[o("div",{staticClass:"switch-button mb-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.list,expression:"list"}],staticClass:"switch-button-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.list)?t._i(t.list,null)>-1:t.list},on:{change:function(e){var n=t.list,o=e.target,c=!!o.checked;if(Array.isArray(n)){var r=t._i(n,null);o.checked?r<0&&(t.list=n.concat([null])):r>-1&&(t.list=n.slice(0,r).concat(n.slice(r+1)))}else t.list=c}}}),t._v(" "),t._m(0)])]):t._e()]),t._v(" "),o("hr",{staticClass:"mt-1"}),t._v(" "),o("div",{staticClass:"columns is-multiline",class:{grid:t.grid}},t._l(t.paginatedCampaigns,(function(e){return o("div",{key:e.id,staticClass:"column is-one-third-tablet",class:{"is-one-fifth-desktop":t.grid,"is-12-desktop":!t.grid}},[o("nuxt-link",{staticClass:"box p-4",class:{"is-disabled":null===e.info,"has-reservation":e.userHasReservation},attrs:{to:"/campaigns/"+e.id}},[o("div",{staticClass:"columns is-vcentered is-multiline"},[o("div",{staticClass:"column is-12-touch",class:{"is-1-desktop":!t.grid,"is-12-desktop":t.grid}},[o("p",{staticClass:"image has-radius is-vcentered has-background-image"},[e.info&&e.info.image?o("img",{attrs:{src:e.info.image.Hash?t.ipfsExplorer+"/ipfs/"+e.info.image.Hash:e.info.image}}):e.info&&e.info.category&&t.categories.includes(e.info.category)?o("img",{attrs:{src:n(1263)("./effect-"+e.info.category+"-icon.png")}}):o("img",{attrs:{src:n(1256),alt:"campaign title"}})])]),t._v(" "),o("div",{staticClass:"column",class:{"is-12":t.grid,"is-4-desktop is-4-widescreen is-12-touch":!t.grid}},[o("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[o("div",[e.info&&e.info.category?o("nuxt-link",{staticClass:"tag is-light mb-2 has-border is-capitalized",class:{"is-dao":"dao"===e.info.category,"is-dao":"dao"===e.info.category,"is-socials":"socials"===e.info.category,"is-translate":"translate"===e.info.category,"is-captions":"captions"===e.info.category},attrs:{to:"/?category="+e.info.category}},[t._v("\n                  "+t._s(e.info.category)+"\n                ")]):null!==e.info?o("span",{staticClass:"tag is-light mb-2"},[o("span",{staticClass:"loading-text"},[t._v("Loading")])]):t._e()],1),t._v(" "),e.info?o("span",[e.info.title?o("span",[t._v(t._s(e.info.title))]):o("i",[t._v("- Untitled -")])]):null!==e.info?o("span",{staticClass:"loading-text"},[t._v("Loading")]):o("span",{staticClass:"has-text-danger-dark"},[t._v("Could not load campaign info")])]),t._v(" "),o("div",{staticClass:"has-text-grey is-size-7"},[e.info?o("div",[e.info.description?o("div",{staticClass:"is-ellipsis"},[t._v("\n                  "+t._s(e.info.description)+"\n                ")]):o("i",[t._v("- no description -")])]):null!==e.info?o("div",[t._v("\n                ........\n              ")]):t._e()])]),t._v(" "),o("div",{staticClass:"column is-12",class:{"is-2-desktop":!t.grid}},[o("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n              Requester:\n            ")]),t._v(" "),o("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[o("nuxt-link",{attrs:{to:"/profile/"+e.owner[1]}},[o("span",{staticClass:"is-ellipsis"},[t._v(t._s(e.owner[1]))])])],1)]),t._v(" "),o("div",{staticClass:"column"},[o("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n              Reward:\n            ")]),t._v(" "),o("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[t._v("\n              "+t._s(e.reward.quantity)+"\n            ")])]),t._v(" "),e.num_tasks||e.tasks_done?o("div",{staticClass:"column"},[o("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n              Tasks:\n            ")]),t._v(" "),o("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[o("span",[t._v("\n                "+t._s(e.num_tasks-e.tasks_done)+"/"+t._s(e.num_tasks)+" left\n              ")])])]):t._e(),t._v(" "),o("div",{staticClass:"column has-text-right",class:{"is-12":t.grid}},[o("button",{staticClass:"button is-primary has-text-weight-semibold is-fullwidth",class:{"is-loading":void 0===e.info,"is-accent":null===e.info||e.userHasReservation,"is-outlined":null===e.info,"is-wide":!t.grid},attrs:{disabled:!e||null===e.info}},[e.userHasReservation?o("span",[t._v("Go to Task")]):o("span",[t._v("View")])])])])])],1)})),0),t._v(" "),t.campaigns?o("pagination",{staticClass:"mt-2",attrs:{items:t.campaigns.length,page:t.page,"per-page":t.perPage},on:{setPage:t.setPage}}):t._e(),t._v(" "),t.campaignsLoading?o("div",{staticClass:"subtitle loading-text"},[t._v("\n    Campaigns loading\n  ")]):t.allBatchesLoaded?t.campaigns&&!t.campaigns.length?o("div",{staticClass:"subtitle"},[t._v("\n    No tasks\n  ")]):t.campaigns?t._e():o("div",{staticClass:"subtitle has-text-danger"},[t._v("\n    Could not retrieve campaigns\n  ")]):o("div",{staticClass:"loading-text"},[t._v("\n    Batches loading\n  ")])],1)}),o,!1,null,"1ec4ebca",null);e.a=component.exports},1303:function(t,e,n){var content=n(1351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("38a3c350",content,!0,{sourceMap:!1})},1304:function(t,e,n){var content=n(1353);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("642de728",content,!0,{sourceMap:!1})},1349:function(t,e,n){"use strict";var o=n(17),c=n(12),r=n(117),l=n(45),d=n(61),m=n(39),f=n(14),v=n(384),h=n(287),_=n(615),y=n(616),I=n(187),x=n(617),C=[],k=c(C.sort),w=c(C.push),j=f((function(){C.sort(void 0)})),M=f((function(){C.sort(null)})),S=h("sort"),P=!f((function(){if(I)return I<70;if(!(_&&_>3)){if(y)return!0;if(x)return x<603;var code,t,e,n,o="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)C.push({k:t+n,v:e})}for(C.sort((function(a,b){return b.v-a.v})),n=0;n<C.length;n++)t=C[n].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}}));o({target:"Array",proto:!0,forced:j||!M||!S||!P},{sort:function(t){void 0!==t&&r(t);var e=l(this);if(P)return void 0===t?k(e):k(e,t);var n,o,c=[],f=d(e);for(o=0;o<f;o++)o in e&&w(c,e[o]);for(v(c,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:m(e)>m(n)?1:-1}}(t)),n=c.length,o=0;o<n;)e[o]=c[o++];for(;o<f;)delete e[o++];return e}})},1350:function(t,e,n){"use strict";n(1303)},1351:function(t,e,n){var o=n(57)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),o.push([t.i,".select[data-v-0d869e87],.select select[data-v-0d869e87]{width:100%}",""]),t.exports=o},1352:function(t,e,n){"use strict";n(1304)},1353:function(t,e,n){var o=n(57)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),o.push([t.i,"@media screen and (max-width:769px){.is-pulled-right[data-v-0048e485]{float:none!important;margin-bottom:25px}}",""]),t.exports=o},1477:function(t,e,n){"use strict";n.r(e);n(88),n(106),n(59),n(107);var o=n(38),c=(n(79),n(25),n(118),n(51),n(382),n(108),n(119),n(50),n(91),n(1349),n(1292)),r=n.n(c),l=n(184),d=n(1280),m={name:"SortAndFilters",data:function(){return{selectSort:null,search:null,status:null,category:null,effect_dapps:{dao:{value:"dao",name:"DAO"},socials:{value:"socials",name:"Socials"},translate:{value:"translate",name:"Translate"},captions:{value:"captions",name:"Image Labeling"}},sort_options:{tasks_desc:{value:"num_tasks",name:"Number of Tasks (descending)",order:"desc"},tasks_asc:{value:"num_tasks",name:"Number of Tasks (ascending)",order:"asc"},reward:{value:"reward.quantity",name:"EFX Reward",order:"desc"},title_asc:{value:"info.title",name:"Title (ascending)",order:"asc"},title_desc:{value:"info.title",name:"Title (descending)",order:"desc"},id_asc:{value:"id",name:"ID (ascending)",order:"asc"},id_desc:{value:"id",name:"ID (descending)",order:"desc"}},statuses:{active:{value:"active",name:"Active"},ended:{value:"ended",name:"Ended"},notstarted:{value:"notstarted",name:"Not Started"}}}},methods:{onStatusFilter:function(t){this.$emit("status",t)},onCategoryFilter:function(t){this.$emit("category",t)},onSort:function(t){this.$emit("sorted",t)},onSearch:function(t){this.$emit("search",t.target.value)}}},f=(n(1350),n(23)),v=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns is-align-items-center is-justify-content-space-between mt-3"},[n("div",{staticClass:"column"},[t._v("\n    Search\n    "),n("input",{staticClass:"input",attrs:{type:"text",placeholder:"Search campaign..."},on:{keyup:t.onSearch}})]),t._v(" "),n("div",{staticClass:"column"},[n("span",[t._v("Category")]),n("br"),t._v(" "),n("div",{staticClass:"select is-normal"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.category=e.target.multiple?n:n[0]},function(e){return t.onCategoryFilter(t.category.value)}]}},[n("option",{attrs:{value:"",selected:""}},[t._v("-")]),t._v(" "),t._l(t.effect_dapps,(function(e){return n("option",{key:e.value,staticClass:"column",domProps:{value:e}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))],2)])]),t._v(" "),n("div",{staticClass:"column"},[n("span",[t._v("Status")]),n("br"),t._v(" "),n("div",{staticClass:"select is-normal"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.status=e.target.multiple?n:n[0]},function(e){return t.onStatusFilter(t.status.value)}]}},[n("option",{attrs:{value:"",selected:""}},[t._v("-")]),t._v(" "),t._l(t.statuses,(function(e){return n("option",{key:e.value,staticClass:"column",domProps:{value:e}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))],2)])]),t._v(" "),n("div",{staticClass:"column"},[n("span",[t._v("Sort")]),n("br"),t._v(" "),n("div",{staticClass:"select is-normal"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectSort,expression:"selectSort"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectSort=e.target.multiple?n:n[0]},function(e){return t.onSort(t.selectSort)}]}},[n("option",{attrs:{value:"",selected:""}},[t._v("-")]),t._v(" "),t._l(t.sort_options,(function(e){return n("option",{key:e.name,staticClass:"column",domProps:{value:e}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))],2)])])])}),[],!1,null,"0d869e87",null).exports;function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={components:{CampaignList:d.a,SortFilters:v},middleware:["auth"],data:function(){return{filter:null,sort:null,myCampaigns:!1,search:null,status:null}},computed:_(_({},Object(l.b)({batchesByCampaignId:"campaign/batchesByCampaignId",campaignsByCategory:"campaign/campaignsByCategory",reservationsByAccountId:"campaign/reservationsByAccountId",getGridListState:"view/getGridListState"})),{},{filteredCampaigns:function(){var t,e=this,n=this.campaignsByCategory(this.filter);if(n){for(var i in t=n.map((function(t){return _({},t)})),t){var o=this.batchesByCampaignId(t[i].id);t[i].batches=o,o&&(t[i].num_tasks=o.reduce((function(a,b){return a+b.num_tasks}),0),t[i].tasks_done=o.reduce((function(a,b){return a+b.tasks_done}),0))}if(t.reverse(),this.myCampaigns&&(t=t.filter((function(t){return t.owner[1]===e.$auth.user.accountName}))),null!==this.search&&(t=t.filter((function(t){return!(!t||!t.info)&&(t.info.title.toLowerCase().includes(e.search.toLowerCase())||t.info.description.toLowerCase().includes(e.search.toLowerCase()))}))),this.status)switch(this.status){case"active":t=t.filter((function(t){return t.num_tasks-t.tasks_done>0}));break;case"ended":t=t.filter((function(t){return t.num_tasks-t.tasks_done==0&&0!==t.num_tasks}));break;case"notstarted":t=t.filter((function(t){return t.num_tasks-t.tasks_done===t.num_tasks}))}this.sort&&(t=r.a.orderBy(t,[function(t){return"string"==typeof r.a.get(t,"".concat(e.sort.value))?r.a.get(t,"".concat(e.sort.value)).toLowerCase():r.a.get(t,"".concat(e.sort.value))}],[this.sort.order,"desc"]))}return t}}),created:function(){},methods:{onFilter:function(t){this.filter=t},onStatusFilter:function(t){this.status=t},onSort:function(t){this.sort=t},onSearch:function(input){this.search=input}}},I=(n(1352),Object(f.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("nuxt-link",{staticClass:"button is-primary is-pulled-right",attrs:{to:"/campaigns/templates"}},[n("span",{staticClass:"icon"},[t._v("\n        +\n      ")]),t._v(" "),n("span",[t._v("Create Task")])]),t._v(" "),n("nuxt-link",{staticClass:"button is-ghost is-pulled-right is-paddingless-mobile",attrs:{to:"/"}},[n("span",[t._v("Active Tasks")])]),t._v(" "),n("h1",{staticClass:"title has-text-weight-bold"},[t.myCampaigns?n("span",[t._v("My")]):n("span",[t._v("All")]),t._v(" Tasks\n    ")]),t._v(" "),n("label",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.myCampaigns,expression:"myCampaigns"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.myCampaigns)?t._i(t.myCampaigns,null)>-1:t.myCampaigns},on:{change:function(e){var n=t.myCampaigns,o=e.target,c=!!o.checked;if(Array.isArray(n)){var r=t._i(n,null);o.checked?r<0&&(t.myCampaigns=n.concat([null])):r>-1&&(t.myCampaigns=n.slice(0,r).concat(n.slice(r+1)))}else t.myCampaigns=c}}}),t._v("\n      Show only my tasks\n    ")]),t._v(" "),n("sort-filters",{on:{sorted:t.onSort,search:t.onSearch,category:t.onFilter,status:t.onStatusFilter}}),t._v(" "),n("campaign-list",{attrs:{campaigns:t.filteredCampaigns}})],1)])}),[],!1,null,"0048e485",null));e.default=I.exports}}]);