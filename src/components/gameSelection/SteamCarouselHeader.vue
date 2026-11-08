<script>
import ImageCarousel from './ImageCarousel.vue';
import SteamImage from '@/components/SteamImage.vue';

export default {
    name: "SteammCarouselHeader",

    components: {
        ImageCarousel,
        SteamImage,
    },

    props: {
        rerollsAllowed: { type: Number, default: 5 },
        fullLibrary: { type: Array, required: true },
    },

    data: function () {
        return {
            rerollsLeft: this.rerollsAllowed + 1,

            librarySelection: [],

            activeSelection: [{ name: "hi", imageUrl: "" }, { name: "hi", imageUrl: "" }, { name: "hi", imageUrl: "" }, { name: "hi", imageUrl: "" }, { name: "hi", imageUrl: "" }],
        };
    },

    methods: {
        getRandomGames() {
            if (this.rerollsLeft >= 1) {
                for (let i = 0; i < 5; i++) {
                    try {
                        this.activeSelection[i] = this.librarySelection.splice((Math.floor(Math.random() * (this.librarySelection.length))), 1)[0]

                        this.activeSelection[i].seen = true;
                    } catch (error) {
                        this.fixSeen();
                    }
                }

                this.rerollsLeft--;
            }
        },

        fixSeen(){
            this.fullLibrary.forEach(game => {
                game.seen = false;
            });
            this.librarySelection = [];

            this.rerollsLeft++;

            this.copyLibrary();
            this.getRandomGames();
        },

        copyLibrary() {
            this.fullLibrary.forEach(game => {
                if (!game.seen) {
                    this.librarySelection.push(game);
                }
            });
        },

        shiftListRight() {
            const holder = this.activeSelection.shift();
            this.activeSelection.push(holder);
        },

        shiftListLeft() {
            const holder = this.activeSelection.pop();
            this.activeSelection.unshift(holder);
        }
    },

    mounted() {
        this.copyLibrary()
        console.log(this.librarySelection)

        this.getRandomGames()
    },

    watch: {
        activeSelection: {
            handler(newValue, oldValue) {
                this.$emit('save-this', newValue[0]);
            },
            deep: true
        }
    },

}
</script>

<template>
    <div>
        <image-carousel>
            <template v-slot:mobile-image>
                <steam-image :image-url="activeSelection[0].imageUrl" :game-name="activeSelection[0].name"
                    class="w-100"></steam-image>
            </template>
            <template v-slot:back-left>
                <steam-image :image-url="activeSelection[3].imageUrl"
                    :game-name="activeSelection[3].name"></steam-image>
            </template>
            <template v-slot:top-left>
                <steam-image :image-url="activeSelection[4].imageUrl"
                    :game-name="activeSelection[4].name"></steam-image>
            </template>
            <template v-slot:center>
                <steam-image :image-url="activeSelection[0].imageUrl"
                    :game-name="activeSelection[0].name"></steam-image>
            </template>
            <template v-slot:top-right>
                <steam-image :image-url="activeSelection[1].imageUrl"
                    :game-name="activeSelection[1].name"></steam-image>
            </template>
            <template v-slot:back-right>
                <steam-image :image-url="activeSelection[2].imageUrl"
                    :game-name="activeSelection[2].name"></steam-image>
            </template>
        </image-carousel>
        <div class="d-flex justify-content-evenly">
            <button @click="shiftListLeft" class="button btn btn-primary"><i class="bi bi-arrow-left"></i></button>
            <button @click="getRandomGames" type="button" class="btn btn-success position-relative">
                Re-Roll All
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                    {{ rerollsLeft }}
                    <span class="visually-hidden">Re-rolls left</span>
                </span>
            </button>
            <button @click="shiftListRight" class="button btn btn-primary"><i class="bi bi-arrow-right"></i></button>
        </div>
    </div>
</template>