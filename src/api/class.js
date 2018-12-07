import request from '@/utils/request'
export function getMyClasses() {
  return request({
    url: '/classes',
    method: 'get'
  })
}
export function getClassInfo(id) {
  return request({
    url: '/classes/'.concat(id),
    method: 'get'
  })
}
