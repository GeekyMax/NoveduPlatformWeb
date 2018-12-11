<template>
  <div class="geeky-clock" >
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>

<script>
function zeroPadding(num, digit) {
  let zero = ''
  for (let i = 0; i < digit; i++) {
    zero += '0'
  }
  return (zero + num).slice(-digit)
}

export default {
  name: 'GeekyClock',
  data() {
    return {
      time: '23:59:49',
      date: '2018-12-07 星期五'
    }
  },
  created() {
    this.run()
  },
  methods: {
    run() {
      const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      const data = this
      setInterval(() => {
        const cd = new Date()
        data.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2)
        data.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()]
      }, 1000)
    }
  }
}
</script>

<style scoped>
  div{
    /*border: 10px;*/
    /*padding: 0px;*/
    /*width: 100%;*/
    /*margin: 18px;*/
  }
  p {
    margin: 0;
    padding: 0;
  }

  .geeky-clock {
    font-family: 'Share Tech Mono', monospace;
    text-align: center;
    /*position: absolute;*/
    /*left: 50%;*/
    /*top: 50%;*/
    /*-webkit-transform: translate(-50%, -50%);*/
    /*transform: translate(-50%, -50%);*/
    color: #000000;
    /*text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);*/
  }

  .geeky-clock .time {
    letter-spacing: 0.05em;
    font-size: 60px;
    padding: 5px 0;
  }

  .geeky-clock .date {
    letter-spacing: 0.1em;
    font-size: 24px;
  }

  .geeky-clock .text {
    letter-spacing: 0.1em;
    font-size: 12px;
    padding: 20px 0 0;
  }
</style>
