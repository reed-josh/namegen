<template>
    <nav>
        <ul>
            <li>
                <a href="#" @click="goTo('about')">About</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vitepress'
import BaseButton from '../../components/base/BaseButton.vue';

export default defineComponent({
    props: { items: { type: Object, default: () => {} }},
    components: { BaseButton },
    setup() {
        const router = useRouter();
        const goTo = (path) => {
            router.go(path)
        };
        return { goTo }
    }
})
</script>


<style>


</style>