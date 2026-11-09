import Media from "./Media.js"

/**
 * Class for Book Model that extends Media
 * @param {String} name This is the name
 * @param {String} imageUrl This is the URL of the book's cover
 * @param {Array<String>} tags This is a list of tags
 * @param {String} shortDescription This is a short description
 * @param {String} author This is the author's name
 * @param {Number} pageCount This is the page count for the book
 * @constructor
 * @extends models.Media
 */
export default class Book extends Media{
    constructor(name,imageUrl,tags,shortDescription,author,pageCount){
        super(name,imageUrl,tags,shortDescription)
        this.author = author

        this.pageCount = pageCount
    }
}
