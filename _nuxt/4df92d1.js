(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1396:function(n,t,e){"use strict";e.r(t);var c={components:{CampaignList:e(1254).a},middleware:["auth"],data:function(){return{myCampaigns:!0}},created:function(){},methods:{}},l=e(32),component=Object(l.a)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("nuxt-link",{staticClass:"button is-primary is-pulled-right",attrs:{to:"/campaigns/new"}},[e("span",{staticClass:"icon"},[n._v("\n        +\n      ")]),n._v(" "),e("span",[n._v("Create Campaign")])]),n._v(" "),e("nuxt-link",{staticClass:"button is-ghost is-pulled-right",attrs:{to:"/"}},[e("span",[n._v("Active Campaigns")])]),n._v(" "),e("h2",{staticClass:"title"},[n.myCampaigns?e("span",[n._v("My")]):e("span",[n._v("All")]),n._v(" Campaigns\n    ")]),n._v(" "),e("label",{staticClass:"checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.myCampaigns,expression:"myCampaigns"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(n.myCampaigns)?n._i(n.myCampaigns,null)>-1:n.myCampaigns},on:{change:function(t){var e=n.myCampaigns,c=t.target,l=!!c.checked;if(Array.isArray(e)){var m=n._i(e,null);c.checked?m<0&&(n.myCampaigns=e.concat([null])):m>-1&&(n.myCampaigns=e.slice(0,m).concat(e.slice(m+1)))}else n.myCampaigns=l}}}),n._v("\n      Show only my campaigns\n    ")]),n._v(" "),e("campaign-list",{attrs:{owner:n.myCampaigns?n.$auth.user.accountName:null,filters:!1,"sort-campaigns":!0}})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);