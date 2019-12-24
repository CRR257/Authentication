import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import Home from '../views/Home.vue';
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';

Vue.use(Router)

const router = new Router ({
  routes: [
  {
    path: '*',
    redirect: '/login'
    /*With path: ‘*’, we redirect every paths that does not 
    exist to the Login view*/
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  }, 
]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router;
