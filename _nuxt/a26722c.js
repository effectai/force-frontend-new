(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1240:function(t,n,e){t.exports=e.p+"img/effect-force-icon.828a6c5.png"},1342:function(t,n,e){var content=e(1455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(59).default)("54cf033a",content,!0,{sourceMap:!1})},1454:function(t,n,e){"use strict";e(1342)},1455:function(t,n,e){var c=e(58)(!1);c.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),c.push([t.i,".information-block[data-v-f5ba53aa]{border:1px solid #e8eeff;border-radius:8px}.information-block .block[data-v-f5ba53aa]{margin-bottom:10px}.information-block .information-header[data-v-f5ba53aa]{background:#f7fbff}",""]),t.exports=c},1525:function(t,n,e){"use strict";e.r(n);e(81),e(45),e(69),e(90),e(52),e(91);var c=e(3),o=e(34),r=(e(28),e(158),e(21),e(184));function l(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var d={middleware:["auth"],data:function(){return{loading:!1,id:parseInt(this.$route.params.id),ipfsExplorer:this.$blockchain.sdk.config.ipfsNode,vaccount:null}},computed:f(f({},Object(r.c)({qualifications:function(t){return t.qualification.qualifications}})),{},{singleQualification:function(){var t=this;if(this.qualifications)return this.qualifications.find((function(n){return n.id===t.id}))}}),created:function(){this.$store.dispatch("qualification/getQualifications"),this.getAccountById(this.id)},methods:{getAccountById:function(t){var n=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$blockchain.getQualification(t);case 2:return c=e.sent,e.next=5,n.$blockchain.getVAccountById(c.account_id).catch(console.error);case 5:n.vaccount=e.sent;case 6:case"end":return e.stop()}}),e)})))()}}},v=(e(1454),e(23)),component=Object(v.a)(d,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("section",{staticClass:"section"},[c("div",{staticClass:"container"},[c("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[c("ul",[c("li",[c("nuxt-link",{attrs:{to:"/manage"}},[t._v("\n            All Qualifications\n          ")])],1),t._v(" "),c("li",{staticClass:"is-active"},[c("nuxt-link",{attrs:{to:"/qualifications/"+t.id,"aria-current":"page"}},[t._v("\n            Qualification "+t._s(t.id)+"\n          ")])],1)])]),t._v(" "),t.loading?c("div",{staticClass:"loader-wrapper is-active"},[c("img",{attrs:{src:e(372)}}),t._v(" "),c("br"),t._v(" "),t.waitingOnTransaction?c("span",{staticClass:"loading-text subtitle"},[t._v("Waiting for the transaction to complete")]):c("span",{staticClass:"loading-text subtitle"},[t._v("Please sign the transaction")])]):t._e(),t._v(" "),t.singleQualification?c("div",{staticClass:"columns"},[c("div",{staticClass:"column is-three-fifths"},[c("div",{staticClass:"is-flex is-align-items-center mb-6"},[t.singleQualification?c("p",{staticClass:"image has-radius mr-4",staticStyle:{width:"52px",height:"52px"}},[t.singleQualification.info&&t.singleQualification.info.image?c("img",{attrs:{src:t.singleQualification.info.image}}):c("img",{attrs:{src:e(1240),alt:"qualification name"}})]):t._e(),t._v(" "),c("div",{staticClass:"title has-text-weight-bold"},[c("span",[t._v("#"+t._s(t.id))]),t._v(" "),t.singleQualification.info.name?c("span",[t._v(t._s(t.singleQualification.info.name))]):null==t.singleQualification.info.name?c("span",{staticClass:"loading-text"},[t._v("Loading")]):0==t.singleQualification.info.name.length?c("span",[t._v("Untitled")]):c("span",{staticClass:"has-text-danger-dark"},[t._v("Could not load singleQualification info")])])]),t._v(" "),c("div",{staticClass:"block"},[t.singleQualification.info.description?c("p",{staticClass:"content",domProps:{innerHTML:t._s(t.$md.render(t.singleQualification.info.description))}}):c("p",[t._v("\n            - No description -\n          ")])])]),t._v(" "),c("div",{staticClass:"column is-two-fifths"},[c("div",{staticClass:"information-block"},[t._m(0),t._v(" "),c("div",{staticClass:"p-5"},[c("div",{staticClass:"columns "},[c("div",{staticClass:"column is-full"},[c("div",{staticClass:"block"},[t._v("\n                  Requester\n                  "),c("br"),t._v(" "),t.vaccount?c("div",{staticClass:"blockchain-address"},[c("nuxt-link",{attrs:{to:"/profile/"+t.vaccount[0].address[1]}},[t._v("\n                      "+t._s(t.vaccount[0].address[1])+"\n                    ")])],1):c("div",[t._v("\n                    ...\n                  ")])]),t._v(" "),c("div",{staticClass:"block"},[t._v("\n                  IPFS\n                  "),c("br"),t._v(" "),c("div",{staticClass:"blockchain-address"},[c("a",{attrs:{target:"_blank",href:t.ipfsExplorer+"/ipfs/"+t.singleQualification.content.field_1}},[t._v(t._s(t.singleQualification.content.field_1))])])]),t._v(" "),c("div",{staticClass:"block"},[t._v("\n                  Blockchain\n                  "),c("br"),t._v(" "),c("a",{attrs:{target:"_blank",href:t.$blockchain.eos.explorer+"/account/"+t.$blockchain.sdk.force.config.forceContract+"?loadContract=true&tab=Tables&table=quali&account="+t.$blockchain.sdk.force.config.forceContract+"&scope="+t.$blockchain.sdk.force.config.forceContract+"&limit=1&lower_bound="+t.id+"&upper_bound="+t.id}},[t._v("View in Explorer")])]),t._v(" "),c("div",{staticClass:"block is-vcentered "},[t.$auth.user.vAccountRows&&t.$auth.user.vAccountRows[0].id===t.singleQualification.account_id?c("div",[c("nuxt-link",{staticClass:"button is-fullwidth is-primary is-light has-margin-bottom-mobile",attrs:{to:"/qualifications/"+t.id+"/edit"}},[t._v("\n                      Edit\n                    ")])],1):t._e()])])])])])])]):c("div",{staticClass:"loading-text"},[t._v("\n      Qualification loading\n    ")])])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"information-header has-text-centered"},[e("h4",{staticClass:"p-5 is-size-4"},[e("b",[t._v("Information")])])])}],!1,null,"f5ba53aa",null);n.default=component.exports}}]);