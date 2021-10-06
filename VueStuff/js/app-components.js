const IdeaListComponent=Vue.component("IdeaList",{
    data(){
        return{
            ideas:new IdeaCollection()
                        .addIdea(new Idea("Sample Idea","This is a sample idea"))
                        .addIdea(new Idea("My Idea","My Idea is very cool and stuff")),
        }
    },
    template:`
      <v-container>
        <v-row>
            <v-col v-for="idea in ideas" :key="idea.id">
              <idea :idea="idea"></idea>
            </v-col>
        </v-row>
      </v-container>
    `,
});
const IdeaComponent=Vue.component("Idea",{
    props:{
        idea:Idea,
    },
    template:`
        <v-card>
          <v-card-title>{{idea.shortDescription}}</v-card-title>
          <v-card-text>{{idea.longDescription}}</v-card-text>
        </v-card>
    `,
});