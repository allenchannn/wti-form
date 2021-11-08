<template>
    <div>
        <slot
            :name="item.slotName"
            @input="(v) => val = v"
            :value="val"
            :disabled="getDisabled"
            v-bind="bindOptions"
        />
    </div>
</template>

<script>
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
                get: function() {
                    return this.value;
                },

                set: function(v) {
                    //修改formData
                    this.$emit('input', v);
                    //使用mixin/_valueLink中的方法触发表单数值联动
                    this._valueLink(v);
                }
            }
        },

        mounted () {
            console.log(this.item.slotName, 'item.slotName')
        }
    }
</script>

<style>

</style>