import{t as v,M as S,a7 as h}from"./index-f8524733.js";const k=["sm","md","lg","xl"],o=["start","end","center"];function r(n,t){return k.reduce((e,a)=>(e[n+h(a)]=t(),e),{})}const f=n=>[...o,"baseline","stretch"].includes(n),y=r("align",()=>({type:String,default:null,validator:f})),j=n=>[...o,"space-between","space-around"].includes(n),C=r("justify",()=>({type:String,default:null,validator:j})),m=n=>[...o,"space-between","space-around","stretch"].includes(n),b=r("alignContent",()=>({type:String,default:null,validator:m})),g={align:Object.keys(y),justify:Object.keys(C),alignContent:Object.keys(b)},w={align:"align",justify:"justify",alignContent:"align-content"};function M(n,t,e){let a=w[n];if(e!=null){if(t){const i=t.replace(n,"");a+=`-${i}`}return a+=`-${e}`,a.toLowerCase()}}const d=new Map,$=v.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:f},...y,justify:{type:String,default:null,validator:j},...C,alignContent:{type:String,default:null,validator:m},...b},render(n,{props:t,data:e,children:a}){let i="";for(const s in t)i+=String(t[s]);let l=d.get(i);if(!l){l=[];let s;for(s in g)g[s].forEach(u=>{const p=t[u],c=M(s,u,p);c&&l.push(c)});l.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),d.set(i,l)}return n(t.tag,S(e,{staticClass:"row",class:l}),a)}});export{$ as _};
