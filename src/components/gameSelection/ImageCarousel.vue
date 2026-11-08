<script>
export default {
    name: "ImageCarousel",

    computed: {
        defaultBackground() {
            return new URL(`/src/images/standerdizedBackground.jpg`, import.meta.url).href
        }
    }
}
</script>

<template>
    <div class="pb-5 mb-1 position-relative">
        <div class="d-xl-none d-block">
            <slot name="mobile-image"></slot>
        </div>
        <div class="z-0 d-none d-xl-flex position-relative top-0 container justify-content-between">
            <div class="position-relative d-inline-block w-fit">
                <img :src="defaultBackground" alt="Spacing Background"
                    class="d-block rounded border border-2 border-primary">

                <div class="slot-foreground">
                    <slot name="back-left"></slot>
                </div>
            </div>
            <div class="position-relative d-inline-block w-fit">
                <img :src="defaultBackground" alt="Spacing Background"
                    class="d-block rounded border border-2 border-primary">

                <div class="slot-foreground">
                    <slot name="back-right"></slot>
                </div>
            </div>
        </div>
        <div class="z-1 d-none d-xl-flex position-absolute top-10 container justify-content-evenly pe-4">
            <div class="position-relative d-inline-block w-fit">
                <img :src="defaultBackground" alt="Spacing Background"
                    class="d-block rounded border border-2 border-primary">

                <div class="slot-foreground">
                    <slot name="top-left"></slot>
                </div>
            </div>
            <div class="position-relative d-inline-block w-fit">
                <img :src="defaultBackground" alt="Spacing Background"
                    class="d-block rounded border border-2 border-primary">

                <div class="slot-foreground">
                    <slot name="top-right"></slot>
                </div>
            </div>
        </div>
        <div class="z-2 d-none d-xl-flex position-absolute top-15 container justify-content-center ps-1">

            <div class="position-relative d-inline-block w-fit">
                <img :src="defaultBackground" alt="Spacing Background"
                    class="d-block rounded border border-2 border-primary">

                <div class="slot-foreground">
                    <slot name="center"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.slot-foreground {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slot-foreground :deep(img) {
    height: 100%;
    width: auto;
    object-fit: contain;
}
</style>