<template>
    <div class="wrapper">
        <v-head :name='name'></v-head>
         <v-sidebar></v-sidebar>
        
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import vHead from './header';
    import vSidebar from './sidebar';
    export default {
      data () {
        return {
          name:''
        }
      },
      mounted () {
        this.getuserInfo()
      },
      methods: { 
        getuserInfo(){
          let that = this;
          that.$request({
            url:'admin/getadmininfo',
            success:function(res){
                that.$glbalData.userInfo = res.data || {};
                that.name = res.data.admin_name
            }
          })
        }
      },
      components:{
          vHead, vSidebar
      }
    }
</script>
