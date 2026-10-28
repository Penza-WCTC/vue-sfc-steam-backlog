import MainSiteView from '@/components/views/MainSiteView.vue'
import ProfileView from '@/components/views/ProfileView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {name:"MainSite", path:"/",component:MainSiteView},
    {name:"Profile", path:"/profile",component:ProfileView},
  ],
})

export default router
