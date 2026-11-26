<script>


export default{
    name: "API Searchbar",

    methods:{
        sendSearch(){
            //import each individual search things
        },
    }
}
</script>

<template>
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
</template>