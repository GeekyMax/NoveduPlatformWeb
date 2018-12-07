import { studentRouterMap } from '@/router'

// function hasPermission(roles, route) {
//   if (route.meta && route.meta.roles) {
//     return roles.some(role => route.meta.roles.includes(role))
//   } else {
//     return true
//   }
// }
//
function checkInClass(route, inClass) {
  if (!route.meta) {
    return true
  }
  if (route.meta) {
    console.log(!route.meta.inClass || inClass)
    return !route.meta.inClass || inClass
    // return true
  }
}

// function filterAsyncRouter(routes, roles, inClazz) {
//   const res = []
//
//   routes.forEach(route => {
//     const tmp = { ...route }
//     if (hasPermission(roles, tmp)) {
//       if (tmp.children) {
//         tmp.children = filterAsyncRouter(tmp.children, roles, inClazz)
//       }
//       res.push(tmp)
//     }
//   })
//
//   return res
// }
function filterInClassRouter(routes, inClass) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (checkInClass(tmp, inClass)) {
      if (tmp.children) {
        tmp.children = filterInClassRouter(tmp.children, inClass)
      }
      res.push(tmp)
    }
  })
  return res
}

const permission = {
  state: {
    routers: [],
    addRouters: [],
    showRouters: [],
    classId: null
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = routers
    },
    ADD_CLAZZ_ROUTERS: (state, routers) => {
      state.clazzRouters = routers
      routers.forEach(router => {
        state.routers.push(router)
      })
    },
    SET_SHOW_ROUTERS: (state, routers) => {
      state.showRouters = routers
    },
    SET_CLASS_ID: (state, id) => {
      state.classId = id
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      // 异步消息
      return new Promise(resolve => {
        // if (data.roles.includes('STUDENT')) {
        const inClass = data.inClass
        console.log(data)
        console.log(inClass)
        commit('SET_ROUTERS', studentRouterMap)
        console.log(studentRouterMap)
        commit('SET_SHOW_ROUTERS', filterInClassRouter(studentRouterMap, inClass))
        console.log(filterInClassRouter(studentRouterMap, inClass))
        // }
        resolve()
      })
    },
    SetClassId({ commit }, { id }) {
      return new Promise(resolve => {
        console.log(id)
        commit('SET_CLASS_ID', id)
        resolve()
      })
    }
  }
}

export default permission
