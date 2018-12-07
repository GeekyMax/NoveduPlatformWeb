<template>
  <div class="my-class-container">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>课程列表</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
          </div>
          <div v-for="c in classList" :key="c.code" class="text item">
            <a :href="'/class/'+c.id">{{ c.course.name }}</a>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { getMyClasses } from '@/api/class'

export default {
  data() {
    return {
      classList: null,
      listLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getMyClasses().then(response => {
        console.log(response)
        this.classList = response.data.classList
        this.listLoading = false
      })
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    getTeachersName(row) {
      const teacherNameList = []
      row.teachers.forEach(teacher => {
        teacherNameList.push(teacher.name)
      })
      return teacherNameList.join(', ')
    }
  }
}
</script>

<style scoped>
  .my-class-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
  }
  .box-card {
    /*width: 480px;*/
    min-width: 240px;
  }
  .text {
    font-size: 15px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>
