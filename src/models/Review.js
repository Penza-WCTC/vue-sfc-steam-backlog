import Media from "./Media.js"

export default class Review {
    constructor(ratingNumber, completion, review, reviewedMedia, userId, userName) {
        this.ratingNumber = ratingNumber ?? 0

        this.completion = completion ?? ""

        this.review = review ?? ""

        if (!(reviewedMedia instanceof Media)) {
            throw new Error(reviewedMedia + " is not an acceptable review")
        } else {
            this.reviewedMedia = reviewedMedia
        }

        if (!userId) {
            throw new Error(userId + " is null when it cannot be")
        } else {
            this.userId = userId
        }

        if (!userName) {
            throw new Error(userName + " is null when it cannot be")
        } else {
            this.userName = userName
        }

        this.communityVote = 0;

        this.editing = false;
    }

    edit(ratingNumber=this.ratingNumber, review=this.review, completion=this.review){
        this.ratingNumber = ratingNumber
        this.review = review
        this.completion = completion
    }
}
