<script>
export default {
    name: "GameDescription",
    props: {
        activeGame: { type: Object, default: { name: "temp", shortDescription: "tempDesc", tags: ["temp1", "temp2", "temp3"] } }
    },
}
</script>

<template>
    <div class="text-center">
        <hr>
    </div>

    <div class="row mb-1">
        <div class="col-md">
            <div class="row">
                <p class="fs-4 text-center">
                    {{ activeGame.name }}
                </p>
            </div>
            <div class="row">
                <p class="fs-6">
                    {{ activeGame.shortDescription }}
                </p>
            </div>
        </div>

        <div class="col-md ms-4">
            <div class="row">
                <p class="fs-4">Tags: </p>
                <div>
                    <p class="px-2 py-1 rounded-pill bg-info d-inline-block me-1" v-for="tag in activeGame.tags">{{ tag }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>