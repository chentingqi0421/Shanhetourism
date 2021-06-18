import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import( "../views/user/Login.vue")
	
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import( "../views/Home.vue")
  },
  {
    path: "/logon",
    name: "Logon",
    component: () =>
      import( "../views/user/Logon.vue")
  },
  {
    path: "/destination",
    name: "Destination",
   component: () =>
      import( "../views/Destination.vue")
  },
  {
    path: "/mall",
    name: "Mall",
   component: () =>
      import( "../views/Mall.vue")
  },
  {
    path: "/my",
    name: "My",
    component: () =>
      import( "../views/My.vue")
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/user/Messages.vue')
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('../views/user/People.vue')
  },
  {
    path: '/myorder',
    name: 'Myorder',
    component: () => import('../views/user/MyOrder.vue')
  },
  {
    path: '/mylike',
    name: 'MyLike',
    component: () => import('../views/user/MyLike.vue')
  },
  {
    path: '/mynote',
    name: 'MyNote',
    component: () => import('../views/user/Mynote.vue')
  },
  {
    path: '/security',
    name: 'Security',
    component: () => import('../views/user/Security.vue')
  },
  {
    path: '/myinfo',
    name: 'Myinfo',
    component: () => import('../views/user/Myinfo.vue')
  },
  {
    path: '/goodsbag',
    name: 'Goodsbag',
    component: () => import('../views/mall/Goodsbag.vue')
  },
  {
    path: '/shopbag',
    name: 'Shopbag',
    component: () => import('../views/mall/Shopbag.vue')
  },
  {
    path: '/confirmgoods',
    name: 'Confirmgoods',
    component: () => import('../views/mall/confirmgoods.vue')
  },
  {
    path: '/orderform',
    name: 'OrderForm',
    component: () => import('../views/mall/OrderForm.vue')
  },
  {
    path: '/addpeople',
    name: 'AddPeople',
    component: () => import('../views/user/AddPeople.vue')
  },
  {
    path: '/share',
    name: 'Share',
    component: () => import('../views/user/Share.vue')
  },
  {
    path: '/shareinfo',
    name: 'ShareInfo',
    component: () => import('../views/user/Shareinfo.vue')
  },
  {
    path: '/payresults',
    name: 'Payresults',
    component: () => import('../views/mall/Payresults.vue')
  },
  {
    path: '/forgetpassword',
    name: 'Forgetpassword',
    component: () => import('../views/user/Forgetpassword.vue')
  },

  
  
];

const router = new VueRouter({
  routes
});

export default router;
