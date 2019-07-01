<template>
  <div class="tcontent">
    <div class="table-header clearfix">
      <el-breadcrumb class="breadcrumb"  separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>金融管理</el-breadcrumb-item>
        <el-breadcrumb-item>充值管理</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button class="add fr" type="primary" icon="el-icon-plus" @click="toggleCard(true)">充值</el-button>
    </div>

    <v-screen :screen="screenQuery" @query="onQuery" ></v-screen>

    <el-table :data="AdminRemittance" border style="width: 100%">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column  prop="initiateadmin.admin_name" label="发起操作人" ></el-table-column>
      <el-table-column  prop="create_time" label="发起时间" ></el-table-column>
      <el-table-column  prop="user.nick_name" label="充值用户昵称" ></el-table-column>
      <el-table-column  prop="user.mobile" label="充值用户手机号" ></el-table-column>
      <el-table-column  prop="identity" label="充值用户身份" ></el-table-column>
      <el-table-column  prop="stypeText" label="充值类型" ></el-table-column>
      <el-table-column  prop="credit" label="充值金额" ></el-table-column>
      <el-table-column  prop="message" label="前端描述" ></el-table-column>
      <el-table-column  prop="admin_message" label="后端描述" ></el-table-column>
      <el-table-column  prop="statusText" label="状态" ></el-table-column>
      <el-table-column fixed="right" label="操作"  width="210">
        <template slot-scope="scope">
          <el-button type="primary" size="small" v-if="scope.row.status == 1"  @click="auditAdminRemittance(scope.row.id,1)">审核通过</el-button>
          <el-button type="danger" v-if="scope.row.status == 1"  size="small" @click="auditAdminRemittance(scope.row.id,2)">审核不通过</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="flex-cen pagination">
      <el-pagination :hide-on-single-page="true" background @current-change="pageChange" ref="pagination"  layout="prev, pager, next" :total="total"> </el-pagination>
    </div>

  </div>
</template>

<script>
import {getStype, getIdentity, getStatus} from '../../../assets/js/common'
import vScreen from '../../common/screen'
export default {
  data(){
    return {
      screen:{
        page:1,
        page_num:10
      },
      screenQuery:[{
        ref:'status',
        label:'状态',
        type:'select',
        content:'',
        option:[{
          value: '',
            label: '全部'
        }, {
            value: 1,
            label: '待审核'
        }, {
            value: 2,
            label: '审核通过'
        }, {
            value: 3,
            label: '审核没通过'
        }]
      },{
        ref:'stype',
        label:'充值类型',
        type:'select',
        content:'',
        option:[{
            value: '',
            label: '全部'
        }, {
            value: 1,
            label: '商票'
        }, {
            value: 2,
            label: '佣金'
        }, {
            value: 3,
            label: '积分'
        }]
      },{
        ref:'min_credit',
        label:'最小收款金额',
        type:'input',
        content:'',
        placeholder:'请输入最小收款金额'
      },{
        ref:'max_credit',
        label:'最大收款金额',
        type:'input',
        content:'',
        placeholder:'请输入最大收款金额'
      },{
        ref:'start_time',
        label:'创建起始时间',
        type:'date',
        content:'',
      },{
        ref:'end_time',
        label:'创建中止时间',
        type:'date',
        content:'',
      }],
      AdminRemittance:[],
      total:0
    }
  },
  components:{
      vScreen
  },
  mounted(){
    this.getAdminRemittance()
  },
  methods: {
    onQuery(screen){
      Object.prototype.push.apply(this.screen , screen ); 
      this.screen.page = 1
      this.getAdminRemittance()
    },
    auditAdminRemittance(id = '',status = ''){
      let that =this
      that.$request({
        data: {
          id:id,
          status:status
        },
        url: 'admin/auditAdminRemittance',
        success(res){
          that.$message({message:'审核成功',type:'success' });
          that.getAdminRemittance();
        }
      })
    },
    getAdminRemittance(){
      let that =this
      that.screen.page_num = 10
      that.$request({
        data: that.screen,
        url: 'admin/getAdminRemittance',
        success(res){
          that.AdminRemittance = that.disAdminRemittance(res.AdminRemittances)
          that.total = res.total;
        }
      })
    },
    pageChange(val){
        this.screen.page = val
        this.getAdminRemittance()
    },
    disAdminRemittance(data = []){
      let arr = data, len = arr.length;
      for (let i = 0; i < len; i++) {
          arr[i].stypeText = getStype(arr[i].stype)
          arr[i].statusText = getStatus(arr[i].status)
          arr[i].identity = getIdentity(arr[i].user.user_identity)
      }
      return arr
    }
  }
}
</script>

<style scoped>

</style>
