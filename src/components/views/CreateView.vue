<script>
import apiSearchResult from '../createComponents/apiSearchResult.vue';

export default {
    name: "CreateView",

    components: {
        apiSearchResult
    },

    props: {
        fullLibrary: { type: Array }
    },

    data: function () {
        return {
            data: [{ type: "book", name: "Dante's Inferno", creator: "Dante ig", description: "This is my Dante short description" },
            { type: "album", name: "Black Elvis", creator: "Kool Keith", description: "This is my Black Elvis short description" },
            { type: "game", name: "League of Legends", creator: "Riot Games", description: "This is my LoL short description" }]
        }
    },

    methods: {
        moveThisData(objToMove){
            document.getElementById("endpoint").innerHTML+= objToMove.name
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md px-3 pb-3 border border-2 row g-3 bg-light rounded">

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

                <div class="row" id="startpoint" v-for="result in data">
                    <apiSearchResult :search-result="result" @move-this="moveThisData"></apiSearchResult>
                </div>

            </div>
            <div class="col-md offset-md-1 px-3 pb-3 border border-2 row g-3 bg-light rounded">
                <div class="row" id="endpoint">

                </div>
            </div>
        </div>
    </div>
</template>