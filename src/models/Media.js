/**
 * Class for Media Model
 * @param {String} name This is the name
 * @param {String} imageUrl This is the URL of the game cover
 * @param {Array<String>} tags This is a list of tags
 * @param {String} shortDescription This is a short description
 * @constructor
*/
export default class Media{
    constructor(name,imageUrl,tags,shortDescription){
        this.name = name ?? "Unnamed Work"

        this.imageUrl = imageUrl ?? ""
        
        this.tags = tags ?? [""]
        
        this.shortDescription = shortDescription ?? "Undescribed Work"
        
        this.seen = false
    }
}
