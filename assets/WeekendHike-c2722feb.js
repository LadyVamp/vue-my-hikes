import{T as p,g as r,m as h,h as f,c as _,n as k,i as o,j as v,k as w,l as a,a as l}from"./index-f8524733.js";import{B as T}from"./index-48a68f7d.js";import{_ as s,a as d}from"./index-b21de42b.js";import"./index-2189e4a1.js";const g=h(T,f("windowGroup","v-window-item","v-window")),u=g.extend().extend().extend({name:"v-window-item",directives:{Touch:p},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?typeof this.reverseTransition<"u"?this.reverseTransition||"":this.windowGroup.computedTransition:typeof this.transition<"u"?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,this.windowGroup.transitionCount===0&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,this.windowGroup.transitionCount===0&&(this.windowGroup.transitionHeight=r(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(e){this.inTransition&&this.$nextTick(()=>{!this.computedTransition||!this.inTransition||(this.windowGroup.transitionHeight=r(e.clientHeight))})}},render(e){return e("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}}),m=u.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const e=u.options.methods.genWindowItem.call(this);return e.data.domProps=e.data.domProps||{},e.data.domProps.id=this.id||this.value,e}}}),y=_("v-toolbar__title");_("v-toolbar__items");const C={name:"WeekendHike",components:{LinkButton:o},data(){return{skiTracks:[{title:"Лыжи 2024",key:"ski2024",link:"https://nakarte.me/#m=9/55.84217/37.94952&l=O&nktl=YU_Ur7WKPRYctasoL3P14g"},{title:"Лыжи 2023",key:"ski2023",link:"https://nakarte.me/#m=9/55.73175/37.97424&l=O&nktl=XnnSO2dAohvXstKVbrjz7g"},{title:"Лыжи 2022",key:"ski2022",link:"https://nakarte.me/#m=10/55.83716/38.20221&l=O&nktl=q-moXVXl2vvYp0i4P9MKGQ"},{title:"Лыжи 2021",key:"ski2021",link:"https://nakarte.me/#m=9/55.70622/37.89734&l=O&nktl=O1XNrzzifW9lYXGnYAg-Zg"},{title:"Лыжи 2019",key:"ski2019",link:"https://nakarte.me/#m=9/55.68146/37.88361&l=O&nktl=4jcvaIU4Va78zDAgNSoP9g"},{title:"Лыжи 2018",key:"ski2018",link:"https://nakarte.me/#m=9/55.72634/37.83966&l=O&nktl=qI8i0o0k_hWUc9T2s18L3Q"}],kayakTracks:[{title:"Байдарка 2023",key:"kayak2023",link:"https://nakarte.me/#m=12/55.50103/38.73919&l=O&nktl=G5HYVB837AxD7mzguSjBqw"},{title:"Байдарка 2022",key:"kayak2022",link:"https://nakarte.me/#m=8/55.62334/38.28186&l=O&nktl=WMwSOEN_FnB3iynPmfCE6Q"},{title:"Надувная лодка 2021",key:"inflatableBoat2021",link:"https://nakarte.me/#m=8/55.70081/37.96326&l=O&nktl=YEm6gnF3OXVZHSwor-BuTQ"}]}}};var G=function(){var n=this,t=n._self._c;return t(s,[t(v,{attrs:{flat:"",color:"primary",dark:""}},[t(y,[n._v("Походы выходного дня")])],1),t(w,{attrs:{vertical:""}},[t(a,[t(l,{attrs:{left:""}},[n._v(" mdi-ski ")]),n._v(" Лыжи ")],1),t(a,[t(l,{attrs:{left:""}},[n._v(" mdi-kayaking ")]),n._v(" Сплавы ")],1),t(m,[t(s,{attrs:{flat:""}},[t(d,n._l(n.skiTracks,function(i){return t("div",{key:i.key},[t(o,{attrs:{label:i.title,link:i.link,icon:"mdi-map-marker-multiple"}})],1)}),0)],1)],1),t(m,[t(s,{attrs:{flat:""}},[t(d,n._l(n.kayakTracks,function(i){return t("div",{key:i.key},[t(o,{attrs:{label:i.title,link:i.link,icon:"mdi-map-marker-multiple"}})],1)}),0)],1)],1)],1)],1)},x=[],B=k(C,G,x,!1,null,null,null,null);const c=B.exports;const W={components:{WeekendHike:c},metaInfo:{title:"ПВД"}};var b=function(){var n=this,t=n._self._c;return t(c)},O=[],H=k(W,b,O,!1,null,"1c697729",null,null);const I=H.exports;export{I as default};
