import Media from "./Media.js"

/**
 * Class for Game Model that extends Media
 * @param {String} name This is the name
 * @param {String} imageUrl This is the URL of the game cover
 * @param {Array<String>} tags This is a list of tags
 * @param {String} shortDescription This is a short description
 * @param {String} achievementCount This is a count of all available achievements
 * @constructor
 * @extends models.Media
 */
export default class Game extends Media{
    constructor(name,imageUrl,tags,shortDescription,achievementCount){
        super(name,imageUrl,tags,shortDescription)

        this.achievementCount = achievementCount ?? 0

        this.hoursPlayed = 0
    }
}
