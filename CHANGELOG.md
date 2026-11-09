# Assignment "Vue App v4.0 - Patterns" Changelog

Changes will be noted here, with each commit acting as a new header. Trying out something new this time :>

## 1.3 - Adjusted Review List

### ReviewList.vue is created
This is created to manage the list so that I am not doing the filtering logic in the MainSiteView or ProfileView files.

### ReviewItem.vue is updated
If users imput empty fields, now we handle them in the component template with v-ifs

## 1.3.1 - Adjusted Game Chooser to use objects

### fullLibrary is created to hold tempory data objects
I was tired of looking at temp-name-id, so I decided to go through and parse the steamAPI and get 25 entries to use. Here is an example:
```javascript
    {name: "APICO", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1390190/header.jpg?t=1780568220", tags: ["Casual","Simulation"], achievementCount: 72, shortDescription: "APICO is a laid-back beekeeping sim game about breeding, collecting, &amp; conserving bees! Set in a series of lush environments, APICO uniquely combines resource gathering, biology, and beekeeping minigames, taking ideas from a mix of real-life and fantasy apiculture &amp; floriculture.", hoursPlayed: 0, selectedDate:0, seen: false}
```

### Site-wide update to use these data objects
Because of the shift from useless temp-data objects to these real objects, many files were impacted. Changes primarally sat in the GameSelectorSection and SteamCarousel sections.

## 1.3.1.1 - SteamImage empty url fix

### Added seen to data objects
I realized I needed a system to see if images had been seen before, so now there is a seen property.

### Issue resolved in SteamImage
We now pass in a full URL so SteamImage no longer needs to construct a URL from steam IDs.

## 1.3.2 - Updated Data

### Created models for the data objects
Now there are
- Media.js
- Game.js
- Book.js
- Album.js
Available as models, with constructors for each.

### Update to Data Objects
Data objects now are created with a call to their respective model's constructor.
```javascript
    //Here is Apico again, as you can see not many changes, but now its in a constructor call rather then a random object.

    new Game("Apico", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1390190/header.jpg?t=1780568220", ["Casual", "Simulation"], "APICO is a laid-back beekeeping sim game about breeding, collecting, &amp; conserving bees! Set in a series of lush environments, APICO uniquely combines resource gathering, biology, and beekeeping minigames, taking ideas from a mix of real-life and fantasy apiculture &amp; floriculture.", 72),
```
With this change, we now also have two Books and two Albums in the fullLibrary list.
```javascript
    //Here is an Album
    new Album("Black Elvis","https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/0d/1d/3f/0d1d3f70-63ed-d13f-c94d-e81171e59532/886447096628.jpg/100x100bb.jpg",["Hip Hop / Rap"],"Black Elvis/Lost in Space (1999) is an album by underground hip-hop pioneer Kool Keith, released under his Black Elvis persona. The album blends experimental hip-hop, futuristic production, eccentric storytelling, and surreal humor.","Kool Keith","LP"),
```
```javascript
    //Here is a Book
    new Book("Inferno","https://fcs-img.s3.amazonaws.com/1ebda62b-7f02-4fab-8e39-a5e6016ae6b4/466eec96-560c-4f00-b720-b18d0118fc06/XL.jpg",["Fiction","Classic"],"Dante’s Inferno follows Dante’s journey through the nine circles of Hell, guided by the Roman poet Virgil, where he witnesses the punishments of sinners. Along the way, the poem explores themes of sin, morality, justice, and redemption.",400),
```
As you can see, some unique fields are there between the two of them.

### Fix to ImageCarousel
Before, all images were the same from Steam, but now there can be differently sized images. Image file "defaultBackground" was added, which we use to base the heights of the new images off of. They are then centered inside of the "defaultBackground" image. There is a backup of the original image used, if the new light grey color does not work out. This took a very long time to make work and there is remarkably little to say about it.

## 1.3.3 - Created BacklogCollection, Adjusted SteamCarousel

### BacklogCollection created
This collection is created to organize the Media items in the backlog into one list. The collection has 2 main functions: filtering and returning one random.
```javascript
    //This is the filter, it returns a list of Game objects that are in the collection.
    //We can do this for each extension of Media that we have in our list.

    items.getGames = function () {
        return items.filter(item => item.constructor === Game);
    }
```

