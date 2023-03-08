// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Home.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/docs',
        // alias: ['introduction', 'getting-started', 'features', 'styles'],
        name: 'Docs',
        component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
        children: [
          {
            path: '/getting-started/installation',
            name: 'Getting Started',
            component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
            children: [
              {
                path: '/introduction/why-vuetify/',
                name: 'Why Vuetify',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
                meta: {
                  icon: 'mdi-vuetify',
                },
              },
              {
                path: '/getting-started/installation',
                name: 'Installation',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
                meta: {
                  icon: 'mdi-download',
                },
              },
              {
                path: '/getting-started/wireframes',
                name: 'Wireframes',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
                meta: {
                  icon: 'mdi-application-brackets-outline',
                },
              },
              {
                path: '/getting-started/browser-support',
                name: 'Browser support',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
                meta: {
                  icon: 'mdi-help-circle-outline',
                },
              },
              {
                path: '/getting-started/upgrade-guide',
                name: 'Upgrade Guide',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
                meta: {
                  icon: 'mdi-arrow-up',
                },
              },
              {
                path: '/getting-started/release-notes/',
                name: 'Release Notes',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
                meta: {
                  icon: 'mdi-note-edit-outline',
                },
              },
              {
                path: '/getting-started/contributing',
                name: 'Contributing',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
                meta: {
                  icon: 'mdi-git',
                },
              },
            ],
          },
          {
            path: '/features/aliasing',
            name: 'Features',
            component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
            children: [
              {
                path: '/features/aliasing',
                name: 'Aliasing',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
                meta: {
                  icon: 'mdi-link-variant',
                }
              },
              {
                path: '/features/application-layout',
                name: 'Application Layout',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
                meta: {
                  icon: 'mdi-grid',
                }
              },
            ],
          },
        ],
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
