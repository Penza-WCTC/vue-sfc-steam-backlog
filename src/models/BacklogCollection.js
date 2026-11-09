import Media from "./Media.js"

export default function BacklogCollection(items) {
    items = items ?? []

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
