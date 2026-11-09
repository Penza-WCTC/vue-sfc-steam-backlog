<script>
import ReviewListItem from './ReviewListItem.vue';

export default {
    name: "ReviewList",

    components: {
        ReviewListItem
    },

    props: {
        reviewList: { type: Array, required: true },
    },

}
</script>

<template>
    <div class="container text-start" v-for="review in reviewList">
        <review-list-item :review="review"></review-list-item>
    </div>
</template>