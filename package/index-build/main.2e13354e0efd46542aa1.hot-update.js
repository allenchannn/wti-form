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
/******/ 	__webpack_require__.h = () => ("7115f8f1d69e244d5f32")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yZTEzMzU0ZTBlZmQ0NjU0MmFhMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSxpQkFEQTtBQUVBLDhEQUZBO0FBR0E7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFDQTtBQUNBO0FBSkEsS0FEQTtBQU9BO0FBQ0Esa0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQSxLQVBBO0FBYUE7QUFDQTtBQUNBLG1CQURBO0FBRUE7QUFGQSxLQWRBO0FBa0JBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBO0FBRkEsS0FuQkE7QUF1QkE7QUFDQTtBQUNBLG1CQURBO0FBRUE7QUFGQSxLQXhCQSxDQTRCQTs7QUE1QkEsR0FIQTtBQWlDQSxNQWpDQSxrQkFpQ0E7QUFDQTtBQUNBLGtCQURBO0FBR0EsdUJBSEE7QUFHQTtBQUVBO0FBQ0EscUJBTkE7QUFTQTtBQUFBO0FBQ0E7QUFDQSx1QkFGQTtBQUdBLHFDQUhBO0FBS0E7QUFDQTtBQUNBLHlCQVBBO0FBUUE7QUFSQSxPQVRBO0FBb0JBLHVCQXBCQTtBQW9CQTtBQUVBLHdCQXRCQTtBQXNCQTtBQUNBLHlCQXZCQTtBQXVCQTtBQUVBO0FBekJBO0FBMkJBLEdBN0RBO0FBOERBLFNBOURBLHFCQThEQTtBQUFBOztBQUNBO0FBRUEsd0JBSEEsQ0FJQTs7QUFDQSxpQ0FMQSxDQU1BOztBQUNB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O0FBQ0E7QUE3eEJBOzs7Ozs7OztVQ3pMQSIsInNvdXJjZXMiOlsid2VicGFjazovL3d0aS1mb3JtLXNvdXJjZS1jb2RlLy4vaW5kZXgudnVlIiwid2VicGFjazovL3d0aS1mb3JtLXNvdXJjZS1jb2RlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInd0aS1mb3JtIHd0aS1mb3JtLXYyXCIgOmNsYXNzPVwieydib3JkZXItZm9ybSc6IGJvcmRlckZvcm19XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzY2FuLXR5cGVcIiB2LWlmPVwic2hvd0FsbEZvbGRCdG4gfHwgc2hvd1NjYW5UeXBlQnRuXCI+XG4gICAgICAgICAgICA8IS0tIOWFqOmDqOaUtui1t+WxleW8gCArIOa1j+iniOaooeW8j+WIh+aNoiAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGwtZm9sZC1idG5cIiB2LWlmPVwic2hvd0FsbEZvbGRCdG4gJiYgc2NhblR5cGU9PT0nbm9ybWFsJ1wiIEBjbGljaz1cImZvbGRBbGxCbG9ja1wiPlxuICAgICAgICAgICAgICAgIDxzdmcgdi1pZj1cIiF0ZXh0TW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICAgdD1cIjE2MjY4MzU5ODc1ODVcIlxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhbGwtZm9sZC1pY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwLWlkPVwiMjI2NFwiIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiPlxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNTE0XCIgY3k9XCI1MTRcIiByPVwiNTEyXCIgc3Ryb2tlPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiNTBcIiBmaWxsPVwiI0VFNDczQVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNTQxLjE4NCA3MzEuOTQwNTcxVjM3My43NmwxNjYuMzI2ODU3IDE2OC4zNzQ4NTdhMjkuMTQ3NDI5IDI5LjE0NzQyOSAwIDEgMCA0MS4xNzk0MjktNDEuMjg5MTQzbC0yMzcuMTI5MTQzLTIzNy43NTA4NTctMjM2LjA2ODU3MiAyMzYuODM2NTcyYTI4LjgxODI4NiAyOC44MTgyODYgMCAxIDAgMzkuNjA2ODU4IDQxLjgzNzcxNGwxNjguNzQwNTcxLTE2Ny44OTk0Mjl2MzU4LjEwNzQyOWEyOC43MDg1NzEgMjguNzA4NTcxIDAgMCAwIDU3LjM0NCAwelwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICDlhajpg6jmlLbotbcv5bGV5byAXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrLWJ0bi1saXN0XCIgdi1pZj1cInNob3dTY2FuVHlwZUJ0biAmJiBzY2FuVHlwZSA9PT0gJ3NpbmdsZSdcIj5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJibG9jayBpbiBmaWVsZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydmb2N1cyc6c2luZ2xlU2NhbkJsb2NrID09PSBibG9jay5sYWJlbH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJibG9jay5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiKCkgPT4gc2luZ2xlU2NhbkJsb2NrID0gYmxvY2subGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJibG9jay5sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgYmxvY2subGFiZWwgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Nhbi10eXBlLWJ0blwiIHYtaWY9XCJzaG93U2NhblR5cGVCdG5cIiBAY2xpY2s9XCJjaGFuZ2VTY2FuVHlwZVwiPlxuICAgICAgICAgICAgICAgIDxzdmcgdD1cIjE2MjY4MzU5ODc1ODVcIiBjbGFzcz1cInNjYW4tdHlwZS1pY29uXCIgdmlld0JveD1cIjAgMCAyOCAyOFwiIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCIyMjY0XCIgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjE0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIgNiBMOSAyIEw5IDEwIFogTDI1IDZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzEyMTgyQVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzEyMTgyQVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjYgMjIgTDE5IDE4IEwxOSAyNiBaIEwyIDIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMxMjE4MkFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMxMjE4MkFcIi8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAg5rWP6KeI5qih5byP5YiH5o2iXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGVsLWZvcm0gcmVmPVwiZm9ybVwiXG4gICAgICAgICAgICAgICAgIDptb2RlbD1cImZvcm1EYXRhXCJcbiAgICAgICAgICAgICAgICAgOmhpZGUtcmVxdWlyZWQtYXN0ZXJpc2s9XCJ0ZXh0TW9kZWxcIlxuICAgICAgICAgICAgICAgICA6bGFiZWwtd2lkdGg9XCJsYWJlbFdpZHRoIHx8ICcxNTBweCdcIlxuICAgICAgICAgICAgICAgICA6bGFiZWwtcG9zaXRpb249XCJsYWJlbFBvc2l0aW9uID8gbGFiZWxQb3NpdGlvbiA6ICd0b3AnXCI+XG4gICAgICAgICAgICA8IS0tIOWMuuWdl+e6p++8jOavj+S4qiBmaWxlZCDmmK/kuIDkuKrljLrlnZcgLS0+XG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZmllbGQgaW4gY3VycmVudEZpbGVkc1wiXG4gICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZC5sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInNjYW5UeXBlID09PSAnbm9ybWFsJyB8fCAoc2NhblR5cGUgPT09ICdzaW5nbGUnICYmIHNpbmdsZVNjYW5CbG9jayA9PT0gZmllbGQubGFiZWwpXCJcbiAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImdldEJsb2NrQ2xhc3MoZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cImZpZWxkLnN0eWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0g5Yy65Z2X5ZCNIC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jay10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrLWxpbmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2stdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aWQ9XCJmaWVsZC5pZCB8fCBTdHJpbmcoTWF0aC5yYW5kb20oKSoxMDAwMClcIj57eyBmaWVsZC5sYWJlbCB9fTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jay1mb2xkLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZm9sZEJsb2NrTGlzdC5pbmRleE9mKGZpZWxkLmxhYmVsKT09PS0xICYmIHNob3dGb2xkQnRuICYmICF0ZXh0TW9kZWwgJiYgc2NhblR5cGUgPT09ICdub3JtYWwnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImZvbGRCbG9jayhmaWVsZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOaUtui1tyA8aSBjbGFzcz1cImVsLWljb24tYXJyb3ctdXBcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jay1mb2xkLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZm9sZEJsb2NrTGlzdC5pbmRleE9mKGZpZWxkLmxhYmVsKT4tMSAmJiBzaG93Rm9sZEJ0biAmJiAhdGV4dE1vZGVsICYmIHNjYW5UeXBlID09PSAnbm9ybWFsJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJmb2xkQmxvY2soZmllbGQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDlsZXlvIAgPGkgY2xhc3M9XCJlbC1pY29uLWFycm93LWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiKHJvdywgcm93SW5kZXgpIGluIGdldEZpZWxkUm93KGZpZWxkLmNoaWxkcmVuKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGVsLXJvdyA6Z3V0dGVyPVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwicm93SW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J2Jsb2NrLWhpZGRlbic6Zm9sZEJsb2NrTGlzdC5pbmRleE9mKGZpZWxkLmxhYmVsKT4tMX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJ7cm93SXRlbX0gaW4gcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgOmtleT1cInJvd0l0ZW0ua2V5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZWwtY29sIDpzcGFuPVwiZ2V0Q29sU2l6ZShyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJyb3dJdGVtLmtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cInJvd0l0ZW0uc3R5bGUgfHwge31cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZWwtZm9ybS1pdGVtIHYtaWY9XCJyb3dJdGVtLnR5cGUhPT0nY2hpbGQtZm9ybSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwicm93SXRlbS5zdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJyb3dJdGVtLmNsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cInJvd0l0ZW0ucnVsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiZ2V0Rm9ybUl0ZW1MYWJlbChyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cHJvcD1cInJvd0l0ZW0ua2V5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXQgdi1pZj1cInJvd0l0ZW0udHlwZT09PSdpbnB1dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImdldFByb3BzKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRGF0ZSB2LWlmPVwicm93SXRlbS50eXBlPT09J2RhdGUtaW5wdXQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImdldFByb3BzKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Ib3VyTWludXRlIHYtaWY9XCJyb3dJdGVtLnR5cGU9PT0naG91ci1taW51dGUtaW5wdXQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImdldFByb3BzKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1EYXRlUmFuZ2Ugdi1pZj1cInJvd0l0ZW0udHlwZT09PSdkYXRlLXJhbmdlLWlucHV0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImdldFByb3BzKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybURpY3RTZWxlY3Qgdi1pZj1cInJvd0l0ZW0udHlwZSA9PT0gJ2R5bmFtaWMtc2VsZWN0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJnZXRQcm9wcyhyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTm9ybWFsU2VsZWN0IHYtaWY9XCJyb3dJdGVtLnR5cGUgPT09ICdub3JtYWwtc2VsZWN0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImdldFByb3BzKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybU51bWJlcklucHV0IHYtaWY9XCJyb3dJdGVtLnR5cGUgPT09ICdudW1iZXItaW5wdXQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJnZXRQcm9wcyhyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIOWKqOaAgeS4i+aLieahhu+8jOWFpeWPguaYr+eItiBrZXnvvIzmoLnmja7niLYga2V5IOiHquWKqOWKoOi9veWIl+ihqOWGheWuuSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1BdXRvQ29tcGxldGUgdi1pZj1cInJvd0l0ZW0udHlwZSA9PT0gJ2F1dG8tY29tcGxldGUtaW5wdXQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiZ2V0UHJvcHMocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtUmFkaW8gdi1pZj1cInJvd0l0ZW0udHlwZSA9PT0gJ3JhZGlvJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiZ2V0UHJvcHMocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1UZXh0YXJlYSB2LWlmPVwicm93SXRlbS50eXBlPT09J3RleHRhcmVhJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiZ2V0UHJvcHMocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTW9uZXlJbnB1dCB2LWlmPVwicm93SXRlbS50eXBlPT09J21vbmV5LWlucHV0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJnZXRQcm9wcyhyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtUmF0ZUlucHV0IHYtaWY9XCJyb3dJdGVtLnR5cGU9PT0ncmF0ZS1pbnB1dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJnZXRQcm9wcyhyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1BcmVhU2VsZWN0IHYtaWY9XCJyb3dJdGVtLnR5cGU9PT0nYXJlYS1zZWxlY3QnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImdldFByb3BzKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1NdWxMaW5rYWdlIHYtaWY9XCJyb3dJdGVtLnR5cGU9PT0nbXVsLWxpbmthZ2UnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImdldFByb3BzKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Ob3JtYWxOdW1iZXJJbnB1dCB2LWlmPVwicm93SXRlbS50eXBlPT09J25vcm1hbC1udW1iZXInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJnZXRQcm9wcyhyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZWwtZm9ybS1pdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoaWxkRm9ybSB2LWlmPVwicm93SXRlbS50eXBlID09PSAnY2hpbGQtZm9ybSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRleHQtbW9kZWw9XCJ0ZXh0TW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlZj1cInJvd0l0ZW0ua2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphbGwtZGlzYWJsZWQ9XCJhbGxEaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXRlbT1cInJvd0l0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUmVhZG9ubHkgdi1pZj1cInJvd0l0ZW0udHlwZSA9PT0gJ3RhYmxlLXJlYWRvbmx5J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlZj1cInJvd0l0ZW0ua2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXRlbT1cInJvd0l0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2VsLWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZWwtcm93PlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8ZWwtZGl2aWRlciB2LWlmPVwiZmllbGQuZGl2aWRlclwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSDooajlpLTliqDnspfmloflrZflvIDlp4sgLS0+XG4gICAgICAgIDwvZWwtZm9ybT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbiAgICBpbXBvcnQgRm9ybUlucHV0IGZyb20gJy4vZm9ybV9pdGVtL2Zvcm1faW5wdXQudnVlJztcbiAgICBpbXBvcnQgRm9ybVRleHRhcmVhIGZyb20gJy4vZm9ybV9pdGVtL2Zvcm1fdGV4dGFyZWEnO1xuICAgIGltcG9ydCBGb3JtRGljdFNlbGVjdCBmcm9tICcuL2Zvcm1faXRlbS9mb3JtX2RpY3Rfc2VsZWN0JztcbiAgICBpbXBvcnQgRm9ybU5vcm1hbFNlbGVjdCBmcm9tICcuL2Zvcm1faXRlbS9mb3JtX25vcm1hbF9zZWxlY3QnO1xuICAgIGltcG9ydCBGb3JtRGF0ZSBmcm9tICcuL2Zvcm1faXRlbS9mb3JtX2RhdGUnO1xuICAgIGltcG9ydCBGb3JtSG91ck1pbnV0ZSBmcm9tICcuL2Zvcm1faXRlbS9mb3JtX2hvdXJfbWludXRlJztcbiAgICBpbXBvcnQgRm9ybURhdGVSYW5nZSBmcm9tICcuL2Zvcm1faXRlbS9mb3JtX2RhdGVfcmFuZ2UnO1xuICAgIGltcG9ydCBGb3JtQXV0b0NvbXBsZXRlIGZyb20gJy4vZm9ybV9pdGVtL2Zvcm1fYXV0b19jb21wbGV0ZSc7XG4gICAgaW1wb3J0IEZvcm1OdW1iZXJJbnB1dCBmcm9tICcuL2Zvcm1faXRlbS9mb3JtX251bWJlcl9pbnB1dCc7XG4gICAgaW1wb3J0IEZvcm1SYWRpbyBmcm9tICcuL2Zvcm1faXRlbS9mb3JtX3JhZGlvJztcbiAgICBpbXBvcnQgRm9ybU1vbmV5SW5wdXQgZnJvbSAnLi9mb3JtX2l0ZW0vZm9ybV9tb25leV9pbnB1dCc7XG4gICAgaW1wb3J0IEZvcm1SYXRlSW5wdXQgZnJvbSAnLi9mb3JtX2l0ZW0vZm9ybV9yYXRlX2lucHV0JztcbiAgICBpbXBvcnQgRm9ybUFyZWFTZWxlY3QgZnJvbSAnLi9mb3JtX2l0ZW0vZm9ybV9hcmVhX3NlbGVjdCc7XG4gICAgaW1wb3J0IEZvcm1NdWxMaW5rYWdlIGZyb20gJy4vZm9ybV9pdGVtL2Zvcm1fbXVsX2xpbmthZ2UnO1xuICAgIGltcG9ydCBGb3JtTm9ybWFsTnVtYmVySW5wdXQgZnJvbSAnLi9mb3JtX2l0ZW0vZm9ybV9ub3JtYWxfbnVtYmVyX2lucHV0JztcbiAgICBpbXBvcnQgVGFibGVSZWFkb25seSBmcm9tICcuL2Zvcm1faXRlbS90YWJsZV9yZWFkb25seSc7XG5cbiAgICBpbXBvcnQgQ2hpbGRGb3JtIGZyb20gJy4vY2hpbGRfZm9ybSc7XG4gICAgaW1wb3J0IEZvcm1NaXhpbiBmcm9tICcuL21peGluLmpzJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ1d0aUZvcm0nLFxuICAgICAgICBtaXhpbnM6IFsgRm9ybU1peGluIF0sXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5piv5ZCm5pi+56S65pS26LW344CB5bGV5byA5oyJ6ZKuXG4gICAgICAgICAgICBzaG93Rm9sZEJ0bjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5piv5ZCm5pi+56S6IOWFqOmDqOaUtui1t+OAgeWxleW8gOaMiemSrlxuICAgICAgICAgICAgc2hvd0FsbEZvbGRCdG46IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOaYr+WQpuaYvuekuua1j+iniOaooeW8j+WIh+aNouaMiemSrlxuICAgICAgICAgICAgc2hvd1NjYW5UeXBlQnRuOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDmlbDmja7lrZflhbjnmoTphY3nva5cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhOiB7fSxcblxuICAgICAgICAgICAgICAgIGN1cnJlbnRGaWxlZHM6IFtdLCAvLyDkuK3pl7TmgIHmlbDmja7vvIzkvp3otZbkuo4gZmllbGRz44CC5b2TIGZpZWxkcyDmlLnlj5jml7bvvIzov5nkuKrkvJrot5/nnYDkuIDotbflj5jjgIJcblxuICAgICAgICAgICAgICAgIC8vIOWKqOaAgeS4i+aLieWIl+ihqOmHjO+8jOaJgOaciemAiemhueOAguacrOWvueixoeeahOWxnuaApyBrZXkg5piv5a2X5YW455qE54i2IGtlee+8jOWAvOaYr+aVsOe7hO+8jOaVsOe7hOWFg+e0oOaYr+WvueW6lOeahOeItiBrZXkg5LiL5omA5pyJ5a2X5YW4XG4gICAgICAgICAgICAgICAgZHluYW1pY0RpY3Q6IHt9LFxuXG5cbiAgICAgICAgICAgICAgICBjaGFuZ2VEYXRhOiB7IC8vIOaJgOacieWKqOaAgeaVsOaNru+8jOabtOWHhuehrueahOivtO+8jOaYr+S8mumHjeaWsOi1i+WAvOeahO+8jOmcgOimgeaUvuWIsCBkYXRhIOmHjO+8jOaJjeiDveWunueOsOWTjeW6lOW8j+OAgui/meaYr+WboOS4uiBwcm92aWRlIOacrOi6q+eahOeJueaAp+WvvOiHtOeahFxuICAgICAgICAgICAgICAgICAgICAvLyDooqvnpoHnlKjnmoTmiYDmnInlhYPntKDliJfooajjgILov5nph4znmoTmlbDnu4TlhYPntKDmmK/or6XopoHntKDnmoQga2V544CCXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVMaXN0OiBbXSxcbiAgICAgICAgICAgICAgICAgICAgYWxsRGlzYWJsZWQ6IHRoaXMuYWxsRGlzYWJsZWQsXG5cbiAgICAgICAgICAgICAgICAgICAgLy8g6ZqQ6JeP55qE6KaB57Sg5YiX6KGo44CC6L+Z6YeM55qE5pWw57uE5YWD57Sg5piv6K+l6KaB57Sg55qEIGtleeOAglxuICAgICAgICAgICAgICAgICAgICAvLyDpmpDol4/nmoTopoHntKDvvIzkuI3ov5vooYzmoKHpqozjgILmj5DkuqTnmoTml7blgJnvvIzkuZ/opoHov4fmu6TmjolcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuS2V5TGlzdDogW10sXG4gICAgICAgICAgICAgICAgICAgIHRleHRNb2RlbDogdGhpcy50ZXh0TW9kZWxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZm9sZEJsb2NrTGlzdDogW10sIC8vIOaUtui1t+eahOWMuuWdl++8iOaUvuWcqOi/meS4qumHjOmdou+8jOivpeWMuuWdl+WwseWPquaYvuekuuWMuuWdl+agh+mimO+8jOS4jeaYvuekuuWGheWuue+8iVxuXG4gICAgICAgICAgICAgICAgc2NhblR5cGU6ICdub3JtYWwnLCAvLyBub3JtYWwg6buY6K6k77yI5aSn6KGo5Y2V77yJ77yMc2luZ2xl77yI6KGo5Y2V5Y+q5pi+56S65Y2V5Liq5Yy65Z2X77yM5LiK5pa55pi+56S65omA5pyJ5Yy65Z2X55qE5oyJ6ZKu57uE77yJXG4gICAgICAgICAgICAgICAgc2luZ2xlU2NhbkJsb2NrOiAnJywgLy8g5Y2V5Liq5qih5byP5pe277yM5pi+56S65ZOq5Liq6KGo5Y2VXG5cbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiAnMS4wLjAnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkICgpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZpbGVkcyA9IHRoaXMuZmllbGRzO1xuXG4gICAgICAgICAgICB0aGlzLmluaXRGb3JtRGF0YSgpO1xuICAgICAgICAgICAgLy8g5Yqg6L295Yid5aeL5oOF5Ya15LiL77yM6buY6K6k56aB55So55qE6KaB57SgXG4gICAgICAgICAgICB0aGlzLmdldERlZmF1bHREaXNhYmxlTGlzdCgpO1xuICAgICAgICAgICAgLy8g6buY6K6k6ZqQ6JePXG4gICAgICAgICAgICB0aGlzLmdldERlZmF1bHRIaWRkZW5MaXN0KCk7XG4gICAgICAgICAgICAvLyDliqjmgIHliqDovb3pnIDopoHmlbDmja7lrZflhbjnmoTpgInpoblcbiAgICAgICAgICAgIHRoaXMubG9hZER5bmFtaWNTZWxlY3RPcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRTdGF0dXMoKTtcblxuICAgICAgICAgICAgLy8g55CG6K665LiK77yM5LiN5bqU6K+l5Yqo5oCB5re75YqgIGZpbGVkc+OAguWwvemHjyBmaWVsZHMg6YCa6L+H5LqL5Lu277yM5YaF6YOo5o6n5Yi26Ieq5bex5piv5ZCm5pi+56S6XG4gICAgICAgICAgICB0aGlzLiR3YXRjaCgnZmllbGRzJywgKHYpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGaWxlZHMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEZpbGVkcyA9IHY7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGVmYXVsdERpc2FibGVMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGVmYXVsdEhpZGRlbkxpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkRHluYW1pY1NlbGVjdE9wdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0Rm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0U3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ2RhdGEnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0Rm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTdGF0dXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcm92aWRlICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZHluYW1pY1NlbGVjdE9wdGlvbjogdGhpcy5keW5hbWljU2VsZWN0T3B0aW9uLFxuICAgICAgICAgICAgICAgIGR5bmFtaWNEaWN0OiB0aGlzLmR5bmFtaWNEaWN0LFxuICAgICAgICAgICAgICAgIC8vIOeKtuaAgeWIh+aNouWHveaVsFxuICAgICAgICAgICAgICAgIHN0YXR1c0NoYW5nZUZuOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOiuvue9ruS4uuemgeeUqFxuICAgICAgICAgICAgICAgICAgICBzZXRFbGVtZW50RGlzYWJsZTogdGhpcy5zZXRFbGVtZW50RGlzYWJsZSxcbiAgICAgICAgICAgICAgICAgICAgLy8g6K6+572u5Li66ZqQ6JePXG4gICAgICAgICAgICAgICAgICAgIHNldEVsZW1lbnRIaWRkZW46IHRoaXMuc2V0RWxlbWVudEhpZGRlbixcbiAgICAgICAgICAgICAgICAgICAgLy8g6K6+572u5Li65b+F5aGrXG4gICAgICAgICAgICAgICAgICAgIHNldEVsZW1lbnRSZXF1aXJlZDogdGhpcy5zZXRFbGVtZW50UmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgIC8vIOabtOaWsOWFtuS7luaVsOaNrlxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtRGF0YTogdGhpcy51cGRhdGVGb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVVcGRhdGVFdmVudDogdGhpcy52YWx1ZVVwZGF0ZUV2ZW50LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8g5Lya5Yqo5oCB5Y+Y5YyW55qE5pWw5o2u77yI5rOo5oSP77yM5p2l6IeqIHByb3Bz44CQ5pu05LiK57qn57uE5Lu244CR55qE5pWw5o2u77yM5LiN6IO95pS+6L+Z5Liq6YeM6Z2i77yM5Y+q6IO95pi+5byP55qE6YCa6L+HIHByb3BzIOW+gOS4i+mdouS8oO+8iVxuICAgICAgICAgICAgICAgIGNoYW5nZURhdGE6IHRoaXMuY2hhbmdlRGF0YSxcbiAgICAgICAgICAgICAgICBmb3JtSXRlbVR5cGU6ICcnLFxuICAgICAgICAgICAgICAgIGNoaWxkQ2hhbmdlRGF0YToge31cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICB0ZXh0TW9kZWwgKG4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5jaGFuZ2VEYXRhLCAndGV4dE1vZGVsJywgbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC8vIOebkeWQrOWAvOabtOaWsFxuICAgICAgICAgICAgdmFsdWVVcGRhdGVFdmVudCAocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlVmFsdWUnLCBwYXJhbXMpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g5Yid5aeL5YyWIGZvcm1EYXRhIOeahOWAvFxuICAgICAgICAgICAgaW5pdEZvcm1EYXRhICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcywgJ2Zvcm1EYXRhJywge30pO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbml0Rm9ybURhdGEnKTtcbiAgICAgICAgICAgICAgICAvLyDnlKggZmlsZWRzIOWIneWni+WMliBmb3JtRGF0YSDnmoQga2V5XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmNoaWxkcmVuICYmIGZpZWxkcy5jaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMuY2hpbGRyZW4uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aSE55CG5Yid5aeL5YC855qE6Zeu6aKYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMS4g5aaC5p6c6K+l5YC85ZyoIGRhdGEg6YeM77yM5YiZ55u05o6l5Y+WIGRhdGEg6YeM55qE5YC877yI6Z2i5a+55Zy65pmv77ya5pWw5YC85Zue5pi+77yJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmtleSBpbiB0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuZm9ybURhdGEsIGZpZWxkLmtleSwgdGhpcy5kYXRhW2ZpZWxkLmtleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDotYvlgLzpu5jorqTlgLznmoTml7blgJnvvIzop6blj5Hkuovku7bpgJrnn6XkuIrnuqdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZVVwZGF0ZUV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZC5rZXldOiB0aGlzLmRhdGFbZmllbGQua2V5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMi4g5LiN6ZyA6KaB5Zue5pi+55qE5Zy65pmv5LiLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIuMSDlpoLmnpzor6XopoHntKDmnInpu5jorqTlgLzvvIzliJnkvb/nlKjpu5jorqTlgLxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuZm9ybURhdGEsIGZpZWxkLmtleSwgZmllbGQuZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi1i+WAvOm7mOiupOWAvOeahOaXtuWAme+8jOinpuWPkeS6i+S7tumAmuefpeS4iue6p1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZVVwZGF0ZUV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGQua2V5XTogZmllbGQuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAyLjIg6K+l6KaB57Sg5rKh5pyJ6buY6K6k5YC877yM5L2/55So6YCa55So6buY6K6k5YC8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoaWxkLWZvcm0nIHx8IGZpZWxkLnR5cGUgPT09ICd0YWJsZS1yZWFkb25seScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5mb3JtRGF0YSwgZmllbGQua2V5LCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdhcmVhLXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5mb3JtRGF0YSwgZmllbGQua2V5LCBbICcnLCAnJywgJycgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmZvcm1EYXRhLCBmaWVsZC5rZXksICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDojrflj5bliJ3lp4vmg4XlhrXkuIvvvIzmiYDmnInpu5jorqTnpoHnlKjopoHntKBcbiAgICAgICAgICAgIGdldERlZmF1bHREaXNhYmxlTGlzdCAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzYWJsZUxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyDpgY3ljobkvKDlhaXnmoTmlbDmja5cbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZpZWxkcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZHMuY2hpbGRyZW4gJiYgZmllbGRzLmNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5jaGlsZHJlbi5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK90cnVl77yM5YiZ5re75Yqg5Yiw56aB55So5YiX6KGo6YeMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmRpc2FibGVEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVMaXN0LnB1c2goZmllbGQua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEYXRhLmRpc2FibGVMaXN0ID0gZGlzYWJsZUxpc3Q7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDpu5jorqTpmpDol49cbiAgICAgICAgICAgIGdldERlZmF1bHRIaWRkZW5MaXN0ICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRkZW5MaXN0ID0gW107XG4gICAgICAgICAgICAgICAgLy8g6YGN5Y6G5Lyg5YWl55qE5pWw5o2uXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmNoaWxkcmVuICYmIGZpZWxkcy5jaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMuY2hpbGRyZW4uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5pivdHJ1Ze+8jOWImea3u+WKoOWIsOemgeeUqOWIl+ihqOmHjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5oaWRkZW5EZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbkxpc3QucHVzaChmaWVsZC5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURhdGEuaGlkZGVuS2V5TGlzdCA9IGhpZGRlbkxpc3Q7XG4gICAgICAgICAgICB9LFxuXG5cbiAgICAgICAgICAgIC8vIOWvueS4gOS4qiBibG9jayDkuIvnmoTopoHntKDvvIzov5vooYwgZWwtcm93IOeahOWIhuihjFxuICAgICAgICAgICAgZ2V0RmllbGRSb3cgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgLy8g5LiA5Liq5LqM57u05pWw57uE77yM5q+P5Liq5pWw57uE6KaB57Sg5pivIGVsLXJvdyDnmoTkuIDooYxcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gW107XG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5b2T5YmN6KaB57Sg5LiN5pi+56S677yM5YiZ55u05o6l6Lez6L+HXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Nob3coaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U3BhbiA9IHRoaXMuZ2V0Q29sU2l6ZShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5Yid5aeL5Li656m6XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPluWIsOS7luacieWkmuWwkSBzcGFu77yM5ruhIDI0IOS4uuS4gOihjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW46IGN1cnJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0l0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFsgb2JqIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWIneWni+S4jeS4uuepuu+8jFxuICAgICAgICAgICAgICAgICAgICAvLyAx44CB5Yik5pat5pyJ5rKh5pyJ5omT5byAIO+8iOW9k+WJjei/meS4queahO+8ieOAkOm7mOiupOWcqOaWsOihjOesrOS4gOWIl+OAkeW8gOWFs1xuICAgICAgICAgICAgICAgICAgICAvLyDlj4jmiJbogIXmmK/lvZPliY3mmK/kuI3mmK/lrZDooajljZXvvIhpdGVtLnR5cGUgPT09ICdjaGlsZC1mb3JtJ+ihqOekuuaYr+WtkOihqOWNle+8iVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5uZXh0Um93Rmlyc3QgfHwgaXRlbS50eXBlID09PSAnY2hpbGQtZm9ybScgfHwgaXRlbS50eXBlID09PSAndGFibGUtcmVhZG9ubHknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK/mlrDooYznrKzkuIDliJfvvIzpgqPkuYjnm7TmjqXmiorov5nkuKrmt7vliqDliLAgbGlzdCDph4zpnaJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDojrflj5bliLDku5bmnInlpJrlsJEgc3Bhbu+8jOa7oSAyNCDkuLrkuIDooYxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuOiBjdXJyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dJdGVtOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChbIG9iaiBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAy44CB5Yik5pat77yI5LiK5LiA5Liq77yJ44CQ6buY6K6k5piv5pys6KGM5pyA5ZCO5LiA5YiX44CR5byA5YWz5piv5ZCm5omT5byAXG4gICAgICAgICAgICAgICAgICAgIC8vIOWFiOaLv+WIsOacgOWQjuS4gOihjFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0TGFzdEl0ZW0gPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIC8vIOeahOacgOWQjuS4gOS4quaYr+WQpuaJk+W8gOS6hui/meS4quW8gOWFs1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdExhc3RJdGVtW2xpc3RMYXN0SXRlbS5sZW5ndGggLSAxXS5yb3dJdGVtLmN1cnJlbnRSb3dMYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmiZPlvIDov5nkuKrlvIDlhbPvvIzpgqPkuYjlvZPliY3ov5nkuKrnm7TmjqXmlL7liLDkuIvkuIDooYznmoTnrKzkuIDkuKpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDojrflj5bliLDku5bmnInlpJrlsJEgc3Bhbu+8jOa7oSAyNCDkuLrkuIDooYxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuOiBjdXJyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dJdGVtOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChbIG9iaiBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIOS4i+aLieato+W4uOiuoeeulyBzcGFuIOadpeWGs+WumuaYr+WQpuaNouihjFxuICAgICAgICAgICAgICAgICAgICAvLyDpgqPkuYjorqHnrpcgbGlzdCDmnIDlkI7kuIDkuKrmlbDnu4Tph4zpnaLmiYDmnInliqDotbfmnaXnmoQgc3BhbiDnmoTlgLxcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdFRvdGFsU3BhbiA9IGxpc3RbbGlzdC5sZW5ndGggLSAxXS5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0+IGl0ZW0uc3BhbikucmVkdWNlKChsYXN0VG90YWwsIGN1cnJlbnRJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGFzdFRvdGFsICsgY3VycmVudEl0ZW07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOW3sue7j+Wkp+S6juetieS6jiAyNCDkuobvvIzor7TmmI7mu6HkuobkuIDooYzvvIzpgqPkuYjnm7TmjqXliJvlu7rmlrDooYxcbiAgICAgICAgICAgICAgICAgICAgLy8g5oiW6ICF5piv5b2T5YmN6L+Z5Liq5Yqg5LmL5YmN55qE5aSn5LqOIDI077yM6YKj5LmI6K+05piO6L+Z5Liq5pS+5Zyo5LmL5YmN6YKj6KGM6LaF6L+HIDI077yM5omA5Lul5Lmf6KaB5pS+5Yiw5paw6KGM5Y67XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0VG90YWxTcGFuID49IDI0IHx8IGxhc3RUb3RhbFNwYW4gKyBjdXJyZW50U3BhbiA+IDI0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5Yiw5LuW5pyJ5aSa5bCRIHNwYW7vvIzmu6EgMjQg5Li65LiA6KGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbjogY3VycmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93SXRlbTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goWyBvYmogXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmraTml7bor7TmmI7lvZPliY3ov5nkuKrlj6/ku6XmlL7liLDkuYvliY3lk6rkuIDooYxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDojrflj5bliLDku5bmnInlpJrlsJEgc3Bhbu+8jOa7oSAyNCDkuLrkuIDooYxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuOiBjdXJyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dJdGVtOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RbbGlzdC5sZW5ndGggLSAxXS5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIOiuvue9ruafkOS4quimgee0oOemgeeUqFxuICAgICAgICAgICAgLy8ga2V577ya5pON5L2c55qEIGtleVxuICAgICAgICAgICAgLy8gYmVEaXNhYmxl77ya5b+F5aGr77yM6buY6K6k5pivIHRydWXvvIzooajnpLrnpoHnlKjjgILogIwgZmFsc2XvvIzooajnpLrlj5bmtojnpoHnlKhcbiAgICAgICAgICAgIHNldEVsZW1lbnREaXNhYmxlIChrZXksIGJlRGlzYWJsZSA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyDorr7nva7npoHnlKhcbiAgICAgICAgICAgICAgICBpZiAoYmVEaXNhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOW3sue7j+emgeeUqOS6hu+8jOWImei3s+i/h+OAguWQpuWImeWImea3u+WKoOi/m+WOu1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2VEYXRhLmRpc2FibGVMaXN0LmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGF0YS5kaXNhYmxlTGlzdC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDlj5bmtojnpoHnlKhcbiAgICAgICAgICAgICAgICAgICAgLy8g5pyq56aB55So5YiZ6Lez6L+H44CC5bey57uP56aB55So77yM5YiZ57un57utXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGFuZ2VEYXRhLmRpc2FibGVMaXN0LmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGF0YS5kaXNhYmxlTGlzdCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmNoYW5nZURhdGEuZGlzYWJsZUxpc3Quc2xpY2UoMCwgaW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuY2hhbmdlRGF0YS5kaXNhYmxlTGlzdC5zbGljZShpbmRleCArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g6K6+572u5p+Q5Liq6KaB57Sg6ZqQ6JePXG4gICAgICAgICAgICAvLyBrZXnvvJrmk43kvZznmoQga2V5XG4gICAgICAgICAgICAvLyBiZUhpZGRlbu+8muW/heWhq++8jOm7mOiupOaYryB0cnVl77yM6KGo56S66ZqQ6JeP44CC6ICMIGZhbHNl77yM6KGo56S65Y+W5raI6ZqQ6JePXG4gICAgICAgICAgICBzZXRFbGVtZW50SGlkZGVuIChrZXksIGJlSGlkZGVuID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIOiuvue9rumakOiXj1xuICAgICAgICAgICAgICAgIGlmIChiZUhpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAvLyDlt7Lnu4/npoHnlKjkuobvvIzliJnot7Pov4fjgILlkKbliJnliJnmt7vliqDov5vljrtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hhbmdlRGF0YS5oaWRkZW5LZXlMaXN0LmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGF0YS5oaWRkZW5LZXlMaXN0LnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWPlua2iOemgeeUqFxuICAgICAgICAgICAgICAgICAgICAvLyDmnKrnpoHnlKjliJnot7Pov4fjgILlt7Lnu4/npoHnlKjvvIzliJnnu6fnu61cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNoYW5nZURhdGEuaGlkZGVuS2V5TGlzdC5pbmRleE9mKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURhdGEuaGlkZGVuS2V5TGlzdCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmNoYW5nZURhdGEuaGlkZGVuS2V5TGlzdC5zbGljZSgwLCBpbmRleCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5jaGFuZ2VEYXRhLmhpZGRlbktleUxpc3Quc2xpY2UoaW5kZXggKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIOiuvue9ruafkOS4quimgee0oOW/heWhq1xuICAgICAgICAgICAgLy8ga2V577ya5pON5L2c55qEIGtleVxuICAgICAgICAgICAgLy8gYmVIaWRkZW7vvJrlv4XloavvvIzpu5jorqTmmK8gdHJ1Ze+8jOihqOekuumakOiXj+OAguiAjCBmYWxzZe+8jOihqOekuuWPlua2iOmakOiXj1xuICAgICAgICAgICAgc2V0RWxlbWVudFJlcXVpcmVkIChrZXksIGJlUmVxdWlyZWQgPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy8g6K6+572u5b+F5aGrXG4gICAgICAgICAgICAgICAgaWYgKGJlUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5YWI5om+5Yiw6L+Z5Liq6KaB57Sg77yM5aaC5p6c5YW25pys6Lqr5b+F5aGr77yM5YiZ6Lez6L+H44CCXG4gICAgICAgICAgICAgICAgICAgIC8vIOmBjeWOhuS8oOWFpeeahOaVsOaNrlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZpZWxkcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmNoaWxkcmVuICYmIGZpZWxkcy5jaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLmNoaWxkcmVuLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpwga2V5IOS4jeWMuemFje+8jOWImei3s+i/h1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQua2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlhYjliKTmlq3mnInmsqHmnIkgcnVsZXMg6L+Z5Liq5bGe5oCn77yM5rKh5pyJ5YiZ5re75Yqg6L+Z5Liq5bGe5oCn77yM5bm25LiU5re75Yqg5b+F5aGr6aG554S25ZCO6L+U5ZueXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmllbGQucnVsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldChmaWVsZCwgJ3J1bGVzJywgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnOiAn6K+36L6T5YWlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RyaWdnZXInOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmx1cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hhbmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDpgY3ljoYg5YW2IHJ1bGVz77yMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtydWxlc30gPSBmaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5piv5ZCm5pyJIHJlcXVpcmVkIOi/meadoeinhOWImVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGF2ZVJlcXVpcmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaYr+WQpuW3suS/ruaUuVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlcy5mb3JFYWNoKHJ1bGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5pyJIHJlcXVpcmVkIOWxnuaAp1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdyZXF1aXJlZCcgaW4gcnVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVSZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5YC85Li6IHRydWXvvIzliJnot7Pov4dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVsZS5yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5ZCm5YiZ5L+u5pS55YW25Li6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOW3suS/ruaUue+8jOmCo+S5iOivtOaYjuayoeW/heimgee7p+e7reaTjeS9nOS6hu+8jOi3s+i/h1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOayoeS/ruaUue+8jOW5tuS4lOayoeacieW/heWhq+inhOWImVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDvvIjms6jmhI/vvIzlpoLmnpzmnInop4TliJnvvIzpgqPkuYjlv4XnhLblt7Lkv67mlLnjgILmiYDku6Xlj6rlrZjlnKjmnInop4TliJnlt7Lkv67mlLnjgIHmnKrkv67mlLnmnInop4TliJnjgIHmnKrkv67mlLnml6Dop4TliJnkuInnp43mg4XlhrXvvIlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXZlUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOa3u+WKoOinhOWImVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JlcXVpcmVkJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZSc6ICfor7fovpPlhaUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0cmlnZ2VyJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmx1cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5Y+W5raI5b+F5aGrXG4gICAgICAgICAgICAgICAgICAgIC8vIOS4jeWQq+W/heWhq+inhOWImeeahOivne+8jOWImei3s+i/h+OAguWmguaenOWQq+W/heWhq+inhOWIme+8jOWImea3u+WKoFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZpZWxkcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmNoaWxkcmVuICYmIGZpZWxkcy5jaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLmNoaWxkcmVuLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpwga2V5IOS4jeWMuemFje+8jOWImei3s+i/h1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQua2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWFiOWIpOaWreacieayoeaciSBydWxlcyDov5nkuKrlsZ7mgKfvvIzmsqHmnInliJnmt7vliqDov5nkuKrlsZ7mgKfvvIzlubbkuJTmt7vliqDlv4XloavpobnnhLblkI7ov5Tlm55cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZC5ydWxlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOacie+8jOWImemBjeWOhuW5tuWIoOmZpFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5ydWxlcy5mb3JFYWNoKChydWxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdyZXF1aXJlZCcgaW4gcnVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQucnVsZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIOWIneWni+WMluimgee0oOeahCDpmpDol48v5pi+56S644CB56aB55SoL+mdnuemgeeUqCDnirbmgIHnrYlcbiAgICAgICAgICAgIC8vIOWcqOeItue7hOS7tiBkYXRhIOabtOaWsOeahOaXtuWAme+8jOiwg+eUqOi/meS4quaWueazlVxuICAgICAgICAgICAgaW5pdFN0YXR1cyAoKSB7XG4gICAgICAgICAgICAgICAgLy8g6YGN5Y6G5Lyg5YWl55qE5pWw5o2uXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmNoaWxkcmVuICYmIGZpZWxkcy5jaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMuY2hpbGRyZW4uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5pyJ6IGU5Yqo6aG577yM6YKj5LmI5YiZ6YGN5Y6G5q+P5Liq6IGU5Yqo6aG5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnZhbHVlTGluayAmJiBmaWVsZC52YWx1ZUxpbmsubGVuZ3RoICYmIGZpZWxkLnZhbHVlTGluay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtrZXl9ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YGN5Y6GXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnZhbHVlTGluay5mb3JFYWNoKGxpbmtJdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOiBlOWKqOmhueeahOinpuWPkeWAvOS4jeWMuemFje+8jOWImei3s+i/h+i/meS4gOadoVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT09IGxpbmtJdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5q2k5pe25Yy56YWN77yM5Yik5patIGxpbmtMaXN0IOacieayoeaciVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmtJdGVtLmxpbmtMaXN0ICYmIGxpbmtJdGVtLmxpbmtMaXN0Lmxlbmd0aCAmJiBsaW5rSXRlbS5saW5rTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YaN6YGN5Y6GXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua0l0ZW0ubGlua0xpc3QuZm9yRWFjaCh0cmlnZ2VySXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmtLZXkgPSB0cmlnZ2VySXRlbS5saW5rS2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmsqHmnInogZTliqgga2V577yM5YiZ6Lez6L+H77yI5q2j5bi45p2l6K+077yM5LiN5Lya5rKh5pyJ77yJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbGlua0tleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOiBlOWKqOWAvO+8jOWImeabtOaWsOWAvFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJpZ2dlckl0ZW0uZW5hYmxlTGlua1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZvcm1EYXRhKHtbbGlua0tleV06IHRyaWdnZXJJdGVtLmxpbmtWYWx1ZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOiBlOWKqOemgeeUqC/lj5bmtojnpoHnlKjvvIzliJnmm7TmlrDnpoHnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyaWdnZXJJdGVtLmVuYWJsZUxpbmtEaXNhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnREaXNhYmxlKGxpbmtLZXksIHRyaWdnZXJJdGVtLmxpbmtEaXNhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzogZTliqjpmpDol48v5pi+56S677yM5YiZ5pu05pawXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmlnZ2VySXRlbS5lbmFibGVMaW5rSGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRIaWRkZW4obGlua0tleSwgdHJpZ2dlckl0ZW0ubGlua0hpZGRlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c6IGU5Yqo5b+F5aGrL+mdnuW/heWhq++8jOWImeabtOaWsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJpZ2dlckl0ZW0uZW5hYmxlTGlua1JlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRSZXF1aXJlZChsaW5rS2V5LCB0cmlnZ2VySXRlbS5saW5rUmVxdWlyZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDmib7liLAgdHlwZT1cImR5bmFtaWMtc2VsZWN0XCIg6I635Y+W5omA5pyJIHBhcmVudENvZGXvvIznhLblkI7or7vlj5bmlbDmja7lrZflhbjmjqXlj6Pmi4nlj5blr7nlupTnmoTmlbDmja5cbiAgICAgICAgICAgIC8vIHRvZG8g6L+Z6YeM55qE5pWw5o2u5a2X5YW46K+35rGC5o6l5Y+j77yM5bqU6K+l5pyA5ZCO5ZCI5bm25Yiw5LiA6LW377yM55Sx5LiA5Liq5LiT6Zeo55qE5pWw5o2u5a2X5YW46K+35rGC566h55CG5Zmo5Y676K+35rGC77yM5YeP5L2O5o6l5Y+j6YeN5aSN6K+35rGC55qE5oOF5Ya1XG4gICAgICAgICAgICBsb2FkRHluYW1pY1NlbGVjdE9wdGlvbnMgKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudENvZGVMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgLy8g6YGN5Y6G5Lyg5YWl55qE5pWw5o2uXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmNoaWxkcmVuICYmIGZpZWxkcy5jaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMuY2hpbGRyZW4uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdkeW5hbWljLXNlbGVjdCcgJiYgZmllbGQucGFyZW50S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWGjeWBmuS4gOasoeWOu+mHjeWIpOaWreOAguWmguaenOivpeWtl+WFuOW3sue7j+WcqOmHjOmdouS6hu+8jOWGjei3s+i/h+i/meS4gOS4qlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Q29kZUxpc3QuaW5kZXhPZihmaWVsZC5wYXJlbnRLZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5keW5hbWljRGljdFtmaWVsZC5wYXJlbnRLZXldICYmIHRoaXMuZHluYW1pY0RpY3RbZmllbGQucGFyZW50S2V5XS5sZW5ndGggIT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29kZUxpc3QucHVzaChmaWVsZC5wYXJlbnRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIneWni+WMluS4gOS4quaVsOe7hFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmR5bmFtaWNEaWN0LCBmaWVsZC5wYXJlbnRLZXksIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlnLDljLrpgInmi6nmoYbvvIzkuInnuqfogZTliqhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2FyZWEtc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFBhcmVudEtleSA9IGZpZWxkLmZpcnN0UGFyZW50S2V5IHx8ICcxMDAyMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZFBhcmVudEtleSA9IGZpZWxkLmZpcnN0UGFyZW50S2V5IHx8ICcxMDAyMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoaXJkUGFyZW50S2V5ID0gZmllbGQuZmlyc3RQYXJlbnRLZXkgfHwgJzEwMDIyJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudENvZGVMaXN0LmluZGV4T2YoZmlyc3RQYXJlbnRLZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5keW5hbWljRGljdFtmaXJzdFBhcmVudEtleV0gJiYgdGhpcy5keW5hbWljRGljdFtmaXJzdFBhcmVudEtleV0ubGVuZ3RoICE9PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENvZGVMaXN0LnB1c2goZmlyc3RQYXJlbnRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmR5bmFtaWNEaWN0LCBmaXJzdFBhcmVudEtleSwgW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDb2RlTGlzdC5pbmRleE9mKHNlY29uZFBhcmVudEtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLmR5bmFtaWNEaWN0W3NlY29uZFBhcmVudEtleV0gJiYgdGhpcy5keW5hbWljRGljdFtzZWNvbmRQYXJlbnRLZXldLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb2RlTGlzdC5wdXNoKHNlY29uZFBhcmVudEtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuZHluYW1pY0RpY3QsIHNlY29uZFBhcmVudEtleSwgW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDb2RlTGlzdC5pbmRleE9mKHRoaXJkUGFyZW50S2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMuZHluYW1pY0RpY3RbdGhpcmRQYXJlbnRLZXldICYmIHRoaXMuZHluYW1pY0RpY3RbdGhpcmRQYXJlbnRLZXldLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb2RlTGlzdC5wdXNoKHRoaXJkUGFyZW50S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5keW5hbWljRGljdCwgdGhpcmRQYXJlbnRLZXksIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudENvZGVMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g6YCa6L+H54i2IGtleSDmi7/liLDmiYDmnInlhYPntKBcbiAgICAgICAgICAgICAgICBsZXQgcGF5bG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8g6L+Z6YeM5Yik5pat5piv5LiN5pivIGF4aW9zIOeahOm7mOiupOi/lOWbnuaVsOaNru+8iOacque7j+i/h+ivt+axguaLpuaIquWZqOWkhOeQhueahO+8iVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmR5bmFtaWNTZWxlY3RPcHRpb24ucXVlcnlLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLmR5bmFtaWNTZWxlY3RPcHRpb24ucXVlcnlLZXldOiBwYXJlbnRDb2RlTGlzdFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQgPSBwYXJlbnRDb2RlTGlzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1d0aUZvcm0g5ouJ5Y+W5Yqo5oCB5a2X5YW4Jyk7XG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCh0aGlzLmR5bmFtaWNTZWxlY3RPcHRpb24uZGljdFVybCwgcGF5bG9hZCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyDlhbzlrrnmgKflpITnkIZcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVxdWVzdCAmJiByZXMuaGVhZGVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWboOS4uuWPr+iDveWkmuS4quWcsOaWueWQjOaXtuiwg+i/meS4quaOpeWPo+eahOWOn+WboO+8jOS4uuS6humBv+WFjemHjeWkjeWwhuWGheWuuea3u+WKoOWIsOmHjOmdou+8jOaJgOS7pe+8jFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi/memHjOWcqOi1i+WAvOS5i+WJje+8jOmcgOimgeWFiOWIpOaWreS4gOS4iyBwYXJlbnRDb2RlTGlzdCDnmoTmr4/kuKrlgLzvvIzlhbblr7nlupTnmoQgZHluYW1pY0RpY3Qg6YeM55qE5ZOq5LiA5Liq5pWw57uE77yM5piv5ZCm5piv56m655qEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5LiN5piv56m655qE77yM5YiZ5bCG5YW2572u5Li656m65pWw57uEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29kZUxpc3QuZm9yRWFjaChwQ29kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmR5bmFtaWNEaWN0W3BDb2RlXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5keW5hbWljRGljdCwgcENvZGUsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yqg6L295Yiw57uT5p6cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5kYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeUqOavj+S4qui/lOWbnuWAvOeahCBwQ29kZSDkvZzkuLoga2V577yM5bCG6K+l6aG55re75Yqg5Yiw5pWw57uE6YeM44CCXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOazqO+8muS5i+aJgOS7peaYr+aVsOe7hO+8jOaYr+WboOS4uuS5i+WJjeW3sue7j+WIneWni+WMlui/h+S6hu+8iHBhcmVudEtleSDkuLogQ29kZe+8iVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwQ29kZSA9IGl0ZW1bdGhpcy5keW5hbWljU2VsZWN0T3B0aW9uLnBhcmVudEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY0RpY3RbcENvZGVdLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRtZXNzYWdlLmVycm9yKGRhdGEubXNnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbWVzc2FnZS5lcnJvcign5pWw5o2u5a2X5YW45Yqg6L296ZSZ6K+v77yM6K+35Yi35paw6aG16Z2i6YeN6K+VJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDmuIXnqbrmoKHpqozkv6Hmga9cbiAgICAgICAgICAgIGNsZWFyVmFsaWRhdGUgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZm9ybS5jbGVhclZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDojrflj5bov4fmu6TlkI7nmoTmlbDmja5cbiAgICAgICAgICAgIGdldERhdGEgKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSB7fTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmZvcm1EYXRhKS5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6LWw5q2j5bi46YC76L6RXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYW5nZURhdGEuaGlkZGVuS2V5TGlzdC5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOi/memHjOWIhuS4uuS4pOenjeaDheWGte+8mlxuICAgICAgICAgICAgICAgICAgICAvLyDnrKzkuIDnp43mmK/kuIDnuqfooajljZXnmoTlhYPntKDvvIzku5blnKjooqvpmpDol4/ml7bvvIxrZXnmmK/lj6/ku6Xnm7TmjqXku44gaGlkZGVuS2V5TGlzdCDojrflj5bnmoRcbiAgICAgICAgICAgICAgICAgICAgLy8g56ys5LqM56eN5piv5a2Q6KGo5Y2V55qE5YWD57Sg44CC5Zug5Li65LuW55qEIGtleSDmmK/kuInmrrXmi7zmjqXotbfmnaXnmoQga2V577yM5omA5Lul6KaB5Y675a2Q6KGo5Y2V6YeM5ou/5YiwIHJhbmRvbUlkIOWGjeWBmuS4gOS4quaYoOWwhFxuICAgICAgICAgICAgICAgICAgICAvLyDmn5DkuKrlsZ7mgKfmmK/lkKbmmK/lrZDooajljZXnmoTliKTmlq3mnaHku7bmmK/vvJrpgY3ljoYgZmllbGRz77yM5Yik5pat5LuW5piv5ZCm5pivIHR5cGUgPT09ICdjaGlsZC1mb3JtJ1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRGb3JtS2V5c0xpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWFwKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoaWxkcmVuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2NoaWxkLWZvcm0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChpdGVtLmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgICAgICAgICAgICAgICAgfSkuZmlsdGVyKGxpc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3QubGVuZ3RoID4gMDtcbiAgICAgICAgICAgICAgICAgICAgfSkuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRm9ybUtleXNMaXN0ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNoaWxkRm9ybUtleXNMaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRGb3JtS2V5c0xpc3QuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOivtOaYjuaYr+WcqOWtkOihqOWNlVxuICAgICAgICAgICAgICAgICAgICAgICAgZFtrZXldID0gdGhpcy4kcmVmc1trZXldWzBdLmNoaWxkRm9ybUZpbGVkcy5tYXAoKGNoaWxkRmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGREID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge3JhbmRvbUlkfSA9IGNoaWxkRmllbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRGaWVsZC5mb3JFYWNoKGNoaWxkSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkS2V5ID0gY2hpbGRJdGVtLmtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5VGV4dCA9IGAke2tleX1fJHtyYW5kb21JZH1fJHtjaGlsZEtleX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2VEYXRhLmhpZGRlbktleUxpc3QuaW5kZXhPZihrZXlUZXh0KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZERbY2hpbGRLZXldID0gdGhpcy5mb3JtRGF0YVtrZXldW2luZGV4XVtjaGlsZEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGREO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDotbDmraPluLjpgLvovpFcbiAgICAgICAgICAgICAgICAgICAgICAgIGRba2V5XSA9IHRoaXMuZm9ybURhdGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g5qCh6aqM77yM5bm26I635Y+W5qCh6aqM5ZCO5pWw5o2uXG4gICAgICAgICAgICB2YWxpZGF0ZSAoZm4pIHtcbiAgICAgICAgICAgICAgICAvLyDlhYjmoKHpqozniLbnuqfooajljZXnmoTlgLxcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmZvcm0udmFsaWRhdGUoKHZhbGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWvueaVsOaNrui/m+ihjOi/h+a7pFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5Yik5pat5piv5ZCm6ZyA6KaB5qCh6aqM5a2Q6KGo5Y2VXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRm9ybUtleUxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWxlZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZWQuY2hpbGRyZW4gJiYgZmlsZWQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVkLmNoaWxkcmVuLmZvckVhY2goZm9ybUl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmn5DkuIDpobnmmK9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1JdGVtLnR5cGUgPT09ICdjaGlsZC1mb3JtJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRGb3JtS2V5TGlzdC5wdXNoKGZvcm1JdGVtLmtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkRm9ybUtleUxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbih0cnVlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4oZmFsc2UsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVMaXN0ID0gY2hpbGRGb3JtS2V5TGlzdC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmc1trZXldWzBdLnZhbGlkYXRlRm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCh2YWxpZGF0ZUxpc3QpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOeItuihqOWNleagoemqjOS5n+mAmui/h+S6hu+8jOaJjeeul+mDvemAmui/h1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbih0cnVlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlkKbliJnljbPkvb/lrZDooajljZXmoKHpqozpgJrov4fvvIzniLbooajljZXmoKHpqozmsqHpgJrov4fvvIzkuZ/mmK/nrpfkuI3pgJrov4fnmoRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4oZmFsc2UsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbihmYWxzZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g6YeN572u6KGo5Y2V5pWw5o2uXG4gICAgICAgICAgICByZXNldEZpZWxkcyAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5mb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWxlZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlZC5jaGlsZHJlbiAmJiBmaWxlZC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlZC5jaGlsZHJlbi5mb3JFYWNoKGZvcm1JdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmn5DkuIDpobnmmK9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUl0ZW0udHlwZSA9PT0gJ2NoaWxkLWZvcm0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSB0aGlzLiRyZWZzW2Zvcm1JdGVtLmtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbMF0ucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDooajljZXnu4Tku7bmmK/lkKbmmL7npLpcbiAgICAgICAgICAgIGlzU2hvdyAoaXRlbSkge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOivpeimgee0oOWcqOmakOiXj+WIl+ihqOmHjO+8jOWImeS4jeaYvuekulxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYW5nZURhdGEuaGlkZGVuS2V5TGlzdC5pbmRleE9mKGl0ZW0ua2V5KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDmm7TmlrDmlbDmja5cbiAgICAgICAgICAgIHVwZGF0ZUZvcm1EYXRhIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpwga2V5IOWcqOWAvOmHjOmdolxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5IGluIHRoaXMuZm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWImeWbnuWhq+i/meS4quWAvFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuZm9ybURhdGEsIGtleSwgZGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g5pS26LW3L+WxleW8gOWMuuWdl1xuICAgICAgICAgICAgZm9sZEJsb2NrIChibG9jaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gYmxvY2subGFiZWw7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZvbGRCbG9ja0xpc3QuaW5kZXhPZihsYWJlbCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvbGRCbG9ja0xpc3QucHVzaChibG9jay5sYWJlbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2xkQmxvY2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g5pS26LW35bGV5byA5omA5pyJ5Yy65Z2XXG4gICAgICAgICAgICBmb2xkQWxsQmxvY2sgKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goYmxvY2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmsqHmnIkgbGFiZWzvvIzliJnkuI3mlK/mjIHmlLbotbdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbExpc3QucHVzaChibG9jay5sYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzplb/luqbnm7jnrYnvvIzor7TmmI7lt7Lnu4/lhajpg6jmlLbotbfkuobvvIzpgqPkuYjlsLHmmK/lsZXlvIBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb2xkQmxvY2tMaXN0Lmxlbmd0aCA9PT0gbGFiZWxMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvbGRCbG9ja0xpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvbGRCbG9ja0xpc3QgPSBsYWJlbExpc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g5rWP6KeI5qih5byP5YiH5o2iXG4gICAgICAgICAgICBjaGFuZ2VTY2FuVHlwZSAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NhblR5cGUgPT09ICdub3JtYWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhblR5cGUgPSAnc2luZ2xlJztcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5YiH5o2i5Li65Y2V5L2T77yM6YKj5LmI5bCG5omA5pyJ6ZqQ6JeP55qE5pi+56S65Ye65p2lXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9sZEJsb2NrTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpbmdsZVNjYW5CbG9jayA9IHRoaXMuZmllbGRzWzBdLmxhYmVsO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhblR5cGUgPSAnbm9ybWFsJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVTY2FuQmxvY2sgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnZXRQcm9wcyAocm93SXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogcm93SXRlbS5rZXksXG4gICAgICAgICAgICAgICAgICAgIGl0ZW06IHJvd0l0ZW0sXG4gICAgICAgICAgICAgICAgICAgIGFsbERpc2FibGVkOiB0aGlzLmFsbERpc2FibGVkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIEZvcm1JbnB1dCxcbiAgICAgICAgICAgIEZvcm1EaWN0U2VsZWN0LFxuICAgICAgICAgICAgRm9ybURhdGUsXG4gICAgICAgICAgICBGb3JtSG91ck1pbnV0ZSxcbiAgICAgICAgICAgIEZvcm1EYXRlUmFuZ2UsXG4gICAgICAgICAgICBGb3JtTnVtYmVySW5wdXQsXG4gICAgICAgICAgICBGb3JtQXV0b0NvbXBsZXRlLFxuICAgICAgICAgICAgRm9ybVJhZGlvLFxuICAgICAgICAgICAgRm9ybVRleHRhcmVhLFxuICAgICAgICAgICAgRm9ybU5vcm1hbFNlbGVjdCxcbiAgICAgICAgICAgIEZvcm1Nb25leUlucHV0LFxuICAgICAgICAgICAgRm9ybVJhdGVJbnB1dCxcbiAgICAgICAgICAgIEZvcm1BcmVhU2VsZWN0LFxuICAgICAgICAgICAgRm9ybU11bExpbmthZ2UsXG4gICAgICAgICAgICBGb3JtTm9ybWFsTnVtYmVySW5wdXQsXG5cbiAgICAgICAgICAgIFRhYmxlUmVhZG9ubHksXG4gICAgICAgICAgICBDaGlsZEZvcm0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbiAgICAud3RpLWZvcm0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAuZWwtaW5wdXRfX2lubmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMzZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMkUzRTYgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9jay10aXRsZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuXG4gICAgICAgICAgICAvLyBsYWJlbCDlt6bovrnnmoTnuqLoibLnq5bnur9cbiAgICAgICAgICAgIC5ibG9jay1saW5lIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRUU0NzNBO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ibG9jay10ZXh0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNzNBO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmxvY2stZm9sZC1idG4ge1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIOW4pui+ueahhueahOihqOWNlee7hOS7tlxuICAgIC5ib3JkZXItZm9ybSB7XG4gICAgICAgIC5ibG9jay1pdGVtIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREUwRUE7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gICAgICAgICAgICAuYmxvY2stdGl0bGUge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZiO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMCAxOHB4IDI0cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ibG9jay10aXRsZSArIC5ibG9jay1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJsb2NrLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJsb2NrLWhpZGRlbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLmVsLWRpdmlkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNUY4O1xuICAgIH1cblxuICAgIC5zY2FuLXR5cGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAgICAgLmFsbC1mb2xkLWJ0biB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRUU0NzNBO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0VFNDczQTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcblxuICAgICAgICAgICAgLmFsbC1mb2xkLWljb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvY2stYnRuLWxpc3Qge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG5cbiAgICAgICAgICAgIC5ibG9jay1idG4ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREUwRUE7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMThweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzNBNDU2NjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmxvY2stYnRuLmZvY3VzIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRUU0NzNBO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmxvY2stYnRuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmxvY2stYnRuOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2Nhbi10eXBlLWJ0biB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQUVCM0JGO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgY29sb3I6ICMxMjE4MkE7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICAgICAgICAgIC5zY2FuLXR5cGUtaWNvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC53dGktZm9ybS12MiAvZGVlcC8gaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gICAgLnd0aS1mb3JtLXYyIC9kZWVwLyBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICB9XG5cbiAgICAud3RpLWZvcm0tdjIgL2RlZXAvIGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgfVxuXG4gICAgLnd0aS1mb3JtLXYyIC9kZWVwLyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgfVxuXG48L3N0eWxlPlxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzExNWY4ZjFkNjllMjQ0ZDVmMzJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=