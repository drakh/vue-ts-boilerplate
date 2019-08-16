import Vue from "vue";

export const Hello = Vue.component("hello", {
    props: ["name"],
    template: `
    <section>
        <div>Hello {{name}}</div>
        Name: <input v-model="name" type="text">
    </section>`,
});
