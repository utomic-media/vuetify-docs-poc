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
        alias: ['introduction', 'getting-started', 'features', 'styles', 'components', 'directives'],
        name: 'Docs',
        redirect: to => { return '/getting-started/installation' },
        children: [
          {
            path: '/getting-started',
            name: 'Getting Started',
            component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
            redirect: to => { return '/getting-started/installation' },
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
            path: '/features',
            name: 'Features',
            component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
            redirect: to => { return '/features/aliasing' },
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
          {
            path: '/components',
            name: 'Components',
            component: () => import(/* webpackChunkName: "component" */ '@/views/Component.vue'),
            redirect: to => { return '/components/all' },
            children: [
              {
                path: '/components/all',
                name: 'All components',
                component: () => import(/* webpackChunkName: "component" */ '@/views/Component.vue'),
              },
              {
                path: '/components/alerts/:tab?',
                name: 'Alerts',
                component: () => import(/* webpackChunkName: "component" */ '@/views/Component.vue'),
              },
              {
                path: '/components/aspect-ratios/:tab?',
                name: 'Aspect Ratios',
                component: () => import(/* webpackChunkName: "component" */ '@/views/Component.vue'),
              },
              {
                path: '/components/avatars/:tab?',
                name: 'Avatars',
                component: () => import(/* webpackChunkName: "component" */ '@/views/Component.vue'),
              },
              {
                path: '/components/badges/:tab?',
                name: 'Badges',
                component: () => import(/* webpackChunkName: "component" */ '@/views/Component.vue'),
              },
              {
                path: '/components/banners/:tab?',
                name: 'Banners',
                component: () => import(/* webpackChunkName: "component" */ '@/views/Component.vue'),
              },
              {
                path: '/components/breadcrumbs/:tab?',
                name: 'Breadcrumbs',
                component: () => import(/* webpackChunkName: "component" */ '@/views/Component.vue'),
              },
              {
                path: '/components/buttons/:tab?',
                name: 'Buttons',
                component: () => import(/* webpackChunkName: "component" */ '@/views/Component.vue'),
              },
              {
                path: '/components/cards/:tab?',
                name: 'Cards',
                component: () => import(/* webpackChunkName: "component" */ '@/views/Component.vue'),
              },
              {
                path: '/components/carousels/:tab?',
                name: 'Carousels',
                component: () => import(/* webpackChunkName: "component" */ '@/views/Component.vue'),
              },
              {
                path: '/components/chips/:tab?',
                name: 'Chips',
                component: () => import(/* webpackChunkName: "component" */ '@/views/Component.vue'),
              },
              {
                path: '/components/color-pickers/:tab?',
                name: 'Color pickers',
                component: () => import(/* webpackChunkName: "component" */ '@/views/Component.vue'),
              },
              {
                path: '/components/dividers/:tab?',
                name: 'Dividers',
                component: () => import(/* webpackChunkName: "component" */ '@/views/Component.vue'),
              },
              {
                path: '/components/expansion-panels/:tab?',
                name: 'Expansion panels',
                component: () => import(/* webpackChunkName: "component" */ '@/views/Component.vue'),
              },
            ],
          },
          {
            path: '/styles',
            name: 'Styles & animations',
            component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
            redirect: to => { return '/directives/click-outside/' },
            children: [
              {
                path: '/directives/click-outside/',
                name: 'Click Outside',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
              },
              {
                path: '/directives/intersect',
                name: 'Intersect',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
              }
            ],
          },
          {
            path: '/directives',
            name: 'Directives',
            component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
            redirect: to => { return '/directives/click-outside/' },
            children: [
              {
                path: '/directives/click-outside/',
                name: 'Click Outside',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
              },
              {
                path: '/directives/intersect',
                name: 'Intersect',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
              }
            ],
          },
        ],
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
