<template>
    <div>
        <component
            :is="item.component"
            @input="v => val = v"
            v-bind="bindOptions"
            :disabled="getDisabled"
            :value="val"
        />
    </div>
</template>

<script>

    //外部组件在值修改时需要通过emit input事件来通知form_slot，并将值传给父组件
    import FormMixin from './mixin';

    export default {
        name: 'FormSlot',

        mixins: [ FormMixin ],

        props: [{
            //是否可编辑，通过mixin/getDisabled来获取
            disabled: {
                type: Boolean,
                default: false,
            },
            //编辑态还是已读态，通过mixin/getTextModel来获取
            readOnly: {
                type: Boolean,
                default: false
            },
        }],

        computed: {
            val: {
                get () {
                    return this.value;
                },
                set (v) {
                    //改变formData
                    this.$emit('input', v);
                    //执行联动函数
                    this._valueLink(v);
                    // 只有非子表单的情况下，才会冒泡上去数据变更
                    if (this.formItemType !== 'childForm') {
                        this.statusChangeFn.valueUpdateEvent({
                            [this.item.key]: v,
                        });
                    } else {
                        // 如果是子表单的话，执行内置的变更
                        this.childChangeData.valueUpdateEvent();
                    }
                },
            },
        }
    }
</script>

<style>

</style>