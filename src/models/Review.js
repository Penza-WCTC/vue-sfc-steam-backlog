import Media from "./Media.js"

/**
 * Class for Review
 * @param {Number} ratingNumber How many stars rated.
 * @param {String} completion How far the user got.
 * @param {String} review User written review. 
 * @param {Media} reviewedMedia This will be the Media-Extended Object being reviewed
 * @param {String} userId UserID of the user who wrote the review
 * @param {String} userName UserName of the user who wrote the review
 */
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

    /**
     * Allows for the review to be called and edited as needed
     * @param {Number} ratingNumber This is the star count of the review. 
     * @param {String} review This is the user written text of the review.
     * @param {String} completion This is how far the user got, as described by user.
     */
    edit(ratingNumber=this.ratingNumber, review=this.review, completion=this.review){
        this.ratingNumber = ratingNumber
        this.review = review
        this.completion = completion
    }
}
