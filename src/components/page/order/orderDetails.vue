<template>
  <div class="tcontent">
    <div class="table-header clearfix">
      <el-breadcrumb class="breadcrumb"  separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>订单管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/orderList' }">商品订单列表</el-breadcrumb-item>
        <el-breadcrumb-item>订单详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  <div class="tabs">
    <template>
      <el-tabs class="eltabs" value="first" type="card" >
        <el-tab-pane label="订单信息" name="first">
          <el-form class="form" label-width="150px" >
            <el-form-item label="订单号:"><span class="text">{{order_info.order_no}}</span></el-form-item>
            <el-form-item label="下单日期:"><span>{{order_info.create_time}}</span></el-form-item>
            <el-form-item label="订单金额:"><span>{{order_info.order_money}}</span></el-form-item>
            <el-form-item label="商票抵扣金额:"><span>{{order_info.deduction_money}}</span></el-form-item>
            <el-form-item label="实际支付:"><span>{{order_info.pay_money}}</span></el-form-item>
            <el-form-item label="商品金额:"><span>{{order_info.goods_money}}</span></el-form-item>
            <el-form-item label="优惠金额:"><span>{{order_info.discount_money}}</span></el-form-item>
            <el-form-item label="支付类型:"><span>{{order_info.pay_type_text}}</span></el-form-item>
            <el-form-item label="第三方支付金额:"><span>{{order_info.third_money}}</span></el-form-item>
            <el-form-item label="第三方支付类型:"><span>{{order_info.third_pay_type}}</span></el-form-item>
            <el-form-item label="订单状态:"><span>{{order_info.order_status}}</span></el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="商品清单" name="second">
          <el-table :data="order_pack" class="table" border>
            <el-table-column type="index" label="序号"></el-table-column>
            <el-table-column  prop="goods_name" label="商品名称" >
            </el-table-column>
            <el-table-column  prop="sku_json" label="商品规格" ></el-table-column>
            <el-table-column  prop="goods_price" label="商品价格" ></el-table-column>
            <el-table-column  prop="goods_num" label="购买数量" ></el-table-column>
            <el-table-column  prop="integral" label="赠送积分" ></el-table-column>
            <el-table-column  prop="margin_price" label="利润" ></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="邮寄信息" name="third">
            <el-form class="form" label-width="150px" >
            <el-form-item label="收件人:"><span class="text">{{order_info.linkman}}</span></el-form-item>
            <el-form-item label="联系电话:"><span>{{order_info.linkphone}}</span></el-form-item>
            <el-form-item label="收货地址:"><span>{{order_info.province_name}} {{order_info.city_name}} {{order_info.area_name}} {{order_info.address}}</span></el-form-item>
            <el-form-item label="留言信息:"><span>{{order_info.deduction_money}}</span></el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="物流管理" name="fourth">
          <div class="express">
            <p class="no-deliver">还有<span>{{no_deliver_goods_num}}</span>个商品未发货<p>
              <div class="orderCard" v-for="(v,k) in logistics" :key="k">
                <el-card class="box-card" shadow="never">
                  <div slot="header" class="clearfix">
                    <span class="header">商品:{{v.id}}-{{v.goods_name}}</span>
                  </div>
                  <el-form label-width="80px" :model="v.express" :ref="'menu'+v.id" >
                    <el-form-item  label="快递公司" prop="express_key" :rules="[{ required: true, message: '快递公司不能为空', trigger: 'change' }]">
                      <el-select class="" v-model="v.express.express_key" placeholder="请选择快递公司">
                      <el-option v-for="item in options" :key="item.id" :label="item.type_name" :value="item.id">
                      </el-option>
                    </el-select>
                    </el-form-item>

                    <el-form-item  label="快递单号" prop="express_no" :rules="[{ required: true, message: '快递单号不能为空', trigger: 'blur' }]">
                      <el-input v-model="v.express.express_no" placeholder="请输入快递单号"></el-input>
                    </el-form-item>

                    <el-form-item class="flex-cen">
                      <el-button  type="primary" @click="sumbit(v.id,v.express.express_key,v.express.express_no,v.express.delivery)">确定</el-button>
                    </el-form-item>
                  </el-form>
                </el-card>
              </div>
            </div>
        </el-tab-pane>
      </el-tabs>
    </template>
