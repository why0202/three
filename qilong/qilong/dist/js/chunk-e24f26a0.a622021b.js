(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e24f26a0"],{"53b7":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAABrUlEQVRIDe1UPUhCURg9RluDkqSDiwS6SJM4CA0uLm9pUnCrSYgWx1rERXByeQhObgpva3E1SGgIJ2vIQIJyCBHeoPPru5f3vT806oFOXh54v+P5zv3euYcXMArH2M462I6sUN1Le7zdG7I7Qw75KBVaGsUsl/K3OkWoj8qNC6Ti+gm5JIMT0aXc4/KcEeAhjJaVa2WM1yi0KRSbgFoDoRKqZQfE21kPxTCKPa6B1VAid1iZGE/db4MeGjOvIl9CzG5Bqg6tbtZyHMd/v21ZmkTRQO1Uci0HyujU8SzezsfiXM+/xXRN1YfEphaeupXFB11FehPPxpsLaVcSWskEtYV3k1sgMwys+aiSOamgrWXt6KKuLkRFCUmMZHI4V5SQAuS/toc8NTWIAEVEkkzHCbJ5QvGfi72mtswZZqM/tZ9EoY9dzHgE+qcLcXyvy4gH8W5lw0NzlpI5bzshJJLewwA2RFFwNPlTyIiJoZupIjZBxX0YnUzXKJ4X3fjqmhtj81o+CuaAWm6NpaQRMniTSJfbdKMjNNclxPWq/gvHNfoXWd+5l/b4sjdkd4b8AH6dq4JbxSV/AAAAAElFTkSuQmCC"},5783:function(t,e,a){"use strict";var i=a("fb62"),o=a.n(i);o.a},"5d95":function(t,e,a){},"6d4f":function(t,e,a){"use strict";var i=a("5d95"),o=a.n(i);o.a},a6ab:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header",staticStyle:{position:"fixed",top:"0px",left:"0"}},[a("div",{on:{click:function(e){return t.back(t.headerdata.licon)}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.headerdata.addres,expression:"headerdata.addres"}],staticClass:"fl",domProps:{textContent:t._s(t.headerdata.addres)}}),a("van-icon",{staticClass:"fl",attrs:{name:t.headerdata.licon,color:t.headerdata.color,size:t.headerdata.size}})],1),a("div",{staticClass:"title"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.headerdata.input,expression:"!headerdata.input"}],domProps:{textContent:t._s(t.headerdata.headertitle)}}),a("input",{directives:[{name:"show",rawName:"v-show",value:t.headerdata.input,expression:"headerdata.input"}],attrs:{type:"text",placeholder:"请输入产品名"},on:{click:t.search}})]),a("div",{staticClass:"fr"},[a("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.headerdata.riconshow,expression:"headerdata.riconshow"}],attrs:{name:t.headerdata.ricon,size:30},on:{click:function(e){return t.tohome(t.headerdata.ricon)}}})],1)]),a("div",{staticClass:"header_bottom"})])},o=[],s=a("53b7"),n=a.n(s),r={data:function(){return{}},props:{headerdata:{default:function(){return{addres:"青岛",headertitle:"登陆",licon:"arrow-down",ricon:n.a,color:"white",size:"12",riconshow:!0,input:!0}}}},methods:{back:function(t){"arrow-left"===t?this.$router.go(-1):this.$router.push({name:"city"})},tohome:function(t){"http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/topicon_home.png"===t?this.$router.push({name:"index"}):this.$router.push({name:"reg"})},search:function(){this.$router.push({name:"search"})}}},c=r,d=(a("5783"),a("2877")),l=Object(d["a"])(c,i,o,!1,null,"5c1b367e",null);e["a"]=l.exports},b58d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("HomeHeader",{attrs:{headerdata:t.headerdata}}),a("div",{staticClass:"allcity"},[a("div",{staticClass:"title"},[t._v("全部城市")]),a("div",{staticClass:"citylist"},[a("dl",{staticClass:"clearfix"},t._l(t.indexList,function(e,i){return a("dd",{key:i},[a("a",{attrs:{href:"city#"+e},domProps:{textContent:t._s(e)}})])}),0),a("ol",t._l(t.citylist,function(e,i){return a("li",{key:i+1,staticClass:"clearfix"},[a("div",{staticClass:"fl cityindexes",attrs:{id:e.title},domProps:{textContent:t._s(e.title)}}),a("div",{staticClass:"fl cataloglist"},[a("ul",{staticClass:"clearfix"},t._l(e.city,function(e,i){return a("li",{key:i},[a("a",{domProps:{textContent:t._s(e)},on:{click:function(a){return t.city(e)}}})])}),0)])])}),0)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.totop,expression:"totop"}],staticClass:"gototop",attrs:{id:"gototop"},on:{click:t.to}},[a("a",{attrs:{href:"javascript:"}},[t._v("返回顶部")])])],1)},o=[],s=(a("96cf"),a("3b8d")),n=a("a6ab"),r={data:function(){return{headerdata:{addres:"",headertitle:"选择城市",licon:"arrow-left",ricon:"http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/topicon_home.png",color:"white",size:"32",riconshow:!0,input:!1},indexList:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],citylist:[],totop:!1}},components:{HomeHeader:n["a"]},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios("https://www.easy-mock.com/mock/5d4a3449ec75c44faeef1eec/city");case 2:e=t.sent,this.citylist=e.data,window.onscroll=function(){window.scrollY>=700?a.totop=!0:a.totop=!1};case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),destroyed:function(){window.onscroll=null},methods:{to:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},city:function(t){this.$store.dispatch("setCity",t),this.$router.go(-1)}}},c=r,d=(a("6d4f"),a("2877")),l=Object(d["a"])(c,i,o,!1,null,"1aeb058c",null);e["default"]=l.exports},fb62:function(t,e,a){}}]);
//# sourceMappingURL=chunk-e24f26a0.a622021b.js.map