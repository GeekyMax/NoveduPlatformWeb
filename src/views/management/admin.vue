<template>
  <div class="my-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>课程列表</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
          </div>
          <div v-for="c in courseList" :key="c.title" class="text item">
            <p>{{ c.title }}</p>
          </div>
          <el-button type="primary">添加课程</el-button>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>学生列表</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
          </div>
          <div v-for="c in studentList" :key="c.title" class="text item">
            <p>{{ c.title }}</p>
          </div>
          <el-button type="primary">添加学生</el-button>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>教师列表</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
          </div>
          <div v-for="c in teacherList" :key="c.title" class="text item">
            <p>{{ c.title }}</p>
          </div>
          <el-button type="primary">添加课程</el-button>
        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      teacherList: [
        {
          title: 'Max Huang'
        },
        {
          title: 'Max Huang'
        },
        {
          title: 'Max Huang'
        },
        {
          title: 'Max Huang'
        },
        {
          title: 'Max Huang'
        },
        {
          title: 'Max Huang'
        },
        {
          title: 'Max Huang'
        },
        {
          title: 'Max Huang'
        },
        {
          title: 'Max Huang'
        }
      ],
      studentList: [
        {
          title: 'Max Huang'
        },
        {
          title: 'Max Huang'
        },
        {
          title: 'Max Huang'
        },
        {
          title: 'Max Huang'
        },
        {
          title: 'Max Huang'
        },
        {
          title: 'Max Huang'
        },
        {
          title: 'Max Huang'
        },
        {
          title: 'Max Huang'
        },
        {
          title: 'Max Huang'
        }
      ],
      courseList: [
        {
          title: '软件质量保证与测试'
        },
        {
          title: '软件质量保证与测试'
        },
        {
          title: '软件质量保证与测试'
        },
        {
          title: '软件质量保证与测试'
        },
        {
          title: '软件质量保证与测试'
        },
        {
          title: '软件质量保证与测试'
        },
        {
          title: '软件质量保证与测试'
        },
        {
          title: '软件质量保证与测试'
        },
        {
          title: '软件质量保证与测试'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .my-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
  }

  .box-card {
    /*width: 480px;*/
    margin-bottom: 20px;
    /*min-width: 240px;*/
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
