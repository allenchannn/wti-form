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
      console.log('zzzz');
      this.$emit('update', params);
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
/******/ 	__webpack_require__.h = () => ("d50c2ac8f5f3f7b51594")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wOGQ2MDU5Y2I2NTE4NTZmNmY2NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSxpQkFEQTtBQUVBLDhEQUZBO0FBR0E7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFDQTtBQUNBO0FBSkEsS0FEQTtBQU9BO0FBQ0Esa0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQSxLQVBBO0FBYUE7QUFDQTtBQUNBLG1CQURBO0FBRUE7QUFGQSxLQWRBO0FBa0JBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBO0FBRkEsS0FuQkE7QUF1QkE7QUFDQTtBQUNBLG1CQURBO0FBRUE7QUFGQSxLQXhCQSxDQTRCQTs7QUE1QkEsR0FIQTtBQWlDQSxNQWpDQSxrQkFpQ0E7QUFDQTtBQUNBLGtCQURBO0FBR0EsdUJBSEE7QUFHQTtBQUVBO0FBQ0EscUJBTkE7QUFTQTtBQUFBO0FBQ0E7QUFDQSx1QkFGQTtBQUdBLHFDQUhBO0FBS0E7QUFDQTtBQUNBLHlCQVBBO0FBUUE7QUFSQSxPQVRBO0FBb0JBLHVCQXBCQTtBQW9CQTtBQUVBLHdCQXRCQTtBQXNCQTtBQUNBLHlCQXZCQTtBQXVCQTtBQUVBO0FBekJBO0FBMkJBLEdBN0RBO0FBOERBLFNBOURBLHFCQThEQTtBQUFBOztBQUNBO0FBRUEsd0JBSEEsQ0FJQTs7QUFDQSxpQ0FMQSxDQU1BOztBQUNB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QTZ4QkE7QUFDQTtBQUNBO0FBL3hCQTs7Ozs7Ozs7VUN6TEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93dGktZm9ybS1zb3VyY2UtY29kZS8uL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly93dGktZm9ybS1zb3VyY2UtY29kZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ3dGktZm9ybSB3dGktZm9ybS12MlwiIDpjbGFzcz1cInsnYm9yZGVyLWZvcm0nOiBib3JkZXJGb3JtfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2Nhbi10eXBlXCIgdi1pZj1cInNob3dBbGxGb2xkQnRuIHx8IHNob3dTY2FuVHlwZUJ0blwiPlxuICAgICAgICAgICAgPCEtLSDlhajpg6jmlLbotbflsZXlvIAgKyDmtY/op4jmqKHlvI/liIfmjaIgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxsLWZvbGQtYnRuXCIgdi1pZj1cInNob3dBbGxGb2xkQnRuICYmIHNjYW5UeXBlPT09J25vcm1hbCdcIiBAY2xpY2s9XCJmb2xkQWxsQmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHYtaWY9XCIhdGV4dE1vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgIHQ9XCIxNjI2ODM1OTg3NTg1XCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWxsLWZvbGQtaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcC1pZD1cIjIyNjRcIiB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjUxNFwiIGN5PVwiNTE0XCIgcj1cIjUxMlwiIHN0cm9rZT1cIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjUwXCIgZmlsbD1cIiNFRTQ3M0FcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTU0MS4xODQgNzMxLjk0MDU3MVYzNzMuNzZsMTY2LjMyNjg1NyAxNjguMzc0ODU3YTI5LjE0NzQyOSAyOS4xNDc0MjkgMCAxIDAgNDEuMTc5NDI5LTQxLjI4OTE0M2wtMjM3LjEyOTE0My0yMzcuNzUwODU3LTIzNi4wNjg1NzIgMjM2LjgzNjU3MmEyOC44MTgyODYgMjguODE4Mjg2IDAgMSAwIDM5LjYwNjg1OCA0MS44Mzc3MTRsMTY4Ljc0MDU3MS0xNjcuODk5NDI5djM1OC4xMDc0MjlhMjguNzA4NTcxIDI4LjcwODU3MSAwIDAgMCA1Ny4zNDQgMHpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIi8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAg5YWo6YOo5pS26LW3L+WxleW8gFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jay1idG4tbGlzdFwiIHYtaWY9XCJzaG93U2NhblR5cGVCdG4gJiYgc2NhblR5cGUgPT09ICdzaW5nbGUnXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiYmxvY2sgaW4gZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jay1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnZm9jdXMnOnNpbmdsZVNjYW5CbG9jayA9PT0gYmxvY2subGFiZWx9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiYmxvY2subGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIigpID0+IHNpbmdsZVNjYW5CbG9jayA9IGJsb2NrLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiYmxvY2subGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGJsb2NrLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjYW4tdHlwZS1idG5cIiB2LWlmPVwic2hvd1NjYW5UeXBlQnRuXCIgQGNsaWNrPVwiY2hhbmdlU2NhblR5cGVcIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHQ9XCIxNjI2ODM1OTg3NTg1XCIgY2xhc3M9XCJzY2FuLXR5cGUtaWNvblwiIHZpZXdCb3g9XCIwIDAgMjggMjhcIiB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwLWlkPVwiMjI2NFwiIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yIDYgTDkgMiBMOSAxMCBaIEwyNSA2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMxMjE4MkFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMxMjE4MkFcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTI2IDIyIEwxOSAxOCBMMTkgMjYgWiBMMiAyMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjMTIxODJBXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMTIxODJBXCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIOa1j+iniOaooeW8j+WIh+aNolxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxlbC1mb3JtIHJlZj1cImZvcm1cIlxuICAgICAgICAgICAgICAgICA6bW9kZWw9XCJmb3JtRGF0YVwiXG4gICAgICAgICAgICAgICAgIDpoaWRlLXJlcXVpcmVkLWFzdGVyaXNrPVwidGV4dE1vZGVsXCJcbiAgICAgICAgICAgICAgICAgOmxhYmVsLXdpZHRoPVwibGFiZWxXaWR0aCB8fCAnMTUwcHgnXCJcbiAgICAgICAgICAgICAgICAgOmxhYmVsLXBvc2l0aW9uPVwibGFiZWxQb3NpdGlvbiA/IGxhYmVsUG9zaXRpb24gOiAndG9wJ1wiPlxuICAgICAgICAgICAgPCEtLSDljLrlnZfnuqfvvIzmr4/kuKogZmlsZWQg5piv5LiA5Liq5Yy65Z2XIC0tPlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cImZpZWxkIGluIGN1cnJlbnRGaWxlZHNcIlxuICAgICAgICAgICAgICAgICA6a2V5PVwiZmllbGQubGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJzY2FuVHlwZSA9PT0gJ25vcm1hbCcgfHwgKHNjYW5UeXBlID09PSAnc2luZ2xlJyAmJiBzaW5nbGVTY2FuQmxvY2sgPT09IGZpZWxkLmxhYmVsKVwiXG4gICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJnZXRCbG9ja0NsYXNzKGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJmaWVsZC5zdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIOWMuuWdl+WQjSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmxvY2stdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jay1saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlkPVwiZmllbGQuaWQgfHwgU3RyaW5nKE1hdGgucmFuZG9tKCkqMTAwMDApXCI+e3sgZmllbGQubGFiZWwgfX08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2stZm9sZC1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImZvbGRCbG9ja0xpc3QuaW5kZXhPZihmaWVsZC5sYWJlbCk9PT0tMSAmJiBzaG93Rm9sZEJ0biAmJiAhdGV4dE1vZGVsICYmIHNjYW5UeXBlID09PSAnbm9ybWFsJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJmb2xkQmxvY2soZmllbGQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDmlLbotbcgPGkgY2xhc3M9XCJlbC1pY29uLWFycm93LXVwXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2stZm9sZC1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImZvbGRCbG9ja0xpc3QuaW5kZXhPZihmaWVsZC5sYWJlbCk+LTEgJiYgc2hvd0ZvbGRCdG4gJiYgIXRleHRNb2RlbCAmJiBzY2FuVHlwZSA9PT0gJ25vcm1hbCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZm9sZEJsb2NrKGZpZWxkKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5bGV5byAIDxpIGNsYXNzPVwiZWwtaWNvbi1hcnJvdy1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihyb3csIHJvd0luZGV4KSBpbiBnZXRGaWVsZFJvdyhmaWVsZC5jaGlsZHJlbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxlbC1yb3cgOmd1dHRlcj1cIjIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cInJvd0luZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jay1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydibG9jay1oaWRkZW4nOmZvbGRCbG9ja0xpc3QuaW5kZXhPZihmaWVsZC5sYWJlbCk+LTF9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwie3Jvd0l0ZW19IGluIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDprZXk9XCJyb3dJdGVtLmtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVsLWNvbCA6c3Bhbj1cImdldENvbFNpemUocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwicm93SXRlbS5rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJyb3dJdGVtLnN0eWxlIHx8IHt9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVsLWZvcm0taXRlbSB2LWlmPVwicm93SXRlbS50eXBlIT09J2NoaWxkLWZvcm0nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cInJvd0l0ZW0uc3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwicm93SXRlbS5jbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cnVsZXM9XCJyb3dJdGVtLnJ1bGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cImdldEZvcm1JdGVtTGFiZWwocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnByb3A9XCJyb3dJdGVtLmtleVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0IHYtaWY9XCJyb3dJdGVtLnR5cGU9PT0naW5wdXQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJnZXRQcm9wcyhyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybURhdGUgdi1pZj1cInJvd0l0ZW0udHlwZT09PSdkYXRlLWlucHV0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJnZXRQcm9wcyhyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSG91ck1pbnV0ZSB2LWlmPVwicm93SXRlbS50eXBlPT09J2hvdXItbWludXRlLWlucHV0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJnZXRQcm9wcyhyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRGF0ZVJhbmdlIHYtaWY9XCJyb3dJdGVtLnR5cGU9PT0nZGF0ZS1yYW5nZS1pbnB1dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJnZXRQcm9wcyhyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1EaWN0U2VsZWN0IHYtaWY9XCJyb3dJdGVtLnR5cGUgPT09ICdkeW5hbWljLXNlbGVjdCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiZ2V0UHJvcHMocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybU5vcm1hbFNlbGVjdCB2LWlmPVwicm93SXRlbS50eXBlID09PSAnbm9ybWFsLXNlbGVjdCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJnZXRQcm9wcyhyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1OdW1iZXJJbnB1dCB2LWlmPVwicm93SXRlbS50eXBlID09PSAnbnVtYmVyLWlucHV0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiZ2V0UHJvcHMocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSDliqjmgIHkuIvmi4nmoYbvvIzlhaXlj4LmmK/niLYga2V577yM5qC55o2u54i2IGtleSDoh6rliqjliqDovb3liJfooajlhoXlrrkgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQXV0b0NvbXBsZXRlIHYtaWY9XCJyb3dJdGVtLnR5cGUgPT09ICdhdXRvLWNvbXBsZXRlLWlucHV0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImdldFByb3BzKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVJhZGlvIHYtaWY9XCJyb3dJdGVtLnR5cGUgPT09ICdyYWRpbydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImdldFByb3BzKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtVGV4dGFyZWEgdi1pZj1cInJvd0l0ZW0udHlwZT09PSd0ZXh0YXJlYSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImdldFByb3BzKHJvd0l0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybU1vbmV5SW5wdXQgdi1pZj1cInJvd0l0ZW0udHlwZT09PSdtb25leS1pbnB1dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiZ2V0UHJvcHMocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVJhdGVJbnB1dCB2LWlmPVwicm93SXRlbS50eXBlPT09J3JhdGUtaW5wdXQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiZ2V0UHJvcHMocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQXJlYVNlbGVjdCB2LWlmPVwicm93SXRlbS50eXBlPT09J2FyZWEtc2VsZWN0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJnZXRQcm9wcyhyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTXVsTGlua2FnZSB2LWlmPVwicm93SXRlbS50eXBlPT09J211bC1saW5rYWdlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJnZXRQcm9wcyhyb3dJdGVtKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCJmb3JtRGF0YVtyb3dJdGVtLmtleV1cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTm9ybWFsTnVtYmVySW5wdXQgdi1pZj1cInJvd0l0ZW0udHlwZT09PSdub3JtYWwtbnVtYmVyJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1iaW5kPVwiZ2V0UHJvcHMocm93SXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2VsLWZvcm0taXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlsZEZvcm0gdi1pZj1cInJvd0l0ZW0udHlwZSA9PT0gJ2NoaWxkLWZvcm0nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0ZXh0LW1vZGVsPVwidGV4dE1vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZWY9XCJyb3dJdGVtLmtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWxsLWRpc2FibGVkPVwiYWxsRGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW09XCJyb3dJdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cImZvcm1EYXRhW3Jvd0l0ZW0ua2V5XVwiLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJlYWRvbmx5IHYtaWY9XCJyb3dJdGVtLnR5cGUgPT09ICd0YWJsZS1yZWFkb25seSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZWY9XCJyb3dJdGVtLmtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW09XCJyb3dJdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybURhdGFbcm93SXRlbS5rZXldXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9lbC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2VsLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPGVsLWRpdmlkZXIgdi1pZj1cImZpZWxkLmRpdmlkZXJcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0g6KGo5aS05Yqg57KX5paH5a2X5byA5aeLIC0tPlxuICAgICAgICA8L2VsLWZvcm0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG4gICAgaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuL2Zvcm1faXRlbS9mb3JtX2lucHV0LnZ1ZSc7XG4gICAgaW1wb3J0IEZvcm1UZXh0YXJlYSBmcm9tICcuL2Zvcm1faXRlbS9mb3JtX3RleHRhcmVhJztcbiAgICBpbXBvcnQgRm9ybURpY3RTZWxlY3QgZnJvbSAnLi9mb3JtX2l0ZW0vZm9ybV9kaWN0X3NlbGVjdCc7XG4gICAgaW1wb3J0IEZvcm1Ob3JtYWxTZWxlY3QgZnJvbSAnLi9mb3JtX2l0ZW0vZm9ybV9ub3JtYWxfc2VsZWN0JztcbiAgICBpbXBvcnQgRm9ybURhdGUgZnJvbSAnLi9mb3JtX2l0ZW0vZm9ybV9kYXRlJztcbiAgICBpbXBvcnQgRm9ybUhvdXJNaW51dGUgZnJvbSAnLi9mb3JtX2l0ZW0vZm9ybV9ob3VyX21pbnV0ZSc7XG4gICAgaW1wb3J0IEZvcm1EYXRlUmFuZ2UgZnJvbSAnLi9mb3JtX2l0ZW0vZm9ybV9kYXRlX3JhbmdlJztcbiAgICBpbXBvcnQgRm9ybUF1dG9Db21wbGV0ZSBmcm9tICcuL2Zvcm1faXRlbS9mb3JtX2F1dG9fY29tcGxldGUnO1xuICAgIGltcG9ydCBGb3JtTnVtYmVySW5wdXQgZnJvbSAnLi9mb3JtX2l0ZW0vZm9ybV9udW1iZXJfaW5wdXQnO1xuICAgIGltcG9ydCBGb3JtUmFkaW8gZnJvbSAnLi9mb3JtX2l0ZW0vZm9ybV9yYWRpbyc7XG4gICAgaW1wb3J0IEZvcm1Nb25leUlucHV0IGZyb20gJy4vZm9ybV9pdGVtL2Zvcm1fbW9uZXlfaW5wdXQnO1xuICAgIGltcG9ydCBGb3JtUmF0ZUlucHV0IGZyb20gJy4vZm9ybV9pdGVtL2Zvcm1fcmF0ZV9pbnB1dCc7XG4gICAgaW1wb3J0IEZvcm1BcmVhU2VsZWN0IGZyb20gJy4vZm9ybV9pdGVtL2Zvcm1fYXJlYV9zZWxlY3QnO1xuICAgIGltcG9ydCBGb3JtTXVsTGlua2FnZSBmcm9tICcuL2Zvcm1faXRlbS9mb3JtX211bF9saW5rYWdlJztcbiAgICBpbXBvcnQgRm9ybU5vcm1hbE51bWJlcklucHV0IGZyb20gJy4vZm9ybV9pdGVtL2Zvcm1fbm9ybWFsX251bWJlcl9pbnB1dCc7XG4gICAgaW1wb3J0IFRhYmxlUmVhZG9ubHkgZnJvbSAnLi9mb3JtX2l0ZW0vdGFibGVfcmVhZG9ubHknO1xuXG4gICAgaW1wb3J0IENoaWxkRm9ybSBmcm9tICcuL2NoaWxkX2Zvcm0nO1xuICAgIGltcG9ydCBGb3JtTWl4aW4gZnJvbSAnLi9taXhpbi5qcyc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdXdGlGb3JtJyxcbiAgICAgICAgbWl4aW5zOiBbIEZvcm1NaXhpbiBdLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOaYr+WQpuaYvuekuuaUtui1t+OAgeWxleW8gOaMiemSrlxuICAgICAgICAgICAgc2hvd0ZvbGRCdG46IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOaYr+WQpuaYvuekuiDlhajpg6jmlLbotbfjgIHlsZXlvIDmjInpkq5cbiAgICAgICAgICAgIHNob3dBbGxGb2xkQnRuOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDmmK/lkKbmmL7npLrmtY/op4jmqKHlvI/liIfmjaLmjInpkq5cbiAgICAgICAgICAgIHNob3dTY2FuVHlwZUJ0bjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5pWw5o2u5a2X5YW455qE6YWN572uXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEgKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YToge30sXG5cbiAgICAgICAgICAgICAgICBjdXJyZW50RmlsZWRzOiBbXSwgLy8g5Lit6Ze05oCB5pWw5o2u77yM5L6d6LWW5LqOIGZpZWxkc+OAguW9kyBmaWVsZHMg5pS55Y+Y5pe277yM6L+Z5Liq5Lya6Lef552A5LiA6LW35Y+Y44CCXG5cbiAgICAgICAgICAgICAgICAvLyDliqjmgIHkuIvmi4nliJfooajph4zvvIzmiYDmnInpgInpobnjgILmnKzlr7nosaHnmoTlsZ7mgKcga2V5IOaYr+Wtl+WFuOeahOeItiBrZXnvvIzlgLzmmK/mlbDnu4TvvIzmlbDnu4TlhYPntKDmmK/lr7nlupTnmoTniLYga2V5IOS4i+aJgOacieWtl+WFuFxuICAgICAgICAgICAgICAgIGR5bmFtaWNEaWN0OiB7fSxcblxuXG4gICAgICAgICAgICAgICAgY2hhbmdlRGF0YTogeyAvLyDmiYDmnInliqjmgIHmlbDmja7vvIzmm7Tlh4bnoa7nmoTor7TvvIzmmK/kvJrph43mlrDotYvlgLznmoTvvIzpnIDopoHmlL7liLAgZGF0YSDph4zvvIzmiY3og73lrp7njrDlk43lupTlvI/jgILov5nmmK/lm6DkuLogcHJvdmlkZSDmnKzouqvnmoTnibnmgKflr7zoh7TnmoRcbiAgICAgICAgICAgICAgICAgICAgLy8g6KKr56aB55So55qE5omA5pyJ5YWD57Sg5YiX6KGo44CC6L+Z6YeM55qE5pWw57uE5YWD57Sg5piv6K+l6KaB57Sg55qEIGtleeOAglxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlTGlzdDogW10sXG4gICAgICAgICAgICAgICAgICAgIGFsbERpc2FibGVkOiB0aGlzLmFsbERpc2FibGVkLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIOmakOiXj+eahOimgee0oOWIl+ihqOOAgui/memHjOeahOaVsOe7hOWFg+e0oOaYr+ivpeimgee0oOeahCBrZXnjgIJcbiAgICAgICAgICAgICAgICAgICAgLy8g6ZqQ6JeP55qE6KaB57Sg77yM5LiN6L+b6KGM5qCh6aqM44CC5o+Q5Lqk55qE5pe25YCZ77yM5Lmf6KaB6L+H5ruk5o6JXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbktleUxpc3Q6IFtdLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0TW9kZWw6IHRoaXMudGV4dE1vZGVsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGZvbGRCbG9ja0xpc3Q6IFtdLCAvLyDmlLbotbfnmoTljLrlnZfvvIjmlL7lnKjov5nkuKrph4zpnaLvvIzor6XljLrlnZflsLHlj6rmmL7npLrljLrlnZfmoIfpopjvvIzkuI3mmL7npLrlhoXlrrnvvIlcblxuICAgICAgICAgICAgICAgIHNjYW5UeXBlOiAnbm9ybWFsJywgLy8gbm9ybWFsIOm7mOiupO+8iOWkp+ihqOWNle+8ie+8jHNpbmdsZe+8iOihqOWNleWPquaYvuekuuWNleS4quWMuuWdl++8jOS4iuaWueaYvuekuuaJgOacieWMuuWdl+eahOaMiemSrue7hO+8iVxuICAgICAgICAgICAgICAgIHNpbmdsZVNjYW5CbG9jazogJycsIC8vIOWNleS4quaooeW8j+aXtu+8jOaYvuekuuWTquS4quihqOWNlVxuXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogJzEuMC4wJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCAoKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGaWxlZHMgPSB0aGlzLmZpZWxkcztcblxuICAgICAgICAgICAgdGhpcy5pbml0Rm9ybURhdGEoKTtcbiAgICAgICAgICAgIC8vIOWKoOi9veWIneWni+aDheWGteS4i++8jOm7mOiupOemgeeUqOeahOimgee0oFxuICAgICAgICAgICAgdGhpcy5nZXREZWZhdWx0RGlzYWJsZUxpc3QoKTtcbiAgICAgICAgICAgIC8vIOm7mOiupOmakOiXj1xuICAgICAgICAgICAgdGhpcy5nZXREZWZhdWx0SGlkZGVuTGlzdCgpO1xuICAgICAgICAgICAgLy8g5Yqo5oCB5Yqg6L296ZyA6KaB5pWw5o2u5a2X5YW455qE6YCJ6aG5XG4gICAgICAgICAgICB0aGlzLmxvYWREeW5hbWljU2VsZWN0T3B0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5pbml0U3RhdHVzKCk7XG5cbiAgICAgICAgICAgIC8vIOeQhuiuuuS4iu+8jOS4jeW6lOivpeWKqOaAgea3u+WKoCBmaWxlZHPjgILlsL3ph48gZmllbGRzIOmAmui/h+S6i+S7tu+8jOWGhemDqOaOp+WItuiHquW3seaYr+WQpuaYvuekulxuICAgICAgICAgICAgdGhpcy4kd2F0Y2goJ2ZpZWxkcycsICh2KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RmlsZWRzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGaWxlZHMgPSB2O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERlZmF1bHREaXNhYmxlTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERlZmF1bHRIaWRkZW5MaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZER5bmFtaWNTZWxlY3RPcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFN0YXR1cygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuJHdhdGNoKCdkYXRhJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0U3RhdHVzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJvdmlkZSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGR5bmFtaWNTZWxlY3RPcHRpb246IHRoaXMuZHluYW1pY1NlbGVjdE9wdGlvbixcbiAgICAgICAgICAgICAgICBkeW5hbWljRGljdDogdGhpcy5keW5hbWljRGljdCxcbiAgICAgICAgICAgICAgICAvLyDnirbmgIHliIfmjaLlh73mlbBcbiAgICAgICAgICAgICAgICBzdGF0dXNDaGFuZ2VGbjoge1xuICAgICAgICAgICAgICAgICAgICAvLyDorr7nva7kuLrnpoHnlKhcbiAgICAgICAgICAgICAgICAgICAgc2V0RWxlbWVudERpc2FibGU6IHRoaXMuc2V0RWxlbWVudERpc2FibGUsXG4gICAgICAgICAgICAgICAgICAgIC8vIOiuvue9ruS4uumakOiXj1xuICAgICAgICAgICAgICAgICAgICBzZXRFbGVtZW50SGlkZGVuOiB0aGlzLnNldEVsZW1lbnRIaWRkZW4sXG4gICAgICAgICAgICAgICAgICAgIC8vIOiuvue9ruS4uuW/heWhq1xuICAgICAgICAgICAgICAgICAgICBzZXRFbGVtZW50UmVxdWlyZWQ6IHRoaXMuc2V0RWxlbWVudFJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAvLyDmm7TmlrDlhbbku5bmlbDmja5cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybURhdGE6IHRoaXMudXBkYXRlRm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVXBkYXRlRXZlbnQ6IHRoaXMudmFsdWVVcGRhdGVFdmVudCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIOS8muWKqOaAgeWPmOWMlueahOaVsOaNru+8iOazqOaEj++8jOadpeiHqiBwcm9wc+OAkOabtOS4iue6p+e7hOS7tuOAkeeahOaVsOaNru+8jOS4jeiDveaUvui/meS4qumHjOmdou+8jOWPquiDveaYvuW8j+eahOmAmui/hyBwcm9wcyDlvoDkuIvpnaLkvKDvvIlcbiAgICAgICAgICAgICAgICBjaGFuZ2VEYXRhOiB0aGlzLmNoYW5nZURhdGEsXG4gICAgICAgICAgICAgICAgZm9ybUl0ZW1UeXBlOiAnJyxcbiAgICAgICAgICAgICAgICBjaGlsZENoYW5nZURhdGE6IHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgdGV4dE1vZGVsIChuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuY2hhbmdlRGF0YSwgJ3RleHRNb2RlbCcsIG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAvLyDnm5HlkKzlgLzmm7TmlrBcbiAgICAgICAgICAgIHZhbHVlVXBkYXRlRXZlbnQgKHBhcmFtcykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd6enp6JylcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUnLCBwYXJhbXMpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g5Yid5aeL5YyWIGZvcm1EYXRhIOeahOWAvFxuICAgICAgICAgICAgaW5pdEZvcm1EYXRhICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcywgJ2Zvcm1EYXRhJywge30pO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbml0Rm9ybURhdGEnKTtcbiAgICAgICAgICAgICAgICAvLyDnlKggZmlsZWRzIOWIneWni+WMliBmb3JtRGF0YSDnmoQga2V5XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmNoaWxkcmVuICYmIGZpZWxkcy5jaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMuY2hpbGRyZW4uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aSE55CG5Yid5aeL5YC855qE6Zeu6aKYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMS4g5aaC5p6c6K+l5YC85ZyoIGRhdGEg6YeM77yM5YiZ55u05o6l5Y+WIGRhdGEg6YeM55qE5YC877yI6Z2i5a+55Zy65pmv77ya5pWw5YC85Zue5pi+77yJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmtleSBpbiB0aGlzLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuZm9ybURhdGEsIGZpZWxkLmtleSwgdGhpcy5kYXRhW2ZpZWxkLmtleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDotYvlgLzpu5jorqTlgLznmoTml7blgJnvvIzop6blj5Hkuovku7bpgJrnn6XkuIrnuqdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZVVwZGF0ZUV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZC5rZXldOiB0aGlzLmRhdGFbZmllbGQua2V5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMi4g5LiN6ZyA6KaB5Zue5pi+55qE5Zy65pmv5LiLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIuMSDlpoLmnpzor6XopoHntKDmnInpu5jorqTlgLzvvIzliJnkvb/nlKjpu5jorqTlgLxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuZm9ybURhdGEsIGZpZWxkLmtleSwgZmllbGQuZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi1i+WAvOm7mOiupOWAvOeahOaXtuWAme+8jOinpuWPkeS6i+S7tumAmuefpeS4iue6p1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZVVwZGF0ZUV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGQua2V5XTogZmllbGQuZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAyLjIg6K+l6KaB57Sg5rKh5pyJ6buY6K6k5YC877yM5L2/55So6YCa55So6buY6K6k5YC8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoaWxkLWZvcm0nIHx8IGZpZWxkLnR5cGUgPT09ICd0YWJsZS1yZWFkb25seScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5mb3JtRGF0YSwgZmllbGQua2V5LCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdhcmVhLXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5mb3JtRGF0YSwgZmllbGQua2V5LCBbICcnLCAnJywgJycgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmZvcm1EYXRhLCBmaWVsZC5rZXksICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDojrflj5bliJ3lp4vmg4XlhrXkuIvvvIzmiYDmnInpu5jorqTnpoHnlKjopoHntKBcbiAgICAgICAgICAgIGdldERlZmF1bHREaXNhYmxlTGlzdCAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzYWJsZUxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyDpgY3ljobkvKDlhaXnmoTmlbDmja5cbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZpZWxkcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZHMuY2hpbGRyZW4gJiYgZmllbGRzLmNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5jaGlsZHJlbi5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK90cnVl77yM5YiZ5re75Yqg5Yiw56aB55So5YiX6KGo6YeMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmRpc2FibGVEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVMaXN0LnB1c2goZmllbGQua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEYXRhLmRpc2FibGVMaXN0ID0gZGlzYWJsZUxpc3Q7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDpu5jorqTpmpDol49cbiAgICAgICAgICAgIGdldERlZmF1bHRIaWRkZW5MaXN0ICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoaWRkZW5MaXN0ID0gW107XG4gICAgICAgICAgICAgICAgLy8g6YGN5Y6G5Lyg5YWl55qE5pWw5o2uXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmNoaWxkcmVuICYmIGZpZWxkcy5jaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMuY2hpbGRyZW4uZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5pivdHJ1Ze+8jOWImea3u+WKoOWIsOemgeeUqOWIl+ihqOmHjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5oaWRkZW5EZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbkxpc3QucHVzaChmaWVsZC5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURhdGEuaGlkZGVuS2V5TGlzdCA9IGhpZGRlbkxpc3Q7XG4gICAgICAgICAgICB9LFxuXG5cbiAgICAgICAgICAgIC8vIOWvueS4gOS4qiBibG9jayDkuIvnmoTopoHntKDvvIzov5vooYwgZWwtcm93IOeahOWIhuihjFxuICAgICAgICAgICAgZ2V0RmllbGRSb3cgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgLy8g5LiA5Liq5LqM57u05pWw57uE77yM5q+P5Liq5pWw57uE6KaB57Sg5pivIGVsLXJvdyDnmoTkuIDooYxcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gW107XG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5b2T5YmN6KaB57Sg5LiN5pi+56S677yM5YiZ55u05o6l6Lez6L+HXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Nob3coaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U3BhbiA9IHRoaXMuZ2V0Q29sU2l6ZShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5Yid5aeL5Li656m6XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPluWIsOS7luacieWkmuWwkSBzcGFu77yM5ruhIDI0IOS4uuS4gOihjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW46IGN1cnJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0l0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKFsgb2JqIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWIneWni+S4jeS4uuepuu+8jFxuICAgICAgICAgICAgICAgICAgICAvLyAx44CB5Yik5pat5pyJ5rKh5pyJ5omT5byAIO+8iOW9k+WJjei/meS4queahO+8ieOAkOm7mOiupOWcqOaWsOihjOesrOS4gOWIl+OAkeW8gOWFs1xuICAgICAgICAgICAgICAgICAgICAvLyDlj4jmiJbogIXmmK/lvZPliY3mmK/kuI3mmK/lrZDooajljZXvvIhpdGVtLnR5cGUgPT09ICdjaGlsZC1mb3JtJ+ihqOekuuaYr+WtkOihqOWNle+8iVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5uZXh0Um93Rmlyc3QgfHwgaXRlbS50eXBlID09PSAnY2hpbGQtZm9ybScgfHwgaXRlbS50eXBlID09PSAndGFibGUtcmVhZG9ubHknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK/mlrDooYznrKzkuIDliJfvvIzpgqPkuYjnm7TmjqXmiorov5nkuKrmt7vliqDliLAgbGlzdCDph4zpnaJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDojrflj5bliLDku5bmnInlpJrlsJEgc3Bhbu+8jOa7oSAyNCDkuLrkuIDooYxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuOiBjdXJyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dJdGVtOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChbIG9iaiBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAy44CB5Yik5pat77yI5LiK5LiA5Liq77yJ44CQ6buY6K6k5piv5pys6KGM5pyA5ZCO5LiA5YiX44CR5byA5YWz5piv5ZCm5omT5byAXG4gICAgICAgICAgICAgICAgICAgIC8vIOWFiOaLv+WIsOacgOWQjuS4gOihjFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0TGFzdEl0ZW0gPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIC8vIOeahOacgOWQjuS4gOS4quaYr+WQpuaJk+W8gOS6hui/meS4quW8gOWFs1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdExhc3RJdGVtW2xpc3RMYXN0SXRlbS5sZW5ndGggLSAxXS5yb3dJdGVtLmN1cnJlbnRSb3dMYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmiZPlvIDov5nkuKrlvIDlhbPvvIzpgqPkuYjlvZPliY3ov5nkuKrnm7TmjqXmlL7liLDkuIvkuIDooYznmoTnrKzkuIDkuKpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDojrflj5bliLDku5bmnInlpJrlsJEgc3Bhbu+8jOa7oSAyNCDkuLrkuIDooYxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuOiBjdXJyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dJdGVtOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChbIG9iaiBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIOS4i+aLieato+W4uOiuoeeulyBzcGFuIOadpeWGs+WumuaYr+WQpuaNouihjFxuICAgICAgICAgICAgICAgICAgICAvLyDpgqPkuYjorqHnrpcgbGlzdCDmnIDlkI7kuIDkuKrmlbDnu4Tph4zpnaLmiYDmnInliqDotbfmnaXnmoQgc3BhbiDnmoTlgLxcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdFRvdGFsU3BhbiA9IGxpc3RbbGlzdC5sZW5ndGggLSAxXS5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0+IGl0ZW0uc3BhbikucmVkdWNlKChsYXN0VG90YWwsIGN1cnJlbnRJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGFzdFRvdGFsICsgY3VycmVudEl0ZW07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOW3sue7j+Wkp+S6juetieS6jiAyNCDkuobvvIzor7TmmI7mu6HkuobkuIDooYzvvIzpgqPkuYjnm7TmjqXliJvlu7rmlrDooYxcbiAgICAgICAgICAgICAgICAgICAgLy8g5oiW6ICF5piv5b2T5YmN6L+Z5Liq5Yqg5LmL5YmN55qE5aSn5LqOIDI077yM6YKj5LmI6K+05piO6L+Z5Liq5pS+5Zyo5LmL5YmN6YKj6KGM6LaF6L+HIDI077yM5omA5Lul5Lmf6KaB5pS+5Yiw5paw6KGM5Y67XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0VG90YWxTcGFuID49IDI0IHx8IGxhc3RUb3RhbFNwYW4gKyBjdXJyZW50U3BhbiA+IDI0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5Yiw5LuW5pyJ5aSa5bCRIHNwYW7vvIzmu6EgMjQg5Li65LiA6KGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbjogY3VycmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93SXRlbTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goWyBvYmogXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmraTml7bor7TmmI7lvZPliY3ov5nkuKrlj6/ku6XmlL7liLDkuYvliY3lk6rkuIDooYxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDojrflj5bliLDku5bmnInlpJrlsJEgc3Bhbu+8jOa7oSAyNCDkuLrkuIDooYxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuOiBjdXJyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dJdGVtOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RbbGlzdC5sZW5ndGggLSAxXS5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIOiuvue9ruafkOS4quimgee0oOemgeeUqFxuICAgICAgICAgICAgLy8ga2V577ya5pON5L2c55qEIGtleVxuICAgICAgICAgICAgLy8gYmVEaXNhYmxl77ya5b+F5aGr77yM6buY6K6k5pivIHRydWXvvIzooajnpLrnpoHnlKjjgILogIwgZmFsc2XvvIzooajnpLrlj5bmtojnpoHnlKhcbiAgICAgICAgICAgIHNldEVsZW1lbnREaXNhYmxlIChrZXksIGJlRGlzYWJsZSA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyDorr7nva7npoHnlKhcbiAgICAgICAgICAgICAgICBpZiAoYmVEaXNhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOW3sue7j+emgeeUqOS6hu+8jOWImei3s+i/h+OAguWQpuWImeWImea3u+WKoOi/m+WOu1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2VEYXRhLmRpc2FibGVMaXN0LmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGF0YS5kaXNhYmxlTGlzdC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDlj5bmtojnpoHnlKhcbiAgICAgICAgICAgICAgICAgICAgLy8g5pyq56aB55So5YiZ6Lez6L+H44CC5bey57uP56aB55So77yM5YiZ57un57utXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGFuZ2VEYXRhLmRpc2FibGVMaXN0LmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdG9kbzog55u05o6l5L2/55Soc3BsaWNl5bCx5Y+v5Lul5LqGXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURhdGEuZGlzYWJsZUxpc3QgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5jaGFuZ2VEYXRhLmRpc2FibGVMaXN0LnNsaWNlKDAsIGluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmNoYW5nZURhdGEuZGlzYWJsZUxpc3Quc2xpY2UoaW5kZXggKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIOiuvue9ruafkOS4quimgee0oOmakOiXj1xuICAgICAgICAgICAgLy8ga2V577ya5pON5L2c55qEIGtleVxuICAgICAgICAgICAgLy8gYmVIaWRkZW7vvJrlv4XloavvvIzpu5jorqTmmK8gdHJ1Ze+8jOihqOekuumakOiXj+OAguiAjCBmYWxzZe+8jOihqOekuuWPlua2iOmakOiXj1xuICAgICAgICAgICAgc2V0RWxlbWVudEhpZGRlbiAoa2V5LCBiZUhpZGRlbiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyDorr7nva7pmpDol49cbiAgICAgICAgICAgICAgICBpZiAoYmVIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5bey57uP56aB55So5LqG77yM5YiZ6Lez6L+H44CC5ZCm5YiZ5YiZ5re75Yqg6L+b5Y67XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYW5nZURhdGEuaGlkZGVuS2V5TGlzdC5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURhdGEuaGlkZGVuS2V5TGlzdC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDlj5bmtojnpoHnlKhcbiAgICAgICAgICAgICAgICAgICAgLy8g5pyq56aB55So5YiZ6Lez6L+H44CC5bey57uP56aB55So77yM5YiZ57un57utXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGFuZ2VEYXRhLmhpZGRlbktleUxpc3QuaW5kZXhPZihrZXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEYXRhLmhpZGRlbktleUxpc3QgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5jaGFuZ2VEYXRhLmhpZGRlbktleUxpc3Quc2xpY2UoMCwgaW5kZXgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuY2hhbmdlRGF0YS5oaWRkZW5LZXlMaXN0LnNsaWNlKGluZGV4ICsgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDorr7nva7mn5DkuKropoHntKDlv4XloatcbiAgICAgICAgICAgIC8vIGtlee+8muaTjeS9nOeahCBrZXlcbiAgICAgICAgICAgIC8vIGJlSGlkZGVu77ya5b+F5aGr77yM6buY6K6k5pivIHRydWXvvIzooajnpLrpmpDol4/jgILogIwgZmFsc2XvvIzooajnpLrlj5bmtojpmpDol49cbiAgICAgICAgICAgIHNldEVsZW1lbnRSZXF1aXJlZCAoa2V5LCBiZVJlcXVpcmVkID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIOiuvue9ruW/heWhq1xuICAgICAgICAgICAgICAgIGlmIChiZVJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWFiOaJvuWIsOi/meS4quimgee0oO+8jOWmguaenOWFtuacrOi6q+W/heWhq++8jOWImei3s+i/h+OAglxuICAgICAgICAgICAgICAgICAgICAvLyDpgY3ljobkvKDlhaXnmoTmlbDmja5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkcy5jaGlsZHJlbiAmJiBmaWVsZHMuY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5jaGlsZHJlbi5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6cIGtleSDkuI3ljLnphY3vvIzliJnot7Pov4dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmtleSAhPT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YWI5Yik5pat5pyJ5rKh5pyJIHJ1bGVzIOi/meS4quWxnuaAp++8jOayoeacieWImea3u+WKoOi/meS4quWxnuaAp++8jOW5tuS4lOa3u+WKoOW/heWhq+mhueeEtuWQjui/lOWbnlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpZWxkLnJ1bGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQoZmllbGQsICdydWxlcycsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtZXNzYWdlJzogJ+ivt+i+k+WFpScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0cmlnZ2VyJzogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JsdXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6YGN5Y6GIOWFtiBydWxlc++8jFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7cnVsZXN9ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaYr+WQpuaciSByZXF1aXJlZCDov5nmnaHop4TliJlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhdmVSZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmmK/lkKblt7Lkv67mlLlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXMuZm9yRWFjaChydWxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOaciSByZXF1aXJlZCDlsZ7mgKdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgncmVxdWlyZWQnIGluIHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlUmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWAvOS4uiB0cnVl77yM5YiZ6Lez6L+HXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGUucmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWQpuWImeS/ruaUueWFtuS4uiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzlt7Lkv67mlLnvvIzpgqPkuYjor7TmmI7msqHlv4XopoHnu6fnu63mk43kvZzkuobvvIzot7Pov4dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmsqHkv67mlLnvvIzlubbkuJTmsqHmnInlv4Xloavop4TliJlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g77yI5rOo5oSP77yM5aaC5p6c5pyJ6KeE5YiZ77yM6YKj5LmI5b+F54S25bey5L+u5pS544CC5omA5Lul5Y+q5a2Y5Zyo5pyJ6KeE5YiZ5bey5L+u5pS544CB5pyq5L+u5pS55pyJ6KeE5YiZ44CB5pyq5L+u5pS55peg6KeE5YiZ5LiJ56eN5oOF5Ya177yJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGF2ZVJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmt7vliqDop4TliJlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXF1aXJlZCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnOiAn6K+36L6T5YWlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHJpZ2dlcic6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JsdXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2hhbmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWPlua2iOW/heWhq1xuICAgICAgICAgICAgICAgICAgICAvLyDkuI3lkKvlv4Xloavop4TliJnnmoTor53vvIzliJnot7Pov4fjgILlpoLmnpzlkKvlv4Xloavop4TliJnvvIzliJnmt7vliqBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkcy5jaGlsZHJlbiAmJiBmaWVsZHMuY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5jaGlsZHJlbi5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6cIGtleSDkuI3ljLnphY3vvIzliJnot7Pov4dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmtleSAhPT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlhYjliKTmlq3mnInmsqHmnIkgcnVsZXMg6L+Z5Liq5bGe5oCn77yM5rKh5pyJ5YiZ5re75Yqg6L+Z5Liq5bGe5oCn77yM5bm25LiU5re75Yqg5b+F5aGr6aG554S25ZCO6L+U5ZueXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmllbGQucnVsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzmnInvvIzliJnpgY3ljoblubbliKDpmaRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQucnVsZXMuZm9yRWFjaCgocnVsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgncmVxdWlyZWQnIGluIHJ1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnJ1bGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyDliJ3lp4vljJbopoHntKDnmoQg6ZqQ6JePL+aYvuekuuOAgeemgeeUqC/pnZ7npoHnlKgg54q25oCB562JXG4gICAgICAgICAgICAvLyDlnKjniLbnu4Tku7YgZGF0YSDmm7TmlrDnmoTml7blgJnvvIzosIPnlKjov5nkuKrmlrnms5VcbiAgICAgICAgICAgIGluaXRTdGF0dXMgKCkge1xuICAgICAgICAgICAgICAgIC8vIOmBjeWOhuS8oOWFpeeahOaVsOaNrlxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmllbGRzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkcy5jaGlsZHJlbiAmJiBmaWVsZHMuY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLmNoaWxkcmVuLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOacieiBlOWKqOmhue+8jOmCo+S5iOWImemBjeWOhuavj+S4quiBlOWKqOmhuVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC52YWx1ZUxpbmsgJiYgZmllbGQudmFsdWVMaW5rLmxlbmd0aCAmJiBmaWVsZC52YWx1ZUxpbmsubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7a2V5fSA9IGZpZWxkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmBjeWOhlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52YWx1ZUxpbmsuZm9yRWFjaChsaW5rSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzogZTliqjpobnnmoTop6blj5HlgLzkuI3ljLnphY3vvIzliJnot7Pov4fov5nkuIDmnaFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ICE9PSBsaW5rSXRlbS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOatpOaXtuWMuemFje+8jOWIpOaWrSBsaW5rTGlzdCDmnInmsqHmnIlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5rSXRlbS5saW5rTGlzdCAmJiBsaW5rSXRlbS5saW5rTGlzdC5sZW5ndGggJiYgbGlua0l0ZW0ubGlua0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWGjemBjeWOhlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtJdGVtLmxpbmtMaXN0LmZvckVhY2godHJpZ2dlckl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5rS2V5ID0gdHJpZ2dlckl0ZW0ubGlua0tleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ6IGU5YqoIGtlee+8jOWImei3s+i/h++8iOato+W4uOadpeivtO+8jOS4jeS8muayoeacie+8iVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxpbmtLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzogZTliqjlgLzvvIzliJnmm7TmlrDlgLxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyaWdnZXJJdGVtLmVuYWJsZUxpbmtWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGb3JtRGF0YSh7W2xpbmtLZXldOiB0cmlnZ2VySXRlbS5saW5rVmFsdWV9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzogZTliqjnpoHnlKgv5Y+W5raI56aB55So77yM5YiZ5pu05paw56aB55SoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmlnZ2VySXRlbS5lbmFibGVMaW5rRGlzYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50RGlzYWJsZShsaW5rS2V5LCB0cmlnZ2VySXRlbS5saW5rRGlzYWJsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c6IGU5Yqo6ZqQ6JePL+aYvuekuu+8jOWImeabtOaWsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJpZ2dlckl0ZW0uZW5hYmxlTGlua0hpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50SGlkZGVuKGxpbmtLZXksIHRyaWdnZXJJdGVtLmxpbmtIaWRkZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOiBlOWKqOW/heWhqy/pnZ7lv4XloavvvIzliJnmm7TmlrBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRyaWdnZXJJdGVtLmVuYWJsZUxpbmtSZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFbGVtZW50UmVxdWlyZWQobGlua0tleSwgdHJpZ2dlckl0ZW0ubGlua1JlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g5om+5YiwIHR5cGU9XCJkeW5hbWljLXNlbGVjdFwiIOiOt+WPluaJgOaciSBwYXJlbnRDb2Rl77yM54S25ZCO6K+75Y+W5pWw5o2u5a2X5YW45o6l5Y+j5ouJ5Y+W5a+55bqU55qE5pWw5o2uXG4gICAgICAgICAgICAvLyB0b2RvIOi/memHjOeahOaVsOaNruWtl+WFuOivt+axguaOpeWPo++8jOW6lOivpeacgOWQjuWQiOW5tuWIsOS4gOi1t++8jOeUseS4gOS4quS4k+mXqOeahOaVsOaNruWtl+WFuOivt+axgueuoeeQhuWZqOWOu+ivt+axgu+8jOWHj+S9juaOpeWPo+mHjeWkjeivt+axgueahOaDheWGtVxuICAgICAgICAgICAgbG9hZER5bmFtaWNTZWxlY3RPcHRpb25zICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRDb2RlTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIOmBjeWOhuS8oOWFpeeahOaVsOaNrlxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmllbGRzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkcy5jaGlsZHJlbiAmJiBmaWVsZHMuY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLmNoaWxkcmVuLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnZHluYW1pYy1zZWxlY3QnICYmIGZpZWxkLnBhcmVudEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlho3lgZrkuIDmrKHljrvph43liKTmlq3jgILlpoLmnpzor6XlrZflhbjlt7Lnu4/lnKjph4zpnaLkuobvvIzlho3ot7Pov4fov5nkuIDkuKpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudENvZGVMaXN0LmluZGV4T2YoZmllbGQucGFyZW50S2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMuZHluYW1pY0RpY3RbZmllbGQucGFyZW50S2V5XSAmJiB0aGlzLmR5bmFtaWNEaWN0W2ZpZWxkLnBhcmVudEtleV0ubGVuZ3RoICE9PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENvZGVMaXN0LnB1c2goZmllbGQucGFyZW50S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDliJ3lp4vljJbkuIDkuKrmlbDnu4RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5keW5hbWljRGljdCwgZmllbGQucGFyZW50S2V5LCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Zyw5Yy66YCJ5oup5qGG77yM5LiJ57qn6IGU5YqoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdhcmVhLXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RQYXJlbnRLZXkgPSBmaWVsZC5maXJzdFBhcmVudEtleSB8fCAnMTAwMjAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRQYXJlbnRLZXkgPSBmaWVsZC5maXJzdFBhcmVudEtleSB8fCAnMTAwMjEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aGlyZFBhcmVudEtleSA9IGZpZWxkLmZpcnN0UGFyZW50S2V5IHx8ICcxMDAyMic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDb2RlTGlzdC5pbmRleE9mKGZpcnN0UGFyZW50S2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRoaXMuZHluYW1pY0RpY3RbZmlyc3RQYXJlbnRLZXldICYmIHRoaXMuZHluYW1pY0RpY3RbZmlyc3RQYXJlbnRLZXldLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb2RlTGlzdC5wdXNoKGZpcnN0UGFyZW50S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy5keW5hbWljRGljdCwgZmlyc3RQYXJlbnRLZXksIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Q29kZUxpc3QuaW5kZXhPZihzZWNvbmRQYXJlbnRLZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodGhpcy5keW5hbWljRGljdFtzZWNvbmRQYXJlbnRLZXldICYmIHRoaXMuZHluYW1pY0RpY3Rbc2Vjb25kUGFyZW50S2V5XS5sZW5ndGggIT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29kZUxpc3QucHVzaChzZWNvbmRQYXJlbnRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmR5bmFtaWNEaWN0LCBzZWNvbmRQYXJlbnRLZXksIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Q29kZUxpc3QuaW5kZXhPZih0aGlyZFBhcmVudEtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0aGlzLmR5bmFtaWNEaWN0W3RoaXJkUGFyZW50S2V5XSAmJiB0aGlzLmR5bmFtaWNEaWN0W3RoaXJkUGFyZW50S2V5XS5sZW5ndGggIT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q29kZUxpc3QucHVzaCh0aGlyZFBhcmVudEtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuZHluYW1pY0RpY3QsIHRoaXJkUGFyZW50S2V5LCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDb2RlTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIOmAmui/h+eItiBrZXkg5ou/5Yiw5omA5pyJ5YWD57SgXG4gICAgICAgICAgICAgICAgbGV0IHBheWxvYWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIC8vIOi/memHjOWIpOaWreaYr+S4jeaYryBheGlvcyDnmoTpu5jorqTov5Tlm57mlbDmja7vvIjmnKrnu4/ov4for7fmsYLmi6bmiKrlmajlpITnkIbnmoTvvIlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5keW5hbWljU2VsZWN0T3B0aW9uLnF1ZXJ5S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5keW5hbWljU2VsZWN0T3B0aW9uLnF1ZXJ5S2V5XTogcGFyZW50Q29kZUxpc3RcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkID0gcGFyZW50Q29kZUxpc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdXdGlGb3JtIOaLieWPluWKqOaAgeWtl+WFuCcpO1xuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QodGhpcy5keW5hbWljU2VsZWN0T3B0aW9uLmRpY3RVcmwsIHBheWxvYWQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5YW85a655oCn5aSE55CGXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlcXVlc3QgJiYgcmVzLmhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlm6DkuLrlj6/og73lpJrkuKrlnLDmlrnlkIzml7bosIPov5nkuKrmjqXlj6PnmoTljp/lm6DvvIzkuLrkuobpgb/lhY3ph43lpI3lsIblhoXlrrnmt7vliqDliLDph4zpnaLvvIzmiYDku6XvvIxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDov5nph4zlnKjotYvlgLzkuYvliY3vvIzpnIDopoHlhYjliKTmlq3kuIDkuIsgcGFyZW50Q29kZUxpc3Qg55qE5q+P5Liq5YC877yM5YW25a+55bqU55qEIGR5bmFtaWNEaWN0IOmHjOeahOWTquS4gOS4quaVsOe7hO+8jOaYr+WQpuaYr+epuueahFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOS4jeaYr+epuueahO+8jOWImeWwhuWFtue9ruS4uuepuuaVsOe7hFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENvZGVMaXN0LmZvckVhY2gocENvZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5keW5hbWljRGljdFtwQ29kZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuZHluYW1pY0RpY3QsIHBDb2RlLCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWKoOi9veWIsOe7k+aenFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnlKjmr4/kuKrov5Tlm57lgLznmoQgcENvZGUg5L2c5Li6IGtlee+8jOWwhuivpemhuea3u+WKoOWIsOaVsOe7hOmHjOOAglxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDms6jvvJrkuYvmiYDku6XmmK/mlbDnu4TvvIzmmK/lm6DkuLrkuYvliY3lt7Lnu4/liJ3lp4vljJbov4fkuobvvIhwYXJlbnRLZXkg5Li6IENvZGXvvIlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcENvZGUgPSBpdGVtW3RoaXMuZHluYW1pY1NlbGVjdE9wdGlvbi5wYXJlbnRLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmR5bmFtaWNEaWN0W3BDb2RlXS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbWVzc2FnZS5lcnJvcihkYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG1lc3NhZ2UuZXJyb3IoJ+aVsOaNruWtl+WFuOWKoOi9vemUmeivr++8jOivt+WIt+aWsOmhtemdoumHjeivlScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g5riF56m65qCh6aqM5L+h5oGvXG4gICAgICAgICAgICBjbGVhclZhbGlkYXRlICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmZvcm0uY2xlYXJWYWxpZGF0ZSgpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g6I635Y+W6L+H5ruk5ZCO55qE5pWw5o2uXG4gICAgICAgICAgICBnZXREYXRhICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkID0ge307XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5mb3JtRGF0YSkuZmlsdGVyKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOi1sOato+W4uOmAu+i+kVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2VEYXRhLmhpZGRlbktleUxpc3QuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyDov5nph4zliIbkuLrkuKTnp43mg4XlhrXvvJpcbiAgICAgICAgICAgICAgICAgICAgLy8g56ys5LiA56eN5piv5LiA57qn6KGo5Y2V55qE5YWD57Sg77yM5LuW5Zyo6KKr6ZqQ6JeP5pe277yMa2V55piv5Y+v5Lul55u05o6l5LuOIGhpZGRlbktleUxpc3Qg6I635Y+W55qEXG4gICAgICAgICAgICAgICAgICAgIC8vIOesrOS6jOenjeaYr+WtkOihqOWNleeahOWFg+e0oOOAguWboOS4uuS7lueahCBrZXkg5piv5LiJ5q615ou85o6l6LW35p2l55qEIGtlee+8jOaJgOS7peimgeWOu+WtkOihqOWNlemHjOaLv+WIsCByYW5kb21JZCDlho3lgZrkuIDkuKrmmKDlsIRcbiAgICAgICAgICAgICAgICAgICAgLy8g5p+Q5Liq5bGe5oCn5piv5ZCm5piv5a2Q6KGo5Y2V55qE5Yik5pat5p2h5Lu25piv77ya6YGN5Y6GIGZpZWxkc++8jOWIpOaWreS7luaYr+WQpuaYryB0eXBlID09PSAnY2hpbGQtZm9ybSdcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkRm9ybUtleXNMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1hcChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5jaGlsZHJlbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdjaGlsZC1mb3JtJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goaXRlbS5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgICAgICAgICAgICAgIH0pLmZpbHRlcihsaXN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsaXN0Lmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgICAgIH0pLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEZvcm1LZXlzTGlzdCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jaGlsZEZvcm1LZXlzTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5saXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkRm9ybUtleXNMaXN0LmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDor7TmmI7mmK/lnKjlrZDooajljZVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRba2V5XSA9IHRoaXMuJHJlZnNba2V5XVswXS5jaGlsZEZvcm1GaWxlZHMubWFwKChjaGlsZEZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtyYW5kb21JZH0gPSBjaGlsZEZpZWxkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRmllbGQuZm9yRWFjaChjaGlsZEl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEtleSA9IGNoaWxkSXRlbS5rZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleVRleHQgPSBgJHtrZXl9XyR7cmFuZG9tSWR9XyR7Y2hpbGRLZXl9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hhbmdlRGF0YS5oaWRkZW5LZXlMaXN0LmluZGV4T2Yoa2V5VGV4dCkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGREW2NoaWxkS2V5XSA9IHRoaXMuZm9ybURhdGFba2V5XVtpbmRleF1bY2hpbGRLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkRDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6LWw5q2j5bi46YC76L6RXG4gICAgICAgICAgICAgICAgICAgICAgICBkW2tleV0gPSB0aGlzLmZvcm1EYXRhW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIOagoemqjO+8jOW5tuiOt+WPluagoemqjOWQjuaVsOaNrlxuICAgICAgICAgICAgdmFsaWRhdGUgKGZuKSB7XG4gICAgICAgICAgICAgICAgLy8g5YWI5qCh6aqM54i257qn6KGo5Y2V55qE5YC8XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5mb3JtLnZhbGlkYXRlKCh2YWxpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyDlr7nmlbDmja7ov5vooYzov4fmu6RcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWreaYr+WQpumcgOimgeagoemqjOWtkOihqOWNlVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEZvcm1LZXlMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmlsZWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVkLmNoaWxkcmVuICYmIGZpbGVkLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlZC5jaGlsZHJlbi5mb3JFYWNoKGZvcm1JdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5p+Q5LiA6aG55pivXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtSXRlbS50eXBlID09PSAnY2hpbGQtZm9ybScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRm9ybUtleUxpc3QucHVzaChmb3JtSXRlbS5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZEZvcm1LZXlMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4odHJ1ZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuKGZhbHNlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlTGlzdCA9IGNoaWxkRm9ybUtleUxpc3QubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnNba2V5XVswXS52YWxpZGF0ZUZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwodmFsaWRhdGVMaXN0KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDniLbooajljZXmoKHpqozkuZ/pgJrov4fkuobvvIzmiY3nrpfpg73pgJrov4dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4odHJ1ZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5ZCm5YiZ5Y2z5L2/5a2Q6KGo5Y2V5qCh6aqM6YCa6L+H77yM54i26KGo5Y2V5qCh6aqM5rKh6YCa6L+H77yM5Lmf5piv566X5LiN6YCa6L+H55qEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuKGZhbHNlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4oZmFsc2UsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIOmHjee9ruihqOWNleaVsOaNrlxuICAgICAgICAgICAgcmVzZXRGaWVsZHMgKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZm9ybS5yZXNldEZpZWxkcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmlsZWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZWQuY2hpbGRyZW4gJiYgZmlsZWQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZWQuY2hpbGRyZW4uZm9yRWFjaChmb3JtSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5p+Q5LiA6aG55pivXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1JdGVtLnR5cGUgPT09ICdjaGlsZC1mb3JtJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhID0gdGhpcy4kcmVmc1tmb3JtSXRlbS5rZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhWzBdLnJlc2V0RmllbGRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnJlc2V0RmllbGRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g6KGo5Y2V57uE5Lu25piv5ZCm5pi+56S6XG4gICAgICAgICAgICBpc1Nob3cgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzor6XopoHntKDlnKjpmpDol4/liJfooajph4zvvIzliJnkuI3mmL7npLpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2VEYXRhLmhpZGRlbktleUxpc3QuaW5kZXhPZihpdGVtLmtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8g5pu05paw5pWw5o2uXG4gICAgICAgICAgICB1cGRhdGVGb3JtRGF0YSAoZGF0YSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6cIGtleSDlnKjlgLzph4zpnaJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSBpbiB0aGlzLmZvcm1EYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDliJnlm57loavov5nkuKrlgLxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmZvcm1EYXRhLCBrZXksIGRhdGFba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIOaUtui1ty/lsZXlvIDljLrlnZdcbiAgICAgICAgICAgIGZvbGRCbG9jayAoYmxvY2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGJsb2NrLmxhYmVsO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5mb2xkQmxvY2tMaXN0LmluZGV4T2YobGFiZWwpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2xkQmxvY2tMaXN0LnB1c2goYmxvY2subGFiZWwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9sZEJsb2NrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIOaUtui1t+WxleW8gOaJgOacieWMuuWdl1xuICAgICAgICAgICAgZm9sZEFsbEJsb2NrICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbExpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJIGxhYmVs77yM5YiZ5LiN5pSv5oyB5pS26LW3XG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9jay5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxMaXN0LnB1c2goYmxvY2subGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c6ZW/5bqm55u4562J77yM6K+05piO5bey57uP5YWo6YOo5pS26LW35LqG77yM6YKj5LmI5bCx5piv5bGV5byAXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9sZEJsb2NrTGlzdC5sZW5ndGggPT09IGxhYmVsTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2xkQmxvY2tMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2xkQmxvY2tMaXN0ID0gbGFiZWxMaXN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIOa1j+iniOaooeW8j+WIh+aNolxuICAgICAgICAgICAgY2hhbmdlU2NhblR5cGUgKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjYW5UeXBlID09PSAnbm9ybWFsJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYW5UeXBlID0gJ3NpbmdsZSc7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWIh+aNouS4uuWNleS9k++8jOmCo+S5iOWwhuaJgOaciemakOiXj+eahOaYvuekuuWHuuadpVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvbGRCbG9ja0xpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaW5nbGVTY2FuQmxvY2sgPSB0aGlzLmZpZWxkc1swXS5sYWJlbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjYW5UeXBlID0gJ25vcm1hbCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2luZ2xlU2NhbkJsb2NrID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0UHJvcHMgKHJvd0l0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByZWY6IHJvd0l0ZW0ua2V5LFxuICAgICAgICAgICAgICAgICAgICBpdGVtOiByb3dJdGVtLFxuICAgICAgICAgICAgICAgICAgICBhbGxEaXNhYmxlZDogdGhpcy5hbGxEaXNhYmxlZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBGb3JtSW5wdXQsXG4gICAgICAgICAgICBGb3JtRGljdFNlbGVjdCxcbiAgICAgICAgICAgIEZvcm1EYXRlLFxuICAgICAgICAgICAgRm9ybUhvdXJNaW51dGUsXG4gICAgICAgICAgICBGb3JtRGF0ZVJhbmdlLFxuICAgICAgICAgICAgRm9ybU51bWJlcklucHV0LFxuICAgICAgICAgICAgRm9ybUF1dG9Db21wbGV0ZSxcbiAgICAgICAgICAgIEZvcm1SYWRpbyxcbiAgICAgICAgICAgIEZvcm1UZXh0YXJlYSxcbiAgICAgICAgICAgIEZvcm1Ob3JtYWxTZWxlY3QsXG4gICAgICAgICAgICBGb3JtTW9uZXlJbnB1dCxcbiAgICAgICAgICAgIEZvcm1SYXRlSW5wdXQsXG4gICAgICAgICAgICBGb3JtQXJlYVNlbGVjdCxcbiAgICAgICAgICAgIEZvcm1NdWxMaW5rYWdlLFxuICAgICAgICAgICAgRm9ybU5vcm1hbE51bWJlcklucHV0LFxuXG4gICAgICAgICAgICBUYWJsZVJlYWRvbmx5LFxuICAgICAgICAgICAgQ2hpbGRGb3JtLFxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG4gICAgLnd0aS1mb3JtIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLmVsLWlucHV0X19pbm5lciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTJFM0U2ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvY2stdGl0bGUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgICAgICAgICAgLy8gbGFiZWwg5bem6L6555qE57qi6Imy56uW57q/XG4gICAgICAgICAgICAuYmxvY2stbGluZSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0VFNDczQTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmxvY2stdGV4dCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIxMjczQTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJsb2NrLWZvbGQtYnRuIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyDluKbovrnmoYbnmoTooajljZXnu4Tku7ZcbiAgICAuYm9yZGVyLWZvcm0ge1xuICAgICAgICAuYmxvY2staXRlbSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRERFMEVBO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcblxuICAgICAgICAgICAgLmJsb2NrLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMThweCAyNHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmxvY2stdGl0bGUgKyAuYmxvY2stY29udGVudCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ibG9jay1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ibG9jay1oaWRkZW4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC5lbC1kaXZpZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjVGODtcbiAgICB9XG5cbiAgICAuc2Nhbi10eXBlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgIC5hbGwtZm9sZC1idG4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0VFNDczQTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFRTQ3M0E7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cbiAgICAgICAgICAgIC5hbGwtZm9sZC1pY29uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJsb2NrLWJ0bi1saXN0IHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuXG4gICAgICAgICAgICAuYmxvY2stYnRuIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRERFMEVBO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzQTQ1NjY7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJsb2NrLWJ0bi5mb2N1cyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0VFNDczQTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJsb2NrLWJ0bjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJsb2NrLWJ0bjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNjYW4tdHlwZS1idG4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0FFQjNCRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMTIxODJBO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgICAgICAgICAuc2Nhbi10eXBlLWljb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAud3RpLWZvcm0tdjIgL2RlZXAvIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuICAgIC53dGktZm9ybS12MiAvZGVlcC8gaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgfVxuXG4gICAgLnd0aS1mb3JtLXYyIC9kZWVwLyBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIH1cblxuICAgIC53dGktZm9ybS12MiAvZGVlcC8gaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgIH1cblxuPC9zdHlsZT5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ1MGMyYWM4ZjVmM2Y3YjUxNTk0XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9