<template>
  <div class="my-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-card class="box-card" shadow="hover">
          <el-button>添加新作业</el-button>
          <el-table
            :data="homeworkList"
            style="width: 100%">
            <el-table-column
              prop="number"
              label="编号"
              width="180"/>
            <el-table-column
              prop="title"
              label="作业"
              width="180"/>
            <el-table-column
              prop="createUser"
              label="添加者"
              width="180"/>
            <el-table-column
              prop="deadline"
              label="截止日期"/>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button type="text" size="small">上交</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      homeworkList: [
        {
          number: 1,
          title: '第一次作业',
          deadline: '2019-01-01 12:00',
          coverable: true,
          description: '没有描述',
          createUser: 'Max'

        },
        {
          number: 2,
          title: '第二次作业',
          deadline: '2019-01-01 12:00',
          coverable: true,
          description: '没有描述',
          createUser: 'Max'

        },
        {
          number: 3,
          title: '第三次作业',
          deadline: '2019-01-01 12:00',
          coverable: true,
          description: '没有描述',
          createUser: 'Max'

        },
        {
          number: 4,
          title: '第四次作业',
          deadline: '2019-01-01 12:00',
          coverable: true,
          description: '没有描述',
          createUser: 'Max'

        },
        {
          number: 5,
          title: '第五次作业',
          deadline: '2019-01-01 12:00',
          coverable: true,
          description: '没有描述',
          createUser: 'Max'

        },
        {
          number: 6,
          title: '第六次作业',
          deadline: '2019-01-01 12:00',
          coverable: true,
          description: '没有描述',
          createUser: 'Max'

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
