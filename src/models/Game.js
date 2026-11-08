import Media from "./Media.js"

export default class Game extends Media{
    constructor(name,imageUrl,tags,shortDescription,achievementCount){
        super(name,imageUrl,tags,shortDescription)

        this.achievementCount = achievementCount ?? 0

        this.hoursPlayed = 0
    }
}
