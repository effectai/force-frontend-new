(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1394:function(t,c,n){"use strict";n.r(c);var e=n(4),o=(n(37),n(84),{middleware:["auth"],data:function(){return{name:this.$route.params.name,account:null,loading:!1}},created:function(){this.getProfile()},methods:{getProfile:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function c(){var n;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t.loading=!0,c.next=4,t.$blockchain.getVAccountByName(t.name);case 4:(n=c.sent)&&n.length&&(t.account=n[0]),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(0),t.$blockchain.handleError(c.t0);case 11:t.loading=!1;case 12:case"end":return c.stop()}}),c,null,[[0,8]])})))()}}}),r=n(30),component=Object(r.a)(o,(function(){var t=this,c=t.$createElement,n=t._self._c||c;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center"},[n("h4",{staticClass:"title is-spaced"},[t._v("\n        Effect Account\n      ")]),t._v(" "),t.loading?n("div",[t._v("\n        Loading..\n      ")]):t.account?n("div",[n("div",{staticClass:"block"},[n("div",{staticClass:"has-text-weight-bold is-size-6"},[t._v("\n            "+t._s("address"===t.account.address[0]?"BSC Address":"Account Name")+":\n          ")]),t._v(" "),n("div",{staticClass:"subtitle"},[n("div",["address"===t.account.address[0]?n("span",{staticClass:"blockchain-address"},[t._v(t._s(t.account.address[1]))]):n("a",{attrs:{href:t.$blockchain.eos.explorer+"/address/"+t.account.address[1],target:"_blank"}},[t._v(t._s(t.account.address[1]))])])])]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"has-text-weight-bold is-size-6"},[t._v("\n            Effect Account ID:\n          ")]),t._v(" "),n("div",{staticClass:"subtitle"},[t._v("\n            "+t._s(t.account.id)+"\n          ")])]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"has-text-weight-bold is-size-6"},[t._v("\n            Blockchain:\n          ")]),t._v(" "),n("div",{staticClass:"subtitle"},[n("a",{attrs:{href:t.$blockchain.eos.explorer+"/account/"+t.$blockchain.sdk.account.config.account_contract+"?loadContract=true&tab=Tables&table=account&account="+t.$blockchain.sdk.account.config.account_contract+"&scope="+t.$blockchain.sdk.account.config.account_contract+"&limit=1&lower_bound="+t.account.id+"&upper_bound="+t.account.id,target:"_blank"}},[t._v("View on explorer")])])])]):n("div",[t._v("\n        Could not retrieve account\n      ")])])])])}),[],!1,null,null,null);c.default=component.exports}}]);