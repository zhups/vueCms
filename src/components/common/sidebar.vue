<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item index="index">
                    <!-- <span class="sb-icon"><i class="material-icons">home</i></span> -->
                     <span class="sb-cn">首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <!-- <span class="sb-icon"><i class="el-icon-setting"></i></span> -->
                    <span class="sb-cn">权限管理</span>
                </template>
                <el-menu-item index="/member">成员管理</el-menu-item>
                <el-menu-item index="/group">组管理</el-menu-item>
                <el-menu-item index="/jurisdictionList">组管理</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <!-- <span class="sb-icon"><i class="el-icon-setting"></i></span> -->
                    <span class="sb-cn">金融管理</span>
                </template>
                <el-menu-item index="/recharge">充值管理</el-menu-item>
                <el-menu-item index="/becomeBoss">开通BOSS</el-menu-item>
                <el-menu-item index="/upgradeBoss">邀请成为BOSS</el-menu-item>
                <el-menu-item index="/cardbag">卡包</el-menu-item>
                <el-menu-item index="/withdraw">佣金提现</el-menu-item>
                <el-menu-item index="/bounty">奖励金提现</el-menu-item>
                <el-menu-item index="/addbankcard">添加银行</el-menu-item>
                <el-menu-item index="/bountyList">奖励金列表</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <!-- <span class="sb-icon"><i class="el-icon-setting"></i></span> -->
                    <span class="sb-cn">会员管理</span>
                </template>
                <el-menu-item index="/memberList">会员列表</el-menu-item>
                <el-menu-item index="/demotion">会员降级</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <!-- <span class="sb-icon"><i class="el-icon-setting"></i></span> -->
                    <span class="sb-cn">订单管理</span>
                </template>
                <el-menu-item index="/orderList">商品订单列表</el-menu-item>
                <el-menu-item index="/memberOrder">权益购买订单</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
                <template slot="title">
                    <!-- <span class="sb-icon"><i class="el-icon-setting"></i></span> -->
                    <span class="sb-cn">商品管理</span>
                </template>
                <el-menu-item index="/goodsList">商品库</el-menu-item>
                <el-menu-item index="/supplier">商品供应商</el-menu-item>
                <el-menu-item index="/goodsclassify">商品分类</el-menu-item>
                <el-menu-item index="/specifications">商品规格</el-menu-item>
                <el-menu-item index="/subject">商品专题</el-menu-item>
            </el-submenu>
            <el-submenu index="7">
                <template slot="title">
                    <!-- <span class="sb-icon"><i class="el-icon-setting"></i></span> -->
                    <span class="sb-cn">活动管理</span>
                </template>
                <el-menu-item index="/bossShare">BOSS分享钻石卡</el-menu-item>
                <el-menu-item index="/offline">线下活动</el-menu-item>
                <el-menu-item index="/lucky">抽奖活动</el-menu-item>
            </el-submenu>
            <el-submenu index="8">
                <template slot="title">
                    <!-- <span class="sb-icon"><i class="el-icon-setting"></i></span> -->
                    <span class="sb-cn">广告位管理</span>
                </template>
                <el-menu-item index="/homePage">首页管理</el-menu-item>
            </el-submenu>
            <el-submenu index="9">
                <template slot="title">
                    <!-- <span class="sb-icon"><i class="el-icon-setting"></i></span> -->
                    <span class="sb-cn">消息模板</span>
                </template>
                <el-menu-item index="/triggerList">触发列表</el-menu-item>
                <el-menu-item index="/conList">内容列表</el-menu-item>
                <el-menu-item index="/taskList">任务列表</el-menu-item>
            </el-submenu>
            <el-submenu index="10">
                <template slot="title">
                    <!-- <span class="sb-icon"><i class="el-icon-setting"></i></span> -->
                    <span class="sb-cn">供应商功能管理</span>
                </template>
                <el-menu-item index="/account">供应商账号</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
    export default {
        computed:{
            onRoutes(){
              // console.log(this.$route.path.match(/(\/[a-zA-Z]*)/))
              // return this.$route.path.replace('/','');
              return '/'+ this.$route.path.split('/')[1];
            }
        }
    }
</script>
<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 200px;
        left: 0;
        top: 66px;
        bottom:0;
       overflow: auto;
    }
    .sidebar > ul {
        height:100%;
        overflow: auto;
    }

   .el-menu-item, .el-submenu__title{
       font-size:14px;
     
   }
   .material-icons{
         vertical-align: middle;
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size:18px;
   }
</style>
