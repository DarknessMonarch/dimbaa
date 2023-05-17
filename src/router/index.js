import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/authentication/logInView.vue')
    },
    {
      path: '/admin-board',
      name: 'AdminBoard',
      component: () => import('@/views/admin/super-admin/adminBoard.vue') 
    },
    {
      path: '/team-board',
      name: 'TeamBoard',
      component: () => import('../views/admin/team-admin/teamBoard.vue')
    },
    {
      path: '/data-board',
      name: 'DataBoard',
      component: () => import('../views/data-manager/dataBoard.vue')
    },
    {
      path: '/league-board',
      name: 'LeagueBoard',
      component: () => import('@/views/league-director/leagueBoard.vue')
    },
    {
      path: '/general-board',
      name: 'GeneralBoard',
      component: () => import('@/views/match-officials/general-coordinator/generalBoard.vue')
    },
    {
      path: '/match-board',
      name: 'MatchBoard',
      component: () => import('@/views/match-officials/match-commissioner/matchBoard.vue')
    },
    {
      path: '/referee-board',
      name: 'RefereeBoard',
      component: () => import('@/views/match-officials/referee/refereeBoard.vue')
    },
    {
      path: '/assessor-board',
      name: 'AssessorBoard',
      component: () => import('@/views/match-officials/referee-assessor/assessorBoard.vue')
    },
    {
      path: '/manager-board',
      name: 'ManagerBoard',
      component: () => import('../views/team-manager/teamBoard.vue')
    },
    {
      path: '/notification',
      name: 'Notification',
      component: () => import('@/views/default-pages/NotificationView.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/default-pages/AboutView.vue')
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('@/views/default-pages/SettingsView.vue')
    },
    {
      path: '/edit',
      name: 'Edit',
      component: () => import('@/views/data-manager/EditView.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/data-manager/dataView.vue')
    },
    {
      path: '/userdetails',
      name: 'UserDetails',
      component: () => import('@/components/specific/userComponent.vue')
    },
    {
      path: '/general-pdf',
      name: 'general-pdf',
      component: () => import('@/views/default-pages/pdf/Gcreport.vue')
    },
    {
      path: '/lineup-pdf',
      name: 'lineup-pdf',
      component: () => import('@/views/default-pages/pdf/lineUp.vue')
    },
    {
      path: '/assessor-pdf',
      name: 'assessor-pdf',
      component: () => import('../views/default-pages/pdf/assesor.vue')
    },
    {
      path: '/report-pdf',
      name: 'report-pdf',
      component: () => import('@/views/default-pages/pdf/report.vue')
    },
    {
      path: '/post-pdf',
      name: 'post-pdf',
      component: () => import('@/views/default-pages/pdf/postmatch.vue')
    },
    {
      path: '/pre-pdf',
      name: 'pre-pdf',
      component: () => import('@/views/default-pages/pdf/prematch.vue')
    },
  ]
})

export default router
