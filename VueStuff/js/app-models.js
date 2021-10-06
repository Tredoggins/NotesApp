function IdeaCollection(){
    this.__proto__=[]
    this.linkIdeas=function (id1,id2){
        let idea1=this.find(i=>i.id===id1)
        let idea2=this.find(i=>i.id===id2)
        idea1.linkIdea(idea2)
        idea2.linkIdea(idea1)
    }
    this.unlinkIdeas=function (id1,id2){
        let idea1=this.find(i=>i.id===id1)
        let idea2=this.find(i=>i.id===id2)
        idea1.unlinkIdea(idea2)
        idea2.unlinkIdea(idea1)
    }
    this.deleteIdea=function (id){
        let idea=this.find(i=>i.id===id)
        for(let i in idea.linkedIdeas){
            i.unlinkIdea(idea);
        }
    }
    this.addIdea=function (idea){
        this.push(idea);
        return this;
    }
}

function Idea(shortDesc,longDesc,...linkedIdeas){
    this.id=Math.floor(Math.random()*10e100)
    this.shortDescription=shortDesc
    this.longDescription=longDesc
    this.linkedIdeas=linkedIdeas
    for(let i in this.linkedIdeas){
        i.linkIdea(this)
    }
    this.linkIdea=function (idea){
        if(this.linkedIdeas.indexOf(idea)<0) {
            this.linkedIdeas.push(idea);
        }
    }
    this.unlinkIdea=function(idea){
        this.linkedIdeas.splice(this.linkedIdeas.indexOf(idea),1);
    }
}
