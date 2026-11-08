import Media from "./Media.js"

import Album from "./Album.js"
import Book from "./Book.js"
import Game from "./Game.js"


export default function BacklogCollection(items) {
    items = items ?? []

    items.getGames = function () {
        return items.filter(item => item.constructor === Game);
    }

    items.getBooks = function () {
        return items.filter(item => item.constructor === Book);
    }

    items.getAlbums = function () {
        return items.filter(item => item.constructor === Album);
    }

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