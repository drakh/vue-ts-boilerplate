import Vue from "vue";
import { client } from "../clients/api";

export const Hello = Vue.component("hello", {
    props: ["name", "email"],
    data() {
        return {
            userData: {
                name: this.name,
                email: this.email,
            },
            error: false,
        };
    },
    template: `
    <section>
        <div>Hello {{name}}</div>
        <form  @submit.prevent="send">
                <div><label>Name:<input v-model.lazy="userData.name" type="text" name="name"></label></div>
                <div><label>Email:<input v-model.lazy="userData.email" type="email" name="email"></label></div>
                <button type="submit">save</button>
        </form>
        <template v-if="error">error</template>
    </section>`,
    methods: {
        async send() {
            this.error = false;
            try {
                await client.test(this.userData);
            } catch (e) {
                this.error = true;
            }
        },
    },
});
