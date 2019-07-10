<template>
  <div class="tcontent">
    <div class="table-header clearfix">
      <el-breadcrumb class="breadcrumb"  separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>商品库</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button class="add fr" type="primary" icon="el-icon-plus" @click="showCard()">添加商品</el-button>
  </div>

    <v-screen :screen="screenQuery" @query="onQuery" ></v-screen>

    <el-table :data="goodslist" border style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column  prop="image" label="图片" >
        <template slot-scope="scope">
          <img :src="scope.row.image" width="40"  class="head_pic"/>
        </template>
      </el-table-column>
      <el-table-column  prop="goods_name" label="商品名称" ></el-table-column>
      <el-table-column  prop="subtitle" label="商品标题" ></el-table-column>
      <el-table-column  prop="supplier" label="前端供应商名称" ></el-table-column>
      <el-table-column  prop="supplier_title" label="后端供应商名称" ></el-table-column>
      <el-table-column  prop="cate" label="分类名称" ></el-table-column>
      <el-table-column  prop="status" label="状态" >
        <template slot-scope="scope">
          <el-switch v-model="scope.row.status" @change="statusChange(scope.row.id,scope.row.status)" :active-value="1" :inactive-value="2"></el-switch>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作"  width="350">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="gogoodslInfo(scope.row.id)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <v-pagination @pageChange="pageChange" :num='num' :total="total"></v-pagination>

    <v-card name='添加商品基本信息' width="100" :cardStatus="cardStatus" :ruleType="ruleType" :ruleForm="ruleForm" :rules="rules" @sumbit="sumbit" @hideCard="hideCard"></v-card>

  </div>
</template>

<script>
import vScreen from '../../component/screen'
import vPagination from '../../component/pagination'
import vCard from '../../component/card'
export default {
  data(){
    return {
      num:1,
      cardStatus:false,
      ruleForm:{},
      rules:['goods_name','supplier_id','cate_id','image'],
      ruleType:{
        'goods_name':{
          type:'input',
          label:'商品名称',
          placeholder:'请输入商品名称'
        },
        'subtitle':{
          type:'input',
          inpType:'textarea',
          label:'商品标题',
          placeholder:'请输入商品标题'
        },
        'supplier_id':{
          type:'select',
          label:'供应商',
          placeholder:'请选择供应商',
          filterable:true,
          val:'id',
          lab:'name',
          option:[]
        },
        'cate_id':{
          type:'cascader',
          label:'三级分类',
          placeholder:'请选择三级分类',
          props:{
            value:'id',
            label:'type_name',
            children:'_child',
            emitPath:false
          },
          option:[]
        },
        'image':{
          type:'image',
          label:'产品标题图',
          placeholder:'请上传图片'
        }
      },
      screen:{
        page:1,
        page_num:10
      },
      screenQuery:[{
        ref:'goods_name',
        label:'商品名称',
        placeholder:'请输入商品名称',
        type:'input',
        content:'',
      },{
        ref:'supplier_name',
        label:'前端供应商名称',
        type:'input',
        content:'',
        placeholder:'请输入前端供应商名称'
      },{
        ref:'supplier_title',
        label:'后端供应商名称',
        type:'input',
        content:'',
        placeholder:'请输入后端供应商名称'
      },{
        ref:'status',
        label:'状态',
        type:'select',
        content:'',
        option:[{
            value: '',
            label: '全部'
        }, {
            value: 1,
            label: '已上架'
        }, {
            value: 2,
            label: '已下架'
        }]
      }],
      goodslist:[],
      total:0
    }
  },
  components:{
      vScreen,
      vPagination,
      vCard
  },
  mounted(){
    this.getgoodslist()
    this.getAllSuppliers()
    this.getAllCateList()
  },
  methods: {
    getAllSuppliers(){
      let that =this;
      that.$request({
        url: 'suppliers/getsuppliersall',
        success(res){
          that.ruleType['supplier_id'].option = res.data || []
        }
      })
    },
    getAllCateList(){
      let that =this;
      that.$request({
        url: 'category/allCateList',
        success(res){
          that.ruleType['cate_id'].option = res.data || []
        }
      })
    },
    gogoodslInfo(id){
      this.$router.push({ path: '/goodsList/goodDetails', query:{
        id:id
      } })
    },
    showCard(){
      this.ruleForm = {}
      this.cardStatus = true
    },
    hideCard(){
      this.cardStatus = false
    },
    statusChange(id,status){
      let that =this;
      that.$request({
        data: {
          id:id,
          type:status
        },
        form:3,
        url: 'goods/updowngoods',
        error(){
          that.getgoodslist()
        }
      })
    },
    sumbit(data){
      let that =this;
      that.$request({
        data: data.ruleForm,
        url: 'goods/saveaddgoods',
        form:1,
        success(res){
          that.ruleForm = {}
          that.getgoodslist()
          that.cardStatus = false
        }
      })
    },
    onQuery(screen){
      this.extend(this.screen,screen);
      this.screen.page = 1;
      this.num++
      this.getgoodslist();
    },
    extend(target, options) {
        for (name in options) {
            target[name] = options[name];
        }
        return target;
    },
    pageChange(obj){
        this.screen.page = obj.page
        this.getgoodslist()
    },
    getgoodslist(){
      let that =this;
      that.$request({
        data: that.screen,
        url: 'goods/getgoodslist',
        success(res){
          that.goodslist = res.data
          that.total = res.total || 0;
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
