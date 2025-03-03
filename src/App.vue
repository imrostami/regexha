<template>
    <div class="app-holder">
        <main class="max-w-6xl mx-auto">
            <VHeader />
            <Hero />
            <Search v-model="searchQuery" class="stiky-top bg-white/70 dark:bg-neutral-900/70 backdrop-blur z-10 py-3"/>
            <div class="card-grid-container">
                <CardGrid v-if="patterns && patterns?.length">
                    <Card v-for="pattern in patterns" :name="pattern.name" :pattern="pattern.pattern"
                        :caption="pattern.description" :category="pattern.category" />
                </CardGrid>
                <Empty v-else />
            </div>

        </main>

        <VFooter />
    </div>

</template>

<script setup>
import { computed, ref, watch } from 'vue';
import Card from './components/Card.vue';
import CardGrid from './components/CardGrid.vue';
import Hero from './components/Hero.vue';
import Search from './components/Search.vue';
import VFooter from './components/VFooter.vue';
import VHeader from './components/vHeader.vue';
import data from './data';
import Empty from './components/Empty.vue';

const patterns = ref([])
const searchQuery = ref('')


watch(() => {
    if (!searchQuery.value) {
        patterns.value = data
    }

    searchQuery.value = searchQuery.value.toLocaleLowerCase();

    patterns.value = data.filter(x =>
        x.name.toLocaleLowerCase().includes(searchQuery.value) ||
        x.description.toLocaleLowerCase().includes(searchQuery.value) ||
        x.category.toLocaleLowerCase().includes(searchQuery.value))
})



</script>
