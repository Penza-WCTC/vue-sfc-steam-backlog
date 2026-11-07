<script>
import ReviewListItem from './ReviewListItem.vue';

export default {
    name: "ReviewList",

    components: {
        ReviewListItem
    },

    props: {
        reviewList: { type: Array, required: true },
        newReview: { type: Object},
        currentUser: { type: Object},
    },

    methods: {
        vIfRules(review){
            if(this.newReview){
                return review.gameId === this.newReview.gameId
            }else if(this.currentUser){
                return review.userId === this.currentUser.id
            }else{
                return true
            }
        },
    }
}
</script>

<template>
    <div class="container text-start" v-for="review in reviewList">
        <review-list-item v-if="vIfRules(review)" :review="review"></review-list-item>
    </div>
</template>