import Vue from 'vue'
import VueRouter from 'vue-router'


import Formulario from './componentes/Formulario.vue'
import Respuestas from './componentes/Respuestas.vue'


Vue.use(VueRouter)


export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/Notas' },
        { path: '/Notas', component: Formulario },
        { path: '/Respuestas', component: Respuestas },
    ]
})