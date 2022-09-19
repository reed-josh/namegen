<template>
    <div class="base-layout-container">
        <h1>Name Generator</h1>
        <!-- navigation here -->
        <Navigation />
        <!-- content here -->
        <Content />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Navigation from '../theme/Navigation.vue';

export default defineComponent({ components: { Navigation }})

</script>

<style scoped>
.base-layout-container {
    padding: 1.5em;
}
</style>
