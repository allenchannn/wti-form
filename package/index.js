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

import Vue from 'vue';
console.log(Vue)
import WtiForm from './index.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

const fields = [
    {
        label: '规则列举',
        children: [
            {
                key: 'key1',
                type: 'input',
                label: '示例 1',
                defaultValue: '123',
            },
            {
                key: 'key2',
                type: 'input',
                label: '长度 2~4 个字，触发时机 change + blur',
                defaultValue: '234',
            },
        ]
    }
  ]

new Vue({
    el: "#app",

    components: {
        WtiForm
    },

    data() {
        return {
            fields: fields,

            props: {
                fields
            }
        }
    },

    methods: {
        updateValue(value) {
            console.log(value, "子组件内值变了");
        },

        setValue(value) {
            this.$refs.form.updateFormData({
                key1: 111
            })
        }
    }
});



