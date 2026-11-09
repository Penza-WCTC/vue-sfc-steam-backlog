export default function ReviewCollection(items){
    items = items ?? [];

    items.getByUser = function(user){
        return items.filter(item => item.userId === user.id);
    }

    items.getByMedia = function(media){
        //add in an id system, decide if you want to use steam id's, or your own id system
        return items.filter(item => item.reviewedMedia.name == media.name && item.reviewedMedia.constructor == media.constructor);
    }

    items.add = function(user, review){
        let foundThing = items.find(item => item.userId == user.id && item.reviewedMedia == review.reviewedMedia)

        if(foundThing){
            foundThing.edit(review.ratingNumber, review.review, review.completion)
        }else{
            items.push(review)
        }
    }

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
