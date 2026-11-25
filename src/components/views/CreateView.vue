<script>
import apiSearchResult from '../createComponents/apiSearchResult.vue';
import UserMediaItem from '../createComponents/userMediaItem.vue';

import Book from '@/models/Book.js';
import Album from '@/models/Album.js';
import Game from '@/models/Game.js';

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
            data: [new Book("Inferno", "https://fcs-img.s3.amazonaws.com/1ebda62b-7f02-4fab-8e39-a5e6016ae6b4/466eec96-560c-4f00-b720-b18d0118fc06/XL.jpg", ["Fiction", "Classic"], "Dante’s Inferno follows Dante’s journey through the nine circles of Hell, guided by the Roman poet Virgil, where he witnesses the punishments of sinners. Along the way, the poem explores themes of sin, morality, justice, and redemption.", "Dante Alighieri", 400),
            new Album("Black Elvis", "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/0d/1d/3f/0d1d3f70-63ed-d13f-c94d-e81171e59532/886447096628.jpg/100x100bb.jpg", ["Hip Hop / Rap"], "Black Elvis/Lost in Space (1999) is an album by underground hip-hop pioneer Kool Keith, released under his Black Elvis persona. The album blends experimental hip-hop, futuristic production, eccentric storytelling, and surreal humor.", "Kool Keith", "LP"),
            new Game("Reign of the Renegade", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2306530/header.jpg?t=1750955052", ["Indie", "Strategy"], "Reign of the Renegade is a dice-based roguelite deckbuilder. Ascend the tower, brave the odds, and create powerful synergies. Will you end the Reign of the Renegade?", 42),
            ],

            userTempLibrary: [...this.fullLibrary]
        }
    },

    methods: {
        moveThisData(objToMove) {
            this.userTempLibrary.push(objToMove)
        },
        deleteThisData(objToDelete) {
            this.userTempLibrary.splice((this.userTempLibrary.findIndex(o => o === objToDelete)), 1)
        },
        updateList() {
            this.$emit('update-full-library', [...this.userTempLibrary])
        }
    },

    computed: {
        filteredResuts() {
            const filteredResuts = [...this.data]

            this.userTempLibrary.forEach(result => {
                const index = filteredResuts.findIndex(r => r === result)

                if (index != -1) {
                    filteredResuts.splice(index, 1)
                }
            });

            return filteredResuts
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

                <div class="row" v-for="result in filteredResuts">
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