(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{461:function(t,n,e){"use strict";e.r(n);e(50),e(19),e(33),e(61),e(40),e(62);var r=e(27),c=e(89);function o(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var l={middleware:["auth"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},Object(c.b)({campaigns:function(t){return t.campaign.campaigns},campaignsLoading:function(t){return t.campaign.loading}})),created:function(){this.$store.dispatch("campaign/getCampaigns")},methods:{}},v=e(37),component=Object(v.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"text-center"},[e("h4",{staticClass:"title"},[t._v("Welcome "+t._s(t.$auth.user.name))]),t._v(" "),e("div",{staticClass:"subtitle"},[t._v(t._s(t.$auth.user.email))]),t._v(" "),e("br"),t._v(" "),e("a",{staticClass:"button is-danger",on:{click:function(n){return t.$auth.logout()}}},[t._v("Logout")]),t._v(" "),e("br"),e("br")]),t._v(" "),e("div",[t.campaignsLoading?e("div",[t._v("\n        Campaigns loading..\n      ")]):t.campaigns&&t.campaigns.length?t._l(t.campaigns,(function(n){return e("div",{key:n.id},[t._v("\n        "+t._s(n)+"\n      ")])})):t.campaigns&&!t.campaigns.length?e("div",[t._v("\n        No campaigns :(\n      ")]):e("div",[t._v("\n        Could not retrieve campaigns\n      ")])],2)])])}),[],!1,null,null,null);n.default=component.exports}}]);