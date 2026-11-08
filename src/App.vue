<script>


export default {
    name: 'App',

    data: function () {
        return {
            reviewList: [
                {
                    ratingNumber: 1,
                    completion: 'Game got too repetitive',
                    review: 'too many machines to build. would not build again. too many machines to build. would not build again. too many machines to build. would not build again.',
                    hoursPlayed: 0,
                    gameId: '427520',
                    gameName: 'Factorio',
                    userId: '76561198449377399',
                    userName: 'chromokiz',
                    communityVote: 10,
                    editing: false
                },

                {
                    ratingNumber: 4,
                    completion: 'Finished main quest',
                    review: "I really like how you can build your own base. I think that it's neat that you can build any way you want. I wish the tutorial was more robust. I like it more then Satisfactory. Here are more test words to make this review longer then the last.",
                    hoursPlayed: 40,
                    gameId: '427520',
                    gameName: 'Factorio',
                    userId: '76561199086724709',
                    userName: 'FranksSinatra',
                    communityVote: 4,
                    editing: false
                },

                {
                    ratingNumber: 4,
                    completion: 'Fully Completed',
                    review: "This game was really cool. One of the best dark fantasy RPGs. It is brutal, random, and unforgiving, but absolutely worth every minute of your time. The story, lore, and overall experience will stick with me for a long time.",
                    hoursPlayed: 80,
                    gameId: '1002300',
                    gameName: 'Fear and Hunger',
                    userId: '123123123123123123',
                    userName: 'testUser',
                    communityVote: 4,
                    editing: false
                },

                {
                    ratingNumber: 2,
                    completion: 'Game was boring',
                    review: "Core Keeper combines many gameplay elements from different genres in one game. That makes it a lot of fun and keeps you hooked. Unfortunately, in the endgame you notice that all these different areas ultimately lead nowhere. One example is the automation with conveyor belts. What do I actually need thousands of resources for that I produce there through automation? They pile up by the thousands in the box and barely help you in the further course of the game. The automated farms are fun, but in the end they aren't really needed.",
                    hoursPlayed: 26,
                    gameId: '1621690',
                    gameName: 'Core Keeper',
                    userId: '123123123123123123',
                    userName: 'testUser',
                    communityVote: 4,
                    editing: false
                }

            ],

            fullLibrary: [
                {name: "APICO", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1390190/header.jpg?t=1780568220", tags: ["Casual","Simulation"], achievementCount: 72, shortDescription: "APICO is a laid-back beekeeping sim game about breeding, collecting, &amp; conserving bees! Set in a series of lush environments, APICO uniquely combines resource gathering, biology, and beekeeping minigames, taking ideas from a mix of real-life and fantasy apiculture &amp; floriculture.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "DEMON'S TILT", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/422510/header.jpg?t=1736882887", tags: ["Action","Indie"], achievementCount: 29, shortDescription: "TURBO CHARGED PINBALL RETURNS! Now with bigger sprites, more baddies, more secrets &amp; MORE BULLETS! Demon's Tilt pushes the limits of the Video Pinball genre with SHMUP &amp; Hack N' Slash elements.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Chicory: A Colorful Tale", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1123450/header.jpg?t=1783360001", tags: ["Adventure","Indie","RPG"], achievementCount: 33, shortDescription: "A top-down adventure game in a coloring book world full of vibrant characters. Use painting powers to explore, solve puzzles, make friends, and draw on anything! From creators on Wandersong + Celeste.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Duskers", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/254320/header.jpg?t=1776751920", tags: ["Indie","Simulation","Strategy"], achievementCount: 16, shortDescription: "Pilot drones into derelict spaceships to find the means to survive and piece together how the universe became a giant graveyard.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Kingsway", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588950/header.jpg?t=1734680274", tags: ["Adventure","RPG","Simulation",], achievementCount: 27, shortDescription: "Kingsway is the #1 operating system for daily tasks such as skeleton smashing and loot-organizing. Trouble sorting through all your potions and swords? Don't worry! Kingsway can help you manage, and with an easy to use interface you'll have time leftover for a peaceful stroll through the underworld.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "OpenTTD", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1536610/header.jpg?t=1773680448", tags: ["Casual","Indie","Simulation"], achievementCount: 0, shortDescription: "OpenTTD is a business simulation game in which players earn money by transporting passengers and cargo via road, rail, water, and air. It is an open-source remake and expansion of the 1995 Chris Sawyer video game Transport Tycoon Deluxe.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Nidhogg", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/94400/header.jpg?t=1792087217", tags: ["Action","Indie","Sports"], achievementCount: 12, shortDescription: "Nidhogg is the epic award-winning game of fencing tug-of-war complete with flying giant worms.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Absolver", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/473690/header.jpg?t=1728689155", tags: ["Action","Adventure","Indie"], achievementCount: 22, shortDescription: "Absolver is an online multiplayer combat game where players are placed behind the mask of a Prospect under control of the Guides, the new rulers of the fallen Adal Empire, who will determine your worth in joining their elite corps of Absolvers.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Placid Plastic Duck Simulator", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1999360/header.jpg?t=1773217106", tags: ["Casual","Simulation"], achievementCount: 48, shortDescription: "The ultimate high-tech rubber duck simulation, Placid Plastic Duck brings you dangerous levels of relaxation. With chill music, dreamy 3D graphics, and many different happy ducks, your only priority is to float around. Zero Ducks given.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Axiom Verge", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/332200/header.jpg?t=1645563574", tags: ["Action","Adventure","Indie"], achievementCount: 29, shortDescription: "Explore and uncover the mystery of a surreal alien world by blasting aliens and glitching your environment in this intense retro side-scrolling action/adventure.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "ENDER LILIES: Quietus of the Knights", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1369630/header.jpg?t=1788931074", tags: ["Action","Indie","RPG"], achievementCount: 38, shortDescription: "ENDER LILIES is a dark fantasy 2D action RPG about unraveling the mysteries of a destroyed kingdom. On this sorrowful journey, encounter horrific enemies against whom a moment of inattention could be fatal. Overcome these hardships and seek the truth with the help of fallen knights.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Mo:Astray", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1104660/header.jpg?t=1753243548", tags: ["Action","Adventure","Indie"], achievementCount: 26, shortDescription: "MO: Astray is a pixel art, side-scrolling, action-platformer. Lead MO through mind-bending puzzles using special abilities. Bizarre enemies, threatening traps and ingenious level designs await.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Kingdom Two Crowns", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/701160/84f80b39706d257e9b048904b5975a9d4d8d9016/header_alt_assets_18.jpg?t=1791479063", tags: ["Adventure","Indie","Simulation","Strategy"], achievementCount: 46, shortDescription: "Gather coins, build defenses and reclaim your fallen Kingdom. Explore and uncover secrets, unlock new technologies and protect your crown versus waves of Greed monsters that come at night. Kingdom is a solo or co-op micro-strategy and tower defense game set in an atmospheric pixel world.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Daddish 3D", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2888870/header.jpg?t=1713787843", tags: ["Action","Adventure","Indie"], achievementCount: 8, shortDescription: "He's a dad AND a radish. Dadish's kids are missing and he needs your help to find them! Explore an exciting world, face off with fast-food themed foes, and reunite Dadish with his missing children in this challenging 3D platforming adventure.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Alchemia", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/932330/header.jpg?t=1560433838", tags: ["Indie"], achievementCount: 1, shortDescription: "Alchemia is a cryptic puzzle game which is solved through research outside of the game.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Chants of Sennaar", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1931770/header.jpg?t=1774006124", tags: ["Adventure","Indie"], achievementCount: 25, shortDescription: "In this award-winning puzzle adventure game, play as the Traveler on a quest to reunite the Peoples of the Tower. Observe, listen, and decipher ancient languages in a fascinating universe inspired by the Myth of Babel.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Machinarium", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/40700/header.jpg?t=1791501193", tags: ["Adventure","Indie"], achievementCount: 12, shortDescription: "Machinarium is the award-winning adventure game from the makers of Phonopolis, CHUCHEL and the Samorost series. Help Josef the robot save his girlfriend Berta, kidnapped by the Black Cap Brotherhood gang!", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "The Witness", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/210970/header.jpg?t=1720810823", tags: ["Adventure","Indie"], achievementCount: 2, shortDescription: "You wake up, alone, on a strange island full of puzzles that will challenge and surprise you.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Loot River", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1494260/header.jpg?t=1703004759", tags: ["Action","Adventure","Indie","RPG","Strategy"], achievementCount: 15, shortDescription: "Explore procedurally generated labyrinths in this challenging, narrative-rich roguelike. Master deep combat. Slide blocks of ancient ruins. Defeat bestial abominations. Loot, level up, strategize, fight, die and wake up anew. Unlock the secrets of the Loot River. Immortality is a bittersweet gift.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Loop Hero", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1282730/header.jpg?t=1751489185", tags: ["Indie","RPG","Stragety"], achievementCount: 50, shortDescription: "The Lich has thrown the world into a timeless loop and plunged its inhabitants into never ending chaos. Wield an expanding deck of mystical cards to place enemies, buildings, and terrain along each unique expedition loop for the brave hero.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Caves of Qud", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/333640/header.jpg?t=1790186617", tags: ["Adventure","Indie","RPG","Strategy"], achievementCount: 150, shortDescription: "Inhabit a deeply-simulated science fantasy world and chisel through layers of thousand-year-old civilizations. Build a character from over a hundred mutations and cybernetics. The award-winning sandbox roguelike &amp; RPG full of robots, deep lore, and sentient plants.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Songs of Syx", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1162750/1139c83ae1b3886732d64d7933542a1b7e12db68/header_alt_assets_3.jpg?t=1791453053", tags: ["Indie","Simulation","Strategy","Early Access"], achievementCount: 34, shortDescription: "Songs of Syx is a fantasy city-builder with vast battles simulating thousands of citizens and soldiers. Start off as a small village and build, scheme, and fight your way towards a mighty empire. The mechanics are deep and true to life, where tiny events can spiral into the collapse of kingdoms.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Felvidek", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2299900/header.jpg?t=1748904703", tags: ["Indie","RPG"], achievementCount: 0, shortDescription: "In Felvidek, a JRPG set in 15th century Slovakia, you embrace the role of an alcoholic knight Pavol. Meet diverse and interesting characters to help you drive out the Hussites and Ottomans who blight this land.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "TRIANGLE STRATEGY", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1850510/header.jpg?t=1790952967", tags: ["RPG","Simulation","Strategy"], achievementCount: 108, shortDescription: "A new tactics RPG from the team who brought you the Bravely series and Octopath Traveler. An epic tale, brought to life with stunning HD-2D graphics. Make difficult decisions in this story set against a backdrop of the war-torn continent of Norzelia.", hoursPlayed: 0, selectedDate:0, seen: false},
                {name: "Who's Lila", imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1697700/header.jpg?t=1725418523", tags: ["Adventure","Casual","Indie","RPG"], achievementCount: 26, shortDescription: "A reverse-detective adventure, where you control your character's face", hoursPlayed: 0, selectedDate:0},        
        ],
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
            <router-view :review-list="reviewList" :full-library="fullLibrary"/>
        </div>

        <footer class="d-flex justify-content-center bg-secondary pt-2 mt-5">
            <p>
                Steam Backlog - Kyle Penza <i class="bi bi-c-circle"></i>2025
            </p>
        </footer>
    </body>

</template>

<style scoped></style>
