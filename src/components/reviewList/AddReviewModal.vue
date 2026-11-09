<script>
import {Modal} from 'bootstrap'
import Review from '@/models/Review.js';

export default {
    name: "AddReviewModal",

    data: function () {
        return {
            reviewObject: {
                ratingNumber: 1,
                completion: "",
                review: "",

                hoursPlayed: 0,
                gameId: "",
                gameName: "",

                userId: "",
                userName: "",

                communityVote: 0,
                editing: false,
            },
        }
    },

    props: {
        activeGame: { type: Object },
        userObject: { type: Object },
    },

    methods: {
        addReview() {
            this.$emit('add-review', new Review(this.reviewObject.ratingNumber, this.reviewObject.completion, this.reviewObject.review, this.activeGame, this.userObject.id, this.userObject.name));
        },
    },

    computed:{
        typeOfActive(){
            return this.activeGame.constructor.name;
        }
    }
}
</script>

<template>
    <div class="modal fade" tabindex="-1" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content bg-primary-subtle">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Review {{ typeOfActive }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="w-100 d-flex flex-column justify-content-evenly" @submit.prevent="addReview">

                        <label class="fs-5"> How far did you get?
                            <input type="text" class="form-control" v-model="reviewObject.completion">
                        </label>

                        <div class="mb-2">

                            <p class="fs-5 text-nowrap">Rating:
                                <i :class="{ 'bi': true, 'pointer': true, 'bi-star-fill': reviewObject.ratingNumber > 0, 'bi-star': reviewObject.ratingNumber == 0, 'ms-2': true }"
                                    @click="reviewObject.ratingNumber = 1"></i>

                                <i :class="{ 'bi': true, 'pointer': true, 'bi-star-fill': reviewObject.ratingNumber > 1, 'bi-star': reviewObject.ratingNumber <= 1, 'ms-2': true }"
                                    @click="reviewObject.ratingNumber = 2"></i>

                                <i :class="{ 'bi': true, 'pointer': true, 'bi-star-fill': reviewObject.ratingNumber > 2, 'bi-star': reviewObject.ratingNumber <= 2, 'ms-2': true }"
                                    @click="reviewObject.ratingNumber = 3"></i>

                                <i :class="{ 'bi': true, 'pointer': true, 'bi-star-fill': reviewObject.ratingNumber > 3, 'bi-star': reviewObject.ratingNumber <= 3, 'ms-2': true }"
                                    @click="reviewObject.ratingNumber = 4"></i>

                                <i :class="{ 'bi': true, 'pointer': true, 'bi-star-fill': reviewObject.ratingNumber > 4, 'bi-star': reviewObject.ratingNumber <= 4, 'ms-2': true }"
                                    @click="reviewObject.ratingNumber = 5"></i>
                            </p>
                        </div>

                        <label for="finalThoughts" class="fs-5">Final Thoughts:</label>
                        <textarea name="finalThoughts" id="finalThoughts" class="fs-6 mb-2 form-control"
                            v-model="reviewObject.review"></textarea>

                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>