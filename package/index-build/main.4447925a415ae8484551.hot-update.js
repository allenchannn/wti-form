"use strict";
self["webpackHotUpdatewti_form_source_code"]("main",{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue */ "./index.vue");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! element-ui/lib/theme-chalk/index.css */ "./node_modules/element-ui/lib/theme-chalk/index.css");
/* harmony import */ var element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(element_ui_lib_theme_chalk_index_css__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Created by 王冬 on 2021/9/1.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
// import WtiForm from './index.vue';
// export default {
//     install: (Vue, installOptions = {}) => {
//         // 数据字典的配置
//         Object.assign(WtiForm.props, {
//             dynamicSelectOption: {
//                 type: Object,
//                 default: () => ({
//                     // 这是字典接口的 url
//                     dictUrl: '/wkbbackend/queryByCategoryCodeList',
//                     // 异步请求时，请求内容是一个对象或一个数组。
//                     // 如果是对象，那么包含一个 key 和一个数组。
//                     // 如果是数组，那么只有这个数组。
//                     // 数组是所有字典 FormItem 的 parentKey 的集合
//                     queryKey: 'categoryCodeList', // 这是请求时那个 key。如果为空，则请求时是一个数组，而不是一个对象
//                     parentKey: 'categoryCode', // 这是返回结果的 parentKey。意思是，同一个 parentKey 归属于同一个下拉框选项
//                     value: 'bdictCode', // 这是下拉框选项的值
//                     label: 'bdictDesc' // 这是下拉框选项的 label
//                 })
//             }
//         }, installOptions);
//         Vue.component(WtiForm.name, WtiForm);
//     }
// };

console.log(vue__WEBPACK_IMPORTED_MODULE_0__["default"]);



vue__WEBPACK_IMPORTED_MODULE_0__["default"].use((element_ui__WEBPACK_IMPORTED_MODULE_2___default()));
var fields = [{
  label: '规则列举',
  children: [{
    key: 'key1',
    type: 'input',
    label: '示例 1',
    defaultValue: '123'
  }, {
    key: 'key2',
    type: 'input',
    label: '长度 2~4 个字，触发时机 change + blur',
    defaultValue: '234'
  }]
}];
new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: "#app",
  components: {
    WtiForm: _index_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      fields: fields,
      props: {
        fields: fields
      }
    };
  },
  method: {
    updateValue: function updateValue(event) {}
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0a7250d4bfdbc2c75a27")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40NDQ3OTI1YTQxNWFlODQ4NDU1MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRiwyQ0FBWjtBQUNBO0FBQ0E7QUFDQTtBQUNBQSwrQ0FBQSxDQUFRSSxtREFBUjtBQUVBLElBQU1FLE1BQU0sR0FBRyxDQUNYO0FBQ0lDLEVBQUFBLEtBQUssRUFBRSxNQURYO0FBRUlDLEVBQUFBLFFBQVEsRUFBRSxDQUNOO0FBQ0lDLElBQUFBLEdBQUcsRUFBRSxNQURUO0FBRUlDLElBQUFBLElBQUksRUFBRSxPQUZWO0FBR0lILElBQUFBLEtBQUssRUFBRSxNQUhYO0FBSUlJLElBQUFBLFlBQVksRUFBRTtBQUpsQixHQURNLEVBT047QUFDSUYsSUFBQUEsR0FBRyxFQUFFLE1BRFQ7QUFFSUMsSUFBQUEsSUFBSSxFQUFFLE9BRlY7QUFHSUgsSUFBQUEsS0FBSyxFQUFFLDhCQUhYO0FBSUlJLElBQUFBLFlBQVksRUFBRTtBQUpsQixHQVBNO0FBRmQsQ0FEVyxDQUFmO0FBb0JBLElBQUlYLDJDQUFKLENBQVE7QUFDSlksRUFBQUEsRUFBRSxFQUFFLE1BREE7QUFHSkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JWLElBQUFBLE9BQU8sRUFBUEEsa0RBQU9BO0FBREMsR0FIUjtBQU9KVyxFQUFBQSxJQVBJLGtCQU9HO0FBQ0gsV0FBTztBQUNIUixNQUFBQSxNQUFNLEVBQUVBLE1BREw7QUFHSFMsTUFBQUEsS0FBSyxFQUFFO0FBQ0hULFFBQUFBLE1BQU0sRUFBTkE7QUFERztBQUhKLEtBQVA7QUFPSCxHQWZHO0FBaUJKVSxFQUFBQSxNQUFNLEVBQUU7QUFDSkMsSUFBQUEsV0FESSx1QkFDUUMsS0FEUixFQUNlLENBRWxCO0FBSEc7QUFqQkosQ0FBUjs7Ozs7Ozs7VUM5REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93dGktZm9ybS1zb3VyY2UtY29kZS8uL2luZGV4LmpzIiwid2VicGFjazovL3d0aS1mb3JtLXNvdXJjZS1jb2RlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkg546L5YasIG9uIDIwMjEvOS8xLlxuICogUVE6IDIwMDA0NjA0XG4gKiB3ZUNoYXQ6IHFxMjAwMDQ2MDRcbiAqIOWKn+iDveivtOaYju+8mlxuICpcbiAqL1xuXG4vLyBpbXBvcnQgV3RpRm9ybSBmcm9tICcuL2luZGV4LnZ1ZSc7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IHtcbi8vICAgICBpbnN0YWxsOiAoVnVlLCBpbnN0YWxsT3B0aW9ucyA9IHt9KSA9PiB7XG4vLyAgICAgICAgIC8vIOaVsOaNruWtl+WFuOeahOmFjee9rlxuLy8gICAgICAgICBPYmplY3QuYXNzaWduKFd0aUZvcm0ucHJvcHMsIHtcbi8vICAgICAgICAgICAgIGR5bmFtaWNTZWxlY3RPcHRpb246IHtcbi8vICAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4vLyAgICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gKHtcbi8vICAgICAgICAgICAgICAgICAgICAgLy8g6L+Z5piv5a2X5YW45o6l5Y+j55qEIHVybFxuLy8gICAgICAgICAgICAgICAgICAgICBkaWN0VXJsOiAnL3drYmJhY2tlbmQvcXVlcnlCeUNhdGVnb3J5Q29kZUxpc3QnLFxuLy8gICAgICAgICAgICAgICAgICAgICAvLyDlvILmraXor7fmsYLml7bvvIzor7fmsYLlhoXlrrnmmK/kuIDkuKrlr7nosaHmiJbkuIDkuKrmlbDnu4TjgIJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv5a+56LGh77yM6YKj5LmI5YyF5ZCr5LiA5LiqIGtleSDlkozkuIDkuKrmlbDnu4TjgIJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv5pWw57uE77yM6YKj5LmI5Y+q5pyJ6L+Z5Liq5pWw57uE44CCXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIOaVsOe7hOaYr+aJgOacieWtl+WFuCBGb3JtSXRlbSDnmoQgcGFyZW50S2V5IOeahOmbhuWQiFxuLy8gICAgICAgICAgICAgICAgICAgICBxdWVyeUtleTogJ2NhdGVnb3J5Q29kZUxpc3QnLCAvLyDov5nmmK/or7fmsYLml7bpgqPkuKoga2V544CC5aaC5p6c5Li656m677yM5YiZ6K+35rGC5pe25piv5LiA5Liq5pWw57uE77yM6ICM5LiN5piv5LiA5Liq5a+56LGhXG4vLyAgICAgICAgICAgICAgICAgICAgIHBhcmVudEtleTogJ2NhdGVnb3J5Q29kZScsIC8vIOi/meaYr+i/lOWbnue7k+aenOeahCBwYXJlbnRLZXnjgILmhI/mgJ3mmK/vvIzlkIzkuIDkuKogcGFyZW50S2V5IOW9kuWxnuS6juWQjOS4gOS4quS4i+aLieahhumAiemhuVxuLy8gICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2JkaWN0Q29kZScsIC8vIOi/meaYr+S4i+aLieahhumAiemhueeahOWAvFxuLy8gICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ2JkaWN0RGVzYycgLy8g6L+Z5piv5LiL5ouJ5qGG6YCJ6aG555qEIGxhYmVsXG4vLyAgICAgICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSwgaW5zdGFsbE9wdGlvbnMpO1xuXG4vLyAgICAgICAgIFZ1ZS5jb21wb25lbnQoV3RpRm9ybS5uYW1lLCBXdGlGb3JtKTtcbi8vICAgICB9XG4vLyB9O1xuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5jb25zb2xlLmxvZyhWdWUpXG5pbXBvcnQgV3RpRm9ybSBmcm9tICcuL2luZGV4LnZ1ZSc7XG5pbXBvcnQgRWxlbWVudFVJIGZyb20gJ2VsZW1lbnQtdWknO1xuaW1wb3J0ICdlbGVtZW50LXVpL2xpYi90aGVtZS1jaGFsay9pbmRleC5jc3MnO1xuVnVlLnVzZShFbGVtZW50VUkpO1xuXG5jb25zdCBmaWVsZHMgPSBbXG4gICAge1xuICAgICAgICBsYWJlbDogJ+inhOWImeWIl+S4vicsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAna2V5MScsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ+ekuuS+iyAxJyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICcxMjMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdrZXkyJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAn6ZW/5bqmIDJ+NCDkuKrlrZfvvIzop6blj5Hml7bmnLogY2hhbmdlICsgYmx1cicsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnMjM0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICB9XG4gIF1cblxubmV3IFZ1ZSh7XG4gICAgZWw6IFwiI2FwcFwiLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBXdGlGb3JtXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWVsZHM6IGZpZWxkcyxcblxuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICBmaWVsZHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2Q6IHtcbiAgICAgICAgdXBkYXRlVmFsdWUoZXZlbnQpIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9IFxuICAgIH1cbn0pO1xuXG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGE3MjUwZDRiZmRiYzJjNzVhMjdcIikiXSwibmFtZXMiOlsiVnVlIiwiY29uc29sZSIsImxvZyIsIld0aUZvcm0iLCJFbGVtZW50VUkiLCJ1c2UiLCJmaWVsZHMiLCJsYWJlbCIsImNoaWxkcmVuIiwia2V5IiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsImVsIiwiY29tcG9uZW50cyIsImRhdGEiLCJwcm9wcyIsIm1ldGhvZCIsInVwZGF0ZVZhbHVlIiwiZXZlbnQiXSwic291cmNlUm9vdCI6IiJ9