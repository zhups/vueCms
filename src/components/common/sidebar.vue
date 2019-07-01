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
        background: #324157;
       
    }
    .sidebar > ul {
        height:100%;
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
