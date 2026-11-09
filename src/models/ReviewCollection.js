/**
 * This adds ReviewCollection functionality to a passed array of Review objects
 * @param {Array<Review>} items 
 * @returns The same Array<Review> that now has ReviewCollection functionality
 */
export default function ReviewCollection(items){
    items = items ?? [];

    /**
     * Operates on a array augmented by ReviewCollection
     * @param {Object} user This should be stored as activeUser somewhere, pass in that object. 
     * @returns {Array<Review>} A Filtered version of the array the method was called on that is only posts by the inputted user. 
     */
    items.getByUser = function(user){
        return items.filter(item => item.userId === user.id);
    }

    /**
     * Operates on a array augmented by ReviewCollection
     * @param {Media} media This is stored in Reviews as reviewedMedia, otherwise any Media subclass works. 
     * @returns {Array<Review>} A Filtered version of the array the method was called on that is only reviews on the passed in Media object. 
     */
    items.getByMedia = function(media){
        //add in an id system, decide if you want to use steam id's, or your own id system
        return items.filter(item => item.reviewedMedia.name == media.name && item.reviewedMedia.constructor == media.constructor);
    }

    /**
     * Adds to the list if the review is new, otherwise updates old entry
     * @param {Object} user This should be stored as activeUser somewhere, pass in that object 
     * @param {Review} review This is the review object that we are either adding or using to update the old entry 
     */
    items.add = function(user, review){
        let foundThing = items.find(item => item.userId == user.id && item.reviewedMedia == review.reviewedMedia)

        if(foundThing){
            foundThing.edit(review.ratingNumber, review.review, review.completion)
        }else{
            items.push(review)
        }
    }

    /**
     * This deletes the passed review from the array it was called on. Throws an error if the review is not in the list.
     * @param {Review} review This is the review object that you want deleted. 
     */
    items.delete = function(review){
        indexToDelete = items.findIndex(item => item == review)

        if(indexToDelete > -1){
            items.splice(indexToDelete, 1)
        }else{
            throw new Error(review+" is not in the list of reviews")
        }

    }

    return items
}
