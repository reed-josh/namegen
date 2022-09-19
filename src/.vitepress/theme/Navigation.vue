<template>
    <nav>
        <ul>
            <li v-for="item in state.items" :key="item.path">
                <a href="#" @click="goTo(item.path)">{{ item.title }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vitepress'
import BaseButton from '../../components/base/BaseButton.vue';

export default defineComponent({
    components: { BaseButton },
    setup() {
        // reactive state for the menu
        const state = reactive({
            items: [
                    { title: 'Home', path: '/' },
                    { title: 'About', path: '/about' },
                ]
        })
        // routing
        const router = useRouter();
        const goTo = (path) => {
            router.go(path)
        };
        return { state, goTo }
    }
})
</script>


<style>


</style>