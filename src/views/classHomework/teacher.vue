<template>
  <div class="my-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-card class="box-card" shadow="hover">
          <el-table
            :data="homeworkList"
            style="width: 100%">
            <el-table-column
              prop="number"
              label="编号"
              width="80"/>
            <el-table-column
              prop="name"
              label="学生名字"
              width="180"/>
            <el-table-column
              prop="submitTime"
              label="提交日期"/>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button type="text" size="small">批改</el-button>
                <el-button type="text" size="small">下载</el-button>
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
  name: 'Teacher',
  data() {
    return {
      homeworkList: [
        {
          number: 1,
          name: 'Max Huang',
          submitTime: '2019-01-01 12:00'
        },
        {
          number: 1,
          name: 'Max Huang',
          submitTime: '2019-01-01 12:00'
        },
        {
          number: 1,
          name: 'Max Huang',
          submitTime: '2019-01-01 12:00'
        },
        {
          number: 1,
          name: 'Max Huang',
          submitTime: '2019-01-01 12:00'
        },
        {
          number: 1,
          name: 'Max Huang',
          submitTime: '2019-01-01 12:00'
        },
        {
          number: 1,
          name: 'Max Huang',
          submitTime: '2019-01-01 12:00'
        },
        {
          number: 1,
          name: 'Max Huang',
          submitTime: '2019-01-01 12:00'
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
