(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1234:function(t,e,n){var content=n(1240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("adf3554e",content,!0,{sourceMap:!1})},1235:function(t,e,n){var content=n(1242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("04eef12e",content,!0,{sourceMap:!1})},1239:function(t,e,n){"use strict";n(1234)},1240:function(t,e,n){var c=n(98)(!1);c.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),c.push([t.i,"a.card.is-active.dapp-dao[data-v-2b3a999a],a.card:hover.dapp-dao[data-v-2b3a999a]{background:#d7ac00}a.card.is-active.dapp-socials[data-v-2b3a999a],a.card:hover.dapp-socials[data-v-2b3a999a]{background:#06c6c6}a.card.is-active.dapp-captions[data-v-2b3a999a],a.card:hover.dapp-captions[data-v-2b3a999a]{background:#e06375}a.card.is-active.dapp-translate[data-v-2b3a999a],a.card:hover.dapp-translate[data-v-2b3a999a]{background:#00c165}a.card[data-v-2b3a999a]{display:flex;justify-content:center;align-items:center}a.card.dapp-null[data-v-2b3a999a]{min-height:70px}a.card .card-image[data-v-2b3a999a]{padding:5px}a.card .card-image .dapp-logo[data-v-2b3a999a]{max-height:50px}",""]),t.exports=c},1241:function(t,e,n){"use strict";n(1235)},1242:function(t,e,n){var c=n(98)(!1);c.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),c.push([t.i,".box.is-disabled[data-v-eb83f030]{background-color:rgba(222,224,230,.5)}.box.is-disabled .column[data-v-eb83f030]:not(:last-child){opacity:.5}",""]),t.exports=c},1247:function(t,e,n){"use strict";n(101),n(57),n(114),n(74),n(115);var c=n(4),o=n(43),r=(n(40),n(73),n(24),n(183)),l=n(1257),d={name:"CategoryFilters",components:{Carousel:l.Carousel,Slide:l.Slide},data:function(){return{filter:null,effect_dapps:{dao:{hover:!1,value:"dao",normalUrl:"https://effect.network/_nuxt/img/effect-dao_h100.62b6528.png",whiteUrl:"https://effect.network/_nuxt/img/effect-dao_white_h100.8128b59.png"},socials:{hover:!1,value:"socials",normalUrl:"https://effect.network/_nuxt/img/effect-socials_h100.4f0f9f8.png",whiteUrl:"https://effect.network/_nuxt/img/effect-socials_white_h100.aaa70fd.png"},translate:{hover:!1,value:"translate",normalUrl:"https://effect.network/_nuxt/img/effect-translate_h100.61861ae.png",whiteUrl:"https://effect.network/_nuxt/img/effect-translate_white_h100.d698b51.png"},captions:{hover:!1,value:"captions",normalUrl:"https://effect.network/_nuxt/img/effect-captions_h100.2b22d0c.png",whiteUrl:"https://effect.network/_nuxt/img/effect-captions_white_h100.d746459.png"}}}},methods:{onClick:function(t){this.filter=t,this.$emit("clicked",this.filter)}}},v=(n(1239),n(32));function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"CampaignList",components:{CategoryFilters:Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("carousel",{staticClass:"columns",attrs:{"pagination-enabled":!1,"per-page-custom":[[768,3],[1024,5]]}},[t._l(t.effect_dapps,(function(e,c){return n("slide",{key:e.value,staticClass:"column"},[n("a",{staticClass:"card is-flat",class:["dapp-"+c,t.filter===e.value?"is-active":null],attrs:{href:"#"},on:{mouseover:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1},click:function(n){return n.preventDefault(),t.onClick(e.value)}}},[n("div",{staticClass:"card-image has-text-centered"},[n("img",{staticClass:"dapp-logo block",attrs:{src:e.hover||t.filter===e.value?e.whiteUrl:e.normalUrl,alt:"Image"}})])])])})),t._v(" "),n("slide",{staticClass:"column is-2"},[n("a",{staticClass:"card is-flat dapp-null",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onClick(null)}}},[n("div",{staticClass:"card-image has-text-centered"},[n("h4",{staticClass:"is-size-5"},[n("b",[t._v("Show All")])])])])])],2)}),[],!1,null,"2b3a999a",null).exports},props:["active","owner"],data:function(){return{filter:null,ipfsExplorer:"https://ipfs.effect.ai"}},computed:_(_(_({},Object(r.b)({batchByCampaignId:"campaign/batchByCampaignId",campaignsByCategory:"campaign/campaignsByCategory"})),Object(r.c)({campaigns:function(t){return t.campaign.campaigns},campaignsLoading:function(t){return t.campaign.loading},allCampaignsLoaded:function(t){return t.campaign.allCampaignsLoaded}})),{},{filteredCampaigns:function(){var t=this,e=this.campaignsByCategory(this.filter);for(var i in e){var n=this.batchByCampaignId(e[i].id);n&&(e[i].num_tasks=n.reduce((function(a,b){return a+b.num_tasks}),0),e[i].tasks_done=n.reduce((function(a,b){return a+b.tasks_done}),0))}return e&&this.active&&(e=e.filter((function(t){return t.num_tasks-t.tasks_done>0}))),e&&this.owner&&(e=e.filter((function(e){return e.owner[1]===t.owner}))),e}}),created:function(){this.getCampaigns(),this.getBatches()},methods:{onFilter:function(t){this.filter=t},getCampaigns:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.campaigns&&t.allCampaignsLoaded){e.next=3;break}return e.next=3,t.$store.dispatch("campaign/getCampaigns");case 3:case"end":return e.stop()}}),e)})))()},getBatches:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("campaign/getBatches");case 2:case"end":return e.stop()}}),e)})))()}}},m=(n(1241),Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("client-only",[t.owner?t._e():n("category-filters",{on:{clicked:t.onFilter}})],1),t._v(" "),t._l(t.filteredCampaigns,(function(e){return[n("nuxt-link",{key:e.id,staticClass:"box p-4",class:{"is-disabled":null===e.info},attrs:{to:"/campaigns/"+e.id}},[n("div",{staticClass:"columns is-vcentered is-multiline is-mobile"},[n("div",{staticClass:"column is-narrow is-mobile-1"},[n("p",{staticClass:"image has-radius",staticStyle:{width:"52px",height:"52px"}},[e.info&&e.info.image?n("img",{attrs:{src:e.info.image.Hash?t.ipfsExplorer+"/ipfs/"+e.info.image.Hash:e.info.image}}):t._e()])]),t._v(" "),n("div",{staticClass:"column is-4-desktop is-5-widescreen is-12-touch"},[n("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[n("div",[n("small",{staticClass:"blockchain-address"},[t._v("#"+t._s(e.id))]),t._v(" "),e.info&&e.info.category?n("span",{staticClass:"tag is-light",class:{"is-dao":"dao"===e.info.category,"is-dao":"dao"===e.info.category,"is-socials":"socials"===e.info.category,"is-translate":"translate"===e.info.category,"is-captions":"captions"===e.info.category}},[t._v(t._s(e.info.category))]):t._e()]),t._v(" "),e.info?n("span",[e.info.title?n("span",[t._v(t._s(e.info.title))]):n("i",[t._v("- Untitled -")])]):null!==e.info?n("span",[t._v("Loading..")]):n("span",{staticClass:"has-text-danger-dark"},[t._v("Could not load campaign info")])]),t._v(" "),n("div",{staticClass:"has-text-grey is-size-7"},[e.info?n("div",[e.info.description?n("div",{staticClass:"is-ellipsis"},[t._v("\n                "+t._s(e.info.description)+"\n              ")]):n("i",[t._v("- no description -")])]):null!==e.info?n("div",[t._v("\n              ........\n            ")]):t._e()])]),t._v(" "),n("div",{staticClass:"column"},[n("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n            Requester\n          ")]),t._v(" "),n("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[n("nuxt-link",{attrs:{to:"/profile/"+e.owner[1]}},[n("span",{class:{"is-size-7":"address"===e.owner[0]}},[t._v(t._s(e.owner[1]))])])],1)]),t._v(" "),n("div",{staticClass:"column"},[n("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n            Reward\n          ")]),t._v(" "),n("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[t._v("\n            "+t._s(e.reward.quantity)+"\n          ")])]),t._v(" "),n("div",{staticClass:"column"},[n("p",{staticClass:"has-text-grey is-size-7"},[t._v("\n            Tasks\n          ")]),t._v(" "),n("h2",{staticClass:"subtitle is-6 has-text-weight-semibold mb-0"},[null===t.batchByCampaignId(e.id)?n("span",[t._v("\n              Loading..\n            ")]):n("span",[t._v("\n              "+t._s(t.batchByCampaignId(e.id).reduce((function(a,b){return a+b.num_tasks}),0)-t.batchByCampaignId(e.id).reduce((function(a,b){return a+b.tasks_done}),0))+"/"+t._s(t.batchByCampaignId(e.id).reduce((function(a,b){return a+b.num_tasks}),0))+" left\n              "),n("br"),t._v(" "),n("small",{staticClass:"is-size-7"},[t._v("("+t._s(t.batchByCampaignId(e.id).length)+" batch"),1!==t.batchByCampaignId(e.id).length?[t._v("es")]:t._e(),t._v(")")],2)])])]),t._v(" "),n("div",{staticClass:"column has-text-right is-12-mobile"},[n("button",{staticClass:"button is-wide is-secondary has-text-weight-semibold is-fullwidth-mobile",class:{"is-loading":void 0===e.info,"is-accent":null===e.info,"is-outlined":null===e.info},attrs:{disabled:!e||null===e.info}},[n("span",{},[t._v("View")])])])])])]})),t._v(" "),t.campaignsLoading?n("div",{staticClass:"subtitle"},[t._v("\n    Campaigns loading..\n  ")]):t.filteredCampaigns&&!t.filteredCampaigns.length?n("div",{staticClass:"subtitle"},[t._v("\n    No "),t.active?n("span",[t._v("active")]):t._e(),t._v(" campaigns\n  ")]):t.filteredCampaigns?t._e():n("div",{staticClass:"subtitle has-text-danger"},[t._v("\n    Could not retrieve campaigns\n  ")])],2)}),[],!1,null,"eb83f030",null));e.a=m.exports},1378:function(t,e,n){"use strict";n.r(e);n(101),n(57),n(73),n(114),n(74),n(115);var c=n(4),o=n(43),r=(n(40),n(24),n(158),n(277),n(130),n(52),n(216),n(85),n(183)),l={name:"Balances",computed:{}},d=n(32);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{Balance:Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("h2",{staticClass:"has-text-weight-bold"},[t._v("\n      Total Balance\n    ")]),t._v(" "),n("span",{staticClass:"is-flex is-align-items-center"},[n("span",[n("b",[t._v(t._s(null!==t.$blockchain.efxTotal?t.$blockchain.efxTotal.toFixed(2):"..."))]),t.$blockchain.efxLoading?n("span",[t._v("..")]):t._e(),t._v(" EFX")]),t._v(" "),null!==t.$blockchain.efxTotal&&t.$blockchain.efxPrice?n("span",{staticClass:"is-size-7 pl-2"},[t._v("| $"),n("b",[t._v(t._s((t.$blockchain.efxTotal*t.$blockchain.efxPrice).toFixed(2)))])]):t._e()])]),t._v(" "),n("div",{staticClass:"column"},[n("h2",{staticClass:"has-text-weight-bold"},[t._v("\n      vAccount Contract Balance\n    ")]),t._v(" "),null!==t.$blockchain.vefxAvailable?n("span",[t._v(t._s(t.$blockchain.vefxAvailable.toFixed(2)))]):n("span",[t._v(".....")]),n("span",[t._v("  EFX")])]),t._v(" "),n("div",{staticClass:"column"},[n("h2",{staticClass:"has-text-weight-bold"},[t._v("\n      Wallet\n    ")]),t._v(" "),null!==t.$blockchain.efxAvailable?n("span",[t._v(t._s(t.$blockchain.efxAvailable.toFixed(2)))]):n("span",[t._v(".....")]),n("span",[t._v("  EFX")])]),t._v(" "),n("div",{staticClass:"column"},[n("h2",{staticClass:"has-text-weight-bold"},[t._v("\n      Pending Tasks\n    ")]),t._v(" "),null!==t.$blockchain.efxPending?n("span",[t._v(t._s(t.$blockchain.efxPending.toFixed(2)))]):n("span",[t._v(".....")]),n("span",[t._v("  EFX")])]),t._v(" "),n("div",{staticClass:"column"},[n("h2",{staticClass:"has-text-weight-bold"},[t._v("\n      Actions\n    ")]),t._v(" "),n("div",[n("nuxt-link",{staticClass:"button is-accent is-small",attrs:{to:"/deposit"}},[t._v("\n        Deposit\n      ")]),t._v(" "),n("nuxt-link",{staticClass:"button is-secondary is-small",attrs:{to:"/withdraw"}},[t._v("\n        Withdraw\n      ")])],1)])])}),[],!1,null,"39f2a0ec",null).exports,CampaignList:n(1247).a},filters:{hide:function(t,e){return e?t:(t=t.toString()).split("").map((function(t){return"•","•"})).join("")}},middleware:["auth"],data:function(){return{page:1,perPage:10,showPK:!1,pages:[]}},computed:h(h({},Object(r.b)({transactionsByUser:"transaction/transactionsByUser"})),{},{transactions:function(){return this.transactionsByUser(this.$auth.user.vAccountRows[0].id)},displayedTransactions:function(){return this.paginate(this.transactions)}}),watch:{transactions:function(){this.setPages()}},created:function(){this.setPages()},methods:{logout:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()},setPages:function(){if(this.transactions)for(var t=Math.ceil(this.transactions.length/this.perPage),e=1;e<=t;e++)this.pages.length<e&&this.pages.push(e)},paginate:function(t){var e=this.page*this.perPage-this.perPage,n=this.page*this.perPage;return t.slice(e,n)}}},f=Object(d.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center"},[n("h4",{staticClass:"title is-spaced"},[t._v("\n        Your Effect Account\n      ")]),t._v(" "),n("balance"),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"has-text-weight-bold is-size-6"},[t._v("\n          Effect Account Name:\n        ")]),t._v(" "),n("div",{staticClass:"subtitle"},[t._v("\n          "+t._s(t.$auth.user.accountName)+"\n        ")])]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"has-text-weight-bold is-size-6"},[t._v("\n          "+t._s("bsc"===t.$auth.user.blockchain?"BSC Address":"EOS Account Name")+":\n        ")]),t._v(" "),n("div",{staticClass:"subtitle"},["bsc"===t.$auth.user.blockchain?n("a",{staticClass:"blockchain-address",attrs:{href:t.$blockchain.bsc.explorer+"/address/"+t.$auth.user.address,target:"_blank"}},[t._v(t._s(t.$auth.user.address))]):n("a",{staticClass:"blockchain-address",attrs:{href:t.$blockchain.eos.explorer+"/address/"+t.$auth.user.accountName,target:"_blank"}},[t._v(t._s(t.$auth.user.accountName))]),t.$auth.user.permission?n("span",[t._v("@"+t._s(t.$auth.user.permission))]):t._e()])]),t._v(" "),"burner-wallet"===t.$auth.user.provider?n("div",{staticClass:"block"},[n("div",{staticClass:"has-text-weight-bold is-size-6"},[t._v("\n          Private key:\n        ")]),t._v(" "),n("div",{staticClass:"subtitle"},[n("span",{staticClass:"has-text-link"},[t._v(t._s(t._f("hide")(t.$auth.user.privateKey,t.showPK)))])]),t._v(" "),n("button",{staticClass:"button is-light",on:{click:function(e){t.showPK=!t.showPK}}},[t.showPK?n("span",[t._v("Hide")]):n("span",[t._v("Show")])])]):t._e(),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"has-text-weight-bold is-size-6"},[t._v("\n          Effect Account ID:\n        ")]),t._v(" "),n("div",{staticClass:"subtitle"},[t._v("\n          "+t._s(t.$auth.user.vAccountRows[0].id)+"\n        ")])]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"has-text-weight-bold is-size-6"},[t._v("\n          Wallet Connection:\n        ")]),t._v(" "),n("div",{staticClass:"subtitle"},[t._v("\n          "+t._s(t.$auth.user.provider)+"@"+t._s(t.$auth.user.blockchain)+"\n        ")])]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"has-text-weight-bold is-size-6"},[t._v("\n          Blockchain:\n        ")]),t._v(" "),n("div",{staticClass:"subtitle"},[n("a",{attrs:{href:t.$blockchain.eos.explorer+"/account/"+t.$blockchain.sdk.account.config.account_contract+"?loadContract=true&tab=Tables&table=account&account="+t.$blockchain.sdk.account.config.account_contract+"&scope="+t.$blockchain.sdk.account.config.account_contract+"&limit=1&lower_bound="+t.$auth.user.vAccountRows[0].id+"&upper_bound="+t.$auth.user.vAccountRows[0].id,target:"_blank"}},[t._v("View on explorer")])])]),t._v(" "),n("hr"),t._v(" "),n("h2",{staticClass:"title is-4"},[t._v("\n        My Campaigns\n      ")]),t._v(" "),n("campaign-list",{staticClass:"mb-6",attrs:{owner:t.$auth.user.accountName}}),t._v(" "),n("h4",{staticClass:"title is-4 is-spaced"},[t._v("\n        Transactions\n      ")]),t._v(" "),t.transactions?n("table",{staticClass:"table",staticStyle:{width:"100%"}},[t._m(0),t._v(" "),n("tbody",t._l(t.displayedTransactions,(function(e){return n("tr",{key:e.transaction_id},[n("td",[n("a",{attrs:{href:t.$blockchain.eos.explorer+"/transaction/"+e.transaction_id,target:"_blank"}},[t._v(t._s(e.transaction_id))])]),t._v(" "),n("td",[t._v(t._s(e.processed.action_traces[0].act.name))]),t._v(" "),n("td",[t._v(t._s(new Date(e.processed.block_time).toLocaleString()))]),t._v(" "),n("td",[t._v(t._s(e.processed.receipt.status))]),t._v(" "),n("th",[n("a",{attrs:{href:t.$blockchain.eos.explorer+"/transaction/"+e.transaction_id,target:"_blank"}},[t._v("View on explorer")])])])})),0)]):n("span",[t._v("No transactions found")]),t._v(" "),t.transactions?n("nav",{staticClass:"pagination",attrs:{role:"navigation","aria-label":"pagination"}},[1!=t.page?n("a",{staticClass:"pagination-previous",on:{click:function(e){t.page--}}},[t._v("Previous")]):t._e(),t._v(" "),t.page<t.pages.length?n("a",{staticClass:"pagination-next",on:{click:function(e){t.page++}}},[t._v("Next page")]):t._e(),t._v(" "),n("ul",{staticClass:"pagination-list"},t._l(t.pages,(function(e){return n("li",{key:e},[n("a",{staticClass:"pagination-link",on:{click:function(n){t.page=e}}},[t._v(t._s(e))])])})),0)]):t._e(),t._v(" "),n("hr"),t._v(" "),n("a",{staticClass:"button is-danger",on:{click:t.logout}},[t._v("Logout")]),t._v(" "),n("br"),n("br")],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Transaction ID")]),t._v(" "),n("th",[t._v("Type")]),t._v(" "),n("th",[t._v("Date")]),t._v(" "),n("th",[t._v("Status")]),t._v(" "),n("th")])])}],!1,null,null,null);e.default=f.exports}}]);