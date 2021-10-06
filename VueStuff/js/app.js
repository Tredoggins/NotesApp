Vue.use(Vuetify);
new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    template: `
            <v-app>
                <idea-list></idea-list>
            </v-app>`,
})