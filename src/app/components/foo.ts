import Vue from "vue";

export const Foo = Vue.component("foo", {
    props: ["name"],
    template: `<section><h3>Foo {{name}}</h3></section>`,
});
