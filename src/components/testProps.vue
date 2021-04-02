<template>
    <div>
        <span>测试props{{age1}}</span>
        {{list}}
        {{greetingText}}
        <button @click="handleEmit">测试</button>
        <div>title：{{title}}</div>
        <slot></slot>
        <button @click="updateTitle">更新title</button>
    </div>
</template>

<script>
export default {
    props: {
        age1: {
            type: Number,
            required: true,
            default: 0,
            validator: function (value) {
                return value > 30;
            },
        },
        originalData: {
            type: Object,
            required: true,
            default: function () {
                return {};
            },
        },
        list: {
            type: Array,
            default: function () {
                return [];
            },
        },
        greetingText: String,
        title: Object,
    },
    methods: {
        handleEmit() {
            this.$emit('visibleChange');
        },
        updateTitle() {
            this.$emit('update:title', { a: 1 });
        },
    },
};
</script>

<style>
</style>