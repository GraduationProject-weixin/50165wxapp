(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goodsOrder/list"],{"3d57":function(e,t,r){"use strict";var n=r("c2e0"),o=r.n(n);o.a},"5b2b":function(e,t,r){"use strict";(function(e){r("b6f1");n(r("66fd"));var t=n(r("f818"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=r,e(t.default)}).call(this,r("543d")["createPage"])},9688:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r,n,o,s,u){try{var a=e[s](u),i=a.value}catch(c){return void r(c)}a.done?t(i):Promise.resolve(i).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function a(e){s(u,n,o,a,i,"next",e)}function i(e){s(u,n,o,a,i,"throw",e)}a(void 0)}))}}var a={data:function(){return{navlist:[],btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],CustomBar:"0",currentIndex:0,pages:1,queryList:[{queryName:"展柜设计名称"}],searchForm:{},list:[],mescroll:null,downOption:{auto:!1},upOption:{page:{},noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,goodsLiuyanText:"",user:"",shejituPhoto:"",goodsXuqiuPhoto:"",goodsXuqiuText:"",orderId:""}},onShow:function(){var t=this;return u(n.default.mark((function r(){var o,s,u,a;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.btnColor=t.btnColor.sort((function(){return.5-Math.random()})),o=e.getStorageSync("nowTable"),r.next=4,t.$api.session(o);case 4:return s=r.sent,t.user=s.data,t.hasNext=!0,u={page:1,limit:100,dicCode:"goods_order_types"},r.next=10,t.$api.page("dictionary",u);case 10:a=r.sent,t.navlist=a.data.list,t.mescroll&&t.mescroll.resetUpScroll();case 13:case"end":return r.stop()}}),r)})))()},methods:{onChatTapC:function(e,t){var r={id:e,goodsOrderTypes:t};this.$api.update("goodsOrder",r),this.$utils.msg("审核成功"),this.mescroll&&this.mescroll.resetUpScroll(),this.$refs.popupB.close()},onCloseWinTapA:function(){this.$refs.popupA.close()},onChatTapA:function(e){this.shejituPhoto=e,this.$refs.popupA.open()},onCloseWinTapB:function(){this.$refs.popupB.close()},onChatTapB:function(e){this.orderId=e,this.goodsXuqiuPhoto=null,this.goodsXuqiuText=null,this.$refs.popupB.open()},onFinishTapB:function(){var e=this;return u(n.default.mark((function t(){var r;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.goodsXuqiuPhoto){t.next=3;break}return e.$utils.msg("展柜需求图片不能为空"),t.abrupt("return");case 3:if(e.goodsXuqiuText){t.next=6;break}return e.$utils.msg("展柜需求详情不能为空"),t.abrupt("return");case 6:return r={id:e.orderId,goodsXuqiuText:e.goodsXuqiuText,goodsXuqiuPhoto:e.goodsXuqiuPhoto,goodsOrderTypes:3},t.next=9,e.$api.update("goodsOrder",r);case 9:e.$utils.msg("需求发送成功"),e.mescroll&&e.mescroll.resetUpScroll(),e.$refs.popupB.close();case 12:case"end":return t.stop()}}),t)})))()},goodsXuqiuPhotoTap:function(){var e=this;this.$api.upload((function(t){e.goodsXuqiuPhoto=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){}))}))},navselect:function(e){this.currentIndex=e,this.goodsOrderTypes=e,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(e){var t=this;return u(n.default.mark((function r(){var o,s;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o={page:e.num,limit:e.size},t.goodsOrderTypes&&(o["goodsOrderTypes"]=t.goodsOrderTypes),r.next=4,t.$api.page("goodsOrder",o);case 4:s=r.sent,1==e.num&&(t.list=[]),t.list=t.list.concat(s.data.list),0==s.data.list.length&&(t.hasNext=!1),e.endSuccess(e.size,t.hasNext);case 9:case"end":return r.stop()}}),r)})))()},onCancelTap:function(t){var r=this;return u(n.default.mark((function o(){var s;return n.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:s=r,e.showModal({title:"提示",content:"是否确认退款",success:function(){var e=u(n.default.mark((function e(r){var o;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r.confirm){e.next=7;break}return o=[{key:"id",val:t.id}],e.next=4,s.$api.requestCondition("goodsOrder","refund",o);case 4:e.sent,s.$utils.msgBack("退款成功"),s.mescroll&&s.mescroll.resetUpScroll();case 7:case"end":return e.stop()}}),e)})));function r(t){return e.apply(this,arguments)}return r}()});case 2:case"end":return o.stop()}}),o)})))()},onshouhuoTap:function(t,r){var o=this;return u(n.default.mark((function s(){var a;return n.default.wrap((function(s){while(1)switch(s.prev=s.next){case 0:a=o,e.showModal({title:"提示",content:"是否确认要收货吗？",success:function(){var e=u(n.default.mark((function e(o){var s;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!o.confirm){e.next=7;break}return s={id:t,goodsOrderTypes:r},e.next=4,a.$api.update("goodsOrder",s);case 4:e.sent,a.$utils.msgBack("收货成功"),a.mescroll&&a.mescroll.resetUpScroll();case 7:case"end":return e.stop()}}),e)})));function o(t){return e.apply(this,arguments)}return o}()});case 2:case"end":return s.stop()}}),s)})))()},search:function(){var e=this;return u(n.default.mark((function t(){var r,o;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={page:e.mescroll.num,limit:e.mescroll.size},e.searchForm.goodsOrderUuidNumber&&(r["goodsOrderUuidNumber"]=e.searchForm.goodsOrderUuidNumber),e.goodsOrderTypes&&(r["goodsOrderTypes"]=e.goodsOrderTypes),t.next=5,e.$api.page("goodsOrder",r);case 5:o=t.sent,1==e.mescroll.num&&(e.list=[]),e.list=e.list.concat(o.data.list),0==o.data.list.length&&(e.hasNext=!1),e.mescroll.endSuccess(e.mescroll.size,e.hasNext);case 10:case"end":return t.stop()}}),t)})))()}}};t.default=a}).call(this,r("543d")["default"])},c2e0:function(e,t,r){},c3d1:function(e,t,r){"use strict";r.r(t);var n=r("9688"),o=r.n(n);for(var s in n)"default"!==s&&function(e){r.d(t,e,(function(){return n[e]}))}(s);t["default"]=o.a},e289:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return n}));var n={mescrollUni:function(){return Promise.all([r.e("common/vendor"),r.e("components/mescroll-uni/mescroll-uni")]).then(r.bind(null,"53fb"))},uniPopup:function(){return r.e("components/uni-popup/uni-popup").then(r.bind(null,"62c8"))}},o=function(){var e=this,t=e.$createElement;e._self._c},s=[]},f818:function(e,t,r){"use strict";r.r(t);var n=r("e289"),o=r("c3d1");for(var s in o)"default"!==s&&function(e){r.d(t,e,(function(){return o[e]}))}(s);r("3d57");var u,a=r("f0c5"),i=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=i.exports}},[["5b2b","common/runtime","common/vendor"]]]);