<script>
import Album from '@/models/Album.js';
import Book from '@/models/Book.js';
import Game from '@/models/Game.js';

import SteamImage from '@/components/SteamImage.vue';

export default {
    name: "ActiveGameDisplay",

    components: {
        SteamImage,
    },

    props: {
        activeGame: { type: Object, required: true }
    },

    computed:{
        firstAdaptiveSection(){
            if(this.activeGame.constructor == Game){
                return this.activeGame.hoursPlayed+" Hours"
            }else if(this.activeGame.constructor == Album){
                return "Written By "+this.activeGame.artist
            }else if(this.activeGame.constructor == Book){
                return "Written By "+this.activeGame.author
            }
        },

        secondAdaptiveSection(){
            if(this.activeGame.constructor == Game){
                return this.activeGame.achievementCount+ " Achievements"
            }else if(this.activeGame.constructor == Album){
                return this.activeGame.albumType
            }else if(this.activeGame.constructor == Book){
                return this.activeGame.pageCount+ " Pages"
            }
        }
    }

}
</script>

<template>
    <div class="container text-start pb-3 mb-4">
        <div class="px-3 pb-3 border border-2 row g-3 bg-light rounded">
            <div class="col-md-3 d-flex justify-content-center">
                <steam-image :image-url="activeGame.imageUrl" :game-name="activeGame.name"
                    class="img-fluid" style="max-height: 250px;"></steam-image>
            </div>

            <div class="col-md-9 d-flex flex-column justify-content-evenly">
                <div class="row">
                    <div class="col-sm-6">
                        <p class="fs-4">{{ activeGame.name }}</p>
                    </div>
                    <div class="col-sm-6">
                        <p class="fs-4">Started {{ activeGame.selectedDate }}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="row">
                            <p class="fs-6">{{firstAdaptiveSection}}</p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="row">
                            <p class="fs-6">{{ secondAdaptiveSection }}</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="fs-5">Tags:</p>
                    </div>
                    <div class="col-12 fs-6">
                        <p class="px-2 py-1 rounded-pill bg-info d-inline-block me-1" v-for="tag in activeGame.tags">
                            {{ tag }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>