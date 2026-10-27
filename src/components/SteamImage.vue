<script>
export default {
    name: "SteamImage",

    props: {
        appId: { type: String, default: '720' },
        gameName: { type: String, default: 'not provided' },
        format: { type: String, default: 'header' },
    },
}
</script>

<template>
    <img 
        :src='"http://shared.steamstatic.com/store_item_assets/steam/apps/" + appId + "/" + format + ".jpg"'
        :alt='"This is the " + format + " image for " + gameName + "."' class="rounded border border-2 border-primary">
    </img>
</template>

<style scoped></style>