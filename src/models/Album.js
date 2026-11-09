import Media from "./Media.js"

/**
 * Class for Album Model that extends Media
 * @param {String} name This is the name
 * @param {String} imageUrl This is the URL of the album's cover
 * @param {Array<String>} tags This is a list of tags
 * @param {String} shortDescription This is a short description
 * @param {String} artist This is the artist's name
 * @param {String} albumType This is the type of Album, it is checked and can throw error if you don't grab from Enum
 * @constructor
 * @extends models.Media
 */

export default class Album extends Media{
    static ALBUMTYPES = ["SINGLE","ALBUM","EP","LP","COMPILATION","SOUNDTRACK"];

    constructor(name,imageUrl,tags,shortDescription, artist, albumType){
        super(name,imageUrl,tags,shortDescription)
        
        this.artist = artist ?? "Uncredited Work"
        
        const checkThis = albumType?.toUpperCase()

        if(!Album.ALBUMTYPES.includes(checkThis)){
            throw new Error(albumType+" is not a type of album.")
        }else{
            this.albumType = albumType
        }
    }

}
