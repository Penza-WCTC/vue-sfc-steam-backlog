import Media from "./Media.js"

/**
 * This adds BacklogCollection functionality to a passed in array of Media objects.
 * @param {Array<Media>?} items 
 * @returns The same Array<Media> that now has BacklogCollection methods.
 */
export default function BacklogCollection(items) {
    items = items ?? []

    /**
     * Operates on a list augmented by BacklogCollection and returns a {Media} object
     * @param {Media} choice 
     * @returns {Media} One random Media object from the BacklogCollection list that has not been seen before
     */
    items.getUnseenRandom = function (choice = Media) {
        let chosenArray = items.filter(item => item instanceof choice)

        if (chosenArray.length == 0) {
            throw new Error(choice.constructor + " is not in the list of items")
        }

        chosenArray = chosenArray.filter(item => item.seen == false)

        if (chosenArray.length == 0) {
            items.forEach(item => {
                item.seen = false;
            });

            return this.getUnseenRandom(choice);

        } else {
            let returnedChoice = chosenArray[Math.floor(Math.random() * (chosenArray.length))];

            returnedChoice.seen = true;

            return returnedChoice;

        }
    }

    return items
}
