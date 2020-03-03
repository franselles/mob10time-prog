export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/hour',
    name: 'Hour',
    component: () => import('@/views/hour/Hour.vue'),
    meta: { requiresAuth: true }
  }
];
