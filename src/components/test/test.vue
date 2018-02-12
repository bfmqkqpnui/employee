<template>
  <div class="test">
    <el-row class="row">
      <el-col>
        <el-breadcrumb separator-class="el-icon-d-arrow-right">
          <el-breadcrumb-item>运行环境</el-breadcrumb-item>
          <el-breadcrumb-item>设备</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>

    <el-row class="row">
      <el-input placeholder="请输入要查询的员工号" v-model="empNo" class="input-with-select">
        <el-select v-model="selStatus" slot="prepend" clearable placeholder="请选择查询的员工性别">
          <el-option
            v-for="item in deviceStatus"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button type="primary" slot="append" icon="el-icon-search" @click="search">搜索</el-button>
      </el-input>
    </el-row>

    <el-row class="row">
      <table border="1">
        <tr align="center">
          <td width="10%">职员编号</td>
          <td width="15%">职员名字</td>
          <td width="10%">职员性别</td>
          <td width="20%">职员生日</td>
          <td width="15%">职员邮箱</td>
          <td width="10%">职员备注</td>
          <td width="20%">操作</td>
        </tr>

        <tbody>
        <tr align="center" v-for="(item,index) in tableList">
          <td>
            <el-checkbox v-model="checkedList" :label="item.bagId" :key="index" v-text="item.id"></el-checkbox>
          </td>
          <td v-text="item.name"></td>
          <td v-text="item.gender"></td>
          <td v-text="item.birthday"></td>
          <td v-text="item.email"></td>
          <td v-text="item.remark"></td>
          <td>
            <router-link :to="{name:'deviceData'}">查看</router-link>
            <a href="javascript:void(0)" @click="delById(item.bagId)">删除</a>
          </td>
        </tr>
        </tbody>
      </table>
    </el-row>

    <!--<el-row class="row">
      <el-col :span="24">
        <pageComponent :resultCount="resultCount" :currentPage='currentPage' @handleCurrentChange="handleCurrentChange"
                       @handleSizeChange="handleSizeChange"></pageComponent>
      </el-col>
    </el-row>-->
  </div>
</template>

<script>
  //Js部分尽量采用ES6语法，webpack babel插件会转义兼容
  export default {
    //组件私有数据（必须是function，而且要return对象类型）
    data() {
      return {
        checkedList: [],
        tableList: [],
        deviceStatus: [
          {
            label: '女',
            value: '女'
          },
          {
            label: '男',
            value: '男'
          }
        ],
        birthday: '',
        email: '',
        selStatus: '',
        empNo: '',
        empName: ''
      }
    },
    //计算属性
    computed: {},
    //函数集，自己封装，便于开发使用
    methods: {
      init() {
        let url = '/dev/emp/queryAll';
        //url = '/sit/emp/queryAll';
        //url = '/pre/emp/queryAll';
        //url = '/pro/emp/queryAll';
        let param = {
          id: this.empNo,
          name: this.empName,
          gender: this.selStatus,
          birthday: this.birthday,
          email: this.email
        };
        this.$http.post(url, param).then(function (data) {
          console.log(data);
          if (data.ok) {
            if (data.body.success) {
              this.tableList = data.body.obj;
            }
          }
        }, function (err) {
          console.log("系统错误:" + err);
        })
      },
      search() {
        console.log("search is click");
      }
    },
    //生命周期钩子：组件实例渲染完成时调用
    mounted() {
      //this.init();
    },
    //要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
    components: {}
  }
</script>

<style scoped>
  .test {
    padding: 1rem;
  }

  .test .row {
    margin-bottom: 1rem;
  }

  table {
    width: 100%;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .el-select{
    width: 200px;
  }
</style>
