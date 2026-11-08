<script>
export default {
    name: "SteamImage",

    props: {
        imageUrl: { type: String, default: new URL(`/src/images/imageUnavailable.jpg`, import.meta.url).href },
        gameName: { type: String, default: 'not provided' },
    },

    computed: {
        computedImageUrl() {
            return this.imageUrl || new URL(`/src/images/imageUnavailable.jpg`, import.meta.url).href;
        }
    }
}

</script>

<template>
    <img :src='computedImageUrl' :alt='"This is " + gameName + "&apos;s image."'
        class="rounded border border-2 border-primary">
    </img>
</template>

<style scoped></style>