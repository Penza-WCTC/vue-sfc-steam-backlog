<script>
export default {
    name: "CreateView",

    props: {
        fullLibrary: { type: Array }
    },

    methods:{
        testMethod(event){
            document.getElementById("endpoint").appendChild(event.currentTarget);
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md px-3 pb-3 border border-2 row g-3 bg-light rounded">

                <form action="" class="row mt-3">
                    <div class="col-auto">
                        <select class="form-select" aria-label="Search Selection">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col">
                        <input type="text" aria-label="Searchbar" class="form-control">
                    </div>
                    <div class="col">
                        <button class="btn btn-success">Search!</button>
                    </div>
                </form>

                <div class="row" id="startpoint">
                    <div class="col-12 border border-secondary border-opacity-50 rounded mt-3 pt-1 bg-secondary-subtle pointer" v-on:click="testMethod($event)">
                        <div class="d-flex justify-content-between">
                            <p class="mb-0">📖 Dante's Inferno</p>
                            <p class="mb-0">Dante ig</p>
                        </div>
                        <hr class="mt-0">
                        <div>
                            <p>This is the short description of the media object above</p>
                        </div>
                    </div>

                    <div class="col-12 border border-secondary border-opacity-50 rounded mt-3 pt-1 bg-secondary-subtle pointer" v-on:click="testMethod($event)">
                        <div class="d-flex justify-content-between">
                            <p class="mb-0">🎮 League of Legends</p>
                            <p class="mb-0">Riot Games</p>
                        </div>
                        <hr class="mt-0">
                        <div>
                            <p>This is the short description of the media object above</p>
                        </div>
                    </div>

                    <div class="col-12 border border-secondary border-opacity-50 rounded mt-3 pt-1 bg-secondary-subtle pointer" v-on:click="testMethod($event)">
                        <div class="d-flex justify-content-between">
                            <p class="mb-0">🎵 Black Elvis</p>
                            <p class="mb-0">Kool Keith</p>
                        </div>
                        <hr class="mt-0">
                        <div>
                            <p>This is the short description of the media object above</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md offset-md-1 px-3 pb-3 border border-2 row g-3 bg-light rounded">
                <div class="row" id="endpoint">

                </div>
            </div>
        </div>
    </div>
</template>