import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import StudyView1 from '@/pages/StudyView1.vue'
import StudyView2 from '@/pages/StudyView2.vue'
import StudyView3 from '@/pages/StudyView3.vue'
import StudyView4 from '@/pages/StudyView4.vue'
import StudyView5 from '@/pages/StudyView5.vue'
import StudyView6 from '@/pages/StudyView6.vue'
import WorkView from '@/pages/WorkView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', component: Home },
        { path: '/Study1', component: StudyView1 },
        { path: '/Study2', component: StudyView2 },
        { path: '/Study3', component: StudyView3 },
        { path: '/Study4', component: StudyView4 },
        { path: '/Study5', component: StudyView5 },
        { path: '/Study6', component: StudyView6 },
        { path: '/Work', component: WorkView },
    ]
})

export default router;