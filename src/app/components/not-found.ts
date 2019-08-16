import Vue from "vue";

export const NotFound = Vue.component("NotFound", {
    props: ["name"],
    template: `<section class="not-found"><h3>404</h3></section>`,
});
