<template>
  <div class="cen-card" v-if="cardStatus">
      <el-card class="box-card" >
        <div slot="header" class="clearfix">
            <span>{{cName}}</span>
          </div>
        <el-form :label-width="cWidth+'px'" :model="cRuleForm" ref="cRuleForm"  :rules="cRules">
          <el-form-item v-for="(v,k) of cRuleType" :key="k" :label="v.label" :prop="k" >

            <el-input v-if="v.type === 'input'" v-model="cRuleForm[k]" :type='v.inpType || "text"' :placeholder="v.placeholder"></el-input>

            <el-input v-if="v.type === 'number'" v-model.number="cRuleForm[k]" type='number' :placeholder="v.placeholder"></el-input>

            <el-select v-if="v.type === 'select'" class="" v-model="cRuleForm[k]" :placeholder="v.placeholder">
              <el-option v-for="item in v.option" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>

            <v-upload v-if="v.type === 'image'" @upresult='upresult' :num='k' :image="cRuleForm[k]"></v-upload>

          </el-form-item>
          <el-form-item class="flex-cen">
            <el-button  type="primary" @click="sumbit('cRuleForm')">确定</el-button>
            <el-button  @click="cHideCard()">取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
  </div>
</template>

<script>
import vUpload from './upload';
export default {
  props: ['name','width','cardStatus','ruleForm','rules','ruleType'],
  data(){
    return {
      toggleCard:false,
      cWidth:80,
      cName:'',
      cRuleForm:{},
      cRuleType:{},
      cRules:{}
    }
  },
  watch: {
    'name':function(newVal){
        this.cName = this.name
    },
    'width':function(newVal){
        this.cWidth = this.width
    },
    'ruleType':function(newVal){
        this.cRuleType = this.ruleType
    },
    'ruleForm': function(newVal){
        this.cRuleForm = JSON.parse(JSON.stringify(this.ruleForm)) 
    },
    'rules': function(newVal){
         this.disrules()
    },
  },
  mounted(){
    this.cName = this.name
    this.cWidth = this.width || 80
    this.cRuleType = this.ruleType
    this.cRuleForm = JSON.parse(JSON.stringify(this.ruleForm))
    this.disrules()
  },
  components:{    
      vUpload
  },
  methods: {
    upresult(data){
      this.cRuleForm[data.num] = data.image_path
      console.log(this.cRuleForm)
    },
    disrules(){
      let rules=this.rules,len=rules.length;
      for(let i=0;i<len;i++){
        this.cRules[rules[i]]=[];
        let trigger = this.getType(this.cRuleType[rules[i]].type)
        this.cRules[rules[i]].push({
          required:true,
          message:this.cRuleType[rules[i]].placeholder,
          trigger:trigger
        })
        // if(this.cRuleType[rules[i]].type === 'number'){
        //   this.cRules[rules[i]].push({
        //     type: 'number', 
        //     message: '输入值必须为数字值'
        //   })
        // }
      }
    },
    getType(str){
      let text = '';
      switch(str){
        case 'input':
          text = 'blur'
          break;
        case 'number':
          text = 'blur'
          break;
        case 'select':
          text = 'change'
          break;
      }
      return text
    },
    cHideCard(){
      this.$emit('hideCard')
    },
    sumbit(name){
      let that= this;
      that.$refs[name].validate((valid) => {
        if (valid) {
          let cRuleForm_copy = that.wipeImage()
          that.$emit('sumbit',{
            ruleForm: cRuleForm_copy
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    wipeImage(){
      let cRuleType_copy= this.cRuleType,cRuleForm_copy = JSON.parse(JSON.stringify(this.cRuleForm));
      for(let item in cRuleType_copy){
        (cRuleType_copy[item].type == 'image') && (cRuleForm_copy[item] === this.ruleForm[item]) && (cRuleForm_copy[item]='')
      }
      return cRuleForm_copy
    }
  }
}
</script>

<style scoped>

</style>
