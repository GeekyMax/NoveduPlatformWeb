<template>
  <el-upload
    ref="upload"
    :on-preview="handlePreview"
    :on-change="fileChange"
    :on-remove="handleRemove"
    :file-list="fileList"
    :auto-upload="false"
    :data="uploadData"
    :headers="headers"
    name="file"
    class="upload-demo">
    <el-input v-model="title" placeholder="请输入title"/>
    <el-input v-model="content" placeholder="请输入content"/>
    <el-input v-model="notice" placeholder="请输入notice"/>
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload" >上传到服务器</el-button>
  </el-upload>
</template>

<script>
import { mapGetters } from 'vuex'
import 'video.js/dist/video-js.css'
import $store from '@/store'
import { uploadHomework1 } from '@/api/homework'
export default {
  data() {
    return {
      uploadData: {
        clazzId: $store.getters.clazzId
      },
      title: '',
      content: '',
      notice: '',
      fileList: [],
      files: []
    }
  },
  computed: {
    headers() {
      return {
        'X-NOV-TOKEN': this.$store.getters.token
      }
    },
    ...mapGetters([
      'clazzId',
      'token'
    ])
  },
  mounted() {
    console.log('this is current player instance object', this.player)
  },
  methods: {
    fileChange(file) {
      console.log('on change')
      console.log(file)
      this.files.push(file.raw)
    },
    submitUpload() {
      const formData = new FormData()
      this.files.forEach(file => {
        formData.append('files', file)
      }
      )
      formData.append('title', this.title)
      formData.append('content', this.content)
      formData.append('notice', this.notice)
      uploadHomework1(formData)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    upload(param) {
      console.log('param')
      console.log(param)
      const formData = new FormData()
      this.files.forEach(file => {
        formData.append('files', file)
      }
      )
      formData.append('title', this.title)
      formData.append('content', this.content)
      formData.append('notice', this.notice)
      uploadHomework1(formData)
    }
  }
}

</script>

<style scoped>

</style>
