// Composables
import { createRouter, createWebHistory, RouteLocationRaw } from 'vue-router'

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
        alias: ['introduction', 'getting-started', 'features', 'styles', 'components', 'directives', 'about'],
        name: 'Docs',
        redirect: (to: RouteLocationRaw) => { return '/getting-started/installation' },
        children: [
          {
            path: '/getting-started',
            name: 'Getting Started',
            component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
            redirect: (to: RouteLocationRaw) => { return '/getting-started/installation' },
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
            ],
          },
          {
            path: '/features',
            name: 'Features',
            component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
            redirect: (to: RouteLocationRaw) => { return '/features/aliasing' },
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
            redirect: (to: RouteLocationRaw) => { return '/components/all' },
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
            redirect: (to: RouteLocationRaw) => { return '/directives/click-outside/' },
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
            redirect: (to: RouteLocationRaw) => { return '/directives/click-outside/' },
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
            path: '/community',
            name: 'Community',
            component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
            redirect: (to: RouteLocationRaw) => { return '/community-start' },
            children: [
              {
                path: '/community-start',
                name: 'Community',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
                meta: {
                  icon: 'mdi-account-multiple-outline',
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
              {
                path: '/introduction/long-term-support/',
                name: 'Long-Term Support',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
                meta: {
                  icon: 'mdi-timer-check-outline',
                },
              },
              {
                path: '/introduction/roadmap/',
                name: 'Roadmap',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
                meta: {
                  icon: 'mdi-sign-direction',
                },
              },
              {
                path: '/introduction/meet-the-team/',
                name: 'The Team',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
                meta: {
                  icon: 'mdi-account-multiple-outline',
                },
              },
              {
                path: '/about/code-of-conduct/',
                name: 'Code of conduct',
                component: () => import(/* webpackChunkName: "docs" */ '@/views/Docs.vue'),
                meta: {
                  icon: 'mdi-handshake-outline',
                },
              },

            ],
          },
        ],
      },
      {
        path: '/support',
        alias: ['ressources', 'introduction'],
        name: 'Support',
        redirect: (to: RouteLocationRaw) => { return '/support/solutions/' },
        children: [
          {
            path: '/support/solutions/',
            name: 'Solutions',
            component: () => import(/* webpackChunkName: "docs" */ '@/views/Page.vue'),
          },
          {
            path: '/introduction/enterprise-support/',
            name: 'Enterprise Support',
            component: () => import(/* webpackChunkName: "docs" */ '@/views/Page.vue'),
            meta: {
              icon: 'mdi-handshake-outline',
            },
          },
          {
            path: '/introduction/sponsors-and-backers/',
            name: 'Sponsors',
            component: () => import(/* webpackChunkName: "docs" */ '@/views/Page.vue'),
            meta: {
              icon: 'mdi-handshake-outline',
            },
          },
          {
            path: '/resources/jobs-for-vue/',
            name: 'Jobs',
            component: () => import(/* webpackChunkName: "docs" */ '@/views/Page.vue'),
            meta: {
              icon: 'mdi-handshake-outline',
            },
          },
          {
            path: '/about/security-disclosure/',
            name: 'Security disclosure',
            component: () => import(/* webpackChunkName: "docs" */ '@/views/Page.vue'),
            meta: {
              icon: 'mdi-shield-outline',
            },
          },
        ],
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
