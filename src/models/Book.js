import Media from "./Media.js"

export default class Book extends Media{
    constructor(name,imageUrl,tags,shortDescription,author,pageCount){
        super(name,imageUrl,tags,shortDescription)
        this.author = author

        this.pageCount = pageCount
    }
}
