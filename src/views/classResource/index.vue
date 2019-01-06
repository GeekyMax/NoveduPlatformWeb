<template>
  <div>
    <video-player
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      class="video-player-box"
      custom-event-name="customstatechangedeventname"

      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"

      @statechanged="playerStateChanged($event)"
      @ready="playerReadied"/>
    <el-upload
      ref="upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false"
      :data="uploadData"
      :headers="headers"
      name="file"
      class="upload-demo"
      action="http://localhost:8080/classes/2f0278b053d24482a448d577059d1b64/resources">
      <el-input v-model="uploadData.name" placeholder="请输入name"/>
      <el-input v-model="uploadData.detail" placeholder="请输入detail"/>
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    </el-upload>

  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import 'video.js/dist/video-js.css'
import videoPlayer from 'vue-video-player'
import $store from '@/store'
export default {
  component: videoPlayer,
  data() {
    return {
      uploadData: {
        detail: '',
        name: '',
        clazzId: $store.getters.clazzId
      },
      fileList: [],
      playerOptions: {
        // video.js options
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          // src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
          src: 'http://api.novedu.cn/resources/ce2cfac1fc5611e8973400163e043b02'
        }]
      }
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    },
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
    submitUpload() {
      this.$refs.upload.submit()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  }
}

</script>

<style scoped>

</style>
