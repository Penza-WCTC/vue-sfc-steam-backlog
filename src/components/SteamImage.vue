<script>
export default {
    name: "SteamImage",

    props: {
        imageUrl: { type: String, default: new URL(`/src/images/imageUnavailable.jpg`, import.meta.url).href },
        gameName: { type: String, default: 'not provided' },
    },
}
</script>

<template>
    <img 
        :src='imageUrl'
        :alt='"This is " + gameName + "&apos;s image."' class="rounded border border-2 border-primary">
    </img>
</template>

<style scoped></style>