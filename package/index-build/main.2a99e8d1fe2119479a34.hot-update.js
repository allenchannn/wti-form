"use strict";
self["webpackHotUpdatewti_form_source_code"]("main",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-3[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-3[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _form_item_form_input_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form_item/form_input.vue */ "./form_item/form_input.vue");
/* harmony import */ var _form_item_form_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form_item/form_textarea */ "./form_item/form_textarea.vue");
/* harmony import */ var _form_item_form_dict_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form_item/form_dict_select */ "./form_item/form_dict_select.vue");
/* harmony import */ var _form_item_form_normal_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form_item/form_normal_select */ "./form_item/form_normal_select.vue");
/* harmony import */ var _form_item_form_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form_item/form_date */ "./form_item/form_date.vue");
/* harmony import */ var _form_item_form_hour_minute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form_item/form_hour_minute */ "./form_item/form_hour_minute.vue");
/* harmony import */ var _form_item_form_date_range__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form_item/form_date_range */ "./form_item/form_date_range.vue");
/* harmony import */ var _form_item_form_auto_complete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form_item/form_auto_complete */ "./form_item/form_auto_complete.vue");
/* harmony import */ var _form_item_form_number_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form_item/form_number_input */ "./form_item/form_number_input.vue");
/* harmony import */ var _form_item_form_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form_item/form_radio */ "./form_item/form_radio.vue");
/* harmony import */ var _form_item_form_money_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form_item/form_money_input */ "./form_item/form_money_input.vue");
/* harmony import */ var _form_item_form_rate_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form_item/form_rate_input */ "./form_item/form_rate_input.vue");
/* harmony import */ var _form_item_form_area_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form_item/form_area_select */ "./form_item/form_area_select.vue");
/* harmony import */ var _form_item_form_mul_linkage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./form_item/form_mul_linkage */ "./form_item/form_mul_linkage.vue");
/* harmony import */ var _form_item_form_normal_number_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form_item/form_normal_number_input */ "./form_item/form_normal_number_input.vue");
/* harmony import */ var _form_item_table_readonly__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form_item/table_readonly */ "./form_item/table_readonly.vue");
/* harmony import */ var _child_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./child_form */ "./child_form.vue");
/* harmony import */ var _mixin_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixin.js */ "./mixin.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'WtiForm',
  mixins: [_mixin_js__WEBPACK_IMPORTED_MODULE_20__["default"]],
  props: {
    fields: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    data: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    // 是否显示收起、展开按钮
    showFoldBtn: {
      type: Boolean,
      "default": false
    },
    // 是否显示 全部收起、展开按钮
    showAllFoldBtn: {
      type: Boolean,
      "default": false
    },
    // 是否显示浏览模式切换按钮
    showScanTypeBtn: {
      type: Boolean,
      "default": false
    } // 数据字典的配置

  },
  data: function data() {
    return {
      formData: {},
      currentFileds: [],
      // 中间态数据，依赖于 fields。当 fields 改变时，这个会跟着一起变。
      // 动态下拉列表里，所有选项。本对象的属性 key 是字典的父 key，值是数组，数组元素是对应的父 key 下所有字典
      dynamicDict: {},
      changeData: {
        // 所有动态数据，更准确的说，是会重新赋值的，需要放到 data 里，才能实现响应式。这是因为 provide 本身的特性导致的
        // 被禁用的所有元素列表。这里的数组元素是该要素的 key。
        disableList: [],
        allDisabled: this.allDisabled,
        // 隐藏的要素列表。这里的数组元素是该要素的 key。
        // 隐藏的要素，不进行校验。提交的时候，也要过滤掉
        hiddenKeyList: [],
        textModel: this.textModel
      },
      foldBlockList: [],
      // 收起的区块（放在这个里面，该区块就只显示区块标题，不显示内容）
      scanType: 'normal',
      // normal 默认（大表单），single（表单只显示单个区块，上方显示所有区块的按钮组）
      singleScanBlock: '',
      // 单个模式时，显示哪个表单
      version: '1.0.0'
    };
  },
  created: function created() {
    var _this = this;

    this.currentFileds = this.fields;
    this.initFormData(); // 加载初始情况下，默认禁用的要素

    this.getDefaultDisableList(); // 默认隐藏

    this.getDefaultHiddenList(); // 动态加载需要数据字典的选项

    this.loadDynamicSelectOptions();
    this.initStatus(); // 理论上，不应该动态添加 fileds。尽量 fields 通过事件，内部控制自己是否显示

    this.$watch('fields', function (v) {
      _this.currentFileds = [];

      _this.$nextTick(function () {
        _this.currentFileds = v;

        _this.getDefaultDisableList();

        _this.getDefaultHiddenList();

        _this.loadDynamicSelectOptions();

        _this.initFormData();

        _this.initStatus();
      });
    });
    this.$watch('data', function () {
      _this.initFormData();

      _this.initStatus();
    });
  },
  provide: function provide() {
    return {
      dynamicSelectOption: this.dynamicSelectOption,
      dynamicDict: this.dynamicDict,
      // 状态切换函数
      statusChangeFn: {
        // 设置为禁用
        setElementDisable: this.setElementDisable,
        // 设置为隐藏
        setElementHidden: this.setElementHidden,
        // 设置为必填
        setElementRequired: this.setElementRequired,
        // 更新其他数据
        updateFormData: this.updateFormData,
        valueUpdateEvent: this.valueUpdateEvent
      },
      // 会动态变化的数据（注意，来自 props【更上级组件】的数据，不能放这个里面，只能显式的通过 props 往下面传）
      changeData: this.changeData,
      formItemType: '',
      childChangeData: {}
    };
  },
  watch: {
    textModel: function textModel(n) {
      this.$set(this.changeData, 'textModel', n);
    }
  },
  methods: {
    // 监听值更新
    valueUpdateEvent: function valueUpdateEvent(params) {
      this.$emit('updateValue', params);
    },
    // 初始化 formData 的值
    initFormData: function initFormData() {
      var _this2 = this;

      this.$set(this, 'formData', {}); // console.log('initFormData');
      // 用 fileds 初始化 formData 的 key

      this.fields.forEach(function (fields) {
        if (fields.children && fields.children instanceof Array) {
          fields.children.forEach(function (field) {
            // 处理初始值的问题
            // 1. 如果该值在 data 里，则直接取 data 里的值（面对场景：数值回显）
            if (field.key in _this2.data) {
              _this2.$set(_this2.formData, field.key, _this2.data[field.key]); // 赋值默认值的时候，触发事件通知上级


              _this2.valueUpdateEvent((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, field.key, _this2.data[field.key]));
            } else {
              // 2. 不需要回显的场景下
              // 2.1 如果该要素有默认值，则使用默认值
              if (field.defaultValue) {
                _this2.$set(_this2.formData, field.key, field.defaultValue); // 赋值默认值的时候，触发事件通知上级


                _this2.valueUpdateEvent((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, field.key, field.defaultValue));
              } else {
                // 2.2 该要素没有默认值，使用通用默认值
                if (field.type === 'child-form' || field.type === 'table-readonly') {
                  _this2.$set(_this2.formData, field.key, []);
                } else if (field.type === 'area-select') {
                  _this2.$set(_this2.formData, field.key, ['', '', '']);
                } else {
                  _this2.$set(_this2.formData, field.key, '');
                }
              }
            }
          });
        }
      });
    },
    // 获取初始情况下，所有默认禁用要素
    getDefaultDisableList: function getDefaultDisableList() {
      var disableList = []; // 遍历传入的数据

      this.fields.forEach(function (fields) {
        if (fields.children && fields.children instanceof Array) {
          fields.children.forEach(function (field) {
            // 如果是true，则添加到禁用列表里
            if (field.disableDefault) {
              disableList.push(field.key);
            }
          });
        }
      });
      this.changeData.disableList = disableList;
    },
    // 默认隐藏
    getDefaultHiddenList: function getDefaultHiddenList() {
      var hiddenList = []; // 遍历传入的数据

      this.fields.forEach(function (fields) {
        if (fields.children && fields.children instanceof Array) {
          fields.children.forEach(function (field) {
            // 如果是true，则添加到禁用列表里
            if (field.hiddenDefault) {
              hiddenList.push(field.key);
            }
          });
        }
      });
      this.changeData.hiddenKeyList = hiddenList;
    },
    // 对一个 block 下的要素，进行 el-row 的分行
    getFieldRow: function getFieldRow(children) {
      var _this3 = this;

      // 一个二维数组，每个数组要素是 el-row 的一行
      var list = [];

      if (!children) {
        return list;
      }

      children.forEach(function (item) {
        // 如果当前要素不显示，则直接跳过
        if (!_this3.isShow(item)) {
          return;
        }

        var currentSpan = _this3.getColSize(item); // 如果初始为空


        if (list.length === 0) {
          var obj = {
            // 获取到他有多少 span，满 24 为一行
            span: currentSpan,
            rowItem: item
          };
          list.push([obj]);
          return;
        } // 如果初始不为空，
        // 1、判断有没有打开 （当前这个的）【默认在新行第一列】开关
        // 又或者是当前是不是子表单（item.type === 'child-form'表示是子表单）


        if (item.nextRowFirst || item.type === 'child-form' || item.type === 'table-readonly') {
          // 如果是新行第一列，那么直接把这个添加到 list 里面
          var _obj = {
            // 获取到他有多少 span，满 24 为一行
            span: currentSpan,
            rowItem: item
          };
          list.push([_obj]);
          return;
        } // 2、判断（上一个）【默认是本行最后一列】开关是否打开
        // 先拿到最后一行


        var listLastItem = list[list.length - 1]; // 的最后一个是否打开了这个开关

        if (listLastItem[listLastItem.length - 1].rowItem.currentRowLast) {
          // 如果打开这个开关，那么当前这个直接放到下一行的第一个
          var _obj2 = {
            // 获取到他有多少 span，满 24 为一行
            span: currentSpan,
            rowItem: item
          };
          list.push([_obj2]);
          return;
        } // 下拉正常计算 span 来决定是否换行
        // 那么计算 list 最后一个数组里面所有加起来的 span 的值


        var lastTotalSpan = list[list.length - 1].map(function (item) {
          return item.span;
        }).reduce(function (lastTotal, currentItem) {
          return lastTotal + currentItem;
        }); // 如果已经大于等于 24 了，说明满了一行，那么直接创建新行
        // 或者是当前这个加之前的大于 24，那么说明这个放在之前那行超过 24，所以也要放到新行去

        if (lastTotalSpan >= 24 || lastTotalSpan + currentSpan > 24) {
          var _obj3 = {
            // 获取到他有多少 span，满 24 为一行
            span: currentSpan,
            rowItem: item
          };
          list.push([_obj3]);
          return;
        } else {
          // 此时说明当前这个可以放到之前哪一行
          var _obj4 = {
            // 获取到他有多少 span，满 24 为一行
            span: currentSpan,
            rowItem: item
          };
          list[list.length - 1].push(_obj4);
        }
      });
      return list;
    },
    // 设置某个要素禁用
    // key：操作的 key
    // beDisable：必填，默认是 true，表示禁用。而 false，表示取消禁用
    setElementDisable: function setElementDisable(key) {
      var beDisable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // 设置禁用
      if (beDisable) {
        // 已经禁用了，则跳过。否则则添加进去
        if (this.changeData.disableList.indexOf(key) === -1) {
          this.changeData.disableList.push(key);
        }
      } else {
        // 取消禁用
        // 未禁用则跳过。已经禁用，则继续
        var index = this.changeData.disableList.indexOf(key);

        if (index > -1) {
          //todo: 直接使用splice就可以了
          this.changeData.disableList = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.changeData.disableList.slice(0, index)), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.changeData.disableList.slice(index + 1)));
        }
      }
    },
    // 设置某个要素隐藏
    // key：操作的 key
    // beHidden：必填，默认是 true，表示隐藏。而 false，表示取消隐藏
    setElementHidden: function setElementHidden(key) {
      var beHidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // 设置隐藏
      if (beHidden) {
        // 已经禁用了，则跳过。否则则添加进去
        if (this.changeData.hiddenKeyList.indexOf(key) === -1) {
          this.changeData.hiddenKeyList.push(key);
        }
      } else {
        // 取消禁用
        // 未禁用则跳过。已经禁用，则继续
        var index = this.changeData.hiddenKeyList.indexOf(key);

        if (index > -1) {
          this.changeData.hiddenKeyList = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.changeData.hiddenKeyList.slice(0, index)), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.changeData.hiddenKeyList.slice(index + 1)));
        }
      }
    },
    // 设置某个要素必填
    // key：操作的 key
    // beHidden：必填，默认是 true，表示隐藏。而 false，表示取消隐藏
    setElementRequired: function setElementRequired(key) {
      var _this4 = this;

      var beRequired = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // 设置必填
      if (beRequired) {
        // 先找到这个要素，如果其本身必填，则跳过。
        // 遍历传入的数据
        this.fields.forEach(function (fields) {
          if (fields.children && fields.children instanceof Array) {
            fields.children.forEach(function (field) {
              // 如果 key 不匹配，则跳过
              if (field.key !== key) {
                return;
              } // 先判断有没有 rules 这个属性，没有则添加这个属性，并且添加必填项然后返回


              if (!field.rules) {
                _this4.$set(field, 'rules', [{
                  'required': true,
                  'message': '请输入',
                  'trigger': ['blur', 'change']
                }]);

                return;
              } // 遍历 其 rules，


              var rules = field.rules; // 是否有 required 这条规则

              var haveRequired = false; // 是否已修改

              var changed = false;
              rules.forEach(function (rule) {
                // 如果有 required 属性
                if ('required' in rule) {
                  haveRequired = true; // 如果值为 true，则跳过

                  if (rule.required) {
                    return;
                  } else {
                    // 否则修改其为 true
                    rule.required = true;
                    changed = true;
                  }
                }
              }); // 如果已修改，那么说明没必要继续操作了，跳过

              if (changed) {
                return;
              } // 如果没修改，并且没有必填规则
              // （注意，如果有规则，那么必然已修改。所以只存在有规则已修改、未修改有规则、未修改无规则三种情况）


              if (!haveRequired) {
                // 添加规则
                rules.push({
                  'required': true,
                  'message': '请输入',
                  'trigger': ['blur', 'change']
                });
              }
            });
          }
        });
      } else {
        // 取消必填
        // 不含必填规则的话，则跳过。如果含必填规则，则添加
        this.fields.forEach(function (fields) {
          if (fields.children && fields.children instanceof Array) {
            fields.children.forEach(function (field) {
              // 如果 key 不匹配，则跳过
              if (field.key !== key) {
                return;
              } // 先判断有没有 rules 这个属性，没有则添加这个属性，并且添加必填项然后返回


              if (!field.rules) {
                return;
              } // 如果有，则遍历并删除


              var i = -1;
              field.rules.forEach(function (rule, index) {
                if ('required' in rule) {
                  i = index;
                }
              });

              if (i !== -1) {
                field.rules.splice(i, 1);
              }
            });
          }
        });
      }
    },
    // 初始化要素的 隐藏/显示、禁用/非禁用 状态等
    // 在父组件 data 更新的时候，调用这个方法
    initStatus: function initStatus() {
      var _this5 = this;

      // 遍历传入的数据
      this.fields.forEach(function (fields) {
        if (fields.children && fields.children instanceof Array) {
          fields.children.forEach(function (field) {
            // 如果有联动项，那么则遍历每个联动项
            if (field.valueLink && field.valueLink.length && field.valueLink.length > 0) {
              var key = field.key;
              var v = _this5.data[key]; // 遍历

              field.valueLink.forEach(function (linkItem) {
                // 如果联动项的触发值不匹配，则跳过这一条
                if (v !== linkItem.value) {
                  return;
                } // 此时匹配，判断 linkList 有没有


                if (linkItem.linkList && linkItem.linkList.length && linkItem.linkList.length > 0) {
                  // 再遍历
                  linkItem.linkList.forEach(function (triggerItem) {
                    var linkKey = triggerItem.linkKey; // 如果没有联动 key，则跳过（正常来说，不会没有）

                    if (!linkKey) {
                      return;
                    } // 如果联动值，则更新值


                    if (triggerItem.enableLinkValue) {
                      _this5.updateFormData((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, linkKey, triggerItem.linkValue));
                    } // 如果联动禁用/取消禁用，则更新禁用


                    if (triggerItem.enableLinkDisable) {
                      _this5.setElementDisable(linkKey, triggerItem.linkDisable);
                    } // 如果联动隐藏/显示，则更新


                    if (triggerItem.enableLinkHidden) {
                      _this5.setElementHidden(linkKey, triggerItem.linkHidden);
                    } // 如果联动必填/非必填，则更新


                    if (triggerItem.enableLinkRequired) {
                      _this5.setElementRequired(linkKey, triggerItem.linkRequired);
                    }
                  });
                }
              });
            }
          });
        }
      });
    },
    // 找到 type="dynamic-select" 获取所有 parentCode，然后读取数据字典接口拉取对应的数据
    // todo 这里的数据字典请求接口，应该最后合并到一起，由一个专门的数据字典请求管理器去请求，减低接口重复请求的情况
    loadDynamicSelectOptions: function loadDynamicSelectOptions() {
      var _this6 = this;

      var parentCodeList = []; // 遍历传入的数据

      this.fields.forEach(function (fields) {
        if (fields.children && fields.children instanceof Array) {
          fields.children.forEach(function (field) {
            if (field.type === 'dynamic-select' && field.parentKey) {
              // 再做一次去重判断。如果该字典已经在里面了，再跳过这一个
              if (parentCodeList.indexOf(field.parentKey) === -1) {
                if (!(_this6.dynamicDict[field.parentKey] && _this6.dynamicDict[field.parentKey].length !== 0)) {
                  parentCodeList.push(field.parentKey); // 初始化一个数组

                  _this6.$set(_this6.dynamicDict, field.parentKey, []);
                }
              }
            } // 地区选择框，三级联动


            if (field.type === 'area-select') {
              var firstParentKey = field.firstParentKey || '10020';
              var secondParentKey = field.firstParentKey || '10021';
              var thirdParentKey = field.firstParentKey || '10022';

              if (parentCodeList.indexOf(firstParentKey) === -1) {
                if (!(_this6.dynamicDict[firstParentKey] && _this6.dynamicDict[firstParentKey].length !== 0)) {
                  parentCodeList.push(firstParentKey);

                  _this6.$set(_this6.dynamicDict, firstParentKey, []);
                }
              }

              if (parentCodeList.indexOf(secondParentKey) === -1) {
                if (!(_this6.dynamicDict[secondParentKey] && _this6.dynamicDict[secondParentKey].length !== 0)) {
                  parentCodeList.push(secondParentKey);

                  _this6.$set(_this6.dynamicDict, secondParentKey, []);
                }
              }

              if (parentCodeList.indexOf(thirdParentKey) === -1) {
                if (!(_this6.dynamicDict[thirdParentKey] && _this6.dynamicDict[thirdParentKey].length !== 0)) {
                  parentCodeList.push(thirdParentKey);

                  _this6.$set(_this6.dynamicDict, thirdParentKey, []);
                }
              }
            }
          });
        }
      });

      if (parentCodeList.length === 0) {
        return;
      } // 通过父 key 拿到所有元素


      var payload = null; // 这里判断是不是 axios 的默认返回数据（未经过请求拦截器处理的）

      if (this.dynamicSelectOption.queryKey) {
        payload = (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.dynamicSelectOption.queryKey, parentCodeList);
      } else {
        payload = parentCodeList;
      } // console.log('WtiForm 拉取动态字典');


      axios__WEBPACK_IMPORTED_MODULE_2___default().post(this.dynamicSelectOption.dictUrl, payload).then(function (res) {
        // 兼容性处理
        var data;

        if (res.request && res.headers) {
          data = res.data;
        } else {
          data = res;
        }

        if (data.code === 200) {
          if (data.data.length > 0) {
            // 因为可能多个地方同时调这个接口的原因，为了避免重复将内容添加到里面，所以，
            // 这里在赋值之前，需要先判断一下 parentCodeList 的每个值，其对应的 dynamicDict 里的哪一个数组，是否是空的
            // 如果不是空的，则将其置为空数组
            parentCodeList.forEach(function (pCode) {
              if (_this6.dynamicDict[pCode].length > 0) {
                _this6.$set(_this6.dynamicDict, pCode, []);
              }
            }); // 加载到结果

            data.data.forEach(function (item) {
              // 用每个返回值的 pCode 作为 key，将该项添加到数组里。
              // 注：之所以是数组，是因为之前已经初始化过了（parentKey 为 Code）
              var pCode = item[_this6.dynamicSelectOption.parentKey];

              _this6.dynamicDict[pCode].push(item);
            });
          }
        } else {
          _this6.$message.error(data.msg);
        }
      })["catch"](function () {
        _this6.$message.error('数据字典加载错误，请刷新页面重试');
      });
    },
    // 清空校验信息
    clearValidate: function clearValidate() {
      this.$refs.form.clearValidate();
    },
    // 获取过滤后的数据
    getData: function getData() {
      var _this7 = this;

      var d = {};
      Object.keys(this.formData).filter(function (key) {
        // 走正常逻辑
        if (_this7.changeData.hiddenKeyList.indexOf(key) > -1) {
          return false;
        } else {
          return true;
        }
      }).forEach(function (key) {
        // 这里分为两种情况：
        // 第一种是一级表单的元素，他在被隐藏时，key是可以直接从 hiddenKeyList 获取的
        // 第二种是子表单的元素。因为他的 key 是三段拼接起来的 key，所以要去子表单里拿到 randomId 再做一个映射
        // 某个属性是否是子表单的判断条件是：遍历 fields，判断他是否是 type === 'child-form'
        var childFormKeysList = [];

        _this7.fields.map(function (field) {
          var list = [];
          field.children.forEach(function (item) {
            if (item.type === 'child-form') {
              list.push(item.key);
            }
          });
          return list;
        }).filter(function (list) {
          return list.length > 0;
        }).forEach(function (list) {
          childFormKeysList = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(childFormKeysList), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(list));
        });

        if (childFormKeysList.indexOf(key) > -1) {
          // 说明是在子表单
          d[key] = _this7.$refs[key][0].childFormFileds.map(function (childField, index) {
            var childD = {};
            var randomId = childField.randomId;
            childField.forEach(function (childItem) {
              var childKey = childItem.key;
              var keyText = "".concat(key, "_").concat(randomId, "_").concat(childKey);

              if (_this7.changeData.hiddenKeyList.indexOf(keyText) > -1) {
                return;
              } else {
                childD[childKey] = _this7.formData[key][index][childKey];
              }
            });
            return childD;
          });
        } else {
          // 走正常逻辑
          d[key] = _this7.formData[key];
        }
      });
      return d;
    },
    // 校验，并获取校验后数据
    validate: function validate(fn) {
      var _this8 = this;

      // 先校验父级表单的值
      this.$refs.form.validate(function (valid) {
        // 对数据进行过滤
        var data = _this8.getData(); // 判断是否需要校验子表单


        var childFormKeyList = [];

        _this8.fields.forEach(function (filed) {
          if (filed.children && filed.children.length > 0) {
            filed.children.forEach(function (formItem) {
              // 如果某一项是
              if (formItem.type === 'child-form') {
                childFormKeyList.push(formItem.key);
              }
            });
          }
        });

        if (childFormKeyList.length === 0) {
          if (valid) {
            fn(true, data);
          } else {
            fn(false, data);
          }
        } else {
          var validateList = childFormKeyList.map(function (key) {
            return _this8.$refs[key][0].validateForm();
          });
          Promise.all(validateList).then(function () {
            // 父表单校验也通过了，才算都通过
            if (valid) {
              fn(true, data);
            } else {
              // 否则即使子表单校验通过，父表单校验没通过，也是算不通过的
              fn(false, data);
            }
          })["catch"](function () {
            fn(false, data);
          });
        }
      });
    },
    // 重置表单数据
    resetFields: function resetFields() {
      var _this9 = this;

      this.$refs.form.resetFields();
      this.fields.forEach(function (filed) {
        if (filed.children && filed.children.length > 0) {
          filed.children.forEach(function (formItem) {
            // 如果某一项是
            if (formItem.type === 'child-form') {
              var a = _this9.$refs[formItem.key];

              if (a instanceof Array) {
                a[0].resetFields();
              } else {
                a.resetFields();
              }
            }
          });
        }
      });
    },
    // 表单组件是否显示
    isShow: function isShow(item) {
      // 如果该要素在隐藏列表里，则不显示
      if (this.changeData.hiddenKeyList.indexOf(item.key) > -1) {
        return false;
      }

      return true;
    },
    // 更新数据
    updateFormData: function updateFormData(data) {
      var _this10 = this;

      Object.keys(data).forEach(function (key) {
        // 如果 key 在值里面
        if (key in _this10.formData) {
          // 则回填这个值
          _this10.$set(_this10.formData, key, data[key]);
        }
      });
    },
    // 收起/展开区块
    foldBlock: function foldBlock(block) {
      var label = block.label;
      var index = this.foldBlockList.indexOf(label);

      if (index === -1) {
        this.foldBlockList.push(block.label);
      } else {
        this.foldBlockList.splice(index, 1);
      }
    },
    // 收起展开所有区块
    foldAllBlock: function foldAllBlock() {
      var labelList = [];
      this.fields.forEach(function (block) {
        // 如果没有 label，则不支持收起
        if (block.label) {
          labelList.push(block.label);
        }
      }); // 如果长度相等，说明已经全部收起了，那么就是展开

      if (this.foldBlockList.length === labelList.length) {
        this.foldBlockList = [];
      } else {
        this.foldBlockList = labelList;
      }
    },
    // 浏览模式切换
    changeScanType: function changeScanType() {
      if (this.scanType === 'normal') {
        this.scanType = 'single'; // 如果切换为单体，那么将所有隐藏的显示出来

        this.foldBlockList = [];
        this.singleScanBlock = this.fields[0].label;
      } else {
        this.scanType = 'normal';
        this.singleScanBlock = '';
      }
    },
    getProps: function getProps(rowItem) {
      return {
        ref: rowItem.key,
        item: rowItem,
        allDisabled: this.allDisabled
      };
    }
  },
  components: {
    FormInput: _form_item_form_input_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    FormDictSelect: _form_item_form_dict_select__WEBPACK_IMPORTED_MODULE_5__["default"],
    FormDate: _form_item_form_date__WEBPACK_IMPORTED_MODULE_7__["default"],
    FormHourMinute: _form_item_form_hour_minute__WEBPACK_IMPORTED_MODULE_8__["default"],
    FormDateRange: _form_item_form_date_range__WEBPACK_IMPORTED_MODULE_9__["default"],
    FormNumberInput: _form_item_form_number_input__WEBPACK_IMPORTED_MODULE_11__["default"],
    FormAutoComplete: _form_item_form_auto_complete__WEBPACK_IMPORTED_MODULE_10__["default"],
    FormRadio: _form_item_form_radio__WEBPACK_IMPORTED_MODULE_12__["default"],
    FormTextarea: _form_item_form_textarea__WEBPACK_IMPORTED_MODULE_4__["default"],
    FormNormalSelect: _form_item_form_normal_select__WEBPACK_IMPORTED_MODULE_6__["default"],
    FormMoneyInput: _form_item_form_money_input__WEBPACK_IMPORTED_MODULE_13__["default"],
    FormRateInput: _form_item_form_rate_input__WEBPACK_IMPORTED_MODULE_14__["default"],
    FormAreaSelect: _form_item_form_area_select__WEBPACK_IMPORTED_MODULE_15__["default"],
    FormMulLinkage: _form_item_form_mul_linkage__WEBPACK_IMPORTED_MODULE_16__["default"],
    FormNormalNumberInput: _form_item_form_normal_number_input__WEBPACK_IMPORTED_MODULE_17__["default"],
    TableReadonly: _form_item_table_readonly__WEBPACK_IMPORTED_MODULE_18__["default"],
    ChildForm: _child_form__WEBPACK_IMPORTED_MODULE_19__["default"]
  },
  mounted: function mounted() {
    console.log(this.props);
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5d74edf7a1478a6b58b2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yYTk5ZThkMWZlMjExOTQ3OWEzNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSxpQkFEQTtBQUVBLDhEQUZBO0FBR0E7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFDQTtBQUNBO0FBSkEsS0FEQTtBQU9BO0FBQ0Esa0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQSxLQVBBO0FBYUE7QUFDQTtBQUNBLG1CQURBO0FBRUE7QUFGQSxLQWRBO0FBa0JBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBO0FBRkEsS0FuQkE7QUF1QkE7QUFDQTtBQUNBLG1CQURBO0FBRUE7QUFGQSxLQXhCQSxDQTRCQTs7QUE1QkEsR0FIQTtBQWlDQSxNQWpDQSxrQkFpQ0E7QUFDQTtBQUNBLGtCQURBO0FBR0EsdUJBSEE7QUFHQTtBQUVBO0FBQ0EscUJBTkE7QUFTQTtBQUFBO0FBQ0E7QUFDQSx1QkFGQTtBQUdBLHFDQUhBO0FBS0E7QUFDQTtBQUNBLHlCQVBBO0FBUUE7QUFSQSxPQVRBO0FBb0JBLHVCQXBCQTtBQW9CQTtBQUVBLHdCQXRCQTtBQXNCQTtBQUNBLHlCQXZCQTtBQXVCQTtBQUVBO0FBekJBO0FBMkJBLEdBN0RBO0FBOERBLFNBOURBLHFCQThEQTtBQUFBOztBQUNBO0FBRUEsd0JBSEEsQ0FJQTs7QUFDQSxpQ0FMQSxDQU1BOztBQUNB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O0FBQ0E7QUFDQTtBQTl4QkE7Ozs7Ozs7O1VDekxBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3RpLWZvcm0tc291cmNlLWNvZGUvLi9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vd3RpLWZvcm0tc291cmNlLWNvZGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwid3RpLWZvcm0gd3RpLWZvcm0tdjJcIiA6Y2xhc3M9XCJ7J2JvcmRlci1mb3JtJzogYm9yZGVyRm9ybX1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNjYW4tdHlwZVwiIHYtaWY9XCJzaG93QWxsRm9sZEJ0biB8fCBzaG93U2NhblR5cGVCdG5cIj5cbiAgICAgICAgICAgIDwhLS0g5YWo6YOo5pS26LW35bGV5byAICsg5rWP6KeI5qih5byP5YiH5o2iIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsbC1mb2xkLWJ0blwiIHYtaWY9XCJzaG93QWxsRm9sZEJ0biAmJiBzY2FuVHlwZT09PSdub3JtYWwnXCIgQGNsaWNrPVwiZm9sZEFsbEJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB2LWlmPVwiIXRleHRNb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICB0PVwiMTYyNjgzNTk4NzU4NVwiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFsbC1mb2xkLWljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCIyMjY0XCIgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjE0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI1MTRcIiBjeT1cIjUxNFwiIHI9XCI1MTJcIiBzdHJva2U9XCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCI1MFwiIGZpbGw9XCIjRUU0NzNBXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01NDEuMTg0IDczMS45NDA1NzFWMzczLjc2bDE2Ni4zMjY4NTcgMTY4LjM3NDg1N2EyOS4xNDc0MjkgMjkuMTQ3NDI5IDAgMSAwIDQxLjE3OTQyOS00MS4yODkxNDNsLTIzNy4xMjkxNDMtMjM3Ljc1MDg1Ny0yMzYuMDY4NTcyIDIzNi44MzY1NzJhMjguODE4Mjg2IDI4LjgxODI4NiAwIDEgMCAzOS42MDY4NTggNDEuODM3NzE0bDE2OC43NDA1NzEtMTY3Ljg5OTQyOXYzNTguMTA3NDI5YTI4LjcwODU3MSAyOC43MDg1NzEgMCAwIDAgNTcuMzQ0IDB6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIOWFqOmDqOaUtui1ty/lsZXlvIBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2stYnRuLWxpc3RcIiB2LWlmPVwic2hvd1NjYW5UeXBlQnRuICYmIHNjYW5UeXBlID09PSAnc2luZ2xlJ1wiPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImJsb2NrIGluIGZpZWxkc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2stYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2ZvY3VzJzpzaW5nbGVTY2FuQmxvY2sgPT09IGJsb2NrLmxhYmVsfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImJsb2NrLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIoKSA9PiBzaW5nbGVTY2FuQmxvY2sgPSBibG9jay5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImJsb2NrLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBibG9jay5sYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY2FuLXR5cGUtYnRuXCIgdi1pZj1cInNob3dTY2FuVHlwZUJ0blwiIEBjbGljaz1cImNoYW5nZVNjYW5UeXBlXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB0PVwiMTYyNjgzNTk4NzU4NVwiIGNsYXNzPVwic2Nhbi10eXBlLWljb25cIiB2aWV3Qm94PVwiMCAwIDI4IDI4XCIgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcC1pZD1cIjIyNjRcIiB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMiA2IEw5IDIgTDkgMTAgWiBMMjUgNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjMTIxODJBXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMTIxODJBXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yNiAyMiBMMTkgMTggTDE5IDI2IFogTDIgMjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzEyMTgyQVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzEyMTgyQVwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICDmtY/op4jmqKHlvI/liIfmjaJcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZWwtZm9ybSByZWY9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgOm1vZGVsPVwiZm9ybURhdGFcIlxuICAgICAgICAgICAgICAgICA6aGlkZS1yZXF1aXJlZC1hc3Rlcmlzaz1cInRleHRNb2RlbFwiXG4gICAgICAgICAgICAgICAgIDpsYWJlbC13aWR0aD1cImxhYmVsV2lkdGggfHwgJzE1MHB4J1wiXG4gICAgICAgICAgICAgICAgIDpsYWJlbC1wb3NpdGlvbj1cImxhYmVsUG9zaXRpb24gPyBsYWJlbFBvc2l0aW9uIDogJ3RvcCdcIj5cbiAgICAgICAgICAgIDwhLS0g5Yy65Z2X57qn77yM5q+P5LiqIGZpbGVkIOaYr+S4gOS4quWMuuWdlyAtLT5cbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJmaWVsZCBpbiBjdXJyZW50RmlsZWRzXCJcbiAgICAgICAgICAgICAgICAgOmtleT1cImZpZWxkLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwic2NhblR5cGUgPT09ICdub3JtYWwnIHx8IChzY2FuVHlwZSA9PT0gJ3NpbmdsZScgJiYgc2luZ2xlU2NhbkJsb2NrID09PSBmaWVsZC5sYWJlbClcIlxuICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiZ2V0QmxvY2tDbGFzcyhmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiZmllbGQuc3R5bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSDljLrlnZflkI0gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2stbGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jay10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppZD1cImZpZWxkLmlkIHx8IFN0cmluZyhNYXRoLnJhbmRvbSgpKjEwMDAwKVwiPnt7IGZpZWxkLmxhYmVsIH19PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrLWZvbGQtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJmb2xkQmxvY2tMaXN0LmluZGV4T2YoZmllbGQubGFiZWwpPT09LTEgJiYgc2hvd0ZvbGRCdG4gJiYgIXRleHRNb2RlbCAmJiBzY2FuVHlwZSA9PT0gJ25vcm1hbCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZm9sZEJsb2NrKGZpZWxkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5pS26LW3IDxpIGNsYXNzPVwiZWwtaWNvbi1hcnJvdy11cFwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrLWZvbGQtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJmb2xkQmxvY2tMaXN0LmluZGV4T2YoZmllbGQubGFiZWwpPi0xICYmIHNob3dGb2xkQnRuICYmICF0ZXh0TW9kZWwgJiYgc2NhblR5cGUgPT09ICdub3JtYWwnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImZvbGRCbG9jayhmaWVsZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOWxleW8gCA8aSBjbGFzcz1cImVsLWljb24tYXJyb3ctZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIocm93LCByb3dJbmRleCkgaW4gZ2V0RmllbGRSb3coZmllbGQuY2hpbGRyZW4pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZWwtcm93IDpndXR0ZXI9XCIyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJyb3dJbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2stY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnYmxvY2staGlkZGVuJzpmb2xkQmxvY2tMaXN0LmluZGV4T2YoZmllbGQubGFiZWwpPi0xfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIntyb3dJdGVtfSBpbiByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA6a2V5PVwicm93SXRlbS5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbC1jb2wgOnNwYW49XCJnZXRDb2xTaXplKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cInJvd0l0ZW0ua2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwicm93SXRlbS5zdHlsZSB8fCB7fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbC1mb3JtLWl0ZW0gdi1pZj1cInJvd0l0ZW0udHlwZSE9PSdjaGlsZC1mb3JtJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJyb3dJdGVtLnN0eWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInJvd0l0ZW0uY2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJ1bGVzPVwicm93SXRlbS5ydWxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJnZXRGb3JtSXRlbUxhYmVsKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwcm9wPVwicm93SXRlbS5rZXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dCB2LWlmPVwicm93SXRlbS50eXBlPT09J2lucHV0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiZ2V0UHJvcHMocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1EYXRlIHYtaWY9XCJyb3dJdGVtLnR5cGU9PT0nZGF0ZS1pbnB1dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiZ2V0UHJvcHMocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUhvdXJNaW51dGUgdi1pZj1cInJvd0l0ZW0udHlwZT09PSdob3VyLW1pbnV0ZS1pbnB1dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiZ2V0UHJvcHMocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybURhdGVSYW5nZSB2LWlmPVwicm93SXRlbS50eXBlPT09J2RhdGUtcmFuZ2UtaW5wdXQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiZ2V0UHJvcHMocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRGljdFNlbGVjdCB2LWlmPVwicm93SXRlbS50eXBlID09PSAnZHluYW1pYy1zZWxlY3QnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImdldFByb3BzKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Ob3JtYWxTZWxlY3Qgdi1pZj1cInJvd0l0ZW0udHlwZSA9PT0gJ25vcm1hbC1zZWxlY3QnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiZ2V0UHJvcHMocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTnVtYmVySW5wdXQgdi1pZj1cInJvd0l0ZW0udHlwZSA9PT0gJ251bWJlci1pbnB1dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImdldFByb3BzKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0g5Yqo5oCB5LiL5ouJ5qGG77yM5YWl5Y+C5piv54i2IGtlee+8jOagueaNrueItiBrZXkg6Ieq5Yqo5Yqg6L295YiX6KGo5YaF5a65IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUF1dG9Db21wbGV0ZSB2LWlmPVwicm93SXRlbS50eXBlID09PSAnYXV0by1jb21wbGV0ZS1pbnB1dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJnZXRQcm9wcyhyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1SYWRpbyB2LWlmPVwicm93SXRlbS50eXBlID09PSAncmFkaW8nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJnZXRQcm9wcyhyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVRleHRhcmVhIHYtaWY9XCJyb3dJdGVtLnR5cGU9PT0ndGV4dGFyZWEnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJnZXRQcm9wcyhyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Nb25leUlucHV0IHYtaWY9XCJyb3dJdGVtLnR5cGU9PT0nbW9uZXktaW5wdXQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImdldFByb3BzKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1SYXRlSW5wdXQgdi1pZj1cInJvd0l0ZW0udHlwZT09PSdyYXRlLWlucHV0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImdldFByb3BzKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUFyZWFTZWxlY3Qgdi1pZj1cInJvd0l0ZW0udHlwZT09PSdhcmVhLXNlbGVjdCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiZ2V0UHJvcHMocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybU11bExpbmthZ2Ugdi1pZj1cInJvd0l0ZW0udHlwZT09PSdtdWwtbGlua2FnZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiZ2V0UHJvcHMocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybU5vcm1hbE51bWJlcklucHV0IHYtaWY9XCJyb3dJdGVtLnR5cGU9PT0nbm9ybWFsLW51bWJlcidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImdldFByb3BzKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9lbC1mb3JtLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hpbGRGb3JtIHYtaWY9XCJyb3dJdGVtLnR5cGUgPT09ICdjaGlsZC1mb3JtJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGV4dC1tb2RlbD1cInRleHRNb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmVmPVwicm93SXRlbS5rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFsbC1kaXNhYmxlZD1cImFsbERpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtPVwicm93SXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSZWFkb25seSB2LWlmPVwicm93SXRlbS50eXBlID09PSAndGFibGUtcmVhZG9ubHknXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmVmPVwicm93SXRlbS5rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtPVwicm93SXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZWwtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9lbC1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxlbC1kaXZpZGVyIHYtaWY9XCJmaWVsZC5kaXZpZGVyXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tIOihqOWktOWKoOeyl+aWh+Wtl+W8gOWniyAtLT5cbiAgICAgICAgPC9lbC1mb3JtPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuICAgIGltcG9ydCBGb3JtSW5wdXQgZnJvbSAnLi9mb3JtX2l0ZW0vZm9ybV9pbnB1dC52dWUnO1xuICAgIGltcG9ydCBGb3JtVGV4dGFyZWEgZnJvbSAnLi9mb3JtX2l0ZW0vZm9ybV90ZXh0YXJlYSc7XG4gICAgaW1wb3J0IEZvcm1EaWN0U2VsZWN0IGZyb20gJy4vZm9ybV9pdGVtL2Zvcm1fZGljdF9zZWxlY3QnO1xuICAgIGltcG9ydCBGb3JtTm9ybWFsU2VsZWN0IGZyb20gJy4vZm9ybV9pdGVtL2Zvcm1fbm9ybWFsX3NlbGVjdCc7XG4gICAgaW1wb3J0IEZvcm1EYXRlIGZyb20gJy4vZm9ybV9pdGVtL2Zvcm1fZGF0ZSc7XG4gICAgaW1wb3J0IEZvcm1Ib3VyTWludXRlIGZyb20gJy4vZm9ybV9pdGVtL2Zvcm1faG91cl9taW51dGUnO1xuICAgIGltcG9ydCBGb3JtRGF0ZVJhbmdlIGZyb20gJy4vZm9ybV9pdGVtL2Zvcm1fZGF0ZV9yYW5nZSc7XG4gICAgaW1wb3J0IEZvcm1BdXRvQ29tcGxldGUgZnJvbSAnLi9mb3JtX2l0ZW0vZm9ybV9hdXRvX2NvbXBsZXRlJztcbiAgICBpbXBvcnQgRm9ybU51bWJlcklucHV0IGZyb20gJy4vZm9ybV9pdGVtL2Zvcm1fbnVtYmVyX2lucHV0JztcbiAgICBpbXBvcnQgRm9ybVJhZGlvIGZyb20gJy4vZm9ybV9pdGVtL2Zvcm1fcmFkaW8nO1xuICAgIGltcG9ydCBGb3JtTW9uZXlJbnB1dCBmcm9tICcuL2Zvcm1faXRlbS9mb3JtX21vbmV5X2lucHV0JztcbiAgICBpbXBvcnQgRm9ybVJhdGVJbnB1dCBmcm9tICcuL2Zvcm1faXRlbS9mb3JtX3JhdGVfaW5wdXQnO1xuICAgIGltcG9ydCBGb3JtQXJlYVNlbGVjdCBmcm9tICcuL2Zvcm1faXRlbS9mb3JtX2FyZWFfc2VsZWN0JztcbiAgICBpbXBvcnQgRm9ybU11bExpbmthZ2UgZnJvbSAnLi9mb3JtX2l0ZW0vZm9ybV9tdWxfbGlua2FnZSc7XG4gICAgaW1wb3J0IEZvcm1Ob3JtYWxOdW1iZXJJbnB1dCBmcm9tICcuL2Zvcm1faXRlbS9mb3JtX25vcm1hbF9udW1iZXJfaW5wdXQnO1xuICAgIGltcG9ydCBUYWJsZVJlYWRvbmx5IGZyb20gJy4vZm9ybV9pdGVtL3RhYmxlX3JlYWRvbmx5JztcblxuICAgIGltcG9ydCBDaGlsZEZvcm0gZnJvbSAnLi9jaGlsZF9mb3JtJztcbiAgICBpbXBvcnQgRm9ybU1peGluIGZyb20gJy4vbWl4aW4uanMnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnV3RpRm9ybScsXG4gICAgICAgIG1peGluczogWyBGb3JtTWl4aW4gXSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDmmK/lkKbmmL7npLrmlLbotbfjgIHlsZXlvIDmjInpkq5cbiAgICAgICAgICAgIHNob3dGb2xkQnRuOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDmmK/lkKbmmL7npLog5YWo6YOo5pS26LW344CB5bGV5byA5oyJ6ZKuXG4gICAgICAgICAgICBzaG93QWxsRm9sZEJ0bjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5piv5ZCm5pi+56S65rWP6KeI5qih5byP5YiH5o2i5oyJ6ZKuXG4gICAgICAgICAgICBzaG93U2NhblR5cGVCdG46IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOaVsOaNruWtl+WFuOeahOmFjee9rlxuICAgICAgICB9LFxuICAgICAgICBkYXRhICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGE6IHt9LFxuXG4gICAgICAgICAgICAgICAgY3VycmVudEZpbGVkczogW10sIC8vIOS4remXtOaAgeaVsOaNru+8jOS+nei1luS6jiBmaWVsZHPjgILlvZMgZmllbGRzIOaUueWPmOaXtu+8jOi/meS4quS8mui3n+edgOS4gOi1t+WPmOOAglxuXG4gICAgICAgICAgICAgICAgLy8g5Yqo5oCB5LiL5ouJ5YiX6KGo6YeM77yM5omA5pyJ6YCJ6aG544CC5pys5a+56LGh55qE5bGe5oCnIGtleSDmmK/lrZflhbjnmoTniLYga2V577yM5YC85piv5pWw57uE77yM5pWw57uE5YWD57Sg5piv5a+55bqU55qE54i2IGtleSDkuIvmiYDmnInlrZflhbhcbiAgICAgICAgICAgICAgICBkeW5hbWljRGljdDoge30sXG5cblxuICAgICAgICAgICAgICAgIGNoYW5nZURhdGE6IHsgLy8g5omA5pyJ5Yqo5oCB5pWw5o2u77yM5pu05YeG56Gu55qE6K+077yM5piv5Lya6YeN5paw6LWL5YC855qE77yM6ZyA6KaB5pS+5YiwIGRhdGEg6YeM77yM5omN6IO95a6e546w5ZON5bqU5byP44CC6L+Z5piv5Zug5Li6IHByb3ZpZGUg5pys6Lqr55qE54m55oCn5a+86Ie055qEXG4gICAgICAgICAgICAgICAgICAgIC8vIOiiq+emgeeUqOeahOaJgOacieWFg+e0oOWIl+ihqOOAgui/memHjOeahOaVsOe7hOWFg+e0oOaYr+ivpeimgee0oOeahCBrZXnjgIJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUxpc3Q6IFtdLFxuICAgICAgICAgICAgICAgICAgICBhbGxEaXNhYmxlZDogdGhpcy5hbGxEaXNhYmxlZCxcblxuICAgICAgICAgICAgICAgICAgICAvLyDpmpDol4/nmoTopoHntKDliJfooajjgILov5nph4znmoTmlbDnu4TlhYPntKDmmK/or6XopoHntKDnmoQga2V544CCXG4gICAgICAgICAgICAgICAgICAgIC8vIOmakOiXj+eahOimgee0oO+8jOS4jei/m+ihjOagoemqjOOAguaPkOS6pOeahOaXtuWAme+8jOS5n+imgei/h+a7pOaOiVxuICAgICAgICAgICAgICAgICAgICBoaWRkZW5LZXlMaXN0OiBbXSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dE1vZGVsOiB0aGlzLnRleHRNb2RlbFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBmb2xkQmxvY2tMaXN0OiBbXSwgLy8g5pS26LW355qE5Yy65Z2X77yI5pS+5Zyo6L+Z5Liq6YeM6Z2i77yM6K+l5Yy65Z2X5bCx5Y+q5pi+56S65Yy65Z2X5qCH6aKY77yM5LiN5pi+56S65YaF5a6577yJXG5cbiAgICAgICAgICAgICAgICBzY2FuVHlwZTogJ25vcm1hbCcsIC8vIG5vcm1hbCDpu5jorqTvvIjlpKfooajljZXvvInvvIxzaW5nbGXvvIjooajljZXlj6rmmL7npLrljZXkuKrljLrlnZfvvIzkuIrmlrnmmL7npLrmiYDmnInljLrlnZfnmoTmjInpkq7nu4TvvIlcbiAgICAgICAgICAgICAgICBzaW5nbGVTY2FuQmxvY2s6ICcnLCAvLyDljZXkuKrmqKHlvI/ml7bvvIzmmL7npLrlk6rkuKrooajljZVcblxuICAgICAgICAgICAgICAgIHZlcnNpb246ICcxLjAuMCdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQgKCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RmlsZWRzID0gdGhpcy5maWVsZHM7XG5cbiAgICAgICAgICAgIHRoaXMuaW5pdEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAvLyDliqDovb3liJ3lp4vmg4XlhrXkuIvvvIzpu5jorqTnpoHnlKjnmoTopoHntKBcbiAgICAgICAgICAgIHRoaXMuZ2V0RGVmYXVsdERpc2FibGVMaXN0KCk7XG4gICAgICAgICAgICAvLyDpu5jorqTpmpDol49cbiAgICAgICAgICAgIHRoaXMuZ2V0RGVmYXVsdEhpZGRlbkxpc3QoKTtcbiAgICAgICAgICAgIC8vIOWKqOaAgeWKoOi9vemcgOimgeaVsOaNruWtl+WFuOeahOmAiemhuVxuICAgICAgICAgICAgdGhpcy5sb2FkRHluYW1pY1NlbGVjdE9wdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFN0YXR1cygpO1xuXG4gICAgICAgICAgICAvLyDnkIborrrkuIrvvIzkuI3lupTor6XliqjmgIHmt7vliqAgZmlsZWRz44CC5bC96YePIGZpZWxkcyDpgJrov4fkuovku7bvvIzlhoXpg6jmjqfliLboh6rlt7HmmK/lkKbmmL7npLpcbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdmaWVsZHMnLCAodikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEZpbGVkcyA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RmlsZWRzID0gdjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXREZWZhdWx0RGlzYWJsZUxpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXREZWZhdWx0SGlkZGVuTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWREeW5hbWljU2VsZWN0T3B0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgnZGF0YScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFN0YXR1cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByb3ZpZGUgKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkeW5hbWljU2VsZWN0T3B0aW9uOiB0aGlzLmR5bmFtaWNTZWxlY3RPcHRpb24sXG4gICAgICAgICAgICAgICAgZHluYW1pY0RpY3Q6IHRoaXMuZHluYW1pY0RpY3QsXG4gICAgICAgICAgICAgICAgLy8g54q25oCB5YiH5o2i5Ye95pWwXG4gICAgICAgICAgICAgICAgc3RhdHVzQ2hhbmdlRm46IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6K6+572u5Li656aB55SoXG4gICAgICAgICAgICAgICAgICAgIHNldEVsZW1lbnREaXNhYmxlOiB0aGlzLnNldEVsZW1lbnREaXNhYmxlLFxuICAgICAgICAgICAgICAgICAgICAvLyDorr7nva7kuLrpmpDol49cbiAgICAgICAgICAgICAgICAgICAgc2V0RWxlbWVudEhpZGRlbjogdGhpcy5zZXRFbGVtZW50SGlkZGVuLFxuICAgICAgICAgICAgICAgICAgICAvLyDorr7nva7kuLrlv4XloatcbiAgICAgICAgICAgICAgICAgICAgc2V0RWxlbWVudFJlcXVpcmVkOiB0aGlzLnNldEVsZW1lbnRSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgLy8g5pu05paw5YW25LuW5pWw5o2uXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1EYXRhOiB0aGlzLnVwZGF0ZUZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVVwZGF0ZUV2ZW50OiB0aGlzLnZhbHVlVXBkYXRlRXZlbnQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyDkvJrliqjmgIHlj5jljJbnmoTmlbDmja7vvIjms6jmhI/vvIzmnaXoh6ogcHJvcHPjgJDmm7TkuIrnuqfnu4Tku7bjgJHnmoTmlbDmja7vvIzkuI3og73mlL7ov5nkuKrph4zpnaLvvIzlj6rog73mmL7lvI/nmoTpgJrov4cgcHJvcHMg5b6A5LiL6Z2i5Lyg77yJXG4gICAgICAgICAgICAgICAgY2hhbmdlRGF0YTogdGhpcy5jaGFuZ2VEYXRhLFxuICAgICAgICAgICAgICAgIGZvcm1JdGVtVHlwZTogJycsXG4gICAgICAgICAgICAgICAgY2hpbGRDaGFuZ2VEYXRhOiB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHRleHRNb2RlbCAobikge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmNoYW5nZURhdGEsICd0ZXh0TW9kZWwnLCBuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgLy8g55uR5ZCs5YC85pu05pawXG4gICAgICAgICAgICB2YWx1ZVVwZGF0ZUV2ZW50IChwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGVWYWx1ZScsIHBhcmFtcyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDliJ3lp4vljJYgZm9ybURhdGEg55qE5YC8XG4gICAgICAgICAgICBpbml0Rm9ybURhdGEgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAnZm9ybURhdGEnLCB7fSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2luaXRGb3JtRGF0YScpO1xuICAgICAgICAgICAgICAgIC8vIOeUqCBmaWxlZHMg5Yid5aeL5YyWIGZvcm1EYXRhIOeahCBrZXlcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZpZWxkcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZHMuY2hpbGRyZW4gJiYgZmllbGRzLmNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5jaGlsZHJlbi5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpITnkIbliJ3lp4vlgLznmoTpl67pophcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxLiDlpoLmnpzor6XlgLzlnKggZGF0YSDph4zvvIzliJnnm7TmjqXlj5YgZGF0YSDph4znmoTlgLzvvIjpnaLlr7nlnLrmma/vvJrmlbDlgLzlm57mmL7vvIlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQua2V5IGluIHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5mb3JtRGF0YSwgZmllbGQua2V5LCB0aGlzLmRhdGFbZmllbGQua2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi1i+WAvOm7mOiupOWAvOeahOaXtuWAme+8jOinpuWPkeS6i+S7tumAmuefpeS4iue6p1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlVXBkYXRlRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkLmtleV06IHRoaXMuZGF0YVtmaWVsZC5rZXldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAyLiDkuI3pnIDopoHlm57mmL7nmoTlnLrmma/kuItcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMi4xIOWmguaenOivpeimgee0oOaciem7mOiupOWAvO+8jOWImeS9v+eUqOm7mOiupOWAvFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5mb3JtRGF0YSwgZmllbGQua2V5LCBmaWVsZC5kZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6LWL5YC86buY6K6k5YC855qE5pe25YCZ77yM6Kem5Y+R5LqL5Lu26YCa55+l5LiK57qnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlVXBkYXRlRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZC5rZXldOiBmaWVsZC5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIuMiDor6XopoHntKDmsqHmnInpu5jorqTlgLzvvIzkvb/nlKjpgJrnlKjpu5jorqTlgLxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hpbGQtZm9ybScgfHwgZmllbGQudHlwZSA9PT0gJ3RhYmxlLXJlYWRvbmx5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmZvcm1EYXRhLCBmaWVsZC5rZXksIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ2FyZWEtc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmZvcm1EYXRhLCBmaWVsZC5rZXksIFsgJycsICcnLCAnJyBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuZm9ybURhdGEsIGZpZWxkLmtleSwgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIOiOt+WPluWIneWni+aDheWGteS4i++8jOaJgOaciem7mOiupOemgeeUqOimgee0oFxuICAgICAgICAgICAgZ2V0RGVmYXVsdERpc2FibGVMaXN0ICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNhYmxlTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIOmBjeWOhuS8oOWFpeeahOaVsOaNrlxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmllbGRzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkcy5jaGlsZHJlbiAmJiBmaWVsZHMuY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLmNoaWxkcmVuLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr3RydWXvvIzliJnmt7vliqDliLDnpoHnlKjliJfooajph4xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuZGlzYWJsZURlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUxpc3QucHVzaChmaWVsZC5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURhdGEuZGlzYWJsZUxpc3QgPSBkaXNhYmxlTGlzdDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIOm7mOiupOmakOiXj1xuICAgICAgICAgICAgZ2V0RGVmYXVsdEhpZGRlbkxpc3QgKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhpZGRlbkxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyDpgY3ljobkvKDlhaXnmoTmlbDmja5cbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZpZWxkcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZHMuY2hpbGRyZW4gJiYgZmllbGRzLmNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5jaGlsZHJlbi5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK90cnVl77yM5YiZ5re75Yqg5Yiw56aB55So5YiX6KGo6YeMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmhpZGRlbkRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuTGlzdC5wdXNoKGZpZWxkLmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGF0YS5oaWRkZW5LZXlMaXN0ID0gaGlkZGVuTGlzdDtcbiAgICAgICAgICAgIH0sXG5cblxuICAgICAgICAgICAgLy8g5a+55LiA5LiqIGJsb2NrIOS4i+eahOimgee0oO+8jOi/m+ihjCBlbC1yb3cg55qE5YiG6KGMXG4gICAgICAgICAgICBnZXRGaWVsZFJvdyAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAvLyDkuIDkuKrkuoznu7TmlbDnu4TvvIzmr4/kuKrmlbDnu4TopoHntKDmmK8gZWwtcm93IOeahOS4gOihjFxuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzlvZPliY3opoHntKDkuI3mmL7npLrvvIzliJnnm7TmjqXot7Pov4dcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2hvdyhpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTcGFuID0gdGhpcy5nZXRDb2xTaXplKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzliJ3lp4vkuLrnqbpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5Yiw5LuW5pyJ5aSa5bCRIHNwYW7vvIzmu6EgMjQg5Li65LiA6KGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbjogY3VycmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93SXRlbTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goWyBvYmogXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5Yid5aeL5LiN5Li656m677yMXG4gICAgICAgICAgICAgICAgICAgIC8vIDHjgIHliKTmlq3mnInmsqHmnInmiZPlvIAg77yI5b2T5YmN6L+Z5Liq55qE77yJ44CQ6buY6K6k5Zyo5paw6KGM56ys5LiA5YiX44CR5byA5YWzXG4gICAgICAgICAgICAgICAgICAgIC8vIOWPiOaIluiAheaYr+W9k+WJjeaYr+S4jeaYr+WtkOihqOWNle+8iGl0ZW0udHlwZSA9PT0gJ2NoaWxkLWZvcm0n6KGo56S65piv5a2Q6KGo5Y2V77yJXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLm5leHRSb3dGaXJzdCB8fCBpdGVtLnR5cGUgPT09ICdjaGlsZC1mb3JtJyB8fCBpdGVtLnR5cGUgPT09ICd0YWJsZS1yZWFkb25seScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr+aWsOihjOesrOS4gOWIl++8jOmCo+S5iOebtOaOpeaKiui/meS4qua3u+WKoOWIsCBsaXN0IOmHjOmdolxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPluWIsOS7luacieWkmuWwkSBzcGFu77yM5ruhIDI0IOS4uuS4gOihjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW46IGN1cnJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0l0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFsgb2JqIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIDLjgIHliKTmlq3vvIjkuIrkuIDkuKrvvInjgJDpu5jorqTmmK/mnKzooYzmnIDlkI7kuIDliJfjgJHlvIDlhbPmmK/lkKbmiZPlvIBcbiAgICAgICAgICAgICAgICAgICAgLy8g5YWI5ou/5Yiw5pyA5ZCO5LiA6KGMXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3RMYXN0SXRlbSA9IGxpc3RbbGlzdC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgLy8g55qE5pyA5ZCO5LiA5Liq5piv5ZCm5omT5byA5LqG6L+Z5Liq5byA5YWzXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0TGFzdEl0ZW1bbGlzdExhc3RJdGVtLmxlbmd0aCAtIDFdLnJvd0l0ZW0uY3VycmVudFJvd0xhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOaJk+W8gOi/meS4quW8gOWFs++8jOmCo+S5iOW9k+WJjei/meS4quebtOaOpeaUvuWIsOS4i+S4gOihjOeahOesrOS4gOS4qlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPluWIsOS7luacieWkmuWwkSBzcGFu77yM5ruhIDI0IOS4uuS4gOihjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW46IGN1cnJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0l0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFsgb2JqIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5LiL5ouJ5q2j5bi46K6h566XIHNwYW4g5p2l5Yaz5a6a5piv5ZCm5o2i6KGMXG4gICAgICAgICAgICAgICAgICAgIC8vIOmCo+S5iOiuoeeulyBsaXN0IOacgOWQjuS4gOS4quaVsOe7hOmHjOmdouaJgOacieWKoOi1t+adpeeahCBzcGFuIOeahOWAvFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0VG90YWxTcGFuID0gbGlzdFtsaXN0Lmxlbmd0aCAtIDFdLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPT4gaXRlbS5zcGFuKS5yZWR1Y2UoKGxhc3RUb3RhbCwgY3VycmVudEl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsYXN0VG90YWwgKyBjdXJyZW50SXRlbTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5bey57uP5aSn5LqO562J5LqOIDI0IOS6hu+8jOivtOaYjua7oeS6huS4gOihjO+8jOmCo+S5iOebtOaOpeWIm+W7uuaWsOihjFxuICAgICAgICAgICAgICAgICAgICAvLyDmiJbogIXmmK/lvZPliY3ov5nkuKrliqDkuYvliY3nmoTlpKfkuo4gMjTvvIzpgqPkuYjor7TmmI7ov5nkuKrmlL7lnKjkuYvliY3pgqPooYzotoXov4cgMjTvvIzmiYDku6XkuZ/opoHmlL7liLDmlrDooYzljrtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RUb3RhbFNwYW4gPj0gMjQgfHwgbGFzdFRvdGFsU3BhbiArIGN1cnJlbnRTcGFuID4gMjQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDojrflj5bliLDku5bmnInlpJrlsJEgc3Bhbu+8jOa7oSAyNCDkuLrkuIDooYxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuOiBjdXJyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dJdGVtOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChbIG9iaiBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOatpOaXtuivtOaYjuW9k+WJjei/meS4quWPr+S7peaUvuWIsOS5i+WJjeWTquS4gOihjFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPluWIsOS7luacieWkmuWwkSBzcGFu77yM5ruhIDI0IOS4uuS4gOihjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW46IGN1cnJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0l0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdFtsaXN0Lmxlbmd0aCAtIDFdLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g6K6+572u5p+Q5Liq6KaB57Sg56aB55SoXG4gICAgICAgICAgICAvLyBrZXnvvJrmk43kvZznmoQga2V5XG4gICAgICAgICAgICAvLyBiZURpc2FibGXvvJrlv4XloavvvIzpu5jorqTmmK8gdHJ1Ze+8jOihqOekuuemgeeUqOOAguiAjCBmYWxzZe+8jOihqOekuuWPlua2iOemgeeUqFxuICAgICAgICAgICAgc2V0RWxlbWVudERpc2FibGUgKGtleSwgYmVEaXNhYmxlID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIOiuvue9ruemgeeUqFxuICAgICAgICAgICAgICAgIGlmIChiZURpc2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5bey57uP56aB55So5LqG77yM5YiZ6Lez6L+H44CC5ZCm5YiZ5YiZ5re75Yqg6L+b5Y67XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYW5nZURhdGEuZGlzYWJsZUxpc3QuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEYXRhLmRpc2FibGVMaXN0LnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWPlua2iOemgeeUqFxuICAgICAgICAgICAgICAgICAgICAvLyDmnKrnpoHnlKjliJnot7Pov4fjgILlt7Lnu4/npoHnlKjvvIzliJnnu6fnu61cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNoYW5nZURhdGEuZGlzYWJsZUxpc3QuaW5kZXhPZihrZXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90b2RvOiDnm7TmjqXkvb/nlKhzcGxpY2XlsLHlj6/ku6XkuoZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGF0YS5kaXNhYmxlTGlzdCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmNoYW5nZURhdGEuZGlzYWJsZUxpc3Quc2xpY2UoMCwgaW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuY2hhbmdlRGF0YS5kaXNhYmxlTGlzdC5zbGljZShpbmRleCArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g6K6+572u5p+Q5Liq6KaB57Sg6ZqQ6JePXG4gICAgICAgICAgICAvLyBrZXnvvJrmk43kvZznmoQga2V5XG4gICAgICAgICAgICAvLyBiZUhpZGRlbu+8muW/heWhq++8jOm7mOiupOaYryB0cnVl77yM6KGo56S66ZqQ6JeP44CC6ICMIGZhbHNl77yM6KGo56S65Y+W5raI6ZqQ6JePXG4gICAgICAgICAgICBzZXRFbGVtZW50SGlkZGVuIChrZXksIGJlSGlkZGVuID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIOiuvue9rumakOiXj1xuICAgICAgICAgICAgICAgIGlmIChiZUhpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAvLyDlt7Lnu4/npoHnlKjkuobvvIzliJnot7Pov4fjgILlkKbliJnliJnmt7vliqDov5vljrtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hhbmdlRGF0YS5oaWRkZW5LZXlMaXN0LmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGF0YS5oaWRkZW5LZXlMaXN0LnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWPlua2iOemgeeUqFxuICAgICAgICAgICAgICAgICAgICAvLyDmnKrnpoHnlKjliJnot7Pov4fjgILlt7Lnu4/npoHnlKjvvIzliJnnu6fnu61cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNoYW5nZURhdGEuaGlkZGVuS2V5TGlzdC5pbmRleE9mKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURhdGEuaGlkZGVuS2V5TGlzdCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmNoYW5nZURhdGEuaGlkZGVuS2V5TGlzdC5zbGljZSgwLCBpbmRleCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5jaGFuZ2VEYXRhLmhpZGRlbktleUxpc3Quc2xpY2UoaW5kZXggKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIOiuvue9ruafkOS4quimgee0oOW/heWhq1xuICAgICAgICAgICAgLy8ga2V577ya5pON5L2c55qEIGtleVxuICAgICAgICAgICAgLy8gYmVIaWRkZW7vvJrlv4XloavvvIzpu5jorqTmmK8gdHJ1Ze+8jOihqOekuumakOiXj+OAguiAjCBmYWxzZe+8jOihqOekuuWPlua2iOmakOiXj1xuICAgICAgICAgICAgc2V0RWxlbWVudFJlcXVpcmVkIChrZXksIGJlUmVxdWlyZWQgPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy8g6K6+572u5b+F5aGrXG4gICAgICAgICAgICAgICAgaWYgKGJlUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5YWI5om+5Yiw6L+Z5Liq6KaB57Sg77yM5aaC5p6c5YW25pys6Lqr5b+F5aGr77yM5YiZ6Lez6L+H44CCXG4gICAgICAgICAgICAgICAgICAgIC8vIOmBjeWOhuS8oOWFpeeahOaVsOaNrlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZpZWxkcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmNoaWxkcmVuICYmIGZpZWxkcy5jaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLmNoaWxkcmVuLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpwga2V5IOS4jeWMuemFje+8jOWImei3s+i/h1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQua2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlhYjliKTmlq3mnInmsqHmnIkgcnVsZXMg6L+Z5Liq5bGe5oCn77yM5rKh5pyJ5YiZ5re75Yqg6L+Z5Liq5bGe5oCn77yM5bm25LiU5re75Yqg5b+F5aGr6aG554S25ZCO6L+U5ZueXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmllbGQucnVsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldChmaWVsZCwgJ3J1bGVzJywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnOiAn6K+36L6T5YWlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RyaWdnZXInOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmx1cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hhbmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDpgY3ljoYg5YW2IHJ1bGVz77yMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtydWxlc30gPSBmaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5piv5ZCm5pyJIHJlcXVpcmVkIOi/meadoeinhOWImVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGF2ZVJlcXVpcmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaYr+WQpuW3suS/ruaUuVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlcy5mb3JFYWNoKHJ1bGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5pyJIHJlcXVpcmVkIOWxnuaAp1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdyZXF1aXJlZCcgaW4gcnVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVSZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5YC85Li6IHRydWXvvIzliJnot7Pov4dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVsZS5yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5ZCm5YiZ5L+u5pS55YW25Li6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOW3suS/ruaUue+8jOmCo+S5iOivtOaYjuayoeW/heimgee7p+e7reaTjeS9nOS6hu+8jOi3s+i/h1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOayoeS/ruaUue+8jOW5tuS4lOayoeacieW/heWhq+inhOWImVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDvvIjms6jmhI/vvIzlpoLmnpzmnInop4TliJnvvIzpgqPkuYjlv4XnhLblt7Lkv67mlLnjgILmiYDku6Xlj6rlrZjlnKjmnInop4TliJnlt7Lkv67mlLnjgIHmnKrkv67mlLnmnInop4TliJnjgIHmnKrkv67mlLnml6Dop4TliJnkuInnp43mg4XlhrXvvIlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXZlUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOa3u+WKoOinhOWImVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZSc6ICfor7fovpPlhaUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0cmlnZ2VyJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmx1cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5Y+W5raI5b+F5aGrXG4gICAgICAgICAgICAgICAgICAgIC8vIOS4jeWQq+W/heWhq+inhOWImeeahOivne+8jOWImei3s+i/h+OAguWmguaenOWQq+W/heWhq+inhOWIme+8jOWImea3u+WKoFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZpZWxkcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmNoaWxkcmVuICYmIGZpZWxkcy5jaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLmNoaWxkcmVuLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpwga2V5IOS4jeWMuemFje+8jOWImei3s+i/h1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQua2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWFiOWIpOaWreacieayoeaciSBydWxlcyDov5nkuKrlsZ7mgKfvvIzmsqHmnInliJnmt7vliqDov5nkuKrlsZ7mgKfvvIzlubbkuJTmt7vliqDlv4XloavpobnnhLblkI7ov5Tlm55cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZC5ydWxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOacie+8jOWImemBjeWOhuW5tuWIoOmZpFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5ydWxlcy5mb3JFYWNoKChydWxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdyZXF1aXJlZCcgaW4gcnVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQucnVsZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIOWIneWni+WMluimgee0oOeahCDpmpDol48v5pi+56S644CB56aB55SoL+mdnuemgeeUqCDnirbmgIHnrYlcbiAgICAgICAgICAgIC8vIOWcqOeItue7hOS7tiBkYXRhIOabtOaWsOeahOaXtuWAme+8jOiwg+eUqOi/meS4quaWueazlVxuICAgICAgICAgICAgaW5pdFN0YXR1cyAoKSB7XG4gICAgICAgICAgICAgICAgLy8g6YGN5Y6G5Lyg5YWl55qE5pWw5o2uXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmNoaWxkcmVuICYmIGZpZWxkcy5jaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMuY2hpbGRyZW4uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5pyJ6IGU5Yqo6aG577yM6YKj5LmI5YiZ6YGN5Y6G5q+P5Liq6IGU5Yqo6aG5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnZhbHVlTGluayAmJiBmaWVsZC52YWx1ZUxpbmsubGVuZ3RoICYmIGZpZWxkLnZhbHVlTGluay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtrZXl9ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YGN5Y6GXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnZhbHVlTGluay5mb3JFYWNoKGxpbmtJdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOiBlOWKqOmhueeahOinpuWPkeWAvOS4jeWMuemFje+8jOWImei3s+i/h+i/meS4gOadoVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT09IGxpbmtJdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5q2k5pe25Yy56YWN77yM5Yik5patIGxpbmtMaXN0IOacieayoeaciVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmtJdGVtLmxpbmtMaXN0ICYmIGxpbmtJdGVtLmxpbmtMaXN0Lmxlbmd0aCAmJiBsaW5rSXRlbS5saW5rTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YaN6YGN5Y6GXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua0l0ZW0ubGlua0xpc3QuZm9yRWFjaCh0cmlnZ2VySXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmtLZXkgPSB0cmlnZ2VySXRlbS5saW5rS2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmsqHmnInogZTliqgga2V577yM5YiZ6Lez6L+H77yI5q2j5bi45p2l6K+077yM5LiN5Lya5rKh5pyJ77yJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbGlua0tleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOiBlOWKqOWAvO+8jOWImeabtOaWsOWAvFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJpZ2dlckl0ZW0uZW5hYmxlTGlua1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZvcm1EYXRhKHtbbGlua0tleV06IHRyaWdnZXJJdGVtLmxpbmtWYWx1ZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOiBlOWKqOemgeeUqC/lj5bmtojnpoHnlKjvvIzliJnmm7TmlrDnpoHnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyaWdnZXJJdGVtLmVuYWJsZUxpbmtEaXNhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnREaXNhYmxlKGxpbmtLZXksIHRyaWdnZXJJdGVtLmxpbmtEaXNhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzogZTliqjpmpDol48v5pi+56S677yM5YiZ5pu05pawXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmlnZ2VySXRlbS5lbmFibGVMaW5rSGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRIaWRkZW4obGlua0tleSwgdHJpZ2dlckl0ZW0ubGlua0hpZGRlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c6IGU5Yqo5b+F5aGrL+mdnuW/heWhq++8jOWImeabtOaWsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJpZ2dlckl0ZW0uZW5hYmxlTGlua1JlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRSZXF1aXJlZChsaW5rS2V5LCB0cmlnZ2VySXRlbS5saW5rUmVxdWlyZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDmib7liLAgdHlwZT1cImR5bmFtaWMtc2VsZWN0XCIg6I635Y+W5omA5pyJIHBhcmVudENvZGXvvIznhLblkI7or7vlj5bmlbDmja7lrZflhbjmjqXlj6Pmi4nlj5blr7nlupTnmoTmlbDmja5cbiAgICAgICAgICAgIC8vIHRvZG8g6L+Z6YeM55qE5pWw5o2u5a2X5YW46K+35rGC5o6l5Y+j77yM5bqU6K+l5pyA5ZCO5ZCI5bm25Yiw5LiA6LW377yM55Sx5LiA5Liq5LiT6Zeo55qE5pWw5o2u5a2X5YW46K+35rGC566h55CG5Zmo5Y676K+35rGC77yM5YeP5L2O5o6l5Y+j6YeN5aSN6K+35rGC55qE5oOF5Ya1XG4gICAgICAgICAgICBsb2FkRHluYW1pY1NlbGVjdE9wdGlvbnMgKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudENvZGVMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgLy8g6YGN5Y6G5Lyg5YWl55qE5pWw5o2uXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmNoaWxkcmVuICYmIGZpZWxkcy5jaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMuY2hpbGRyZW4uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdkeW5hbWljLXNlbGVjdCcgJiYgZmllbGQucGFyZW50S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWGjeWBmuS4gOasoeWOu+mHjeWIpOaWreOAguWmguaenOivpeWtl+WFuOW3sue7j+WcqOmHjOmdouS6hu+8jOWGjei3s+i/h+i/meS4gOS4qlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Q29kZUxpc3QuaW5kZXhPZihmaWVsZC5wYXJlbnRLZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5keW5hbWljRGljdFtmaWVsZC5wYXJlbnRLZXldICYmIHRoaXMuZHluYW1pY0RpY3RbZmllbGQucGFyZW50S2V5XS5sZW5ndGggIT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29kZUxpc3QucHVzaChmaWVsZC5wYXJlbnRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIneWni+WMluS4gOS4quaVsOe7hFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmR5bmFtaWNEaWN0LCBmaWVsZC5wYXJlbnRLZXksIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlnLDljLrpgInmi6nmoYbvvIzkuInnuqfogZTliqhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2FyZWEtc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFBhcmVudEtleSA9IGZpZWxkLmZpcnN0UGFyZW50S2V5IHx8ICcxMDAyMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZFBhcmVudEtleSA9IGZpZWxkLmZpcnN0UGFyZW50S2V5IHx8ICcxMDAyMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoaXJkUGFyZW50S2V5ID0gZmllbGQuZmlyc3RQYXJlbnRLZXkgfHwgJzEwMDIyJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudENvZGVMaXN0LmluZGV4T2YoZmlyc3RQYXJlbnRLZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5keW5hbWljRGljdFtmaXJzdFBhcmVudEtleV0gJiYgdGhpcy5keW5hbWljRGljdFtmaXJzdFBhcmVudEtleV0ubGVuZ3RoICE9PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENvZGVMaXN0LnB1c2goZmlyc3RQYXJlbnRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmR5bmFtaWNEaWN0LCBmaXJzdFBhcmVudEtleSwgW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDb2RlTGlzdC5pbmRleE9mKHNlY29uZFBhcmVudEtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLmR5bmFtaWNEaWN0W3NlY29uZFBhcmVudEtleV0gJiYgdGhpcy5keW5hbWljRGljdFtzZWNvbmRQYXJlbnRLZXldLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb2RlTGlzdC5wdXNoKHNlY29uZFBhcmVudEtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuZHluYW1pY0RpY3QsIHNlY29uZFBhcmVudEtleSwgW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDb2RlTGlzdC5pbmRleE9mKHRoaXJkUGFyZW50S2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMuZHluYW1pY0RpY3RbdGhpcmRQYXJlbnRLZXldICYmIHRoaXMuZHluYW1pY0RpY3RbdGhpcmRQYXJlbnRLZXldLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb2RlTGlzdC5wdXNoKHRoaXJkUGFyZW50S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5keW5hbWljRGljdCwgdGhpcmRQYXJlbnRLZXksIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudENvZGVMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g6YCa6L+H54i2IGtleSDmi7/liLDmiYDmnInlhYPntKBcbiAgICAgICAgICAgICAgICBsZXQgcGF5bG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8g6L+Z6YeM5Yik5pat5piv5LiN5pivIGF4aW9zIOeahOm7mOiupOi/lOWbnuaVsOaNru+8iOacque7j+i/h+ivt+axguaLpuaIquWZqOWkhOeQhueahO+8iVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmR5bmFtaWNTZWxlY3RPcHRpb24ucXVlcnlLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLmR5bmFtaWNTZWxlY3RPcHRpb24ucXVlcnlLZXldOiBwYXJlbnRDb2RlTGlzdFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQgPSBwYXJlbnRDb2RlTGlzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1d0aUZvcm0g5ouJ5Y+W5Yqo5oCB5a2X5YW4Jyk7XG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCh0aGlzLmR5bmFtaWNTZWxlY3RPcHRpb24uZGljdFVybCwgcGF5bG9hZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyDlhbzlrrnmgKflpITnkIZcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVxdWVzdCAmJiByZXMuaGVhZGVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWboOS4uuWPr+iDveWkmuS4quWcsOaWueWQjOaXtuiwg+i/meS4quaOpeWPo+eahOWOn+WboO+8jOS4uuS6humBv+WFjemHjeWkjeWwhuWGheWuuea3u+WKoOWIsOmHjOmdou+8jOaJgOS7pe+8jFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi/memHjOWcqOi1i+WAvOS5i+WJje+8jOmcgOimgeWFiOWIpOaWreS4gOS4iyBwYXJlbnRDb2RlTGlzdCDnmoTmr4/kuKrlgLzvvIzlhbblr7nlupTnmoQgZHluYW1pY0RpY3Qg6YeM55qE5ZOq5LiA5Liq5pWw57uE77yM5piv5ZCm5piv56m655qEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5LiN5piv56m655qE77yM5YiZ5bCG5YW2572u5Li656m65pWw57uEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29kZUxpc3QuZm9yRWFjaChwQ29kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmR5bmFtaWNEaWN0W3BDb2RlXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5keW5hbWljRGljdCwgcENvZGUsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yqg6L295Yiw57uT5p6cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5kYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeUqOavj+S4qui/lOWbnuWAvOeahCBwQ29kZSDkvZzkuLoga2V577yM5bCG6K+l6aG55re75Yqg5Yiw5pWw57uE6YeM44CCXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOazqO+8muS5i+aJgOS7peaYr+aVsOe7hO+8jOaYr+WboOS4uuS5i+WJjeW3sue7j+WIneWni+WMlui/h+S6hu+8iHBhcmVudEtleSDkuLogQ29kZe+8iVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwQ29kZSA9IGl0ZW1bdGhpcy5keW5hbWljU2VsZWN0T3B0aW9uLnBhcmVudEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY0RpY3RbcENvZGVdLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRtZXNzYWdlLmVycm9yKGRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbWVzc2FnZS5lcnJvcign5pWw5o2u5a2X5YW45Yqg6L296ZSZ6K+v77yM6K+35Yi35paw6aG16Z2i6YeN6K+VJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDmuIXnqbrmoKHpqozkv6Hmga9cbiAgICAgICAgICAgIGNsZWFyVmFsaWRhdGUgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZm9ybS5jbGVhclZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDojrflj5bov4fmu6TlkI7nmoTmlbDmja5cbiAgICAgICAgICAgIGdldERhdGEgKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSB7fTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZvcm1EYXRhKS5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6LWw5q2j5bi46YC76L6RXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYW5nZURhdGEuaGlkZGVuS2V5TGlzdC5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOi/memHjOWIhuS4uuS4pOenjeaDheWGte+8mlxuICAgICAgICAgICAgICAgICAgICAvLyDnrKzkuIDnp43mmK/kuIDnuqfooajljZXnmoTlhYPntKDvvIzku5blnKjooqvpmpDol4/ml7bvvIxrZXnmmK/lj6/ku6Xnm7TmjqXku44gaGlkZGVuS2V5TGlzdCDojrflj5bnmoRcbiAgICAgICAgICAgICAgICAgICAgLy8g56ys5LqM56eN5piv5a2Q6KGo5Y2V55qE5YWD57Sg44CC5Zug5Li65LuW55qEIGtleSDmmK/kuInmrrXmi7zmjqXotbfmnaXnmoQga2V577yM5omA5Lul6KaB5Y675a2Q6KGo5Y2V6YeM5ou/5YiwIHJhbmRvbUlkIOWGjeWBmuS4gOS4quaYoOWwhFxuICAgICAgICAgICAgICAgICAgICAvLyDmn5DkuKrlsZ7mgKfmmK/lkKbmmK/lrZDooajljZXnmoTliKTmlq3mnaHku7bmmK/vvJrpgY3ljoYgZmllbGRz77yM5Yik5pat5LuW5piv5ZCm5pivIHR5cGUgPT09ICdjaGlsZC1mb3JtJ1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRGb3JtS2V5c0xpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWFwKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoaWxkcmVuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2NoaWxkLWZvcm0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChpdGVtLmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgICAgICAgICAgICAgICAgfSkuZmlsdGVyKGxpc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3QubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICAgICAgfSkuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRm9ybUtleXNMaXN0ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkRm9ybUtleXNMaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRGb3JtS2V5c0xpc3QuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOivtOaYjuaYr+WcqOWtkOihqOWNlVxuICAgICAgICAgICAgICAgICAgICAgICAgZFtrZXldID0gdGhpcy4kcmVmc1trZXldWzBdLmNoaWxkRm9ybUZpbGVkcy5tYXAoKGNoaWxkRmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGREID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge3JhbmRvbUlkfSA9IGNoaWxkRmllbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRGaWVsZC5mb3JFYWNoKGNoaWxkSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkS2V5ID0gY2hpbGRJdGVtLmtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5VGV4dCA9IGAke2tleX1fJHtyYW5kb21JZH1fJHtjaGlsZEtleX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2VEYXRhLmhpZGRlbktleUxpc3QuaW5kZXhPZihrZXlUZXh0KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZERbY2hpbGRLZXldID0gdGhpcy5mb3JtRGF0YVtrZXldW2luZGV4XVtjaGlsZEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGREO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDotbDmraPluLjpgLvovpFcbiAgICAgICAgICAgICAgICAgICAgICAgIGRba2V5XSA9IHRoaXMuZm9ybURhdGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g5qCh6aqM77yM5bm26I635Y+W5qCh6aqM5ZCO5pWw5o2uXG4gICAgICAgICAgICB2YWxpZGF0ZSAoZm4pIHtcbiAgICAgICAgICAgICAgICAvLyDlhYjmoKHpqozniLbnuqfooajljZXnmoTlgLxcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmZvcm0udmFsaWRhdGUoKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWvueaVsOaNrui/m+ihjOi/h+a7pFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5Yik5pat5piv5ZCm6ZyA6KaB5qCh6aqM5a2Q6KGo5Y2VXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRm9ybUtleUxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWxlZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZWQuY2hpbGRyZW4gJiYgZmlsZWQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVkLmNoaWxkcmVuLmZvckVhY2goZm9ybUl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmn5DkuIDpobnmmK9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1JdGVtLnR5cGUgPT09ICdjaGlsZC1mb3JtJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRGb3JtS2V5TGlzdC5wdXNoKGZvcm1JdGVtLmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkRm9ybUtleUxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbih0cnVlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4oZmFsc2UsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVMaXN0ID0gY2hpbGRGb3JtS2V5TGlzdC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmc1trZXldWzBdLnZhbGlkYXRlRm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCh2YWxpZGF0ZUxpc3QpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeItuihqOWNleagoemqjOS5n+mAmui/h+S6hu+8jOaJjeeul+mDvemAmui/h1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbih0cnVlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlkKbliJnljbPkvb/lrZDooajljZXmoKHpqozpgJrov4fvvIzniLbooajljZXmoKHpqozmsqHpgJrov4fvvIzkuZ/mmK/nrpfkuI3pgJrov4fnmoRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4oZmFsc2UsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbihmYWxzZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g6YeN572u6KGo5Y2V5pWw5o2uXG4gICAgICAgICAgICByZXNldEZpZWxkcyAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5mb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWxlZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlZC5jaGlsZHJlbiAmJiBmaWxlZC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlZC5jaGlsZHJlbi5mb3JFYWNoKGZvcm1JdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmn5DkuIDpobnmmK9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUl0ZW0udHlwZSA9PT0gJ2NoaWxkLWZvcm0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSB0aGlzLiRyZWZzW2Zvcm1JdGVtLmtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbMF0ucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDooajljZXnu4Tku7bmmK/lkKbmmL7npLpcbiAgICAgICAgICAgIGlzU2hvdyAoaXRlbSkge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOivpeimgee0oOWcqOmakOiXj+WIl+ihqOmHjO+8jOWImeS4jeaYvuekulxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYW5nZURhdGEuaGlkZGVuS2V5TGlzdC5pbmRleE9mKGl0ZW0ua2V5KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDmm7TmlrDmlbDmja5cbiAgICAgICAgICAgIHVwZGF0ZUZvcm1EYXRhIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpwga2V5IOWcqOWAvOmHjOmdolxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5IGluIHRoaXMuZm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWImeWbnuWhq+i/meS4quWAvFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuZm9ybURhdGEsIGtleSwgZGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g5pS26LW3L+WxleW8gOWMuuWdl1xuICAgICAgICAgICAgZm9sZEJsb2NrIChibG9jaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gYmxvY2subGFiZWw7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZvbGRCbG9ja0xpc3QuaW5kZXhPZihsYWJlbCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvbGRCbG9ja0xpc3QucHVzaChibG9jay5sYWJlbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2xkQmxvY2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g5pS26LW35bGV5byA5omA5pyJ5Yy65Z2XXG4gICAgICAgICAgICBmb2xkQWxsQmxvY2sgKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmsqHmnIkgbGFiZWzvvIzliJnkuI3mlK/mjIHmlLbotbdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbExpc3QucHVzaChibG9jay5sYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzplb/luqbnm7jnrYnvvIzor7TmmI7lt7Lnu4/lhajpg6jmlLbotbfkuobvvIzpgqPkuYjlsLHmmK/lsZXlvIBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb2xkQmxvY2tMaXN0Lmxlbmd0aCA9PT0gbGFiZWxMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvbGRCbG9ja0xpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvbGRCbG9ja0xpc3QgPSBsYWJlbExpc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g5rWP6KeI5qih5byP5YiH5o2iXG4gICAgICAgICAgICBjaGFuZ2VTY2FuVHlwZSAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NhblR5cGUgPT09ICdub3JtYWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhblR5cGUgPSAnc2luZ2xlJztcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5YiH5o2i5Li65Y2V5L2T77yM6YKj5LmI5bCG5omA5pyJ6ZqQ6JeP55qE5pi+56S65Ye65p2lXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9sZEJsb2NrTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZVNjYW5CbG9jayA9IHRoaXMuZmllbGRzWzBdLmxhYmVsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhblR5cGUgPSAnbm9ybWFsJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVTY2FuQmxvY2sgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnZXRQcm9wcyAocm93SXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogcm93SXRlbS5rZXksXG4gICAgICAgICAgICAgICAgICAgIGl0ZW06IHJvd0l0ZW0sXG4gICAgICAgICAgICAgICAgICAgIGFsbERpc2FibGVkOiB0aGlzLmFsbERpc2FibGVkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIEZvcm1JbnB1dCxcbiAgICAgICAgICAgIEZvcm1EaWN0U2VsZWN0LFxuICAgICAgICAgICAgRm9ybURhdGUsXG4gICAgICAgICAgICBGb3JtSG91ck1pbnV0ZSxcbiAgICAgICAgICAgIEZvcm1EYXRlUmFuZ2UsXG4gICAgICAgICAgICBGb3JtTnVtYmVySW5wdXQsXG4gICAgICAgICAgICBGb3JtQXV0b0NvbXBsZXRlLFxuICAgICAgICAgICAgRm9ybVJhZGlvLFxuICAgICAgICAgICAgRm9ybVRleHRhcmVhLFxuICAgICAgICAgICAgRm9ybU5vcm1hbFNlbGVjdCxcbiAgICAgICAgICAgIEZvcm1Nb25leUlucHV0LFxuICAgICAgICAgICAgRm9ybVJhdGVJbnB1dCxcbiAgICAgICAgICAgIEZvcm1BcmVhU2VsZWN0LFxuICAgICAgICAgICAgRm9ybU11bExpbmthZ2UsXG4gICAgICAgICAgICBGb3JtTm9ybWFsTnVtYmVySW5wdXQsXG5cbiAgICAgICAgICAgIFRhYmxlUmVhZG9ubHksXG4gICAgICAgICAgICBDaGlsZEZvcm0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbiAgICAud3RpLWZvcm0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAuZWwtaW5wdXRfX2lubmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMzZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMkUzRTYgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9jay10aXRsZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAgICAgICAvLyBsYWJlbCDlt6bovrnnmoTnuqLoibLnq5bnur9cbiAgICAgICAgICAgIC5ibG9jay1saW5lIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRUU0NzNBO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ibG9jay10ZXh0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNzNBO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmxvY2stZm9sZC1idG4ge1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIOW4pui+ueahhueahOihqOWNlee7hOS7tlxuICAgIC5ib3JkZXItZm9ybSB7XG4gICAgICAgIC5ibG9jay1pdGVtIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREUwRUE7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gICAgICAgICAgICAuYmxvY2stdGl0bGUge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZiO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMCAxOHB4IDI0cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ibG9jay10aXRsZSArIC5ibG9jay1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJsb2NrLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJsb2NrLWhpZGRlbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLmVsLWRpdmlkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNUY4O1xuICAgIH1cblxuICAgIC5zY2FuLXR5cGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAgICAgLmFsbC1mb2xkLWJ0biB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRUU0NzNBO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0VFNDczQTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcblxuICAgICAgICAgICAgLmFsbC1mb2xkLWljb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvY2stYnRuLWxpc3Qge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG5cbiAgICAgICAgICAgIC5ibG9jay1idG4ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREUwRUE7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMThweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzNBNDU2NjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmxvY2stYnRuLmZvY3VzIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRUU0NzNBO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmxvY2stYnRuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmxvY2stYnRuOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2Nhbi10eXBlLWJ0biB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQUVCM0JGO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgY29sb3I6ICMxMjE4MkE7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICAgICAgICAgIC5zY2FuLXR5cGUtaWNvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC53dGktZm9ybS12MiAvZGVlcC8gaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gICAgLnd0aS1mb3JtLXYyIC9kZWVwLyBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICB9XG5cbiAgICAud3RpLWZvcm0tdjIgL2RlZXAvIGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgfVxuXG4gICAgLnd0aS1mb3JtLXYyIC9kZWVwLyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgfVxuXG48L3N0eWxlPlxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWQ3NGVkZjdhMTQ3OGE2YjU4YjJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=