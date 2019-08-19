import Vue from "vue";

interface Item {
    path: string;
    name: string;
}

const navItems: Item[] = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/foo",
        name: "Foo",
    },
    {
        path: "/bar",
        name: "Bar",
    },
    {
        path: "/hello",
        name: "Hello",
    },
    {
        path: "/hello2",
        name: "Hello 2",
    },
];

export const Navigation = Vue.component("navigation", {
    data: () => {
        return {navItems};
    },
    template: `
    <section class="nav">
        <h2>Navigation</h2>
        <nav>
            <router-link :to="item.path" v-for="item in navItems">{{item.name}}</router-link>
        </nav>
    </section>`,
});
