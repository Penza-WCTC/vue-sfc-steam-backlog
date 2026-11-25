<script>
export default {
    name: "User Media Item Card",

    props: {
        userMedia: { type: Object, required: true }
    },

    methods: {
        deleteMe(objToDelete){
            this.$emit('delete-this', objToDelete);
        }
    },

    computed: {
        typeGetter(){
            if(this.userMedia.type === "book"){
                return "📖"
            }else if(this.userMedia.type === "game"){
                return "🎮"
            }else if(this.userMedia.type === "album"){
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
        v-on:click="deleteMe(userMedia)">
        <div class="d-flex justify-content-between">
            <p class="mb-0">{{typeGetter}} {{userMedia.name}}</p>
            <p class="mb-0">{{ userMedia.creator }}</p>
        </div>
    </div>
</template>