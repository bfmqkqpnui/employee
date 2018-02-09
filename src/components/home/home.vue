<template>
  <div>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</x-header>
    <div>
      <x-table :cell-bordered="false" style="background-color:#fff;">
        <thead>
        <tr style="background-color: #F7F7F7">
          <th>Product</th>
          <th>Price</th>
          <th>Product</th>
          <th>Price</th>
          <th>Product</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Apple</td>
          <td>$1.25</td>
          <td>Apple</td>
          <td>$1.25</td>
          <td>Apple</td>
          <td>$1.25</td>
        </tr>
        <tr>
          <td>Banana</td>
          <td>$1.20</td>
          <td>Banana</td>
          <td>$1.20</td>
          <td>Banana</td>
          <td>$1.20</td>
        </tr>
        </tbody>
      </x-table>
    </div>
    <load-more tip="职员信息" :show-loading="false" background-color="#fbf9fe"></load-more>
  </div>
</template>

<script>
  import { XTable, LoadMore, XHeader } from 'vux'
  //Js部分尽量采用ES6语法，webpack babel插件会转义兼容
  export default {
    //组件私有数据（必须是function，而且要return对象类型）
    data() {
      return {
        value: '测试',
        showMenus: false
      }
    },
    //计算属性
    computed: {},
    //函数集，自己封装，便于开发使用
    methods: {},
    //生命周期钩子：组件实例渲染完成时调用
    mounted() {

    },
    //要用到哪些子组件（如果组件已是最小粒度，那么可省略该属性）
    components: {
      XTable,
      LoadMore,
      XHeader
    }
  }
</script>

<style>

</style>
