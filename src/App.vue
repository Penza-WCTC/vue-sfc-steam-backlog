<script>
import BacklogCollection from './models/BacklogCollection.js';

import Album from './models/Album.js';
import Book from './models/Book.js';
import Game from './models/Game.js';
import ReviewCollection from './models/ReviewCollection.js';


export default {
    name: 'App',

    data: function () {
        return {
            reviewData: [
                {
                    ratingNumber: 1,
                    completion: 'Game got too repetitive',
                    review: 'too many machines to build. would not build again. too many machines to build. would not build again. too many machines to build. would not build again.',
                    reviewedMedia: new Game("Factorio", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/427520/ab9a2df0a77caebde20dc45adc021de8cdcf7cc5/header.jpg?t=1792752343", ["Casual", "Indie", "Simulation", "Strategy"], "Factorio is a game about building and creating automated factories to produce items of increasing complexity, within an infinite 2D world. Use your imagination to design your factory, combine simple elements into ingenious structures, and finally protect it from the creatures who don't really like you.", 88),
                    userId: '76561198449377399',
                    userName: 'chromokiz',
                    communityVote: 10,
                    editing: false
                },

                {
                    ratingNumber: 4,
                    completion: 'Finished main quest',
                    review: "I really like how you can build your own base. I think that it's neat that you can build any way you want. I wish the tutorial was more robust. I like it more then Satisfactory. Here are more test words to make this review longer then the last.",
                    reviewedMedia: new Game("Factorio", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/427520/ab9a2df0a77caebde20dc45adc021de8cdcf7cc5/header.jpg?t=1792752343", ["Casual", "Indie", "Simulation", "Strategy"], "Factorio is a game about building and creating automated factories to produce items of increasing complexity, within an infinite 2D world. Use your imagination to design your factory, combine simple elements into ingenious structures, and finally protect it from the creatures who don't really like you.", 88),
                    userId: '76561199086724709',
                    userName: 'FranksSinatra',
                    communityVote: 4,
                    editing: false
                },

                {
                    ratingNumber: 4,
                    completion: 'Fully Completed',
                    review: "This game was really cool. One of the best dark fantasy RPGs. It is brutal, random, and unforgiving, but absolutely worth every minute of your time. The story, lore, and overall experience will stick with me for a long time.",
                    reviewedMedia: new Game("ENDER LILIES: Quietus of the Knights", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1369630/header.jpg?t=1788931074", ["Action", "Indie", "RPG"], "ENDER LILIES is a dark fantasy 2D action RPG about unraveling the mysteries of a destroyed kingdom. On this sorrowful journey, encounter horrific enemies against whom a moment of inattention could be fatal. Overcome these hardships and seek the truth with the help of fallen knights.", 38),
                    userId: '123123123123123123',
                    userName: 'testUser',
                    communityVote: 4,
                    editing: false
                },

                {
                    ratingNumber: 2,
                    completion: 'Game was boring',
                    review: "Core Keeper combines many gameplay elements from different genres in one game. That makes it a lot of fun and keeps you hooked. Unfortunately, in the endgame you notice that all these different areas ultimately lead nowhere. One example is the automation with conveyor belts. What do I actually need thousands of resources for that I produce there through automation? They pile up by the thousands in the box and barely help you in the further course of the game. The automated farms are fun, but in the end they aren't really needed.",
                    reviewedMedia: new Album("Black Elvis", "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/0d/1d/3f/0d1d3f70-63ed-d13f-c94d-e81171e59532/886447096628.jpg/100x100bb.jpg", ["Hip Hop / Rap"], "Black Elvis/Lost in Space (1999) is an album by underground hip-hop pioneer Kool Keith, released under his Black Elvis persona. The album blends experimental hip-hop, futuristic production, eccentric storytelling, and surreal humor.", "Kool Keith", "LP"),
                    userId: '123123123123123123',
                    userName: 'testUser',
                    communityVote: 4,
                    editing: false
                }

            ],

            allData: [
                new Game("Factorio", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/427520/ab9a2df0a77caebde20dc45adc021de8cdcf7cc5/header.jpg?t=1792752343", ["Casual", "Indie", "Simulation", "Strategy"], "Factorio is a game about building and creating automated factories to produce items of increasing complexity, within an infinite 2D world. Use your imagination to design your factory, combine simple elements into ingenious structures, and finally protect it from the creatures who don't really like you.", 88),
                new Game("Apico", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1390190/header.jpg?t=1780568220", ["Casual", "Simulation"], "APICO is a laid-back beekeeping sim game about breeding, collecting, &amp; conserving bees! Set in a series of lush environments, APICO uniquely combines resource gathering, biology, and beekeeping minigames, taking ideas from a mix of real-life and fantasy apiculture &amp; floriculture.", 72),
                new Game("DEMON'S TILT", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/422510/header.jpg?t=1736882887", ["Action", "Indie"], "TURBO CHARGED PINBALL RETURNS! Now with bigger sprites, more baddies, more secrets &amp; MORE BULLETS! Demon's Tilt pushes the limits of the Video Pinball genre with SHMUP &amp; Hack N' Slash elements.", 29),
                new Game("Chicory: A Colorful Tale", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1123450/header.jpg?t=1783360001", ["Adventure", "Indie", "RPG"], "A top-down adventure game in a coloring book world full of vibrant characters. Use painting powers to explore, solve puzzles, make friends, and draw on anything! From creators on Wandersong + Celeste.", 33),
                new Game("Duskers", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/254320/header.jpg?t=1776751920", ["Indie", "Simulation", "Strategy"], "Pilot drones into derelict spaceships to find the means to survive and piece together how the universe became a giant graveyard.", 16),
                new Game("Kingsway", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588950/header.jpg?t=1734680274", ["Adventure", "RPG", "Simulation"], "Kingsway is the #1 operating system for daily tasks such as skeleton smashing and loot-organizing. Trouble sorting through all your potions and swords? Don't worry! Kingsway can help you manage, and with an easy to use interface you'll have time leftover for a peaceful stroll through the underworld.", 27),
                new Game("OpenTTD", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1536610/header.jpg?t=1773680448", ["Casual", "Indie", "Simulation"], "OpenTTD is a business simulation game in which players earn money by transporting passengers and cargo via road, rail, water, and air. It is an open-source remake and expansion of the 1995 Chris Sawyer video game Transport Tycoon Deluxe.", 0),
                new Game("Nidhogg", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/94400/header.jpg?t=1792087217", ["Action", "Indie", "Sports"], "Nidhogg is the epic award-winning game of fencing tug-of-war complete with flying giant worms.", 12),
                new Game("Absolver", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/473690/header.jpg?t=1728689155", ["Action", "Adventure", "Indie"], "Absolver is an online multiplayer combat game where players are placed behind the mask of a Prospect under control of the Guides, the new rulers of the fallen Adal Empire, who will determine your worth in joining their elite corps of Absolvers.", 22),
                new Game("Placid Plastic Duck Simulator", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1999360/header.jpg?t=1773217106", ["Casual", "Simulation"], "The ultimate high-tech rubber duck simulation, Placid Plastic Duck brings you dangerous levels of relaxation. With chill music, dreamy 3D graphics, and many different happy ducks, your only priority is to float around. Zero Ducks given.", 48),
                new Game("Axiom Verge", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/332200/header.jpg?t=1645563574", ["Action", "Adventure", "Indie"], "Explore and uncover the mystery of a surreal alien world by blasting aliens and glitching your environment in this intense retro side-scrolling action/adventure.", 29),
                new Game("ENDER LILIES: Quietus of the Knights", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1369630/header.jpg?t=1788931074", ["Action", "Indie", "RPG"], "ENDER LILIES is a dark fantasy 2D action RPG about unraveling the mysteries of a destroyed kingdom. On this sorrowful journey, encounter horrific enemies against whom a moment of inattention could be fatal. Overcome these hardships and seek the truth with the help of fallen knights.", 38),
                new Game("Mo:Astray", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1104660/header.jpg?t=1753243548", ["Action", "Adventure", "Indie"], "MO: Astray is a pixel art, side-scrolling, action-platformer. Lead MO through mind-bending puzzles using special abilities. Bizarre enemies, threatening traps and ingenious level designs await.", 26),
                new Game("Kingdom Two Crowns", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/701160/84f80b39706d257e9b048904b5975a9d4d8d9016/header_alt_assets_18.jpg?t=1791479063", ["Adventure", "Indie", "Simulation", "Strategy"], "Gather coins, build defenses and reclaim your fallen Kingdom. Explore and uncover secrets, unlock new technologies and protect your crown versus waves of Greed monsters that come at night. Kingdom is a solo or co-op micro-strategy and tower defense game set in an atmospheric pixel world.", 46),
                new Game("Daddish 3D", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2888870/header.jpg?t=1713787843", ["Action", "Adventure", "Indie"], "He's a dad AND a radish. Dadish's kids are missing and he needs your help to find them! Explore an exciting world, face off with fast-food themed foes, and reunite Dadish with his missing children in this challenging 3D platforming adventure.", 8),
                new Game("Alchemia", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/932330/header.jpg?t=1560433838", ["Indie"], "Alchemia is a cryptic puzzle game which is solved through research outside of the game.", 1),
                new Game("Chants of Sennaar", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1931770/header.jpg?t=1774006124", ["Adventure", "Indie"], "In this award-winning puzzle adventure game, play as the Traveler on a quest to reunite the Peoples of the Tower. Observe, listen, and decipher ancient languages in a fascinating universe inspired by the Myth of Babel.", 25),
                new Game("Machinarium", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/40700/header.jpg?t=1791501193", ["Adventure", "Indie"], "Machinarium is the award-winning adventure game from the makers of Phonopolis, CHUCHEL and the Samorost series. Help Josef the robot save his girlfriend Berta, kidnapped by the Black Cap Brotherhood gang!", 12),
                new Game("The Witness", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/210970/header.jpg?t=1720810823", ["Adventure", "Indie"], "You wake up, alone, on a strange island full of puzzles that will challenge and surprise you.", 2),
                new Game("Loot River", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1494260/header.jpg?t=1703004759", ["Action", "Adventure", "Indie", "RPG", "Strategy"], "Explore procedurally generated labyrinths in this challenging, narrative-rich roguelike. Master deep combat. Slide blocks of ancient ruins. Defeat bestial abominations. Loot, level up, strategize, fight, die and wake up anew. Unlock the secrets of the Loot River. Immortality is a bittersweet gift.", 15),
                new Game("Loop Hero", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1282730/header.jpg?t=1751489185", ["Indie", "RPG", "Stragety"], "The Lich has thrown the world into a timeless loop and plunged its inhabitants into never ending chaos. Wield an expanding deck of mystical cards to place enemies, buildings, and terrain along each unique expedition loop for the brave hero.", 50),
                new Game("Caves of Qud", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/333640/header.jpg?t=1790186617", ["Adventure", "Indie", "RPG", "Strategy"], "Inhabit a deeply-simulated science fantasy world and chisel through layers of thousand-year-old civilizations. Build a character from over a hundred mutations and cybernetics. The award-winning sandbox roguelike &amp; RPG full of robots, deep lore, and sentient plants.", 150),
                new Game("Songs of Syx", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1162750/1139c83ae1b3886732d64d7933542a1b7e12db68/header_alt_assets_3.jpg?t=1791453053", ["Indie", "Simulation", "Strategy", "Early Access"], "Songs of Syx is a fantasy city-builder with vast battles simulating thousands of citizens and soldiers. Start off as a small village and build, scheme, and fight your way towards a mighty empire. The mechanics are deep and true to life, where tiny events can spiral into the collapse of kingdoms.", 34),
                new Game("Felvidek", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2299900/header.jpg?t=1748904703", ["Indie", "RPG"], "In Felvidek, a JRPG set in 15th century Slovakia, you embrace the role of an alcoholic knight Pavol. Meet diverse and interesting characters to help you drive out the Hussites and Ottomans who blight this land.", 0),
                new Game("TRIANGLE STRATEGY", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1850510/header.jpg?t=1790952967", ["RPG", "Simulation", "Strategy"], "A new tactics RPG from the team who brought you the Bravely series and Octopath Traveler. An epic tale, brought to life with stunning HD-2D graphics. Make difficult decisions in this story set against a backdrop of the war-torn continent of Norzelia.", 108),
                new Game("Who's Lila", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1697700/header.jpg?t=1725418523", ["Adventure", "Casual", "Indie", "RPG"], "A reverse-detective adventure, where you control your character's face", 26),
                new Game("Disillusion", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1490060/header.jpg?t=1727797122", ["Action", "Adventure", "Indie", "RPG"], "A mysterious muse calls upon you to investigate a Large tower in an oneiric land.", 18),
                new Game("Reign of the Renegade", "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2306530/header.jpg?t=1750955052", ["Indie", "Strategy"], "Reign of the Renegade is a dice-based roguelite deckbuilder. Ascend the tower, brave the odds, and create powerful synergies. Will you end the Reign of the Renegade?", 42),
                new Game("EmpyExample", "", ["Cool", "My Favorite"], "this is my description", 160),

                new Album("Black Elvis", "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/0d/1d/3f/0d1d3f70-63ed-d13f-c94d-e81171e59532/886447096628.jpg/100x100bb.jpg", ["Hip Hop / Rap"], "Black Elvis/Lost in Space (1999) is an album by underground hip-hop pioneer Kool Keith, released under his Black Elvis persona. The album blends experimental hip-hop, futuristic production, eccentric storytelling, and surreal humor.", "Kool Keith", "LP"),
                new Album("Anti Matter", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1b/c7/1e/1bc71ea9-c9a1-b708-3620-0ea49388f9a6/5051083019286.png/100x100bb.jpg", ["Hip Hop / Rap"], "Anti-Matter is a single by King Geedorah, MF DOOM's kaiju-inspired alter ego, featuring Mr. Fantastik. Built around a dark, atmospheric sample and gritty hip-hop production, the track showcases clever wordplay, unconventional storytelling, and the duo's distinctive underground rap style.", "King Geedorah", "Single"),

                new Book("Inferno", "https://fcs-img.s3.amazonaws.com/1ebda62b-7f02-4fab-8e39-a5e6016ae6b4/466eec96-560c-4f00-b720-b18d0118fc06/XL.jpg", ["Fiction", "Classic"], "Dante’s Inferno follows Dante’s journey through the nine circles of Hell, guided by the Roman poet Virgil, where he witnesses the punishments of sinners. Along the way, the poem explores themes of sin, morality, justice, and redemption.", "Dante Alighieri", 400),
                new Book("VEIL: The Secret Wars of the CIA 1981-1987", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWtUG2IJmgUmpBb_SZ3XdxpNYGX23uxhWOTQqzjTGtEw&s=10", ["Nonfiction", "Journalism"], "Based on hundreds of inside sources and secret documents, the author reveals the inner operations of the C.I.A., the world's largest and most sophisticated espionage apparatus, its players, and its clandestine relationships throughout the world", "Bob Woodward ", 543),
            ],
        }
    },

    computed: {
        fullLibrary() {
            return BacklogCollection(this.allData);
        },

        reviewList(){
            return ReviewCollection(this.reviewData);
        }
    },

    // mounted: function () {
    //     if (localStorage.getItem('reviewList')) {
    //         this.reviewList = JSON.parse(localStorage.getItem('reviewList'));
    //     }
    // },

    // watch: {
    //     reviewList: {
    //         handler() {
    //             localStorage.setItem('reviewList', JSON.stringify(this.reviewList));
    //         },
    //         deep: true,
    //     },
    // },
}
</script>

<template>

    <body class="bg-secondary-subtle">
        <nav class="navbar bg-primary mb-4">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                    <img src="./images/Logo v1.png" alt="Logo" width="30" height="24"
                        class="d-inline-block align-text-top">
                </router-link>
                <div class="justify-content-end"><router-link to="/profile">
                        <p class="text-black">Profile</p>
                    </router-link></div>
            </div>
        </nav>

        <div class="container-fluid">
            <router-view :review-list="reviewList" :full-library="fullLibrary" />
        </div>

        <footer class="d-flex justify-content-center bg-secondary pt-2 mt-5">
            <p>
                Steam Backlog - Kyle Penza <i class="bi bi-c-circle"></i>2025
            </p>
        </footer>
    </body>

</template>

<style scoped></style>
