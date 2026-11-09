<script>

export default {
    name: "ReviewListItem",
    props: {
        review: { type: Object }
    },

    computed: {
        getSRC() {
            console.log(this.review.userName)
            return new URL(`/src/images/test-images/${this.review.userName}ProfileIcon.png`, import.meta.url).href
        },

        getAlt() {
            return `A profile picture for ${this.review.userName}`
        }
    },
}
</script>

<template>
    <div
        :class="{ 'container': true, 'pb-3': true, 'my-4': true, 'rounded': true, 'border': true, 'border-opacity-50': true, 'border-danger': review.ratingNumber < 3, 'border-success': review.ratingNumber > 2, 'py-3': true, 'px-1': true, 'bg-light': true, 'position-relative': true }">
        <div class="position-absolute top-25 start-5">
            <p><i @click="review.communityVote++"
                    :class="{ 'bi': true, 'pointer': true, 'bi-arrow-up-circle': true }"></i></p>
            <div>
                <p>{{ review.communityVote }}</p>
            </div>
            <p><i @click="review.communityVote--"
                    :class="{ 'bi': true, 'pointer': true, 'bi-arrow-down-circle': true }"></i></p>
        </div>
        <div class="row g-3">
            <div class="col-md-2 offset-md-1 d-none d-md-block">
                <img :src="getSRC" :alt="getAlt" class="w-75 mx-auto border border-2 rounded-3">
            </div>
            <div class="col-md-9 offset-1 offset-md-0">
                <div class="row g-3">
                    <div class="col-md-6">
                        <p class="fs-3">{{ review.userName }}</p>
                    </div>
                    <div class="col-md" v-if="review.completion != ''">
                        <p class="px-2 py-1 fs-6">{{ review.completion }}
                        </p>
                    </div>
                    <div class="col-md-3">
                        <p class="fs-3">
                            <i :class="{ 'bi': true, 'bi-star-fill ms-1': true, 'text-success': review.ratingNumber > 2, 'text-danger': review.ratingNumber <= 2 }"
                                v-for="n in review.ratingNumber"></i>
                            <i :class="{ 'bi': true, 'bi-star ms-1': true, 'text-black': review.ratingNumber > 2, 'text-black': review.ratingNumber <= 2 }"
                                v-for="n in (review.ratingNumber - 5) * -1" v-if="(review.ratingNumber - 5) * -1"></i>
                        </p>
                    </div>

                </div>
                <hr>    
                <div class="row g-3">
                    <div class="col" v-if="review.review">
                        <p class="fs-6">{{ review.review }}</p>
                    </div>
                    <div class="col" v-if="!review.review">
                        <p class="fs-6">This user has chosen to keep thier thoughts to themselves</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>