</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      order_id:'',
      options:[
          { id: 'shunfeng', type_name: '顺丰速运' },
          { id: 'zhongtong', type_name: '中通快递' },
          { id: 'shentong', type_name: '申通快递' },
          { id: 'yunda', type_name: '韵达快递' },
          { id: 'tiantian', type_name: '天天快递' },
          { id: 'huitongkuaidi', type_name: '百世快递' },
          { id: 'ems', type_name: 'EMS' },
          { id: 'youshuwuliu', type_name: '优速物流' },
          { id: 'kuayue', type_name: '跨越速运' },
          { id: 'debangwuliu', type_name: '德邦物流' },
          { id: 'yuantong', type_name: '圆通速递' },
          { id: 'zhaijibian', type_name: '黑猫宅急便(宅急便)' },
          { id: 'ane66', type_name: '安能快递' },
          { id: 'youzhengguonei', type_name: '中国邮政' },
          { id: 'rufengda', type_name: '如风达' },
          { id: 'wanxiangwuliu', type_name: '万象物流' },
          { id: 'SJPS', type_name: '商家派送' }
      ],
      no_deliver_goods:[],
      no_deliver_goods_num:0,
      logistics:[],
      order_info:{},
      order_pack:[]
    }
  },
  components:{
      
  },
  mounted(){
    this.order_id = this.$route.query.id;
    this.getOrderInfo();
  },
  methods: {
    sumbit(id,key,express_no,bl){
      let that= this;
      that.$refs['menu'+id][0].validate((valid) => {
        if (valid) {
         let delivery = bl?'updateDeliverOrderGoods':'deliverOrderGoods'
         that.deliverOrderGoods(id,key,express_no,delivery)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    deliverOrderGoods(id,express_key,express_no,delivery){
      let that =this
      that.$request({
        data: {
          express_key:express_key,
          express_no:express_no,
          order_goods_id:id
        },
        url: 'Order/'+delivery,
        success(res){
          that.$message({message:'发货成功',type:'success' });
          that.getOrderInfo()
        }
      })
    },
    getOrderInfo(){
      let that =this
      that.$request({
        data: {
          id:that.order_id
        },
        url: 'Order/getOrderInfo',
        success(res){
          that.no_deliver_goods= res.no_deliver_goods;
          that.no_deliver_goods_num= res.no_deliver_goods_num;
          that.logistics= that.dislogistics(res.order_child,res.has_deliver_goods);
          that.order_info= res.order_info;
          that.order_pack= that.disorder_pack(res.order_pack);
          that.order_info.pay_type_text = that.order_info.pay_type ==1?'第三方支付':'商票';
          that.order_info.third_pay_type_text = that.getthirdpaytype(that.order_info.third_pay_type)
          that.order_info.order_status_text = that.getStatusText(that.order_info.order_status)
          
        }
      })
    },
    dislogistics(list=[],hasList=[]){
      let len1=list.length,arr=[],allExpress = this.IshasExpress(hasList);
      for(let i=0;i<len1;i++){
        let len3 = list[i].order_goods.length;
        for(let y=0;y<len3;y++){
          let tem = list[i].order_goods[y];
          tem.express = allExpress[list[i].order_goods[y].id] || {delivery: false};
          arr.push(tem)
        }
      }
      return arr
    },
    IshasExpress(list=[]){
      let allExpress = {};
      for(let i=0,len=list.length;i<len;i++){
        allExpress[list[i].goods.id] = list[i].goods.express;
        allExpress[list[i].goods.id].delivery = true
      }
      return allExpress
    },
    disorder_pack(data = []){
      let len=data.length,len1,arr = [];
      for(let i=0;i<len;i++){
        len1 = data[i].order_goods.length
        for(let y=0;y<len1;y++){
          arr.push(data[i].order_goods[y])
        }
      }
      return arr
    },
    getthirdpaytype: function(n) {
        let str = ''
        switch (parseInt(n)) {
            case 1:
                str = '支付宝'
                break;
            case 2:
                str = '微信'
                break;
            case 2:
                str = '银联'
                break;
            default:
                str = '意料之外的支付方式'
                break;
        }
        return str
    },
    getStatusText: function(n) {
        let str = ''
        switch (parseInt(n)) {
            case 1:
                str = '待付款'
                break;
            case 2:
                str = '订单已取消'
                break;
            case 3:
                str = '订单已关闭'
                break;
            case 4:
                str = '已付款'
                break;
            case 5:
                str = '已发货'
                break;
            case 6:
                str = '已收货'
                break;
            case 7:
                str = '待评价'
                break;
            case 8:
                str = '退款申请确认'
                break;
            case 9:
                str = '退款中'
                break;
            case 10:
                str = '退款成功'
                break;
            default:
                str = '意料之外的状态'
                break;
        }
        return str
    }
  }
}
</script>

<style scoped>
.tabs{
  background-color: #fff;
}
.eltabs{
  min-height: 700px;
}
.table{
  width: 95%;
  margin: 0 auto 20px;
}
.form span{
  font-size: 18px;
  color: #404040;
}
.text{
  font-size: 18px;
}
.express{
  padding: 15px;
}
.no-deliver{
  margin-left: 20px;
  font-size: 16px;
  margin-bottom: 15px;
}
.no-deliver span{
  color: #e61f18;
}
.orderCard{
  display: inline-block;
  float: left;
  width: 400px;
  margin: 10px 0 0 20px;
}
.box-card .header{
  font-size: 15px;
}
</style>
