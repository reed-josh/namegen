---
title: 'Name Generator'
description: 'Generate names for novels, books, games and all your creative world building projects.'
---



# {{ page.title }}

### {{ page.description }}


<NameGen />

<script setup>
import { useData } from 'vitepress'
import NameGen from '/components/NameGen.vue'
const { page } = useData()
</script>