```javascript
    //This is the random returner

    items.getUnseenRandom = function (choice = Media) {

        //this is here to grab all objects that of the same class as your choice.
        let chosenArray = items.filter(item => item instanceof choice)

        //this tests to see if the class chosen was in the list, if not we return an error.
        if (chosenArray.length == 0) {
            throw new Error(choice.constructor + " is not in the list of items")
        }

        //if there is something in this list, then we go through and grab all the objects that you haven't seen before.
        chosenArray = chosenArray.filter(item => item.seen == false)

        //if you have seen all of them, then we reset each object to be unseen, and then recall the function.
        if (chosenArray.length == 0) {
            items.forEach(item => {
                item.seen = false;
            });

            //this recall with obviously work, as all things in the list work and are unseen, so a successful return is guarenteed.
            return this.getUnseenRandom(choice);

        //if there are unseen games in the chosenArray, then we select a random one, and send it to be used in the program.
        } else {
            let returnedChoice = chosenArray[Math.floor(Math.random() * (chosenArray.length))];

            returnedChoice.seen = true;

            return returnedChoice;

        }
    }
```

### Update to fullLibrary
fullLibrary is renamed to allData, and fullLibrary becomes a computed property of BacklogCreation(this.allData)

### Update to SteamCarouselHeader
The Header controlled a lot of get random game logic, which is now controlled by the collection, so there was a lot of controll reallocation.

## 1.3.4 - BacklogCollection and Models implemented site-wide

### Lots of small changes
+74 and -65 lines worth of changes and honestly not much to say about them. Mostly just going around and dynamically changing the buttons and headers from saying "game" to saying "this.activeGame.constructor.name" and then putting that in a computed property. 

### ActiveGameDisplay update
Two new computed properties added, in sort of a lazy fix, to adjust the component based off what .constructor type was passed in.

### .filter functionality removed from BacklogCollection
I have no clue why I did this. The only reason I can think of is that they are not being implemented anywhere and are easy to rebuild if needed.

## 1.3.5 - Added and Implemented ReviewCollection

### Review Model created
There is now a Model for Reviews, that way I know that all the fields that I need will be there. Also can move some editing power over to the Review itself.
```javascript
    //Here is the constructor header, didn't move the test reviews over to this format, because their purpose is only to fill up space. New reviews all are created as review objects though.
    constructor(ratingNumber, completion, review, reviewedMedia, userId, userName) 

    //This is in the constructor, it checks to make sure that the "reviewedMedia" object is actually an instance of Media, so that we can store the data about the game in the review
    if (!(reviewedMedia instanceof Media)) {
            throw new Error(reviewedMedia + " is not an acceptable review")
        } else {
            this.reviewedMedia = reviewedMedia
        }

    //Here is a pretty simple edit method that will allow me to call the review to make changes if needed
    edit(ratingNumber=this.ratingNumber, review=this.review, completion=this.review){
        this.ratingNumber = ratingNumber
        this.review = review
        this.completion = completion
    }
```

### ReviewCollection Created
Created a collection for the review list, as the filtering and adding functionality was spreading all around the app and getting very messy.
```javascript
    //There are two filter methods:
    items.getByUser = function(user){
        return items.filter(item => item.userId === user.id);
    }

    items.getByMedia = function(media){
        //add in an id system, decide if you want to use steam id's, or your own id system
        return items.filter(item => item.reviewedMedia.name == media.name && item.reviewedMedia.constructor == media.constructor);
    }

    //There is an add function that checks to see if the game has already been reviewed by the user, and if so, we overwrite instead of adding another review
    items.add = function(user, review){
        //foundThing is the Review object written by the user previously
        let foundThing = items.find(item => item.userId == user.id && item.reviewedMedia == review.reviewedMedia)

        if(foundThing){
            //because foundThing is a Review object, there is a .edit() function that allows us to edit the object easily.
            foundThing.edit(review.ratingNumber, review.review, review.completion)
        }else{
            //if there is no foundThing, then we push the new review
            items.push(review)
        }
    }
```

## 1.3.5.1 - DocBlocks Added

### Added DocBlocks to models
Each model is now documented with DocBlocks. In the future, I intend to do DocBlocks as I code.

## 1.3.5.2 - CHANGELOG.md Written

### Wrote the CHANGELOG.md
Saving this for last was a mistake. In the future, I intend to update my CHANGELOG.md as I go.