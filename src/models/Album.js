import Media from "./Media.js"

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
