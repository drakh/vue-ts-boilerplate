import Vue from "vue";

interface Item {
    url: string;
    name: string;
}

const navItems: Item[] = [
    {
        url: "/",
        name: "Home",
    },
    {
        url: "/foo",
        name: "Foo",
    },
    {
        url: "/bar",
        name: "Bar",
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
            <router-link :to="item.url" v-for="item in navItems">{{item.name}}</router-link>
        </nav>
    </section>`,
});
