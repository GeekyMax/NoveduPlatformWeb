<template>
  <div class="my-class-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-card class="box-card" shadow="hover">
          <el-button>上传</el-button>
          <el-table
            :data="resourceList"
            style="width: 100%">
            <el-table-column
              prop="title"
              label="名称"
              width="180"/>
            <el-table-column
              prop="uploadUser"
              label="上传者"
              width="180"/>
            <el-table-column
              prop="uploadTime"
              label="上传时间"/>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
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
  name: 'Student',
  data() {
    return {
      resourceList: [
        {
          title: 'hello.ppt',
          url: '',
          uploadTime: '2018-12-31 12:00:00',
          uploadUser: 'Max',
          downloadCount: 11
        },
        {
          title: 'hello.ppt',
          url: '',
          uploadTime: '2018-12-31 12:00:00',
          uploadUser: 'Max',
          downloadCount: 11
        },
        {
          title: 'hello.ppt',
          url: '',
          uploadTime: '2018-12-31 12:00:00',
          uploadUser: 'Max',
          downloadCount: 11
        },
        {
          title: 'hello.ppt',
          url: '',
          uploadTime: '2018-12-31 12:00:00',
          uploadUser: 'Max',
          downloadCount: 11
        },
        {
          title: 'hello.ppt',
          url: '',
          uploadTime: '2018-12-31 12:00:00',
          uploadUser: 'Max',
          downloadCount: 11
        }
      ]
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
