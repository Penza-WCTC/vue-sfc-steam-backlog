import Media from "./Media.js"

export default class Book extends Media{
    constructor(name,imageUrl,tags,shortDescription,pageCount){
        super(name,imageUrl,tags,shortDescription)
        
        this.pageCount = pageCount
    }
}
