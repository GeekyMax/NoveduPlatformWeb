import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  // 对 class/:id的重定向
  if (to.path.startsWith('/class/:id')) {
    if (from.path.startsWith('/class') && !from.path.startsWith('/class/:id')) {
      const nextPath = to.path.replace(':id', from.params.id)
      next({ path: nextPath })
      return
    }
  }
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(res => { // 拉取用户信息
          const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']
          const inClass = to.matched.some(record => record.meta.inClass)
          store.dispatch('GenerateRoutes', { roles: roles, inClass: inClass }).then(() => { // 根据roles权限生成可访问的路由表
            // router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            // next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            next()
          })
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })
      } else {
        const inClass = to.matched.some(record => record.meta.inClass)
        store.dispatch('GenerateRoutes', { roles: store.getters.roles, inClass: inClass }).then(() => { // 根据roles权限生成可访问的路由表
          next()
          NProgress.done()
        })
      }
    }
    if (to.path.startsWith('/class')) {
      const id = to.path.split('/')[2]
      if (id !== from.params.id) {
        store.dispatch('GetClassInfo', id).then(() => {
          next()
        })
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
      NProgress.done()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach((to, from) => {
  if (to.path.startsWith('/class')) {
    store.dispatch('SetClassId', { id: to.params.id })
  }
  NProgress.done() // 结束Progress
})
