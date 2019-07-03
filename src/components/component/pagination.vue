<template>
  <div class="flex-cen pagination">
      <el-pagination :hide-on-single-page="true" background @current-change="pageChange" ref="pagination"  layout="prev, pager, next" :total="vTotal"> </el-pagination>
    </div>
</template>

<script>
export default {
  props: ['total'],
  data(){
    return {
      vTotal:0
    }
  },
  watch: {
    'total': function(newVal){
        this.$refs.pagination.internalCurrentPage = 1;
        this.vTotal = this.total
    }
  },
  mounted(){
    this.vTotal = this.total
  },
  methods: {
    pageChange(val){
      this.$emit('pageChange',{
        page: val
      })
    }
  }
}
</script>

<style scoped>

</style>
