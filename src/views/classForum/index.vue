<template>
  <div>
    <ol v-for="c in postList" :key="c.title">
      <li>{{ c.title }} :{{ c.content }}</li>
    </ol>
  </div>

</template>
<script>
export default {
  name: 'Index',
  data() {
    return {
      postList: [{
        title: 'hello',
        content: 'hello'
      }, {
        title: 'hello2',
        content: 'hello2'
      }
      ]
    }
  }
}
</script>

<style scoped/>
