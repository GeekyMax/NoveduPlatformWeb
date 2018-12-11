import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/homepage',
    name: 'Homepage',
    hidden: true,
    children: [{
      path: 'homepage',
      component: () => import('@/views/dashboard/index')
    }]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export const studentRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/homepage',
    children: [
      {
        path: 'homepage',
        name: 'Homepage',
        component: () => import('@/views/homepage/index'),
        meta: { title: '我的首页', icon: 'form', inClass: false }
      }
    ]
  },
  {
    path: '/reminder',
    redirect: '/reminder/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Reminder',
        component: () => import('@/views/form/index'),
        meta: { title: '事项', icon: 'form', inClass: false }
      }
    ]
  },
  {
    path: '/schedule',
    redirect: '/schedule/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Schedule',
        component: () => import('@/views/form/index'),
        meta: { title: '日程表', icon: 'form', inClass: false }
      }
    ]
  },
  {
    path: '/class/:id',
    component: Layout,
    redirect: '/class/:id/index',
    name: 'Class',
    meta: { title: '我的课程', icon: 'form', inClass: true },
    alwaysShow: true,
    children: [
      {
        path: 'index',
        name: 'ClassHomepage',
        component: () => import('@/views/form/index'),
        meta: { title: '课程首页', icon: 'form', inClass: true }
      }, {
        path: 'information',
        name: 'ClassInformation',
        component: () => import('@/views/form/index'),
        meta: { title: '课程信息', icon: 'form', inClass: true }
      },
      {
        path: 'classTeam',
        name: 'ClassTeam',
        component: () => import('@/views/form/index'),
        meta: { title: '我的组队', icon: 'form', inClass: true }

      },
      {
        path: 'classForum',
        name: 'classForum',
        component: () => import('@/views/form/index'),
        meta: { title: '课程论坛', icon: 'form', inClass: true }
      },
      {
        path: 'homework',
        name: 'classHomework',
        component: () => import('@/views/form/index'),
        meta: { title: '课程作业', icon: 'form', inClass: true }
      },
      {
        path: 'resource',
        name: 'ClassResource',
        component: () => import('@/views/classResource/index'),
        meta: { title: '课程资源', icon: 'form', inClass: true }

      }
    ]
  },
  {
    path: '/navigation',
    component: Layout,
    redirect: '/navigation/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/form/index'),
        meta: { title: '网站导航', icon: 'link', inClass: false }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }

]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: studentRouterMap
})
