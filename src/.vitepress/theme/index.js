import DefaultTheme from 'vitepress/theme'
import Layout from './BaseLayout.vue'

export default {
    ...DefaultTheme,
    Layout,
    notFound: () => '404: This isn\'t the page you are looking for.',
    enhanceApp ({ app, router, siteData}) {
        // do something
    },
    /**
     * @returns {void} returns nothing
     */
    setup () {
        // do something
    }
}