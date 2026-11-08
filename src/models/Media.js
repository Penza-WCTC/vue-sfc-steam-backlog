export default class Media{
    constructor(name,imageUrl,tags,shortDescription){
        this.name = name ?? "Unnamed Work"

        this.imageUrl = imageUrl ?? ""
        
        this.tags = tags ?? [""]
        
        this.shortDescription = shortDescription ?? "Undescribed Work"
        
        this.seen = false
    }
}
