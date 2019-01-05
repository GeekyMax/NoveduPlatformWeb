import request from '@/utils/request'

export function uploadHomework(title, content, notice, files) {
  console.log(files)
  return request({
    url: '/classes/2f0278b053d24482a448d577059d1b64/homework',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: {
      title: title,
      content: content,
      notice: notice,
      files: files
    }
  })
}
export function uploadHomework1(formData) {
  console.log(formData)
  return request({
    url: '/classes/2f0278b053d24482a448d577059d1b64/homework',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: formData
  })
}
