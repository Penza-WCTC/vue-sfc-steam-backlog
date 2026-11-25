<script>
export default {
    name: "hi",

    props: {
        searchResult: { type: Object, required: true }
    },

    methods: {
        moveMe(objToMove){
            this.$emit('move-this', objToMove);
        }
    },

    computed: {
        typeGetter(){
            if(this.searchResult.type === "book"){
                return "📖"
            }else if(this.searchResult.type === "game"){
                return "🎮"
            }else if(this.searchResult.type === "album"){
                return "🎵"
            }else{
                return "❔"
            }
        }
    },
}
</script>

<template>
    <div class="col-12 border border-secondary border-opacity-50 rounded mt-3 pt-1 bg-secondary-subtle pointer"
        v-on:click="moveMe(searchResult)">
        <div class="d-flex justify-content-between">
            <p class="mb-0">{{typeGetter}} {{searchResult.name}}</p>
            <p class="mb-0">{{ searchResult.creator }}</p>
        </div>
        <hr class="mt-0">
        <div>
            <p>{{ searchResult.description }}</p>
        </div>
    </div>
</template>