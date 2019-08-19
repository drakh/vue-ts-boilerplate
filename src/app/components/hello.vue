<template>
    <div>
        <p>hello times: {{ helloTimes }}</p>
        <button @click="sayHello">Say hello</button>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class Hello extends Vue {
        helloTimes: number = 0;

        created() {
            console.info("hello", "created");
        }

        beforeDestroy() {
            console.info("hello", "before destroy");
        }

        mounted() {
            console.info("hello", "mounted");
        }

        sayHello() {
            this.helloTimes++;
        }
    }
</script>
