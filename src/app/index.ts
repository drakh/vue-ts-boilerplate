import Vue from "vue";
import VueRouter from "vue-router";
import { Navigation } from "./components/navigation";
import { NotFound } from "./components/not-found";
import { Hello } from "./components/hello";
import { Foo } from "./components/foo";
import HelloVue from "./components/hello.vue";
import "../scss/main.scss";

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes: [
        {path: "/", component: Hello, props: {name: "world"}},
        {path: "/foo", component: Foo, props: {name: "bar"}},
        {path: "/hello", component: HelloVue, props: {name: "bar"}},
        {path: "/404", component: NotFound},
        {path: "*", redirect: "/404"},
    ],
});

Vue.use(VueRouter);
new Vue({
    components: {Menu: Navigation, Hello},
    template: `
    <main id="app">
        <h1>hello world</h1>
        <keep-alive>
            <navigation item="navItems"></navigation>
        </keep-alive>
        <router-view class="view"></router-view>
        <keep-alive>
            <router-view class="view"></router-view>
        </keep-alive>
    </main>`,
    router,
}).$mount("#app");
