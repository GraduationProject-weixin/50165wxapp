(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/add-or-update"],{"1ee1":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,n,t,r,u,o,a){try{var i=e[o](a),s=i.value}catch(c){return void t(c)}i.done?n(s):Promise.resolve(s).then(r,u)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var a=e.apply(n,t);function i(e){o(a,r,u,i,s,"next",e)}function s(e){o(a,r,u,i,s,"throw",e)}i(void 0)}))}}var i=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("e2cf"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{cross:"",ro:{username:!1,password:!1,yonghuName:!1,sexTypes:!1,yonghuIdNumber:!1,yonghuPhone:!1,newMoney:!1,yonghuPhoto:!1,createTime:!1},ruleForm:{username:"",password:"",yonghuName:"",sexTypes:"",sexValue:"",yonghuIdNumber:"",yonghuPhone:"",newMoney:"",yonghuPhoto:"",createTime:""},user:{},sexTypesOptions:[],sexTypesIndex:0}},components:{wPicker:i},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var n=this;return a(r.default.mark((function t(){var u,o,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return u={page:1,limit:100,dicCode:"sex_types"},t.next=3,n.$api.page("dictionary",u);case 3:if(o=t.sent,n.sexTypesOptions=o.data.list,!e.id){t.next=11;break}return n.ruleForm.id=e.id,t.next=9,n.$api.info("yonghu",n.ruleForm.id);case 9:a=t.sent,n.ruleForm=a.data;case 11:case"end":return t.stop()}}),t)})))()},methods:{sexTypesChange:function(e){this.sexTypesIndex=e.target.value,this.ruleForm.sexValue=this.sexTypesOptions[this.sexTypesIndex].indexName,this.ruleForm.sexTypes=this.sexTypesOptions[this.sexTypesIndex].codeIndex},yonghuPhotoTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.yonghuPhoto=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){}))}))},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return a(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.username){n.next=3;break}return e.$utils.msg("账户不能为空"),n.abrupt("return");case 3:if(e.ruleForm.yonghuName){n.next=6;break}return e.$utils.msg("用户姓名不能为空"),n.abrupt("return");case 6:if(e.ruleForm.sexTypes){n.next=9;break}return e.$utils.msg("性别不能为空"),n.abrupt("return");case 9:if(e.ruleForm.yonghuIdNumber||e.$validate.checkIdCard(e.ruleForm.yonghuIdNumber)){n.next=12;break}return e.$utils.msg("身份证号不能为空并且需要输入正确格式"),n.abrupt("return");case 12:if(e.ruleForm.yonghuPhone||e.$validate.isMobile(e.ruleForm.yonghuPhone)){n.next=15;break}return e.$utils.msg("手机号不能为空并且需要输入正确格式"),n.abrupt("return");case 15:if(e.ruleForm.yonghuPhoto){n.next=18;break}return e.$utils.msg("照片不能为空"),n.abrupt("return");case 18:if(!e.ruleForm.id){n.next=23;break}return n.next=21,e.$api.update("yonghu",e.ruleForm);case 21:n.next=25;break;case 23:return n.next=25,e.$api.save("yonghu",e.ruleForm);case 25:e.$utils.msgBack("提交成功");case 26:case"end":return n.stop()}}),n)})))()},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,u=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,u=u>9?u:"0"+u,"".concat(t,"-").concat(r,"-").concat(u)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s},"47ae":function(e,n,t){"use strict";t.r(n);var r=t("1ee1"),u=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=u.a},"6f24":function(e,n,t){"use strict";t.r(n);var r=t("c1f0"),u=t("47ae");for(var o in u)"default"!==o&&function(e){t.d(n,e,(function(){return u[e]}))}(o);t("c451");var a,i=t("f0c5"),s=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,"6723900d",null,!1,r["a"],a);n["default"]=s.exports},c188:function(e,n,t){},c1f0:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"e2cf"))}},u=function(){var e=this,n=e.$createElement;e._self._c},o=[]},c451:function(e,n,t){"use strict";var r=t("c188"),u=t.n(r);u.a},ff3b:function(e,n,t){"use strict";(function(e){t("b6f1");r(t("66fd"));var n=r(t("6f24"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])}},[["ff3b","common/runtime","common/vendor"]]]);