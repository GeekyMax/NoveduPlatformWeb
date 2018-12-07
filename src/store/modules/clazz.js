import { getClassInfo } from '@/api/class'
const clazz = {
  state: {
    clazzId: null,
    inClazz: false,
    classInfo: null,
    className: '课程名称'
  },

  mutations: {
    SET_CLAZZ_ID: (state, clazzId) => {
      state.clazzId = clazzId
    },
    SET_IN_CLAZZ: (state, inClazz) => {
      state.inClazz = inClazz
    },
    SET_CLASS_INFO: (state, classInfo) => {
      state.classInfo = classInfo
      console.log('SET_CLASS_INFO')
      console.log(classInfo)
    },
    SET_CLASS_NAME: (state, className) => {
      state.className = className
    }
  },
  actions: {
    GetClassInfo: ({ commit, state }, classId) => {
      return new Promise(resolve => {
        getClassInfo(classId).then(response => {
          console.log(response)
          const data = response.data
          const classData = data.classList[0]
          commit('SET_CLASS_ID', classData.id)
          commit('SET_CLASS_INFO', classData)
          commit('SET_CLASS_NAME', classData.course.name)
          resolve()
        })
      })
    },
    JoinClazz: ({ commit }, clazzId) => {
      return new Promise(resolve => {
        if (clazzId) {
          commit('SET_CLAZZ_ID', clazzId)
          commit('SET_IN_CLAZZ', true)
          resolve()
        }
      })
    },
    LeaveClazz: ({ commit }) => {
      return new Promise(resolve => {
        commit('SET_CLAZZ_ID', null)
        commit('SET_IN_CLAZZ', false)
        resolve()
      })
    }
  }
}

export default clazz
