(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-885f32de"],{"38f0":function(t,e,a){},"39a2":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("HomeHeader",{attrs:{headerdata:t.headerdata}}),a("section",[a("div",{staticClass:"activity_list"},[a("ul",{staticClass:"clearfix",attrs:{id:"activity_list"}},t._l(t.list,function(e,i){return a("li",{key:i,staticClass:"after gotoinfo"},[a("a",{attrs:{href:e.applink}},[a("div",{staticClass:"img"},[a("img",{staticClass:"img",attrs:{src:e.thumbimg,alt:"i.title"}}),t._m(0,!0)]),a("div",{staticClass:"text"},[a("h3",{domProps:{textContent:t._s(e.title)}}),a("p",{domProps:{textContent:t._s(e.introduce)}})])])])}),0)])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"hdicon"},[a("img",{attrs:{src:"http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/hdicon02.png",alt:"进行中"}})])}],s=(a("96cf"),a("3b8d")),r=a("a6ab"),o={data:function(){return{headerdata:{addres:"",headertitle:"活动列表",licon:"arrow-left",ricon:"http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/topicon_member.png",color:"white",size:"32",riconshow:!1,input:!1},list:[]}},components:{HomeHeader:r["a"]},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios("https://www.easy-mock.com/mock/5d4a3449ec75c44faeef1eec/activity");case 2:e=t.sent,this.list=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},c=o,d=(a("9a1f"),a("2877")),u=Object(d["a"])(c,i,n,!1,null,"1aeb5fa1",null);e["default"]=u.exports},"53b7":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAABrUlEQVRIDe1UPUhCURg9RluDkqSDiwS6SJM4CA0uLm9pUnCrSYgWx1rERXByeQhObgpva3E1SGgIJ2vIQIJyCBHeoPPru5f3vT806oFOXh54v+P5zv3euYcXMArH2M462I6sUN1Le7zdG7I7Qw75KBVaGsUsl/K3OkWoj8qNC6Ti+gm5JIMT0aXc4/KcEeAhjJaVa2WM1yi0KRSbgFoDoRKqZQfE21kPxTCKPa6B1VAid1iZGE/db4MeGjOvIl9CzG5Bqg6tbtZyHMd/v21ZmkTRQO1Uci0HyujU8SzezsfiXM+/xXRN1YfEphaeupXFB11FehPPxpsLaVcSWskEtYV3k1sgMwys+aiSOamgrWXt6KKuLkRFCUmMZHI4V5SQAuS/toc8NTWIAEVEkkzHCbJ5QvGfi72mtswZZqM/tZ9EoY9dzHgE+qcLcXyvy4gH8W5lw0NzlpI5bzshJJLewwA2RFFwNPlTyIiJoZupIjZBxX0YnUzXKJ4X3fjqmhtj81o+CuaAWm6NpaQRMniTSJfbdKMjNNclxPWq/gvHNfoXWd+5l/b4sjdkd4b8AH6dq4JbxSV/AAAAAElFTkSuQmCC"},5783:function(t,e,a){"use strict";var i=a("fb62"),n=a.n(i);n.a},"9a1f":function(t,e,a){"use strict";var i=a("38f0"),n=a.n(i);n.a},a6ab:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"header",staticStyle:{position:"fixed",top:"0px",left:"0"}},[a("div",{on:{click:function(e){return t.back(t.headerdata.licon)}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.headerdata.addres,expression:"headerdata.addres"}],staticClass:"fl",domProps:{textContent:t._s(t.headerdata.addres)}}),a("van-icon",{staticClass:"fl",attrs:{name:t.headerdata.licon,color:t.headerdata.color,size:t.headerdata.size}})],1),a("div",{staticClass:"title"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.headerdata.input,expression:"!headerdata.input"}],domProps:{textContent:t._s(t.headerdata.headertitle)}}),a("input",{directives:[{name:"show",rawName:"v-show",value:t.headerdata.input,expression:"headerdata.input"}],attrs:{type:"text",placeholder:"请输入产品名"},on:{click:t.search}})]),a("div",{staticClass:"fr"},[a("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.headerdata.riconshow,expression:"headerdata.riconshow"}],attrs:{name:t.headerdata.ricon,size:30},on:{click:function(e){return t.tohome(t.headerdata.ricon)}}})],1)]),a("div",{staticClass:"header_bottom"})])},n=[],s=a("53b7"),r=a.n(s),o={data:function(){return{}},props:{headerdata:{default:function(){return{addres:"青岛",headertitle:"登陆",licon:"arrow-down",ricon:r.a,color:"white",size:"12",riconshow:!0,input:!0}}}},methods:{back:function(t){"arrow-left"===t?this.$router.go(-1):this.$router.push({name:"city"})},tohome:function(t){"http://guangzhou.m.qilong.com/Public/newmobile/default/Images/index/topicon_home.png"===t?this.$router.push({name:"index"}):this.$router.push({name:"reg"})},search:function(){this.$router.push({name:"search"})}}},c=o,d=(a("5783"),a("2877")),u=Object(d["a"])(c,i,n,!1,null,"5c1b367e",null);e["a"]=u.exports},fb62:function(t,e,a){}}]);
//# sourceMappingURL=chunk-885f32de.8e9e5808.js.map