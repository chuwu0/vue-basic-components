webpackJsonp([0],{"++/o":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vue-carousel-demo"},[s("vue-carousel",{attrs:{imgs:t.imgs}})],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},"+/FY":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"drag-demo"},[s("iframe",{attrs:{src:"http://lfyfly.gitee.io/vue-dragdrag/docs"}})])}],a={render:i,staticRenderFns:n};e.a=a},"+wrT":function(t,e,s){"use strict";e.a={name:"carousel",props:{imgs:{type:Array,required:!0},interval:{type:Number,default:5e3}},data:function(){return{msg:"this is from carousel.vue",activeIndex:1,timer:null,isTransitioning:!1,transitionInterval:500,isResetIndex:!1}},computed:{imgsComputed:function(){var t=this.imgs[0];return[this.imgs[this.imgs.length-1]].concat(this.imgs,[t])},len:function(){return this.imgsComputed.length}},methods:{activeDotFn:function(t){if("li"===t.target.tagName.toLowerCase()){var e=parseInt(t.target.getAttribute("data-dot-index"));this.activeIndex=e}},switchFn:function(t){this.isTransitioning||(-1!=t.target.className.indexOf("next")?this.activeIndex++:this.activeIndex--)},startInterval:function(){var t=this;this.timer=setInterval(function(){t.activeIndex++},this.interval)},hoverFn:function(t){"mouseenter"===t.type?this.timer&&clearInterval(this.timer):this.startInterval()}},mounted:function(){this.startInterval()},watch:{activeIndex:function(t,e){var s=this;if(console.log(t,e),1===t&&e===this.len-1||0===e&&t===this.len-2)return void(this.isResetIndex=!0);this.isResetIndex=!1,this.isTransitioning=!0,setTimeout(function(){0===s.activeIndex?s.activeIndex=s.len-2:s.activeIndex===s.len-1&&(s.activeIndex=1),s.isTransitioning=!1},this.transitionInterval)}}}},"0Pia":function(t,e,s){"use strict";e.a={name:"vue-waterfall-easy",props:{gap:{type:Number,default:20},maxCols:{type:Number,default:5},imgsArr:{type:Array,required:!0},imgWidth:{type:Number,default:240},timeOut:{type:Number,default:500}},data:function(){return{msg:"this is from vue-waterfall-easy.vue",columnCount:NaN,isMobile:navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i),beginIndex:NaN,colsHeightArr:[],imgBoxEls:null,isPreloading:!0,isPreloadingC:!0,imgsArrC:[],loadedCount:0,isFirstTIme:!0}},computed:{colWidth:function(){return this.imgWidth+this.gap},imgWidthC:function(){return this.isMobile?window.innerWidth/2-this.gap:this.imgWidth}},methods:{waterfall:function(){for(var t=this.beginIndex;t<this.imgsArr.length;t++){var e=Math.min.apply(null,this.colsHeightArr),s=this.colsHeightArr.indexOf(e),i=this.imgBoxEls[0].offsetWidth;this.imgBoxEls[t].style.position="absolute",this.imgBoxEls[t].style.left=s*i+"px",this.imgBoxEls[t].style.top=e+"px",this.$set(this.colsHeightArr,s,e+this.imgBoxEls[t].offsetHeight)}this.beginIndex=this.imgsArr.length},loadFn:function(t,e,s){var i=this;this.loadedCount++,"load"===t.type&&this.$set(this.imgsArr[s],"height",Math.round(this.imgWidthC/(e.width/e.height))),this.loadedCount===this.imgsArr.length&&(this.imgsArrC=this.imgsArr.concat([]),this.isPreloading=!1,this.isFirstTIme=!1,this.$nextTick(function(){i.initImgBoxEls(),i.$emit("preloaded")}))},preload:function(){var t=this;this.imgsArr.forEach(function(e,s){if(!(s<t.loadedCount)){var i=new Image;i.addEventListener("load",function(e){t.loadFn(e,i,s)}),i.src=e.src}})},initColsHeightArr:function(){this.colsHeightArr=[];for(var t=0;t<this.columnCount;t++){this.imgBoxEls[t].style.position="static";var e=this.imgBoxEls[t].offsetHeight;this.colsHeightArr.push(e)}},initImgBoxEls:function(){this.imgBoxEls=document.getElementsByClassName("img-box")},initColumnCount:function(){var t=window.innerWidth,e=parseInt(t/this.colWidth);e=0===e?1:e,this.columnCount=this.isMobile?2:e>this.maxCols?this.maxCols:e}},mounted:function(){var t=this;this.initColumnCount(),this.beginIndex=this.columnCount,this.preload(),this.$on("preloaded",function(){0===t.colsHeightArr.length&&t.initColsHeightArr(),t.waterfall()}),window.addEventListener("resize",function(){var e=t.columnCount;t.initColumnCount(),e!==t.columnCount&&(t.beginIndex=t.columnCount,t.initColsHeightArr(),t.waterfall())}),this.$el.parentNode.addEventListener("scroll",function(){if(!t.isPreloading){var e=t.imgsArr[t.imgsArr.length-1].height;t.$el.parentNode.scrollTop+t.$el.parentNode.offsetHeight>t.$el.parentNode.scrollHeight-e&&t.$emit("scrollLoadImg")}})},watch:{imgsArr:function(t,e){t.length!==e.length&&(this.isPreloading=!0,this.preload())},isPreloading:function(t){var e=this;t?setTimeout(function(){e.isPreloading&&(e.isPreloadingC=!0)},this.timeOut):this.isPreloadingC=!1}}}},"12ux":function(t,e,s){"use strict";var i=s("KLHa");e.a={name:"vue-carousel-demo-3d",components:{vueCarousel3d:i.a},data:function(){return{msg:"this is from vue-carousel-3d-demo.vue",imgs:[{src:"./static/carousel-3d-imgs/1.jpg",href:""},{src:"./static/carousel-3d-imgs/2.jpg",href:""},{src:"./static/carousel-3d-imgs/3.jpg",href:""},{src:"./static/carousel-3d-imgs/4.jpg",href:""},{src:"./static/carousel-3d-imgs/5.jpg",href:""}]}},methods:{}}},"4+tj":function(t,e,s){"use strict";e.a={name:"drag",data:function(){return{msg:"this is from drag.vue"}},methods:{},mounted:function(){this.$store.state.isMobile&&this.$msg({type:"warn",content:"该项目基于鼠标事件，请在PC端访问该项目。"})}}},"57Df":function(t,e){},"663V":function(t,e,s){"use strict";e.a={name:"scrollbar-custom-demo",data:function(){return{msg:"this is from scrollbar-custom-demo.vue"}},methods:{}}},"6AmP":function(t,e,s){"use strict";e.a={name:"vue-carousel-3d",props:{imgs:{type:Array,required:!0},imgWidth:{type:Number,required:!0},height:{type:Number,required:!0},interval:{type:Number,default:6e3}},data:function(){return{msg:"this is from vue-carousel-3d.vue",activeIndex:0,dir:"next",isGt2:!1,timer:null}},computed:{len:function(){return this.imgs.length}},methods:{activeDotFn:function(t){if("li"===t.target.tagName.toLowerCase()){var e=parseInt(t.target.getAttribute("data-dot-index"));this.activeIndex=e}},startInterval:function(){var t=this;this.timer=setInterval(function(){t.activeIndex++,t.activeIndex=t.activeIndex!=t.len?t.activeIndex:0},this.interval)},hoverFn:function(t){"mouseenter"===t.type?this.timer&&clearInterval(this.timer):this.startInterval()},hasClass:function(t,e){if(-1!=t.className.indexOf(e))return!0},switchFn:function(t){var e=t.target.parentNode;if(this.hasClass(e,"img-item")){if(this.hasClass(e,"next")){if(this.activeIndex===this.len-1)return void(this.activeIndex=0);this.activeIndex++}if(this.hasClass(e,"prev")){if(0===this.activeIndex)return void(this.activeIndex=this.len-1);this.activeIndex--}}}},watch:{activeIndex:function(t,e){var s=this,i=Math.abs(t-e);if(i>=2&&i!=this.len-1)return this.isGt2=!0,void setTimeout(function(){s.isGt2=!1},0);this.isGt2=!1,t>e||0===t&&e===this.len-1?this.dir="next":this.dir="prev"}},mounted:function(){this.startInterval()}}},"6EOO":function(t,e){},"6ZKm":function(t,e,s){"use strict";e.a={name:"preload-image-demo",data:function(){return{msg:"this is from preload-image-demo.vue"}},methods:{}}},"7w2i":function(t,e){},"8goS":function(t,e,s){"use strict";function i(t){s("bXWS")}var n=s("O0dS"),a=s("++/o"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,null,null);e.a=c.exports},"8r8j":function(t,e,s){"use strict";var i=s("ygmp");e.a={name:"layout-project-demos",components:{demoHeader:i.a},data:function(){return{msg:"this is from layout-project-demos.vue",projects:[{logo:"static/layout-ptoject/豆瓣-logo.jpg",title:"[ 移动端布局 ] 手机端豆瓣首页（仿）",links:[{name:"github",href:"https://github.com/lfyfly/douban-mobile"},{name:"线上效果",href:"http://lfyfly.gitee.io/douban-mobile/docs/"}]},{logo:"static/layout-ptoject/印象笔记-logo.jpg",title:"[ 响应式布局 ] 印象笔记官网（仿）",links:[{name:"github",href:"https://github.com/lfyfly/yinxiang-response"},{name:"线上效果",href:"http://lfyfly.gitee.io/yinxiang-response/docs/"}]},{logo:"static/layout-ptoject/dota2-logo.jpg",title:"[ PC端布局 ] dota2官网首页（仿）",links:[{name:"github",href:"https://github.com/lfyfly/dota2-home-page"},{name:"线上效果",href:"http://lfyfly.gitee.io/dota2-home-page/docs/"}]},{logo:"static/layout-ptoject/markdown-logo.jpg",title:"[ 响应式端布局 ] 在线markdown编辑器",links:[{name:"github",href:"https://github.com/lfyfly/fly-markdown"},{name:"线上效果",href:"http://lfyfly.gitee.io/fly-markdown/docs"},{name:"文档",href:"https://github.com/lfyfly/fly-markdown/blob/master/README.md"}]}]}},methods:{}}},"90Wi":function(t,e){},AI6k:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition-group",{staticClass:"vue-msg",style:t.msgStyle,attrs:{name:"slide",tag:"div"}},t._l(t.msgs,function(e,i){return s("div",{key:e.key,staticClass:"msg-item"},[s("div",{staticClass:"msg-icon",class:e.type}),s("div",{staticClass:"msg-content"},[t._v(t._s(e.content))]),s("a",{staticClass:"close",on:{click:function(s){t.closeMsgFn(e)}}})])}))},n=[],a={render:i,staticRenderFns:n};e.a=a},BPLa:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"demo-header"},[t.data.logo?s("div",{staticClass:"demo-logo",style:{"background-image":"url("+t.data.logo+")"}}):t._e(),s("h3",{staticClass:"title"},[t._v(t._s(t.data.title))]),s("ul",{staticClass:"links"},[s("li",t._l(t.data.links,function(e){return e.href?s("a",{staticClass:"link",class:{unfinished:!e.href},attrs:{href:!!e.href&&e.href,target:"_blank"}},[t._v(t._s(e.name))]):t._e()}))])])},n=[],a={render:i,staticRenderFns:n};e.a=a},Bqi0:function(t,e,s){"use strict";function i(t){s("vaNi")}var n=s("6ZKm"),a=s("Hr6P"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,null,null);e.a=c.exports},CMPk:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout-project-demos"},t._l(t.projects,function(t,e){return s("demo-header",{key:e,attrs:{data:t}})}))},n=[],a={render:i,staticRenderFns:n};e.a=a},DGQ4:function(t,e){},"H+Co":function(t,e){},HR8g:function(t,e,s){"use strict";e.a={name:"nav-tag",props:{tags:{type:Array,required:!0}},data:function(){return{msg:"this is from nav-tag.vue"}},methods:{}}},Hr6P:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"preload-image-demo"},[s("iframe",{staticClass:"waterfall-iframe",attrs:{src:"http://lfyfly.gitee.io/vue-preload-image/docs/"}})])}],a={render:i,staticRenderFns:n};e.a=a},IcnI:function(t,e,s){"use strict";var i=s("7+uW"),n=s("NYxO");i.a.use(n.c),e.a=new n.c.Store({state:{currPage:"/vue-carousel",isMobile:!!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i),demos:[{tag:"网页布局项目",to:"/layout-project",demoHeader:{title:"网页布局项目"}},{tag:"无缝轮播",to:"/vue-carousel",demoHeader:{title:"[ vue组件 - PC ] 无缝轮播图",links:[{name:"github",href:"https://github.com/lfyfly/vue-basic-components/blob/master/src/components/carousel/vue-carousel.vue"},{name:"demo",href:"https://github.com/lfyfly/vue-basic-components/blob/master/src/components/demos/carousel/vue-carousel-demo.vue"},{name:"实现原理",href:"https://segmentfault.com/a/1190000011584322?_ea=2690954"}]}},{tag:"3d轮播",to:"/vue-carousel-3d",demoHeader:{title:"[ vue组件 - PC] 3d轮播图",links:[{name:"github",href:"https://github.com/lfyfly/vue-basic-components/blob/master/src/components/carousel/vue-carousel-3d.vue"},{name:"demo",href:"https://github.com/lfyfly/vue-basic-components/blob/master/src/demos/carousel/vue-carousel-3d-demo.vue"},{name:"实现原理",href:""}]}},{tag:"消息弹窗插件",to:"/vue-msg",demoHeader:{title:"[ vue扩展 ] 消息弹窗",links:[{name:"github",href:"https://github.com/lfyfly/vue-basic-components/tree/master/src/plugins/vue-msg"},{name:"demo",href:"https://github.com/lfyfly/vue-basic-components/blob/master/src/demos/vue-msg/vue-msg-demo.vue"},{name:"实现原理",href:""}]}},{tag:"瀑布流组件",to:"/waterfall",demoHeader:{title:"[ vue组件 - 响应式 ] 瀑布流组件",links:[{name:"github",href:"https://github.com/lfyfly/vue-waterfall-easy/blob/master/src/components/vue-waterfall-easy.vue"},{name:"demo",href:"https://github.com/lfyfly/vue-waterfall-easy/blob/master/src/App.vue"},{name:"文档",href:"https://github.com/lfyfly/vue-waterfall-easy/blob/master/README.md"},{name:"实现原理",href:""}]}},{tag:"图片预加载组件",to:"/preload-image",demoHeader:{title:"[ vue组件 ] 图片预加载",links:[{name:"github",href:"https://github.com/lfyfly/vue-preload-image/blob/master/src/components/vue-preload-image.vue"},{name:"demo",href:"https://github.com/lfyfly/vue-preload-image/blob/master/src/App.vue"},{name:"文档",href:"https://github.com/lfyfly/vue-preload-image/blob/master/README.md"},{name:"实现原理",href:""}]}},{tag:"自定义滚动条",to:"/scrollbar-custom",demoHeader:{title:"[ vue组件 - PC ] 自定义滚动条",links:[{name:"github",href:"https://github.com/lfyfly/vue-scrollbar-custom/blob/master/src/vue-scrollbar-custom/vue-scrollbar-custom.vue"},{name:"demo",href:"https://github.com/lfyfly/vue-scrollbar-custom/blob/master/src/App.vue"},{name:"文档",href:"https://github.com/lfyfly/vue-scrollbar-custom/blob/master/README.md"}]}},{tag:"鼠标拖拽",to:"/drag",demoHeader:{title:"[ vue组件 - PC ] 鼠标拖拽",links:[{name:"github",href:"https://github.com/lfyfly/vue-dragdrag/blob/master/src/vue-dragdrag/vue-dragdrag.js"},{name:"demo",href:"https://github.com/lfyfly/vue-dragdrag/blob/master/src/App.vue"},{name:"实现原理",href:""}]}}]},getters:{currDemoHeaderData:function(t){return t.demos.filter(function(e){return e.to===t.currPage})[0].demoHeader}},mutations:{setCurrPage:function(t,e){console.log(e),t.currPage=e}}})},JA9u:function(t,e){},JMh2:function(t,e){},"K/B+":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vue-carousel-demo-3d"},[s("vue-carousel-3d",{attrs:{imgs:t.imgs,imgWidth:t.$store.state.isMobile?230:520,height:280}})],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},KLHa:function(t,e,s){"use strict";function i(t){s("7w2i")}var n=s("6AmP"),a=s("ol0k"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,null,null);e.a=c.exports},KYUt:function(t,e,s){"use strict";function i(t){s("QeBo")}var n=s("ei1j"),a=s("kdYq"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,null,null);e.a=c.exports},LsoO:function(t,e){},M93x:function(t,e,s){"use strict";function i(t){s("57Df")}var n=s("xJD8"),a=s("brZg"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,null,null);e.a=c.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n=s("M93x"),a=s("YaEn"),r=s("IcnI"),o=s("cpex");i.a.config.productionTip=!1,i.a.use(o.a),new i.a({el:"#app",store:r.a,router:a.a,template:"<App/>",components:{App:n.a}})},NNnj:function(t,e){},O0dS:function(t,e,s){"use strict";var i=s("yH5P");e.a={name:"vue-carousel-demo",components:{vueCarousel:i.a},data:function(){return{msg:"this is from vue-carousel-demo.vue",imgs:[{src:"./static/carousel-imgs/1.jpg",href:""},{src:"./static/carousel-imgs/2.jpg",href:""},{src:"./static/carousel-imgs/3.jpg",href:""},{src:"./static/carousel-imgs/4.jpg",href:""},{src:"./static/carousel-imgs/5.jpg",href:""}]}},methods:{}}},QHjx:function(t,e,s){"use strict";e.a={name:"vue-msg",data:function(){return{msgs:[]}},methods:{closeMsgFn:function(t){this.msgs.splice(this.msgs.indexOf(t),1)}}}},QVbh:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav"},[s("div",{staticClass:"nav-tag"},t._l(t.tags,function(e){return s("li",[s("router-link",{staticClass:"tag",attrs:{to:e.to}},[t._v(t._s(e.tag))])],1)}))])},n=[],a={render:i,staticRenderFns:n};e.a=a},QeBo:function(t,e){},Vtyd:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vue-carousel",on:{mouseenter:t.hoverFn,mouseleave:t.hoverFn}},[s("div",{staticClass:"imgs-container",style:{width:100*t.len+"%",transform:"translate(-"+100*t.activeIndex/t.len+"%)",transition:t.isResetIndex?"":"transform "+t.transitionInterval/1e3+"s"}},t._l(t.imgsComputed,function(e,i){return s("a",{staticClass:"img-item",style:{width:100/t.len+"%",backgroundImage:"url("+e.src+")"},attrs:{href:!!e.href&&e.href}})})),s("div",{staticClass:"prev",attrs:{onselectstart:"return false"},on:{click:t.switchFn}},[t._v("<")]),s("div",{staticClass:"next",attrs:{onselectstart:"return false"},on:{click:t.switchFn}},[t._v(">")]),s("ul",{staticClass:"dots",on:{click:t.activeDotFn}},t._l(t.len-2,function(e){return s("li",{staticClass:"dot",class:{"active-dot":t.activeIndex===e||t.activeIndex===t.len-1&&1===e||0===t.activeIndex&&5===e},attrs:{"data-dot-index":e}})}))])},n=[],a={render:i,staticRenderFns:n};e.a=a},WRLd:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vue-msg-demo"},[s("button",{staticClass:"succ",on:{click:t.succMsgFn}},[t._v("弹出一个成功的消息")]),s("button",{staticClass:"err",on:{click:t.errorMsgFn}},[t._v("弹出一个失败的消息")]),s("button",{staticClass:"warn",on:{click:t.warnMsgFn}},[t._v("弹出一个警告的消息")]),s("button",{staticClass:"msg",on:{click:t.msgMsgFn}},[t._v("弹出一个信息的消息")]),s("button",{staticClass:"random",on:{click:t.randomMsgFn}},[t._v("弹出一个随机的消息")])])},n=[],a={render:i,staticRenderFns:n};e.a=a},XVGx:function(t,e,s){"use strict";function i(t){s("6EOO")}var n=s("0Pia"),a=s("uXHg"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,null,null);e.a=c.exports},YaEn:function(t,e,s){"use strict";var i=s("7+uW"),n=s("/ocq"),a=s("IcnI"),r=s("8goS"),o=s("uBJL"),c=s("qeqm"),u=s("KYUt"),l=s("Bqi0"),m=s("i/8F"),d=s("c4oW"),f=s("wbfD");i.a.use(n.a);var h=new n.a({routes:[{path:"/",redirect:a.a.state.demos[0].to},{path:"/vue-carousel",name:"vue-carousel-demo",component:r.a},{path:"/vue-carousel-3d",name:"vue-carousel-demo-3d",component:o.a},{path:"/vue-msg",name:"vue-msg-demo",component:c.a},{path:"/waterfall",name:"waterfall-demo",component:u.a},{path:"/preload-image",name:"preload-image-demo",component:l.a},{path:"/drag",name:"drag-demo",component:m.a},{path:"/scrollbar-custom",name:"scrollbar-custom-demo",component:d.a},{path:"/layout-project",name:"layout-project-demo",component:f.a}]});h.beforeEach(function(t,e,s){a.a.commit("setCurrPage",t.path),s()}),e.a=h},bXWS:function(t,e){},brZg:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{"is-mobile":t.isMobile},attrs:{id:"app"}},[s("nav-tag",{attrs:{id:"nav",tags:t.demos}}),t.currDemoHeaderData?s("demo-header",{attrs:{data:t.currDemoHeaderData}}):t._e(),s("div",{attrs:{id:"main"}},[s("transition",{attrs:{name:"fade"}},[s("keep-alive",[s("router-view",{staticClass:"router-view"})],1)],1)],1)],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},c4oW:function(t,e,s){"use strict";function i(t){s("myn3")}var n=s("663V"),a=s("qYnv"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,null,null);e.a=c.exports},cpex:function(t,e,s){"use strict";function i(t){if(t.content){var e=t.timeout,s={key:Date.now(),type:"succ",timeout:3e3,delay:0};t=a()({},s,t),u.msgs.push(t),0!==e&&(e=t.timeout||3e3,setTimeout(function(){u.msgs.splice(u.msgs.indexOf(t),1)},e))}}var n=s("woOf"),a=s.n(n),r=s("7+uW"),o=s("iWeP"),c=r.a.extend(o.a),u=void 0;e.a={install:function(t,e){u=new c({el:document.createElement("div"),data:function(){return{msgStyle:e||""}}}),document.body.appendChild(u.$el),t.prototype.$msg=i}}},djqn:function(t,e,s){"use strict";function i(t){s("DGQ4")}var n=s("HR8g"),a=s("QVbh"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,null,null);e.a=c.exports},ei1j:function(t,e,s){"use strict";var i=s("XVGx");e.a={name:"waterfall-demo",data:function(){return{imgsArr:[],fetchImgsArr:[]}},components:{vueWaterfallEasy:i.a},methods:{initImgsArr:function(t,e){for(var s=[],i=t;i<e;i++)s.push({src:"./static/waterfall/"+(i+1)+".jpg",link:"https://www.baidu.com",info:"一些图片描述文字"});return s},fetchImgsData:function(){this.imgsArr=this.imgsArr.concat(this.fetchImgsArr)}},created:function(){this.imgsArr=this.initImgsArr(0,10),this.fetchImgsArr=this.initImgsArr(10,20)}}},"i/8F":function(t,e,s){"use strict";function i(t){s("JMh2")}var n=s("4+tj"),a=s("+/FY"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,null,null);e.a=c.exports},iWeP:function(t,e,s){"use strict";function i(t){s("JA9u")}var n=s("QHjx"),a=s("AI6k"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,null,null);e.a=c.exports},kdYq:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"waterfall-demo"},[s("vue-waterfall-easy",{attrs:{imgsArr:t.imgsArr},on:{scrollLoadImg:t.fetchImgsData},scopedSlots:t._u([{key:"default",fn:function(e){return[s("p",{staticClass:"some-info"},[t._v("第"+t._s(e.index+1)+"张图片")]),s("p",{staticClass:"some-info"},[t._v(t._s(e.value.info))])]}}])})],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},myn3:function(t,e){},ol0k:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vue-carousel-3d",class:{"tansition-off":t.isGt2},style:{minWidth:1.4*t.imgWidth+"px",maxWidth:2*t.imgWidth+"px",height:t.height+"px"},on:{mouseenter:t.hoverFn,mouseleave:t.hoverFn}},[s("div",{staticClass:"imgs-container",class:{"to-next":"next"===t.dir},on:{click:t.switchFn}},t._l(t.imgs,function(e,i){return s("a",{staticClass:"img-item",class:{active:t.activeIndex===i,prev:t.activeIndex-1===i||0===t.activeIndex&&i===t.len-1,next:t.activeIndex+1===i||t.activeIndex===t.len-1&&0===i},style:{width:t.imgWidth+"px"},attrs:{href:!!e.href&&e.href}},[s("img",{attrs:{src:e.src}})])})),s("ul",{staticClass:"dots",on:{click:t.activeDotFn}},t._l(t.len,function(e){return s("li",{staticClass:"dot",class:{"active-dot":t.activeIndex===e-1},attrs:{"data-dot-index":e-1}})}))])},n=[],a={render:i,staticRenderFns:n};e.a=a},pWPM:function(t,e,s){"use strict";e.a={name:"vue-msg-demo",data:function(){return{msg:"this is from vue-msg-demo.vue"}},methods:{succMsgFn:function(){this.$msg({type:"succ",content:"弹出一个成功的消息"})},errorMsgFn:function(){this.$msg({type:"err",content:"弹出一个失败的消息"})},warnMsgFn:function(){this.$msg({type:"warn",content:"弹出一个警告的消息"})},msgMsgFn:function(){this.$msg({type:"msg",content:"弹出一个信息的消息"})},randomMsgFn:function(){var t=["succ","warn","msg","err"],e=Math.floor(4*Math.random());this.$msg({type:t[e],content:Date.now()})}}}},qYnv:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"scrollbar-custom-demo"},[s("iframe",{attrs:{src:"http://lfyfly.gitee.io/vue-scrollbar-custom/docs/"}})])}],a={render:i,staticRenderFns:n};e.a=a},qeqm:function(t,e,s){"use strict";function i(t){s("90Wi")}var n=s("pWPM"),a=s("WRLd"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,null,null);e.a=c.exports},soSm:function(t,e,s){"use strict";e.a={name:"demo-header",props:["data"],data:function(){return{msg:"this is from demo-header.vue"}},methods:{}}},uBJL:function(t,e,s){"use strict";function i(t){s("H+Co")}var n=s("12ux"),a=s("K/B+"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,null,null);e.a=c.exports},uXHg:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vue-waterfall-easy",style:t.isMobile?"":{width:t.colWidth*t.columnCount+"px",left:"50%",marginLeft:-1*t.colWidth*t.columnCount/2+"px"}},[t._l(t.imgsArrC,function(e,i){return s("a",{staticClass:"img-box",style:{padding:t.gap/2+"px",width:t.isMobile?"":t.colWidth+"px"},attrs:{href:e.link}},[s("div",{staticClass:"img-inner-box"},[s("div",{staticClass:"img-wraper",style:{width:t.imgWidthC+"px",height:e.height?e.height+"px":""}},[s("img",{attrs:{src:e.src}})]),s("div",{staticClass:"img-info"},[t._t("default",null,{index:i,value:e})],2)])])}),t.isPreloadingC?s("div",{staticClass:"loading",class:{"first-loading":t.isFirstTIme}},[s("div",{staticClass:"double-bounce1"}),s("div",{staticClass:"double-bounce2"})]):t._e()],2)},n=[],a={render:i,staticRenderFns:n};e.a=a},vYWQ:function(t,e){},vaNi:function(t,e){},wbfD:function(t,e,s){"use strict";function i(t){s("LsoO")}var n=s("8r8j"),a=s("CMPk"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,null,null);e.a=c.exports},xJD8:function(t,e,s){"use strict";var i=s("Dd8w"),n=s.n(i),a=s("djqn"),r=s("ygmp"),o=s("NYxO");e.a={name:"app",components:{navTag:a.a,demoHeader:r.a},data:function(){return{}},computed:n()({},s.i(o.a)(["currDemoHeaderData"]),s.i(o.b)(["demos","isMobile"])),mounted:function(){this.isMobile&&this.$msg({type:"warn",content:"部分组件仅适用于PC端，请使用PC端浏览器访问获得最佳体验！",timeout:0})}}},yH5P:function(t,e,s){"use strict";function i(t){s("NNnj")}var n=s("+wrT"),a=s("Vtyd"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,null,null);e.a=c.exports},ygmp:function(t,e,s){"use strict";function i(t){s("vYWQ")}var n=s("soSm"),a=s("BPLa"),r=s("VU/8"),o=i,c=r(n.a,a.a,o,null,null);e.a=c.exports}},["NHnr"]);
//# sourceMappingURL=app.2f814b4785cb88b59ab6.js.map