import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/components/Home.vue';
import SearchPage from '@/components/SearchPage.vue';
import MuseumPage from '@/components/MuseumPage.vue';
import MuseumEdit from '@/components/MuseumEdit.vue';
import ArtworkPage from '@/components/ArtworkPage.vue';


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/search', component: SearchPage },
    { path: '/museum', component: MuseumPage },
    { path: '/museum/edit', component: MuseumEdit },
    { path: '/artwork', component: ArtworkPage }
  ]
})