(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1258:function(t,e,n){"use strict";var o=n(17),r=n(6),c=n(12),l=n(91),d=n(602),m=n(601),v=n(14),f=r.RangeError,h=r.String,M=Math.floor,C=c(m),_=c("".slice),A=c(1..toFixed),D=function(t,e,n){return 0===e?n:e%2==1?D(t,e-1,n*t):D(t*t,e/2,n)},y=function(data,t,e){for(var n=-1,o=e;++n<6;)o+=t*data[n],data[n]=o%1e7,o=M(o/1e7)},k=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=M(n/t),n=n%t*1e7},x=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+C("0",7-e.length)+e}return s};o({target:"Number",proto:!0,forced:v((function(){return"0.000"!==A(8e-5,3)||"1"!==A(.9,0)||"1.25"!==A(1.255,2)||"1000000000000000128"!==A(0xde0b6b3a7640080,0)}))||!v((function(){A({})}))},{toFixed:function(t){var e,n,o,r,c=d(this),m=l(t),data=[0,0,0,0,0,0],v="",M="0";if(m<0||m>20)throw f("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return h(c);if(c<0&&(v="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*D(2,69,1))-69)<0?c*D(2,-e,1):c/D(2,e,1),n*=4503599627370496,(e=52-e)>0){for(y(data,0,n),o=m;o>=7;)y(data,1e7,0),o-=7;for(y(data,D(10,o,1),0),o=e-1;o>=23;)k(data,1<<23),o-=23;k(data,1<<o),y(data,1,1),k(data,2),M=x(data)}else y(data,0,n),y(data,1<<-e,0),M=x(data)+C("0",m);return M=m>0?v+((r=M.length)<=m?"0."+C("0",m-r)+M:_(M,0,r-m)+"."+_(M,r-m)):v+M}})},1303:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSItNDAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzgxODg5RCIgZD0ibTI3MSA1MTJoLTE5MWMtNDQuMTEzMjgxIDAtODAtMzUuODg2NzE5LTgwLTgwdi0yNzFjMC00NC4xMTMyODEgMzUuODg2NzE5LTgwIDgwLTgwaDE5MWM0NC4xMTMyODEgMCA4MCAzNS44ODY3MTkgODAgODB2MjcxYzAgNDQuMTEzMjgxLTM1Ljg4NjcxOSA4MC04MCA4MHptLTE5MS0zOTFjLTIyLjA1NDY4OCAwLTQwIDE3Ljk0NTMxMi00MCA0MHYyNzFjMCAyMi4wNTQ2ODggMTcuOTQ1MzEyIDQwIDQwIDQwaDE5MWMyMi4wNTQ2ODggMCA0MC0xNy45NDUzMTIgNDAtNDB2LTI3MWMwLTIyLjA1NDY4OC0xNy45NDUzMTItNDAtNDAtNDB6bTM1MSAyNjF2LTMwMmMwLTQ0LjExMzI4MS0zNS44ODY3MTktODAtODAtODBoLTIyMmMtMTEuMDQ2ODc1IDAtMjAgOC45NTMxMjUtMjAgMjBzOC45NTMxMjUgMjAgMjAgMjBoMjIyYzIyLjA1NDY4OCAwIDQwIDE3Ljk0NTMxMiA0MCA0MHYzMDJjMCAxMS4wNDY4NzUgOC45NTMxMjUgMjAgMjAgMjBzMjAtOC45NTMxMjUgMjAtMjB6bTAgMCIvPjwvc3ZnPgo="},1482:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(33),n(1258),n(109),{middleware:["auth"],data:function(){return{submitted:!1,message:null,err:!1,tokenAmount:null,transactionUrl:null,confirmed:!1,loading:!1,copy_message:"Copy to clipboard",modalConfirmation:!1,memo:this.$auth.user.vAccountRows[0].id,account:this.$blockchain.sdk.account.config.accountContract,clipboard:navigator.clipboard}},methods:{copyToClipboard:function(content){var t=this;navigator.clipboard.writeText(content).then((function(){t.copy_message="Copied!"}))},deposit:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,e.err=!1,e.message=null,n.prev=3,n.next=6,e.$blockchain.deposit(parseFloat(t).toFixed(4));case 6:if(!(o=n.sent)){n.next=15;break}return e.$store.dispatch("transaction/addTransaction",o),e.transactionUrl="".concat(e.$blockchain.sdk.config.eosExplorerUrl,"/transaction/").concat(o.transaction_id),e.message="Deposit successful. Check your transaction here: ",n.next=13,e.$blockchain.waitForTransaction(o);case 13:e.$blockchain.updateUserInfo(),e.submitted=!0;case 15:n.next=20;break;case 17:n.prev=17,n.t0=n.catch(3),e.$blockchain.handleError(n.t0);case 20:e.loading=!1;case 21:case"end":return n.stop()}}),n,null,[[3,17]])})))()}}}),c=n(22),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"section"},[o("div",{staticClass:"modal",class:{"is-active":!t.confirmed}},[o("div",{staticClass:"modal-background"}),t._v(" "),o("div",{staticClass:"modal-content p-5 has-background-light has-radius"},[o("form",{attrs:{"accept-charset":"UTF-8"},on:{submit:function(e){e.preventDefault(),t.confirmed=t.modalConfirmation}}},[o("h2",{staticClass:"subtitle is-3"},[t._v("\n          Memo and Address\n        ")]),t._v(" "),t._m(0),t._v(" "),o("label",{staticClass:"checkbox mt-3"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.modalConfirmation,expression:"modalConfirmation"}],attrs:{type:"checkbox",required:""},domProps:{checked:Array.isArray(t.modalConfirmation)?t._i(t.modalConfirmation,null)>-1:t.modalConfirmation},on:{change:function(e){var n=t.modalConfirmation,o=e.target,r=!!o.checked;if(Array.isArray(n)){var c=t._i(n,null);o.checked?c<0&&(t.modalConfirmation=n.concat([null])):c>-1&&(t.modalConfirmation=n.slice(0,c).concat(n.slice(c+1)))}else t.modalConfirmation=r}}}),t._v("\n          I understand that deposits "),o("b",[t._v("WITHOUT")]),t._v(" Memo or Address are "),o("b",[t._v("INVALID")]),t._v(" and will result into funds "),o("b",[t._v("NOT ARRIVING")]),t._v(" into my address.\n        ")]),t._v(" "),t._m(1)])])]),t._v(" "),o("div",{staticClass:"container is-max-widescreen"},[o("h1",{staticClass:"title"},[t._v("\n      Deposit EFX tokens\n    ")]),t._v(" "),o("div",{staticClass:"notification is-danger is-light mt-3",attrs:{role:"alert"}},[t._v('\n      When depositing to this address, you must enter the "memo" in the message field of the transaction. Forgetting this will result in funds not arriving at your address.\n    ')]),t._v(" "),o("div",{staticClass:"box has-limited-width is-horizontal-centered"},[o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("Manual Deposit Address")]),t._v(" "),o("div",{staticClass:"control has-icons-right"},[o("input",{staticClass:"input blockchain-address",attrs:{type:"text",readonly:""},domProps:{value:t.account}}),t._v(" "),o("span",{staticClass:"p-2 icon is-small is-right is-clickable has-tooltip-arrow has-tooltip-fade",attrs:{"data-tooltip":t.copy_message},on:{click:function(e){return e.preventDefault(),t.copyToClipboard(t.account)},mouseout:function(e){t.copy_message="Copy to clipboard"}}},[o("img",{attrs:{src:n(1303),alt:"Copy"}})])])]),t._v(" "),o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("Memo")]),t._v(" "),o("div",{staticClass:"control has-icons-right"},[o("input",{staticClass:"input blockchain-address",attrs:{type:"text",readonly:""},domProps:{value:t.memo}}),t._v(" "),o("span",{staticClass:"p-2 icon is-small is-right is-clickable has-tooltip-arrow has-tooltip-fade",attrs:{"data-tooltip":t.copy_message},on:{click:function(e){return e.preventDefault(),t.copyToClipboard(t.memo)},mouseout:function(e){t.copy_message="Copy to clipboard"}}},[o("img",{attrs:{src:n(1303),alt:"Copy"}})])])])]),t._v(" "),t.$blockchain.efxAvailable&&"eos"===t.$auth.user.blockchain?o("div",[o("div",{staticClass:"has-text-centered title"},[t._v("\n        - OR -\n      ")]),t._v(" "),t.submitted?o("div",{staticClass:"notification is-light",class:{"is-danger":!0===t.err,"is-success":!1===t.err}},[t._v("\n        "+t._s(t.message)+"\n        "),o("br"),t._v(" "),o("a",{attrs:{target:"_blank",href:t.transactionUrl}},[t._v(t._s(t.transactionUrl))])]):t._e(),t._v(" "),t.err?o("div",{staticClass:"is-notification is-light is-danger"},[t._v("\n        "+t._s(t.message)+"\n      ")]):t._e(),t._v(" "),o("form",{staticClass:"box is-horizontal-centered has-limited-width",attrs:{"accept-charset":"UTF-8"},on:{submit:function(e){return e.preventDefault(),t.deposit(t.tokenAmount)}}},[o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[t._v("Deposit from Wallet Balance")]),t._v(" "),o("div",{staticClass:"field has-addons"},[o("div",{staticClass:"control is-expanded"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.tokenAmount,expression:"tokenAmount"}],staticClass:"input",attrs:{required:"",type:"number",min:"0",max:t.$blockchain.efxAvailable,disabled:!t.$blockchain.efxAvailable,placeholder:"1.0000",step:"0.0001"},domProps:{value:t.tokenAmount},on:{input:function(e){e.target.composing||(t.tokenAmount=e.target.value)}}})]),t._v(" "),o("p",{staticClass:"control"},[o("span",{staticClass:"button is-primary",attrs:{disabled:!t.$blockchain.efxAvailable},on:{click:function(e){e.preventDefault(),t.tokenAmount=t.$blockchain.efxAvailable}}},[t._v(t._s(t.$blockchain.efxAvailable)+" EFX")])])])]),t._v(" "),o("div",{staticClass:"field is-grouped-right is-grouped"},[o("div",{staticClass:"control"},[o("button",{staticClass:"button is-link",class:{"is-loading":t.loading},attrs:{disabled:!t.tokenAmount,type:"submit"}},[t._v("\n              Deposit\n            ")])])])])]):t._e(),t._v(" "),t._m(2)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Before continuing, understand that both a Memo and Address are "),n("span",{staticClass:"has-text-danger"},[t._v("required")]),t._v(" to successfully deposit your tokens.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"has-text-right mt-3"},[n("button",{staticClass:"button is-warning",attrs:{type:"submit"}},[t._v("\n            I understand\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"has-text-centered mt-5"},[n("a",{staticClass:"button is-light is-primary",attrs:{href:"https://effect.network/token-page",target:"_blank"}},[t._v("Buy EFX ->")])])}],!1,null,"4699e708",null);e.default=component.exports}}]);