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
    updateValue: function updateValue(value) {
      console.log(value, "子组件内值变了");
    },
    setValue: function setValue(value) {
      this.$refs.form.updateFormData({
        key: 'key1',
        value: 111
      });
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4dca556bc52d2cf82cab")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ZjVhOGIwYThiMTg3YmI3YmM0NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRiwyQ0FBWjtBQUNBO0FBQ0E7QUFDQTtBQUNBQSwrQ0FBQSxDQUFRSSxtREFBUjtBQUVBLElBQU1FLE1BQU0sR0FBRyxDQUNYO0FBQ0lDLEVBQUFBLEtBQUssRUFBRSxNQURYO0FBRUlDLEVBQUFBLFFBQVEsRUFBRSxDQUNOO0FBQ0lDLElBQUFBLEdBQUcsRUFBRSxNQURUO0FBRUlDLElBQUFBLElBQUksRUFBRSxPQUZWO0FBR0lILElBQUFBLEtBQUssRUFBRSxNQUhYO0FBSUlJLElBQUFBLFlBQVksRUFBRTtBQUpsQixHQURNLEVBT047QUFDSUYsSUFBQUEsR0FBRyxFQUFFLE1BRFQ7QUFFSUMsSUFBQUEsSUFBSSxFQUFFLE9BRlY7QUFHSUgsSUFBQUEsS0FBSyxFQUFFLDhCQUhYO0FBSUlJLElBQUFBLFlBQVksRUFBRTtBQUpsQixHQVBNO0FBRmQsQ0FEVyxDQUFmO0FBb0JBLElBQUlYLDJDQUFKLENBQVE7QUFDSlksRUFBQUEsRUFBRSxFQUFFLE1BREE7QUFHSkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JWLElBQUFBLE9BQU8sRUFBUEEsa0RBQU9BO0FBREMsR0FIUjtBQU9KVyxFQUFBQSxJQVBJLGtCQU9HO0FBQ0gsV0FBTztBQUNIUixNQUFBQSxNQUFNLEVBQUVBLE1BREw7QUFHSFMsTUFBQUEsS0FBSyxFQUFFO0FBQ0hULFFBQUFBLE1BQU0sRUFBTkE7QUFERztBQUhKLEtBQVA7QUFPSCxHQWZHO0FBaUJKVSxFQUFBQSxNQUFNLEVBQUU7QUFDSkMsSUFBQUEsV0FESSx1QkFDUUMsS0FEUixFQUNlO0FBQ2ZqQixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWdCLEtBQVosRUFBbUIsU0FBbkI7QUFDSCxLQUhHO0FBS0pDLElBQUFBLFFBTEksb0JBS0tELEtBTEwsRUFLWTtBQUNaLFdBQUtFLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsY0FBaEIsQ0FBK0I7QUFDM0JiLFFBQUFBLEdBQUcsRUFBRSxNQURzQjtBQUUzQlMsUUFBQUEsS0FBSyxFQUFFO0FBRm9CLE9BQS9CO0FBSUg7QUFWRztBQWpCSixDQUFSOzs7Ozs7OztVQzlEQSIsInNvdXJjZXMiOlsid2VicGFjazovL3d0aS1mb3JtLXNvdXJjZS1jb2RlLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd3RpLWZvcm0tc291cmNlLWNvZGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSDnjovlhqwgb24gMjAyMS85LzEuXG4gKiBRUTogMjAwMDQ2MDRcbiAqIHdlQ2hhdDogcXEyMDAwNDYwNFxuICog5Yqf6IO96K+05piO77yaXG4gKlxuICovXG5cbi8vIGltcG9ydCBXdGlGb3JtIGZyb20gJy4vaW5kZXgudnVlJztcblxuLy8gZXhwb3J0IGRlZmF1bHQge1xuLy8gICAgIGluc3RhbGw6IChWdWUsIGluc3RhbGxPcHRpb25zID0ge30pID0+IHtcbi8vICAgICAgICAgLy8g5pWw5o2u5a2X5YW455qE6YWN572uXG4vLyAgICAgICAgIE9iamVjdC5hc3NpZ24oV3RpRm9ybS5wcm9wcywge1xuLy8gICAgICAgICAgICAgZHluYW1pY1NlbGVjdE9wdGlvbjoge1xuLy8gICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbi8vICAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiAoe1xuLy8gICAgICAgICAgICAgICAgICAgICAvLyDov5nmmK/lrZflhbjmjqXlj6PnmoQgdXJsXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpY3RVcmw6ICcvd2tiYmFja2VuZC9xdWVyeUJ5Q2F0ZWdvcnlDb2RlTGlzdCcsXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIOW8guatpeivt+axguaXtu+8jOivt+axguWGheWuueaYr+S4gOS4quWvueixoeaIluS4gOS4quaVsOe7hOOAglxuLy8gICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK/lr7nosaHvvIzpgqPkuYjljIXlkKvkuIDkuKoga2V5IOWSjOS4gOS4quaVsOe7hOOAglxuLy8gICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK/mlbDnu4TvvIzpgqPkuYjlj6rmnInov5nkuKrmlbDnu4TjgIJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8g5pWw57uE5piv5omA5pyJ5a2X5YW4IEZvcm1JdGVtIOeahCBwYXJlbnRLZXkg55qE6ZuG5ZCIXG4vLyAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5S2V5OiAnY2F0ZWdvcnlDb2RlTGlzdCcsIC8vIOi/meaYr+ivt+axguaXtumCo+S4qiBrZXnjgILlpoLmnpzkuLrnqbrvvIzliJnor7fmsYLml7bmmK/kuIDkuKrmlbDnu4TvvIzogIzkuI3mmK/kuIDkuKrlr7nosaFcbi8vICAgICAgICAgICAgICAgICAgICAgcGFyZW50S2V5OiAnY2F0ZWdvcnlDb2RlJywgLy8g6L+Z5piv6L+U5Zue57uT5p6c55qEIHBhcmVudEtleeOAguaEj+aAneaYr++8jOWQjOS4gOS4qiBwYXJlbnRLZXkg5b2S5bGe5LqO5ZCM5LiA5Liq5LiL5ouJ5qGG6YCJ6aG5XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnYmRpY3RDb2RlJywgLy8g6L+Z5piv5LiL5ouJ5qGG6YCJ6aG555qE5YC8XG4vLyAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnYmRpY3REZXNjJyAvLyDov5nmmK/kuIvmi4nmoYbpgInpobnnmoQgbGFiZWxcbi8vICAgICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9LCBpbnN0YWxsT3B0aW9ucyk7XG5cbi8vICAgICAgICAgVnVlLmNvbXBvbmVudChXdGlGb3JtLm5hbWUsIFd0aUZvcm0pO1xuLy8gICAgIH1cbi8vIH07XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJztcbmNvbnNvbGUubG9nKFZ1ZSlcbmltcG9ydCBXdGlGb3JtIGZyb20gJy4vaW5kZXgudnVlJztcbmltcG9ydCBFbGVtZW50VUkgZnJvbSAnZWxlbWVudC11aSc7XG5pbXBvcnQgJ2VsZW1lbnQtdWkvbGliL3RoZW1lLWNoYWxrL2luZGV4LmNzcyc7XG5WdWUudXNlKEVsZW1lbnRVSSk7XG5cbmNvbnN0IGZpZWxkcyA9IFtcbiAgICB7XG4gICAgICAgIGxhYmVsOiAn6KeE5YiZ5YiX5Li+JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdrZXkxJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAn56S65L6LIDEnLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogJzEyMycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ2tleTInLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICfplb/luqYgMn40IOS4quWtl++8jOinpuWPkeaXtuacuiBjaGFuZ2UgKyBibHVyJyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICcyMzQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIH1cbiAgXVxuXG5uZXcgVnVlKHtcbiAgICBlbDogXCIjYXBwXCIsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFd0aUZvcm1cbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpZWxkczogZmllbGRzLFxuXG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIGZpZWxkc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZDoge1xuICAgICAgICB1cGRhdGVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUsIFwi5a2Q57uE5Lu25YaF5YC85Y+Y5LqGXCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLmZvcm0udXBkYXRlRm9ybURhdGEoe1xuICAgICAgICAgICAgICAgIGtleTogJ2tleTEnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiAxMTFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRkY2E1NTZiYzUyZDJjZjgyY2FiXCIpIl0sIm5hbWVzIjpbIlZ1ZSIsImNvbnNvbGUiLCJsb2ciLCJXdGlGb3JtIiwiRWxlbWVudFVJIiwidXNlIiwiZmllbGRzIiwibGFiZWwiLCJjaGlsZHJlbiIsImtleSIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJlbCIsImNvbXBvbmVudHMiLCJkYXRhIiwicHJvcHMiLCJtZXRob2QiLCJ1cGRhdGVWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCIkcmVmcyIsImZvcm0iLCJ1cGRhdGVGb3JtRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=