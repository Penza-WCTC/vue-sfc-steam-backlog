<script>
import GameSelectorSection from '@/components/gameSelection/GameSelectorSection.vue';
import AddReviewModal from '@/components/reviewList/AddReviewModal.vue';
import ReviewListItem from '@/components/reviewList/ReviewListItem.vue';
import SteamImage from '@/components/SteamImage.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import ActiveGameDisplay from '@/components/selectedGameInfo/ActiveGameDisplay.vue';

export default{
    name: "MainSiteView",

    props:{
        reviewList: {type: Array, required: true}
    },

    components: {
        GameSelectorSection,
        AddReviewModal,
        ReviewListItem,
        SteamImage,
        ProgressBar,
        ActiveGameDisplay,
    },

    data: function () {
        return {
            activeGame: {
                appId: "427520",
                name: "Factorio",
                tags: ["tempTag1", "tempTag2", "tempTag3"],
                achievementNumber: 30,
                shortDescription: "temp Description",
                releaseDate: "imagineThisIsTheDate",
                hoursPlayed: 36.3,
            },

            newReview: {},

            currentUser: {
                name: "testUser",
                id: "123123123123123123",
            },   
        }
    },

    methods: {
        setActiveGame(activeGame) {
            this.activeGame = activeGame;
        },


        checkAlreadyReviewed(reviewList, username, id) {
            let returner = false

            reviewList.forEach(review => {
                if (review.username === username) {
                    if (review.gameID === id) {
                        returner = true;
                    }
                }
            });

            return returner
        },

        clearReview() {
            this.newReview = {};
        },

        addReview(review) {
            this.newReview = review;
            this.addOrUpdate(review);

            this.activeGame = {}
        },

        addOrUpdate(review) {
            let add = true;
            let i = 0;
            this.reviewList.forEach(StoredReview => {
                if (StoredReview.gameId == review.gameId && StoredReview.userId == review.userId) {
                    this.reviewList.splice(i, 1, review);
                    add = false;
                }
                i++
            });
            if (add) {
                console.log("hi2")
                this.reviewList.push(review);
            }
        },

        

        removeItem(review) {
            this.reviewList.splice(this.reviewList.indexOf(review), 1);
        }
    },

    
}
</script>

<template>
<progress-bar :progress-text="['Pick', 'Play', 'Review']"
            :progress="[Boolean(!activeGame.appId && !newReview.gameName), Boolean(activeGame.appId), Boolean(newReview.gameName)]"></progress-bar>

        <div id="view1" v-if="activeGame.appId">

            <active-game-display :active-game="activeGame"></active-game-display>

            <div class="container text-start pb-3 mb-2">
                <div class="px-3 pb-3 border border-2 row g-3 bg-light rounded">
                    <div class="col-md-6 col-xl-8 fs-4 d-flex flex-column justify-content-evenly">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="row">
                                    <p class="fs-4">Current Streak:</p>
                                </div>
                                <div class="row">
                                    <p class="fs-5">1</p>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="row">
                                    <p class="fs-4">Highest Streak:</p>
                                </div>
                                <div class="row">
                                    <p class="fs-5"> 5</p>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <p class="fs-4">Common Cheat:</p>
                            </div>
                            <div class="col-12">
                                <p class="fs-5">The Binding of Isaac (2)</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-xl-4">
                        <div class="border bg-secondary">
                            <p class="text-center">September</p>
                            <table class="table table-primary table-bordered text-center">
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td class="table-success">1</td>
                                    <td class="table-success">2</td>
                                    <td class="table-success">3</td>
                                    <td class="table-success">4</td>
                                    <td class="table-success">5</td>
                                </tr>


                                <tr>
                                    <td>6</td>
                                    <td class="table-success">7</td>
                                    <td class="table-danger">8</td>
                                    <td>9</td>
                                    <td class="table-danger">10</td>
                                    <td>11</td>
                                    <td>12</td>
                                </tr>

                                <tr>
                                    <td class="table-success">13</td>
                                    <td class="table-active">14</td>
                                    <td>15</td>
                                    <td>16</td>
                                    <td>17</td>
                                    <td>18</td>
                                    <td>19</td>
                                </tr>

                                <tr>
                                    <td>20</td>
                                    <td>21</td>
                                    <td>22</td>
                                    <td>23</td>
                                    <td>24</td>
                                    <td>25</td>
                                    <td>26</td>
                                </tr>

                                <tr>
                                    <td>27</td>
                                    <td>28</td>
                                    <td>29</td>
                                    <td>30</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Write Your Review
            </button>

            <!-- Modal -->
            <add-review-modal @add-review="addReview" :user-object="currentUser"
                :active-game="activeGame"></add-review-modal>

        </div>

        <div id="view2" v-if="newReview.gameName">
            <div class="container text-center pt-2 pb-1 mb-4">
                <p class="fs-4">Rate Reviews Below!</p>
                <hr>
            </div>

            <!-- list component to put a compression on this list to squish down the elements -->

            <div class="container text-start" v-for="review in reviewList">
                <review-list-item v-if="review.gameId === newReview.gameId" :review="review"></review-list-item>
            </div>

            <div class="d-flex justify-content-end sticky-bottom ">
                <button @click="clearReview" class="button btn btn-primary">Find your Next Game!</button>
            </div>
        </div>

        <game-selector-section @save-this-game="setActiveGame"
            v-if="!activeGame.appId && !newReview.gameName"></game-selector-section>
</template>