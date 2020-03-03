import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes';
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  // const urlLevel = to.matched.some(record => record.meta.level)
  // const level = store.state.login.login.level
  const logged = store.state.logged;

  if (logged == false && requiresAuth) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
