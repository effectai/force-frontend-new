(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1476:function(t){t.exports=JSON.parse("[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]")},1495:function(t,e,n){"use strict";n.r(e);n(88),n(50),n(79),n(106),n(107);var r=n(39),c=(n(25),n(59),n(185)),o=n(1476);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{CampaignList:n(1284).a},data:function(){return{approvedCampaigns:o,approved:!0}},computed:v(v({},Object(c.c)({campaigns:function(t){return t.campaign.campaigns}})),{},{hasCampaigns:function(){var t=this,e=!1;return this.campaigns&&this.campaigns.forEach((function(n){t.$auth&&t.$auth.user&&n.owner[1]===t.$auth.user.accountName&&(e=!0)})),e}}),created:function(){this.$auth&&this.$auth.loggedIn||this.$router.push("/welcome")},methods:{}},m=n(23),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[t.approved?n("h1",{staticClass:"title has-text-weight-bold is-full-mobile"},[t._v("\n            Active Tasks\n          ")]):n("h1",{staticClass:"title has-text-weight-bold is-full-mobile has-text-danger"},[t._v("\n            Unmoderated Tasks\n          ")])])]),t._v(" "),n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[t.approved?n("a",{staticClass:"button is-danger is-small is-light",on:{click:function(e){t.approved=!1}}},[t._v("\n            View unmoderated tasks\n          ")]):n("a",{staticClass:"button is-success is-small is-light",on:{click:function(e){t.approved=!0}}},[t._v("\n            View approved tasks\n          ")])]),t._v(" "),n("div",{staticClass:"level-item"},[t.hasCampaigns?n("nuxt-link",{staticClass:"button is-small is-ghost ",attrs:{to:"/campaigns"}},[n("span",[t._v("My Tasks")])]):t._e()],1),t._v(" "),n("div",{staticClass:"level-item"},[n("nuxt-link",{staticClass:"button is-primary",attrs:{to:"/campaigns/templates"}},[n("span",{staticClass:"icon"},[t._v("\n              +\n            ")]),t._v(" "),n("span",[t._v("Create Task")])])],1)])]),t._v(" "),n("campaign-list",{attrs:{"hide-campaigns":t.approved?null:t.approvedCampaigns,"approved-campaigns":t.approved?t.approvedCampaigns:null,"category-filter":!0,active:!0}})],1)])}),[],!1,null,"9d719e02",null);e.default=component.exports}}]);