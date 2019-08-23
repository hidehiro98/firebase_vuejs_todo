import Vue from 'vue'
import Router from 'vue-router'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import Task from '@/components/Task'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: 'signin'
    },
    {
      path: '/',
      name: 'task',
      component: Task,
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})

// ログインが完了していない場合にサインインページの飛ばす
router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let currentUser = firebase.auth().currentUser
  if (requiresAuth) {
    if (!currentUser) {
      next({
        path: '/signin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
