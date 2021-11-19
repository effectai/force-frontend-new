(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1240:function(t,e,n){"use strict";var r=n(1250),c=n.n(r),o={name:"InstructionsModal",props:{campaign:{type:Object,required:!0,default:function(){return{}}},info:{type:Object,required:!0,default:function(){return{}}},show:{type:Boolean,required:!1,default:!1},functional:{type:Boolean,required:!1,default:!0}},data:function(){return{tac:!1}},computed:{showModal:{get:function(){return this.show},set:function(t){this.$emit("clicked",t)}}},methods:{onCancel:function(){this.functional&&(this.showModal=!1)},onClick:function(){this.functional&&this.$parent.joinCampaign()},sanitizeHtmlCustom:function(t){return c()(t,{allowedTags:["h1","h2","h3","h4","h5","h6","blockquote","p","a","ul","ol","nl","li","b","i","strong","em","strike","code","hr","br","div","table","thead","caption","tbody","tr","th","td","pre","iframe","img","span","label"],allowedAttributes:{a:["href","name","target","class"],img:["src","alt"],iframe:["src"],"*":["style"]}})}}},l=n(30),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.campaign&&t.info?n("div",{staticClass:"modal",class:{"is-active":t.showModal},style:{position:t.functional?"fixed":"relative",padding:t.functional?"initial":"10px"}},[n("div",{staticClass:"modal-background"}),t._v(" "),n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("\n        "+t._s(t.info.title)+"\n      ")]),t._v(" "),n("button",{staticClass:"delete",attrs:{"aria-label":"close",disabled:!t.functional},on:{click:function(e){return e.preventDefault(),t.onCancel()}}})]),t._v(" "),n("section",{staticClass:"modal-card-body"},[t.campaign&&t.info?n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.sanitizeHtmlCustom(t.$md.render(t.info.instructions)))}}):n("p",[t._v("\n        ...\n      ")]),t._v(" "),n("label",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tac,expression:"tac"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.tac)?t._i(t.tac,null)>-1:t.tac},on:{change:function(e){var n=t.tac,r=e.target,c=!!r.checked;if(Array.isArray(n)){var o=t._i(n,null);r.checked?o<0&&(t.tac=n.concat([null])):o>-1&&(t.tac=n.slice(0,o).concat(n.slice(o+1)))}else t.tac=c}}}),t._v("\n        I agree to the "),n("a",{attrs:{href:"#"}},[t._v("terms and conditions")])])]),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button is-primary",attrs:{disabled:!(t.tac&&t.campaign&&t.info&&t.functional)},on:{click:function(e){return e.preventDefault(),t.onClick()}}},[t._v("\n        Join Campaign\n      ")]),t._v(" "),n("button",{staticClass:"button",attrs:{disabled:!t.functional},on:{click:function(e){return e.preventDefault(),t.onCancel()}}},[t._v("\n        Cancel\n      ")])])])]):t._e()}),[],!1,null,"2c60a330",null);e.a=component.exports},1242:function(t,e){},1243:function(t,e){},1246:function(t,e){},1247:function(t,e){},1254:function(t,e){},1275:function(t,e){},1297:function(t,e,n){var content=n(1351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(100).default)("44719f7a",content,!0,{sourceMap:!1})},1350:function(t,e,n){"use strict";n(1297)},1351:function(t,e,n){var r=n(99)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),r.push([t.i,"div.instructions-group .textarea[data-v-02ebe1e4]{overflow-y:scroll}",""]),t.exports=r},1392:function(t,e,n){"use strict";n.r(e);var r=n(43),c=n(4),o=(n(37),n(56),n(1241),n(24),n(71),n(55),n(103),n(101),n(70),n(114),n(115),n(1303)),l=n(1240);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{VueSimplemde:o.a,InstructionsModal:l.a},filters:{formatBytes:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===t)return"0 Bytes";var n=1024,r=e<0?0:e,c=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(t)/Math.log(n));return parseFloat((t/Math.pow(n,i)).toFixed(r))+" "+c[i]}},beforeRouteLeave:function(t,e,n){this.checkClose()&&n()},middleware:["auth"],data:function(){return{advanced:!1,success:!1,ipfsExplorer:"https://ipfs.effect.ai",loading:!1,preview:!1,campaignIpfs:{title:"",description:"",instructions:"",template:"",image:"",category:"",example_task:{},version:1,reward:null},campaign:{content_hash:null},formGroup:"basic-info",cachedFormData:null,uploadingFile:!1,selectedFile:null,submitted:!1,message:null,errors:[]}},computed:{hasChanged:function(){return this.cachedFormData!==this.formDataForComparison()}},watch:{"campaignIpfs.template":function(template){var t=this,e=function(t,e,n){n||(n=1);for(var r,c=[];r=e.exec(t);)c.push(r[n]);return c}(template,/\$\{\s?(\w+)\s?\|?\s?(\w*)\s?\}/g),n={};e.forEach((function(e){n[e]=t.campaignIpfs.example_task[e]||""})),this.campaignIpfs.example_task=n},campaign:{deep:!0,handler:function(t){window.localStorage.setItem("cached_campaign",JSON.stringify(t))}},campaignIpfs:{deep:!0,handler:function(t){window.localStorage.setItem("cached_campaignIpfs",JSON.stringify(t))}}},created:function(){this.cacheFormData()},beforeDestroy:function(){window.removeEventListener("beforeunload",this.checkClose)},methods:{checkForm:function(){if(this.errors=[],this.campaignIpfs.title&&this.campaignIpfs.description&&this.campaignIpfs.reward&&this.campaignIpfs.category&&this.campaignIpfs.instructions&&this.campaignIpfs.template)return!0;this.campaignIpfs.title||this.errors.push("Title is required."),this.campaignIpfs.description||this.errors.push("Description is required."),this.campaignIpfs.reward||this.errors.push("Reward per task is required."),this.campaignIpfs.category||this.errors.push("Category is required."),this.campaignIpfs.instructions||this.errors.push("Instructions is required."),this.campaignIpfs.template||this.errors.push("Template is required.")},cacheFormData:function(){var t=window.localStorage.getItem("cached_campaign"),e=window.localStorage.getItem("cached_campaignIpfs");t&&(this.campaign=JSON.parse(t)),e&&(this.campaignIpfs=JSON.parse(e)),this.cachedFormData=this.formDataForComparison(),window.addEventListener("beforeunload",this.checkClose)},createCampaign:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading=!0,e.prev=1,!t.checkForm()){e.next=14;break}return n=f({},t.campaignIpfs),e.next=6,t.$blockchain.uploadCampaign(n);case 6:return r=e.sent,e.next=9,t.$blockchain.createCampaign(r,t.campaignIpfs.reward);case 9:c=e.sent,t.$store.dispatch("transaction/addTransaction",c),t.transactionUrl="https://bloks.io/transaction/"+c.transaction_id,t.message="Campaign created successfully! Check your transaction here: ",t.campaignIpfs={title:"",description:"",instructions:"",template:"",image:"",category:"",example_task:{},version:1,reward:null};case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),t.errors.push(e.t0);case 19:t.loading=!1,t.submitted=!0;case 21:case"end":return e.stop()}}),e,null,[[1,16]])})))()},formDataForComparison:function(){return JSON.stringify({campaign:this.campaign,campaignIpfs:this.campaignIpfs})},checkClose:function(t){if(this.hasChanged&&!this.loading&&!this.success){var e="You have unsaved changes. Are you sure you wish to leave?";return!!confirm(e)||(t.preventDefault(),t.returnValue=e,!1)}return!0}}},v=d,h=(n(1350),n(30)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("h1",{staticClass:"title mt-5"},[t._v("\n      New Campaign\n    ")]),t._v(" "),t.errors.length?n("div",t._l(t.errors,(function(e){return n("div",{key:e,staticClass:"notification is-danger is-light"},[t._v("\n        "+t._s(e)+"\n      ")])})),0):t._e(),t._v(" "),n("div",{staticClass:"tabs"},[n("ul",[n("li",{class:{"is-active":"basic-info"===t.formGroup}},[n("a",{on:{click:function(e){e.preventDefault(),t.formGroup="basic-info"}}},[t._v("Basic Information")])]),t._v(" "),n("li",{class:{"is-active":"instructions"===t.formGroup}},[n("a",{on:{click:function(e){e.preventDefault(),t.formGroup="instructions"}}},[t._v("Instructions")])]),t._v(" "),n("li",{class:{"is-active":"tasks"===t.formGroup}},[n("a",{on:{click:function(e){e.preventDefault(),t.formGroup="tasks"}}},[t._v("Design Tasks")])])])]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.createCampaign.apply(null,arguments)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:"basic-info"===t.formGroup,expression:"formGroup === 'basic-info'"}],staticClass:"block basic-info-group"},[n("div",{staticClass:"field"},[t._m(1),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.campaignIpfs.title,expression:"campaignIpfs.title"}],staticClass:"input",attrs:{type:"text",placeholder:"My Campaign Title"},domProps:{value:t.campaignIpfs.title},on:{input:function(e){e.target.composing||t.$set(t.campaignIpfs,"title",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[t._m(2),t._v(" "),n("div",{staticClass:"control"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.campaignIpfs.description,expression:"campaignIpfs.description"}],staticClass:"textarea",domProps:{value:t.campaignIpfs.description},on:{input:function(e){e.target.composing||t.$set(t.campaignIpfs,"description",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Image")]),t._v(" "),n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.campaignIpfs.image,expression:"campaignIpfs.image"}],staticClass:"input",attrs:{type:"text",placeholder:"Image URL"},domProps:{value:t.campaignIpfs.image},on:{input:function(e){e.target.composing||t.$set(t.campaignIpfs,"image",e.target.value)}}})])]),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"field has-addons"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.campaignIpfs.reward,expression:"campaignIpfs.reward"}],staticClass:"input",attrs:{type:"number",placeholder:"Reward per task"},domProps:{value:t.campaignIpfs.reward},on:{input:function(e){e.target.composing||t.$set(t.campaignIpfs,"reward",e.target.value)}}})]),t._v(" "),t._m(4)]),t._v(" "),n("div",{staticClass:"control"},[n("div",{staticClass:"field"},[t._m(5),t._v(" "),n("div",{staticClass:"select"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.campaignIpfs.category,expression:"campaignIpfs.category"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.campaignIpfs,"category",e.target.multiple?n:n[0])}}},[n("option",[t._v("---")]),t._v(" "),n("option",{attrs:{value:"dao"}},[t._v("\n                  Effect DAO\n                ")]),t._v(" "),n("option",{attrs:{value:"translate"}},[t._v("\n                  Effect Translate\n                ")]),t._v(" "),n("option",{attrs:{value:"socials"}},[t._v("\n                  Effect Socials\n                ")]),t._v(" "),n("option",{attrs:{value:"captions"}},[t._v("\n                  Effect Captions\n                ")])])])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"instructions"===t.formGroup,expression:"formGroup === 'instructions'"}],staticClass:"block instructions-group"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-two-fifths"},[n("div",{staticClass:"field"},[t._m(6),t._v(" "),n("div",{staticClass:"control"},[n("vue-simplemde",{ref:"markdownEditor",attrs:{configs:{promptURLs:!0,spellChecker:!1}},model:{value:t.campaignIpfs.instructions,callback:function(e){t.$set(t.campaignIpfs,"instructions",e)},expression:"campaignIpfs.instructions"}})],1)])]),t._v(" "),n("div",{staticClass:"column is-three-fifths"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"control"},[t.campaign&&t.campaignIpfs?n("instructions-modal",{attrs:{show:!0,functional:!1,campaign:t.campaign,info:t.campaignIpfs}}):t._e()],1)])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"tasks"===t.formGroup,expression:"formGroup === 'tasks'"}],staticClass:"block task-group"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Template")]),t._v(" "),n("div",{staticClass:"control"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.campaignIpfs.template,expression:"campaignIpfs.template"}],staticClass:"textarea",domProps:{value:t.campaignIpfs.template},on:{input:function(e){e.target.composing||t.$set(t.campaignIpfs,"template",e.target.value)}}})])]),t._v(" "),t._m(7),t._v(" "),t._l(t.campaignIpfs.example_task,(function(e,r){return n("div",{key:r,staticClass:"field is-horizontal"},[n("div",{staticClass:"field-label is-small"},[n("label",{staticClass:"label"},[t._v(t._s(r))])]),t._v(" "),n("div",{staticClass:"field-body is-small"},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.campaignIpfs.example_task[r],expression:"campaignIpfs.example_task[key]"}],staticClass:"input is-small",attrs:{type:"text"},domProps:{value:t.campaignIpfs.example_task[r]},on:{input:function(e){e.target.composing||t.$set(t.campaignIpfs.example_task,r,e.target.value)}}})])])])])}))],2),t._v(" "),n("div",{staticClass:"field is-grouped is-grouped-right mt-4"},[n("div",{staticClass:"control"},[n("nuxt-link",{staticClass:"button is-light",attrs:{to:"/campaigns"}},[t._v("\n            Cancel\n          ")])],1),t._v(" "),n("div",{staticClass:"control"},[n("button",{staticClass:"button is-primary is-wide",class:{"is-loading":t.loading},attrs:{type:"submit"}},[t._v("\n            Save Campaign\n          ")])])]),t._v(" "),0===t.errors.length&&t.submitted?n("div",{staticClass:"notification is-success is-light"},[t._v("\n        "+t._s(t.message)+"\n        "),t.transactionUrl?n("span",[n("a",{attrs:{target:"_blank",href:t.transactionUrl}},[t._v(t._s(t.transactionUrl))])]):t._e()]):t._e()])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"is-pulled-right"},[n("span",{staticClass:"has-text-info"},[n("b",[t._v("*")])]),t._v(" "),n("i",[t._v(" is required")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"label"},[t._v("\n            Title\n            "),n("span",{staticClass:"has-text-info"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"label"},[t._v("\n            Description\n            "),n("span",{staticClass:"has-text-info"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"label"},[t._v("\n          Reward per task\n          "),n("span",{staticClass:"has-text-info"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"control"},[n("a",{staticClass:"button is-primary"},[t._v("\n              EFX\n            ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"label"},[t._v("\n              Category\n              "),n("span",{staticClass:"has-text-info"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"label"},[t._v("\n                Raw Text\n                "),n("span",{staticClass:"has-text-info"},[t._v("*")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[t._v("Example Task")])])}],!1,null,"02ebe1e4",null);e.default=component.exports}}]);