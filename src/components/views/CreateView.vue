<script>
import BacklogCollection from '@/models/BacklogCollection.js';
import apiSearchResult from '../createComponents/apiSearchResult.vue';
import UserMediaItem from '../createComponents/userMediaItem.vue';

export default {
    name: "CreateView",

    components: {
        apiSearchResult,
        UserMediaItem
    },

    props: {
        fullLibrary: { type: Array }
    },

    data: function () {
        return {
            data: [{ type: "book", name: "Dante's Inferno", creator: "Dante ig", description: "This is my Dante short description" },
            { type: "album", name: "Black Elvis", creator: "Kool Keith", description: "This is my Black Elvis short description" },
            { type: "game", name: "League of Legends", creator: "Riot Games", description: "This is my LoL short description" }],
            
            userTempLibrary:  [...this.fullLibrary]
        }
    },

    methods: {
        moveThisData(objToMove){
            this.userTempLibrary.push(objToMove)
        },
        deleteThisData(objToDelete){
            this.userTempLibrary.splice((this.userTempLibrary.findIndex(o => o === objToDelete)),1)
        },
        updateList(){
            this.$emit('update-full-library',[...this.userTempLibrary])
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md px-3 pb-3 border border-2 g-3 bg-light rounded">

                <form action="" class="row mt-3">
                    <div class="col-auto">
                        <select class="form-select" aria-label="Search Selection">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col">
                        <input type="text" aria-label="Searchbar" class="form-control">
                    </div>
                    <div class="col">
                        <button class="btn btn-success">Search!</button>
                    </div>
                </form>

                <div class="row" v-for="result in data">
                    <apiSearchResult :search-result="result" @move-this="moveThisData"></apiSearchResult>
                </div>

            </div>
            <div class="col-md offset-md-1 px-3 pb-3 border border-2 g-3 bg-light rounded position-relative">
                <div class="row" v-for="item in userTempLibrary">
                    <UserMediaItem :user-media="item" @delete-this="deleteThisData"></UserMediaItem>
                </div>
                <div class="d-flex justify-content-end sticky-bottom bottom-5">
                    <button class="btn btn-success mt-3" v-on:click="updateList">Save Changes</button>
                </div>
            </div>
        </div>
    </div>
</template>