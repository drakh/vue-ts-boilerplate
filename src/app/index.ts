import Vue from "vue";

const app = new Vue({
    el: "#app",
    template: `
    <div>
        <div>Hello {{name}}</div>
        Name: <input v-model="name" type="text">
    </div>`,
    data: {
        name: "Vue",
    },
});

module.exports = app;
